# EdgeLog Model Changelog

This file records betting-model rules, evidence, and approved changes. `ledger.json` remains the authoritative betting record.

## Active operational documents

- Football recommendations must follow `FOOTBALL_BETTING_PROCEDURE.md`, `MODEL_RULES_FOOTBALL_V0.2.5.md`, and this changelog.
- League of Legends recommendations must follow `LOL_BETTING_PROCEDURE.md` and this changelog.
- When a procedure and an older changelog interpretation conflict, the newer dated rule or procedure controls until formally reviewed.
- Every future material procedure change must also receive a dated entry in `MODEL_CHANGELOG.md`; editing a procedure file alone is not sufficient.

## Operating baseline

- 1 unit = 500,000 VND.
- A wager becomes official only after placement is confirmed.
- Minimum accepted odds: 1.60.
- Standard evaluation stake: 0.25u; maximum normally 0.5u.
- Prefer selectivity over action; `NO BET` is a valid model output.
- Reassess every changed line independently.
- Separate reporting by sport, league, market, prematch/post-draft/live, and recommendation type.
- Do not use missed, unavailable, or unconfirmed wagers in performance results.

## Change format

Each rule change must include:

1. Date and model version.
2. Sport and market affected.
3. Evidence or triggering bets.
4. Previous rule.
5. New rule.
6. Expected benefit and possible downside.
7. Review threshold.

---

## v0.3.0 — 2026-07-29

### League of Legends complete roster, patch, draft, side, and live-state procedure

**Status:** Active operational and evaluation rule  
**Detailed implementation:** `LOL_BETTING_PROCEDURE.md`

**Triggering evidence**

- Recent LCK CL previews moved too quickly from standings, recent records, and prices to series opinions without consistently completing roster confirmation, patch filtering, side selection, lane-matchup analysis, and full market-distribution pricing.
- DN SOOPers vs BRO Game 3, BRO +3.5 kills: the model overrated engage coherence, underweighted damage sufficiency and opposing carry redundancy, and treated a sub-three-minute gold difference as meaningful when it was mostly noise.
- KT Challengers +13.5 kills: a first-to-five-kills marker was initially interpreted as a neutral-objective indicator, reinforcing the need to verify screen icons, market definitions, and live state before pricing.
- Other LCK CL bets showed the value of changed-line and draft-aware reassessment, but the workflow was scattered across chat instead of enforced by one procedure.
- The user requested dedicated LoL and football chats because mixed-sport analysis was causing required LoL steps to be skipped.

**Previous rule**

The LoL baseline prioritized gold, towers, objectives, scaling, items, lane states, and map control above kills, but did not enforce a complete ordered workflow for sources, match verification, roster certainty, patch compatibility, side selection, draft assessment, independent market pricing, execution, ledger recording, and review.

**New rule**

For every League of Legends prematch, pre-draft, post-draft, and live assessment:

- Follow `LOL_BETTING_PROCEDURE.md` before issuing a recommendation.
- Verify exact teams and academy labels, competition, stage, start time, best-of format, patch, series score, side-selection rules, standings implications, bookmaker market, and settlement basis.
- Use official Riot, league, tournament, and team sources first. Use current Korean- and Chinese-language reporting only when attributable, current, and cross-checked. Reject stale roster pages and legacy player listings.
- Confirm the expected five-player roster. Material roster uncertainty caps prematch output at `LEAN` and normally blocks map-specific or player-specific markets.
- Filter recent performance for patch relevance. New-patch or low-sample environments require wider fair-price ranges and preference for post-draft or live markets.
- Decompose team strength using opponent-adjusted early gold, gold at 10/15/20, towers, Void Grubs, dragons, Herald, Baron, objective setup, vision, lead conversion, comeback rate, throw rate, duration, side performance, champion pools, damage distribution, engage, peel, frontline, wave-clear, and macro consistency.
- Analyze all five role matchups, including jungle-support and mid-jungle coordination, and convert material matchup effects into market probabilities.
- Treat blue and red side as separate game states. Do not copy a series opinion automatically into a map after side selection changes.
- Reassess every map after the completed draft for lane priority, skirmish strength, jungle access, engage, disengage, frontline, damage balance, range, wave-clear, side lanes, scaling by item breakpoint, execution difficulty, comeback tools, objective fighting, and player proficiency.
- Official map bets should normally wait for the full draft. A pre-draft series position must remain robust across realistic draft branches.
- Price series moneyline, map handicap, correct score, total maps, map moneyline, kill markets, objectives, towers, and duration independently.
- For live maps, prioritize gold and its role distribution, towers, objectives, items, lane states, summoner spells, vision, scaling, shutdowns, and map consequences above kills.
- Treat tiny early gold differences as noise unless caused by a durable structural event.
- Build leading-team conversion and comeback/throw branches for every live map.
- Apply stricter uncertainty to kill markets and report kill-handicap performance separately from map-result markets.
- Every recommendation must display `Competition context`, `Roster certainty`, `Patch/meta context`, `Draft/side state`, and `Market implication`.
- Reassess every changed line, odds move, roster update, side change, completed draft, map score, and live state independently.
- A bet becomes official only after confirmed placement. Record exact series or map, market, odds, stake, slip ID, roster, side, draft, live state, reasoning, and tags in `ledger.json`.

