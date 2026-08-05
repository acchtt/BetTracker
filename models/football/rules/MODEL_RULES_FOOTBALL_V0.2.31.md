# MODEL RULES — FOOTBALL v0.2.31

Effective: 2026-08-05

This version supplements v0.2.30 and all active football procedures. Every earlier bankroll, staking, minimum-odds, assessment-period, synchronization, execution-freshness, settlement, market-scan, motivation, defensive-baseline and ledger control remains active unless this file explicitly strengthens it.

## 1. Motivation must be decomposed by result utility

General motivation is not sufficient for a handicap or total recommendation. Before any pick, separately assess:

- **win utility** — value of taking three points or winning the tie;
- **draw utility** — whether a draw is useful, acceptable, harmful or eliminating;
- **margin utility** — value of scoring one more goal after already leading;
- **loss-avoidance utility** — value of protecting the current result;
- **resource-conservation utility** — value of reducing intensity because of remaining fixtures, fatigue, travel, injuries, cards or schedule congestion;
- **time remaining in the competition** — matches or legs still available to repair the position later.

Do not infer high margin utility from high qualification or win motivation. A team can strongly prefer to win while having little reason to pursue a second or third goal once ahead.

For group stages, verify:

- matches remaining;
- current points and goal difference;
- realistic qualification paths;
- whether goal difference or goals scored is likely to be decisive now rather than only theoretically possible;
- the utility of a narrow win compared with a multi-goal win;
- whether the next fixture materially changes present urgency.

When these items are not verified, classify margin utility as `Unknown` and do not promote a deep favorite handicap.

## 2. Favorite-handicap margin gate

For any favorite handicap requiring more than a one-goal win, a `LEAN` requires all of the following:

1. verified or strongly evidenced positive margin utility;
2. evidence the favorite is likely to continue attacking after taking the lead;
3. a credible multi-goal scoring route against the opponent's conceding distribution;
4. acceptable counterattacking and drawdown risk created by chasing the extra goal;
5. an exact-line comparison showing why the added handicap is preferable to a protected alternative.

A high probability of winning the match is not enough to justify `-1.25`, `-1.5`, `-1.75` or deeper.

If win utility is high but margin utility is low or uncertain, classify the deep handicap as `NO BET` even when the favorite is clearly superior.

## 3. Absolute regime, not relative cooling

Do not equate:

- slower than the first half;
- fewer chances than the previous interval; or
- reduced momentum after a scoring cluster

with an objectively closed match.

The forward-looking regime must be classified in absolute terms from the current minute. A match can cool materially and still remain open enough to produce two goals, four corners or multiple late incidents.

Before calling a regime `Closed`, verify most of the following:

- both teams' result utility supports control rather than chase;
- transition space has contracted;
- repeated box access and dangerous wide entries have declined;
- substitutions have not added pace or attacking intent;
- the trailing team lacks a credible route or has stopped committing numbers;
- the leader is protecting possession and defensive shape rather than continuing to attack;
- two synchronized post-event snapshots support the same conclusion.

If only relative cooling is established, use `Neutral` and widen the event distribution.

## 4. Mandatory event-budget analysis for unders

Every goal-total or corner-total under must state the remaining event budget at the current score and line.

For goal unders, show how many additional goals produce:

- full win;
- half-win;
- push;
- half-loss;
- full loss.

For corner unders, show the same branches using the current corner count.

The event budget must be assessed against:

- true minute plus expected stoppage time;
- current score and chase incentives;
- demonstrated routes for both teams;
- substitutions and fatigue;
- set-piece and transition exposure;
- the match's cumulative event regime without assuming simple mean reversion.

A line is fragile when one or two ordinary late events cause a full loss. Fragile protection requires stronger evidence than a line with a meaningful push or half-loss cushion.

## 5. High-event late-under gate

For a match that already contains at least five goals, both teams have scored, or a major scoring cluster has occurred, a late goal under cannot become `LEAN` merely because the second half is quieter.

A `LEAN` on such an under normally requires:

