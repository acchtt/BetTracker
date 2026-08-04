# MODEL RULES — FOOTBALL v0.2.20

Effective: 2026-08-02

This version supplements v0.2.19 and all active football procedures. Existing controls remain unchanged:

- 1u = 1,000,000 VND
- minimum accepted football odds = 1.70
- official football stake cap = 0.25u
- LEAN — SMALL cap = 0.125u
- every material live-state change requires independent repricing
- a wager is official only after confirmed execution

## 1. Mandatory paired-snapshot comparison

For every live reassessment with a prior statistical snapshot, the model must compare the performance of **both teams** over the interval between snapshots.

The analysis must not describe only the team currently favored by the cumulative totals or the proposed wager. It must show what each team added during the same interval.

Required interval deltas, when available:

- xG;
- xGOT;
- total shots;
- shots on target;
- big chances;
- touches in the opposition box;
- corners;
- possession or territorial share;
- dangerous attacks, final-third entries, or comparable progression data;
- cards, substitutions, injuries, formation changes, and score changes.

## 2. Separate cumulative state from interval form

Every reassessment must distinguish:

1. **Cumulative match state** — the full-match totals at the latest snapshot.
2. **Interval performance** — the change for each team since the immediately preceding synchronized snapshot.

Cumulative dominance cannot be treated as current momentum without checking the interval deltas.

A team may still lead overall while losing the latest phase in chance quality, shot accuracy, territory, or box access. Conversely, a team may improve its interval performance without erasing a large cumulative deficit. Both facts must be stated separately.

## 3. Symmetric comparison requirement

The interval comparison must use the same metrics and time window for both teams.

The model must avoid:

- reporting one team's improvement without reporting the opponent's change;
- comparing one team's interval numbers against the opponent's cumulative totals;
- citing only raw shot volume when the opponent improved more in xG, xGOT, shots on target, or big chances;
- preserving an earlier lean because the favored team still leads cumulative xG or shots;
- calling pressure persistent when the latest interval became balanced or reversed.

When a metric is unavailable for one team, the limitation must be stated rather than inferred.

## 4. Interval classification

After computing both teams' deltas, classify the latest phase as one of:

- **favored team strengthening**;
- **opponent strengthening**;
- **both teams accelerating**;
- **both teams suppressed**;
- **balanced/no clear interval edge**;
- **insufficient synchronized evidence**.

The classification must consider chance quality and shot accuracy before raw shot count. A high-volume interval with no shots on target or little xG growth is not automatically stronger than a lower-volume interval with clear chance-quality improvement.

## 5. Contradiction and stale-lean rule

When the latest interval contradicts the previous recommendation thesis, the prior recommendation must be independently repriced.

Mandatory actions:

- withdraw or downgrade the recommendation when the opponent has materially improved chance quality, shots on target, big chances, box access, or territorial control;
- do not maintain a side recommendation solely because that team still leads cumulative totals;
- require another synchronized snapshot when the interval reversal is recent, noisy, or driven by a short post-substitution sample;
- treat the old odds and edge estimate as expired after a material momentum, personnel, score, or tactical change.

A previous `LEAN` does not remain valid by default. The new state may become `NO BET`, a different lean, or a different market.

## 6. Minimum output format for repeated snapshots

For every repeated-snapshot reassessment, include a compact comparison containing:

- prior minute and current minute;
- prior score and current score;
- each team's prior totals;
- each team's current totals;
- each team's interval deltas;
- substitutions, cards, injuries, and tactical changes during the interval;
- interval classification;
- independent market repricing and final recommendation label.

The preferred table structure is:

| Metric added since prior snapshot | Team A | Team B |
|---|---:|---:|
| xG | delta | delta |
| xGOT | delta | delta |
| Shots | delta | delta |
| Shots on target | delta | delta |
| Big chances | delta | delta |
| Box touches | delta | delta |
| Corners | delta | delta |

Use only metrics actually present in both synchronized snapshots.

## 7. LA Galaxy vs FC Dallas review

At approximately 37 minutes, FC Dallas held the stronger cumulative profile at 0-0:

- xG: LA Galaxy 0.01, FC Dallas 0.79;
- shots: 3-10;
- shots on target: 2-2;
- big chances: 0-2;
- box touches: 10-13;
- corners: 1-4.

At approximately 51 minutes, the cumulative state was:

- xG: 0.53-1.20;
- shots: 7-16;
- shots on target: 4-2;
- big chances: 1-3;
- box touches: 17-19;
- corners: 1-5.

Interval change from about 37 to 51 minutes:

| Metric added | LA Galaxy | FC Dallas |
|---|---:|---:|
| xG | +0.52 | +0.41 |
| Shots | +4 | +6 |
| Shots on target | +2 | 0 |
| Big chances | +1 | +1 |
| Box touches | +7 | +6 |
| Corners | 0 | +1 |

FC Dallas still led cumulative xG, shots, big chances, and box entries, but LA Galaxy improved more in xG and produced the only new shots on target. The latest phase no longer supported a one-sided Dallas pressure thesis.

Correct decision under v0.2.20: withdraw the FC Dallas draw-no-bet lean and return **NO BET** pending another synchronized snapshot.

## 8. Evidence priority for snapshot reassessment

For repeated live snapshots, evidence priority is:

1. score, red cards, penalties, injuries, and substitutions;
2. interval xG, xGOT, big chances, and shots on target for both teams;
3. interval box access, corners, final-third progression, and transition exposure;
4. cumulative match totals;
5. possession and raw shot volume without chance-quality confirmation.

The model must explain both the cumulative state and the current interval, but current interval evidence receives greater weight when deciding whether an earlier recommendation remains valid.