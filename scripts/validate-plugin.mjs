#!/usr/bin/env node
// Validate the marketplace manifest and every plugin it lists.
// Mirrors the conventions anthropics/claude-plugins-official enforces in CI
// (marketplace invariants I1–I11) plus Protomated-specific compliance checks.
//
// Marketplace checks (.claude-plugin/marketplace.json):
//   - valid JSON; kebab-case marketplace name
//   - no duplicate plugin names (I2)
//   - description 10–2000 chars, no leading/trailing whitespace (I3)
//   - every source ("./<dir>") exists and contains .claude-plugin/plugin.json (I8)
//   - source has no shell metacharacters or ".." (I9)
//   - plugin name matches ^[a-z0-9][a-z0-9-]{1,63}$ (I11)
//   - entry name/description match the plugin's own plugin.json (sync convention)
//
// Per-plugin checks (for each listed plugin dir):
//   - .claude-plugin/plugin.json valid JSON, kebab-case name, semver version
//   - .mcp.json (if present) is valid JSON
//   - component dirs (skills/, agents/, commands/, hooks/) have expected files
//   - each skills/<name>/SKILL.md has frontmatter (name matches dir, non-empty
//     description) and the required attorney-review compliance markers
//
// Repo checks:
//   - root package.json version matches solo-attorney-starter-kit version
//     (the zip release channel derives its tag/filename from package.json)
//
// Usage:
//   node scripts/validate-plugin.mjs             # validate marketplace + all plugins
//   node scripts/validate-plugin.mjs <dir>       # validate a single plugin dir

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const passes = [];
const errors = [];
const pass = (msg) => passes.push(msg);
const fail = (msg) => errors.push(msg);

const readJson = (path, label, { required = false } = {}) => {
  if (!existsSync(path)) {
    if (required) fail(`Missing: ${path}`);
    return null;
  }
  try {
    const data = JSON.parse(readFileSync(path, "utf8"));
    pass(`${label} is valid JSON: ${path}`);
    return data;
  } catch (e) {
    fail(`${label} is not valid JSON (${path}): ${e.message}`);
    return null;
  }
};

const KEBAB = /^[a-z0-9][a-z0-9-]{1,63}$/;
const SEMVER = /^\d+\.\d+\.\d+(?:[-+].+)?$/;
const COMPLIANCE_HEADER = "AI-ASSISTED DRAFT — ATTORNEY REVIEW REQUIRED";
const COMPLIANCE_FOOTER = "Not legal advice";

// ---------- per-plugin validation ----------

function validatePlugin(pluginDir) {
  const manifest = readJson(join(pluginDir, ".claude-plugin", "plugin.json"), `${pluginDir}: plugin.json`, { required: true });
  if (manifest) {
    if (!manifest.name) {
      fail(`${pluginDir}: plugin.json is missing \`name\``);
    } else if (!KEBAB.test(manifest.name)) {
      fail(`${pluginDir}: plugin.json name must match ${KEBAB}. Got: "${manifest.name}"`);
    } else {
      pass(`${pluginDir}: plugin name is kebab-case ("${manifest.name}")`);
    }
    if (manifest.version && !SEMVER.test(manifest.version)) {
      fail(`${pluginDir}: version is not valid semver: "${manifest.version}"`);
    }
  }

  readJson(join(pluginDir, ".mcp.json"), `${pluginDir}: .mcp.json`);

  const components = {
    skills:   { mode: "subdir-file", file: "SKILL.md" },
    agents:   { mode: "files-ext",   ext: ".md" },
    commands: { mode: "files-ext",   ext: ".md" },
    hooks:    { mode: "files-ext",   ext: ".json" },
  };

  for (const [name, spec] of Object.entries(components)) {
    const dir = join(pluginDir, name);
    if (!existsSync(dir)) continue;
    if (!statSync(dir).isDirectory()) {
      fail(`${pluginDir}/${name} exists but is not a directory`);
      continue;
    }
    const entries = readdirSync(dir);
    if (entries.length === 0) {
      fail(`${pluginDir}/${name}/ is empty`);
      continue;
    }
    if (spec.mode === "subdir-file") {
      let found = 0;
      for (const entry of entries) {
        const entryPath = join(dir, entry);
        if (!statSync(entryPath).isDirectory()) continue;
        const expected = join(entryPath, spec.file);
        if (!existsSync(expected)) {
          fail(`${pluginDir}/${name}/${entry}/ is missing ${spec.file}`);
        } else {
          found++;
          if (name === "skills") checkSkillFile(pluginDir, entry, expected);
        }
      }
      if (found === 0) fail(`${pluginDir}/${name}/ contains no subdirectories with ${spec.file}`);
    } else {
      const matches = entries.filter((e) => e.endsWith(spec.ext));
      if (matches.length === 0) fail(`${pluginDir}/${name}/ has no ${spec.ext} files`);
      else pass(`${pluginDir}/${name}/ contains ${matches.length} ${spec.ext} file(s)`);
    }
  }

  return manifest;
}

