# Immigration Filing Drafter

Standalone plugin with one skill: `/immigration-filing`. Drafts immigration filing narrative sections — support letters, cover letters, RFE-response outlines — strictly from attorney-supplied case facts and the firm's own filing templates, plus client status-update emails when the attorney reports a case-status change. Never looks up or submits anything to USCIS, and never computes a filing deadline.

Part of the [Protomated plugin marketplace](https://github.com/protomated/protomated-plugins-official).

## Connectors

None. This plugin reads only the workspace folder you explicitly attach in Claude Desktop / Cowork — no MCP connector or authorization step is required.

## Compliance

Every output carries the required header/footer: **AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED / Not legal advice.** It never invents a case fact, predicts an outcome, cites immigration law from its own knowledge, computes a filing deadline, or looks up or submits anything to USCIS — you verify every fact and requirement and review for legal sufficiency before filing or sending. Do not use consumer-tier Claude (claude.ai Personal or Pro) with client-privileged content — see the Starter Kit README for plan-tier and ABA Op. 512 guidance.

## License

Apache 2.0.
