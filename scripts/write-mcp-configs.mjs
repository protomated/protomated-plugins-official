#!/usr/bin/env node
// Write each plugin's .mcp.json connector declaration.
// Source of truth for which connectors each plugin expects. The `url` fields
// are intentionally blank — Gmail, Google Calendar, and Filesystem are built
// into Claude Desktop and managed by Anthropic; the file only declares which
// connectors the plugin needs.
//
// Usage: node scripts/write-mcp-configs.mjs

import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";

const CONNECTOR = { type: "http", url: "" };

const PLUGIN_CONNECTORS = {
  "solo-attorney-starter-kit": ["gmail", "google-calendar", "filesystem"],
  "new-matter-organizer": ["filesystem"],
  "engagement-letter-drafter": ["filesystem", "gmail"],
  "court-deadline-calendar": ["google-calendar"],
  "billing-narrative-drafter": ["filesystem"],
  "meeting-prep-brief": ["filesystem", "gmail"],
};

for (const [plugin, connectors] of Object.entries(PLUGIN_CONNECTORS)) {
  const path = join(plugin, ".mcp.json");
  const mcpServers = Object.fromEntries(connectors.map((c) => [c, { ...CONNECTOR }]));
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify({ mcpServers }, null, 2) + "\n");
  console.log(`wrote ${path} (${connectors.join(", ")})`);
}
