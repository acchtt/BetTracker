# EdgeLog Model Changelog

This file records betting-model rules, evidence, and approved changes. `ledger.json` remains the authoritative betting record.

## Operating baseline

- 1 unit = 500,000 VND.
- A wager becomes official only after placement is confirmed.
- Minimum accepted odds: 1.60.
- Standard evaluation stake: 0.25u; maximum normally 0.5u.
- Prefer selectivity over action; `NO BET` is a valid model output.
- Reassess every changed line independently.
- Separate reporting by sport, league, market, prematch/live, and recommendation type.
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

Review after the next 10 official football live-total recommendations, with separate reporting for entries before minute 60, minutes 60–74, and minute 75 onward.

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
