# Engagement Letter Drafter

Standalone plugin with one skill: `/engagement-letter`. Drafts a retainer and engagement letter from intake data — scope of representation, fee structure, client obligations, and required ethical disclosures.

Part of the [Protomated plugin marketplace](https://github.com/protomated/protomated-plugins-official). Want all eight attorney skills in one install? Use the **Solo Attorney Starter Kit** from the same marketplace.

## Connectors

| Connector | Used for |
|---|---|
| Filesystem | Reads intake data / matter profile; saves the letter only with your explicit confirmation |
| Gmail | Searches and reads client email for fee terms; never sends anything |

## Compliance

Every output carries the required header/footer: **AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED / Not legal advice.** No file is written and no email is sent without your explicit in-conversation confirmation. Do not use consumer-tier Claude (claude.ai Personal or Pro) with client-privileged content — see the Starter Kit README for plan-tier and ABA Op. 512 guidance.

## License

Apache 2.0.
