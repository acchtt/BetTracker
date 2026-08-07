# MODEL RULES — FOOTBALL v0.2.36

Effective: 2026-08-07

This version supplements v0.2.35 and all active football procedures. All earlier bankroll, staking, minimum-odds, assessment-period, synchronization, reset, settlement, market-scan, motivation, correlation, exposure and ledger controls remain active unless changed below.

## 1. Same-state execution odds tolerance

The permitted absolute decimal-odds drift between the quoted recommendation price and the accepted price is increased from **0.03 to 0.08**.

An execution may remain model-valid without a full reprice when all of the following are true:

1. the exact market, selection, line and settlement scope are unchanged;
2. the score, true minute and material match state are unchanged;
3. no goal, penalty, red card, second yellow, injury, substitution cluster, tactical reset, weather change or pitch change has occurred;
4. acceptance occurs within the active 120-second freshness window;
5. the accepted odds remain at or above the 1.70 minimum;
6. the absolute move from quoted odds is **0.08 or less**.

A move greater than 0.08 requires a fresh synchronized reprice before model attribution can be confirmed.

## 2. Implied-probability sub-trigger retired for same-state drift

The former 1.5-percentage-point implied-probability trigger no longer independently invalidates an execution when the same-state conditions above are satisfied and the decimal-odds move is within 0.08.

Implied-probability movement remains a diagnostic input. It may still indicate adverse information, but it does not override the explicit 0.08 same-state execution tolerance by itself.

## 3. Better or worse price treatment

A better price is not automatically positive evidence, and a worse price is not automatically invalid.

For any accepted price different from the quote, record:

- quoted odds;
- accepted odds;
- absolute odds difference;
- score and minute at quotation and acceptance;
- elapsed real time;
- whether any material event or market-line change occurred.

If the line or state changed, the 0.08 tolerance does not apply.

## 4. Existing controls remain active

- 1u = 1,000,000 VND.
- Minimum accepted odds = 1.70.
- Every executable `LEAN` uses exactly 0.25u.
- Normal same-match exposure cap = 0.25u.
- One best expression only.
- A wager becomes official only after confirmed placement.
- `ledger.json` remains authoritative and ledger writes remain on hold until explicitly approved.
