# League of Legends Betting Procedure Addendum — 2026-08-01

**Status:** Active immediately  
**Effective date:** 2026-08-01 02:44 UTC+7  
**Last updated:** 2026-08-01 21:09 UTC+7  
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

1. `MODEL_RULES_LOL_V0.3.14.md`;
2. `MODEL_RULES_LOL_V0.3.13.md` where not superseded;
3. `MODEL_RULES_LOL_V0.3.12.md` where not superseded;
4. `MODEL_RULES_LOL_V0.3.11.md` where not superseded;
5. `MODEL_RULES_LOL_V0.3.10.md` where not superseded;
6. `MODEL_RULES_LOL_V0.3.9.md` where not superseded;
7. `MODEL_RULES_LOL_V0.3.8.md` where not superseded;
8. `MODEL_RULES_LOL_V0.3.7.md` where not superseded;
9. `MODEL_RULES_LOL_V0.3.6.md` where not superseded;
10. `LOL_BETTING_PROCEDURE.md` for remaining operational steps;
11. model changelogs and `STAKE_POLICY_V2.json`.

## 3. Positive underdog kill handicaps

During probation:

- post-draft or pre-game positive underdog kill handicaps cannot be `OFFICIAL BET`;
- the maximum classification is `LEAN — 0u watch`;
- live promotion requires two independent structured-fight conversions and all functional-damage, item-strength, space-creation, champion-counter, structural-state, objective-timing, and execution-validity gates;
- same-series lockout applies after a relevant model error.

## 4. Moneylines

A neutral early state, generic team reputation, or attractive price does not qualify as current-map confirmation.

An actionable moneyline requires two independent confirmations from current usable gold or completed-item distribution, structures, objectives, wave or side-lane control, vision and terrain, observed fight conversion, or a currently active composition breakpoint.

Raw gold counts only when converted into relevant items, levels, or map tempo.

## 5. Mandatory item-strength and usability gate

Under v0.3.14, every live assessment after the first meaningful recall cycle must record visible items for both teams in fixed role order:

`Top / Jungle / Mid / ADC / Support`.

Record completed major items, meaningful components, boots tier, defensive or utility purchases, relevant levels, and recall or unspent-gold risk when visible.

Every assessment must state whether the economy lead is concentrated on:

- primary sustained damage;
- burst or pick damage;
- frontline durability;
- engage or support utility;
- side-lane pressure;
- incomplete components;
- unspent gold.

The model may not describe damage, waveclear, frontline, engage, disengage, sustain, scaling, objective damage, tower pressure, or one-fight close potential as functional without current item evidence.

Before projecting fight lethality, compare completed offensive items and penetration with opposing frontline durability, defensive actives, shields, sustain, stasis, cleanse, and safe damage delivery.

After the first meaningful recall cycle:

- an `OFFICIAL BET` requires readable current items for both teams' primary damage sources and relevant frontline or engage champions;
- if the item panel is unavailable or unreadable and item strength is decision-critical, output `NO BET`;
- `LEAN — 0u watch` is allowed only when the remaining gates pass and item uncertainty cannot plausibly reverse the directional read;
- do not guess item names from team gold, champion identity, or unclear icon colors.

A completed major item, substantial recall purchase, decisive defensive active, relevant level breakpoint, or corrected item inventory is a material state event. Use `EXPIRED — REASSESSMENT REQUIRED` and price the current line independently.

### Market-specific item use

- **Moneyline:** an item breakpoint may count as one independent confirmation only when it is completed, relevant, and usable in the next fight, objective, siege, or side-lane sequence.
- **Kill Over:** draft engage density alone is insufficient. Require observed two-sided structured-fight conversion or a high kill-velocity window, plus item damage capable of overcoming current durability.
- **Kill Under:** include upcoming item spikes in the fight budget; a slow window is not protective when both teams are one recall from major damage completion.
- **Kill handicap:** verify whether the favorite's item distribution supports clean wipes and margin expansion, or whether the underdog's items support return damage.
- **Duration:** include item state in functional defense, waveclear access, one-fight compression, objective conversion, and the earliest credible finish.

Every actionable post-recall recommendation must include the synchronized item inventory, item concentration, damage-versus-durability read, item unknowns, odds, floors, stake, status, and expiry triggers.

