#!/usr/bin/env node
// Write each plugin's .codex-plugin/plugin.json manifest, mirroring the
// readdle/spark-cli-skills pattern: one shared skills/ folder per plugin,
// with a small platform-specific manifest sitting beside .claude-plugin/
// rather than a whole separate repo. Core fields (name, version,
// description, author, homepage, repository, license, keywords) are reused
// directly from each plugin's own .claude-plugin/plugin.json — the single
// source of truth for those — so the two manifests can't drift apart on
// anything but the Codex-only `interface` block below.
//
// Usage: node scripts/write-codex-plugin-configs.mjs

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const INTERFACE_OVERRIDES = {
  "solo-attorney-starter-kit": {
    shortDescription: "Six core workflows for solo attorney practice management in one install.",
    category: "Legal",
    capabilities: ["Read", "Write"],
    defaultPrompt: [
      "Run new-matter-organizer for a new personal injury case.",
      "Draft an intake summary from these consultation notes.",
      "Draft an engagement letter for this new client.",
    ],
  },
  "flat-fee-calculator": {
    shortDescription: "Model flat-fee pricing from AI-driven efficiency gains.",
    category: "Legal",
    capabilities: ["Read", "Write"],
    defaultPrompt: [
      "Build a flat-fee repricing model for an uncontested divorce package.",
      "Model flat-fee pricing for standard NDA review.",
    ],
  },
  "research-memo-drafter": {
    shortDescription: "Draft a legal research memo strictly from your attached source documents.",
    category: "Legal",
    capabilities: ["Read", "Write"],
    defaultPrompt: [
      "Draft a research memo from the attached case law on this issue.",
    ],
  },
  "legal-billing-tracker": {
    shortDescription: "Track billable hours, invoices, and trust accounts by chatting naturally.",
    category: "Legal",
    capabilities: ["Read", "Write"],
    defaultPrompt: [
      "Log 1.5 hours for John Smith at $300.",
      "Show my billing dashboard.",
      "What's still unpaid?",
    ],
  },
  "demand-letter-drafter": {
    shortDescription: "Draft demand letters and client status updates from your firm's own templates.",
    category: "Legal",
    capabilities: ["Read", "Write"],
    defaultPrompt: [
      "Draft a demand letter for this personal injury matter.",
      "Draft a client status update for the Smith matter.",
    ],
  },
  "estate-planning-document-assembler": {
    shortDescription: "Assemble a will, POAs, and HIPAA authorization from one intake pass.",
    category: "Legal",
    capabilities: ["Read", "Write"],
    defaultPrompt: [
      "Assemble estate planning documents from this client intake.",
    ],
  },
  "immigration-filing-drafter": {
    shortDescription: "Draft immigration filing sections and client status updates from case facts.",
    category: "Legal",
    capabilities: ["Read", "Write"],
    defaultPrompt: [
      "Draft a support letter for this immigration filing.",
      "Draft an RFE-response outline from these case facts.",
    ],
  },
  "contract-document-reviewer": {
    shortDescription: "Review contracts clause-by-clause against your firm's playbook.",
    category: "Legal",
    capabilities: ["Read", "Write"],
    defaultPrompt: [
      "Review this contract against our standard playbook.",
    ],
  },
  "bar-compliant-marketing-reviewer": {
    shortDescription: "Flag non-compliant language in attorney marketing before it goes live.",
    category: "Legal",
    capabilities: ["Read"],
    defaultPrompt: [
      "Review this website copy against my state bar's advertising rules.",
    ],
  },
  "conflict-of-interest-checker": {
    shortDescription: "Fuzzy-match new-matter parties against your client list for possible conflicts.",
    category: "Legal",
    capabilities: ["Read"],
    defaultPrompt: [
      "Check this new matter's parties against our client list for conflicts.",
    ],
  },
  "spanish-intake-skill": {
    shortDescription: "Bilingual English/Spanish client intake and communication drafting.",
    category: "Legal",
    capabilities: ["Read", "Write"],
    defaultPrompt: [
      "Turn these Spanish intake notes into an English intake summary.",
      "Translate this client email into Spanish.",
    ],
  },
};

for (const [plugin, override] of Object.entries(INTERFACE_OVERRIDES)) {
  const claudeManifestPath = join(plugin, ".claude-plugin", "plugin.json");
  if (!existsSync(claudeManifestPath)) {
    console.log(`skip ${plugin}: no .claude-plugin/plugin.json`);
    continue;
  }
  const claude = JSON.parse(readFileSync(claudeManifestPath, "utf8"));
  const iconPath = join(plugin, ".claude-plugin", "icon.png");
  const hasIcon = existsSync(iconPath);

  const manifest = {
    name: claude.name,
    version: claude.version,
    description: claude.description,
    author: claude.author,
    ...(claude.homepage ? { homepage: claude.homepage } : {}),
    ...(claude.repository ? { repository: claude.repository } : {}),
    license: claude.license,
    keywords: claude.keywords,
    skills: "./skills/",
    interface: {
      displayName: claude.displayName ?? claude.name,
      shortDescription: override.shortDescription,
      longDescription: claude.description,
      developerName: claude.author?.name ?? "Protomated",
      category: override.category,
      capabilities: override.capabilities,
      websiteURL: claude.author?.url ?? "https://protomated.com",
      privacyPolicyURL: "https://protomated.com/privacy",
      termsOfServiceURL: "https://protomated.com/terms",
      defaultPrompt: override.defaultPrompt,
      ...(hasIcon ? { composerIcon: "../.claude-plugin/icon.png", logo: "../.claude-plugin/icon.png" } : {}),
    },
  };

  const outPath = join(plugin, ".codex-plugin", "plugin.json");
  mkdirSync(join(plugin, ".codex-plugin"), { recursive: true });
  writeFileSync(outPath, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`wrote ${outPath}`);
}
