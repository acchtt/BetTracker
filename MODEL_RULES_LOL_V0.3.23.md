# League of Legends Model Rules v0.3.23

**Status:** Active immediately  
**Effective date:** 2026-08-02 22:57 UTC+7  
**Purpose:** Separate duration suppression from kill suppression, price unresolved map inventory explicitly, improve kill-total line selection, and strengthen duration-range calibration after G2 Esports vs SK Gaming Game 1.

This version supersedes v0.3.22 where conflicting. All stricter bankroll, explicit-placement, probation, state-direction, item-confirmation, anti-line-chasing, expiry, cumulative favorite-margin, and one-thesis-per-map rules remain active.

## 1. Triggering review

At 17:59 in G2 Esports vs SK Gaming Game 1:

- kills were 5-5;
- gold was approximately 32.4k-31.9k;
- towers were 0-0;
- dragons were 1-1;
- SK had used Herald mid;
- G2 had three Void Grubs but had not converted them into a tower lead;
- both teams retained functioning damage and waveclear through Viktor-Sivir and Anivia-Ziggs.

The model projected approximately 20-28 final kills and a central duration range near 35-39 minutes. It treated Under 28.5 as the directional side, though only as `WATCH ONLY`, and treated Over 35 minutes as plausible but not strong.

Final result:

- G2 won 19-11;
- 30 total kills;
- 41:36 duration;
- 11-3 towers;
- 3-3 dragons;
- 2-0 Barons;
- 4-0 inhibitors shown in the final state;
- SK +9.5 kills @1.854 won and was officially placed.

The model correctly identified the positive-handicap edge but undercounted the amount of unresolved map inventory. Strong waveclear delayed structure conversion and extended the game, but the extra time created additional Baron, vision, inhibitor, and base-defense kill windows.

## 2. Duration suppression and kill suppression are separate

Never infer a kill Under solely because the map is likely to last longer.

### Duration suppression

Evidence that delays the Nexus:

- functional waveclear under pressure;
- full outer and inner structure depth;
- near-even gold and item distribution;
- objective parity;
- safe defensive wave access;
- repeated anti-conversion events;
- weak immediate siege or base access.

### Kill suppression

Evidence that reduces future deaths:

- low forced-contest inventory;
- one-sided damage failure with a clean ending route;
- reliable disengage that actually ends interactions;
- a verified one-fight close;
- limited engage and target access on both sides;
- recent fights ending without return kills or chases.

Waveclear may support duration suppression while increasing cumulative kill opportunities. A long game can finish Under or Over; the direction must be priced independently.

## 3. Unresolved map-inventory ledger

For every kill-total and duration assessment, inventory the remaining map before projecting the outcome.

Record these categories separately:

1. **Structure depth:** outer towers, inner towers, inhibitors, exposed lanes, and whether the base can be reached without Baron.
2. **Dragon inventory:** current dragon score, soul point, soul, Elder path, and likely mandatory contests.
3. **Baron inventory:** first Baron availability, likely first-Baron setup, post-Baron reset, second-Baron possibility, and Baron-powered base defense.
4. **Wave and vision exposure:** side-wave collection, river entry, jungle face-checks, reset denial, and narrowed map access.
5. **Fight functionality:** current item-qualified damage, frontline, engage, disengage, target access, and return-kill capacity.

Do not project from current kill pace alone when three or more inventory categories remain unresolved.

## 4. Waveclear dual-effect rule

Classify waveclear in two dimensions.

### Immediate effect

Functional waveclear may:

- reduce near-term tower loss;
- delay a Baron siege;
- lower the probability of an immediate ending fight;
- reduce kills during one specific push.

### Cumulative effect

If both teams retain damage and engage, the same waveclear may:

- extend the game into another dragon or Baron cycle;
- force repeated vision contests;
- create more side-wave pick windows;
- create multiple inhibitor or base-defense attempts;
- increase the upper tail of final kills.