**Expected benefit**

Reduce stale-roster and old-patch errors, improve draft and side calibration, prevent kill-score overreaction, and make series, map, kill, objective, and duration recommendations reproducible and separately measurable.

**Possible downside**

Waiting for confirmed rosters and drafts can miss earlier prices. Korean and Chinese coverage may be incomplete or contradictory, and academy roster volatility can still defeat careful preparation.

**Review threshold**

Review after the next 10 settled official LoL wagers under v0.3.0. Report separately by league, series versus map, prematch versus post-draft versus live, roster-confirmed versus uncertain, map-result versus kill markets, and whether the predicted draft or macro branch occurred. Compare closing-line quality, calibration, ROI, and qualitative draft/live-state accuracy.

---

## v0.2.5 — 2026-07-29

### Football competition context and asymmetric aggregate-state model

**Status:** Active evaluation rule  
**Detailed implementation:** `MODEL_RULES_FOOTBALL_V0.2.5.md` and `FOOTBALL_BETTING_PROCEDURE.md`

**Triggering evidence**

- Santos vs Universidad Central de Venezuela, live Universidad Central +1.25 at halftime: Santos held a large aggregate lead. The analysis recognized reduced favorite urgency but applied the cushion too one-directionally and underweighted forced chase, attacking substitutions, transition exposure, and stoppage-time risk.
- The handicap-breaking goal arrived in regulation-time stoppage time as Santos won the remaining second half by two goals, showing that a large aggregate cushion can reduce deliberate attacking volume while increasing counterattack and multi-goal-tail risk.
- CD Olimpia vs Deportivo Mixco, live Under 2.75: the match read was supported by low combined xG and weak Mixco threat, but the regional-cup context had not been converted into a numerical uncertainty adjustment. The win did not validate execution below the price cutoff or above the active stake cap.
- The user requested that league or competition importance become an explicit model input instead of informal commentary.

**Previous rule**

Competition strength, tournament stage, aggregate score, motivation, travel, rotation, and qualification incentives could be discussed qualitatively. A large aggregate lead was sometimes treated mainly as reducing the favorite's need to score, without separately modeling the opponent's forced chase or the favorite's transition opportunity.

**New rule**

For every football prematch and live assessment:

- Run a mandatory `competition-context` module before producing probabilities or fair odds.
- Separate competition strength and data reliability from fixture importance and incentives.
- Verify competition, stage, format, aggregate state, qualification and tiebreak rules, travel, rotation, schedule congestion, venue conditions, and settlement basis.
- Do not transfer domestic-league scoring or strength priors directly into continental, regional, youth, reserve, or cross-border competition without an uncertainty adjustment.
- Translate context into numerical changes to scoring rates, draw probability, tempo, variance, and fair prices; narrative mention alone is insufficient.
- For knockout ties, model the aggregate leader's sustained attacking urgency separately from its transition scoring opportunity.
- Treat an aggregate gap of three or more goals as a `large-aggregate-gap` state and calculate both a controlled branch and a forced-chase/open-transition branch.
- A large aggregate cushion alone can never justify an under, underdog handicap, or short-favorite fade.
- From minute 60 onward, when the trailing team still needs at least two goals, increase the favorite's transition-goal rate and the probability of multiple remaining goals unless observed behavior contradicts the chase scenario.
- Extend relevant live projections through expected stoppage time and treat regulation-time stoppage goals as fully relevant to settlement.
- Positive live underdog handicaps in forced-chase states require the normal uncertainty-adjusted edge plus an additional two-percentage-point buffer, normally at least seven points over breakeven while v0.2.3 remains active.
- Every football recommendation must display `Competition context`, `Aggregate state`, `Late-game branch`, and `Market implication`.
- Tag applicable official bets with `competition-context`, `aggregate-state`, `large-aggregate-gap`, and `forced-chase`.

