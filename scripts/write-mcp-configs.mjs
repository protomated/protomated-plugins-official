#!/usr/bin/env node
// Write each plugin's .mcp.json connector declaration.
// Source of truth for which connectors each plugin expects. The `url` fields
// are intentionally blank — Gmail, Google Calendar, and Filesystem are built
// into Claude Desktop and managed by Anthropic; the file only declares which
// connectors the plugin needs. `title`/`description` explain that to anyone
// (or any validator) reading the raw .mcp.json without this comment.
//
// Usage: node scripts/write-mcp-configs.mjs

import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";

const CONNECTOR_INFO = {
  gmail: {
    title: "Gmail",
    description: "Built into Claude Desktop, managed by Anthropic. Connect via Settings → Connectors — no URL to configure here.",
  },
  "google-calendar": {
    title: "Google Calendar",
    description: "Built into Claude Desktop, managed by Anthropic. Connect via Settings → Connectors — no URL to configure here.",
  },
  filesystem: {
    title: "Filesystem",
    description: "Built into Claude Desktop, managed by Anthropic. Connect via Settings → Connectors — no URL to configure here.",
  },
};

const PLUGIN_CONNECTORS = {
  "solo-attorney-starter-kit": ["gmail", "google-calendar", "filesystem"],
  "flat-fee-calculator": ["filesystem"],
  "research-memo-drafter": ["filesystem"],
};

for (const [plugin, connectors] of Object.entries(PLUGIN_CONNECTORS)) {
  const path = join(plugin, ".mcp.json");
  const mcpServers = Object.fromEntries(
    connectors.map((c) => [c, { type: "http", url: "", ...CONNECTOR_INFO[c] }])
  );
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify({ mcpServers }, null, 2) + "\n");
  console.log(`wrote ${path} (${connectors.join(", ")})`);
}
