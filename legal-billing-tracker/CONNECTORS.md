# Connectors

This plugin connects to the **Legal Billing MCP server** hosted by Protomated. The server reads from and writes to the attorney's own Google Sheet via the Google Sheets API.

## legal-billing

**URL:** `https://legal-billing.protomated.com/mcp`

**What it does:** Provides tools for logging time, generating invoices, managing trust accounts, and reading billing summaries — all against the attorney's private Google Sheet.

**Authentication:** On first use, call `connect_google`. The tool returns a sign-in URL. The attorney clicks it, authorizes read/write access to their spreadsheet, and is done. Tokens are stored server-side per session.

**Data:** The server only accesses the spreadsheet URL the attorney provides via `set_spreadsheet_url`. No other data is stored or accessed.

## Tools provided

| Tool | Description |
|---|---|
| `connect_google` | Initiate Google OAuth and return the sign-in URL |
| `set_spreadsheet_url` | Save the attorney's Google Sheet URL |
| `disconnect_google` | Revoke Google OAuth and clear the saved spreadsheet reference |
| `delete_account` | Permanently delete the attorney's account record from Protomated's database |
| `log_time` | Append a time entry to the Time Tracker tab |
| `mark_billed` | Mark all Unbilled entries for a client as Billed |
| `mark_paid` | Mark all Billed entries for a client as Paid |
| `add_trust_entry` | Append a trust deposit or withdrawal |
| `get_dashboard` | Read the Dashboard tab summary |
| `get_time_entries` | Read Time Tracker rows, filter by client/status |
| `get_trust_entries` | Read Trust Account rows, filter by client |
| `get_year_end_summary` | Read annual revenue totals |
| `get_matter_profitability` | Read matter profitability (Rate My Matters tab) |
| `get_invoice` | Read the current Invoice tab preview |
