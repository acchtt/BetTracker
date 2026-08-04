# MODEL RULES — FOOTBALL v0.2.30

Effective: 2026-08-04

This version supplements v0.2.29 and all active football procedures. Existing bankroll, stake, minimum-odds, assessment-period, execution, settlement, full-market-scan and ledger controls remain unchanged.

## 1. Mandatory team scoring and conceding baseline

Before issuing any prematch or live `LEAN`, assess both teams' historical scoring and conceding profiles using the most relevant reliable sample available.

At minimum, record for each team:

- sample and competition scope;
- goals scored per match;
- goals conceded per match;
- clean-sheet frequency;
- failed-to-score frequency;
- frequency of conceding at least two goals;
- frequency of conceding at least three goals, when the sample supports it.

Use home/away, competition, tournament-stage and recent-form splits when they are materially more representative. State when the sample is small, opponent quality is unusual, or red cards, penalties and extreme score states distort the raw average.

A goals-conceded average is not itself a forecast. Examine the distribution and context: repeated multi-goal concessions are different from one isolated collapse, and a low average against weak opposition is not directly transferable to a stronger opponent.

If a reliable conceding profile cannot be established for either team, the analysis may continue, but no wager may be promoted to `LEAN`. Return `NO BET — defensive baseline unavailable` for the affected recommendation.

## 2. Mandatory motivation and result-utility assessment

Before issuing any pick, state each team's current competitive objective and the utility of the available results.

Check, where relevant:

- qualification, elimination, promotion, relegation or title position;
- aggregate score and away-goal or knockout rules;
- group standings and verified tiebreakers;
- whether goal difference, goals scored or head-to-head creates a margin incentive;
- whether a draw is useful, harmful or insufficient;
- schedule congestion, rest, rotation and likely resource conservation;
- current score and minute;
- simultaneous-match results when verified and materially relevant.

Classify motivation evidence as:

- `Verified` — supported by competition rules and current standings/state;
- `Inferred` — tactically plausible but not fully verified;
- `Unknown` — insufficient evidence.

Do not convert motivation mechanically into an over or favorite bet. Strong urgency may increase attacking commitment, but it can also create anxiety, rushed execution and counterattacking exposure. A motivation edge is usable only when paired with demonstrated ability, plausible tactical routes and a price that does not already overstate it.

Any goal, red card, substitution, tactical shift or relevant external result can change result utility and requires a fresh motivation assessment.

## 3. xG and xGOT are supporting evidence, not governing variables

No recommendation may be promoted or rejected solely because cumulative xG or xGOT is high or low.

Reasons:

- cumulative xG is backward-looking and provider-specific;
- one penalty, rebound or isolated chance can dominate the total;
- low xG may coexist with an open game containing transitions, dangerous entries, blocked shots, goalkeeper spills or poor final decisions;
- high xG may come from chances that are not repeatable;
- xGOT observes shot placement only after a shot is on target and does not measure future access, tactical openness or motivation.

For future-goal forecasting, assess multiple independent channels:

1. historical scoring and conceding distributions;
2. current score, minute and verified result utility;
3. tactical openness, transition space and defensive exposure;
4. repeatable attacking routes such as cutbacks, crosses, central entries, set pieces and second balls;
5. interval pressure through shots, blocked shots, box entries, corners and dangerous possessions;
6. finishing, goalkeeper and defensive-error indicators;
7. xG and xGOT, adjusted for penalties and sequence concentration;
8. current market line, adjacent prices and trajectory.

xG and xGOT together count as one evidence channel, not two. A total-goals `LEAN` normally requires at least two independent forward-looking channels beyond raw cumulative xG/xGOT.

## 4. Goal-environment classification

At each prematch assessment and material live snapshot, classify the expected future regime as:

- `Closed` — limited repeatable routes, useful draw/lead protection, low transition exposure;
- `Neutral` — mixed or uncertain routes and incentives;
- `Open` — both teams have credible routes, one or both must chase, defensive spacing is expanding, or repeated attacks are bypassing midfield control.

The classification concerns expected play from the current moment onward. It must not be determined by the number of goals already scored or by cumulative xG alone.

When the observed scoring rate and chance metrics conflict, widen the probability range instead of forcing a precise conclusion.

## 5. Market-specific use of conceding and motivation

Apply the mandatory baseline and motivation assessment to every market family required by v0.2.29:

- **1X2 and handicaps:** can the selected team continue pursuing the required margin, and can the opponent exploit the resulting space?
- **Full-match and period totals:** are there credible forward-looking routes for the additional goals required by the exact line?
- **Team totals:** does the opponent's conceding distribution match the selected team's attacking route and motivation?
- **BTTS and next goal:** does each team have an independent route rather than merely a theoretical need to score?
- **Corners:** do territorial pressure, width, blocked deliveries and score incentives support repeatable corner generation?
- **Cards:** do urgency, transition defending, rivalry and elimination risk support the line without relying on motivation alone?

Do not use the same motivation fact or defensive weakness as multiple independent reasons across correlated markets. Compare all candidates and normally select one best expression.

## 6. Required compact output

Every prematch assessment and material live reassessment must include, after the verdict and Assessment period line:

- `Conceding profile:` both teams' relevant goals-conceded rates and sample caveat;
- `Motivation:` each team's verified or inferred result utility;
- `Goal environment:` Closed, Neutral or Open, with the principal forward-looking reason;
- the v0.2.29 compact full-market scan;
- `Best expression:` exact market, or `none`.

The fields may be compressed for live speed but may not be silently omitted before a pick.

## 7. Existing controls unchanged

All previous controls remain active, including:

- 1u = 1,000,000 VND;
- minimum accepted odds = 1.70;
- every executable `LEAN` uses exactly 0.25u;
- normal official football stake cap = 0.25u;
- mandatory Assessment period line;
- complete independent market scan under v0.2.29;
- synchronized two-team snapshots and interval comparison;
- fixed penalty value = 0.79 xG;
- exact settlement and goal-cliff analysis;
- every material event or execution-freshness trigger requires repricing;
- a wager is official only after confirmed placement;
- `ledger.json` remains authoritative and writes remain subject to the active hold.
