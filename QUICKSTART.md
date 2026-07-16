# Quick Start

**3 minutes.** This gets you to your first draft.

## Install in Claude Cowork

1. Open Claude Code (Cowork).
2. Go to **Customize → Plugins → Browse plugins**.
3. Add repo URL: `https://github.com/protomated/protomated-plugins-official`
4. Select **Solo Attorney Starter Kit** → **Install**.
5. Follow the connector authorization prompts for **Gmail**, **Google Calendar**, and **Filesystem**.

## Install in Claude Code (terminal)

1. **Add the marketplace.**
   ```
   /plugin marketplace add https://github.com/protomated/protomated-plugins-official
   ```

2. **Install the Starter Kit.**
   ```
   /plugin install solo-attorney-starter-kit@protomated-plugins-official
   ```

3. **Restart Claude Code.** Close and reopen — the plugin isn't live until you restart.

## Install user-scoped, not project-scoped

When you run `/plugin install`, you may be asked whether to install for this project only or for all projects (user scope). **Pick user scope.**

Project scope blocks the plugin from reading files outside the project folder — your matter files, your templates, your drafts. The plugin needs to read those. User scope doesn't give it extra access; it just means the plugin works from any folder.

If you already installed project-scoped: `/plugin uninstall solo-attorney-starter-kit`, then `/plugin install solo-attorney-starter-kit@protomated-plugins-official` from your home directory.

## First run

Open any matter folder in Cowork, then run:

```
/new-matter-organizer
```

This creates `matter-profile.md` — the anchor file all other skills read from. **Run it first on every new matter.** The other skills will look for it when they start.

| Then try… | What it does |
|---|---|
| `/court-deadline` | Surfaces upcoming court deadlines and filing windows from matter files and calendar |
| `/engagement-letter` | Drafts a retainer and engagement letter |
| `/billing-narrative` | Turns raw time-entry notes into polished billing narratives |
| `/meeting-prep` | Produces a one-page brief for depositions, hearings, and client meetings |

## What you're installing

Each skill reads your local matter files and Gmail, drafts output for you to review, and **waits for your explicit confirmation before sending anything or writing any file.** Every output begins and ends with a compliance header reminding you it's a draft requiring attorney review.

**Every output is a draft for attorney review — not legal advice, not a legal conclusion, not a substitute for your professional judgment.**

## Connectors

The Starter Kit uses three built-in connectors:

- **Filesystem** — reads matter files from the folder you attach in Cowork. No implicit filesystem access; only the folder you explicitly point it at.
- **Gmail** — reads recent email threads for the matter. You authorize it once during install and can revoke at any time from your Google account.
- **Google Calendar** — reads scheduled events to surface deadline gaps. Read-only; will not create or modify events without your confirmation.

See [CONNECTORS.md](CONNECTORS.md) for details on what each connector can and cannot do.

## Stuck?

- **"Command not found"** after install → restart Claude Code (step 3 above).
- **Skills produce generic output** → make sure you ran `/new-matter-organizer` first and that a matter folder is attached in Cowork.
- **"I can't read [file]"** → the plugin is probably project-scoped. Reinstall user-scoped (see above).
- **Connector not authorized** → go to Customize → Connectors in Cowork and re-authorize Gmail, Google Calendar, and Filesystem.

The full reference is in [README.md](README.md).
