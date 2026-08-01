# League of Legends Model Rules v0.3.10

**Status:** Active immediately  
**Effective date:** 2026-08-01 14:50 UTC+7  
**Applies to:** LoL duration totals and the fast-close assessment used across moneylines, kill markets, objectives, and same-map exposure  
**Read with:** `LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md`, `MODEL_RULES_LOL_V0.3.9.md`, `MODEL_RULES_LOL_V0.3.8.md`, `MODEL_RULES_LOL_V0.3.7.md`, `MODEL_RULES_LOL_V0.3.6.md`, `LOL_BETTING_PROCEDURE.md`, `MODEL_CHANGELOG.md`, and `STAKE_POLICY_V2.json`

This addendum responds to Anyone's Legend vs ThunderTalk Gaming Game 1. The model recommended Over 32 minutes at 1.907 from a synchronized 4:58 state with kills 0-0, approximately even gold, no towers, and no neutral objectives. The user executed the exact line at 1.999 for 0.25u. AL won in 21:50 with a 15-3 kill score, approximately 48.6k-36.9k gold, and a 9-1 tower score. Execution was clean; the model error was treating normal early neutrality and nominal waveclear as sufficient stall evidence while underpricing the stronger-team and Ziggs-assisted fast-close branch.

## 1. Probation continuity

The v0.3.9 ten-wager probation continues and does not reset.

- AL vs TT Game 1 Over 32 minutes is qualifying settled wager **1 of 10**.
- Current probation record: **0-1, -250,000 VND, -0.25u**.
- The next nine qualifying wagers must follow v0.3.10 plus all earlier rules where not superseded.
- Performance must remain separated by model version.

## 2. Early-neutrality exclusion

A normal early state is not demonstrated stall evidence.

Before **8:00 game time**, the following do not count as duration-over stall indicators:

- 0-0 or low kills;
- approximately even raw gold;
- zero towers;
- zero dragons, Grubs, or Heralds;
- no completed major items;
- ordinary farming without a contested conversion attempt.

These observations describe the default opening state. They do not show that either team can resist pressure, defend structures, delay objectives, or survive the first meaningful fight.

At or after 8:00, early neutrality may count as at most one weak state cluster, never as multiple independent indicators.

## 3. Pre-eight-minute duration lock

During probation, a duration over before 8:00 game time cannot be an `OFFICIAL BET`.

The maximum classification is:

- `LEAN — 0u watch` when the draft has credible future stall tools and no immediate fast-close veto; or
- `NO BET` when the state, items, pressure routes, or current odds are incomplete.

The model must wait for a synchronized snapshot at or after 8:00 and reassess the current line independently.

## 4. Realized-stall requirement

A duration over requires at least two independent stall indicators under v0.3.9, and v0.3.10 adds a realized-stall requirement.

At least one required indicator must be an observed anti-conversion event from the current map, such as:

- two consecutive pressured waves cleared without losing a meaningful structure;
- a defended dive or engage that prevents a tower, objective, or major gold conversion;
- a successful disengage from a structured objective fight;
- an objective setup denied or traded without material structural loss;
- a siege held through current waveclear, frontline, or zone control;
- a side-lane or cross-map response that materially delays grouping and base pressure.

The following do not qualify:

- no fight occurring;
- unpressured waveclear;
- one harmless poke sequence;
- an isolated support pick with no structural consequence;
- a reset caused only by both teams choosing not to contest;
- theoretical late-game scaling that has not reached its item or level window.

## 5. Functional-waveclear gate

Waveclear is a stall indicator only when it is functional now. Champion names alone are insufficient.

For waveclear to count, the defending team must satisfy all three core conditions:

1. **Current readiness:** the relevant champions have adequate items, levels, mana, cooldowns, and recall timing for the next pressure sequence.
2. **Safe access:** they can reach and clear the wave without being reliably engaged, dove, zoned, or forced away.
3. **Structure depth:** enough outer or inner structure remains to create actual time after the wave is cleared.

In addition, at least one of the following must be true:

- the defending economy is not materially behind on the relevant waveclear carries; or
- the waveclear has already been demonstrated successfully under real pressure.

Waveclear is `future-only`, not functional, when the carries are item-starved, lack safe access, must face the opponent's strongest engage range, or are clearing after the structure is already effectively lost.

## 6. Fast-close flag veto

Before recommending a duration over, identify current fast-close flags.

Fast-close flags include:

- material team-strength and conversion advantage;
- reliable early engage, dive, or pick tools;
- priority in at least two lanes that enables first objective setup;
- composition-specific tower acceleration, including but not limited to Ziggs-style structure damage;
- strong Grub or Herald conversion into plates and outer towers;
- a defender whose waveclear or frontline is future-only;
- weak defender space creation against the favorite's engage pattern;
- a major early item or level spike on the favorite's primary carries;
- repeated first access to river, vision, or objective terrain;
- a draft that becomes materially easier to execute from ahead.

A duration over is `NO BET` when:

