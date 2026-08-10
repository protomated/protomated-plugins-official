# Contract Document Reviewer

Standalone plugin with one skill: `/contract-review`. Reviews a contract clause by clause against a configurable playbook — your firm's own `playbook.md` if attached, or a bundled generic playbook if not — rating each clause GREEN, YELLOW, RED, or UNRATED with plain-English rationale and suggested redline language.

Part of the [Protomated plugin marketplace](https://github.com/protomated/protomated-plugins-official).

## Connectors

None. This plugin reads only the workspace folder you explicitly attach in Claude Desktop / Cowork — no MCP connector or authorization step is required.

## Compliance

Every output carries the required header/footer: **AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED / Not legal advice.** It never decides whether to sign, negotiate, or reject a contract, never verifies enforceability under governing law, and never sends, files, or executes anything — you review and confirm every rating before use. Do not use consumer-tier Claude (claude.ai Personal or Pro) with client-privileged content — see the Starter Kit README for plan-tier and ABA Op. 512 guidance.

## License

Apache 2.0.
