# Connectors

This plugin uses three connectors that ship with Claude Desktop. All are managed by Anthropic — you do not need to set up OAuth credentials or install anything beyond Claude Desktop.

## Connectors for this plugin

| Connector | What it does | Setup |
|---|---|---|
| **Gmail** | Reads and drafts client emails; searches your inbox for matter context | Connect once via Claude Desktop → Connectors → Gmail → "Connect" |
| **Filesystem** | Reads your local matters folder; creates folders and saves drafts when you confirm | Connect once via Claude Desktop → Connectors → Filesystem → "Connect" then select your matters folder |
| **Google Calendar** | Creates deadline events when you confirm (used by `/court-deadline`) | Connect once via Claude Desktop → Connectors → Google Calendar → "Connect" |

## How to connect

1. Open Claude Desktop.
2. Go to **Settings → Connectors**.
3. Find **Gmail** — click **Connect**. You'll be prompted to sign in with Google and grant access. Anthropic handles the OAuth; your credentials are stored by Claude Desktop, not by this plugin.
4. Find **Filesystem** — click **Connect**. You'll be prompted to choose the folder where your matter files live (e.g., `~/Matters` or `~/Documents/Cases`). Only files in this folder are accessible.
5. Find **Google Calendar** — click **Connect**. Sign in with the same Google account you use for client scheduling. The plugin only creates events when you explicitly confirm; it never reads or deletes existing events.
6. Restart Claude Desktop if prompted.

## What these connectors can access

| Connector | Can access | Cannot access |
|---|---|---|
| Gmail | Emails in your connected Google account (read + draft/send, with your confirmation) | Google Drive, Calendar, other Workspace services |
| Filesystem | Files and folders in the path you selected during setup | Any folder outside your configured allow-list |
| Google Calendar | Create events in your calendar (with your confirmation only) | Read, edit, or delete existing events; other Google services |

## Privacy note

All data read from Gmail, your filesystem, or Google Calendar is processed within your Claude Desktop session, under your Claude plan's data handling terms. Nothing is transmitted to Protomated or any other third party. See [README.md](README.md) for the full compliance notice.

## Troubleshooting

**Gmail shows "Not connected":**
Go to Settings → Connectors and click Connect on Gmail again. If you have multiple Google accounts, make sure you're signing in with the account that holds your client emails.

**Filesystem shows "Permission denied" or can't find a file:**
The file is likely outside your allowed folder. Go to Settings → Connectors → Filesystem and verify the path you selected. Add the correct folder if needed.

**Skills aren't seeing my matter files:**
Make sure your matter folders follow a consistent structure (e.g., one folder per client/matter) and that the parent folder is the one you connected to Filesystem. Each skill looks for an `intake-summary.md` at the top of a matter folder — run `/intake-summary` first to create one if it doesn't exist.

**Google Calendar shows "Not connected" or `/court-deadline` can't create events:**
Go to Settings → Connectors and click Connect on Google Calendar. Sign in with the same Google account you use for scheduling. If you have multiple Google accounts, confirm you are connecting the right one.

**`/engagement-letter` isn't using my own template:**
Confirm your template's filename contains a word like "engagement," "retainer," or "fee agreement," and that it's saved either directly in the matter folder or inside a `templates/` folder at the top of your connected Filesystem folder (e.g. `~/Matters/templates/`). If it's a `.docx`/`.doc` file and the skill says it can't extract readable text, save a `.md` or `.txt` copy instead — Filesystem connectors read text-based files more reliably than binary formats.
