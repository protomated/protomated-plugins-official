---
description: Log a billable time entry for a client matter
argument-hint: "[client name] [hours] [rate] [matter] [description]"
---

# /legal-billing:log-time — Log Billable Time

Guide the attorney through a complete time entry. Collect missing fields conversationally — don't present a form all at once.

## Invocation

```
/legal-billing:log-time $ARGUMENTS
```

Parse any details the attorney already provided in `$ARGUMENTS` (client name, hours, rate, matter name, description). Only ask for what's missing.

## Workflow

**Step 0 — Confirm setup first:** Call `connect_google` with `check_only: true`. If not connected, stop and tell the attorney to say "connect Google" — do not collect any fields yet. If connected, proceed; if the first data call below returns "No Google Sheet configured yet", stop and ask whether to create a new sheet from the template (`create_billing_sheet`, only after they confirm) or connect an existing one (`set_spreadsheet_url`). Only continue once both are confirmed. If you call create_billing_sheet, always paste the full sheet URL from its result into your reply — do not just say "sheet created."

**Step 1 — Collect required fields** (ask only for what's missing):
1. **Client name** — exact spelling matters; repeat it back for confirmation if new
2. **Hours worked** — decimal format (e.g., 1.5 for 1 hour 30 min); never 0 or negative
3. **Hourly rate** — dollars per hour, no $ sign; ask if not provided, never guess
4. **Date** — default to today if not specified
5. **Matter name** — optional but recommended for multi-matter clients
6. **Matter type** — if missing, ask using exactly this list: Litigation, Family Law, Estate, Criminal, Corporate, Immigration, Real Estate, Small Business
7. **Description of work** — brief; suggest one if the attorney is vague ("Client consultation")

**Step 2 — Confirm before logging:**
"Logging: [hours] hours for [client] on [matter] at $[rate]/hr ([description]) — [date]. Go ahead?"

Wait for confirmation.

**Step 3 — Call `log_time`**, then report:
"✅ Logged: [hours] hours for [client] ([matter]) at $[rate]/hr — $[total] fee. Status: Unbilled.
⚠️ Not legal advice — review before sending to client."
