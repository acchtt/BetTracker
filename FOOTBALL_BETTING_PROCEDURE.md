# Football Betting Procedure

**Status:** Active operational procedure  
**Effective date:** 2026-07-30  
**Applies to:** Football prematch and live betting analysis in the Betting model project  
**Related rules:** `MODEL_CHANGELOG.md`, `MODEL_RULES_FOOTBALL_V0.2.6.md`, `MODEL_RULES_FOOTBALL_V0.2.5.md`, and `ledger.json`

`ledger.json` remains the authoritative betting record. This procedure controls how football opportunities are researched, analyzed, recommended, confirmed, recorded, settled, and reviewed. Where v0.2.6 conflicts with an older aggregate-state interpretation, v0.2.6 controls.

---

## 1. Fixed project rules

- 1 unit = 500,000 VND.
- Minimum accepted odds are 1.60 unless a market-specific rule requires a higher price.
- Standard evaluation stake is 0.25u = 125,000 VND.
- The active football-model restriction caps recommendations at 0.25u until the scheduled review is completed.
- A recommendation must begin with `OFFICIAL BET`, `LEAN`, or `NO BET`.
- An `OFFICIAL BET` recommendation is actionable but must still state `not placed` until the user confirms execution.
- A wager becomes an official placed bet only after the user confirms placement.
- Every changed line, price, score, minute, market, or settlement basis must be reassessed independently.
- Prefer selectivity over action. `NO BET` is a valid and often preferred output.
- Do not describe an unavailable, rejected, missed, or unconfirmed wager as placed.

---

## 2. Required source hierarchy

Use current sources and note uncertainty when reliable information is unavailable.

1. Official competition, federation, club, and team sources.
2. Reliable lineup, injury, suspension, schedule, and statistical providers.
3. Local-language reporting for team news, rotation, travel, motivation, and coaching comments.
4. Bookmaker screenshots or user-provided live screens for the exact market, odds, score, and minute.
5. Secondary previews and odds aggregators only as supporting evidence.

Do not use stale roster pages, old formations, generic team reputation, or one unsupported preview as the main basis for a bet.

---

## 3. Match verification gate

Before pricing any market, verify:

- exact event and teams;
- competition and season;
- date, start time, and venue;
- prematch or live status;
- match format and stage;
- whether it is a domestic league, domestic cup, group stage, first leg, second leg, or single-match knockout;
- aggregate score when applicable;
- qualification and tiebreak rules;
- whether extra time or penalties are possible and whether the market settles after 90 minutes only;
- bookmaker and exact settlement basis.

When any of these materially affects the market but cannot be confirmed, apply an uncertainty penalty or return `NO BET`.

---

## 4. Mandatory competition-context module

Run this module before producing probabilities or fair odds.

### Competition strength and data reliability

- Assess the underlying quality of each domestic league and the reliability of cross-league comparisons.
- Do not transfer domestic scoring rates directly into continental or regional competition without adjustment.
- Widen the probability interval for unfamiliar, low-data, youth, reserve, regional, or cross-border competitions.
- Separate competition quality from match importance. They are not the same variable.

### Fixture importance and incentives

- Identify qualification pressure, relegation pressure, title pressure, group position, aggregate state, and schedule priorities.
- Check rotation risk, fixture congestion, travel, climate, altitude, surface, and home conditions when relevant.
- Assess whether a draw is useful, whether one team must win, and how the first goal would alter incentives.
- Translate the context into numerical changes to scoring rates, draw probability, expected tempo, and variance. Context cannot remain narrative only.

Every recommendation must display:

- `Competition context`
- `Aggregate state`
- `Late-game branch`
- `Market implication`

Applicable knockout recommendations must additionally display the v0.2.6 fields in section 8.

---

## 5. Lineup and personnel gate

When confirmed lineups are available, analyze the actual starting elevens before issuing an actionable candidate.

Evaluate:

