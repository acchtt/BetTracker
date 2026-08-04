# MODEL RULES — FOOTBALL v0.2.22

Effective: 2026-08-03

This version supplements v0.2.21 and all active football procedures. Existing controls remain unchanged:

- 1u = 1,000,000 VND
- minimum accepted football odds = 1.70
- official football stake cap = 0.25u
- LEAN — SMALL cap = 0.125u
- every material live-state change requires independent repricing
- a wager is official only after confirmed execution
- ledger.json remains the authoritative betting record
- ledger updates remain on hold until explicitly approved

## 1. Live-total line trajectory is model evidence

The current total cannot be interpreted in isolation. Before recommending a live total, record and compare:

- the pre-match total or earliest reliable live total;
- the current total;
- over and under prices at both observations;
- score and exact minute at both observations;
- goals, penalties, red cards, injuries and material substitutions between observations;
- whether the bookmaker screen was refreshed and the prices were executable.

A scoreless clock normally causes the full-match total to decline. When the line declines unusually slowly, remains elevated, or holds nearly the same over/under prices after substantial scoreless time has elapsed, treat the resilient line as evidence that the market retains a high remaining-goal expectation.

Do not describe a resilient line as stale merely because it conflicts with the statistical thesis. A stale-price claim requires a refreshed market screen, visible match clock and evidence that the bookmaker has not incorporated the current state.

One match does not establish a universal normal-decay threshold. Continue collecting comparable line snapshots by league, opening total, score state and minute. Until a larger reference sample exists, slow decay is a strong uncertainty warning rather than a standalone over recommendation.

## 2. Elevated 0-0 total gate before 30 minutes

At 0-0 around 25–30 minutes, a full-match total of 2.5 priced near even is elevated when the match opened or traded near 3.0 early.

In this state:

- Under 2.5 cannot be promoted above WATCH solely because cumulative xG, xGOT or big chances are low;
- a total that has declined only half a goal through roughly 20–25 scoreless minutes must be treated as a market-resilience warning;
- sustained favorite pressure, repeated box access, inside-box shots, corners or attacking bench strength are vetoes against assuming durable suppression;
- an under recommendation requires a quantified reason why the resilient market line is too high;
- if the disagreement cannot be resolved, the correct verdict is NO BET.

For a pre-30-minute full-match under, normally require:

1. at least two synchronized same-scope statistical snapshots spanning a meaningful interval;
2. the live-total trajectory and both-side prices;
3. actual pitch and weather confirmation;
4. a review of both teams’ scoring routes after the first goal;
5. a fair-probability estimate or defensible probability range;
6. exact settlement and goal-count cliff analysis.

An unresolved required input blocks promotion from WATCH to LEAN.

## 3. Observed suppression versus structural suppression

Do not equate low realized chance quality with a stable low-scoring structure.

**Observed suppression** includes:

- no goals so far;
- low cumulative xG;
- low xGOT;
- few shots on target;
- zero recorded big chances.

**Structural suppression** requires evidence such as:

- low tempo across multiple snapshots;
- limited opposition-box access for both teams;
- few inside-box attempts;
- weak or absent transition routes;
- conservative score incentives;
- defensive substitutions or game-management behavior;
- limited attacking bench options;
- verified adverse pitch or weather effects.

A team can have low xGOT while generating meaningful latent scoring pressure through repeated box touches, blocked shots, corners and inside-box attempts. In that situation, describe the finishing as unproductive so far; do not automatically describe the match as suppressed.

## 4. Mandatory first-goal branch analysis for level-score unders

Before recommending an under at a level score, explicitly price the main game-state branches:

1. the favorite scores first;
2. the underdog scores first;
3. the score remains level into halftime or the next tactical checkpoint.

For each first-goal branch, assess:

- whether the trailing team must open its shape;
- whether attacking substitutions are likely;
- whether the leading team gains transition space;
- whether rest defense weakens;
- whether both teams then retain independent scoring routes;
- how much time remains after a plausible first goal.

If either likely first-goal branch materially increases tempo or creates two-way transition risk, cap the under at WATCH unless the price still shows a clear quantified edge after accounting for that branch.

Current 0-0 statistics must not be projected forward as though incentives will remain unchanged after 1-0.

## 5. Fair-price and uncertainty requirement

Every LEAN or OFFICIAL BET on a total must state:

- offered odds;
- raw breakeven probability, calculated as 1 / decimal odds;
- no-vig market probability when both over and under prices are available;
- the model’s estimated probability or defensible probability range;
- why the estimate clears breakeven by a meaningful uncertainty buffer.

Descriptive statistics without a fair-price estimate are insufficient for promotion above WATCH.

When the model cannot produce a defensible probability estimate, or when the estimate overlaps the market after allowing for uncertainty, the verdict must be NO BET or WATCH.

