# Demand Letter Drafter

Standalone plugin with one skill: `/demand-letter`. Drafts a first-pass demand letter from case facts and your firm's own template, or a plain-English client status-update email. Never sets a demand amount or liability position — you are the author of record and send it yourself.

Part of the [Protomated plugin marketplace](https://github.com/protomated/protomated-plugins-official).

## Connectors

None. This plugin reads only the workspace folder you explicitly attach in Claude Desktop / Cowork — no MCP connector or authorization step is required.

## Compliance

Every output carries the required header/footer: **AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED / Not legal advice.** It never sets a demand amount, apportions liability, or sends anything — you review, revise, and send every draft yourself. Do not use consumer-tier Claude (claude.ai Personal or Pro) with client-privileged content — see the Starter Kit README for plan-tier and ABA Op. 512 guidance.

## License

Apache 2.0.
