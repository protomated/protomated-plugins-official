# Connectors

This plugin's entire purpose is to draft a memo strictly from documents you've attached — Filesystem is how it reads those documents on Claude Desktop. It ships with Claude Desktop, managed by Anthropic — you do not need to set up OAuth credentials.

## Using this in ChatGPT Desktop

This skill also works in ChatGPT Desktop. There's no Filesystem connector there — instead of giving a folder path, attach or paste your source documents directly into the chat, and the skill will index what you've attached the same way it indexes a connected folder.

## Connector for this plugin

| Connector | What it does | Setup |
|---|---|---|
| **Filesystem** | Reads every file in your source-document folder and indexes each one before drafting; saves the memo only with your explicit confirmation | Connect once via Claude Desktop → Connectors → Filesystem → "Connect" then select the folder containing your source documents |

## Privacy note

All data read from your connected sources is processed within your Claude Desktop session, under your Claude plan's data handling terms. Nothing is transmitted to Protomated or any other third party.

## Troubleshooting

**Filesystem shows "Permission denied" or can't find a file:**
The file is likely outside your allowed folder. Go to Settings → Connectors → Filesystem and verify the path you selected.

**The skill says a document "could not extract readable text":**
This usually means a scanned PDF or image-only file. Re-save it as a text-based PDF, or convert it to `.md`/`.txt`, then re-run the skill.

**No source documents found in the folder:**
Confirm the folder path points directly at your source documents (not a parent matter folder), and that the Filesystem connection includes that path.
