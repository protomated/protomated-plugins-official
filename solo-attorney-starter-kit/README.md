# Solo Attorney Starter Kit — Claude Plugin

A Claude plugin that turns your local matter files, Gmail, and Google Calendar into a solo attorney operations assistant. Organizes new matters, surfaces court deadlines, and drafts engagement letters, billing narratives, and pre-meeting briefs — from your files, in under five minutes of setup.

Each of the five skills is also available as a standalone plugin from the same [Protomated plugin marketplace](https://github.com/protomated/protomated-plugins-official).

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

Using a consumer plan with client-privileged content risks waiving attorney-client privilege and may violate your ethical obligations to your clients. Consult your state bar's AI ethics guidance before proceeding.

> **If you're not sure which plan you're on:** Open Claude Desktop → Help → About. If it says "Claude Pro," you are on a consumer plan. Upgrade to Claude for Work or obtain API access before connecting client email or matter files.

### 2. Informed consent — update your engagement letter

**ABA Formal Op. 512 (July 2024)** requires attorneys using AI tools in client work to obtain client informed consent where the AI tool may access confidential information.

Before using this plugin on any active matter, add AI-tool disclosure language to your engagement letters. Suggested language for new clients:

> "Our firm uses AI-assisted drafting and research tools, including Claude, to improve the efficiency of certain practice tasks. These tools process information under agreements that protect confidentiality consistent with our professional obligations. We will not use AI tools in your matter in any way that compromises the attorney-client privilege or your confidential information."

Consult your state bar's guidance on AI disclosure obligations — requirements vary by jurisdiction.

### 3. Every AI output requires your review

This plugin is a drafting tool. It does not provide legal advice. Every document it generates must be reviewed and approved by you, a licensed attorney, before use.

The plugin enforces this with a required header and footer on every output:

> ⚠️ AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED

Do not remove or bypass these markers.

### 4. No action without your confirmation

The plugin is instructed to request your explicit in-conversation confirmation before sending any email, creating any calendar event, or writing any file. If you are ever prompted by the assistant to confirm a send or write action, read the confirmation carefully before responding.

---

## Installation (5 minutes)

### Option A — Plugin marketplace (recommended)

**Cowork:** Customize → Plugins → Browse plugins → add `https://github.com/protomated/protomated-plugins-official` → install **Solo Attorney Starter Kit**.

**Claude Code (terminal):**

```
/plugin marketplace add https://github.com/protomated/protomated-plugins-official
/plugin install solo-attorney-starter-kit@protomated-plugins-official
```

Restart Claude Code after installing.

### Option B — Direct ZIP install

1. Download `solo-attorney-starter-kit-v*.zip` from the [Releases page](https://github.com/protomated/protomated-plugins-official/releases).
2. Double-click the `.zip` file, or drag it into Claude Desktop's **Extensions** panel.
3. Claude Desktop will install the plugin and prompt you to connect the required services.

### Connect the three connectors

1. Go to **Settings → Connectors**.
2. **Gmail** — Connect, sign in with the Google account holding your client correspondence. Anthropic manages the OAuth credentials — your Google password is never shared with Protomated.
3. **Google Calendar** — Connect with the same account. Used read-only to surface deadline gaps; events are created only with your confirmation.
4. **Filesystem** — Connect and select the folder where your matter files live, e.g. `~/Matters`. Only files inside this folder are accessible to the plugin.

> **Recommended folder structure:**
> ```
> ~/Matters/
> ├── Smith-John-PI/
> │   ├── matter-profile.md
> │   └── notes/
> ├── Acme-Contract-Dispute/
> │   ├── matter-profile.md
> │   └── engagement-letter-draft-2026-05-01.md
> └── ...
> ```
> Each matter gets its own folder. Run `/new-matter-organizer` on a new matter to create the `matter-profile.md` anchor file that all other skills read from.

### Verify

Open a new chat and type `/skills`. You should see all five skills listed. Run `/new-matter-organizer` on a test matter to verify Filesystem access is working.

See [CONNECTORS.md](CONNECTORS.md) for troubleshooting.

---

## Skills

### `/new-matter-organizer` — New Matter Organizer

Runs structured intake, drafts a conflict-check memo, and creates `matter-profile.md` plus an opening checklist. **Run this first on every new matter** — the other four skills read the profile it creates.

```
/new-matter-organizer
/new-matter-organizer ~/Matters/New-Client-Folder
```

### `/court-deadline` — Court Deadline Calendar

Surfaces upcoming court deadlines, filing windows, and statute-of-limitations concerns from your matter files and Google Calendar. It does not calculate deadlines on your behalf — it surfaces dates for you to verify against your jurisdiction's rules. Creates calendar events only with your confirmation.

```
/court-deadline Smith-John-PI
```

### `/engagement-letter` — Engagement Letter Drafter

Drafts a retainer and engagement letter from matter intake data. Covers scope of representation, fee structure (hourly, flat fee, or contingency), client obligations, and required disclosures. Requires your confirmation before saving.

```
/engagement-letter ~/Matters/Johnson-Family-Law
```

### `/billing-narrative` — Billing Narrative Drafter

Turns raw time-entry notes into polished, client-ready billing narratives — specific, defensible, and free of block-billing flags. Saves only with your confirmation.

```
/billing-narrative Smith-John-PI
```

### `/meeting-prep` — Meeting Prep Brief

Pulls context from your matter folder and recent email to produce a one-page brief tailored to the meeting type: client check-in, deposition, mediation, settlement conference, or court appearance. Read-only — no files are written.

```
/meeting-prep Smith-John-PI deposition
```

---

## How It Works

This plugin connects Claude to things you already have: your local matter files, your Gmail, and your Google Calendar. There is no cloud database, no subscription, and no Protomated server involved in processing your client data.

```
Your matter files (Filesystem) ──┐
Your Gmail (Gmail connector) ────┼──▶ Claude ──▶ Your review ──▶ Action
Your calendar (Google Calendar) ─┘
```

All processing happens inside your Claude session. See [CONNECTORS.md](CONNECTORS.md) for data handling details.

---

## Want a Custom Skill Library Built for Your Practice?

This kit covers five core workflows. The typical solo attorney practice has 15–20 more: jurisdiction-specific court filings, client intake questionnaires tuned to your practice areas, automated calendar syncing with case deadlines, Clio or Filevine integration, and more.

**Protomated builds custom Claude skill libraries for solo and small-firm attorneys: $3,000–$6,000 depending on scope.**

[Book a 30-minute call →](https://protomated.com/call)

---

## License

Apache 2.0. See [LICENSE](LICENSE).

## Feedback and Issues

[GitHub Issues](https://github.com/protomated/protomated-plugins-official/issues) | [hello@protomated.com](mailto:hello@protomated.com)