**Expected benefit**

Prevent one-directional interpretations of motivation, improve calibration across domestic and international competitions, and better price the high-scoring and multi-goal-margin tail created when a trailing team must attack.

**Possible downside**

The added uncertainty and branch analysis will produce more `NO BET` decisions, may slow live responses, and can overstate transition risk when the trailing team does not actually chase.

**Review threshold**

Review after the next 10 settled official football bets tagged `competition-context`, including at least five knockout or aggregate-state bets when available. Report separately by competition, totals versus handicaps, aggregate gap below three versus three or more, and whether the forced-chase branch occurred.

---

## v0.2.4 — 2026-07-28

### Football first-half Under 0.75: strict qualifying gate

**Status:** Active operational restriction

**Triggering evidence**

- Gualberto Villarroel San Jose vs Universitario De Vinto, first-half Under 0.75: the match showed very low early xG and shot volume, but one goal still arrived before halftime and the wager settled as a half-loss.
- The model candidate had a minimum acceptable price of 1.95, but the wager was placed at 1.77, showing that a shortened price can erase the value even when the match profile remains quiet.
- The review found that low current activity was being treated too readily as evidence of low future scoring.

**Previous rule**

Exceptional early chance suppression, confirmed lineups and a positive estimated edge could support a first-half Under 0.75 candidate, with some discretion over the exact minute, price and persistence of the low-event pattern.

**New rule**

For football first-half Under 0.75 recommendations:

- Do not issue an `OFFICIAL BET` candidate unless every mandatory condition below is satisfied. If one is missing, return `NO BET`; do not use `LEAN` for this market.
- The score must be 0-0 and the preferred entry window is minutes 22-32. Earlier entries require exceptional evidence and later entries require a separate stoppage-time penalty.
- Combined live xG should normally be 0.25 or lower, with zero big chances, no more than one combined shot on target and no sustained sequence of dangerous box entries or set pieces.
- The quiet pattern must persist for at least the previous 8-10 minutes; one static screenshot is not enough.
- Confirmed lineups or clearly observed live roles must support a compact game: no strong attacking mismatch, no emergency attacking substitution, no red card, no penalty or VAR incident, and no obvious defensive injury.
- Expected first-half stoppage time must be low. Long injuries, VAR reviews, repeated time delays or other causes of extended added time invalidate the candidate.
- Calculate expected value across the three settlement outcomes: full win at 0 goals, half loss at exactly 1 goal and full loss at 2 or more goals.
- Require an uncertainty-adjusted expected ROI of at least +8% after accounting for the remaining clock and likely stoppage time.
- Require odds of at least 1.95. Any move below 1.95 cancels the candidate and must not be chased.
- Maximum stake remains 0.25u.
- Evaluate the corresponding over and `NO BET` case symmetrically. Low xG alone cannot create an under recommendation.
- Record qualifying wagers with the tag `fh-under-0-75-strict` and record any below-cutoff user execution separately from model performance at the recommended price.

**Expected benefit**

Reduce false confidence from short low-event samples, prevent value loss from chasing shortened prices, and reserve the market for genuinely suppressed first halves with clear tactical and timing support.

**Possible downside**

The model will pass many quiet matches and may miss some winning unders that fail one hard condition or move below the required price before entry.

**Review threshold**

Review after 10 settled official first-half Under 0.75 wagers tagged `fh-under-0-75-strict`, or after 25 fully documented assessed opportunities if 10 official wagers have not occurred.

