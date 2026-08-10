---
name: demand-letter
description: Draft a first-pass demand letter from case facts and your firm's template, or a plain-English client status-update email. Reads an attached case folder (facts, correspondence, your firm's demand-letter template) and drafts from it — never invents facts, never suggests a demand amount or liability position. Attorney reviews, sets the number, and sends manually.
argument-hint: "[optional: 'demand letter' or 'status update' — the skill asks if you don't specify]"
---

# /demand-letter — Demand Letter & Client Correspondence Drafter

> ⚠️ AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED
> Drafted from the case facts and template you provided. Does not verify accuracy, completeness, or legal sufficiency, and does not set a demand amount or assess liability. You are the author of record — review, revise, and send it yourself.

This skill drafts one of two things from an attached case folder:

1. **A first-pass demand letter** — populates your firm's demand-letter template with the case facts you've provided.
2. **A plain-English client status-update email** — summarizes where the matter stands, in language a client (not a lawyer) can follow.

**This skill drafts from what you provide.** It never invents facts, and it never sets a dollar figure, apportions liability, or reaches a legal conclusion — that is your call to make, not the draft's. If the case facts or template are too sparse to draft accurately, it asks before proceeding.

## Invocation

```
/demand-letter
/demand-letter demand letter
/demand-letter status update
```

---

## Workflow

### Step 1 — Collect inputs

**Case facts** — read from the attached workspace folder if one is attached: intake notes, correspondence, medical/treatment summaries, incident reports, whatever the attorney has provided. If no folder is attached, ask the attorney to attach one or paste the relevant facts directly into the conversation.

**Output type** — if not specified in the invocation, ask:
> "Are we drafting a demand letter or a client status-update email?"

**If drafting a demand letter**, also look for the firm's own demand-letter template in the attached folder (structure, letterhead conventions, standard sections/phrasing). If none is found, ask:
> "I don't see a demand-letter template in the attached folder. Do you have one you'd like me to follow, or should I ask you for the recipient and structure details directly?"
Do not silently fall back to a generic demand-letter structure. Only offer a generic structure if the attorney explicitly asks for one — and label it clearly as generic, not firm-standard.

**If drafting a status update**, ask (if not clear from the case folder) what the client already knows and what's changed since the last update, so the email doesn't repeat old ground or leak information the client hasn't been told yet.

---

### Step 2 — Resolve ambiguity before drafting

Check for the following before drafting. If any apply, ask — one question at a time. Do not guess and do not fill gaps with plausible-sounding detail.

**Output type unclear:** ask per Step 1 if not already specified.

**Template missing (demand letter only):** ask per Step 1.

**Recipient or claim details missing (demand letter only):** if the case folder doesn't identify who the letter is addressed to (insurance adjuster, opposing counsel) or the claim/policy number, ask.

**Damages or facts insufficient:** if the case folder doesn't contain enough specifics on treatment, economic damages, lost wages, or the injury narrative to draft an accurate factual section, ask what to include rather than generalizing or inferring a plausible-sounding account.

**Demand amount, liability position, or legal conclusion requested:** this skill never supplies these. If the attorney asks for a suggested demand figure, a liability split, or an assessment of case value, decline and say this is the attorney's call — leave a placeholder in the draft (e.g., `[DEMAND AMOUNT — attorney to set]`) instead.

**Status-update audience unclear:** if it's not clear what the client already knows, ask before drafting so the update doesn't over- or under-share.

---

### Step 3 — Draft

**Demand letter:**
- Follow the firm's template structure and phrasing conventions exactly where one was found.
- Populate: recipient/claim details, factual background, liability discussion (stated at the level of fact — what happened — never a legal conclusion the skill is drawing itself), damages itemization drawn only from what's in the case folder, and closing.
- Leave a clearly marked placeholder for the demand amount and any figure the attorney hasn't provided: `[DEMAND AMOUNT — attorney to set]`.
- Do not add facts, treatment details, or damages figures not present in the attached materials.
- Tone: formal, firm, factual — matching the firm's template register if one was provided.

**Client status-update email:**
- Plain English. No legal jargon, no case citations, no procedural terms without a one-line explanation.
- Structure: what's happened since the last update, what's happening next, any action needed from the client, expected timeline if known.
- Reassuring but honest — do not overstate progress or certainty beyond what the case folder supports.
- Never include privileged strategy detail, opposing party settlement positions, or anything the attorney hasn't confirmed is appropriate to share with this client.

In both cases: the drafted body is the letter or email itself — nothing else. Do not put the compliance header, footer, or any Protomated attribution inside the drafted text. Those belong in the chat around the draft, never in the document the attorney will send.

---

### Step 4 — Present the draft

Present the compliance header in the chat (not in the draft), then the draft in its own copy-ready block containing only the letter or email body, then the compliance footer and review prompt in the chat.

```
⚠️ AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED
Drafted from the case facts and template you provided. Verify every fact, set the demand amount yourself, and review for legal sufficiency before sending. Not legal advice.
```

```
[DRAFT — copy only this block into your letterhead/email]

[Demand letter or status-update email body — nothing else]
```

```
Does this look right? You can:
• Say "looks good" — I'll confirm it's ready for your final review
• Say "shorter" / "more formal" / "less formal" — I'll revise
• Correct any facts and I'll redraft
• Tell me the demand amount and I'll drop it in

— Drafted with Protomated Demand Letter & Correspondence Drafter (Claude Desktop) | Verify before sending | Not legal advice
```

---

### Step 5 — Iterate and confirm

- Accept revision instructions and redraft as many times as needed.
- When the attorney confirms the draft is correct, restate the final version cleanly in its own block — still with no header/footer inside it.
- Offer: "Want to draft the [other type] for this matter too?"

Do not mark a draft ready until the attorney confirms it. Never send, file, submit, or transmit the letter or email anywhere — the attorney is the author of record and sends it themselves.

---

## What This Skill Does Not Do

- It does not set a demand amount, apportion liability, or reach any legal conclusion — the attorney supplies these.
- It does not send, file, submit, or transmit anything — you send it yourself.
- It does not invent facts, treatment details, or damages figures not present in the case folder or your input.
- It does not access any case management system, email account, or e-signature service.
- It does not provide legal advice.

---

— Drafted with Protomated Demand Letter & Correspondence Drafter (Claude Desktop) | Verify before sending | Not legal advice
