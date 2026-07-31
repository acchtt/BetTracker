# League of Legends Model Rules v0.3.9

**Status:** Active immediately  
**Effective date:** 2026-08-01 02:44 UTC+7  
**Applies to:** LoL post-draft, pre-game, and live moneylines, kill handicaps, kill totals, duration, objectives, and correlated map exposure  
**Read with:** `LOL_BETTING_PROCEDURE.md`, `MODEL_RULES_LOL_V0.3.8.md`, `MODEL_RULES_LOL_V0.3.7.md`, `MODEL_RULES_LOL_V0.3.6.md`, `STAKE_POLICY_V2.json`, `MODEL_CHANGELOG.md`, and `reviews/LOL_TWO_DAY_REVIEW_2026-07-31_TO_2026-08-01.md`

This addendum responds to a two-day LoL review covering 12 settled wagers: 3 wins, 9 losses, -1,052,125 VND, and -41.67% actual-stake ROI. The evidence shows repeated process failures concentrated in positive underdog kill handicaps and moneylines. This version imposes market-specific probation and execution controls rather than increasing stake or reacting to individual results alone.

## 1. Ten-wager probation

The next 10 settled, synchronized, model-approved LoL wagers form a probation sample.

During probation:

- standard stake remains **0.25u**;
- maximum total exposure on one map is **0.25u**;
- correlated add-ons on the same map are prohibited;
- confidence on an `OFFICIAL BET` is capped at **6/10**;
- no result from an oversized user stake may justify raising the model stake;
- every wager must pass the current model, champion-counter matrix, execution-validity gate, and market-specific restrictions.

The probation ends only after a formal review of 10 settled, synchronized, model-approved wagers. Unconfirmed wagers, stale executions, user-only picks, and wagers placed after recommendation expiry do not count toward validation.

## 2. Positive underdog kill-handicap probation

### 2.1 Post-draft and pre-game restriction

During probation, a positive underdog kill handicap may not be labeled `OFFICIAL BET` from draft alone.

The maximum post-draft or pre-game classification is:

- `LEAN — 0u watch`, when the draft passes the functional-damage and champion-counter gates; or
- `NO BET`, when any required information is missing or a veto is active.

A wide handicap, attractive price, perceived team-strength gap, or theoretical scaling path cannot upgrade the market before live evidence appears.

### 2.2 Live upgrade requirements

A positive underdog kill handicap may become `OFFICIAL BET` live only when all conditions below are satisfied:

1. **Two independent structured-fight conversions:** the underdog wins or trades evenly in two separate fights after the relevant item timings and counter mechanics are active.
2. **Two deliverable damage sources:** at least two current sources can reach the first relevant target, maintain uptime, and survive the opponent's control pattern.
3. **Space-creation gate:** the underdog has a durable frontline, reliable zone control, or another demonstrated method of creating room for its carries.
4. **Champion-counter gate:** no unresolved counter cluster disables the primary engage, frontline, or main damage-delivery route.
5. **Structural-state gate:** the favorite does not hold a materially dominant map state that makes repeated one-sided forced fights likely.
6. **Objective-timer gate:** the next soul, Baron, Elder, inhibitor, or base-defense fight does not arrive before the underdog's required item or level breakpoint.
7. **Execution-validity gate:** the current odds and state are synchronized and the prior recommendation has not expired.

Cleanup kills, isolated picks on a support, harmless poke, tower trades, failed engages, or one favorable skirmish do not count as two structured-fight conversions.

## 3. Structural-control veto for positive handicaps

A positive underdog kill handicap is `NO BET` when the favorite has at least two current structural-control flags and the underdog has not shown two conversions after those flags became active.

Structural-control flags include:

- material percentage gold lead for the current game time;
- two or more towers of map-control advantage;
- soul point with first setup access;
- Baron, Elder, or inhibitor pressure;
- major item-completion advantage on the primary carries;
- map compression, deep vision, or repeated first access to objectives;
- demonstrated ability to force the underdog into narrow entry paths;
- repeated one-sided fight conversion.

Kills alone are not a structural-control flag. Conversely, a near-even kill score does not clear structural control created through gold, towers, objectives, items, or map access.

## 4. Same-series model-error lockout

When a settled or clearly identified map error is classified as:

- draft-evaluation error;
- functional-damage error;
- damage-delivery architecture error;
- champion-counter error; or
- team-strength or macro-overweighting error,

the model enters a same-series lockout for the affected team and market family.

During the next map of that series:

- no post-draft positive kill handicap on the same team may become `OFFICIAL BET`;
- no moneyline relying on the same rejected thesis may become `OFFICIAL BET`;
- live promotion requires two new structured-fight conversions plus independent current-map confirmation;
- the previous map's failure must be explicitly stated in the new assessment.

A new draft does not automatically erase the prior process warning. The lockout is cleared only by new observed evidence, not by line width or price.

## 5. Moneyline confirmation rule

### 5.1 No reputation-only early moneylines

A neutral early state, attractive price, or generic pre-series team-strength advantage is insufficient for an `OFFICIAL BET` moneyline.

An early or comeback moneyline requires at least two independent current-map confirmations from different categories:

- gold distribution or item advantage on relevant roles;
- tower conversion or map compression;
- objective control and first setup access;
- wave priority and side-lane control;
- vision and terrain control around the next objective;
- demonstrated structured-fight conversion;
- composition reaching a favorable item or level window;
- opponent cooldown, summoner, or positioning weakness that is currently actionable.

Two observations from the same event do not count as independent. For example, one won fight that produces both kills and a tower is normally one conversion event, not two separate confirmations.

### 5.2 Series-prior decay

