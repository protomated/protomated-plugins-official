#!/usr/bin/env node
// Packs every plugin listed in .claude-plugin/marketplace.json into
// dist/<plugin-dir>-v<plugin.json version>.zip (+ .sha256) and writes dist/SHA256SUMS.
// Used by .github/workflows/release.yml; run locally with `npm run pack:all`.

import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, rmSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const marketplace = JSON.parse(readFileSync(join(root, ".claude-plugin/marketplace.json"), "utf8"));

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist);

const sums = [];
for (const entry of marketplace.plugins) {
  const dir = entry.source.replace(/^\.\//, "");
  const manifest = join(root, dir, ".claude-plugin/plugin.json");
  if (!existsSync(manifest)) throw new Error(`${dir}: missing .claude-plugin/plugin.json`);
  const { version } = JSON.parse(readFileSync(manifest, "utf8"));
  const file = `${dir}-v${version}.zip`;

  execFileSync(
    "zip",
    ["-rq", join(dist, file), ".", "-x", "*.DS_Store", "node_modules/*", "*/node_modules/*", "package-lock.json"],
    { cwd: join(root, dir) }
  );

  const hash = createHash("sha256").update(readFileSync(join(dist, file))).digest("hex");
  writeFileSync(join(dist, `${file}.sha256`), `${hash}  ${file}\n`);
  sums.push(`${hash}  ${file}`);
  console.log(`packed ${file}`);
}
writeFileSync(join(dist, "SHA256SUMS"), sums.join("\n") + "\n");
console.log(`\n${marketplace.plugins.length} plugins → dist/`);
