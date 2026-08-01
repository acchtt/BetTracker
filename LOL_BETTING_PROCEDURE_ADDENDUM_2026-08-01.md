# League of Legends Betting Procedure Addendum — 2026-08-01

**Status:** Active immediately  
**Effective date:** 2026-08-01 02:44 UTC+7  
**Last updated:** 2026-08-01 15:31 UTC+7  
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

1. `MODEL_RULES_LOL_V0.3.11.md`;
2. `MODEL_RULES_LOL_V0.3.10.md` where not superseded;
3. `MODEL_RULES_LOL_V0.3.9.md` where not superseded;
4. `MODEL_RULES_LOL_V0.3.8.md` where not superseded;
5. `MODEL_RULES_LOL_V0.3.7.md` where not superseded;
6. `MODEL_RULES_LOL_V0.3.6.md` where not superseded;
7. `LOL_BETTING_PROCEDURE.md` for remaining operational steps;
8. `MODEL_CHANGELOG.md` and `STAKE_POLICY_V2.json`.

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

## 6. Recommendation expiry and immediate price-only execution

A recommendation expires after:

- an odds move of at least 0.10;
- an implied-probability move of at least three percentage points;
- any material kill, tower, objective, inhibitor, item, gold, roster, draft, side, or line change;
- any stated recommendation-specific expiry trigger.

After expiry, the exact words `EXPIRED — REASSESSMENT REQUIRED` must be used before a fresh analysis. The old recommendation is not model-approved at execution merely because the accepted odds remain above 1.60.

Under v0.3.11, an immediate price-only move may remain synchronized and model-approved when all of the following are true:

- the exact event, map, market, selection, and line are unchanged;
- no meaningful intervening game-state event occurred;
- accepted odds remain at or above the stated hard execution floor and never below 1.60;
- the odds move is less than 0.10;
- the implied-probability move is less than three percentage points;
- the stake and per-map exposure remain compliant;
- the original recommendation was `OFFICIAL BET`;
- the timing basis supports an immediate same-state move.

Future actionable recommendations must distinguish:

- quoted odds;
- model target floor;
- hard execution floor.

A fill below the model target floor is recorded as adverse price slippage. It can still count as model-approved only under the complete v0.3.11 tolerance gate. Material favorable and adverse moves both require reassessment.

The rule is outcome-neutral. A losing wager that satisfies the tolerance conditions counts in the same way as a winning wager.

## 7. Required status language

- Recommendations must begin with `OFFICIAL BET`, `LEAN`, or `NO BET`.
- A recommended wager remains `not placed` until the user confirms execution.
- A stale, unavailable, or unconfirmed wager must never be described as placed.
- A user-confirmed stale execution can be recorded as an official real wager, but model-approval attribution must reflect the missing synchronized reassessment.

## 8. Review basis

The current restrictions are supported by `reviews/LOL_TWO_DAY_REVIEW_2026-07-31_TO_2026-08-01.md`, the settled AL vs TT Game 1 duration record in `ledger.json`, `MODEL_RULES_LOL_V0.3.10.md`, and the AL vs TT Game 2 execution-policy record under `MODEL_RULES_LOL_V0.3.11.md`.

The ten-wager probation continues without reset:

- qualifying wager 1: AL vs TT Game 1 Over 32 minutes, loss, -250,000 VND (-0.25u);
- qualifying wager 2: AL vs TT Game 2 Under 29.5 kills, win, +198,750 VND (+0.19875u);
- current probation record: **1-1, -51,250 VND, -0.05125u**;
- eight qualifying settled wagers remain before the formal review.
