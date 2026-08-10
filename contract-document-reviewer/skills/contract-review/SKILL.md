---
name: contract-review
description: Review a contract clause by clause against a configurable playbook — your firm's own playbook.md if attached, or this plugin's bundled generic playbook if not. Rates each clause GREEN, YELLOW, RED, or UNRATED with plain-English rationale tied to the playbook, and suggests redline language for anything that isn't GREEN. Attorney reviews and confirms every rating before it's used in negotiation.
argument-hint: "[optional: which contract to review, if more than one is attached — the skill asks if you don't specify]"
---

# /contract-review — Contract & Document Review

> ⚠️ AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED BEFORE USE
> Reviewed against the playbook you provided. Does not determine whether to sign, negotiate, or reject this contract, and does not verify enforceability under governing law. No tracked changes are applied to your document — copy any suggested redline into your own file yourself. Not legal advice.

This skill reviews an attached contract clause by clause against a playbook — your firm's own `playbook.md` if you've attached one, or this plugin's bundled generic playbook (`playbooks/generic-playbook.md`) if you haven't.

**This skill reviews from what you provide.** It never invents contract language that isn't in the attached contract, and it never invents a firm position that isn't encoded in the playbook it's using. It never decides whether you or your client should sign, walk away from, or accept the contract, never determines a clause's enforceability under governing law, and never sends, files, or executes anything. A clause type the playbook doesn't cover is left UNRATED — never guessed.

## Invocation

```
/contract-review
/contract-review [contract name, if more than one is attached]
```

---

## Workflow

### Step 1 — Collect inputs

**The contract** — read from the attached workspace folder if one is attached, or from text pasted directly into the conversation. If nothing is attached or pasted, ask the attorney to attach the contract or paste its text.

**If more than one contract is attached:** ask which one to review, or whether to review all of them, before starting.

**The playbook** — look in the attached folder for the firm's own `playbook.md`:
- **If found**, use it — apply its clause entries exactly as written, including its own fallback ranges and red-flag triggers.
- **If not found**, use this plugin's bundled generic playbook (`playbooks/generic-playbook.md`) instead, and say so plainly when you present the review: it's a conservative, general-purpose starting point, not this firm's actual negotiation positions, and every rating from it is a starting point the attorney must confirm. This is the documented fallback, not a refusal — do not stop and ask for a playbook before proceeding.

---

### Step 2 — Identify and rate each clause

Read the contract clause by clause (or section by section, for contracts organized that way). For each clause:

1. Match it to the applicable playbook entry by clause type (see `reference/review-rubric.md` for the playbook entry format).
2. If a matching entry exists, rate the clause using the four-tier rubric:
   - **🟢 GREEN** — meets or beats the playbook's firm position.
   - **🟡 YELLOW** — within the playbook's stated acceptable fallback range.
   - **🔴 RED** — conflicts with a must-have position or trips a red-flag trigger the playbook names.
   - Always quote the actual contract language behind the rating — never paraphrase it into something it doesn't say.
3. If no matching playbook entry exists for that clause type, rate it **⚪ UNRATED** and say plainly that it isn't covered by the playbook in use. Do not guess a rating to fill the gap.

Do not rate a clause GREEN/YELLOW/RED without being able to point to the specific playbook position or red-flag trigger behind that rating.

**Pure boilerplate with no playbook entry** (e.g., notices, severability, entire-agreement, counterparts, headings) — group these into a single collapsed UNRATED note ("Administrative provisions not covered by the playbook: Notices, Severability, Entire Agreement, Counterparts") instead of one finding per clause. This keeps the review's substance-to-boilerplate ratio readable on a real contract, which typically carries more administrative sections than the playbook addresses individually. Do not collapse a substantive clause type this way, even one the playbook doesn't cover — only genuinely administrative, non-negotiated provisions.

---

### Step 3 — Suggest redlines for anything not GREEN

For every YELLOW or RED clause, suggest redline language using the playbook entry's suggested-redline template, adapted to the contract's own defined terms and drafting style:

```
> Delete: "[quoted contract language]"
> Insert: "[suggested replacement language]"

Revised clause, in full:
[the whole clause, rewritten with the suggested change applied — not just the changed fragment]
```

The "Revised clause, in full" block lets the attorney paste-replace the original clause and use Word's own Compare feature to generate a real tracked change, if they want one — this plugin still isn't producing that tracked change itself. This is suggested chat text, not a Word tracked change — this plugin cannot edit or generate a `.docx` file. Say so plainly if the attorney asks about applying it automatically. The attorney copies the suggestion into their own working document and applies it themselves.

For UNRATED clauses, do not suggest a redline — note that the clause needs the attorney's independent assessment first.

---

### Step 4 — Present the review

Present the compliance header in the chat, then each clause finding in order (matching the contract's own section order), then a summary count by rating, then the compliance footer and review prompt.

```
⚠️ AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED BEFORE USE
Reviewed against the playbook you provided. Does not determine whether to sign, negotiate, or reject this contract, and does not verify enforceability under governing law. No tracked changes are applied to your document — copy any suggested redline into your own file. Not legal advice.
```

```
### [Clause name / section reference] — 🟢 GREEN / 🟡 YELLOW / 🔴 RED / ⚪ UNRATED

**Rationale:** [plain-English reason, tied to the specific playbook position — or a note that this clause type isn't covered by the playbook in use]

**Suggested redline** (YELLOW/RED only):
> Delete: "[quoted contract language]"
> Insert: "[suggested replacement language]"

Revised clause, in full:
[the whole clause, rewritten with the suggested change applied]
```

(repeat per clause)

```
Summary: N clauses reviewed — X green, Y yellow, Z red, W unrated.
```

If the generic bundled playbook was used (no firm playbook attached), restate that plainly here, not just at the top.

```
Does this look right? You can:
• Say "looks good" — I'll confirm the review is ready for your use
• Ask me to re-check a specific clause, or point out one I missed
• Attach your firm's own playbook and I'll re-run the review against it
• Correct any misread contract language and I'll re-rate that clause

— Reviewed with Protomated Contract & Document Reviewer (Claude Desktop) | Verify before use | Not legal advice
```

---

### Step 5 — Iterate and confirm

- Accept revision instructions and re-review as many times as needed — re-rating a single clause, re-running against a newly attached firm playbook, or incorporating a corrected reading of the contract text.
- When the attorney confirms the review is correct, restate the final findings cleanly.
- If asked whether a clause is enforceable, whether to sign, or how to negotiate beyond the playbook's own position, decline and explain that's the attorney's call — point to the UNRATED or RED finding as the reference point, not a directive.

Do not mark a review ready for use in negotiation until the attorney confirms it. Never send, file, execute, e-sign, or transmit the contract or the review to any party — the attorney handles negotiation and execution entirely outside this skill.

---

## What This Skill Does Not Do

- It does not decide whether you or your client should sign, walk away from, or accept the contract, or recommend a negotiation strategy beyond the playbook's own positions.
- It does not determine or opine on a clause's enforceability under any governing law, and it does not resolve choice-of-law or jurisdiction questions.
- It does not advise on privilege, confidentiality strategy, or tax consequences.
- It does not edit or generate a `.docx` file, and it does not apply tracked changes to any document — every redline is suggested chat text only.
- It does not send, file, execute, e-sign, or transmit the contract or the review to any party.
- It does not invent contract language that isn't in the attached contract, or a firm position that isn't encoded in the playbook it's using.
- It does not provide legal advice.

---

— Reviewed with Protomated Contract & Document Reviewer (Claude Desktop) | Verify before use | Not legal advice
