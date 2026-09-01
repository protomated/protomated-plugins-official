# Bar-Compliant Marketing Reviewer

Standalone plugin with one skill: `/marketing-review`. Reviews a piece of attorney marketing copy — website page, ad, social post, or review response — against ABA Model Rules 7.1–7.3 and the advertising rules of the state(s) you practice in, flagging language that needs your attention before it goes live.

Part of the [Protomated plugin marketplace](https://github.com/protomated/protomated-plugins-official).

## Connectors

None. This plugin reads only the marketing copy you paste or attach in Claude Desktop / Cowork — no MCP connector or authorization step is required.

## Compliance

Every output carries the required header/footer: **AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED / Not legal advice.** It flags language for your review only — it never tells you a piece of copy "is compliant," and it never files, submits, or publishes anything. Rule text and state variations are a starting reference, not a substitute for confirming the current rule text and any recent amendments in your jurisdiction. Do not use consumer-tier Claude (claude.ai Personal or Pro) with client-privileged content — see the Starter Kit README for plan-tier and ABA Op. 512 guidance.

## License

Apache 2.0.
