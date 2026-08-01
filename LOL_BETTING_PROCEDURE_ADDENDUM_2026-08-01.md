# League of Legends Betting Procedure Addendum — 2026-08-01

**Status:** Active immediately  
**Effective date:** 2026-08-01 02:44 UTC+7  
**Last updated:** 2026-08-01 14:50 UTC+7  
**Purpose:** Supersede conflicting fixed values and operational rules in `LOL_BETTING_PROCEDURE.md` without deleting its source, verification, roster, patch, draft, and market-analysis procedures.

When this addendum conflicts with `LOL_BETTING_PROCEDURE.md`, this addendum and the latest dated model rule control.

## 1. Unit and stake policy

- **1u = 1,000,000 VND.**
- Standard LoL evaluation stake: **0.25u = 250,000 VND**.
- During the active LoL probation, total exposure is capped at **0.25u per map**.
- Correlated same-map add-ons are prohibited during probation.
- Historical wagers retain the unit value in force when placed.
- Every new record must include `unitValueVndAtPlacement`.
- `STAKE_POLICY_V2.json` is authoritative for unit conversion.

## 2. Active model order

LoL analysis must apply the following in descending precedence:

1. `MODEL_RULES_LOL_V0.3.10.md`;
2. `MODEL_RULES_LOL_V0.3.9.md` where not superseded;
3. `MODEL_RULES_LOL_V0.3.8.md` where not superseded;
4. `MODEL_RULES_LOL_V0.3.7.md` where not superseded;
5. `MODEL_RULES_LOL_V0.3.6.md` where not superseded;
6. `LOL_BETTING_PROCEDURE.md` for remaining operational steps;
7. `MODEL_CHANGELOG.md` and `STAKE_POLICY_V2.json`.

## 3. Positive underdog kill handicaps

During probation:

- post-draft or pre-game positive underdog kill handicaps cannot be `OFFICIAL BET`;
- the maximum classification is `LEAN — 0u watch`;
- live promotion requires two independent structured-fight conversions and all v0.3.9 functional-damage, space-creation, champion-counter, structural-state, objective-timing, and execution-validity gates;
- same-series lockout applies after a relevant model error.

## 4. Moneylines

A neutral early state, generic team reputation, or attractive price does not qualify as current-map confirmation.

An actionable moneyline requires two independent confirmations from current gold or item distribution, structures, objectives, wave or side-lane control, vision and terrain, observed fight conversion, or a currently active composition breakpoint.

## 5. Duration markets

Under v0.3.10:

- a duration over before 8:00 game time cannot be `OFFICIAL BET` during probation;
- 0-0 kills, approximately even early gold, zero towers, and zero objectives before 8:00 do not count as stall indicators;
- an actionable duration over requires at least two independent stall indicators and at least one observed anti-conversion event from the current map;
- waveclear counts only when current items, mana, cooldowns, safe wave access, and structure depth make it functional under pressure;
- a duration over is `NO BET` when at least two fast-close flags are active and no realized stall event has occurred;
- stronger-team conversion, early engage, Grub or Herald conversion, and composition-specific tower acceleration must be priced explicitly;
- a same-series duration-over miss triggers lockout on the same thesis in the next map until new current-map stall evidence appears.

A failed over does not automatically justify an under. Every changed line and state must be priced independently.

## 6. Hard recommendation expiry

A recommendation expires after:

- an odds move of at least 0.10;
- an implied-probability move of at least three percentage points;
- any material kill, tower, objective, inhibitor, item, gold, roster, draft, side, or line change;
- any stated recommendation-specific expiry trigger.

After expiry, the exact words `EXPIRED — REASSESSMENT REQUIRED` must be used before a fresh analysis. The old recommendation is not model-approved at execution merely because the accepted odds remain above 1.60.

An immediate price-only move with no reported meaningful state change may remain synchronized when it does not cross the stated material-move threshold and the exact market and line remain unchanged. Record the accepted price and the timing basis explicitly.

## 7. Required status language

- Recommendations must begin with `OFFICIAL BET`, `LEAN`, or `NO BET`.
- A recommended wager remains `not placed` until the user confirms execution.
- A stale, unavailable, or unconfirmed wager must never be described as placed.
- A user-confirmed stale execution can be recorded as an official real wager, but model-approval attribution must reflect the missing synchronized reassessment.

## 8. Review basis

The current restrictions are supported by `reviews/LOL_TWO_DAY_REVIEW_2026-07-31_TO_2026-08-01.md`, the settled AL vs TT Game 1 duration record in `ledger.json`, and `MODEL_RULES_LOL_V0.3.10.md`.

The ten-wager probation continues without reset. The AL vs TT Game 1 Over 32 loss is qualifying wager **1 of 10**, leaving nine qualifying settled wagers before the formal review.