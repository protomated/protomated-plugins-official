#!/usr/bin/env node
// Preflight checks before `npm run release` tags and pushes.
//   - Working tree is clean (nothing uncommitted)
//   - Current branch is main
//   - The tag for this version does not already exist
//   - Plugin validation passes (includes version-sync checks)
//
// Usage: node scripts/release-check.mjs

import { execSync, spawnSync } from "node:child_process";

const errors = [];
const git = (cmd) => execSync(`git ${cmd}`, { encoding: "utf8" }).trim();

// 1. Clean working tree
if (git("status --porcelain") !== "") {
  errors.push("Working tree is not clean — commit or stash changes before releasing.");
}

// 2. On main
const branch = git("rev-parse --abbrev-ref HEAD");
if (branch !== "main") {
  errors.push(`Releases must be cut from main (currently on "${branch}").`);
}

// 3. Tag doesn't already exist
const version = process.env.npm_package_version;
if (!version) {
  errors.push("npm_package_version is not set — run via `npm run release`.");
} else if (git(`tag -l v${version}`) !== "") {
  errors.push(`Tag v${version} already exists — bump the version first.`);
}

// 4. Marketplace + all plugins validate (includes package.json/starter-kit version sync)
const validate = spawnSync("node", ["scripts/validate-plugin.mjs"], { stdio: "inherit" });
if (validate.status !== 0) {
  errors.push("Plugin validation failed.");
}

if (errors.length > 0) {
  console.error("\nRelease blocked:");
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
}

console.log(`\nRelease preflight passed — tagging v${version}.`);
