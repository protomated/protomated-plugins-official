# Protomated Plugins

Free Claude Cowork plugins for solo and small-firm attorneys, built by Protomated.

> **New here?** Start with [QUICKSTART.md](QUICKSTART.md) — install in 3 minutes. This README is the full reference.

The **Solo Attorney Starter Kit** is the flagship plugin: five skills that read your local matter files, Gmail, and Google Calendar to organize new matters, surface court deadlines, and draft engagement letters, billing narratives, and pre-meeting briefs — in under five minutes of setup. Each of the five skills is also available as a standalone plugin.

Distributed free by [Protomated](https://protomated.com) at [protomated.com/resources](https://protomated.com/resources).

---

## Installing

### Option 1 — Cowork plugin marketplace (recommended)

1. Open Claude Code (Cowork).
2. Go to **Customize → Plugins → Browse plugins**.
3. Add repo URL: `https://github.com/protomated/protomated-plugins-official`
4. Select **Solo Attorney Starter Kit** (or any standalone skill plugin) → **Install**.
5. Follow the connector authorization prompts for Gmail, Google Calendar, and Filesystem.

### Option 2 — Claude Code (terminal)

```
/plugin marketplace add https://github.com/protomated/protomated-plugins-official
/plugin install solo-attorney-starter-kit@protomated-plugins-official
```

**First run:** Open any matter folder, then run `/new-matter-organizer` to create the `matter-profile.md` anchor file that all other skills read from.

### Option 3 — Direct ZIP install (Starter Kit only)

Download the latest `solo-attorney-starter-kit-v*.zip` from [Releases](https://github.com/protomated/protomated-plugins-official/releases) and drag it into Claude Desktop's Extensions panel.

See [`solo-attorney-starter-kit/README.md`](solo-attorney-starter-kit/README.md) for connector authorization and compliance guidance.

---

## Plugins in this marketplace

| Plugin | Skills | Connectors |
|---|---|---|
| `solo-attorney-starter-kit` | All five below | Gmail, Google Calendar, Filesystem |
| `new-matter-organizer` | `/new-matter-organizer` | Filesystem |
| `engagement-letter-drafter` | `/engagement-letter` | Filesystem, Gmail |
| `court-deadline-calendar` | `/court-deadline` | Filesystem, Google Calendar |
| `billing-narrative-drafter` | `/billing-narrative` | Filesystem |
| `meeting-prep-brief` | `/meeting-prep` | Filesystem, Gmail |

Plugins that are planned but not yet built are parked in [`docs/planned-plugins.json`](docs/planned-plugins.json) — they are added to `marketplace.json` only once their directory exists.

---

## Repo layout

```
.claude-plugin/
  marketplace.json             Marketplace manifest — lists every installable plugin

solo-attorney-starter-kit/     Flagship bundle (all five skills; also packaged into .zip)
  .claude-plugin/plugin.json   Identity manifest
  .mcp.json                    Declares Gmail + Google Calendar + Filesystem connectors
  prompts/system-prompt.md     Master system prompt — ethical guardrails live here
  skills/*/SKILL.md            One directory per skill

new-matter-organizer/          Standalone plugins — one skill each,
engagement-letter-drafter/     same layout: .claude-plugin/plugin.json,
court-deadline-calendar/       .mcp.json, README.md, skills/<name>/SKILL.md
billing-narrative-drafter/
meeting-prep-brief/

site/             Next.js landing page (Cloudflare Pages)
  app/api/subscribe/route.ts   Edge route: email capture → Kit API

scripts/
  validate-plugin.mjs          Validates marketplace.json + every listed plugin
  write-mcp-configs.mjs        Regenerates each plugin's .mcp.json
  release-check.mjs            Preflight checks for `npm run release`

docs/             Technical specifications + planned-plugins.json

.github/workflows/
  validate.yml     Runs on every push/PR — validates marketplace + plugins
  release.yml      Runs on vX.Y.Z tags — builds, checksums, and publishes a GitHub Release
```

---

## Skills

| Skill | What it does |
|---|---|
| `/new-matter-organizer` | Runs structured intake, drafts conflict-check memo, creates matter profile and opening checklist — run this first on every new matter |
| `/court-deadline` | Surfaces upcoming court deadlines and filing windows from matter files and calendar |
| `/engagement-letter` | Drafts a retainer and engagement letter from matter intake data |
| `/billing-narrative` | Turns raw time-entry notes into polished, client-ready billing narratives |
| `/meeting-prep` | Produces a one-page brief for depositions, mediations, hearings, and client check-ins |

---

## Development

```bash
# Validate marketplace.json + every listed plugin
npm run validate

# Validate a single plugin dir
node scripts/validate-plugin.mjs solo-attorney-starter-kit

# Regenerate each plugin's .mcp.json connector declaration
npm run mcp:write

# Full build (Starter Kit zip): validate → pack → SHA-256 → copy to site/public/downloads/
npm run build

# Pack only (skips validate)
npm run pack

# Remove build artifacts
npm run clean

# List plugin files
npm run tree

# Landing page
npm run site:install
npm run site:dev
npm run site:build
```

### Environment variables (site only)

| Variable | Purpose |
|---|---|
| `KIT_API_KEY` | Kit (ConvertKit) API key — email capture |
| `KIT_FORM_ID` | Kit form ID |
| `PUBLIC_DOWNLOAD_URL` | URL returned after email capture; defaults to `/downloads/solo-attorney-starter-kit.zip` |

Copy `site/.env.example` to `site/.env.local` for local development. The plugins themselves have no environment variables.

---

## Cutting a release

Push a semver tag — CI does the rest:

```bash
git tag v1.1.0
git push origin v1.1.0
```

The release workflow validates, builds, checksums, and publishes a GitHub Release with the `.zip` and `.sha256` attached. Release notes are generated automatically from commits since the previous tag.

---

## Compliance

Every plugin enforces three non-negotiable rules, defined in `solo-attorney-starter-kit/prompts/system-prompt.md` and repeated in every `SKILL.md`:

1. **Plan-tier warning** — warns attorneys that consumer Claude (Personal/Pro) must not be used with client-privileged content.
2. **Confirmation gating** — Claude must show the attorney exactly what it will do and get explicit in-conversation confirmation before sending email or writing any file.
3. **Review wrapper** — every skill output begins and ends with an attorney-review header/footer.

Do not weaken these constraints.

---

## Contributing

Everything here is markdown and JSON. Fork, edit, PR. See [CONTRIBUTING.md](CONTRIBUTING.md) for design principles and the process for adding new plugins to the marketplace.

All changes to `solo-attorney-starter-kit/prompts/system-prompt.md` and `SKILL.md` files require a brief explanation of why the change does not weaken the three compliance constraints above.

New contributors: see [CLA.md](CLA.md) — you'll be prompted to sign on your first PR.

---

## License

Apache 2.0. See [LICENSE](LICENSE).
