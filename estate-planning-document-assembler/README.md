# Estate Planning Document Assembler

Standalone plugin with one skill: `/estate-documents`. Populates a basic will, healthcare power of attorney, financial power of attorney, and HIPAA authorization from one intake pass, using your firm's own state-specific templates when attached, or generic placeholders when not. Never determines which documents a client needs or your state's execution formalities — you verify and finalize every document before the client signs.

Part of the [Protomated plugin marketplace](https://github.com/protomated/protomated-plugins-official).

## Connectors

None. This plugin reads only the workspace folder you explicitly attach in Claude Desktop / Cowork — no MCP connector or authorization step is required.

## Compliance

Every output carries the required header/footer: **AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED / Not legal advice.** It does not determine which documents a client needs or verify your state's execution requirements (witnesses, notarization, self-proving affidavit) — you confirm those and finalize every document before your client signs anything. Do not use consumer-tier Claude (claude.ai Personal or Pro) with client-privileged content — see the Starter Kit README for plan-tier and ABA Op. 512 guidance.

## License

Apache 2.0.
