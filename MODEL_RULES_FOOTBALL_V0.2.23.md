# MODEL RULES — FOOTBALL v0.2.23

Effective: 2026-08-03

This version supplements v0.2.22 and all active football procedures. Existing controls remain unchanged:

- 1u = 1,000,000 VND
- minimum accepted football odds = 1.70
- normal official football stake cap = 0.25u
- LEAN — SMALL cap = 0.125u
- every material live-state change requires independent repricing
- a wager is official only after confirmed execution
- ledger.json remains the authoritative betting record
- ledger updates remain on hold until explicitly approved

## 1. Resilient live totals can be directional evidence

v0.2.22 correctly established that a slowly declining or unusually elevated live total is meaningful market evidence. It must not be used only as a veto against an under.

When a scoreless match has consumed substantial time but the total remains elevated and the over price stays resilient, assess whether the line supports an over thesis.

A resilient total may support LEAN — SMALL on the over when it aligns with multiple independent match signals, including:

- sustained opposition-box access;
- repeated inside-box attempts;
- meaningful expected assists, dangerous crossing or cutback volume;
- corners, blocked shots or recurring set-piece pressure;
- a strong favorite creating latent pressure despite low realized xGOT;
- likely attacking substitutions;
- a first-goal branch that would force the trailing team to open its shape;
- credible scoring routes for both teams after 1-0.

The total line alone is never sufficient. Before promoting an over, still require:

1. a current refreshed and executable price;
2. at least two synchronized same-scope snapshots when available;
3. raw breakeven and no-vig probabilities;
4. a model probability estimate or defensible range;
5. explicit settlement and goal-count cliff analysis;
6. weather, pitch, card, injury and substitution checks.

If the market line, match structure and first-goal branches all point toward scoring, do not remain anchored to low realized xGOT or zero recorded big chances.

## 2. Latent pressure versus finishing failure

Low xGOT or zero big chances may mean poor finishing so far; it does not necessarily mean the scoring process is weak.

Classify pressure as latent scoring pressure when several of the following persist across snapshots:

- high possession in advanced areas;
- repeated opposition-box touches;
- inside-box shots;
- blocked attempts;
- corners and dangerous restarts;
- expected assists materially exceeding realized goals;
- wide overloads, cutbacks or second-ball recoveries;
- an opponent unable to exit or retain possession.

When latent pressure is strong and the live total remains resilient, compare the over and favorite handicap rather than defaulting to an under.

Do not infer that every territorial siege will produce goals. Chance quality remains important, but a lack of conversion to that point cannot be projected indefinitely when the attack is repeatedly reaching dangerous zones.

## 3. Over versus push-protected favorite handicap

For a dominant favorite at a level score, compare at least these expressions:

- full-match over;
- favorite -0.75;
- favorite -1.0;
- favorite moneyline, when price-eligible.

The over is generally the better expression when:

- the underdog can score after the game opens;
- a favorite goal is likely to increase transition space;
- the favorite has strong attacking substitutions;
- the favorite side requires a multi-goal margin unsupported by current chance quality;
- the over benefits from either team scoring.

A push-protected favorite -1.0 may be preferable when:

- the favorite is clearly more likely to score first and win;
- the underdog has little sustained attacking route;
- the -0.75 price is below the minimum or materially too short;
- a one-goal win pushes and a two-goal win pays fully;
- the over requires the underdog to contribute more than the evidence supports.

A favorite -1.0 at a level score remains capped at LEAN — SMALL when xGOT and big-chance evidence are modest, even if territory and box access are strong.

## 4. Correlated-market selection rule

Do not recommend both an over and a favorite handicap from the same pressure thesis unless each has an independent quantified edge.

Before selecting correlated markets, state:

- the shared underlying thesis;
- which outcomes win both bets;
- which outcomes separate them;
- whether an opponent goal helps or harms each market;
- the total combined exposure.

Normally select one primary expression. Use the following priority:

1. the market with the clearest settlement protection;
2. the market benefiting from more plausible score paths;
3. the market with the larger estimated edge after uncertainty;
4. the market with less dependence on a specific winning margin.

Do not add a correlated position after a goal merely because the initial thesis is winning. A new position requires a genuinely independent post-goal edge.

## 5. First-goal realization and post-goal over reset

A first goal is not only an invalidation event; it reveals which pre-entry branch has occurred.

After the favorite scores first, reprice whether:

- the underdog is now forced to chase;
- the leading favorite retains attacking intent;
- both teams have independent scoring routes;
- transition space has increased;
- the total offers push protection at the next whole number.

A post-goal over may be promoted when the previously identified open-game branch has materialized and the refreshed price still clears fair value.

For example, at 1-0 before halftime, an Over 3.0 can be attractive when:

- two additional goals produce a push;
- three additional goals produce a win;
- the trailing team must become more aggressive;
- the leader can exploit transition space;
- the goal was supported by sustained pressure rather than an isolated low-frequency event.

Do not place this add-on when an earlier correlated over or favorite position is already active unless total exposure remains within limits and the new edge is independently demonstrated.

## 6. Match-regime separation

A match may support an early over and a later under without contradiction. Treat each material state as a separate regime.

A new regime begins after any of the following:

- goal;
- red card;
- penalty;
- major injury;
- tactical formation change;
- cluster of material substitutions;
- leading team shifts from chasing to game management;
- trailing team loses or adds a primary attacking route.

Do not let a failed early thesis bias a later independent valuation. Conversely, do not use the final score to retroactively validate every earlier alternative.

For every regime change:

1. invalidate the previous price;
2. reset cumulative-versus-interval interpretation;
3. identify new score incentives;
4. reassess both teams’ scoring routes;
5. wait for same-scope post-change evidence when the rules require it.