- natural positions and role changes;
- goalkeeper quality and centre-back stability;
- fullback or wingback aggression;
- midfield control and pressing resistance;
- pace, finishing, aerial quality, and set-piece responsibility;
- front-line balance, width, and chance creation;
- rotation, absences, suspensions, and returning players;
- bench quality and likely substitution options.

Explain the tactical interaction between the two lineups, including:

- width versus narrowness;
- press versus buildup resistance;
- transition exposure;
- aerial and set-piece matchups;
- protection of central areas;
- likely behavior after the first goal.

Apply material lineup effects directly to projected scoring rates and fair prices. Do not mention lineups without changing the conclusion when the personnel matter.

For live betting, update the personnel assessment after substitutions, injuries, cards, fatigue, and role changes.

If confirmed lineups are unavailable for a lineup-sensitive prematch market, normally cap the output at `LEAN` and wait.

---

## 6. Prematch team-strength assessment

Use a decomposed view rather than simple recent-form tables.

Assess:

- opponent-adjusted attacking and defensive performance;
- expected goals for and against;
- shot quality rather than shot count alone;
- box entries and opposition-box touches;
- finishing and goalkeeper overperformance or underperformance;
- set-piece attack and defense;
- home and away splits when sample quality is adequate;
- strength of schedule;
- tactical matchup;
- lineup-adjusted depth and substitution quality;
- likely match state after each possible first goal.

Recent results are supporting evidence, not a standalone model.

---

## 7. Live-match evidence hierarchy

For live football analysis, prioritize:

1. score, minute, and effective time remaining including expected stoppage time;
2. xG and xGOT;
3. big chances;
4. shots on target;
5. shots from inside the box;
6. opposition-box touches and sustained dangerous possession;
7. substitutions, cards, injuries, fatigue, and tactical changes;
8. corners and dangerous set-piece sequences;
9. score incentives and qualification incentives;
10. possession, attacks, and dangerous-attack counts as lower-weight context.

A single screenshot is a snapshot, not proof of a persistent pattern. When possible, compare the previous 8–15 minutes with the full-match profile.

### Correlated-evidence check

Treat xG, xGOT, big chances, shots on target, box shots, and box touches as partially correlated rather than independent confirmations.

- Group overlapping indicators from the same attacking passage into a `chance cluster`.
- Use xG and xGOT together to separate chance creation from shot execution.
- High xG with materially lower xGOT requires regression unless the missed chances were clearly repeatable tactical products.
- Low-xG shots on target do not justify the same forward scoring rate as high-quality shots on target.
- Big chances, box shots, and box touches cannot each receive a full separate probability uplift when they came from the same sequence.
- Apply an additional persistence penalty to a static halftime snapshot unless the previous 10–15 minutes or multiple snapshots confirm continuing chance creation.

---

## 8. Aggregate-state procedure

For knockout ties, first classify the trailing team's goals-required tier:

- `single-goal-to-level`: one goal levels the aggregate or forces extra time;
- `single-goal-to-qualify`: one goal moves the team ahead on aggregate or qualifies it;
- `multi-goal-chase`: at least two goals are still required to level or qualify;
- `no-chase`: the current score creates no rational need for greater attacking risk.

Model two separate effects:

- the aggregate-leading team's sustained attacking urgency;
- the aggregate-leading team's transition scoring opportunity.

A large aggregate lead can reduce deliberate attacking volume while leaving counterattack scoring unchanged or higher.

Model the trailing side's chase using:

- goals still required;
- time remaining;
- attacking substitutions;
- fullback height and numbers committed forward;
- cards, fatigue, and defensive structure;
- willingness to accept transition risk.

An aggregate gap of three or more goals is a `large-aggregate-gap` state and requires two explicit branches:

1. **Controlled branch:** the leader manages territory and the trailing team cannot sustain pressure.
2. **Forced-chase/open-transition branch:** the trailing team commits numbers, increasing its own attacking rate and the leader's counterattack rate.

A large aggregate cushion alone can never justify an under, an underdog handicap, or a short-favorite fade.

