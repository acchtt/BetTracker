# Ledger Update Fast Path

Effective immediately for EdgeLog `ledger.json` updates.

## Target

- Acknowledge confirmed placement or settlement immediately.
- Complete the authoritative ledger write as the first operation.
- Target completion: under 90 seconds when all required fields are supplied.
- Do not delay the write for long-form review, model commentary, or adjacent-line analysis.

## Placement fast path

1. Parse only the required fields: event, market, line, accepted odds, stake, slip ID, entry score, entry minute, status, payout, settlement basis.
2. Fetch the current `ledger.json` once.
3. Update the matching entry or append one entry.
4. Write `ledger.json` directly in one commit.
5. Return the commit SHA and a compact confirmation.
6. Add extended reasoning or review later only when requested.

## Settlement fast path

1. Confirm final score and settlement type.
2. Calculate payout, net profit/loss, and units.
3. Fetch `ledger.json` once.
4. Update status, result, final score, settlement fields, payout, profit/loss, and settled timestamp.
5. Commit directly.
6. Perform detailed post-match review separately.

## Rules

- No temporary GitHub Actions workflow for a normal single-entry ledger update.
- No create-workflow/delete-workflow sequence unless direct file update is impossible.
- No repeated repository searches after the ledger path is known.
- Do not fetch unrelated files before recording a confirmed bet.
- Exact accepted odds remain authoritative.
- A bet is never marked placed until user confirmation.
- If a required field is missing, write all known fields and mark the missing field explicitly instead of delaying the entire update, unless settlement accuracy would be compromised.
