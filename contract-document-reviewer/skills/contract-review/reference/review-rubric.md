# Clause Rating Rubric

Reference for `/contract-review`. Every clause finding uses one of these four ratings. A rating is only valid if it's tied to a specific position in the playbook being used (the firm's own, or the bundled generic one) — if the playbook doesn't cover a clause type, that clause is UNRATED, never guessed.

---

## 🟢 GREEN — Matches or beats the playbook position

The clause's language meets or is more favorable to the firm's client than the playbook's stated position for that clause type. No redline needed. Say briefly why it clears the bar.

## 🟡 YELLOW — Within the playbook's acceptable fallback range

The clause deviates from the playbook's ideal position but falls inside a fallback range the playbook itself marks as negotiable or acceptable-if-needed. Note the deviation and provide a suggested redline toward the ideal position — the attorney decides whether it's worth pushing on.

## 🔴 RED — Conflicts with a must-have or triggers a red flag

The clause conflicts with a position the playbook marks as a must-have, or trips one of the playbook's stated red-flag triggers (e.g., an uncapped indemnity, a unilateral termination-for-convenience with no notice period, an unlimited non-compete). Always provide a suggested redline. State the specific playbook position or red-flag trigger the clause conflicts with.

## ⚪ UNRATED — Not covered by the playbook in use

The clause is a type the playbook (firm's own or generic) doesn't address, or the playbook entry that would apply doesn't give enough guidance to compare against. Say plainly that this clause type isn't covered by the playbook in use, and that the attorney needs to assess it independently. Never assign GREEN/YELLOW/RED to fill the gap.

---

## Playbook entry format

Each clause entry in a playbook (firm's own or the bundled generic one) should define, at minimum:

- **Clause type** — what kind of clause this entry governs (e.g., Limitation of Liability, Indemnification, Termination)
- **Firm position (🟢 baseline)** — the language or terms that count as GREEN
- **Acceptable fallback (🟡 range)** — what's negotiable, and how far
- **Red flags (🔴 triggers)** — the specific terms or omissions that always trigger RED, regardless of surrounding language
- **Suggested redline language** — a template the skill adapts to the contract's defined terms and drafting style when suggesting a fix

If a firm playbook entry is missing one of these fields, treat that field as unspecified rather than inferring it — e.g., if an entry has a firm position and red flags but no fallback range, anything between them is UNRATED for that specific sub-question, not assumed to be YELLOW.

---

## What a redline suggestion is — and isn't

A suggested redline is chat text: a quoted excerpt of the existing language (`Delete:`), a proposed replacement (`Insert:`), and the full clause rewritten with that change applied ("Revised clause, in full"). It is not a Word tracked-change, is not applied to any file, and is not sent anywhere. The attorney copies it into their own working document and applies it themselves — pasting the revised clause in place of the original and running Word's Compare feature is one way to get an actual tracked change from it, but that step happens in the attorney's own tools, not this plugin.

Always quote the actual contract language being replaced — never summarize or paraphrase the original into something it doesn't say.

## Boilerplate clustering

Purely administrative clause types with no playbook entry (notices, severability, entire-agreement, counterparts, headings, and similar non-negotiated provisions) may be grouped into a single collapsed UNRATED note rather than one finding per clause, so the review's substance-to-boilerplate ratio stays readable. Never cluster a substantive clause type this way, even one the playbook doesn't cover.
