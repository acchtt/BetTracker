# MODEL RULES — FOOTBALL v0.2.40

Effective: 2026-08-07

This version supplements v0.2.39 and all active football procedures. All earlier staking, minimum-odds, synchronization, reset, motivation, market-scan, exposure, settlement, circuit-breaker and ledger controls remain active unless strengthened below.

## 1. Hard pre-verdict validator

Before any football response may output `SHADOW LEAN — DO NOT PLACE`, `LEAN`, or `OFFICIAL BET`, the model must complete the canonical pre-verdict validator in `models/football/procedures/FOOTBALL_PRE_VERDICT_VALIDATOR.md`.

A candidate is executable or shadow-executable only when the validator result is `PASS`.

If any mandatory gate is failed, stale, unresolved, internally inconsistent or unsupported, the output must be `NO BET` or `NO BET — HOLD` as appropriate.

The model must not verbally override a validator failure.

## 2. Airtable-backed decision-state enforcement

The canonical operational decision-state store is the Airtable base documented in `models/football/airtable/FOOTBALL_DECISION_STATE_AIRTABLE.md`.

For every material prematch assessment and every material live reassessment that could produce a side, total, derivative or shadow selection, create a `Decision States` record containing the synchronized state, reset epoch, utility state, primary evidence channels, xG role, applicable directional/favourite-fade gates, major-market scan status, circuit-breaker mode and validator result.

A `SHADOW LEAN — DO NOT PLACE`, `LEAN`, or `OFFICIAL BET` must not be issued unless its corresponding Airtable record has `Validator Result = PASS`.

If Airtable is temporarily unavailable, do not bypass this requirement. Return `NO BET — HOLD — decision-state validation unavailable` for any candidate that would otherwise require execution validation.

Airtable is an operational control log, not the authoritative financial ledger. `/ledger.json` remains authoritative for official accounting when ledger writes are authorized.

## 3. xG/xGOT enforcement lock

Existing xG rules are not optional guidance.

For an executable or shadow-executable candidate:

- `xG Role` must be `Secondary Only` or `Not Used`;
- `xG Role = Violation` is an automatic validator failure;
- xG/xGOT may corroborate a thesis established by primary forward-looking evidence, but may not create the thesis, classify the goal environment by itself, or substitute for high-value access, chance structure, transitions, defensive degradation, tempo/persistence or relevant scoring/conceding profiles.

If removing xG/xGOT from the assessment would materially collapse the thesis, the candidate fails validation.

## 4. Regime and persistence consistency lock

A single goal, shot on target, big chance, corner sequence, red card, substitution or other isolated event may reset the state, but it does not by itself prove the new regime.

After a material reset, the goal environment and directional thesis are `Unresolved` until sufficient post-reset evidence establishes the new state.

The model must not retrospectively relabel a prior `Neutral` regime as `Open` merely because one later high-value event became a goal. A regime change requires persistence evidence appropriate to the decision window.

Any contradiction between the stated regime, reset status and directional-persistence field is a validator failure or HOLD.

## 5. Competition-utility propagation lock

Competition format verification must propagate into the actual decision logic.

It is insufficient to know the format without applying its consequences to regulation-win, draw, shootout, margin, loss-avoidance and conservation utility.

When goal difference, goals scored or another margin-sensitive criterion is an early tiebreaker, the model must explicitly account for continued margin utility before assuming a leading side will conserve.

When a side is trailing, loss-limitation utility must be assessed separately from comeback utility.

If competition format is relevant but either the format or its utility consequences remain unresolved, validation cannot pass.

## 6. Primary-evidence minimum

Any executable or shadow-executable live thesis requires at least two independent primary forward-looking evidence channels unless an older rule imposes a stricter requirement.

Primary channels include:

- box/central access;
- big or clear chances;
- dangerous transitions/cutbacks;
- sustained set-piece pressure;
- verified defensive degradation;
- shot-location/chance-quality structure independent of xG;
- persistent territorial/box-touch pressure;
- tempo/persistence evidence;
- relevant scoring/conceding profile;
- lineup/availability information when materially predictive.

Possession, pass volume, raw shots, shots on target, xG and xGOT are not sufficient as the two required channels unless corroborated by stronger primary evidence under the active rules.

## 7. Market and settlement integrity

Before validation can pass:

- all available major market families must be reassessed;
- the exact settlement terms of the chosen line must be understood;
- protected handicap integrity under v0.2.38 must be preserved;
- minimum odds and same-state drift rules must pass;
- event-budget math must be explicit for totals and other binary/event-count markets;
- invalidating one side may not be used as confirmation of the opposite side.

## 8. Circuit-breaker enforcement

The v0.2.39 four-match football circuit breaker remains active at `0/4 complete` unless later explicitly updated.

While active, a validator `PASS` may produce only `SHADOW LEAN — DO NOT PLACE`, never a new `OFFICIAL BET`.

Each counted shadow selection must also be written to the Airtable `Circuit Breaker` table and later updated with result, simulated P/L and process validity.

`NO BET` and `NO BET — HOLD` assessments do not consume a circuit-breaker slot.

## 9. Existing controls remain active

- 1u = 1,000,000 VND.
- Minimum accepted odds = 1.70.
- Every executable or shadow `LEAN` uses exactly 0.25u.
- Same-state accepted-odds drift tolerance remains 0.08.
- No fixed cumulative same-match exposure cap under v0.2.37 outside circuit-breaker restrictions.
- A wager becomes official only after confirmed placement and only when official betting is enabled.
- Ledger writes remain on hold until explicitly approved.
