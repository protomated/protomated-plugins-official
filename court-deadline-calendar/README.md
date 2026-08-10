# Court Deadline Calendar

Standalone plugin with one skill: `/court-deadline`. Computes a court or filing deadline from a trigger date and the rule you provide, showing every step of the reasoning. Does not maintain a jurisdiction-specific rule database — you supply the rule every time. Drafts a Google Calendar event for confirmation.

Part of the [Protomated plugin marketplace](https://github.com/protomated/protomated-plugins-official). Want all eight attorney skills in one install? Use the **Solo Attorney Starter Kit** from the same marketplace.

## Connectors

| Connector | Used for |
|---|---|
| Google Calendar | Creates a deadline event only with your explicit confirmation |

## Compliance

Every output carries the required header/footer: **AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED / Not legal advice.** It does not know your jurisdiction's court rules — it computes only from the rule you supply, and the result must be verified against your docketing software or a certified legal-calendar service before you rely on it. No calendar event is created without your explicit in-conversation confirmation. Do not use consumer-tier Claude (claude.ai Personal or Pro) with client-privileged content — see the Starter Kit README for plan-tier and ABA Op. 512 guidance.

## License

Apache 2.0.