When waveclear extends expected duration by one objective cycle, add that cycle to the kill budget rather than treating the stall as automatic Under evidence.

## 5. Kill-total projection block

Every live kill-total assessment must display:

- current total kills;
- offered line and odds;
- additional whole kills required for the Over to win and the Under to lose;
- unresolved map-inventory categories;
- conservative remaining kill range;
- projected final-kill range;
- central estimate;
- lower and upper tail risks;
- official, lean, watch, or no-bet verdict.

Use sequence ranges from the existing model, adjusted for current composition and items:

- full mandatory objective contest: normally 4-6 kills;
- contested inhibitor or base defense: normally 3-5 kills;
- pre-objective catch, flank, or side-lane collapse: normally 1-3 kills;
- chase or reset denial: normally 1-3 kills.

Avoid double-counting one pressure chain, but do not collapse distinct future Baron, dragon, inhibitor, and base sequences into one event.

## 6. Map-inventory variance uplift

Increase the upper end of the kill projection when all are present:

- game time is normally 15:00-23:00;
- towers are tied or no more than one apart;
- dragons are tied or no more than one apart;
- gold difference is no more than roughly 2,000;
- both teams have at least two functional damage or conversion channels;
- at least three unresolved map-inventory categories remain.

In this state, do not use a narrow projected range. Add at least one additional objective or base-defense sequence to the upper conservative branch.

At the G2-SK 17:59 snapshot, the correct projection should have been approximately 24-32 final kills rather than 20-28.

## 7. Kill-Under official gate refinement

All existing headroom, fight-budget, safety-buffer, delayed-violence, and late-game rules remain active.

For an official Kill Under:

1. use the upper conservative remaining-kill budget, not the median;
2. require at least a three-kill buffer above that upper conservative budget;
3. when the map-inventory variance uplift is active, require at least a four-kill buffer unless a verified one-fight close removes a future cycle;
4. do not count waveclear as kill suppression unless it has recently ended pressured interactions without creating another mandatory contest;
5. reject the Under when its survival depends on avoiding an entire plausible Baron, dragon, or base-defense sequence.

At the G2-SK 17:59 snapshot, Under 28.5 should remain `NO BET` or at most non-formal watch because 19 additional kills were within the upper plausible cumulative range. It lost at 30 total kills.

## 8. Kill-Over official gate refinement

A Kill Over may become official only when:

- observed play shows two-sided structured-fight conversion or a genuine sustained high-velocity window;
- both teams retain item-qualified damage and realistic target access;
- at least two independent future exposure categories remain;
- the central projected final total exceeds the line by at least two kills;
- the lower conservative branch is no more than three kills below the line;
- no verified clean-close branch materially suppresses future return kills;
- odds meet the global 1.60 minimum and all normal execution gates.

One isolated fight spike is insufficient. Long duration alone is insufficient.

## 9. Multi-line kill-total selection

One synchronized state may generate at most one formal kill-total recommendation.

When multiple live lines are simultaneously available:

- calculate each line separately;
- compare headroom, whole kills required, odds, and projected edge;
- prefer the line that survives the upper conservative range with the best safety-adjusted expected value;
- treat two or more additional kills of protection as material;
- do not issue a tighter Under merely because its odds are more attractive when the higher line retains acceptable price and materially better survival;
- do not transfer an earlier line into a later state unless it is still executable.

A general statement such as “Under direction” is not sufficient. The exact line determines the verdict.

## 10. Duration projection block

Every live duration assessment must display:

- current game time;
- offered duration line and odds;
- towers remaining and exposed lanes;
- dragon and Baron schedule;
- functional waveclear and safe wave access;
- fastest credible finish branch for each team;
- conservative earliest credible finish;
- central finish range;
- long-game extension branch;
- verdict and probation eligibility.

The central duration range must include at least one additional objective cycle when:

