# Billing Narrative Drafter

Standalone plugin with one skill: `/billing-narrative`. Turns raw time-entry notes into polished, client-ready billing narratives — specific, defensible, and free of block-billing flags.

Part of the [Protomated plugin marketplace](https://github.com/protomated/protomated-plugins-official). Want all eight attorney skills in one install? Use the **Solo Attorney Starter Kit** from the same marketplace.

## Connectors

| Connector | Used for |
|---|---|
| Filesystem | Reads time entries and the matter profile; saves narratives only with your explicit confirmation |

## Compliance

Every output carries the required header/footer: **AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED / Not legal advice.** No file is written without your explicit in-conversation confirmation. Do not use consumer-tier Claude (claude.ai Personal or Pro) with client-privileged content — see the Starter Kit README for plan-tier and ABA Op. 512 guidance.

## License

Apache 2.0.
