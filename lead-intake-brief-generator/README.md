# Lead Intake Brief Generator

Standalone plugin with one skill: `/lead-intake-brief`. Turns attorney-supplied intake notes, an email thread, or uploaded documents into a one-page consult-prep and lead-triage brief — parties, dates, matter-type suggestion, urgency flag, open questions, recommended next step.

Part of the [Protomated plugin marketplace](https://github.com/protomated/protomated-plugins-official).

## Connectors

None. This plugin drafts entirely from the intake material you paste or attach — no MCP connector or authorization step is required.

## Compliance

Every output carries the required header/footer: **AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED / Not legal advice.** Suggestion only — it never accepts, declines, routes, or assigns a lead, never runs a conflict check, and never computes a deadline; you review and decide before acting on any lead. Do not use consumer-tier Claude (claude.ai Personal or Pro) with client-privileged content — see the Starter Kit README for plan-tier and ABA Op. 512 guidance.

## License

Apache 2.0.