---

## v0.2.3 — 2026-07-28

### Football calibration: minimum edge and temporary stake restriction

**Status:** Active evaluation restriction

**Triggering evidence**

- The first nine evaluation-phase football bets finished 2 wins, 5 losses and 2 pushes.
- Total football evaluation stake was 1,500,000 VND, with net profit/loss of -806,250 VND and ROI of -53.75%.
- The sample included a bookmaker-settlement error on RFS -1, underestimated late-goal risk on Sandefjord Under 2.25, and an overly thin halftime Under 1.5 edge in Zaglebie Lubin vs Piast Gliwice.
- Flamengo -1 and RFS -1 were staked at 0.5u despite material uncertainty, making calibration errors more expensive.

**Previous rule**

Football candidates could become official when the estimated probability modestly exceeded the displayed breakeven probability, and 0.5u was available for apparently stronger edges.

**New rule**

For football recommendations during the next evaluation block:

- Require an uncertainty-adjusted expected-value edge equivalent to at least five percentage points over breakeven before issuing an `OFFICIAL BET` candidate.
- A three-to-five-point estimated edge is `LEAN`; below three points is `NO BET`.
- For Asian quarter-lines and whole-goal totals, calculate expected value across win, half-win, push, half-loss and loss outcomes rather than comparing only a single win probability with `1 / odds`.
- Cap every official football wager at 0.25u until the next 10 settled football bets are reviewed. Do not recommend 0.5u during this restriction.
- Treat halftime Under 1.5 as a high-variance market. Prefer a safer Under 2 or Under 2.25 when available; require exceptional chance suppression and a larger edge for Under 1.5.
- Weight xG, big chances, shots on target, box touches, score incentives, substitutions and lineup quality above generic possession, attacks and dangerous-attack counts.
- Record the model-recommended stake separately in the notes whenever the placed stake differs from the recommendation.

**Expected benefit**

Reduce marginal entries, limit damage from probability and settlement errors, and improve calibration by requiring a larger buffer for noisy live football data.

**Possible downside**

The model will issue fewer official football bets and may miss some profitable moves that sit just below the stricter threshold.

**Review threshold**

Review after the next 10 settled official football bets, including separate results for totals versus handicaps, prematch versus live, lineup-confirmed bets, and entries before versus after halftime.

---

## v0.2.2 — 2026-07-28

### Football recommendations: mandatory lineup-aware assessment

**Status:** Active operational rule

**Triggering evidence**

- BK Häcken vs AIK: the first preview used the confirmed formations but did not sufficiently adjust the probabilities and market preference for the actual starting personnel and role interactions.
- The user requested that confirmed lineups be incorporated explicitly in every recommendation from this point forward.

**Previous rule**

Team form, market prices, historical performance, formations, and live statistics could carry most of the recommendation, while named starting players and role-specific lineup effects were sometimes treated only as supporting context.

**New rule**

For football prematch and live recommendations:

- When confirmed lineups are available, analyze the actual starting XI before issuing an `OFFICIAL BET` candidate.
- Evaluate more than the listed formation: account for player quality, natural positions, rotation, absences, goalkeeper and centre-back stability, midfield control, pace, finishing, set-piece responsibility, fullback or wingback aggression, and bench substitution options.
- Explain how the two lineups interact tactically, including width versus narrowness, pressing resistance, transition exposure, aerial matchups, and likely game-state changes after the first goal.
- Apply lineup effects directly to estimated probabilities and fair odds; do not mention lineups without changing the numerical or market conclusion when the personnel materially matter.
- Distinguish a strong named lineup from a merely attacking-looking formation. Formation alone is not evidence of attacking quality.
- For live bets, update the lineup assessment for substitutions, injuries, cards, fatigue, and role changes rather than relying only on the starting shape.
- If confirmed lineups are unavailable for a lineup-sensitive prematch market, cap the recommendation at `LEAN`, apply an explicit uncertainty discount, and normally wait rather than issue an official wager.
- Record official football bets that used confirmed lineups with the `lineup-confirmed` tag so their performance can be reviewed separately.

**Expected benefit**

Improve probability estimates by grounding tactical and market analysis in the players who will actually execute the game plan, while reducing generic team-name, form, and formation-only recommendations.

