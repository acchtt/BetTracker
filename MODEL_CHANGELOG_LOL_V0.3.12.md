# LoL Model Changelog Supplement — v0.3.12

**Date:** 2026-08-01  
**Status:** Active immediately  
**Detailed implementation:** `MODEL_RULES_LOL_V0.3.12.md`  
**Evidence record:** `reviews/LOL_UNPLACED_LOSS_MODEL_REVIEW_CANDIDATES_2026-08-01.json`

## Change title

Late-game kill-under remaining-budget gate, mandatory-contest inventory, and one-fight-close requirement.

## Sport and markets affected

League of Legends live kill totals, especially unders assessed from 20:00 onward and all unders assessed at or after 24:00.

## Triggering evidence

DK vs Gen.G Game 1:

- at 26:12, DK led 11-9 in kills, approximately 52.8k-47.8k in gold, and 5-2 in towers;
- the model issued `OFFICIAL BET` on Under 32.5 kills at 1.712 for a proposed 0.25u;
- the selection was not placed;
- the total later exceeded 32.5 and the hypothetical selection lost;
- the state had 12.5 kills of numerical headroom, required 13 additional kills for the Under to lose, retained two-sided functional damage, layered engage and target access, a trailing team forced to contest, and no verified one-fight ending window.

## Previous rule

Earlier rules required fight-frequency and functional-damage analysis for kill totals but did not force an explicit remaining-kill budget, future-contest count, safety buffer, or verified one-fight close before promoting a late under. The model could therefore over-weight gold and tower control as evidence of a clean close.

## New rule

- Calculate current kills, line, numerical headroom, whole kills required to lose, remaining mandatory contests, conservative additional-kill budget, and safety buffer for every live kill under.
- Require at least a three-kill cushion between headroom and the conservative expected kill budget.
- At 24:00+, default to `NO BET` with ten or fewer kills of headroom unless the game is already in an immediate ending sequence.
- At 24:00+, cap at `LEAN — 0u watch` with more than ten but no more than thirteen kills of headroom when both teams retain functional damage or layered engage unless the one-fight close gate is fully passed.
- Treat Baron, soul, Elder, inhibitor defense, base siege, and required side-lane collapse as explicit future contest events.
- Price trailing-team desperation and contest incentives even when comeback probability is low.
- Require at least three one-fight-close confirmations, including a secured ending buff or exposed/inhibited base condition.
- Do not treat a gold, tower, or objective lead as kill suppression by itself.
- Record recent five-minute kill velocity and the last two structured interactions.
- Activate a same-series lockout on late kill unders derived mainly from leader control after this process miss.

## Expected benefit

Reduce late kill unders that have inadequate cushion for one or two remaining major fights, prevent structural leads from being mistaken for low kill variance, and make the model price forced objective contests and base defenses explicitly.

## Possible downside

The model will pass some clean-close winners and may see markets suspend before the one-fight close gate becomes verifiable.

## Probation treatment

The triggering recommendation was not placed. It does not affect official P/L or the active ten-wager probation. The qualifying record remains 2/10, 1-1, -51,250 VND (-0.05125u).

## Review threshold

Review after five settled synchronized LoL kill-total unders assessed at or after 20:00, or at completion of the overall ten-wager probation, whichever occurs first.