## 7. Ten-man trailing-team late-under rule

A late under with whole-goal push protection may become viable when a trailing team is reduced to ten and loses a primary forward or central attacking outlet.

An under can be promoted to LEAN — SMALL despite a relatively resilient market total when all of the following are satisfied:

- the leading team is ahead by at least two goals;
- the trailing team has ten players;
- the dismissed player or subsequent structure materially weakens the trailing team’s scoring route;
- at least two synchronized post-red-card snapshots show minimal attacking response from the trailing team;
- the leader shows control or low attacking urgency rather than repeated high-quality acceleration;
- recent interval xG, xGOT, big chances and shots on target are low;
- substitutions have had sufficient observation time;
- the selected under has meaningful protection, preferably a push with exactly one additional goal;
- the price remains at least 1.70 and clears the model uncertainty buffer.

A resilient line remains a warning, not an automatic veto. The model must explain why the current personnel and incentive state has reduced the remaining-goal distribution relative to the market.

## 8. Rapid price-migration and no-chase rule

When a watched price moves sharply before execution:

- refresh the market;
- record the elapsed real time and match time;
- compare both the odds and the goal line;
- reassess settlement at the new line;
- do not treat directional correctness as permission to chase.

If an under moves from a whole-goal line with push protection to a lower quarter or half line, the new wager is a different proposition.

Examples:

- Under 5.0: one additional goal pushes;
- Under 4.75: one additional goal creates a half-loss;
- Under 4.5: one additional goal loses fully.

A price below 1.70 remains prohibited even when the original watched thesis was correct.

Record a missed executable window as a process issue, not as a placed bet or official result.

## 9. Toluca vs Necaxa full-match review — 2026-08-03

### Early regime: 0-0 around 27 minutes

Reliable market path:

- around 4 minutes: total 3.0, Over 1.97 / Under 1.91;
- around 27 minutes: total 2.5, Over 1.97 / Under 1.91.

Approximately 23 scoreless minutes removed only half a goal while prices remained nearly unchanged.

At approximately 27 minutes, Toluca had:

- 71% possession;
- 6 shots;
- 4 inside-box shots;
- 11 opposition-box touches;
- 3 corners;
- approximately 0.34 expected assists;
- 0.35 xG, 0.11 xGOT and no recorded big chance.

The correct interpretation was latent Toluca scoring pressure combined with an unusually resilient total, not durable suppression.

Correct retrospective hierarchy:

1. **Missed LEAN — SMALL candidate: Over 2.5 at 1.97.** It benefited from a Toluca breakthrough, a Necaxa response and an opened match.
2. **Secondary missed LEAN — SMALL candidate: Toluca -1.0 at 1.84.** A one-goal win pushed and a two-goal win paid fully, but modest xGOT and no big chance kept it secondary.
3. Do not select both without independent edge because they expressed the same Toluca-pressure thesis.
4. Under 2.5 at 1.91 was the wrong primary direction and remains a poor unplaced lean.

These retrospective candidates are process findings, not retroactive official bets. Only classifications actually issued before the result may enter shadow tracking under the established rules.

### Post-first-goal regime: Toluca 1-0 around 34 minutes

The refreshed Over 3.0 around 1.76 offered a push with exactly two additional goals and a win with three or more. Necaxa were forced to chase while Toluca retained transition and attacking routes.

This was a valid fresh LEAN — SMALL candidate only if no correlated early position had already been placed.

### Red-card regime

Carranza was sent off at 45+7, materially weakening Necaxa’s scoring route. Toluca led 2-1 and later moved 3-1 ahead through an own goal.

Toluca remaining-match handicaps after 3-1 were correctly downgraded because territorial control did not become sustained high-quality acceleration.

### Late control regime: 3-1 around 74 minutes

From approximately 60:45 to 74:23:

- Necaxa added essentially no xG, shots, shots on target or box entries;
- Toluca added only modest xG and no new big chance;
- Toluca had observed its fresh attackers for a meaningful interval without sustained acceleration;
- Necaxa remained down to ten and without Carranza;
- Toluca led by two and could manage the match.

Under 5.0 around 1.90 had strong settlement protection:

- no additional goal: full win;
- exactly one additional goal: push;
- two or more additional goals: loss.

This should have been promoted from WATCH to **LEAN — SMALL**. When the price later shortened sharply and the line moved toward 4.75 and 4.5, the no-chase rule correctly applied.

The final score was Toluca 3-1 Necaxa.

## 10. Required market-expression output

When a dominant favorite creates sustained pressure at a level score, the review must include:

1. current over and under lines with both prices;
2. previous reliable total snapshot and line trajectory;
3. favorite -0.75 and -1.0 prices when available;
4. exact settlement for each candidate;
5. latent-pressure assessment;
6. first-goal branch analysis;
7. opponent scoring-route assessment;
8. comparison of over versus favorite handicap;
9. identification of correlation and one preferred expression;
10. breakeven, no-vig and model probability estimates;
11. invalidation triggers and execution status.

When reviewing a late under after a red card, also include:

- identity and tactical role of the dismissed player;
- score margin and leader incentive;
- at least two post-red snapshots;
- interval attacking production for both teams;
- substitution observation time;
- whole-goal or quarter-goal settlement comparison.

## 11. Performance and ledger treatment

This model update does not modify ledger.json.

Official placed performance remains unchanged unless confirmed execution evidence is supplied.

Retrospective missed candidates must not be promoted into official or shadow wins after the result. Previously issued WATCH markets may be graded as watch outcomes, but they remain separate from official bankroll performance.

The Toluca vs Necaxa Under 2.5 recommendation remains an unplaced shadow loss at the advised 0.125u stake. Any grading of the previously issued Under 5.0 WATCH must be labeled separately and must not be used to erase the earlier process error.
