# Meeting Prep Brief

Standalone plugin with one skill: `/meeting-prep`. Produces a one-page pre-meeting brief from your matter folder and recent email — tailored to client check-ins, depositions, mediations, settlement conferences, and court appearances. Read-only: writes nothing.

Part of the [Protomated plugin marketplace](https://github.com/protomated/protomated-plugins-official). Want all eight attorney skills in one install? Use the **Solo Attorney Starter Kit** from the same marketplace.

## Connectors

| Connector | Used for |
|---|---|
| Filesystem | Reads the matter folder |
| Gmail | Scans the last 14 days of matter-related email, read-only |

## Compliance

Every output carries the required header/footer: **AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED / Not legal advice.** This skill takes no state-changing actions. Do not use consumer-tier Claude (claude.ai Personal or Pro) with client-privileged content — see the Starter Kit README for plan-tier and ABA Op. 512 guidance.

## License

Apache 2.0.