Do not infer value merely because the minimum accepted odds of 1.70 is met. The minimum price is an execution floor, not evidence of edge.

## 6. Goal-count cliff and quarter-line comparison

When comparing totals such as Under 2.5, Under 2.75 and Under 3.0, estimate or discuss separately:

- probability of 0–2 total goals;
- probability of exactly 3 total goals;
- probability of 4 or more total goals.

State exact settlement at every relevant goal count.

Do not dismiss quarter-goal protection only because its price is lower. The value of Under 2.75 depends materially on the probability of exactly three goals. Conversely, protection at three goals does not make the quarter line a bet when the overall distribution still fails to clear fair value.

If the exact-three probability is material but highly uncertain, prefer NO BET over selecting a line from incomplete distribution analysis.

## 7. Line-versus-statistics disagreement protocol

When synchronized statistics appear to support an under but the total remains elevated or decays slowly:

- treat the disagreement as uncertainty, not automatic contrarian value;
- identify possible reasons for the resilient line, including pre-match attacking strength, repeated box access, game-state asymmetry, transition risk, strong attacking substitutes and likely tactical changes after the first goal;
- verify that the line and odds are current;
- require a fair-price explanation for opposing the market;
- withhold the wager when the model cannot explain why the market expectation is excessive.

Market information does not overrule match evidence, but it must be reconciled with it before execution.

## 8. Toluca vs Necaxa review — 2026-08-03

### Decision record

- Event: Toluca vs Necaxa
- Market: Under 2.5 live
- Entry state reviewed: 0-0 at approximately 27:19
- Offered odds: 1.91
- Recommended classification: LEAN — SMALL
- Recommended maximum stake: 0.125u
- Execution: not confirmed
- Official bankroll impact: 0u
- Shadow outcome at advised stake: -0.125u
- Process grade: Poor — unjustified promotion from WATCH

### Relevant line trajectory

- Around 4 minutes, 0-0: main total 3.0, Over 1.97 / Under 1.91.
- Around 27 minutes, 0-0: main total 2.5, Over 1.97 / Under 1.91.

Approximately 23 scoreless minutes removed only half a goal while the two-way prices remained almost unchanged. This was a strong warning that the live market retained an unusually high remaining-goal expectation.

### Entry-time statistics

At approximately 27:19:

- Toluca: 0.35 xG, 0.11 xGOT, 6 shots, 1 shot on target, 0 big chances, 4 inside-box shots and 11 opposition-box touches;
- Necaxa: 0.05 xG, 0.00 xGOT, 1 shot, 0 shots on target, 0 big chances and no opposition-box touches.

The verdict over-weighted low realized xGOT and zero big chances. Toluca’s repeated box access and sustained territorial pressure represented latent scoring risk, not proven structural suppression.

### What happened

- Toluca scored around 29 minutes.
- Necaxa equalized around 42 minutes.
- Toluca scored again at 45+5.
- Halftime score: Toluca 2-1 Necaxa.

The third goal made Under 2.5 a theoretical loss before halftime. Outcome alone does not determine process quality, but the pre-entry analysis had failed to account adequately for the likely post-first-goal opening of the match.

### Correct retrospective verdict

**NO BET — elevated and slowly decaying live total contradicted the apparent low realized chance quality.**

The under should not have been promoted without:

- an explicit fair-price estimate;
- reconciliation of the resilient total line;
- first-goal branch analysis;
- proof of structural rather than merely observed suppression;
- completed pitch and weather verification;
- an exact 2.5 versus 2.75 goal-cliff comparison.

## 9. Required live-total output

Every live-total recommendation must now include:

1. verdict: OFFICIAL BET, LEAN or NO BET;
2. exact score and minute;
3. current total and both-side odds;
4. previous reliable total snapshot and elapsed-time comparison;
5. interpretation of line decay or resilience;
6. cumulative and interval xG, xGOT, shots on target, big chances, inside-box shots and box touches for both teams;
7. observed-versus-structural suppression assessment;
8. first-goal branch analysis;
9. raw breakeven and no-vig market probability;
10. model probability estimate or range;
11. exact settlement and goal-count cliffs;
12. weather, pitch, cards, injuries and substitution status;
13. invalidation triggers;
14. execution status and stake cap.

If any mandatory component needed for the thesis is unavailable, do not issue an executable recommendation.

## 10. Performance and ledger treatment

This model update does not modify ledger.json.

The Toluca vs Necaxa Under 2.5 recommendation remains an unplaced lean unless confirmed execution is supplied. It has:

- no official bankroll impact;
- one additional shadow loss;
- theoretical P/L of -0.125u at the advised LEAN — SMALL stake.

Do not mix this advised-stake shadow result with prior standardized 0.25u shadow calculations without labeling the stake convention. Official placed performance remains unchanged at 3 wins, 0 losses and +0.34875u.