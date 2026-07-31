# League of Legends Betting Procedure Addendum — 2026-08-01

**Status:** Active immediately  
**Effective date:** 2026-08-01 02:44 UTC+7  
**Purpose:** Supersede conflicting fixed values and operational rules in `LOL_BETTING_PROCEDURE.md` without deleting its source, verification, roster, patch, draft, and market-analysis procedures.

When this addendum conflicts with `LOL_BETTING_PROCEDURE.md`, this addendum and the latest dated model rule control.

## 1. Unit and stake policy

- **1u = 1,000,000 VND.**
- Standard LoL evaluation stake: **0.25u = 250,000 VND**.
- During LoL v0.3.9 probation, total exposure is capped at **0.25u per map**.
- Correlated same-map add-ons are prohibited during probation.
- Historical wagers retain the unit value in force when placed.
- Every new record must include `unitValueVndAtPlacement`.
- `STAKE_POLICY_V2.json` is authoritative for unit conversion.

## 2. Active model order

LoL analysis must apply the following in descending precedence:

1. `MODEL_RULES_LOL_V0.3.9.md`;
2. `MODEL_RULES_LOL_V0.3.8.md` where not superseded;
3. `MODEL_RULES_LOL_V0.3.7.md` where not superseded;
4. `MODEL_RULES_LOL_V0.3.6.md` where not superseded;
5. `LOL_BETTING_PROCEDURE.md` for remaining operational steps;
6. `MODEL_CHANGELOG.md` and `STAKE_POLICY_V2.json`.

## 3. Positive underdog kill handicaps

During v0.3.9 probation:

- post-draft or pre-game positive underdog kill handicaps cannot be `OFFICIAL BET`;
- the maximum classification is `LEAN — 0u watch`;
- live promotion requires two independent structured-fight conversions and all v0.3.9 functional-damage, space-creation, champion-counter, structural-state, objective-timing, and execution-validity gates;
- same-series lockout applies after a relevant model error.

## 4. Moneylines

A neutral early state, generic team reputation, or attractive price does not qualify as current-map confirmation.

An actionable moneyline requires two independent confirmations from current gold or item distribution, structures, objectives, wave or side-lane control, vision and terrain, observed fight conversion, or a currently active composition breakpoint.

## 5. Hard recommendation expiry

A recommendation expires after:

- an odds move of at least 0.10;
- an implied-probability move of at least three percentage points;
- any material kill, tower, objective, inhibitor, item, gold, roster, draft, side, or line change;
- any stated recommendation-specific expiry trigger.

After expiry, the exact words `EXPIRED — REASSESSMENT REQUIRED` must be used before a fresh analysis. The old recommendation is not model-approved at execution merely because the accepted odds remain above 1.60.

## 6. Required status language

- Recommendations must begin with `OFFICIAL BET`, `LEAN`, or `NO BET`.
- A recommended wager remains `not placed` until the user confirms execution.
- A stale, unavailable, or unconfirmed wager must never be described as placed.
- A user-confirmed stale execution can be recorded as an official real wager, but model-approval attribution must reflect the missing synchronized reassessment.

## 7. Review basis

The current probation and restrictions are supported by `reviews/LOL_TWO_DAY_REVIEW_2026-07-31_TO_2026-08-01.md` and must be reviewed after the next 10 settled, synchronized, model-approved LoL wagers.