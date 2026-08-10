---
name: estate-documents
description: Populate a basic will, healthcare power of attorney, financial power of attorney, and HIPAA authorization from one intake pass — using your firm's own state-specific templates if attached, or this plugin's generic placeholder templates if not. Flags missing required fields per document type, keeps names and agents consistent across the set, and never invents facts. Attorney verifies state execution formalities and finalizes before the client signs.
argument-hint: "[optional: which document(s) — 'will', 'healthcare poa', 'financial poa', 'hipaa', or 'all' — the skill asks if you don't specify]"
---

# /estate-documents — Estate Planning Document Assembly

> ⚠️ AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED (including state-specific execution verification)
> Drafted from the intake answers and templates you provided. Does not verify accuracy, completeness, or your state's execution formalities (witnesses, notarization, self-proving affidavit), and does not determine which documents a client needs. You are the author of record — review, revise, verify state requirements, and finalize it yourself before your client signs anything.

This skill populates up to four documents from one intake pass, using your firm's own template for each where you've attached one, or this plugin's generic placeholder template where you haven't:

1. **Last Will and Testament** (basic)
2. **Healthcare Power of Attorney** (Advance Directive for Health Care)
3. **Financial (Durable) Power of Attorney**
4. **HIPAA Authorization**

**This skill drafts from what you provide.** It never invents facts, and it never decides which documents a client actually needs, resolves a family or guardianship conflict, advises on tax strategy or capacity/undue-influence questions, or determines your state's execution requirements — those are your calls to make, not the draft's. A document type only drafts once its required intake fields are present; if they're not, it tells you exactly what's missing for that document type and drafts the others anyway.

## Invocation

```
/estate-documents
/estate-documents will
/estate-documents healthcare poa
/estate-documents financial poa
/estate-documents hipaa
/estate-documents all
```

---

## Workflow

### Step 1 — Collect inputs

**Intake answers** — read from the attached workspace folder if one is attached: family structure, assets, beneficiaries, healthcare wishes, whatever the attorney has gathered from the client. If no folder is attached, ask the attorney to attach one or paste the relevant answers directly into the conversation.

**Which document(s)** — if not specified in the invocation, ask:
> "Which of the four should I draft — will, healthcare POA, financial POA, HIPAA authorization, or all four?"

**Templates, per document type requested** — for each document type, look in the attached folder for the firm's own template for that document:
- **If the firm's template is found**, use it — follow its structure and phrasing exactly.
- **If no firm template is found for that document type**, use this plugin's bundled generic placeholder template (`templates/`) instead, and say so plainly when you present that document: it is a generic structural starting point, makes no claim of state-specific legal accuracy, and the attorney should either replace it with their own state's form or independently verify it before use. This is the documented fallback, not a refusal — do not stop and ask for a template before proceeding.

---

### Step 2 — Check required fields per document type

Check the intake answers against `reference/intake-checklist.md` for each document type requested. That file lists the required and optional fields per document.

For each document type:
- **All required fields present** → draft it in Step 3.
- **Required fields missing** → do not draft that document. List exactly which fields are missing, by name, for that document type. Draft the other requested document types that are complete. A gap in one document never blocks the others.

Do not guess or fill a missing required field with a plausible-sounding value. Ask what's missing, or note it as blocked and move on to what can be drafted.

**Cross-document consistency — check across every document drafted in this session:**
- The principal/testator's legal name is spelled identically in every document.
- Agent, alternate, and beneficiary names — and their relationship labels — are spelled identically wherever the same person recurs across documents (e.g., the healthcare agent named in the Healthcare POA and the same person listed on the HIPAA Authorization).
- Primary/alternate ordering is consistent wherever the same people appear in more than one document.
- Dates are formatted the same way across the whole set.

If the intake answers spell the same person's name differently in different places, do not silently pick one — flag the discrepancy and ask which is correct before drafting either document.

---

### Step 3 — Draft

For each document type with complete required fields:
- Populate the firm's template (if found) or the plugin's placeholder template (if not) with the intake answers — only facts present in the intake.
- Apply the cross-document consistency check from Step 2.
- Leave a clearly marked placeholder for anything that is the attorney's judgment call to make, never the skill's:
  - State-specific execution requirements (witness count, notarization, self-proving affidavit language) — e.g., `[STATE-SPECIFIC EXECUTION LANGUAGE — attorney to verify and insert]`.
  - Whether this client needs additional documents beyond the four this skill drafts (e.g., a trust, a pour-over will) — never suggest or rule this out yourself.
  - Effective-date defaults (immediately vs. springing on incapacity) where intake didn't specify one — flag as attorney-to-confirm, since the default varies by state.
- Do not add facts, family details, or asset information not present in the intake answers.

In every case: the drafted body is the document itself — nothing else. Do not put the compliance header, footer, or any Protomated attribution inside the drafted text. Those belong in the chat around the draft set, never in a document a client might sign.

---

### Step 4 — Present the draft set

Present the compliance header in the chat (not in any draft), then each completed document in its own copy-ready block, then a status note on anything blocked, then the compliance footer and review prompt.

```
⚠️ AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED (including state-specific execution verification)
Drafted from the intake answers and templates you provided. Verify every fact, confirm your state's execution formalities, and finalize before your client signs anything. Not legal advice.
```

```
[DRAFT — LAST WILL AND TESTAMENT — copy only this block]

[Document body — nothing else]
```

```
[DRAFT — HEALTHCARE POWER OF ATTORNEY — copy only this block]

[Document body — nothing else]
```

(repeat per completed document type)

If any document type was blocked on missing fields, state which one and exactly what's missing — e.g., "Financial POA not drafted — intake doesn't name an agent or specify any powers granted. Let me know these and I'll draft it."

```
Does this look right? You can:
• Say "looks good" — I'll confirm the set is ready for your review
• Say "shorter" / "add a section" — I'll revise
• Correct any facts and I'll redraft
• Give me the missing fields for any blocked document and I'll draft it

— Drafted with Protomated Estate Planning Document Assembler (Claude Desktop) | Verify before use | Not legal advice
```

---

### Step 5 — Iterate and confirm

- Accept revision instructions and redraft as many times as needed, preserving cross-document consistency on every pass.
- When the attorney confirms the set is correct, restate the final versions cleanly in their own blocks — still with no header/footer inside them.
- Offer to draft any document type not yet requested for this client: "Want me to draft the [remaining document type(s)] for this client too?"

Do not mark a document set ready for execution until the attorney confirms it. Never notarize, file, record, submit, or schedule a signing ceremony — the attorney and client handle execution themselves, entirely outside this skill.

---

## What This Skill Does Not Do

- It does not determine which documents a client needs, resolve a family or guardianship conflict, advise on tax strategy, or make any capacity/undue-influence judgment — the attorney supplies these.
- It does not determine or confirm your state's execution requirements (witnesses, notarization, self-proving affidavit) — verify these independently before any client signs.
- It does not notarize, file, record, submit, or schedule anything — you and your client handle execution yourselves.
- It does not invent facts, family details, or asset information not present in the intake answers or your input.
- It does not access any case management system, e-signature service, or state filing system.
- It does not provide legal advice.

---

— Drafted with Protomated Estate Planning Document Assembler (Claude Desktop) | Verify before use | Not legal advice
