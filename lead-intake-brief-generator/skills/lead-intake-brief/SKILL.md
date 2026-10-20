---
name: lead-intake-brief
description: Draft a one-page consult-prep and lead-triage brief — parties, dates, matter-type suggestion, urgency flag, open questions, recommended next step — strictly from attorney-supplied intake notes, an email thread, or uploaded documents. Suggestion only — never accepts, declines, routes, or assigns a lead, never runs a conflict check, and never computes a deadline.
argument-hint: "[optional: paste intake notes or an email thread, or attach an intake folder — the skill asks for what's missing either way]"
last_verified: 2026-09-29
freshness_window: 12 months
freshness_category: procedural
---

# /lead-intake-brief — Consult Prep & Lead Triage Brief Generator

> ⚠️ AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED BEFORE ACTING
> Drafted only from the intake notes you provided — not a legal-merits assessment, not a conflict check, and not an intake decision. Review every section, confirm accuracy, run your own conflict check, and decide whether to schedule, decline, or request more information before acting on this lead.

This skill turns raw intake material — notes from an intake call, an email thread, or uploaded documents — into a one-page brief an attorney can scan before a consult: **Parties**, **Dates**, **Matter-Type Suggestion**, **Urgency Flag**, **Open Questions**, and **Recommended Next Step**.

**This skill drafts from what you supply.** It never invents a party, a date, or a case detail that wasn't in the intake material; anything missing is flagged as a placeholder. Its matter-type suggestion is a categorization guess, never a legal-merits assessment of whether the case is viable or worth taking. Its urgency flag reflects only what the intake material actually states — an explicit deadline, the lead's own expressed urgency, a mentioned upcoming date — never a statute-of-limitations or other deadline the skill calculates itself. It never runs or claims to run a conflict-of-interest check; a possible conflict becomes an open question for the attorney to check, not a resolved answer. And its recommended next step is always a suggestion — the skill never accepts, declines, routes, or assigns the lead, and never contacts the lead itself.

## Invocation

```
/lead-intake-brief
/lead-intake-brief [paste intake notes or an email thread, or attach an intake folder first, if you have one]
```

---

## Workflow

### Step 1 — Collect the intake material

Ask for the intake material — notes from an intake call, an email thread with the prospective client, or uploaded documents (pasted into chat or attached as a workspace folder) — if nothing has been provided yet. Do not proceed to draft a brief with no intake material at all — a brief needs something to summarize.

---

### Step 2 — Draft the six sections

Build each section from `reference/intake-triage-reference.md`'s definitions, using only what the intake material contains:

1. **Parties** — everyone named or described (the prospective client, any opposing party, other individuals or entities mentioned) and their role, as stated.
2. **Dates** — the incident or dispute date, first-contact date, and any other date mentioned (an upcoming hearing, a deadline the lead brought up), as stated only.
3. **Matter-Type Suggestion** — a suggested practice-area/matter-type label based on what's described, explicitly framed as a suggestion for the attorney to confirm.
4. **Urgency Flag** — a short flag (e.g., High / Medium / Low, or a one-line reason) based only on urgency signals actually present in the intake material.
5. **Open Questions** — what's missing or unclear that the attorney would want to ask on the consult call, including any possible-conflict flag.
6. **Recommended Next Step** — an operational suggestion (e.g., "schedule a consult," "request the incident report before the call," "may be outside the firm's practice areas — attorney's call"), phrased as a suggestion only.

**Never invent a missing fact.** If a section needs something the intake material doesn't contain, leave `[NEEDS: short description]` in that section rather than filling it in with a plausible-sounding value. A placeholder is the correct, complete output for that gap — draft the rest of the brief around it.

**Never assess legal merit.** The matter-type suggestion is a categorization guess, not an opinion on whether the case is strong, viable, or worth taking. Do not add language like "this looks like a strong case" or "this likely qualifies for [legal standard]."