1. at least two synchronized snapshots after the latest goal or major event;
2. a sustained post-event interval showing structural shutdown rather than temporary pause;
3. low or declining attacking utility for both teams;
4. no credible two-sided transition route;
5. sufficient line protection against at least two plausible late scoring incidents, unless closure evidence is exceptional and independently measurable;
6. explicit allowance for substitutions, fatigue, defensive errors and stoppage time.

If the under loses with two additional goals and either team is still chasing, countering or pursuing margin, default to `NO BET`.

## 6. Late corner-under gate

Corner unders require an independent corner-generation assessment. Do not infer corner suppression from goal suppression alone.

Assess:

- current corner count and remaining-event budget;
- wide attacks, crosses, blocked deliveries and byline entries;
- trailing-team territorial pressure;
- leader clearances and low-block behaviour;
- substitution-driven pace and wing usage;
- likely stoppage time.

When 20 or more regulation minutes remain, a corner under that loses with three or fewer additional corners is normally too fragile for `LEAN` if either team is chasing or using width.

A falling goal tempo does not by itself justify a corner under.

## 7. Correlated-thesis control

Goal under and corner under recommendations may rely on the same tactical-cooling thesis. Treat them as correlated unless each has distinct supporting evidence.

Do not present two markets as separate opportunities when both fail under the same renewed pressure, chase state or substitution pattern.

Normally select one best expression. If no market has adequate protection, return `NO BET` on all markets.

## 8. Mandatory HOLD rules

Use `NO BET — HOLD` when a candidate is directionally plausible but any mandatory gate is unresolved.

Hold rather than promote when any of the following applies:

- only one synchronized snapshot exists after a goal, penalty, red card, halftime or major substitution;
- current odds, line, score or true minute are stale or unsynchronized;
- settlement scope is unclear;
- motivation is known generally but win, draw or margin utility is not separated;
- the defensive or scoring baseline is unavailable or materially distorted;
- an under has a fragile event budget without structural closure;
- a favorite handicap depends on continued margin pursuit that is not verified;
- a corner thesis is inferred only from goal tempo;
- the candidate relies mainly on xG/xGOT or one backward-looking metric;
- the price changed through an execution-freshness trigger;
- the same fact is being counted repeatedly across correlated markets.

Every hold must state the exact unlock condition, such as:

- one more synchronized interval;
- confirmation of margin utility;
- confirmation of settlement scope;
- a protected line;
- fresh price and state;
- evidence that chase or width has actually declined.

`NO BET — HOLD` is not a smaller stake tier. The retired 0.125u tier remains unavailable. A wager either qualifies for the full 0.25u `LEAN` or remains unplaced.

## 9. Required compact output additions

Before any pick, include:

- `Motivation:` win utility, draw utility and margin utility for both teams;
- `Goal environment:` absolute Closed, Neutral or Open classification;
- `Event budget:` exact win/push/loss branches for the leading total or corner candidate;
- `Hold status:` unresolved gate and required unlock, or `none`;
- the complete v0.2.29 market scan;
- `Best expression:` exact market, or `none`.

These fields may be compressed for live speed but cannot be silently omitted.

## 10. Existing controls and holds remain active

All earlier rules remain active, including:

- 1u = 1,000,000 VND;
- minimum accepted odds = 1.70;
- every executable `LEAN` uses exactly 0.25u;
- normal official football stake cap = 0.25u;
- `LEAN — SMALL` and 0.125u recommendations remain retired;
- mandatory Assessment period line;
- full independent market reassessment;
- scoring and conceding profile requirement;
- fixed penalty value = 0.79 xG;
- xG and xGOT as supporting evidence only;
- two-team synchronized snapshots and interval comparisons;
- every material event and execution-freshness trigger requires repricing;
- settlement scope must be verified;
- a wager becomes official only after confirmed placement;
- `ledger.json` remains authoritative;
- ledger writes remain on hold until explicitly approved.

A single result does not prove calibration, but a recommendation that violates these gates is a process failure regardless of outcome.