- at least two fast-close flags are active; and
- no realized stall event has occurred after those flags became relevant.

When three or more flags are active, nominal waveclear, generic scaling, or a quiet opening cannot clear the veto. Current-map evidence must first show that the defending team can resist the actual pressure route.

## 7. Stronger-team conversion and tower-acceleration branch

Every duration model must explicitly price the favorite's clean-close branch.

The assessment must consider:

- probability of the stronger team winning the first structured fight;
- expected plates, towers, Grubs, Herald, or dragon conversion after that fight;
- whether one won sequence can expose multiple towers;
- whether tower acceleration compresses the map before defensive items are ready;
- whether the trailing composition can safely clear waves from behind;
- whether Baron is needed to end, or whether the draft can finish through tempo and structures alone.

A stronger favorite with reliable engage and structure acceleration cannot be treated as a normal duration environment merely because the score is currently even.

## 8. Indicator independence

Duration evidence must be de-correlated.

- 0-0 kills, even gold, zero towers, and zero objectives before 8:00 are one baseline opening cluster and count as zero realized stall indicators.
- After 8:00, those observations may count as at most one weak state indicator.
- Waveclear and slow tower progression are not independent when the same waveclear sequence explains both.
- Scaling and future waveclear are the same future-readiness category unless separate current evidence exists.
- Team reputation is neither a stall indicator nor a substitute for current-map resistance.
- One defended fight that also protects a tower is normally one anti-conversion event, not two independent indicators.

## 9. Same-series duration lockout

A settled duration-over miss caused by an identified fast-close or waveclear-functionality error triggers same-series lockout for the same duration-over thesis.

For the next map of that series:

- pre-8:00 duration overs remain capped at `LEAN — 0u watch`;
- a duration over cannot become `OFFICIAL BET` from draft and early neutrality alone;
- at least one realized stall event after the first objective cycle is required;
- the previous map's fast-close mechanism must be stated explicitly;
- current fast-close flags must be cleared independently.

For AL vs TT Game 2, the active warning is AL's stronger-team conversion plus structure acceleration. TT or AL waveclear cannot clear the lockout without current-map evidence.

## 10. Required duration assessment block

Every actionable duration recommendation must include:

- synchronized game clock and score state;
- first objective-cycle status;
- current towers and meaningful plate progression;
- normalized gold and relevant item distribution;
- realized stall events and their count;
- functional versus future-only waveclear;
- safe wave-access assessment;
- current structure depth;
- favorite fast-close flags;
- tower-acceleration tools;
- first realistic finish window;
- probability branch for finishing before the offered line;
- same-series duration lockout status;
- expiry status and explicit expiry triggers.

If this block cannot be completed, output `NO BET`.

## 11. No opposite-side chase

A failed duration over does not automatically justify a duration under in the next map or later state.

An under still requires an independent current-state thesis, price, finish path, and synchronized assessment. Same-map correlated add-ons remain prohibited while the 0.25u map cap is active.

## 12. Triggering evidence and attribution

**Wager:** AL vs TT Game 1 Over 32 minutes  
**Odds:** 1.999  
**Stake:** 0.25u = 250,000 VND  
**Entry:** 4:58, 0-0 kills, approximately even gold, 0-0 towers, 0-0 objectives  
**Final:** AL won in 21:50; kills 15-3; gold approximately 48.6k-36.9k; towers 9-1  
**Result:** -250,000 VND, -0.25u  
**Execution attribution:** clean, synchronized, exact market and line, better price, compliant stake  
**Model attribution:** duration gate too permissive; early neutrality incorrectly counted as stall; nominal waveclear overvalued; stronger-team and structure-acceleration fast-close tail underweighted

## 13. Expected benefit

- Prevent normal sub-eight-minute states from being mislabeled as stall evidence.
- Require actual resistance before backing an early duration over.
- Distinguish nominal waveclear from waveclear that is usable under pressure.
- Price stronger-team conversion and tower acceleration before a snowball is visible in the scoreboard.
- Reduce extreme short-game losses on long duration lines.

## 14. Possible downside

- The model will miss some attractive early duration prices that later shorten.
- Waiting until after 8:00 or the first objective cycle may reduce available edge.
- Realized-stall requirements can reject games that are genuinely slow but uneventful.
- Stronger-team fast-close flags may over-penalize favorites that draft poorly or fail execution.

These costs are acceptable during probation because the previous gate promoted an official wager without any demonstrated current-map stall.

## 15. Review threshold

Continue the existing ten-wager probation and review after all 10 qualifying wagers settle.

Also report duration markets separately after the earlier of:

- five qualifying duration wagers under v0.3.10; or
- completion of the overall probation sample.

Track:

- entry minute;
- first objective-cycle status;
- realized stall-event count;
- functional-waveclear status;
- fast-close flag count;
- stronger-team conversion prior;
- tower-acceleration status;
- offered line and final duration;
- model probability, closing-line quality, VND, and units.

Do not relax the pre-eight-minute lock or realized-stall requirement from one favorable result.