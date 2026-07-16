# Contributing to Protomated Plugins

Notes for anyone writing or editing a skill or plugin in this repo. Focused on
the design principles that matter most for compliance-safe legal drafting tools.

## Before your first PR

Sign the CLA. The first time you open a pull request, the CLA Assistant bot will
comment with a link to the [CLA](CLA.md) and ask you to confirm. Reply with
`I have read the CLA Document and I hereby sign the CLA` and the check will
pass. You only need to do this once.

## Design principle: the skill encodes the right behavior; the system prompt is the safety net

Every plugin in this repo ships with two layers of instruction:

1. **`skills/<skill>/SKILL.md`** — what this specific skill does, step by step.
   The narrow, task-specific scaffold. Includes the output format, the
   confirmation gate, and the attorney-review wrapper.
2. **`prompts/system-prompt.md`** — the shared compliance guardrails:
   confirmation gating, review wrapper, plan-tier warning, and the
   "assisted draft, always reviewed" rule. The wide, plugin-level safety net.

**If a skill's correct output depends on the system prompt catching a mistake
the skill itself would have made, that is a design smell.** The SKILL.md should
tell the model what to do directly; the guardrails catch what the skill missed.

**Rule of thumb: if a QA test passes only because a guardrail fired, add the
behavior to the SKILL.md directly.** The guardrail stays (belt and suspenders),
but the skill now carries the knowledge it needs on its own.

## The three non-negotiable compliance rules

Every skill must enforce all three. Do not weaken them:

1. **Confirmation gate** — Claude must show the attorney exactly what it will do
   and receive explicit in-conversation confirmation before sending any email or
   writing any file.
2. **Review wrapper** — every skill output must begin and end with the
   attorney-review header/footer defined in `prompts/system-prompt.md`.
3. **Plan-tier warning** — skills must warn that consumer Claude (Personal/Pro)
   must not be used with client-privileged content.

## A few concrete things that follow

- **Put the doctrine in the skill.** If a skill covers demand letters, cover the
  FRE 408 implications. If it covers intake, flag missing information rather than
  guessing. Not a pointer to "and also think about" — the actual instruction.
- **Never invent facts.** If information is missing from the attorney's input,
  the skill must flag it and leave a placeholder. It must not fill gaps from
  model knowledge alone.
- **Gate the output, not just the send.** The confirmation gate applies to file
  writes too, not only email sends. The attorney must confirm before Claude
  writes any file to the matter folder.
- **Drafts, not decisions.** These skills draft and summarize; they do not make
  legal judgments. If a skill's output could be read as a legal conclusion rather
  than a draft for attorney review, revise the framing.

## Adding a new plugin to the marketplace

Each plugin directory at repo root must follow this structure:

```
<plugin-slug>/
  .claude-plugin/
    plugin.json     # { "name": "<slug>", "version": "x.y.z", "description": "...", "author": { "name": "Protomated" } }
  .mcp.json         # generated — never hand-edit (see below)
  README.md         # end-user doc: connectors table + compliance section
  skills/
    <skill-name>/
      SKILL.md      # YAML frontmatter + skill instructions; must carry the compliance header/footer
```

(Only the Starter Kit bundle additionally carries `prompts/system-prompt.md` — the shared guardrails. Standalone plugins repeat the guardrails inside their SKILL.md.)

Then:

1. **Declare connectors** — add the plugin to `scripts/write-mcp-configs.mjs` and run `npm run mcp:write` to generate its `.mcp.json`.
2. **Add the marketplace entry** to `.claude-plugin/marketplace.json`:

```json
{
  "name": "<plugin-slug>",
  "displayName": "<Human Readable Name>",
  "source": "./<plugin-slug>",
  "description": "One to two sentences. What the plugin drafts and what connectors it uses.",
  "author": { "name": "Protomated" }
}
```

The `name` and `description` must exactly match the plugin's own `plugin.json` — the validator enforces this. Planned-but-unbuilt plugins go in `docs/planned-plugins.json`, never in marketplace.json.

3. **Validate** before opening a PR:

```bash
npm run validate                          # whole marketplace
node scripts/validate-plugin.mjs <plugin-slug>   # just yours
```

## Workflow notes

- **Read `prompts/system-prompt.md` before editing any skill.** The shared
  guardrails shape what every skill must say and what it must not omit.
- **Bump the plugin version on a material change.** For the Starter Kit, bump
  both root `package.json` and `solo-attorney-starter-kit/.claude-plugin/plugin.json`
  (the validator enforces sync — the zip release channel derives its tag from
  package.json). Patch bumps for behavior tweaks; minor bumps for new skills or
  new required connectors.
- **Starter kit skills are canonical.** The five standalone plugins carry
  verbatim copies — when editing a SKILL.md, update it in both places.
- **Run `npm run validate` before pushing.** CI runs the same check.
- **Do not remove the shared guardrails from `prompts/system-prompt.md`.** The
  net stays. The goal is a skill that doesn't need the net, not a plugin
  without one.
