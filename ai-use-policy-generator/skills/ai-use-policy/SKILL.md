---
name: ai-use-policy
description: Run a guided interview about your firm's AI tools, data practices, client types, and jurisdiction, then draft three ready-to-adopt documents: an internal AI-use policy, a client-facing AI-disclosure clause for engagement letters, and a one-page safe AI checklist. Also flags any consumer-grade tools currently touching client data and suggests safer alternatives. Use when your firm has no written AI policy, or when an existing policy needs a refresh.
argument-hint: "[optional: path to save the generated documents]"
last_verified: 2026-09-29
freshness_window: 6 months
freshness_category: regulatory
verified_against:
  - https://www.americanbar.org/content/dam/aba/administrative/professional_responsibility/ethics-opinions/aba-formal-opinion-512.pdf
---

# /ai-use-policy — AI Use Policy & Client-Disclosure Generator

> ⚠️ AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED
> These documents are starting drafts generated from your interview answers. Do not adopt or distribute any of them without your independent review, necessary customization, and formal firm adoption. This is not legal advice.

Conduct a short guided interview, then produce three documents:

1. **Internal AI-Use Policy** — the firm-facing governance document
2. **Client-Facing AI-Disclosure Clause** — a ready-to-paste paragraph for engagement letters
3. **Safe AI Checklist** — a one-page operational reference for daily use

**This skill works entirely from your answers.** It does not read your email or existing files. It only writes files when you explicitly confirm.

## Invocation

```
/ai-use-policy
/ai-use-policy ~/Documents/Firm-Policies
```

---

## Workflow

### Step 1 — Conduct the guided interview

Ask the attorney the following questions, one section at a time. Wait for answers before continuing. If an answer is unclear, ask a brief follow-up. Do not skip any section — every answer shapes the generated documents.

---

**Section A — AI Tools in Use**

> "Let's start with the AI tools your firm currently uses. I'll ask about a few common ones, and you can add any I miss.
>
> For each tool you use, tell me:
> - Which tier or plan you're on (free, paid personal/individual, or business/enterprise)
> - What you use it for (drafting, research, summarizing, client communications, billing, etc.)
>
> Here are the most common ones — do any of these apply?"
>
> - **ChatGPT** (OpenAI) — Free, Plus/Pro, Team, or Enterprise?
> - **Claude** (Anthropic) — Personal, Pro, for Work/Team, or Enterprise/API?
> - **Microsoft Copilot** — Free/personal, or Microsoft 365 Copilot on a business plan?
> - **Google Gemini** — Personal Google account, or Google Workspace (admin-enabled)?
> - **Perplexity AI** — Free, Pro, or Enterprise?
> - **Harvey AI, CoCounsel, Lexis+ AI, Westlaw AI, or another legal-specific AI tool?**
> - **GitHub Copilot** — Individual, Business, or Enterprise?
> - **Any other AI tools not listed above?**

Record each tool, its tier, and its stated use.

---

**Section B — Data Sensitivity**

> "Now let's talk about what goes into those tools. Which of the following types of content does your firm currently enter into AI tools? Check all that apply:
>
> - Client names combined with matter details
> - Case facts or narratives
> - Verbatim client emails or communications
> - Medical records or health information
> - Financial documents (tax returns, bank statements, pay stubs)
> - Court filings or pleadings
> - Attorney-client privileged communications or work product
> - None of the above — we only enter non-client content (general research questions, template drafting, etc.)"

---

**Section C — Client Types**

> "What types of clients does your firm primarily serve? (Select all that apply)
>
> - Individual consumers (general public)
> - Small businesses
> - Larger businesses or corporate clients
> - Government entities
> - Minors or clients under guardianship
> - Clients involved in criminal, immigration, or other matters with heightened sensitivity"

---

**Section D — Jurisdiction**

> "In which state or states are you licensed to practice? And is your practice limited to one state, or do you handle matters in multiple jurisdictions?"

---

**Section E — Firm Size and Staff**

> "Who else in your firm uses AI tools besides you?
>
> - No staff — solo practice
> - Administrative staff or receptionists
> - Paralegals or legal assistants
> - Associate attorneys
> - Other"

---

**Section F — Current Policy Status**

