# MODEL RULES — FOOTBALL v0.2.32

Effective: 2026-08-06

This version supplements v0.2.31 and all active football procedures. Every earlier bankroll, staking, minimum-odds, assessment-period, synchronization, execution-freshness, settlement, full-market-scan, motivation, defensive-baseline, HOLD, correlation and ledger control remains active unless this file explicitly strengthens it.

## 1. Universal output-surface parity

The football model applies identically across every assistant surface, including:

- the main chat;
- reminder and automation chats;
- scheduled task results and notifications;
- follow-up threads opened from an automation;
- copied or forwarded assistant responses;
- any other conversation surface that can influence a wager.

No reminder, automation, notification or secondary thread may use a reduced recommendation standard. It must not promote a market that would remain `NO BET` or `NO BET — HOLD` in the main chat under the same evidence.

## 2. Canonical-context gate for automations and secondary threads

Before a reminder or automation may issue `LEAN`, it must have enough context to apply the current canonical football model, including:

- active version and applicable stake/minimum-odds rules;
- current score and true minute;
- synchronized market line and odds;
- material events and personnel changes;
- settlement scope;
- required conceding/scoring and motivation context;
- full-market comparison;
- execution-freshness status;
- current match and portfolio exposure.

When that context is absent, incomplete, stale or not carried into the secondary thread, the only permitted verdict is:

`NO BET — MODEL CONTEXT INCOMPLETE`

or, when the directional thesis is valid but a defined live gate remains unresolved:

`NO BET — HOLD`

The response must state the exact missing context or unlock condition.

## 3. Automation recommendations are not exempt from output requirements

Every scheduled or reminder-based football reassessment must include the same mandatory fields as the main chat:

- verdict;
- `Assessment period`;
- conceding profile;
- motivation with win, draw and margin utility;
- absolute goal-environment classification;
- event budget for any goal or corner under;
- complete available-market scan;
- correlation and exposure check;
- hold status;
- best expression;
- price/state freshness warning.

A reminder result must not use informal labels such as `best value`, `good`, `acceptable`, `strongest value` or medal/ranking language in a way that could reasonably be interpreted as an executable recommendation unless the market has passed every `LEAN` gate.

## 4. Probability-estimate discipline

Do not publish exact or narrow win, draw, cover, total-goal or expected-value probabilities unless all of the following are present:

1. the calculation method is identified;
2. the principal inputs are stated;
3. the sample and calibration limitations are stated;
4. the estimate is consistent with the current synchronized state and market scope;
5. uncertainty is represented honestly.

An early live snapshot, a small historical sample or qualitative tactical observation does not justify an unsupported precise percentage.

When the model cannot support a calibrated numerical estimate, use qualitative or explicitly broad probability ranges and keep the candidate on HOLD.

## 5. Cross-thread evidence and snapshot continuity

Evidence supplied in one conversation surface is not assumed to exist in another. A secondary thread must not claim that two synchronized snapshots exist unless both snapshots, their times and their comparable metrics are actually available in that thread or explicitly carried into the automation prompt.

A screenshot at one minute plus remembered context from a different thread does not satisfy the two-snapshot gate.

If continuity is uncertain, return `NO BET — MODEL CONTEXT INCOMPLETE` and request the missing earlier snapshot or a new synchronized comparison.

## 6. One-best-expression and combined-exposure gate

An automation or secondary thread must not present multiple executable markets from the same match without applying the active correlation and exposure rules.

Normally only one market may be promoted as the best expression. A second market may not be labeled `acceptable`, `secondary`, `smaller edge` or similar if a user could reasonably treat that label as permission to place both.

Before any second same-match recommendation, verify:

- the edge is independently priced and independently evidenced;
- the two wagers do not rely mainly on the same match script;
- combined same-match exposure remains within the active cap;
- existing positions from the main chat, reminder chat and user-reported tickets are included.

If two full 0.25u positions would create 0.50u same-match exposure, the second wager is blocked unless a later active rule explicitly authorizes that exposure.

## 7. Placement confirmation from any surface

A user statement that a wager was placed based on a reminder, automation or secondary-thread response counts as placement confirmation for official-status purposes, even when the recommendation was procedurally invalid.

However, do not infer missing ticket fields. Record the position as `PLACED — DETAILS PENDING` until the user supplies, where available:

- exact market and settlement scope;
- accepted odds;
- stake;
- sportsbook match clock and real time;
- score at acceptance;
- slip or settlement identifier.

A procedurally invalid recommendation may still be an official placed wager, but `executionValid` and `modelAttributed` must be evaluated separately during verification.

Ledger writes remain prohibited without explicit approval.

## 8. Recommendation-incident rule

When an automation or secondary-thread output causes or materially contributes to a placed wager while failing the active model gates:

1. acknowledge the output as a process failure;
2. stop further add-ons based on that output;
3. preserve the exact response and available screenshots for review;
4. request the ticket details needed for exposure and settlement control;
5. do not retroactively relabel the original output as compliant because the live state or final result later appears favorable;
6. add or strengthen a repository rule when the failure reveals a reusable process gap.

Outcome and process remain separate. A winning ticket does not validate a noncompliant recommendation, and a losing ticket does not by itself prove the underlying thesis was wrong.

## 9. Existing controls remain active

All earlier rules remain active, including:

- 1u = 1,000,000 VND;
- minimum accepted odds = 1.70;
- every executable `LEAN` uses exactly 0.25u;
- normal official football stake cap = 0.25u;
- the 0.125u tier remains retired;
- mandatory assessment-period and full-market fields;
- scoring/conceding and decomposed-motivation requirements;
- xG and xGOT as supporting evidence only;
- event-budget and high-event late-under gates;
- synchronized snapshots and event resets;
- exact settlement-scope confirmation;
- execution-freshness repricing;
- one-best-expression and correlation control;
- official status only after placement confirmation;
- `ledger.json` as the authoritative record;
- ledger writes remain on hold until explicitly approved.
