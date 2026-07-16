# Court Deadline Calendar

Standalone plugin with one skill: `/court-deadline`. Surfaces upcoming court deadlines and filing windows for a matter — response deadlines, filing dates, and statute-of-limitations concerns — from your matter files and calendar.

Part of the [Protomated plugin marketplace](https://github.com/protomated/protomated-plugins-official). Want all five attorney skills in one install? Use the **Solo Attorney Starter Kit** from the same marketplace.

## Connectors

| Connector | Used for |
|---|---|
| Filesystem | Reads matter files for dates and deadlines |
| Google Calendar | Reads events to find gaps; offers to create events only with your explicit confirmation |

## Compliance

Every output carries the required header/footer: **AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED / Not legal advice.** It does not calculate deadlines on your behalf — it surfaces dates for you to verify against the rules of your jurisdiction. No calendar event is created without your explicit in-conversation confirmation. Do not use consumer-tier Claude (claude.ai Personal or Pro) with client-privileged content — see the Starter Kit README for plan-tier and ABA Op. 512 guidance.

## License

Apache 2.0.
