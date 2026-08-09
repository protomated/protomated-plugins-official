# Solo Attorney Claude Starter Kit — Claude Desktop Plugin

A Claude Desktop plugin that turns your local matter files, Gmail, and Google Calendar into a solo attorney operations assistant. Eight pre-built skills: intake summaries, engagement letters, court deadline reasoning, meeting prep briefs, billing narrative drafting, new-matter setup, a flat-fee repricing calculator, and a verified-source legal research memo drafter — from your own files, in under five minutes of setup.

**Distributed by [Protomated](https://protomated.com) as a free download.**

---

## ⚠️ Required: Read This Before You Install

**This section is not boilerplate. Read it before connecting client data.**

### 1. You must be on a qualifying Claude plan

Do NOT use this plugin for client work on a consumer Claude plan (claude.ai Personal or Claude Pro). Consumer plans do not provide a Data Processing Agreement (DPA) covering client-privileged content.

You must be on one of the following before using this plugin with real client materials:

- **Claude for Work** (formerly Claude.ai Teams)
- **Claude Team or Enterprise**
- **Claude API** (with a signed DPA from Anthropic)

Using a consumer plan with client-privileged content risks waiving attorney-client privilege and may violate your ethical obligations to your clients. See *Heppner v. Doe* (S.D.N.Y. Feb. 2026) and your state bar's AI ethics guidance before proceeding.

> **If you're not sure which plan you're on:** Open Claude Desktop → Help → About. If it says "Claude Pro," you are on a consumer plan. Upgrade to Claude for Work or obtain API access before connecting client email or matter files.

### 2. Informed consent — update your engagement letter

**ABA Formal Op. 512 (July 2024)** requires attorneys using AI tools in client work to obtain client informed consent where the AI tool may access confidential information.

Before using this plugin on any active matter, add AI-tool disclosure language to your engagement letters. Suggested language for new clients:

> "Our firm uses AI-assisted drafting and research tools, including Claude Desktop, to improve the efficiency of certain practice tasks. These tools process information under agreements that protect confidentiality consistent with our professional obligations. We will not use AI tools in your matter in any way that compromises the attorney-client privilege or your confidential information."

Consult your state bar's guidance on AI disclosure obligations — requirements vary by jurisdiction.

### 3. Every AI output requires your review

This plugin is a drafting tool. It does not provide legal advice. Every document it generates — status updates, demand letters, engagement letters, intake summaries, and meeting briefs — must be reviewed and approved by you, a licensed attorney, before use.

The plugin enforces this with a required header and footer on every output:

> ⚠️ AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED

Do not remove or bypass these markers.

### 4. No action without your confirmation

The plugin is instructed to request your explicit in-conversation confirmation before sending any email or writing any file. If you are ever prompted by the assistant to confirm a send or write action, read the confirmation carefully before responding.

---

## Installation (5 minutes)

### Step 1 — Download and install

1. Download `solo-attorney-starter-kit.zip` from the [Releases page](https://github.com/protomated/claude-solo-attorney-starter-kit/releases).
2. Double-click the `.zip` file, or drag it into Claude Desktop's **Extensions** panel.
3. Claude Desktop will install the plugin and prompt you to connect the required services.

### Step 2 — Connect Gmail

1. Go to **Claude Desktop → Settings → Connectors**.
2. Find **Gmail** and click **Connect**.
3. Sign in with the Google account that holds your client correspondence.
4. Grant the requested permissions. Anthropic manages the OAuth credentials — your Google password is never shared with Protomated.

### Step 3 — Connect Filesystem (your matters folder)

1. In **Settings → Connectors**, find **Filesystem** and click **Connect**.
2. Select the folder on your computer where your matter files live. Example: `~/Matters` or `~/Documents/Cases`.
3. Only files inside this folder will be accessible to the plugin.

> **Recommended folder structure:**
> ```
> ~/Matters/
> ├── templates/
> │   └── engagement-letter-template.md
> ├── pricing/
> │   └── standard-nda-review-repricing-model-2026-07-30.csv
> ├── Smith-John-PI/
> │   ├── intake-summary.md
> │   ├── tasks.md
> │   ├── medical/
> │   ├── correspondence/
> │   └── research/
> │       ├── sources/
> │       └── liability-memo.md
> ├── Acme-Contract-Dispute/
> │   ├── intake-summary.md
> │   ├── tasks.md
> │   └── pleadings/
> └── ...
> ```
> Run `/new-matter-organizer` to create this structure for a new matter, then `/intake-summary` to populate the anchor file all other skills read from. If you have your own engagement-letter template, save it once as `templates/engagement-letter-template.md` (or `.txt`/`.docx`) and `/engagement-letter` will use it automatically for every matter. `/flat-fee-calculator` saves its CSV models to a top-level `pricing/` folder since a repricing model applies across matters of a given type, not to a single matter. `/research-memo` reads whatever source documents you attach in a matter's `research/sources/` folder (cases, statutes, briefs) and saves the drafted memo alongside it in `research/`.

### Step 4 — Connect Google Calendar

1. In **Settings → Connectors**, find **Google Calendar** and click **Connect**.
2. Sign in with the same Google account you use for scheduling.
3. This connector is used by `/court-deadline` to create deadline events after your confirmation.

### Step 5 — Verify

Open a new Claude Desktop chat. Type `/skills`. You should see all eight skills listed. Run `/intake-summary` on a test matter to verify Filesystem access is working.

See [CONNECTORS.md](CONNECTORS.md) for troubleshooting.

---

## Skills

### `/intake-summary` — Intake Summary Processor

**Run this first on any new matter.** Converts raw intake notes or pasted consultation notes into a structured case brief: parties, facts, claims, deadlines, evidence checklist, and next steps. Flags statute-of-limitations issues and surfaces names for a conflicts check. The output becomes the `intake-summary.md` that all other skills read from.

**Use when:** You've just finished an initial consultation and need to open the file.

```
/intake-summary
[paste your raw notes]

/intake-summary ~/Matters/New-Client-Folder
```

---

### `/engagement-letter` — Engagement Letter Drafter

Drafts a retainer and engagement letter from intake data. If you've saved your own template at `templates/engagement-letter-template.md` (or `.txt`/`.docx`) at the top of your Matters folder, or in the specific matter folder, the skill fills in your own wording instead of the built-in generic letter. Covers scope of representation, fee structure (hourly, flat fee, or contingency), client obligations, and required disclosures. Requires your confirmation before saving.

**Use when:** A new client is ready to retain you.

```
/engagement-letter New-Client-Johnson
/engagement-letter ~/Matters/Johnson-Family-Law
```

---

### `/court-deadline` — Court Deadline Reasoning & Calendar Drafter

Computes a court or filing deadline from a trigger date and the rule you provide. Shows every step of the reasoning so you can verify it. Drafts a Google Calendar event — you confirm before it is created. Does not maintain a jurisdiction-specific rule database; you supply the rule and verify the output.

**Use when:** You need to calculate a response deadline, appeal window, or statute-of-limitations date and want the reasoning shown step by step.

```
/court-deadline "served May 12" "responsive pleading due 21 days after service, excluding weekends and federal holidays"
```

---

### `/meeting-prep` — Meeting Prep Brief Generator

Pulls context from your matter folder and recent email to produce a one-page brief tailored to the meeting type: client check-in, deposition, mediation, settlement conference, or court appearance. Read-only — no files are written.

**Use when:** You have five minutes before a meeting and need to get up to speed fast.

```
/meeting-prep Smith-John-PI deposition
/meeting-prep ~/Matters/Acme-Contract-Dispute mediation
```

---

### `/billing-narrative` — Billing Narrative Drafter

Drafts a billing-code-appropriate time narrative and suggests a time increment from your rough notes, an email thread, or a description of work performed. You confirm accuracy and paste into your billing system (Clio, MyCase, PracticePanther, etc.).

**Use when:** You've completed billable work and need a clean, professional time entry without spending ten minutes writing it yourself.

```
/billing-narrative "reviewed deposition transcript, drafted summary memo, called client re: settlement offer — approx 2 hrs"
```

---

### `/new-matter-organizer` — New-Matter Setup & Document Organizer

Creates the standard folder tree for a new matter (based on practice area), populates a starter task checklist, and sorts any existing documents into the right sub-folders. Proposes everything first — no folders or files are created without your confirmation.

**Use when:** Opening a new client file and you want a consistent, organized matter folder from day one.

```
/new-matter-organizer "Smith-John-PI" "personal injury"
/new-matter-organizer "Nguyen-Divorce-2026" "family law"
```

---

### `/flat-fee-calculator` — AI-Adjusted Flat-Fee Repricing Calculator

Builds a revenue-impact model comparing hourly billing to flat-fee/value pricing for tasks you've sped up with AI tools. Takes your current hourly rate, typical task time before and after using AI (including this kit's own skills), and matter volume, then outputs a CSV you can open in Excel or Sheets with several flat-fee price points that preserve margin. A pricing/business model — not legal advice.

**Use when:** You suspect hourly billing is handing AI-driven time savings back to clients as an unrequested discount, and want the numbers before deciding whether to reprice.

```
/flat-fee-calculator "standard NDA review"
/flat-fee-calculator "uncontested divorce document package"
```

---

### `/research-memo` — Verified-Source Legal Research Memo Drafter

Drafts a legal research memo citing only the source documents (cases, statutes, briefs, contracts) you've attached to a workspace folder. No open web search, no case-law database, and no citation drawn from general model knowledge — anything your sources don't support is flagged, not filled in. Every citation is anchored to a specific document and page/paragraph, and the memo ends with a mandatory checklist so you can verify each one before relying on it.

**Use when:** You have the cases, statutes, or briefs on hand and want a first-draft memo built strictly from them, with a built-in check against hallucinated citations.

```
/research-memo "Does the indemnification clause in the Acme MSA cover third-party IP claims?" — ~/Matters/Acme-Contract/sources
/research-memo "Is the traffic stop supported by reasonable suspicion under these facts?" — ~/Matters/Delgado-Auto-2026/sources
```

---

## How It Works

This plugin connects Claude Desktop to three things you already have: your local matter files, your Gmail, and your Google Calendar. There is no cloud database, no subscription, and no Protomated server involved in processing your client data.

```
Your matter files (Filesystem) ──┐
                                  │
Your Gmail (Gmail connector) ─────┼──▶ Claude Desktop ──▶ Your review ──▶ Action
                                  │
Your Calendar (Google Calendar) ──┘
```

All processing happens inside your Claude Desktop session. See [CONNECTORS.md](CONNECTORS.md) for data handling details.

---

## Want a Custom Skill Library Built for Your Practice?

This kit covers eight core workflows. The typical solo practice has 15–20 more: jurisdiction-specific court filings, intake questionnaires tuned to your practice areas, Clio or Filevine integration, and skills built to your exact voice and playbook.

**Protomated builds custom Claude Desktop skill libraries for solo and small-firm attorneys: $3,000–$6,000 depending on scope.**

[Book a 30-minute call →](https://protomated.com/call)

---

## License

Apache 2.0. See [LICENSE](LICENSE).

## Feedback and Issues

[GitHub Issues](https://github.com/protomated/claude-solo-attorney-starter-kit/issues) | [hello@protomated.com](mailto:hello@protomated.com)
