---
description: Weekly billing health check — review unbilled time, outstanding invoices, and revenue
argument-hint: ""
---

# /legal-billing:billing-review — Weekly Billing Health Check

Pull a read-only snapshot of the attorney's billing position. No writes.

## Workflow

**Step 0 — Confirm setup first:** Call `connect_google` with `check_only: true`. If not connected, stop and tell the attorney to say "connect Google" — do not pull anything yet. If connected, proceed; if the first data call below returns "No Google Sheet configured yet", stop and ask whether to create a new sheet from the template (`create_billing_sheet`, only after they confirm) or connect an existing one (`set_spreadsheet_url`). Only continue once both are confirmed. If you call create_billing_sheet, always paste the full sheet URL from its result into your reply — do not just say "sheet created."

**Step 1 — Pull dashboard:**
Call `get_dashboard`. Present the summary clearly:

"📊 **Billing Dashboard**
- Total hours logged: [X]
- Total fees billed: $[X]
- Collected: $[X]
- Still unpaid: $[X]"

**Step 2 — Pull unbilled entries:**
Call `get_time_entries` with `status: Unbilled`. List any unbilled clients:

"**Unbilled work** (ready to invoice):
- [Client]: [hours] hrs — $[amount]
- ..."

If nothing is unbilled: "No unbilled work. You're all caught up."

**Step 3 — Suggest actions:**
Based on what's outstanding, offer next steps:
- If unbilled entries exist: "Want me to invoice any of these? Say `/legal-billing:invoice-client [name]`."
- If unpaid invoices are aging: "You have $[X] in unpaid invoices. Want to follow up with a specific client?"
- If nothing outstanding: "Everything looks clean. Great week."

⚠️ Not legal advice — review before sending to client.
