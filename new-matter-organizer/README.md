# New Matter Organizer

Standalone plugin with one skill: `/new-matter-organizer`. Sets up a new matter folder with the standard directory structure for the practice area, a starter task checklist, and files any existing documents by type. Run this first on every new matter.

Part of the [Protomated plugin marketplace](https://github.com/protomated/protomated-plugins-official). Want all eight attorney skills in one install? Use the **Solo Attorney Starter Kit** from the same marketplace.

## Connectors

| Connector | Used for |
|---|---|
| Filesystem | Reads existing matter folders for naming consistency; writes the new matter folder tree, `tasks.md`, and sorts existing documents — only with your explicit confirmation |

## Compliance

Every output carries the required header/footer: **AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED / Not legal advice.** The skill writes no file without your explicit in-conversation confirmation. Do not use consumer-tier Claude (claude.ai Personal or Pro) with client-privileged content — see the Starter Kit README for plan-tier and ABA Op. 512 guidance.

## License

Apache 2.0.
