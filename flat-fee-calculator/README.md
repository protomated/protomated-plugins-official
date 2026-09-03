# Flat-Fee Repricing Calculator

Standalone plugin with one skill: `/flat-fee-calculator`. Builds a revenue-impact model comparing hourly billing to flat-fee/value pricing for tasks you've sped up with AI tools — outputs a CSV with candidate flat-fee price points that preserve margin.

Part of the [Protomated plugin marketplace](https://github.com/protomated/protomated-plugins-official). Want the full attorney skill set in one install? Use the **Solo Attorney Starter Kit** from the same marketplace.

## Connectors

| Connector | Used for |
|---|---|
| Filesystem | Optionally cross-checks time estimates against saved billing-narrative output; saves the CSV model only with your explicit confirmation |

## Compliance

Every output carries the required header/footer: **AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED / Not legal advice.** This is a pricing/business model, not legal advice and not an opinion on your state bar's fee-reasonableness rules. No file is written without your explicit in-conversation confirmation. Do not use consumer-tier Claude (claude.ai Personal or Pro) with client-privileged content — see the Starter Kit README for plan-tier and ABA Op. 512 guidance.

## License

Apache 2.0.
