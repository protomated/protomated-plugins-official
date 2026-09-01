# Spanish Intake Skill

Standalone plugin with one skill: `/spanish-intake`. Bilingual (English/Spanish) client intake and communication — turns Spanish-language intake notes or a voicemail transcript into a structured English intake summary, or turns an English draft communication into a natural Spanish version. Flags ambiguous translations for your confirmation rather than guessing.

Part of the [Protomated plugin marketplace](https://github.com/protomated/protomated-plugins-official).

## Connectors

None. This plugin reads only the text you paste or attach in Claude Desktop / Cowork — no MCP connector or authorization step is required.

## Compliance

Every output carries the required header/footer: **AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED / Not legal advice.** It is not a certified translation or interpretation — where one is legally required (in-court proceedings, sworn statements, certain government filings), a certified interpreter is still required. It never invents a fact not present in the source, and it flags ambiguous translations rather than guessing. Nothing is sent, filed, or transmitted — you review and send every communication yourself. Do not use consumer-tier Claude (claude.ai Personal or Pro) with client-privileged content — see the Starter Kit README for plan-tier and ABA Op. 512 guidance.

## License

Apache 2.0.
