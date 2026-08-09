# New Matter Organizer

Standalone plugin with one skill: `/new-matter-organizer`. Runs a structured intake, drafts a conflict-check memo, creates `matter-profile.md`, and generates a matter-opening checklist. The matter profile is the anchor file the other Protomated attorney plugins read from.

Part of the [Protomated plugin marketplace](https://github.com/protomated/protomated-plugins-official). Want all eight attorney skills in one install? Use the **Solo Attorney Starter Kit** from the same marketplace.

## Connectors

| Connector | Used for |
|---|---|
| Filesystem | Writes `matter-profile.md` and `matter-checklist.md` — only with your explicit confirmation |

## Compliance

Every output carries the required header/footer: **AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED / Not legal advice.** The skill writes no file without your explicit in-conversation confirmation. Do not use consumer-tier Claude (claude.ai Personal or Pro) with client-privileged content — see the Starter Kit README for plan-tier and ABA Op. 512 guidance.

## License

Apache 2.0.
