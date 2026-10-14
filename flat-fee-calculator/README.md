# Flat-Fee Repricing Calculator for Law Firms — Claude Desktop Plugin

A Claude Desktop plugin for solo and small-firm attorneys. One skill (`/flat-fee-calculator`): Build a revenue-impact model comparing hourly billing to flat-fee pricing for tasks you've sped up with AI tools. Takes your current hourly rate, typical task time before/after using AI, and matter volume, then outputs a CSV with candidate flat-fee price points that preserve margin. Pricing/business modeling only, no legal advice implications.

**Distributed by [Protomated](https://protomated.com) as a free download.**

**Works with:** Claude Desktop and ChatGPT Desktop.

---

## ⚠️ Required: Read This Before You Install

### 1. You must be on a qualifying Claude plan

Do NOT use this plugin for client work on a consumer Claude plan (claude.ai Personal or Claude Pro). Consumer plans do not provide a Data Processing Agreement (DPA) covering client-privileged content. Use **Claude for Work**, **Claude Team/Enterprise**, or the **Claude API** with a signed DPA.

### 2. This is a pricing/business model, not legal advice

It does not verify your state bar's fee-reasonableness or flat-fee-specific rules — confirm those separately before repricing.

### 3. No action without your confirmation

The plugin is instructed to request your explicit in-conversation confirmation before writing any file.

---

## Installation (under 5 minutes)

### Step 1 — Download and install

1. Download `flat-fee-calculator.zip` from the [Releases page](https://github.com/protomated/claude-flat-fee-calculator/releases).
2. Double-click the `.zip` file, or drag it into Claude Desktop's **Extensions** panel.
3. Claude Desktop will install the plugin.

### Step 2 — (Optional) Connect Filesystem

This skill works entirely from numbers you type in — Filesystem is only needed if you want it to save the CSV model for you, or cross-check estimates against a saved billing-narrative output. See [CONNECTORS.md](CONNECTORS.md) for setup.

### Step 3 — Verify

Open a new Claude Desktop chat. Type `/skills`. You should see `/flat-fee-calculator` listed. Run it to start.

### Using this in ChatGPT Desktop

This skill also works in ChatGPT Desktop. Install the plugin the same way (Settings → Apps & Connectors → Plugins → Upload plugin archive), then start a new chat — no connector needed, the skill works from the numbers you type in.

---

## The Skill

### `/flat-fee-calculator` — Flat-Fee Repricing Calculator

Build a revenue-impact model comparing hourly billing to flat-fee pricing for tasks you've sped up with AI tools. Takes your current hourly rate, typical task time before/after using AI, and matter volume, then outputs a CSV with candidate flat-fee price points that preserve margin. Pricing/business modeling only, no legal advice implications.

---

## License

Apache 2.0. See [LICENSE](LICENSE).

## Feedback and Issues

[GitHub Issues](https://github.com/protomated/claude-flat-fee-calculator/issues) | [hello@protomated.com](mailto:hello@protomated.com)