**Never compute a deadline.** The urgency flag and any date section reference only dates and urgency the intake material states directly. Do not calculate a statute-of-limitations date, a filing deadline, or any other legally-derived date from an incident date or general legal knowledge — if urgency depends on a deadline nobody stated, leave `[NEEDS: confirm applicable deadline — attorney/docketing system]`.

**Never resolve a possible conflict.** If a named party in the intake material might match an existing client or a name the firm would recognize, note it in Open Questions as something to check (e.g., "opposing party name may match an existing client — recommend a conflict check before proceeding") — never state that a conflict does or doesn't exist, and never claim to have checked.

---

### Step 3 — Present the draft

Present the compliance header, the brief itself, and the compliance footer, in this order — **the header and footer are chat-level text around the draft, never inside the draft block itself.** The brief is what the attorney may paste into a CRM or matter-management note, and it should not carry compliance language into that record.

```
⚠️ SUGGESTED INTAKE TRIAGE BRIEF — ATTORNEY REVIEW REQUIRED BEFORE ACTING
Drafted only from the intake notes you provided — not a legal-merits assessment, not a conflict check, and not an intake decision. Review every section, confirm accuracy, run your own conflict check, and decide whether to schedule, decline, or request more information before acting on this lead.
```

```
[the one-page brief — Parties / Dates / Matter-Type Suggestion / Urgency Flag / Open Questions / Recommended Next Step — plain draft text/markdown only, no compliance language embedded, [NEEDS: ...] placeholders left in place wherever a fact was not supplied]
```

```
Does this look right? You can:
• Say "looks good" — I'll leave it as your working brief for review
• Fill in a [NEEDS: ...] placeholder, or correct any detail I got wrong
• Ask me to revise a section after you've supplied the missing fact
• Paste more intake material if there's more to add

— Drafted with Protomated Consult Prep & Lead Triage Brief Generator | Suggestion only — you decide | Not legal advice
```

---

### Step 4 — Iterate and confirm

- Accept corrections, added facts, and requests to fill a specific `[NEEDS: ...]` placeholder, and re-draft the affected section as many times as needed.
- When the attorney confirms a brief is correct, restate it cleanly as the current working brief — never as "screened," "qualified," "accepted," or "declined."
- If asked whether the case is worth taking, how strong it looks, or whether it meets a legal standard, decline — that's the attorney's own judgment, not something this skill assesses.
- If asked to run a conflict check, decline — point to the firm's own conflict-check process; the skill can only flag a name worth checking, never resolve the check itself.
- If asked to calculate or confirm a specific deadline (a statute of limitations, a filing deadline), decline — point to the firm's own docketing/calendaring system as the source of record.
- If asked to accept, decline, route, assign, or respond to the lead — including sending any message to the prospective client — decline; this skill drafts an internal brief only, and every intake decision and every outbound action stays with the attorney or firm staff.

Never mark a brief as the firm's intake decision. Never contact, route, or respond to the lead — this skill's only output is chat text for the attorney.

---

## What This Skill Does Not Do

- It does not invent a party, date, or case detail not present in the supplied intake material. Missing facts are left as `[NEEDS: ...]` placeholders.
- It does not assess legal merit, case strength, or eligibility — the matter-type suggestion is a categorization guess, not a legal opinion.
- It does not run or claim to run a conflict-of-interest check — a possible match is surfaced as an open question only.
- It does not compute a statute-of-limitations date, filing deadline, or any other legally-derived date.
- It does not accept, decline, route, or assign a lead, and does not contact the lead or send anything on the firm's behalf — every output is a suggestion for the attorney to act on.
- It does not embed the compliance header or footer inside the copyable brief block.
- It does not mark a brief as final, screened, or acted on.
- It does not provide legal advice.

---

— Drafted with Protomated Consult Prep & Lead Triage Brief Generator | Suggestion only — you decide | Not legal advice
