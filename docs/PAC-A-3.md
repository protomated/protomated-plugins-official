# Engineer Onboarding: Claude Plugin Catalog (Cowork/Desktop)
Read this before you pull your first Claude plugin issue. Bookmark it. It is the reference for how we build the plugin half of the catalog. Companion to [Engineer Onboarding: n8n Template Catalog](https://protomated.youtrack.cloud/articles/PAC-A-1) — read that one first if you're new to the project; this one covers only what's different for Claude plugins.

## What this project is

Since the project renamed to Protomated Automation Catalog (PAC), the catalog has two build tracks living side by side: n8n workflows (the original track, see PAC-A-1) and Claude Desktop/Cowork plugins (this track). Same lead-magnet logic — a solo/small firm attorney installs something free, gets real value, hits a natural limitation, and that limitation is the Quick-Win Build or Done-for-You conversation. The difference is the technology and, critically, what the tool is allowed to do.

## Why a second track exists

n8n workflows orchestrate; they don't reason. Claude plugins reason and draft. That capability gap is why PAC-61 (the epic for this track) exists: things the n8n track's hard rule explicitly excludes — contract review, demand-letter drafting, research-memo drafting, document assembly — are things a Claude Skill can do safely, with a human always reviewing before anything is sent or filed. See the epic (PAC-61) for the full research behind this: Anthropic's own "Claude for Legal" suite proved the enterprise version of this thesis; our gap is solo/small firms across family law, PI, criminal defense, estate/probate, immigration, real estate, and small-business work.

## Your role

You pull a pending plugin issue from this track (PAC-62 through PAC-80, all children of PAC-61). You build the Skill (and any bundled MCP config). You test it end to end inside Cowork. You write a short setup guide. You record a Loom walkthrough. You move the issue to Growth Review when it passes the quality bar below.

## The rule that's different from the n8n track

PAC-A-1's hard rule is "never touch the client's legal work." That rule still applies in full to the n8n track. On this track, it's replaced by a narrower, more demanding rule: **assisted draft, always reviewed.** A Claude plugin may draft, analyze, summarize, or reason about legal content — contracts, demand letters, research memos, court filings — but:

1. It never sends, files, submits, or executes anything automatically. Every output is a draft awaiting attorney review.
2. It never invents facts not present in the input the attorney supplied. Missing information gets flagged, not guessed.
3. It carries a hard-coded, visible disclaimer: "Not legal advice — review before use" (or the issue-specific variant, e.g. the research memo's citation-verification checklist).
4. If you're unsure whether a feature crosses from "assisted draft" into "the tool is making the legal judgment," stop and flag the growth manager — same escalation path as the n8n track's compliance stop.

## Building a Skill

Each plugin issue's description gives you the shape (what it reads, what it produces, the compliance note). Structure:

- `SKILL.md` — the skill's instructions, following Claude's skill-authoring conventions (name, description that triggers correctly, the actual instructions).
- `.mcp.json` — only if the skill needs a connector (Gmail, Google Calendar; filesystem access is implicit via Cowork's attached-workspace-folder model, no separate config needed for that one).
- A short `playbook.md` or reference file where the issue calls for a configurable checklist (e.g. PAC-67 Contract Review's clause checklist, PAC-63's state bar-rule reference).
- The mandatory disclaimer text, placed where the model can't skip past it — in the SKILL.md instructions themselves, not just in the setup guide.

Test inside Cowork, not just in isolation — attach a real (anonymized/synthetic) workspace folder and run the full flow a firm would run, since Cowork's filesystem access model (explicit attached folders only, no implicit reach) changes how a skill discovers its inputs compared to a generic Claude Skill.

## Definition of done for your stage (In Development)

The skill is built and tested inside Cowork against realistic synthetic data. A setup guide draft exists (install steps, any MCP connectors to authorize, first-run walkthrough). A Loom walkthrough is recorded. The disclaimer/compliance note is present and correctly worded for that issue. The plugin passes the quality bar below. The custom fields on the issue are correct (Build Format = Claude Plugin, Tier, Pillar, Practice Area, Catalog Channel, Complexity, Upsell Target).

## The quality bar (same five tests as the n8n track, applied to this track's rule)

1. Money or leak test — same as PAC-A-1.
2. Compliance test — for this track: does it carry the disclaimer, does it avoid inventing facts, does it never auto-send/auto-file? (Not "does it avoid legal substance" — it's allowed to touch legal substance here.)
3. Searchability test — same as PAC-A-1.
4. Deployability test — a firm gets value within the setup time stated on the issue (usually 3–10 minutes), installing via Cowork's Customize → Plugins flow, no terminal.
5. Upsell test — same as PAC-A-1.

## Packaging and distribution

FREE-tier plugins ship in the Protomated plugin marketplace repo (build-out tracked at PAC-83 — `marketplace.json`, installable via Customize → Plugins → Browse or by adding the repo directly). Some FREE-tier plugins with no ambiguous drafting/compliance surface (currently flagged: PAC-73 Meeting Prep Brief, PAC-77 New-Matter Organizer) are also submission candidates for Anthropic's Legal Builder Hub registry (tracked at PAC-84) — a second, higher-reach distribution surface. BUILD-tier plugins (PAC-67, PAC-70, PAC-75, PAC-76) get a marketing landing page like everything else, but the actual skill is customized and delivered as part of a paid engagement, not published to either marketplace.

Fill the `Plugin Repo/Marketplace URL` custom field once the skill is packaged and listed, mirroring how the n8n track uses its listing-URL field.

## The catalog

PAC-61 (epic) → PAC-62 through PAC-80 (one plugin per issue, plus PAC-80 the Legal Billing and Time Tracker moved over from the old PRTCONTENT-53). PAC-83/84/85 are this track's own foundation work (marketplace repo, Legal Builder Hub submission, this guide). Everything else — pillars (Get/Convert/Keep/Ops/Authority), tiers (Free/Build), practice areas, the growth/publish pipeline — works exactly like the n8n track; see PAC-A-2 for the growth manager's half of the process, now covering both tracks.