After every completed map, the pre-series team-strength prior must be re-estimated.

The prior must be downgraded when the nominal underdog demonstrates superior:

- objective setup;
- tower conversion;
- side-lane management;
- structured-fight execution;
- draft adaptation; or
- late-game decision quality.

A team may still retain a player-quality edge, but the model may not continue calling that edge `material` without reconciling the observed series evidence. By a deciding map, current-series execution and the completed draft must receive at least equal consideration to generic reputation.

## 6. Recommendation expiry is a hard veto

A recommendation expires immediately after any of the following:

- odds move by **0.10 or more**;
- implied probability changes by **3 percentage points or more**;
- kill, tower, dragon, Herald, Baron, Elder, inhibitor, or base event;
- meaningful gold swing;
- major item completion or recall cycle affecting the thesis;
- side-selection, roster, draft, or market-line change;
- any event explicitly listed in the recommendation's expiry conditions.

After expiry:

- the old recommendation is no longer actionable;
- being above the general 1.60 minimum does not preserve approval;
- the assistant must state `EXPIRED — REASSESSMENT REQUIRED` before evaluating the new line;
- the wager can be recorded as officially placed after user confirmation, but it must not be classified as model-approved at execution unless a fresh synchronized reassessment occurred.

Every actionable recommendation must state:

- displayed odds;
- minimum acceptable odds;
- synchronized game clock and state;
- explicit expiry triggers;
- `status: not placed` until confirmation.

## 7. Duration-market retention with fast-close veto

The existing two-stall-indicator framework remains active.

A duration over requires at least two independent stall indicators, such as:

- strong waveclear;
- limited tower progression;
- close normalized gold;
- durable disengage or frontline;
- weak Baron speed;
- poor siege or base-breaking tools;
- side-lane states that delay grouping;
- objective cycle likely to repeat without ending the game.

In addition, a duration over is `NO BET` when any immediate fast-close trigger is active:

- Baron or Elder with exposed base;
- soul plus strong siege;
- inhibitor down with synchronized waves;
- large item advantage on a composition with reliable engage and base-breaking;
- repeated uncontested objective setup;
- composition-specific tower acceleration that the current state supports.

Duration remains independent from kill totals and moneylines. The recent 1-0 duration result is encouraging process evidence, not permission to lower the two-indicator requirement.

## 8. Kill-total discipline

Do not infer a high kill total merely from multiple carries or repeated engage tools.

For an over, require evidence for both:

- fight frequency or forced-contest incentives; and
- both teams' ability to return meaningful damage.

For an under, account for:

- soul, Baron, Elder, and base-defense forcing;
- desperation contests;
- repeated engage availability;
- long-game reset cycles;
- a trailing team that may lose through multiple fight sequences.

If one team has poor damage delivery, the correct result may be either a low-kill clean close or a one-sided high-kill stomp. The model must price both branches rather than treating damage asymmetry as automatically supporting an under.

## 9. Required actionable assessment block

Every actionable LoL recommendation must now include:

- `Team-strength prior`;
- `Series-prior update`;
- `Key lane counters`;
- `Direct mechanic counters`;
- `Counter clusters`;
- `Functional damage sources`;
- `Space creation and frontline kill speed`;
- `Primary engage path`;
- `Primary damage-delivery path`;
- `Alternative win condition`;
- `Observed structured-fight conversions`;
- `Structural-control flags`;
- `Next objective versus item timing`;
- `Same-series lockout status`;
- `Recommendation-expiry status`;
- `Market-specific veto status`.

If the available state does not support this block, output `NO BET`.

## 10. Market scan order

At every synchronized snapshot, price the following independently:

1. map moneyline;
2. positive and negative kill handicap;
3. kill total;
4. duration;
5. objectives and towers when available.

Do not begin with the most visually attractive price. Begin with the current state and reject markets whose required mechanism is not functioning.

## 11. Triggering evidence

The two-day review found:

- positive underdog kill handicaps: **2-6**, with repeated engage, functional-damage, delivery, counter, and structural-control errors;
- moneylines: **0-3**, with repeated reputation and theoretical-composition overweighting;
- duration: **1-0**, with the winning pick supported by two independent stall indicators and synchronized execution;
- multiple stale executions after material odds movement;
- a same-series repetition from Shifters Game 2 into Shifters Game 3.

The full review is recorded in `reviews/LOL_TWO_DAY_REVIEW_2026-07-31_TO_2026-08-01.md`.

## 12. Expected benefit

- Reduce repeated wide-underdog handicap errors.
- Prevent draft labels and nominal damage counts from overriding actual delivery mechanics.
- Force current-map confirmation before backing reputation-based moneylines.
- Stop stale recommendations from being treated as approved executions.
- Prevent same-series repetition of a newly identified model error.
- Preserve the cleaner duration framework without overgeneralizing from one win.

## 13. Possible downside

- The model will pass many early positive-handicap opportunities.
- Waiting for two structured fights may produce worse prices or no remaining market.
- Same-series lockouts may miss legitimate draft corrections.
- The stricter expiry rule may classify more user placements as unsynchronized.
- The probation sample may take longer to complete because selectivity increases.

These are acceptable costs while the recent process failure rate remains high.

## 14. Review threshold

Review after the next 10 settled, synchronized, model-approved LoL wagers.

Report separately by:

- league;
- market;
- post-draft/pre-game/live timing;
- recommendation type;
- model version;
- champion-counter veto status;
- same-series lockout status;
- state synchronization;
- execution price validity;
- result, VND, units, standardized model-stake return, and closing-line quality.

Do not relax the positive-handicap probation until the review shows both acceptable process compliance and improved calibration.