## 6. Duration markets

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
- stronger-team conversion, early engage, Grub or Herald conversion, completed item spikes, death timers, wave state, and composition-specific tower acceleration must be priced explicitly;
- the complete synchronized duration block must include clock, kills, gold, items, towers, objectives, wave state, structure depth, anti-conversion events, functional defense, fastest finish branches, conservative finish time, finish-window margin, odds, floors, stake, and expiry triggers;
- if any required field is unavailable, output `NO BET`.

A failed Over does not automatically justify an Under. Every changed line and state must be priced independently.

## 7. Late-game kill-total unders

Under v0.3.12, every live kill-total Under must calculate current kills, the market line, numerical headroom, additional whole kills required for the Under to lose, expected remaining mandatory contests, a conservative additional-kill budget, and a safety buffer.

At or after 24:00:

- ten kills or less of remaining headroom is normally `NO BET` unless the game is already in a verified immediate ending sequence;
- more than ten but no more than thirteen kills of headroom with two-sided functional damage or layered engage is at most `LEAN — 0u watch` unless the one-fight-close gate is fully passed;
- an `OFFICIAL BET` requires remaining headroom to exceed the conservative expected kill budget by at least three kills;
- a gold, tower, or objective lead is not evidence of kill suppression by itself;
- two or more likely full contests before the Nexus create a hard `NO BET` when either team can force them;
- trailing-team desperation around Baron, soul, Elder, inhibitor, or base defense must be priced explicitly;
- two-sided functional damage, current completed damage items, engage, target access, and recent two-sided conversion downgrade or veto an Under;
- a late Under normally requires no more than four kills during the previous five minutes and no repeated two-sided conversion pattern, but those signals cannot override a failed contest, item-strength, or close gate.

A verified one-fight close requires at least three current confirmations, including either a secured ending buff or exposed/inhibited base state. A 5-2 tower lead alone is insufficient.

Every actionable late Under must display current kills, line, headroom, whole kills required to lose, contest count, expected kill budget, safety buffer, close-gate status, item-qualified functional-damage status, recent kill velocity, quoted odds, target floor, hard floor, stake, and placement status.

## 8. Recommendation expiry and immediate price-only execution

A recommendation expires after:

- an odds move of at least 0.10;
- an implied-probability move of at least three percentage points;
- any material kill, tower, objective, inhibitor, item completion, substantial recall purchase, gold, roster, draft, side, or line change;
- any stated recommendation-specific expiry trigger.

After expiry, use the exact words `EXPIRED — REASSESSMENT REQUIRED` before a fresh analysis.

Under v0.3.11, an immediate price-only move may remain synchronized and model-approved only when the exact event, map, market, selection, and line are unchanged; no meaningful state event occurred; accepted odds remain above the hard floor and 1.60; the odds move is less than 0.10; implied probability moves less than three percentage points; stake and exposure are compliant; the original verdict was `OFFICIAL BET`; and timing supports an immediate same-state move.

Future actionable recommendations must distinguish quoted odds, model target floor, and hard execution floor.

## 9. Required status language

- Recommendations must begin with `OFFICIAL BET`, `LEAN`, or `NO BET`.
- A recommendation remains `not placed` until the user confirms execution.
- A stale, unavailable, or unconfirmed wager must never be described as placed.
- A user-confirmed stale execution can be recorded as an official real wager, but model-approval attribution must preserve the deviation.

## 10. Review basis and probation views

The user-defined probation view includes all four official LoL wagers placed on 2026-08-01:

- wager 1: AL vs TT Game 1 Over 32 minutes, loss, -250,000 VND (-0.25u);
- wager 2: AL vs TT Game 2 Under 29.5 kills, win, +198,750 VND (+0.19875u);
- wager 3: TES vs LGD Game 3 Over 33 minutes, loss, -250,000 VND (-0.25u), execution exception;
- wager 4: DK vs Gen.G Game 2 Over 33 minutes, loss, -300,000 VND (-0.30u), execution and stake exception;
- current user-defined record: **4 of 10, 1-3, -601,250 VND, -0.60125u**;
- six wagers remain.

Strict model-approved execution performance must remain visible separately. User-directed probation inclusion does not erase price, state-synchronization, item-strength, stake-cap, or other execution deviations.
