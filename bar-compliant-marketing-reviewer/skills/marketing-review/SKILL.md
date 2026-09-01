---
name: marketing-review
description: Review draft marketing copy — a website page, ad, social post, or review response — against ABA Model Rules 7.1–7.3 and the advertising rules of the state(s) you configure. Flags language that needs attorney attention with the specific rule cited and a suggested compliant rewording. Never says copy "is compliant" — only flags issues for review.
argument-hint: "[optional: which state(s) to check against, or which piece of copy if more than one is attached — the skill asks if you don't specify]"
---

# /marketing-review — Bar-Compliant Marketing & Ad Copy Reviewer

> ⚠️ AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED BEFORE USE
> Reviewed against ABA Model Rules 7.1–7.3 and the state rule references bundled with this skill. Does not confirm the copy is compliant, does not verify any factual claim in the copy, and does not file or submit anything to any state bar. Not legal advice.

This skill reviews a piece of draft marketing copy — a website page, ad, social post, or response to a client review — against ABA Model Rules 7.1–7.3 (`reference/model-rules-7.1-7.3.md`) and, for the state(s) the attorney configures, the state-specific advertising rules bundled in `reference/state-variations.md`.

**This skill flags for review — it never clears copy for use.** It does not tell the attorney a piece of copy "is compliant" or "passes." It points at specific language, cites the specific rule provision it may conflict with, and suggests a compliant rewording — the attorney makes the final call on every flag before the copy goes live.

## Invocation

```
/marketing-review
/marketing-review [state, e.g. "Florida" or "FL and TX"]
```

---

## Workflow

### Step 1 — Collect inputs

**The copy to review** — read from text pasted directly into the conversation, or from the attached workspace folder if one is attached. If nothing is provided, ask the attorney to paste or attach it.

**If more than one piece of copy is attached or pasted:** ask which one to review, or whether to review all of them, before starting.

**The state(s) to check against** — ask which state(s) the attorney is licensed in or targets with this marketing, if not already stated in the invocation. This skill bundles reference coverage for five states: California, Texas, New York, Florida, and Illinois (`reference/state-variations.md`).
- If the attorney names a covered state, apply the ABA baseline plus that state's section.
- If the attorney names a state not covered here, say so plainly and apply the ABA baseline only — do not invent that state's specific rule numbers or provisions.
- If the attorney is licensed or advertises in multiple states, run the copy against each configured state's section independently and note where flags differ by state.

**The channel** — note whether this is general public-facing advertising (website, display ad, social post, generic email blast, review response) or a targeted communication to one identified prospective client (a personalized letter or email). This determines whether Rule 7.3 solicitation provisions apply — see `reference/model-rules-7.1-7.3.md`. If it's ambiguous from the copy itself, ask.

---

### Step 2 — Review against the rules

Read `reference/model-rules-7.1-7.3.md` for the ABA baseline categories (false/misleading claims, missing attorney/firm identification, solicitation-specific requirements) and `reference/state-variations.md` for the configured state(s)' additional provisions.

Go through the copy and, for each passage that trips a rule:

1. Quote the specific language.
2. Cite the specific rule provision (ABA baseline and/or state-specific) it may conflict with.
3. Rate it using exactly the three tiers defined in `reference/model-rules-7.1-7.3.md`:
   - **🔴 LIKELY VIOLATION** — conflicts with a specific named provision, no missing-fact ambiguity.
   - **🟡 FLAG FOR REVIEW** — may conflict, but resolving it depends on a fact this skill can't verify (e.g., whether a claimed award is real, whether a testimonial is representative).
   - **⚪ NOT ADDRESSED** — outside the configured states, or depends on information not in the copy (e.g., filing status with a state bar advertising committee).
4. Suggest a compliant rewording for anything rated 🔴 or 🟡, in the language's own voice and tone — not a generic template that reads like boilerplate.

Where a passage doesn't trip any configured rule, say so as a neutral statement — never "this is compliant."

Do not invent a rule citation to justify a flag that isn't actually grounded in `reference/model-rules-7.1-7.3.md` or `reference/state-variations.md`. If something about the copy seems off but doesn't map to a specific provision in those files, say so as a general observation, clearly separated from the rule-cited flags, rather than dressing it up as a rule violation.

---

### Step 3 — Present the review

Present the compliance header in the chat, then each flagged passage in order (matching the copy's own structure), then a summary count by tier, then the compliance footer and review prompt.

```
⚠️ AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED BEFORE USE
Reviewed against ABA Model Rules 7.1–7.3 and the state rule references bundled with this skill. Does not confirm the copy is compliant, does not verify any factual claim in the copy, and does not file or submit anything to any state bar. Not legal advice.
```

```
### [Quoted passage or section reference] — 🔴 LIKELY VIOLATION / 🟡 FLAG FOR REVIEW / ⚪ NOT ADDRESSED

**Rule:** [ABA Model Rule and/or state-specific provision cited]

**Why it's flagged:** [plain-English reason, tied to the cited provision]

**Suggested rewording:**
> [compliant alternative language, in the copy's own voice]
```

(repeat per flagged passage)

```
Summary: N passages reviewed — X likely violations, Y flagged for review, Z not addressed.
States checked: [list]. Channel: [general advertising / targeted solicitation].
```

```
Does this look right? You can:
• Say "looks good" — I'll confirm the review is ready for your final call
• Ask me to re-check a specific passage, or point out one I missed
• Add or change which state(s) I'm checking against
• Correct any fact I got wrong about the copy and I'll re-flag

— Reviewed with Protomated Bar-Compliant Marketing Reviewer (Claude Desktop) | Verify before publishing | Not legal advice
```

---

### Step 4 — Iterate and confirm

- Accept revision instructions and re-review as many times as needed — re-checking a passage, adding a state, or incorporating a corrected reading of the copy.
- When the attorney confirms the review is done, restate the final flags cleanly.
- If asked whether the copy is safe to publish, decline to give a yes/no and point back to the specific flags instead — that determination is the attorney's, not this skill's.

Do not mark a review final until the attorney confirms it. Never publish, post, submit, or file the copy or the review anywhere — the attorney publishes it themselves after making their own call on every flag.

---

## What This Skill Does Not Do

- It does not tell the attorney a piece of copy "is compliant" or "passes" — it flags issues for review, or notes that nothing tripped the rules checked.
- It does not verify any factual claim in the copy (whether an award is real, whether a testimonial's outcome is representative, whether a comparison can be substantiated) — those are 🟡 flags for the attorney to resolve.
- It does not file, submit, or confirm filing of any advertisement with a state bar advertising review committee, even where a configured state requires one (e.g., Texas, Florida, New York) — those are ⚪ flags, not confirmations either way.
- It does not cover states outside the five bundled in `reference/state-variations.md` with specific rule citations — for any other state, it applies the ABA baseline only and says so.
- It does not publish, post, or transmit the copy or the review to anyone.
- It does not provide legal advice.

---

— Reviewed with Protomated Bar-Compliant Marketing Reviewer (Claude Desktop) | Verify before publishing | Not legal advice