- game time is at least 15:00;
- towers are 0-0 or nearly all outer structures remain;
- gold is within roughly 1,500;
- dragons are tied or only one apart;
- both teams have functional waveclear and damage;
- no side has immediate base access.

At the G2-SK 17:59 snapshot, the central range should have been approximately 38-43 minutes. The final was 41:36.

## 11. Duration Over treatment

The existing probation restriction remains:

- Duration Overs cannot be `OFFICIAL BET` for probation wagers 8-10;
- maximum status is `LEAN` or analysis-only watch;
- no correlated same-map add-on is allowed.

Outside the restriction, the existing official gate remains: two independent anti-conversion events after the first objective cycle, functional defense, no one-fight compression veto, and a conservative earliest credible finish at least three minutes beyond the line.

When the late-structure extension cluster in Section 10 is active, duration Over direction should be stated explicitly even if it is ineligible for official promotion.

## 12. Duration Under numerical gate

A duration Under may become official only when:

- the conservative earliest credible finish is at least two minutes before the offered line;
- the central finish estimate is also before the line;
- the favorite has a verified fast-close route through current structures, waves, objective timing, and items;
- the defender's waveclear or disengage is nonfunctional against the current access tools;
- one won sequence can create the required structures or Nexus access without a full reset;
- no credible additional objective cycle is likely before the finish;
- odds meet the global minimum and all execution gates.

If the earliest credible finish is less than two minutes before the line, maximum status is `LEAN`. If the central estimate is at or beyond the line, return `NO BET`.

## 13. Mandatory four-family live output

At every synchronized live snapshot, display all available market families:

1. moneyline;
2. kill handicap;
3. kill total;
4. duration.

For kill total and duration, show the exact line, odds, projection, and verdict. If the market is absent, delayed, or suspended, state:

`MARKET UNAVAILABLE/LOCKED`

Do not omit a market family silently.

When one official wager already uses the 0.25u map cap, continue analysis but label every other market:

`ANALYSIS ONLY — SAME-MAP EXPOSURE CAP`

## 14. G2-SK Game 1 calibration

At 17:59:

- kills 5-5;
- gold approximately +0.5k G2;
- towers 0-0;
- dragons 1-1;
- SK had Herald compensation;
- both teams had functional waveclear and damage.

Correct totals interpretation under v0.3.23:

- projected final kills: approximately 24-32;
- Under 28.5: `NO BET` or non-formal watch, not directional preference;
- Over 28.5: also not official without stronger observed two-sided pace;
- projected central duration: approximately 38-43;
- Over 35: strong analysis-only direction, but probation-ineligible and blocked by the placed same-map handicap.

Final:

- 30 total kills;
- 41:36 duration.

## 15. Official wager settlement and probation

Wager 7:

- event: G2 Esports vs SK Gaming Game 1;
- market: SK +9.5 kills;
- odds: 1.854;
- stake: 0.25u = 250,000 VND;
- final kills: G2 19-11 SK;
- result: win;
- net profit: +213,500 VND / +0.2135u.

Updated probation:

- completed: 7/10;
- record: 3-4;
- net: -451,750 VND / -0.45175u;
- wagers 8-10 remain;
- standard stake: 0.25u = 250,000 VND;
- minimum odds: 1.60;
- maximum exposure: 0.25u per map;
- no correlated same-map add-ons;
- Duration Overs remain ineligible for official wagers 8-10;
- official only after explicit placement confirmation.

## 16. Review schedule

Review the totals framework after the earlier of:

- five new synchronized kill-total or duration theses under v0.3.23; or
- probation wager 10 settlement.

Track:

- current time and score;
- every simultaneously available line;
- unresolved map-inventory categories;
- projected final-kill range and actual final kills;
- earliest and central finish ranges and actual duration;
- waveclear immediate and cumulative effects;
- official eligibility, placement, and result;
- closing-line quality when available.

Do not loosen the model from one winning Over or tighten it from one losing Under. Grade both calibration and process.