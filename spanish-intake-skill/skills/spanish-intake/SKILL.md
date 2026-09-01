---
name: spanish-intake
description: Bilingual (English/Spanish) client intake and communication. Turns Spanish-language intake notes or a voicemail transcript into a structured English intake summary for the file, or turns an English draft communication into a natural Spanish version — flagging any ambiguous translation for the attorney's (or certified interpreter's) confirmation rather than guessing. Use for Spanish-speaking clients when you need the file in English or a client-facing draft in Spanish.
argument-hint: "[paste Spanish intake notes or an English draft] — or attach a file"
---

# /spanish-intake — Spanish-Language Intake & Client Communication

> ⚠️ AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED
> This is a translation-assist tool, not a certified translation or interpretation. Where a certified interpreter is legally required (e.g., in-court proceedings, sworn statements, certain government filings), this skill does not substitute for one. Every fact and every translated phrase must be reviewed before this is relied on, filed, or sent. Not legal advice.

This skill works in two directions, and asks which one applies if it isn't obvious from what's provided:

1. **Spanish → English (intake):** turns Spanish-language intake notes or a voicemail transcript into a structured English intake summary for the file.
2. **English → Spanish (client communication):** turns an English draft communication (a letter, status update, or intake acknowledgment) into a natural Spanish version for the client.

**This skill only works from what you provide.** It never invents a fact that isn't in the source notes, and it never silently resolves an ambiguous or idiomatic phrase by guessing — it flags the phrase and asks, in both directions.

## Invocation

```
/spanish-intake
/spanish-intake [paste Spanish-language intake notes or voicemail transcript]
/spanish-intake [paste English draft to translate to Spanish]
```

If neither the direction nor the source text is clear, ask before proceeding:
> "Are we turning Spanish intake notes into an English summary, or an English draft into Spanish? Paste or attach the source text and I'll go from there."

---

## Workflow

### Direction A — Spanish intake notes → English structured summary

**Step 1 — Collect the source.** Read from pasted text or an attached file (intake notes, a voicemail transcript, a completed Spanish-language intake form). If the source is a transcript with unclear or garbled sections (common with voicemail transcription), note those sections explicitly rather than guessing at what was said.

**Step 2 — Extract and structure the information**, translating into English as you go. Mark any field as `[Not provided]` if the source doesn't cover it — do not infer or fabricate:

- **Parties:** client name, contact info; adverse party/counterparty if mentioned; other named individuals.
- **Matter:** practice area, factual summary of what happened, date of the triggering event, any prior legal action mentioned.
- **Damages / relief sought:** as described in the source, in the client's own terms where a direct translation matters (e.g., a specific injury or loss description).
- **Deadlines mentioned:** anything the client referenced as time-sensitive — flag for the attorney to verify independently; this skill does not calculate deadlines.
- **Documents/evidence mentioned:** anything the client said they have or will provide.
- **Next steps discussed**, if the source is a call/consultation record.

**Step 3 — Flag translation ambiguity.** Where a word, idiom, or regional expression doesn't have one clear English equivalent (common with legal, medical, or immigration-status terminology, and with regional Spanish variation — Mexican, Central American, Caribbean, and South American usage can differ meaningfully), do not pick one meaning silently. Present the original phrase, the most likely translation, and note the ambiguity:

> `[Original: "arreglar los papeles" — likely "sort out the immigration paperwork," but could refer to a specific filing the client didn't name — confirm with client]`

**Step 4 — Present the English summary:**

```
⚠️ AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED
Translated and structured from the Spanish-language source you provided. Not a certified translation. Review every fact and flagged ambiguity before relying on this summary. Not legal advice.

---

# Intake Summary (translated from Spanish source)

## Parties
[Client name, contact info; adverse party/counterparty; other named individuals]

## Matter Overview
[Practice area; factual summary; incident date; prior legal action]

## Damages / Relief Sought
[As described in the source]

## Deadlines Mentioned
[Anything time-sensitive the client referenced — attorney to verify independently]

## Documents / Evidence Mentioned
[What the client said they have or will provide]

## Next Steps Discussed
[If applicable]

## Flagged Translation Ambiguities
[Every phrase flagged in Step 3, with the original text, likely meaning, and what to confirm — or "None" if nothing was ambiguous]

---

Source: [pasted notes / attached file name]. Confirm to save, or tell me what to correct.
```

Do not save any file without the attorney's explicit confirmation.

---

### Direction B — English draft → Spanish client communication

**Step 1 — Collect the English source.** Read from pasted text or an attached draft (a letter, status update, or acknowledgment). If the audience or register isn't clear (formal legal correspondence vs. a warm client check-in), ask.

**Step 2 — Translate into natural Spanish**, not a literal word-for-word rendering. Match the register of the English source (formal for legal correspondence, warm and plain for a client check-in) and avoid legal jargon that wouldn't be familiar to a non-attorney Spanish speaker — plain Spanish, the same way the starter kit's client-facing drafts use plain English.

**Step 3 — Flag ambiguity in the other direction.** Where an English term doesn't have one clean Spanish equivalent, or where regional word choice matters (e.g., a term common in Mexican Spanish reading oddly to a Caribbean Spanish speaker, or vice versa), flag it and ask which the attorney prefers, rather than picking one silently:

> `[English "settlement" translated as "acuerdo" — could also render as "arreglo" depending on regional preference; confirm which reads better for this client]`

**Step 4 — Present the Spanish draft:**

```
⚠️ AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED
Translated from the English draft you provided. Not a certified translation. Have a fluent speaker or certified interpreter review before sending anything client-facing, especially anything with legal or financial consequences. Not legal advice.

---

[SPANISH DRAFT — copy only this block]

[Translated communication body — nothing else]

---

Flagged translation choices:
[Every phrase flagged in Step 3, with the English original, the translation used, and the alternative — or "None" if nothing was ambiguous]

Confirm this reads right, or tell me what to adjust (register, regional word choice, tone).
```

---

## What This Skill Does Not Do

- It is not a certified translation or interpretation. Where one is legally required — in-court proceedings, sworn statements, depositions, certain government filings — this skill does not substitute for a certified interpreter, and says so.
- It does not invent a fact, date, or detail not present in the source material.
- It does not calculate deadlines or statutes of limitations — it flags anything time-sensitive the client mentioned for the attorney to verify independently.
- It does not resolve an ambiguous or idiomatic phrase silently in either direction — it flags the ambiguity and asks.
- It does not send, file, or transmit anything — the attorney reviews and sends every communication themselves.
- It does not provide legal advice.

---

— Prepared with Protomated Spanish Intake & Client Communication Skill (Claude Desktop) | Attorney (or certified interpreter) review required | Not legal advice
