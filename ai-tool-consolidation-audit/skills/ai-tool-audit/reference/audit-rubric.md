# AI Tool Audit Rubric

Reference for `/ai-tool-audit`. Defines the data-handling rating scale, the inventory row format, and the interview categories used to build it. This file contains no vendor-specific claims — no named product's data policy is asserted here or anywhere in this skill. Vendor terms change; a specific tool's current data-handling status comes only from what the firm reports for that tool, or is marked UNCONFIRMED.

---

## Data-handling status — rate every tool, never skip one

A rating is only valid if it's tied to what the firm actually reported for that specific tool. If the firm doesn't know a tool's data-handling terms, the answer is UNCONFIRMED — never a guess dressed up as one of the other three.

### 🟢 Confirmed appropriate

The data sensitivity reported for this tool matches a confirmed adequate protection level — a business or enterprise tier consistent with a signed data-processing agreement (DPA) or equivalent — or the tool touches no client-identifying, privileged, or case-related data at all (e.g., a marketing-copy tool that never sees client information).

### 🟡 Partial / mixed

A paid or business tier is confirmed in use, but a signed DPA (or equivalent) isn't confirmed either way — or the tool only handles lower-sensitivity data (internal scheduling, non-client marketing) on a consumer tier, which is a gap worth closing but not an acute exposure. A confirmed DPA is the fact that moves a tool from 🟡 to 🟢 once the firm verifies it; a still-unconfirmed detail beyond the DPA (e.g., exactly how the vendor uses inputs for training) doesn't have to hold the rating at 🟡 by itself — note it as a follow-up worth asking the vendor, but let the DPA answer the sensitivity-vs-protection question.

### 🔴 Confirmed risk

Client-identifying, privileged, or case-related content is confirmed passing through a tool on a consumer tier with no confirmed DPA — or the firm itself names this tool as a known concern. State the specific data type and the specific gap (e.g., "client names entered into a free-tier tool with no confirmed DPA").

### ⚪ UNCONFIRMED

The firm doesn't currently know this tool's data-handling terms. Say so plainly and tell them to verify directly with the vendor or their account admin. Never assign 🟢/🟡/🔴 to fill this gap — an unconfirmed status is a valid, expected, and common answer, not a failure to record.

---

## Inventory row format

Each row in the Tool Inventory table carries, at minimum:

- **Tool** — the name as the firm uses it.
- **Used for** — the specific workflow or task; a tool with no stated use case isn't rated yet, ask first.
- **Who uses it** — attorneys, support staff, or both.
- **Data touched** — none/internal-only, client-identifying, privileged/case-related, or billing/financial. Ask specifically; sensitivity is never inferred from a tool's name or category.
- **Data-handling status** — 🟢/🟡/🔴/⚪ per the scale above, with a one-line reason tied to what was reported.

---

## Interview categories — common firm workflows to ask about

Use these as prompts if the attorney is unsure what counts, not as a checklist to force every category to have an answer. A firm may have zero tools in some categories and several in another.

- **Client intake & scheduling** — initial contact handling, consultation scheduling, intake forms.
- **Drafting & document review** — client correspondence, routine document drafting, contract or clause review assistance.
- **Research & summarization** — case research, deposition or document summarization, meeting notes.
- **Communications** — email drafting assistance, chat/SMS response tools.
- **Billing & time entry** — time-entry assistance, invoice drafting, billing narrative generation.
- **Calendaring & deadlines** — court-deadline calculation, docketing, matter-milestone tracking.
- **Marketing** — social media content, website copy, client newsletters.
- **Transcription & dictation** — deposition or meeting transcription, voice-to-text drafting.

For each tool named under a category, ask the four interview questions in `SKILL.md` Step 1 (use case, who uses it, data touched, data-handling status) — the category is a prompt to jog memory, not a substitute for asking about the specific tool.

---

## Consolidation vs. keep — how to tell them apart

**Consolidation is a candidate** when two or more tools serve the same stated workflow, or a single tool handles a general drafting/summarization/communication task that a governed Claude + MCP setup would cover just as well, with the firm's own confidentiality terms attached instead of a patchwork of separate vendor terms. Tie every consolidation recommendation to the specific workflow and the specific gap found (redundancy, unconfirmed data handling, or confirmed risk) — never recommend consolidation as a default.

**Keep as specialized** applies to tools with domain-specific logic, regulatory content, or deep integrations a general assistant doesn't replace: practice management systems, court-deadline/docketing engines built on jurisdiction-specific rules, e-discovery platforms, e-signature services, and similarly purpose-built tools. Name the tool and the specific reason it stays every time this applies — do not let it go unstated just because nothing is wrong with the tool.

**Not enough information** is a legitimate outcome when the interview didn't surface enough detail about a workflow to recommend either way. Say so rather than forcing a verdict.
