# MODEL RULES — FOOTBALL v0.2.37

Effective: 2026-08-07

This version supplements v0.2.36 and all active football procedures. All earlier staking, minimum-odds, assessment-period, synchronization, reset, settlement, market-scan, motivation and ledger controls remain active unless changed below.

## 1. Fixed same-match exposure cap removed

The former fixed 0.25u combined same-match exposure cap is retired.

- There is no fixed maximum cumulative exposure per football match.
- Every individual executable `LEAN` still uses exactly 0.25u = 250,000 VND.
- An existing position no longer automatically blocks a later same-match recommendation.
- Each additional position requires a fresh synchronized assessment at the current score, minute, line, odds and material state.

## 2. Additional-position gate

Before issuing another same-match `LEAN`, the model must:

1. reassess all available major market families;
2. identify the new position's independent edge and settlement basis;
3. state whether it is correlated, partially correlated, offsetting or independent relative to existing positions;
4. state cumulative same-match exposure after placement;
5. state the incremental maximum loss created by the new wager;
6. reject automatic averaging down, loss chasing or duplication of the same thesis without new evidence.

A goal, red card, penalty, halftime, substitution cluster, injury or verified tactical change still resets the evidence state.

## 3. One-best-expression control

`One best expression` continues to apply to each decision point. The model may issue only one new executable selection per reassessment.

Multiple same-match positions are permitted only when they arise from separate synchronized decisions rather than simultaneous correlated stacking.

## 4. Correlation treatment

The former absolute prohibition on correlated add-ons is retired together with the fixed match cap.

Correlated positions may be recommended only when the fresh edge independently clears all active gates. Correlation must be disclosed explicitly, and the model must explain why the additional position is not merely duplicating existing exposure.

## 5. Existing controls remain active

- 1u = 1,000,000 VND.
- Minimum accepted odds = 1.70.
- Every executable `LEAN` uses exactly 0.25u.
- A wager becomes official only after confirmed placement.
- Same-state accepted-odds drift tolerance remains 0.08 under v0.2.36.
- Ledger writes remain on hold until explicitly approved.
