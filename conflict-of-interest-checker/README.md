# Conflict-of-Interest Checker

Standalone plugin with one skill: `/conflict-check`. Fuzzy-matches new-matter party names against your existing client/matter list — accounting for nicknames, entity-suffix variations, and misspellings — and returns a structured possible-conflict report rated by confidence. Never clears or declines a matter; you make every conflict determination.

Part of the [Protomated plugin marketplace](https://github.com/protomated/protomated-plugins-official).

## Connectors

None. This plugin reads only the client/matter list you attach as a workspace folder in Claude Desktop / Cowork — no MCP connector or authorization step is required.

## Compliance

Every output carries the required header/footer: **AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED / Not legal advice.** It never tells you a matter "is clear" or that "no conflict exists" — it flags possible name matches for your review only, and does not detect relationships that aren't reflected in name data (business ties, family relationships, co-counsel history). This is a higher-complexity skill — test it against your own client-list data and formatting before relying on it for a real intake decision. Do not use consumer-tier Claude (claude.ai Personal or Pro) with client-privileged content — see the Starter Kit README for plan-tier and ABA Op. 512 guidance.

## License

Apache 2.0.