> "Finally, a quick baseline check:
>
> - Does your firm currently have a written AI policy? (Yes / No / Informal verbal practice only)
> - Do your current engagement letters include any AI-disclosure language? (Yes / No / Not sure)
> - Have you received any client questions or objections about your AI tool use? (Yes / No)"

---

### Step 2 — Analyze consumer-grade risk

Review the tools and tiers the attorney disclosed. Flag any tool that falls into the following categories:

**Flag as HIGH RISK for client data (consumer-tier, no DPA):**
- ChatGPT Free (no subscription)
- ChatGPT Plus or Pro (individual paid — not Team or Enterprise)
- Claude.ai Personal or Claude Pro (consumer plans without a DPA)
- Microsoft Copilot on a personal/free account (not Microsoft 365 Copilot on a commercial plan)
- Google Gemini on a personal Google account (not Google Workspace with admin-enabled Gemini and a DPA)
- Perplexity AI Free or Pro (not Enterprise tier)
- Meta AI (any tier — no enterprise legal offering)
- Any AI tool the attorney cannot confirm has a signed DPA covering their use

**Note as LOWER RISK (enterprise tier with DPA):**
- ChatGPT Team or Enterprise
- Claude for Work, Claude Team, Claude Enterprise, or Claude API with a signed DPA
- Microsoft 365 Copilot with commercial data protection enabled by the firm's IT admin
- Google Workspace Gemini (admin-enabled, covered by Google's DPA)
- Harvey AI, Thomson Reuters CoCounsel, Lexis+ AI, Casetext — legal-specific enterprise tools with established DPAs

For each flagged high-risk tool the attorney reports using with client data, include a specific risk notice in the output and suggest the enterprise-tier equivalent or a safer alternative.

---

### Step 3 — Identify jurisdiction-specific callout

Based on the attorney's stated jurisdiction(s), include the following placeholder in Document 1. Do **not** invent specific opinion numbers or dates — mark them clearly as placeholders for the attorney to verify.

Note to include in the policy: "State bars are rapidly publishing AI-specific guidance. Verify the current guidance for your jurisdiction at your state bar's website before finalizing this policy. States with published guidance or formal opinions as of late 2025 include (but are not limited to): California, Colorado, Florida, Georgia, Illinois, New Jersey, New York, Oregon, Pennsylvania, Texas, Virginia, and Washington. If your state is listed, look up the specific opinion or guidance document and insert the citation in § 10 of this policy."

---

### Step 4 — Draft the three documents

Produce all three documents in a single response, separated by clear headers. Populate each document with the attorney's specific answers. Leave any item that depends on information the attorney did not supply as a clearly marked placeholder: `[CONFIRM WITH ATTORNEY]` or `[INSERT — see note]`.

---

#### Document 1: [FIRM NAME] Internal AI-Use Policy

```
⚠️ AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED
This is a starting draft generated from your interview answers. Review, customize, and formally adopt before distributing to staff or relying on for compliance purposes. Not legal advice.

---

# [FIRM NAME] — AI-Use Policy
Version: [DATE] Draft | Status: PENDING ATTORNEY ADOPTION

---

## 1. Purpose and Scope

This policy governs the use of artificial intelligence (AI) tools by all attorneys and staff of [FIRM NAME]. It applies to every AI-assisted drafting, research, summarization, and communication tool used in connection with client matters or firm operations.

[FIRM NAME] recognizes that AI tools offer real efficiency gains while also presenting confidentiality, competence, and disclosure obligations under the applicable rules of professional conduct. This policy establishes minimum standards for responsible AI use firm-wide.

This is a starting-point draft. The firm must review, customize, and formally adopt this policy. Consult your state bar's AI ethics guidance before finalizing.

---

## 2. Approved Tools and Tier Requirements

### 2.1 Enterprise-Tier Requirement

Only AI tools operating under a signed Data Processing Agreement (DPA) or equivalent contractual protection covering client-privileged content may be used in connection with client matters.

Consumer-tier accounts — including free plans and individually paid plans that lack enterprise data-protection terms — must not be used to enter client names, matter details, privileged communications, or any other confidential firm or client information.

### 2.2 Current Tool Status

Based on this firm's current tool usage, the following applies:

[APPROVED FOR CLIENT MATTER USE — DPA/enterprise tier confirmed:]
[List each enterprise-tier tool from the attorney's answers]

[PROHIBITED FOR CLIENT MATTER USE — consumer tier, no DPA:]
[List each flagged consumer-tier tool from the attorney's answers]
[For each: state the specific risk — e.g., "ChatGPT Plus: individual paid tier; OpenAI's consumer terms do not include a DPA for privileged content; upgrade to ChatGPT Team or Enterprise before using with client data."]

### 2.3 Adding a New Tool

Any attorney or staff member wishing to use an AI tool not on the Approved list must obtain written approval from [SUPERVISING ATTORNEY / FIRM MANAGEMENT] before using the tool with any client or firm-confidential data. Approval requires confirming the tool's enterprise-tier status and DPA coverage.

---

## 3. Data Classification Rules

### 3.1 What May Be Input Into Approved AI Tools

The following content may be entered into approved enterprise-tier tools:
- General research questions not tied to a specific client or matter
- Matter summaries and fact patterns with client names replaced by pseudonyms where practical
- Firm-drafted template language for review, improvement, or adaptation
- Billing narrative drafts based on the attorney's own work notes
- Internal firm operations content not containing client-privileged information

### 3.2 What Must Not Be Input Into Consumer-Tier Tools

The following must never be entered into a consumer-tier AI tool:
- Client names combined with sensitive matter details
- Verbatim client emails, texts, or other communications
- Medical records, financial statements, or documents containing personal identifying information
- Attorney-client privileged communications or attorney work product
- Information about matters involving minors, immigration status, criminal charges, or other heightened-sensitivity content

[If the attorney reported entering any of the above into consumer-tier tools in the interview, add a specific callout here identifying the tool and the data type, and state that this practice must stop until the tool is upgraded to an enterprise tier or replaced.]

### 3.3 Pseudonymization as a Risk-Reduction Practice

Even on enterprise-tier tools, the firm encourages replacing client names and identifying details with generic placeholders (Client A, Opposing Party B, Company X) before entering matter content into any AI tool, as an additional layer of protection.

---

## 4. Required Disclosures

### 4.1 Engagement Letter Disclosure

ABA Formal Opinion 512 (July 2024) addresses attorney obligations when using AI tools that may access client confidential information. [CONFIRM WITH ATTORNEY: verify that your state bar has not imposed additional or different requirements.]

[FIRM NAME] requires the AI-Disclosure Clause (see Document 2) to be included in all new engagement letters as of [EFFECTIVE DATE — CONFIRM WITH ATTORNEY].

### 4.2 Client Opt-Out

If a client requests that AI tools not be used in their matter, the firm will honor that request. Any opt-out must be:
- Documented in the matter file on the date received
- Communicated to any staff who work on the matter
- Confirmed in writing to the client

---

## 5. Supervision and Review Requirements

**All AI output is a draft.** No AI-generated text — whether a court filing, client letter, research memo, or internal document — may be sent, filed, or formally presented without review and approval by a licensed attorney.

**The attorney is responsible for every document the firm sends.** Submitting AI-generated content without independent review is the same professional risk as submitting unverified research. The attorney's name on the document is the attorney's endorsement of its accuracy and appropriateness.

**Citation verification is mandatory.** Any AI tool output containing case citations, statutory references, or regulatory citations must have those citations independently verified before submission. AI tools can and do hallucinate legal authorities.

---

## 6. Staff Training

All attorneys and staff who use AI tools in connection with firm operations must:
- Read this policy before first use of any AI tool for firm or client work
- Review this policy annually (see § 9 for the review schedule)
- Review any state bar AI ethics guidance applicable to their jurisdiction
- Acknowledge updates to this policy within 30 days of any amendment

[If the firm has staff beyond the solo attorney: add a training log requirement here.]

---

## 7. Prohibited Uses

The following uses of AI tools are expressly prohibited:

- Entering client-privileged content into a consumer-tier AI tool without a DPA
- Submitting AI-generated legal arguments, research, or court filings without independent attorney review and verification
- Using AI to generate legal advice that is delivered directly to clients as the firm's professional opinion, without attorney review of the AI output
- Using AI to draft communications that misrepresent the nature or authorship of the document where disclosure would be required
- Using AI tools to access, process, or store client data on a system not covered by a DPA or not expressly approved under this policy
- Sharing this firm's approved enterprise-tier AI account credentials with unauthorized third parties

---

## 8. Incident Reporting

If any attorney or staff member believes that client-privileged content has been transmitted to an unauthorized AI system, or that client data may have been exposed to an AI tool not covered by a DPA:

1. Stop using the tool immediately.
2. Document what was transmitted, to which tool, on what date.
3. Notify [SUPERVISING ATTORNEY / FIRM MANAGEMENT] the same business day.
4. The firm will assess whether client notification is required under applicable ethics rules and data protection obligations.

---

## 9. Policy Review Schedule

This policy must be reviewed and updated:
- No later than [DATE — 12 months from the date of adoption]
- After any change to the firm's approved AI tool list
- After any relevant state bar ethics opinion or ABA formal opinion is issued on AI and legal practice
- After any approved AI tool vendor changes its data handling terms or DPA

---

## 10. State Ethics Compliance

[JURISDICTION] may have issued specific AI ethics guidance that applies to this firm's practice. The firm is responsible for monitoring and complying with:

[INSERT: your state bar's current AI ethics opinion or guidance document — verify the current version at [STATE BAR WEBSITE]. Do not rely on a document you have not read in full.]

General reference: ABA Formal Opinion 512 (AI and the Model Rules of Professional Conduct, July 2024) applies to attorneys in all jurisdictions as a statement of general guidance under the Model Rules.

States with published AI-specific ethics guidance or formal opinions as of late 2025 include (but are not limited to): California, Colorado, Florida, Georgia, Illinois, New Jersey, New York, Oregon, Pennsylvania, Texas, Virginia, and Washington. If your state is listed, locate and read the specific guidance before finalizing this policy.

---

*This policy was drafted with AI assistance via the Protomated AI Use Policy Generator. It is a starting draft and must be reviewed, customized, and formally adopted by the firm before use. This document does not constitute legal advice. Consult your state bar's ethics counsel if you have questions about your specific obligations.*
```

---

#### Document 2: Client-Facing AI-Disclosure Clause

```
⚠️ AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED
Insert this clause into your standard engagement letter. Review for accuracy and compliance with your jurisdiction's disclosure requirements before use. Not legal advice.

---

**AI-ASSISTED SERVICES DISCLOSURE**

[FIRM NAME] uses artificial intelligence (AI) tools to assist with drafting, legal research, and practice management tasks. These tools are operated on business or enterprise-tier subscriptions subject to data protection agreements that protect the confidentiality of your information consistent with our professional obligations.

All work product produced with AI assistance — including documents, correspondence, and research — is reviewed and approved by a licensed attorney before use. AI tools do not make legal judgments or provide legal advice on your behalf. Your attorney's independent professional judgment governs every recommendation and action we take in your matter.

[OPTIONAL — include if applicable to your practice: If you prefer that AI tools not be used in your matter, please notify us and we will honor that preference.]

By signing this engagement letter, you acknowledge that you have been informed of our firm's use of AI-assisted tools in legal drafting and practice management.

---

[CONFIRM WITH ATTORNEY: Verify that this language satisfies your jurisdiction's informed-consent requirements. Some state bars require more specific disclosure of which tools are used or how client data is protected. Check your state bar's current guidance before inserting this clause.]
```

---

#### Document 3: [FIRM NAME] Safe AI Checklist

```
⚠️ AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED
Review and customize before distributing to firm staff. Not legal advice.

---

# [FIRM NAME] — Safe AI Checklist
One-page operational reference | Review before using AI on any client matter

---

## Before You Use AI on a Matter

[ ] The AI tool I am using is on the firm's Approved Tool List
[ ] I am logged into the firm's business/enterprise-tier account — not a free or personal account
[ ] The client's engagement letter includes the AI-Disclosure Clause
[ ] The client has not opted out of AI tool use for this matter
[ ] The type of content I am about to enter is permitted under the firm's Data Classification Rules (AI-Use Policy § 3)

---

## When Entering Content Into an AI Tool

[ ] I have not combined the client's full name with sensitive matter details in a consumer-tier tool
[ ] Where practical, I have replaced client names and identifying details with pseudonyms (Client A, Opposing Party B)
[ ] I have not pasted verbatim client emails, medical records, financial statements, or privileged communications into the tool
[ ] I am working in the firm's enterprise-tier account, not a personal account or free tier

---

## When Reviewing AI Output

[ ] I have read the full AI output — I have not skimmed or assumed it is accurate
[ ] I have independently verified every case citation, statute, regulation, or record reference the AI produced
[ ] I have confirmed that all factual statements in the AI output are accurate and present in the matter record
[ ] I have corrected any errors, hallucinations, or misstatements before passing the output forward

---

## Before Sending Any AI-Assisted Document

[ ] A licensed attorney has reviewed and approved this document
[ ] The document reflects the attorney's independent professional judgment, not just the AI's output
[ ] If the document goes to a client: the engagement letter already includes the AI-Disclosure Clause
[ ] If the document is a court filing: all citations are independently verified; no AI-hallucinated authorities remain
[ ] If the document contains factual claims about the client's matter: every fact is verified against the source record

---

*Print and post at your workstation, or save to your firm's policy folder. Review annually with the firm's AI-Use Policy.*

*Prepared with Protomated AI Use Policy Generator | Attorney review required before adoption | Not legal advice*
```

---

### Step 5 — Flag consumer-grade risks and suggest alternatives

After presenting the three documents, if the attorney disclosed any consumer-tier tools being used with client data, append a dedicated **Risk Flags** section:

```
## ⚠️ Consumer-Grade Tool Risk Flags

Based on your interview answers, the following tools are currently being used with client data at a tier that does not include a Data Processing Agreement. This creates confidentiality and ethics risk that this policy addresses.

[For each flagged tool:]

**[TOOL NAME] — [CURRENT TIER]**
Risk: [Specific risk — e.g., "OpenAI's consumer terms for ChatGPT Plus do not include a DPA covering attorney-client privileged content. Inputs may be used to improve OpenAI's models unless you have opted out in account settings — and even opt-out does not provide the contractual protection a DPA does."]
Recommended action: [Specific alternative — e.g., "Upgrade to ChatGPT Team or Enterprise. Team starts at $30/user/month and includes a DPA. Alternatively, use Claude for Work or Claude Team, which includes a DPA and is the tool running this skill."]

[Repeat for each flagged tool.]

If you do not wish to upgrade any of these tools, update § 2.2 of the Internal AI-Use Policy to move them to the Prohibited list and ensure staff stops using them with client data.
```

---

### Step 6 — Offer to save documents

After presenting all three documents and any risk flags, ask:

> "Would you like me to save these three documents to your firm's policy folder? I can save them as:
>
> - `ai-use-policy-draft-[DATE].md` — the internal policy
> - `ai-disclosure-clause-draft-[DATE].md` — the engagement letter clause
> - `safe-ai-checklist-draft-[DATE].md` — the operational checklist
>
> Which folder should I save them to? (Or type 'no' to skip saving.)"

Do not write any file without explicit confirmation.

---

## Output Format

```
⚠️ AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED
These documents were generated by an AI assistant based on your interview answers. They are starting drafts only. Do not adopt or distribute any of these documents without your independent review, any necessary customization, and formal firm adoption. This is not legal advice.

---

## Document 1: [FIRM NAME] Internal AI-Use Policy
[Full policy draft]

---

## Document 2: Client-Facing AI-Disclosure Clause
[Full clause draft]

---

## Document 3: Safe AI Checklist
[Full checklist]

---

## ⚠️ Consumer-Grade Tool Risk Flags
[Only present if consumer-tier tools were flagged in Step 2]

---

Save these files? [Awaiting your confirmation and folder path]
```

---

## What This Skill Does Not Do

- It does not interpret whether your current AI practices comply with your state's rules of professional conduct. That determination is yours to make, with your state bar's guidance.
- It does not look up or cite specific state bar opinion numbers or dates. All jurisdiction-specific citations are placeholders you must verify and insert.
- It does not produce a final, board-ready compliance document. Every output requires attorney review and formal firm adoption.
- It does not access Gmail, your matter files, or any external service. It works entirely from your answers.
- It does not write files without your explicit confirmation.

---

— Prepared with Protomated AI Use Policy Generator | Attorney review and formal adoption required before use | Not legal advice
