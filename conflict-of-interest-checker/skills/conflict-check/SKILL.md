---
name: conflict-check
description: Fuzzy-match new-matter party names against your existing client/matter list — attached as a workspace folder — accounting for nicknames, entity-suffix variations, and misspellings. Returns a structured possible-conflict report rated by confidence. Never clears or declines a matter; the attorney makes every conflict determination. Use before opening any new matter.
argument-hint: "[new party names] — [path to client/matter list, if not already attached]"
---

# /conflict-check — Conflict-of-Interest Checker

> ⚠️ AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED
> This is a name-matching pass against the client/matter list you provided, not a conflicts clearance. It never determines that a conflict exists or doesn't — every match is a lead for you to resolve, and "no match found" is not the same as "no conflict." Not legal advice.

This skill compares the party names in an incoming matter against your existing client/matter list — a folder you export and attach — and returns a structured report of possible name matches, each tagged with a confidence tier and the specific reason it was flagged.

**This skill never clears a conflict and never declines a matter.** It surfaces possible matches for your review. A report with no flags means no match was found against the list you provided — it does not mean there is no conflict, and it is never presented as clearance.

## Invocation

```
/conflict-check
/conflict-check [new party names] — [path to client/matter list folder]
```

---

## Workflow

### Step 1 — Collect the existing client/matter list

Ask the attorney to attach a folder containing an export of their client/matter list — a CSV, spreadsheet export, or plain-text list of current and former clients, and, where available, opposing parties and related entities from prior matters. If nothing is attached, ask for it before proceeding; do not run a check against an empty or unconfirmed list.

If the list format is unclear (e.g., a CSV with ambiguous columns), ask which columns represent party names before indexing, rather than guessing which column is the client name and which is something else.

### Step 2 — Index the existing list

Read every entry and normalize each name for comparison:
- Strip and normalize entity suffixes (see `reference/matching-methodology.md`, category 2).
- Note personal names separately from business-entity names — nickname and misspelling categories only apply to personal names.
- Preserve the original matter/client reference (matter name or number) for each entry, since every reported match must point back to a specific existing entry, not just a bare name.

If the list is empty or unreadable, stop and say so:

> "I can't read a usable client/matter list from [path]. Attach an export with at least client/party names and a matter reference, then run this again."

### Step 3 — Collect the new matter's party names

Ask for every party name relevant to the incoming matter if not already given: the prospective client, the adverse party or parties, and any other named individuals or entities the attorney wants checked (co-parties, related businesses, witnesses). Do not check only the prospective client's name — the adverse party is usually the more important check.

### Step 4 — Match each new-matter name against the indexed list

For every new-matter name, apply the categories in `reference/matching-methodology.md`:
1. Exact match → 🔴 HIGH CONFIDENCE
2. Entity-suffix-normalized match → 🔴 HIGH CONFIDENCE
3. Nickname variant → 🟡 LOW CONFIDENCE
4. Misspelling/transliteration variant → 🟡 LOW CONFIDENCE
5. Partial/related-name match → 🟡 LOW CONFIDENCE (or ⚪ if a common surname with no other signal — see the reference file)
6. Nothing found → ⚪ NO MATCH FOUND

Every reported match must name the specific category it was matched under and the specific existing-list entry (client/matter reference) it matched against. Never report a bare "possible conflict" without a category and a pointer to the matching entry.

### Step 5 — Present the conflict report

```
⚠️ AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED
This is a name-matching pass, not a conflicts clearance. Every match below is a lead for you to resolve — "no match found" does not mean "no conflict." Not legal advice.

---

Conflict check for: [incoming matter description]
Checked against: [client/matter list path] ([N] entries indexed)

### [New-matter party name] — 🔴 HIGH CONFIDENCE / 🟡 LOW CONFIDENCE / ⚪ NO MATCH FOUND

**Matched against:** [existing-list name] — [matter/client reference]
**Match type:** [exact / entity-suffix-normalized / nickname variant / misspelling variant / partial-related-name]
**What to confirm:** [the specific ambiguity to resolve, e.g. "confirm this is the same Robert Chen, not a different individual with the same name"]
```

(repeat per new-matter party name — including a line for each name with no match, stated as "No match found against the attached list," never "cleared" or "no conflict")

```
Summary: N party names checked — X high confidence, Y low confidence, Z no match found.

This report reflects only the list at [path] as of [date]. It does not check business relationships, family relationships, co-counsel history, or anything else not captured in the name data you provided. You make the final conflict determination.

Does this look complete? You can:
• Add more party names to check
• Attach an updated or more complete client/matter list and I'll re-run the check
• Ask me to explain how a specific match was flagged

— Checked with Protomated Conflict-of-Interest Checker (Claude Desktop) | Attorney determination required | Not legal advice
```

### Step 6 — Iterate

Accept additional names or an updated list and re-run as needed. Never soften a 🔴 or 🟡 flag to ⚪ based on the attorney's explanation alone — if the attorney explains why a flagged match isn't actually a conflict, acknowledge that and move on, but the report itself stays as a record of what was flagged and why; this skill doesn't retroactively "clear" its own prior flag.

---

## What This Skill Does Not Do

- It does not clear a conflict, declare that no conflict exists, or make any conflict determination — every match is surfaced for the attorney's own judgment.
- It does not detect relationships that aren't reflected in the name data itself — business relationships, family relationships not captured in either name, co-counsel history, or prior adverse-witness roles are outside what a name-matching pass can find.
- It does not access any practice-management system, case database, or public records — it only compares the list you attach against the names you provide.
- It does not guarantee completeness. A high-complexity check like this needs testing against your own real client-list data and formatting before you rely on it for a real intake decision — treat early results with extra scrutiny.
- It does not provide legal advice.

---

— Checked with Protomated Conflict-of-Interest Checker (Claude Desktop) | Attorney determination required | Not legal advice