Do not apply the strong multi-goal forced-chase uplift merely because a team trails. From minute 60 onward, the automatic multiple-goal-tail increase applies only when the team still needs at least two goals and observed substitutions, fullback height, tempo, or behavior confirm that the team is accepting transition risk.

### Mandatory next-goal state tree

For any live total or team total requiring two or more additional goals, price at least three branches:

1. the aggregate-trailing team scores next;
2. the aggregate-leading team scores next;
3. no goal through the next material time checkpoint.

After each branch, recalculate:

- aggregate score;
- goals still required by each team;
- whether extra time becomes available or remains avoidable;
- expected attacking urgency for the next 5–10 minutes;
- transition exposure;
- probability of the subsequent goal required by the wager.

A next goal cannot be treated only as evidence that the match is open. Its effect on future incentives must be priced separately.

### Aggregate-reset branch

When the trailing team scores and the aggregate becomes level with extra time available:

- apply `aggregate-reset`;
- reduce immediate combined scoring intensity for the next 5–10 minutes unless observed tactics, substitutions, fatigue, or competition rules support continued regulation-time aggression;
- do not assume both teams will continue chasing a regulation winner;
- widen the probability interval because some teams accept extra time while others continue attacking;
- price the subsequent goal separately when the market still requires another goal.

### Branch-weighting discipline

Do not make the forced-chase branch dominant solely because the fixture is a knockout tie. Increase it only when supported by at least two of:

- two or more goals still required;
- attacking substitutions;
- visibly advanced fullbacks or wingbacks;
- reduced defensive numbers;
- repeated transition chances;
- high-quality chance persistence over at least 10 minutes;
- cards or fatigue materially weakening defensive containment.

If these conditions are absent, widen the interval and return `LEAN` or `NO BET` when the edge is not robust.

Applicable knockout recommendations must show:

- `Goals-required tier`
- `Next-goal state tree`
- `Aggregate-reset risk`
- `Chance-quality and correlation check`
- `Late-game and stoppage-time branch`
- `Market implication`

---

## 9. Stoppage-time and late-game module

For every live total and handicap:

- model the horizon through expected stoppage time, not minute 90 only;
- price injuries, VAR reviews, substitutions, time-wasting, cards, and delays;
- add late-goal risk when the margin is one goal and the trailing team must attack;
- account for the leading team's counterattack incentive;
- increase the required edge from minute 75 onward;
- treat regulation-time stoppage-time goals as fully relevant to settlement;
- do not confuse stoppage time with extra time.

For live unders, explicitly assess late attacking incentives, score margin, substitutions, cards, and likely added time before recommending.

For knockout totals, re-run the goals-required tier and aggregate-reset analysis after every goal, red card, attacking substitution, or material time checkpoint.

---

## 10. Market-definition and settlement gate

Before recommending, state exactly how the market settles.

For Asian handicaps and quarter-goal totals, calculate value across all relevant outcomes:

- full win;
- half win;
- push;
- half loss;
- full loss.

For BK8 live Asian handicaps, treat the line as a remaining-match handicap unless a market-specific screen or verified rule proves otherwise.

State the exact settlement conditions before placement. When the settlement basis is unclear, prefer an unambiguous market or return `NO BET`.

---

## 11. Independent market pricing

Price each available market independently:

- 1X2;
- draw no bet;
- Asian handicap;
- total goals;
- first-half and second-half markets;
- remaining-match markets;
- team totals when reliable.

Do not carry a general team opinion automatically into every market.

For each candidate:

- estimate the full outcome distribution;
- state the fair-price range;
- state the displayed odds;
- state the uncertainty-adjusted edge;
- compare nearby safer and more aggressive lines;
- identify the minimum acceptable odds;
- reject the bet when the edge disappears after uncertainty and settlement adjustments.

Under the active football restriction:

