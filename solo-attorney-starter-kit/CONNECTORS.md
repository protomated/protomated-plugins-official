# Connectors

This plugin uses three connectors that ship with Claude Desktop. All are managed by Anthropic — you do not need to set up OAuth credentials or install anything beyond Claude Desktop.

> **Note:** The `url` fields in `.mcp.json` are intentionally blank. These connectors are built into Claude Desktop and managed by Anthropic; the file only declares which connectors the plugin expects. There is nothing to fill in.

## Connectors for this plugin

| Connector | What it does | Setup |
|---|---|---|
| **Gmail** | Reads and drafts client emails; searches your inbox for matter context | Connect once via Claude Desktop → Connectors → Gmail → "Connect" |
| **Google Calendar** | Reads scheduled events to surface deadlines and deadline gaps | Connect once via Claude Desktop → Connectors → Google Calendar → "Connect" |
| **Filesystem** | Reads your local matters folder; saves drafts when you confirm | Connect once via Claude Desktop → Connectors → Filesystem → "Connect" then select your matters folder |

## How to connect

1. Open Claude Desktop.
2. Go to **Settings → Connectors**.
3. Find **Gmail** — click **Connect**. You'll be prompted to sign in with Google and grant access. Anthropic handles the OAuth; your credentials are stored by Claude Desktop, not by this plugin.
4. Find **Google Calendar** — click **Connect**. Sign in with the same Google account that holds your court dates and client meetings.
5. Find **Filesystem** — click **Connect**. You'll be prompted to choose the folder where your matter files live (e.g., `~/Matters` or `~/Documents/Cases`). Only files in this folder are accessible.
6. Restart Claude Desktop if prompted.

## What these connectors can access

| Connector | Can access | Cannot access |
|---|---|---|
| Gmail | Emails in your connected Google account (read + draft/send, with your confirmation) | Other Google Workspace services, Drive |
| Google Calendar | Events in your connected Google account (read; create/modify only with your confirmation) | Other Google Workspace services |
| Filesystem | Files in the folder you selected during setup | Any folder outside your configured allow-list |

## Privacy note

All data read from Gmail or your filesystem is processed within your Claude Desktop session, under your Claude plan's data handling terms. Nothing is transmitted to Protomated or any other third party. See [README.md](README.md) for the full compliance notice.

## Troubleshooting

**Gmail shows "Not connected":**
Go to Settings → Connectors and click Connect on Gmail again. If you have multiple Google accounts, make sure you're signing in with the account that holds your client emails.

**Filesystem shows "Permission denied" or can't find a file:**
The file is likely outside your allowed folder. Go to Settings → Connectors → Filesystem and verify the path you selected. Add the correct folder if needed.

**Skills aren't seeing my matter files:**
Make sure your matter folders follow a consistent structure (e.g., one folder per client/matter) and that the parent folder is the one you connected to Filesystem. Each skill looks for a `matter-profile.md` at the top of a matter folder — run `/new-matter-organizer` first to create one if it doesn't exist.
