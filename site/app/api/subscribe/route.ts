export const runtime = "edge";

// Best-effort per-isolate rate limit. Cloudflare may spin up multiple
// isolates, so this is not a hard guarantee — it stops casual abuse and
// runaway clients without needing KV. For stronger protection add
// Cloudflare Turnstile or a WAF rate-limiting rule.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, { count: number; windowStart: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now - entry.windowStart > WINDOW_MS) {
    hits.set(ip, { count: 1, windowStart: now });
    return false;
  }
  entry.count++;
  return entry.count > MAX_PER_WINDOW;
}

export async function POST(request: Request): Promise<Response> {
  const ip = request.headers.get("cf-connecting-ip") ?? "unknown";
  if (rateLimited(ip)) {
    return Response.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  const raw = await request.text().catch(() => "");
  if (raw.length > 1_000) {
    return Response.json({ error: "Request too large." }, { status: 413 });
  }

  let body: { email?: unknown } = {};
  try {
    body = JSON.parse(raw);
  } catch {
    // fall through — validation below rejects
  }
  const email: unknown = body?.email;

  if (
    typeof email !== "string" ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return Response.json({ error: "Valid email required." }, { status: 400 });
  }

  const apiKey = process.env.KIT_API_KEY;
  const formId = process.env.KIT_FORM_ID;

  if (!apiKey || !formId) {
    console.error("KIT_API_KEY or KIT_FORM_ID not set");
    return Response.json({ error: "Configuration error." }, { status: 500 });
  }

  const kitRes = await fetch(
    `https://api.kit.com/v4/forms/${formId}/subscribers`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ email_address: email }),
    }
  );

  if (!kitRes.ok) {
    console.error("Kit API error:", kitRes.status, await kitRes.text());
    return Response.json(
      { error: "Could not subscribe. Please try again." },
      { status: 502 }
    );
  }

  return Response.json({
    ok: true,
    downloadUrl: process.env.PUBLIC_DOWNLOAD_URL ?? "",
  });
}