- at least a five-percentage-point uncertainty-adjusted edge over breakeven is required for an actionable `OFFICIAL BET` recommendation;
- three to five points is `LEAN`;
- below three points is `NO BET`;
- forced-chase underdog handicaps require an additional two-point buffer, normally at least seven points over breakeven;
- halftime or early-second-half totals requiring two or more additional goals require an additional two-point buffer when the trailing team is `single-goal-to-level` and the first goal could trigger an aggregate reset;
- cap such a market at `LEAN` when the analysis supports only the next goal and does not independently support the subsequent goal required for settlement.

---

## 12. Market-specific restrictions

### First-half Under 0.75

This market requires every mandatory condition in the active strict gate, including:

- score 0-0;
- preferred entry minutes 22–32;
- combined xG normally 0.25 or lower;
- zero big chances;
- no more than one combined shot on target;
- no sustained dangerous box-entry or set-piece sequence;
- quiet pattern persistent for 8–10 minutes;
- low expected first-half stoppage time;
- odds at least 1.95;
- uncertainty-adjusted expected ROI of at least 8%;
- maximum stake 0.25u.

If one condition fails, return `NO BET`.

### Halftime Under 1.5

Treat as high variance. Prefer Under 2 or Under 2.25 when the added protection is reasonably priced. Require exceptional suppression and a larger edge for Under 1.5.

### Knockout halftime overs requiring two or more additional goals

- Identify the goals-required tier before pricing the over.
- Build the next-goal state tree and include aggregate-reset risk.
- Require an independently supported pathway to the second required goal.
- Require persistent high-quality chance creation over the previous 10–15 minutes or multiple independent evidence groups.
- When one goal would level the aggregate and make extra time available, require at least a seven-percentage-point uncertainty-adjusted edge under the active evaluation restriction.
- If only the next goal is strongly supported, return `LEAN` or `NO BET`.
- Prefer whole-goal protection when reasonably priced.

---

## 13. Recommendation format

Every recommendation must begin with exactly one classification.

### `OFFICIAL BET`

Use only when the market passes all procedure gates and the edge threshold. Before confirmation, include:

- exact event;
- exact market and settlement basis;
- current score and minute for live bets;
- odds and minimum acceptable odds;
- recommended stake, currently no more than 0.25u;
- fair-price range;
- concise evidence;
- main risks;
- status: `not placed`.

After the user confirms placement, change the status to `official/open` and record the exact execution details.

### `LEAN`

Use when there is a possible edge but one or more of the following remains insufficient:

- edge size;
- lineup certainty;
- source quality;
- competition calibration;
- market definition;
- live-state persistence;
- price.

State the required price or information that would upgrade the lean.

### `NO BET`

Use when the edge is absent, too uncertain, below the required price, contradicted by game state, or not robust across realistic branches.

State the main rejection reason without forcing an alternative.

---

## 14. Execution and confirmation procedure

When the user sends a confirmed bet slip, verify:

- event;
- market;
- exact line;
- odds;
- stake in VND and units;
- score and minute at placement for live bets;
- potential payout;
- slip ID;
- bookmaker settlement basis;
- whether execution met the recommended cutoff and stake.

Record deviations honestly:

- below-cutoff execution;
- stake above model recommendation;
- changed line;
- late entry;
- uncertain settlement basis.

A winning result does not validate a below-cutoff price or oversized stake.

---

## 15. Ledger procedure

After placement confirmation, record in `ledger.json`:

- stable `syncId`;
- event and competition;
- exact market and odds;
- stake in VND;
- status;
- result;
- event date;
- market type;
- prematch or live timing;
- slip ID;
- entry score and minute;
- model fair price and minimum acceptable odds;
- potential payout;
- reasoning and risks;
- relevant tags.

Useful football tags include:

- `official`
- `model-generated`
- `lineup-confirmed`
- `competition-context`
- `aggregate-state`
- `large-aggregate-gap`
- `forced-chase`
- `single-goal-to-level`
- `single-goal-to-qualify`
- `multi-goal-chase`
- `aggregate-reset`
- `chance-cluster-adjusted`
- `stoppage-time-risk`
- `below-model-cutoff`
- `stake-above-model-cap`
- `model-review`

