# Research Memo Drafter

Standalone plugin with one skill: `/research-memo`. Drafts a legal research memo that cites only the source documents (cases, statutes, briefs, contracts) you've attached to a workspace folder — no open web search, no case-law database, no citation from general training knowledge. Every citation is anchored to a specific source file and page/paragraph; anything the sources don't support is flagged, never filled in.

Part of the [Protomated plugin marketplace](https://github.com/protomated/protomated-plugins-official). Want all eight attorney skills in one install? Use the **Solo Attorney Starter Kit** from the same marketplace.

## Connectors

| Connector | Used for |
|---|---|
| Filesystem | Reads the source-document folder and indexes each file; saves the memo only with your explicit confirmation |

## Compliance

Every output carries the required header/footer: **AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED / Not legal advice.** It refuses to cite anything not present in the attached sources — no fallback to the model's general legal knowledge — and appends a mandatory citation-verification checklist to every memo. No file is written without your explicit in-conversation confirmation. Do not use consumer-tier Claude (claude.ai Personal or Pro) with client-privileged content — see the Starter Kit README for plan-tier and ABA Op. 512 guidance.

## License

Apache 2.0.
