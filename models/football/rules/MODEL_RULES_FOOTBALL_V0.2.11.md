# Football Model Rules v0.2.11

**Effective date:** 2026-07-31  
**Status:** Active evaluation addendum  
**Supersedes:** Older football procedures only where they omit routine corner-market review. `MODEL_RULES_FOOTBALL_V0.2.10.md` remains active for recommendation tiers and stakes; `MODEL_RULES_FOOTBALL_V0.2.9.md` remains active for live timing and quote validity. All competition-context, lineup, aggregate-state, stoppage-time, settlement, correlation, and exposure rules remain active.

## Trigger

The user requested that total-corners markets be reviewed across all football matches rather than only when a specific match happens to display a corner angle.

## Active rules

### 1. Mandatory corner-market scan

For every football prematch preview and every material live reassessment, review the available corner markets alongside 1X2, Asian handicap, and goal totals.

At minimum, check when available:

- full-match total corners;
- first-half and second-half total corners;
- team corner totals;
- corner handicaps;
- remaining-match corner markets.

A mandatory scan does not require a recommendation. `NO BET` remains valid.

### 2. Prematch corner inputs

Assess:

- opponent-adjusted corners for and against;
- home/away splits and competition strength;
- width, crossing frequency, byline attacks, blocked-shot rates, and set-piece dependence;
- expected possession territory rather than possession percentage alone;
- favorite/underdog score-state branches;
- lineup effects from wingers, attacking fullbacks, aerial targets, and defensive blocks;
- referee, venue, weather, pitch, and data reliability when material;
- exact line, odds, and settlement basis.

Do not infer a corner over from attacking reputation or expected goals alone.

### 3. Live corner inputs

Before recommending a live corner market, verify:

- current corner count by team;
- minute and expected stoppage time;
- corner rate over the previous 10–15 minutes;
- crosses, blocked shots, byline entries, box pressure, and repeated defensive clearances;
- score incentives and whether the trailing team is actually sustaining width and pressure;
- substitutions affecting wing play, fullback height, aerial presence, or defensive depth;
- cards, injuries, time-wasting, and tactical changes;
- whether the bookmaker line covers the full match, remaining match, half, or team only.

Possession, xG, shots, and box touches may support the read but cannot replace direct corner-generation evidence.

### 4. Persistence and cluster control

- One corner sequence or one short pressure spell is a correlated cluster, not proof of a sustained corner rate.
- Prefer at least two independent pressure periods or 10–15 minutes of repeated wide attacks before upgrading a live corner over.
- A team can dominate xG through central chances without creating corners; do not transfer goal-market evidence automatically.
- A team leading late may concede territory but defend centrally without allowing repeated corner-producing actions; price the tactical shape directly.

### 5. Independent pricing and exposure

- Price corner markets independently from match-result and goal-total markets.
- Treat correlated positions explicitly. For example, a trailing-team corner over and a full-match goal over may depend on the same chase branch.
- Apply the v0.2.10 `OFFICIAL BET`, `LEAN — SMALL`, `LEAN — WATCH`, and `NO BET` gates.
- During the initial corner-market calibration period, maximum recommended corner exposure is normally 0.125u per match. Two correlated corner positions share that combined cap.
- Minimum odds remain 1.60 unless a stricter market rule is stated.

### 6. Live validity

Corner quotes move rapidly. Unless the state is unusually stable:

- before minute 70: validity normally 45 seconds after delivery;
- minute 70 onward: validity normally 30 seconds after delivery.

Any corner, goal, red card, penalty, major substitution, material tactical change, or line/settlement change immediately expires the recommendation.

### 7. Required compact output

When a corner market is the best angle, use:

`OFFICIAL BET — exact corner market @ target | Executable at minimum+ | stake`

or

`LEAN — SMALL — exact corner market @ target | Executable at minimum+ | 0.125u`

Then show current corners, score/minute, validity, settlement, and the direct corner-generation evidence.

When no corner edge exists, it is enough to state `Corners: NO BET` in the detailed market scan.

### 8. Performance tracking

Track corner bets separately by:

- competition;
- full match, half, team total, handicap, or remaining match;
- prematch or live;
- over or under;
- recommendation tier;
- score state;
- current corner count and minute at entry;
- closing-line quality;
- result and ROI.

Unplaced corner leans remain calibration records and do not enter betting profit/loss.

## Expected benefit

Expand market coverage to a potentially less efficient area while grounding recommendations in direct corner-generation evidence rather than generic attacking statistics.

## Possible downside

Corner markets are volatile, bookmaker definitions vary, and small live samples can produce false rate signals. The initial 0.125u cap and separate performance tracking reduce the cost of early calibration error.

## Review threshold

Review after 20 settled corner wagers or 40 fully documented corner-market scans. Compare ROI, calibration, closing-line quality, maximum drawdown, and performance by competition and market subtype.