Do not modify settled status or profit/loss without a user-confirmed or otherwise verified result.

---

## 16. Settlement and review procedure

For every settled wager:

1. Confirm the final result and bookmaker settlement.
2. Calculate payout, net profit/loss in VND, and units.
3. Separate outcome quality from decision quality.
4. Review whether the price met the cutoff.
5. Review whether the stake followed the model cap.
6. Review lineup, competition, aggregate, and live-state assumptions.
7. Identify whether the result was normal variance, bad data, settlement misunderstanding, or a model-process error.
8. Record honest lessons without rewriting the original reasoning.
9. Do not promote a new rule from one result alone unless the review identifies a deterministic logic or settlement defect; such an update must remain an evaluation rule with a defined sample review threshold.
10. Review performance separately by competition, market, prematch/live timing, recommendation type, lineup confirmation, and relevant strategy tags.

Use closing-line quality where available and compare estimated probabilities with actual outcomes over an adequate sample.

---

## 17. Ready-to-paste football chat starter

**Suggested chat title:** `Football Betting Model — Prematch & Live`

Paste this as the first message in a new chat inside the Betting model project:

> This chat is only for football betting analysis and ledger work. Follow `FOOTBALL_BETTING_PROCEDURE.md`, `MODEL_CHANGELOG.md`, `MODEL_RULES_FOOTBALL_V0.2.6.md`, and the base rules in `MODEL_RULES_FOOTBALL_V0.2.5.md` before every recommendation. Begin every recommendation with OFFICIAL BET, LEAN, or NO BET. Verify the exact event, competition, stage, kickoff time, venue, format, aggregate score, qualification rules, bookmaker market, and settlement basis. Run the mandatory competition-context, lineup, aggregate-state, goals-required-tier, next-goal-state-tree, aggregate-reset, chance-correlation, late-game, and stoppage-time modules. Use xG, xGOT, big chances, shots on target, box shots, box touches, substitutions, cards, score incentives, and tactical changes above generic possession or dangerous-attack counts, without double-counting correlated indicators. Price each changed line independently and calculate quarter-line outcomes correctly. Minimum odds are 1.60 unless a stricter market rule applies. The active football recommendation cap is 0.25u. An OFFICIAL BET recommendation is not placed until I confirm execution. After confirmation, record the exact event, market, odds, stake, status, payout, slip ID, entry score and minute, reasoning, and tags in EdgeLog `ledger.json`. Review every settled bet honestly, separating result from process.

---

## 18. Pre-recommendation checklist

Before sending any football recommendation, confirm that all applicable boxes are complete:

- [ ] Exact match and competition verified
- [ ] Stage, format, aggregate, and qualification rules verified
- [ ] Competition-context adjustment applied numerically
- [ ] Confirmed lineup or explicit lineup uncertainty applied
- [ ] Market and bookmaker settlement basis verified
- [ ] Live score, minute, and stoppage-time horizon included
- [ ] xG, xGOT, big chances, SOT, box shots, and box touches assessed
- [ ] Correlated chance indicators grouped rather than double-counted
- [ ] Live-state persistence over the previous 8–15 minutes assessed
- [ ] Substitutions, cards, injuries, fatigue, and tactical changes assessed
- [ ] Goals-required tier classified for knockout ties
- [ ] Controlled and forced-chase branches assessed when applicable
- [ ] Next-goal state tree completed when the market requires two or more additional goals
- [ ] Aggregate-reset risk priced when an equalizer could make extra time available
- [ ] Each changed line priced independently
- [ ] Quarter-line settlement outcomes calculated
- [ ] Fair price, cutoff, edge, and risks stated
- [ ] Recommendation stake does not exceed 0.25u
- [ ] Status clearly says placed or not placed
- [ ] Ledger update occurs only after confirmed execution
