# MODEL RULES — FOOTBALL v0.2.27

Effective: 2026-08-04

This version supplements v0.2.26 and all active football procedures. Existing bankroll, stake, minimum-odds, execution, settlement and ledger controls remain unchanged.

## 1. Fixed penalty xG convention

For SlipTrace football analysis, every awarded penalty contributes a fixed **0.79 xG** to the cumulative xG total, regardless of whether the penalty is scored, saved, missed or hits the frame.

This is the project’s mandatory decomposition convention. Do not infer a different penalty xG value from the displayed cumulative total.

## 2. Non-penalty xG calculation

When a team has taken one or more penalties, calculate:

> non-penalty xG = cumulative xG − (0.79 × number of penalties taken)

If provider rounding causes a very small negative residual, report non-penalty xG as approximately zero and preserve the rounding note.

For every comparison in which only one team has taken a penalty, display both:

- raw cumulative xG; and
- penalty-adjusted non-penalty xG.

Do not describe a team as having superior repeatable chance creation from raw xG alone when the apparent advantage is mainly or entirely penalty-derived.

## 3. Penalty-sequence grouping

A penalty, its save or miss, and an immediate rebound or follow-up belong to one attacking sequence for repeatability analysis.

The recorded rebound may still contribute additional provider xG, but the model must not count the penalty and immediate rebound as separate independent demonstrations of sustained pressure.

Classify subsequent chances separately only after possession or the attacking phase has clearly reset.

## 4. xGOT treatment

Penalty xG is fixed at 0.79, but penalty xGOT is not fixed.

xGOT depends on the actual shot placement and provider methodology. Therefore:

- an off-target penalty may contribute no xGOT;
- an on-target penalty may contribute material xGOT;
- a saved penalty and its rebound must still be grouped as one sequence for repeatability analysis.

Never subtract 0.79 automatically from xGOT.

## 5. Live-regime use

A penalty is a material event and invalidates the previous live price. After a penalty:

- reprice from the new score, card, tactical and emotional state;
- separate penalty-derived xG from open-play creation;
- use post-penalty synchronized intervals to judge whether pressure continued;
- do not extrapolate the penalty event itself as a repeatable scoring rate.

A penalty and a red card are separate regime changes and must each be priced independently.

## 6. Bucaramanga vs Cúcuta Deportivo case note — 2026-08-04

At approximately 76 minutes, the displayed cumulative xG was:

- Atlético Bucaramanga: 1.05;
- Cúcuta Deportivo: 1.29.

Cúcuta had missed a penalty. Applying the fixed convention:

- Bucaramanga non-penalty xG: 1.05;
- Cúcuta non-penalty xG: approximately 0.50.

Therefore, Cúcuta’s raw xG advantage was penalty-driven and did not represent superior repeatable open-play creation.

After Cúcuta’s red card, the synchronized interval showed Bucaramanga producing the meaningful pressure. The correct analysis required both penalty adjustment and independent post-red-card repricing.

## 7. Mandatory output rule

Whenever a penalty has occurred, every subsequent live assessment that cites xG must state:

1. the raw cumulative xG;
2. the number of penalties taken by each team;
3. the penalty-adjusted non-penalty xG;
4. whether any immediate rebound is part of the same sequence;
5. which post-event interval evidence is being used for the current price.

If the penalty count or sequence cannot be verified, the xG comparison is incomplete and cannot support an executable recommendation.

## 8. Existing controls unchanged

All previous controls remain active, including:

- 1u = 1,000,000 VND;
- minimum accepted odds = 1.70;
- every executable LEAN uses exactly 0.25u;
- normal official football stake cap = 0.25u;
- synchronized two-team snapshots;
- sequence-adjusted chance quality;
- exact settlement and goal-cliff analysis;
- every material event or price change requires independent repricing;
- a wager is official only after confirmed placement;
- `ledger.json` remains authoritative.