**Possible downside**

Waiting for confirmed lineups may miss an earlier price, and lineup data can contain late errors or misleading listed formations.

**Review threshold**

Review after the next 10 official football bets tagged `lineup-confirmed`, comparing estimated probability, closing-line quality, ROI, and qualitative lineup-read accuracy.

---

## v0.2.1 — 2026-07-27

### Football live Asian handicaps: bookmaker settlement verification

**Status:** Active operational rule

**Triggering evidence**

- FK Tukums 2000 vs FC RFS, live RFS -1 at a displayed score of 0-1: the final score remained 0-1, but BK8 settled the wager as a loss rather than a push.

**Previous rule**

The recommendation assumed the displayed live Asian handicap would settle against the final full-match margin under generic Asian-handicap conventions.

**New rule**

For football live Asian handicaps:

- Do not infer settlement from generic convention alone.
- Before recommending, identify whether the bookmaker applies the handicap to the final score or to the remaining score after placement.
- When the settlement basis is not explicitly confirmed, prefer markets with unambiguous settlement or return `NO BET`.
- For BK8, treat live Asian handicaps as remaining-match handicaps unless a market-specific screen or prior verified settlement proves otherwise.
- State the exact win, push, half-win, half-loss, and loss conditions using the bookmaker-specific interpretation before the wager is placed.
- Do not size above 0.25u while a settlement rule remains unverified.

**Expected benefit**

Prevent wagers whose apparent downside protection is based on an incorrect settlement assumption.

**Possible downside**

Some valid live handicap opportunities may be skipped while the market definition is being verified.

**Review threshold**

Review after five additional BK8 live Asian-handicap settlements or after obtaining an explicit bookmaker rule page that confirms the settlement method.

---

## v0.2.0 — 2026-07-27

### Football live totals: stoppage-time and late-game risk adjustment

**Status:** Active evaluation rule

**Triggering evidence**

- Sandefjord vs Bodo/Glimt, live Under 2.25: two added-time goals changed the result to a loss.
- Pachuca vs Queretaro, live Under 3: a stoppage-time third goal changed a likely win to a push.

**Previous rule**

Live unders were assessed mainly from current tempo, shots, possession, dangerous attacks, score, and the listed total line.

**New rule**

For football live unders:

- Model the effective match horizon through expected stoppage time, not only minute 90.
- Add a late-goal risk penalty when the score margin is one goal and the trailing team must attack.
- Explicitly account for substitutions, cards, injuries, VAR delays, time-wasting, tournament incentives, and likely added time.
- Prefer the safer half-goal line when it remains at odds of 1.60 or higher and the extra protection materially reduces late-goal exposure.
- Do not select a more aggressive whole-goal line solely for a higher price.
- Keep the standard stake at 0.25u unless the edge remains strong after the stoppage-time adjustment.
- From minute 75 onward, require a larger estimated edge than for an equivalent earlier entry.

**Expected benefit**

Reduce avoidable losses and pushes caused by underestimating late attacking incentives and added-time exposure.

**Possible downside**

Safer lines may reduce average odds and occasionally sacrifice value when the match truly remains closed.

**Review threshold**

Review after the next 10 official football live-total recommendations, with separate reporting for entries before minute 60, minutes 60-74, and minute 75 onward.

---

## v0.1.0 — 2026-07-26

### Initial evaluation framework

**Status:** Active baseline

- Begin each recommendation with `OFFICIAL BET`, `LEAN`, or `NO BET`.
- Require odds of at least 1.60.
- Use 0.25u as the standard evaluation stake.
- Use 0.5u only for a clearly stronger edge.
- For LoL, prioritize gold, towers, objectives, scaling, items, lane states, and map control over kills alone.
- For every settled bet, record exact event, market, odds, stake, status, profit/loss, slip ID when available, and reasoning.

## Evaluation discipline

A model rule is not considered validated from one result. Promotion or rollback should use:

- At least 10 relevant official bets for a narrow rule review.
- Closing-line quality where available.
- Calibration of estimated probability versus actual outcomes.
- ROI and drawdown, not win rate alone.
- Qualitative error review for bad process versus normal variance.