---
description: Invoice a client — mark all unbilled time entries as billed
argument-hint: "<client name>"
---

# /legal-billing:invoice-client — Invoice a Client

End-to-end invoice flow: show unbilled work, confirm, then mark as billed.

## Invocation

```
/legal-billing:invoice-client $ARGUMENTS
```

`$ARGUMENTS` should be the client name. If missing, ask: "Which client are you invoicing?"

## Workflow

**Step 0 — Confirm setup first:** Call `connect_google` with `check_only: true`. If not connected, stop and tell the attorney to say "connect Google" — do not ask for a client name yet. If connected, proceed; if the first data call below returns "No Google Sheet configured yet", stop and ask whether to create a new sheet from the template (`create_billing_sheet`, only after they confirm) or connect an existing one (`set_spreadsheet_url`). Only continue once both are confirmed. If you call create_billing_sheet, always paste the full sheet URL from its result into your reply — do not just say "sheet created."

**Step 1 — Pull unbilled entries:**
Call `get_time_entries` with `clientName` and `status: Unbilled`.

If no unbilled entries: "No unbilled time found for [client]. Nothing to invoice."
Stop here.

**Step 2 — Show what will be invoiced:**
"Here's what I'll mark as billed for [client]:

| Date | Matter | Hours | Rate | Fee |
|---|---|---|---|---|
| [row] | ... | ... | ... | $... |

**Total: $[X] across [N] entries.**

Ready to mark all of these as billed with today's invoice date?"

**Step 3 — Wait for confirmation**, then call `mark_billed`.

**Step 4 — Report success:**
"✅ Done. All [N] entries for [client] marked as Billed — invoice date set to today ([date]).
⚠️ Not legal advice — review before sending to client."

**Step 5 — Preview invoice (optional):**
"Want me to pull the invoice preview? Say 'show invoice' and I'll read the Invoice tab."
