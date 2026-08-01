# League of Legends Betting Procedure Addendum — 2026-08-01

**Status:** Active immediately  
**Effective date:** 2026-08-01 02:44 UTC+7  
**Last updated:** 2026-08-01 19:47 UTC+7  
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

1. `MODEL_RULES_LOL_V0.3.13.md`;
2. `MODEL_RULES_LOL_V0.3.12.md` where not superseded;
3. `MODEL_RULES_LOL_V0.3.11.md` where not superseded;
4. `MODEL_RULES_LOL_V0.3.10.md` where not superseded;
5. `MODEL_RULES_LOL_V0.3.9.md` where not superseded;
6. `MODEL_RULES_LOL_V0.3.8.md` where not superseded;
7. `MODEL_RULES_LOL_V0.3.7.md` where not superseded;
8. `MODEL_RULES_LOL_V0.3.6.md` where not superseded;
9. `LOL_BETTING_PROCEDURE.md` for remaining operational steps;
10. model changelogs and `STAKE_POLICY_V2.json`.

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

Under v0.3.10 and v0.3.13:

- a duration over before 8:00 game time cannot be `OFFICIAL BET` during probation;
- for the remainder of 2026-08-01, all live duration overs are capped at `LEAN — 0u watch`;
- 0-0 kills, approximately even early gold, zero towers, and zero objectives before 8:00 do not count as stall indicators;
- an actionable duration over requires at least two independent observed anti-conversion events after the first objective cycle, including one during approximately the previous five minutes;
- low kills, stable gold, low tower progression, and nominal waveclear are one correlated quiet-state cluster rather than multiple indicators;
- waveclear counts only when current items, mana, cooldowns, safe wave access, and structure depth make it functional under pressure;
- the assessment must inventory the fastest realistic closing branches for both teams, including one-fight objective, pick, structure-compression, inhibitor, and direct-base paths;
- if either team has a realistic single-fight branch that can end at or before the line, the Over is `NO BET` unless the defending team has already resisted that exact route;
- an `OFFICIAL BET` duration over requires a conservative earliest credible finish at least three minutes later than the offered line;
- a finish-window margin greater than one minute but less than three minutes is at most `LEAN — 0u watch`;
- a margin of one minute or less is `NO BET`;
- a duration over is `NO BET` when one won fight can plausibly create a major objective plus two structures, an inhibitor, or direct Nexus access before the line;
- stronger-team conversion, early engage, Grub or Herald conversion, item spikes, death timers, wave state, and composition-specific tower acceleration must be priced explicitly;
- the complete synchronized duration block must include clock, kills, gold, items, towers, objectives, wave state, structure depth, anti-conversion events, functional defense, fastest finish branches, conservative finish time, finish-window margin, odds, floors, stake, and expiry triggers;
- if any required field is unavailable, output `NO BET`.

A failed over does not automatically justify an under. Every changed line and state must be priced independently.

## 6. Late-game kill-total unders

Under v0.3.12, every live kill-total under must calculate current kills, the market line, numerical headroom, the additional whole kills required for the Under to lose, expected remaining mandatory contests, a conservative additional-kill budget, and a safety buffer.

At or after 24:00:

- ten kills or less of remaining headroom is normally `NO BET` unless the game is already in a verified immediate ending sequence;
- more than ten but no more than thirteen kills of headroom with two-sided functional damage or layered engage is at most `LEAN — 0u watch` unless the one-fight close gate is fully passed;
- an `OFFICIAL BET` requires remaining headroom to exceed the conservative expected kill budget by at least three kills;
- a gold, tower, or objective lead is not evidence of kill suppression by itself;
- two or more likely full contests before the Nexus create a hard `NO BET` when either team can force them;
- trailing-team desperation around Baron, soul, Elder, inhibitor, or base defense must be priced explicitly;
- two-sided functional damage, engage, target access, and recent two-sided conversion downgrade or veto an under;
- a late under normally requires no more than four kills during the previous five minutes and no repeated two-sided conversion pattern, but those signals cannot override a failed contest or close gate.

A verified one-fight close requires at least three current confirmations, including either a secured ending buff or exposed/inhibited base state. A 5-2 tower lead alone is insufficient.

Every actionable late under must display current kills, line, numerical headroom, whole kills required to lose, contest count, expected kill budget, safety buffer, close-gate status, functional-damage status, recent kill velocity, quoted odds, target floor, hard floor, stake, and placement status.

The DK vs Gen.G Game 1 process miss activates a same-series lockout on late kill unders based mainly on leader control. The next map requires a verified one-fight close, a passed fight budget with three-kill cushion, and two independent fight-suppression confirmations.

## 7. Recommendation expiry and immediate price-only execution

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

## 8. Required status language

- Recommendations must begin with `OFFICIAL BET`, `LEAN`, or `NO BET`.
- A recommended wager remains `not placed` until the user confirms execution.
- A stale, unavailable, or unconfirmed wager must never be described as placed.
- A user-confirmed stale execution can be recorded as an official real wager, but model-approval attribution must reflect the missing synchronized reassessment.

## 9. Review basis and probation views

The current restrictions are supported by the settled LoL records in `ledger.json`, `MODEL_RULES_LOL_V0.3.10.md`, `MODEL_RULES_LOL_V0.3.11.md`, `MODEL_RULES_LOL_V0.3.12.md`, `MODEL_RULES_LOL_V0.3.13.md`, and the model-review files under `reviews/`.

The user-defined probation view includes all four official LoL wagers placed on 2026-08-01:

- wager 1: AL vs TT Game 1 Over 32 minutes, loss, -250,000 VND (-0.25u);
- wager 2: AL vs TT Game 2 Under 29.5 kills, win, +198,750 VND (+0.19875u);
- wager 3: TES vs LGD Game 3 Over 33 minutes, loss, -250,000 VND (-0.25u), execution exception;
- wager 4: DK vs Gen.G Game 2 Over 33 minutes, loss, -300,000 VND (-0.30u), execution and stake exception;
- current user-defined record: **4 of 10, 1-3, -601,250 VND, -0.60125u**;
- six wagers remain.

Strict model-approved execution performance must also remain visible separately. User-directed probation inclusion does not erase a material price-move, state-synchronization, stake-cap, or other execution deviation.