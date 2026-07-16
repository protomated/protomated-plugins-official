# Connectors

The Solo Attorney Starter Kit uses two built-in Claude connectors: **Gmail** and
**Filesystem**. Both are read-only by default; any write or send action requires
explicit attorney confirmation in the conversation first.

## Current connectors

| Connector | What it gives Claude | Plugin | Notes |
|---|---|---|---|
| **Filesystem** | Reads matter files from the folder you attach | all plugins | Explicit attached-folder access only; no implicit reach |
| **Gmail** | Reads recent email threads for the matter | solo-attorney-starter-kit | Read-only; OAuth via your Google account |
| **Google Calendar** | Reads scheduled events to surface deadline gaps | solo-attorney-starter-kit | Read-only; OAuth via your Google account |

### Filesystem

Claude reads only the folder you explicitly attach in Cowork (or point it at via
a file path in Claude Code). There is no implicit access to your filesystem —
Claude cannot browse your drive or read files you did not share.

Skills that write files (e.g., `intake-summary.md`) will show you exactly what
they plan to write and ask for confirmation before touching anything.

### Gmail

The Gmail connector lets Claude read your recent email threads to pull in
client communications relevant to the matter. It is read-only: Claude cannot
send email, create drafts, or modify labels without your explicit confirmation
for each action.

You authorize Gmail once during install. To revoke access at any time, go to
[myaccount.google.com/permissions](https://myaccount.google.com/permissions) and
remove the Claude connector.

### Google Calendar

The Google Calendar connector lets Claude read your scheduled events to surface
deadline gaps — hearings you have calendared, deposition dates, filing deadlines
already in your calendar. It is read-only: Claude cannot create, modify, or
delete calendar events without your explicit confirmation for each action.

Used by `/court-deadline` to cross-check what is in your matter files against
what is (or is not) on your calendar.

## Authorizing connectors

During install in Cowork, you will be prompted to authorize each connector.
Follow the on-screen instructions. If you skip authorization during install, you
can authorize later from **Customize → Connectors** in Cowork.

## How skills use connectors

Skills declare which connectors they need in the plugin's `.mcp.json`. A skill
that needs Gmail will prompt for authorization the first time it runs if the
connector is not yet authorized. Skills fall back gracefully if a connector is
unavailable — they will tell you what they could not read rather than proceeding
silently on incomplete data.

## Adding a connector

If you build or operate a legal data source or practice management system and
want to connect it to these plugins:

1. Build a remote MCP server (HTTPS, OAuth or API-key auth, streamable HTTP or
   SSE transport).
2. Keep tools read-heavy. Write tools (send, file, create) need an explicit
   confirmation prompt surfaced to the attorney.
3. Return provenance in results — source, date retrieved, and a citation-ready
   identifier.
4. Open a PR adding your server to the relevant plugin's `.mcp.json` with the
   URL, auth method, and a one-line description.

## Wanted connectors

These would make specific upcoming plugins significantly more useful:

- **Clio / MyCase / PracticePanther** — matter management and billing integration
- **CourtListener** — federal docket and opinion lookup for deadline tracking and
  research
- **Google Calendar** — deadline sync for `court-deadline-calendar`
- **Outlook / Microsoft 365** — alternative to Gmail for attorneys on Microsoft
  365

Open an issue if you build one.