function checkSkillFile(pluginDir, skillDir, path) {
  const content = readFileSync(path, "utf8");
  const fm = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) {
    fail(`${path} is missing YAML frontmatter`);
  } else {
    const name = fm[1].match(/^name:\s*(.+)$/m)?.[1]?.trim();
    const description = fm[1].match(/^description:\s*(.+)$/m)?.[1]?.trim();
    if (!name) fail(`${path} frontmatter is missing \`name\``);
    else if (name !== skillDir) fail(`${path} frontmatter name ("${name}") does not match its directory ("${skillDir}")`);
    else pass(`${pluginDir}: skill ${skillDir} frontmatter name matches directory`);
    if (!description) fail(`${path} frontmatter is missing \`description\``);
  }
  if (!content.includes(COMPLIANCE_HEADER)) {
    fail(`${path} is missing the required attorney-review header ("${COMPLIANCE_HEADER}")`);
  } else if (!content.includes(COMPLIANCE_FOOTER)) {
    fail(`${path} is missing the required footer marker ("${COMPLIANCE_FOOTER}")`);
  } else {
    pass(`${pluginDir}: skill ${skillDir} compliance header/footer present`);
  }
}

// ---------- entry point ----------

const singleDir = process.argv[2];

if (singleDir) {
  validatePlugin(singleDir);
} else {
  const mkt = readJson(join(".claude-plugin", "marketplace.json"), "marketplace.json", { required: true });
  if (mkt) {
    if (!mkt.name || !KEBAB.test(mkt.name)) fail(`marketplace name must be kebab-case. Got: "${mkt.name}"`);
    else pass(`marketplace name is kebab-case ("${mkt.name}")`);

    const seen = new Set();
    for (const entry of mkt.plugins ?? []) {
      const label = entry.name ?? "<unnamed>";

      if (seen.has(entry.name)) fail(`duplicate plugin name in marketplace.json: "${entry.name}" (I2)`);
      seen.add(entry.name);

      if (!entry.name || !KEBAB.test(entry.name)) fail(`${label}: name must match ${KEBAB} (I11)`);

      const desc = entry.description ?? "";
      if (desc.length < 10 || desc.length > 2000) fail(`${label}: description must be 10–2000 chars (I3)`);
      else if (desc !== desc.trim()) fail(`${label}: description has leading/trailing whitespace (I3)`);
      else pass(`${label}: description length ok`);

      const source = entry.source ?? "";
      if (/[;&|`$<>]|\.\./.test(source)) fail(`${label}: source contains shell metacharacters or '..' (I9)`);
      if (!source.startsWith("./")) {
        fail(`${label}: source must be a local "./<dir>" path. Got: "${source}"`);
        continue;
      }
      const dir = source.slice(2);
      if (!existsSync(join(dir, ".claude-plugin", "plugin.json"))) {
        fail(`${label}: source "${source}" does not contain .claude-plugin/plugin.json (I8)`);
        continue;
      }
      pass(`${label}: source directory exists with plugin.json (I8)`);

      const pluginManifest = validatePlugin(dir);
      if (pluginManifest) {
        if (pluginManifest.name !== entry.name) {
          fail(`${label}: marketplace entry name does not match ${dir}/plugin.json name ("${pluginManifest.name}")`);
        }
        if (pluginManifest.description !== entry.description) {
          fail(`${label}: marketplace description does not match ${dir}/plugin.json description — keep them in sync`);
        } else {
          pass(`${label}: name/description in sync with plugin.json`);
        }
      }
    }
  }

  // Repo-level: zip release channel version sync (starter kit only)
  const pkg = readJson("package.json", "Root package.json");
  const sk = readJson(join("solo-attorney-starter-kit", ".claude-plugin", "plugin.json"), "Starter kit plugin.json");
  if (pkg && sk && pkg.version !== sk.version) {
    fail(`Root package.json version ("${pkg.version}") does not match solo-attorney-starter-kit version ("${sk.version}") — bump both before releasing the zip`);
  } else if (pkg && sk) {
    pass(`Root package.json version matches starter kit (${pkg.version})`);
  }
}

for (const p of passes) console.log(`PASS  ${p}`);
for (const e of errors) console.error(`FAIL  ${e}`);
console.log(`\n${passes.length} passed, ${errors.length} failed`);
process.exit(errors.length > 0 ? 1 : 0);
