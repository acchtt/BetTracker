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

- FK Tukums 2000 vs FC RFS, live RFS -1 at a displayed score of 0–1: the final score remained 0–1, but BK8 settled the wager as a loss rather than a push.

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