# League of Legends Model Rules v0.3.11

**Status:** Active immediately  
**Effective date:** 2026-08-01 15:31 UTC+7  
**Applies to:** LoL execution validity, recommendation expiry, probation attribution, and price-slippage reporting  
**Read with:** `MODEL_RULES_LOL_V0.3.10.md`, `MODEL_RULES_LOL_V0.3.9.md`, `MODEL_RULES_LOL_V0.3.8.md`, `MODEL_RULES_LOL_V0.3.7.md`, `MODEL_RULES_LOL_V0.3.6.md`, `LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md`, `LOL_BETTING_PROCEDURE.md`, `MODEL_CHANGELOG.md`, and `STAKE_POLICY_V2.json`

This addendum responds to the practical execution pattern in Anyone's Legend vs ThunderTalk Gaming Game 2. The model recommended Under 29.5 kills at 1.871 from a synchronized 10:24 state. The exact line moved immediately to 1.795 with no reported meaningful state event. The 0.076 price move and 2.26 percentage-point implied-probability move remained below the existing material expiry thresholds, the accepted price remained above the project-wide 1.60 minimum, and the 0.25u stake respected the map cap. The wager won with 28 total kills.

The policy below is outcome-neutral. It must be applied identically to future wins and losses. The winning result does not by itself justify the change; the purpose is to resolve the execution-contract inconsistency between a recommendation-specific target price and the existing material-move thresholds.

## 1. Probation continuity

The ten-wager probation continues without reset.

- AL vs TT Game 1 Over 32 minutes remains qualifying wager **1 of 10**, a loss of 250,000 VND (-0.25u).
- AL vs TT Game 2 Under 29.5 kills is qualifying wager **2 of 10**, a win of 198,750 VND (+0.19875u).
- Current qualifying record: **1-1, -51,250 VND, -0.05125u**.
- The next eight qualifying wagers use v0.3.11 plus all earlier rules where not superseded.

## 2. Separate target price from hard execution floor

Future actionable LoL recommendations must distinguish:

- **Quoted odds:** the displayed price used for the assessment.
- **Model target floor:** the preferred minimum price that preserves the stated edge and probability margin.
- **Hard execution floor:** the lowest price that may remain model-approved under the immediate price-only tolerance rule.

Unless a recommendation explicitly sets a higher hard floor, the hard execution floor is the project-wide minimum of **1.60**.

A fill below the model target floor is adverse slippage and must be recorded as such. It may still remain model-approved only when every condition in Section 3 is satisfied.

## 3. Immediate price-only tolerance

An `OFFICIAL BET` may remain synchronized and model-approved after an immediate price-only move when all conditions below are satisfied:

1. The exact event, map, market, selection, and line are unchanged.
2. No kill, tower, objective, inhibitor, base, meaningful gold, item, roster, side, draft, or other material state event occurred between verdict and placement.
3. The accepted odds remain at or above the stated hard execution floor and never below 1.60.
4. The absolute decimal-odds move is **less than 0.10**.
5. The absolute implied-probability move is **less than three percentage points**.
6. The accepted stake respects the recommendation, per-map exposure cap, and correlation rules.
7. The original recommendation was `OFFICIAL BET`, not `LEAN`, `NO BET`, a shadow market, or an unavailable wager.
8. The user reports that the move occurred immediately after the verdict or supplies timestamps consistent with the same synchronized state.

When all conditions pass:

- the wager counts as model-approved performance and, when otherwise eligible, toward probation;
- accepted price, quoted price, target-floor miss, implied-probability change, and timing basis must all be recorded;
- adverse slippage must remain visible in closing-line and value-quality analysis;
- the model may not retrospectively change the probability estimate to justify the worse price.

## 4. Material move and state expiry remain hard vetoes

The v0.3.9 expiry rule remains active.

A fresh reassessment is mandatory when any of the following occurs:

- decimal odds move by **0.10 or more**;
- implied probability moves by **three percentage points or more**;
- the market line, selection, map, or settlement basis changes;
- any material game-state event occurs;
- the recommendation explicitly declares a higher hard floor and the accepted price falls below it.

A favorable move is not automatically safe. Large favorable and adverse moves both require reassessment because they may indicate an unobserved state change or a materially different market estimate.

## 5. Outcome-neutral attribution

The immediate price-only tolerance rule must be applied before using the result for model evaluation whenever timing information is available.

- A qualifying losing wager remains a model loss.
- A qualifying winning wager remains a model win.
- Do not include a price-slipped win while excluding a price-slipped loss that satisfied the same conditions.
- Do not use the realized result to decide whether the execution was synchronized.

## 6. Required execution block

Every placed LoL wager affected by a price move must record:

- quoted odds;
- model target floor;
- hard execution floor;
- accepted odds;
- decimal-odds movement;
- quoted and accepted implied probability;
- implied-probability movement in percentage points;
- exact market-and-line match status;
- state-synchronization basis;
- whether either material threshold triggered;
- stake and map-cap compliance;
- probation eligibility;
- price-slippage classification.

Missing timing or state information prevents use of the tolerance rule and requires the wager to remain outside model-approved probation performance.

## 7. AL vs TT Game 2 application

The Game 2 Under 29.5 execution is reclassified as model-approved because:

- the exact market and line were unchanged;
- the user reported an immediate price-only move with no meaningful intervening event;
- accepted odds were 1.795, above 1.60;
- the move from 1.871 to 1.795 was 0.076;
- implied probability moved from approximately 53.45% to 55.71%, a 2.26-point change;
- both movement thresholds remained untriggered;
- the stake was the recommended 0.25u and respected the map cap.

The original 1.82 figure is retained as the model target floor. The 1.795 execution is logged as adverse slippage, not as a price equal to or better than the recommendation.

## 8. Expected benefit

- Reflect realistic live-market movement during the short interval between verdict and sportsbook acceptance.
- Prevent a nonmaterial price move from overriding an otherwise synchronized model selection.
- Preserve symmetric model attribution for wins and losses.
- Maintain exact price-quality data rather than collapsing execution into approved or rejected solely by a narrow target-floor miss.

## 9. Possible downside

- Model-approved performance may include fills with materially thinner expected value than the quoted recommendation.
- Repeated adverse slippage can erode profitability even when selection accuracy is acceptable.
- User-reported immediate timing can be imperfect when no second scoreboard is available.
- The distinction between target floor and hard floor adds execution complexity.

These risks are controlled by the unchanged 0.10 and three-percentage-point expiry thresholds, the 1.60 global floor, exact-line requirement, state-synchronization requirement, and full slippage logging.

## 10. Review threshold

Review this execution policy after the earlier of:

- five settled LoL wagers using the immediate price-only tolerance; or
- completion of the overall ten-wager probation.

Report target-floor misses separately by favorable or adverse direction, quoted and accepted price, implied-probability movement, result, market, league, VND, units, and closing-line quality.
