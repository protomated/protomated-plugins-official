# AI Tool Consolidation Audit

Standalone plugin with one skill: `/ai-tool-audit`. Runs a short guided interview on which AI tools your firm uses, for what, and with what data — flagging data-handling risks and redundant tools, and recommending genuine consolidation candidates onto a governed Claude + MCP stack, mapped to your firm's actual workflows.

Part of the [Protomated plugin marketplace](https://github.com/protomated/protomated-plugins-official).

## Connectors

None. This plugin reads only what you tell it about your current AI tools — no MCP connector or authorization step is required, and it never accesses or changes anything at any vendor.

## Compliance

Every output carries the required header/footer: **AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED / Not legal advice.** It never certifies compliance with any bar rule or security standard — verify unconfirmed data-handling terms directly with each vendor before relying on the audit. Do not use consumer-tier Claude (claude.ai Personal or Pro) with client-privileged content — see the Starter Kit README for plan-tier and ABA Op. 512 guidance.

## License

Apache 2.0.
