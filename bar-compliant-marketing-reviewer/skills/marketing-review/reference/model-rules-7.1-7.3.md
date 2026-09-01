> BASELINE REFERENCE — NOT A SUBSTITUTE FOR THE CURRENT RULE TEXT. This file summarizes and quotes the ABA Model Rules of Professional Conduct 7.1–7.3 (as amended through the ABA's 2018 consolidation of the former Rules 7.1–7.5) as a common baseline. States adopt their own versions — some verbatim, some materially different (see [`state-variations.md`](state-variations.md)) — and rule text is amended over time. Always confirm current wording against the attorney's own state's rule text before relying on a citation in a real review.

# ABA Model Rules 7.1–7.3 — Baseline Reference

Used by `/marketing-review` to flag marketing copy for attorney review. Every flag in a review must be tied to a specific rule provision listed here (or a state-specific provision in `state-variations.md`) — never a vague "this seems off."

---

## Rule 7.1 — Communications Concerning a Lawyer's Services

> "A lawyer shall not make a false or misleading communication about the lawyer or the lawyer's services. A communication is false or misleading if it contains a material misrepresentation of fact or law, or omits a fact necessary to make the statement considered as a whole not materially misleading."

**What this catches in marketing copy:**

- **Unsubstantiated superlatives** — "best," "top-rated," "#1," "the leading firm in [practice area]" — without a specific, verifiable, named source (an actual ranking, award, or survey). A superlative tied to a named, verifiable source is a different case than a bare claim.
- **Result-based expectations without qualification** — a specific past settlement or verdict figure presented in a way likely to create an unjustified expectation that a prospective client's case will produce a similar result. The underlying figure isn't the problem; the missing case-specific qualification is.
- **Unsubstantiated comparisons** — "we get better results than other firms," "the toughest lawyers in town" — comparative claims a reasonable reader would take as factual but that aren't tied to a verifiable comparison.
- **Material omissions** — a statement that is technically true but misleading because it leaves out a fact a reasonable prospective client would need (e.g., a "no fee unless we win" statement that omits that costs may still be owed regardless of outcome, where that's the actual fee arrangement).
- **Testimonials and reviews presented without context** — a client testimonial about a specific outcome, used in a way that implies a typical or guaranteed result. (See "review response" handling below — testimonials are a Rule 7.1 issue, not a separate rule.)

## Rule 7.2 — Communications Concerning a Lawyer's Services: Specific Rules

> "(a) Subject to the requirements of Rules 7.1 and 7.3, a lawyer may communicate information regarding the lawyer's services through any media. ... (c) Any communication made pursuant to this Rule shall include the name and office address of at least one lawyer or law firm responsible for its content."

**What this catches in marketing copy:**

- **Missing attorney/firm identification** — the ABA baseline requires the name and office address of at least one lawyer or law firm responsible for the content. A web page, ad, or social post with no identifiable responsible attorney/firm is a 7.2(c) gap.
- **Paying for referrals outside the permitted exceptions** — 7.2(b) permits paying the reasonable cost of the ad itself, referral-service and legal-plan fees, and a few other named exceptions, but not paying a person for steering clients generally. This mostly comes up in copy describing referral arrangements, not in ad text itself — flag if the copy describes a referral or "finder's fee" arrangement that doesn't clearly fit a permitted exception.
- **State-added labeling requirements** — the ABA baseline itself does not require a label like "Attorney Advertising" on general advertising; several states add that requirement by their own rule (see `state-variations.md`). Flag missing state-required labels only when a configured state requires one.

## Rule 7.3 — Solicitation of Clients

> "(a) A lawyer shall not by live person-to-person contact solicit professional employment when a significant motive for the lawyer's doing so is the lawyer's or law firm's pecuniary gain, unless the person contacted [is a lawyer, or has a family, close personal, or prior professional relationship with the lawyer]. ... (c) Every written, recorded or electronic communication from a lawyer soliciting professional employment from someone known to be in need of legal services in a particular matter shall include the words 'Advertising Material' ... unless the recipient is [a lawyer, family member, close friend, or existing/former client]."

**Threshold question — is this even a Rule 7.3 issue?** Rule 7.3 governs *targeted solicitation* of a specific person known to need legal services in a particular matter — a direct mail piece, a personalized email, or a live approach aimed at one identified prospective client. It does **not** govern general public-facing advertising (a website, a run-of-site display ad, a social media post visible to the public, a generic email newsletter) — that's Rule 7.2/7.1 territory. Determine which kind of copy is being reviewed before applying 7.3:

- **General advertising** (website, social post, display ad, blog, review response) → apply Rules 7.1 and 7.2 only.
- **Targeted communication to a specific, identified prospective client** (a personalized letter or email addressed to one named person known to need legal help with a particular matter) → also apply Rule 7.3.

**What this catches, when 7.3 applies:**

- **Missing "Advertising Material" marking** — required at the start of a targeted written/recorded/electronic solicitation to someone known to need legal services in a particular matter (with narrow exceptions for lawyers, family, close friends, and existing/former clients).
- **Coercion, duress, or harassment** — pressure tactics, urgency framing designed to overcome a stated "no," or repeated contact after the recipient has said they don't want to be contacted.
- **Live real-time contact for pecuniary gain** — solicited outside the narrow exceptions in 7.3(a); this is a fact question about the channel and relationship, not something copy text alone always answers — flag and ask if the review is of a live-contact script rather than static copy.

---

## How to flag — three tiers, never a "compliant" verdict

This skill never tells the attorney a piece of copy "is compliant" or "passes." It flags issues for review. Use exactly these three tiers, each tied to a specific rule citation:

- **🔴 LIKELY VIOLATION** — the copy conflicts with a specific, named provision above (or a state-specific provision) with no missing-fact ambiguity — e.g., a bare "#1 firm in [state]" claim with no named source, or a targeted solicitation email with no "Advertising Material" marking in a state that requires it.
- **🟡 FLAG FOR REVIEW** — the copy *may* conflict, but resolving it depends on a fact this skill can't verify from the copy alone (e.g., whether a stated award or ranking is real and current, whether a testimonial's underlying case is representative, whether a comparison claim can actually be substantiated). Say what fact would resolve it.
- **⚪ NOT ADDRESSED** — a category (e.g., a state-specific filing requirement, a specialization-claim rule) that falls outside the states configured for this review, or that depends on information not in the copy (e.g., whether the firm has actually filed the ad with a state bar review committee, if one is required). State plainly that it's out of scope for this pass, not cleared.

Where no rule provision is tripped in a given excerpt, say so as a neutral statement — **"No issue flagged in this excerpt against the rules reviewed"** — never "this is compliant" or "this passes." The skill checked against the rules and states configured for this review; it did not clear the copy for use.
