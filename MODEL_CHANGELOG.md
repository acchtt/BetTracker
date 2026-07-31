# EdgeLog Model Changelog

This file records active betting-model rules, evidence, and approved changes. `ledger.json` remains the authoritative betting record.

Historical changelog entries through 2026-07-31 remain preserved in Git history. Those entries continue to apply unless a newer dated rule below explicitly supersedes them.

## Active operational documents

- League of Legends recommendations must follow `LOL_BETTING_PROCEDURE.md`, `MODEL_RULES_LOL_V0.3.9.md`, `MODEL_RULES_LOL_V0.3.8.md`, `MODEL_RULES_LOL_V0.3.7.md`, `MODEL_RULES_LOL_V0.3.6.md`, `STAKE_POLICY_V2.json`, this changelog, and the current review restrictions. Older LoL rules remain active where not superseded.
- The evidence for v0.3.9 is recorded in `reviews/LOL_TWO_DAY_REVIEW_2026-07-31_TO_2026-08-01.md`.
- Football recommendations must follow `FOOTBALL_BETTING_PROCEDURE.md`, the latest active football model rules, `STAKE_POLICY_V2.json`, and this changelog. Older football rules remain active where not superseded.
- When documents conflict, the newer dated rule controls.
- Every future material model change must receive both a detailed rule file and an entry in this changelog.

## Operating baseline — effective 2026-08-01 00:48 UTC+7

- **1 unit = 1,000,000 VND.**
- Standard evaluation stake: **0.25u = 250,000 VND**.
- Normal maximum stake: **0.5u = 500,000 VND**.
- Minimum accepted odds: **1.60**.
- A wager becomes official only after user confirmation of placement.
- Prefer selectivity over action; `NO BET` is a valid model output.
- Reassess every changed line independently.
- Record `unitValueVndAtPlacement` on every new ledger entry.
- Bets placed before the unit-policy change retain their original unit basis and VND amounts.
- Separate reporting by sport, league, market, pre-match/post-draft/live, and recommendation type.
- Do not use missed, unavailable, or unconfirmed wagers in performance results.

`STAKE_POLICY_V2.json` is authoritative for unit conversion.

---

## v0.3.9 — 2026-08-01

### LoL two-day drawdown controls, market probation, same-series lockout, and hard recommendation expiry

**Status:** Active immediately  
**Detailed implementation:** `MODEL_RULES_LOL_V0.3.9.md`  
**Evidence review:** `reviews/LOL_TWO_DAY_REVIEW_2026-07-31_TO_2026-08-01.md`

### Sport and markets affected

League of Legends post-draft, pre-game, and live moneylines, kill handicaps, kill totals, duration, objectives, and correlated map exposure.

### Triggering evidence

The review window contained 12 settled LoL wagers:

- record: 3 wins and 9 losses;
- actual stake: 2,525,000 VND;
- net result: -1,052,125 VND;
- actual-stake ROI: -41.67%;
- standardized model-stake result: approximately -1.56325u over 3.00u staked.

Market results were:

- positive underdog kill handicaps: 2-6, with repeated engage-to-damage, functional-damage, damage-delivery, champion-counter, structural-control, and execution-validity errors;
- moneylines: 0-3, with repeated team-reputation, theoretical-composition, and current-series evidence errors;
- duration: 1-0, with the winning pick supported by two independent stall indicators and synchronized execution.

The Shifters Game 2 and Game 3 sequence also demonstrated same-series repetition: a newly identified damage-delivery error did not prevent another positive handicap on the same team in the next map.

### Previous rule

v0.3.7 and v0.3.8 strengthened functional-damage and champion-counter analysis. The model could still issue draft-based official positive handicaps, retain reputation-based moneylines from neutral states, repeat the same market thesis in the next map of a series, and treat a stale recommendation as broadly acceptable when the price remained above 1.60.

### New rule

- Start a 10-settled-wager LoL probation period.
- During probation, cap total exposure at 0.25u per map and prohibit correlated add-ons.
- Cap `OFFICIAL BET` confidence at 6/10 during probation.
- Positive underdog kill handicaps may not be `OFFICIAL BET` post-draft or pre-game; the maximum is `LEAN — 0u watch`.
- Live positive-handicap promotion requires two independent structured-fight conversions, two deliverable damage sources, demonstrated space creation, a cleared champion-counter gate, acceptable structural state, compatible objective timing, and synchronized execution.
- Apply a structural-control veto when the favorite holds at least two material flags such as percentage gold lead, tower control, soul-point setup, Baron/Elder/inhibitor pressure, major item advantage, map compression, or repeated one-sided conversion.
- Apply a same-series lockout after a draft, damage-delivery, champion-counter, team-strength, or macro model error. The same team and market thesis cannot become official in the next map without two new live conversions and independent confirmation.
- Moneylines require two independent current-map confirmations. A neutral early state, attractive price, or generic reputation edge is insufficient.
- Re-estimate the pre-series prior after every map. By a deciding map, current-series execution and the completed draft must receive at least equal consideration to generic reputation.
- Recommendation expiry is a hard veto after an odds move of at least 0.10, an implied-probability move of at least three percentage points, or any material game-state change.
- After expiry, the old recommendation is not actionable. A wager can be recorded after user confirmation but is not model-approved at execution without a fresh synchronized reassessment.
- Retain the two-stall-indicator duration framework and add a fast-close veto for Baron/Elder, soul plus siege, exposed inhibitors, synchronized waves, major item advantage, or repeated uncontested setup.
- Kill totals require both fight-frequency evidence and evidence that both teams can return meaningful damage.
- Every actionable assessment must include series-prior update, counter matrix, functional damage, space creation, structured-fight conversion count, structural flags, objective timing, same-series lockout, expiry status, and market-specific veto status.

### Expected benefit

Reduce repeated wide-underdog handicap errors, prevent reputation-based moneylines without current-map confirmation, stop stale recommendations from being treated as approved executions, and prevent same-series repetition of a newly identified model error.

### Possible downside

The model will pass more early opportunities, may receive worse prices after waiting for live evidence, and may miss legitimate next-map draft corrections. The stricter execution contract will also classify more late placements as unsynchronized. These costs are acceptable during probation.

### Review threshold

Review after the next 10 settled, synchronized, model-approved LoL wagers. Do not count stale executions, user-only picks, unconfirmed bets, or wagers placed after recommendation expiry toward validation.

---

## v0.3.8 — 2026-08-01

### LoL champion-counter matrix and damage-delivery architecture veto

**Status:** Active where not superseded by v0.3.9  
**Detailed implementation:** `MODEL_RULES_LOL_V0.3.8.md`

### Sport and markets affected

League of Legends pre-draft, post-draft, and live moneylines, kill handicaps, kill totals, duration, objective, and tower markets.

### Triggering evidence

Movistar KOI vs Shifters Game 3: the model identified Varus, Ryze, and Kalista as multiple damage sources and recommended SHFT +10.5 kills, but failed to price the direct champion interactions that prevented those sources from delivering damage.

Key missed counters included:

- Taliyah anti-dash control against Wukong access and Kalista movement;
- Trundle resistance theft against Wukong as SHFT's only meaningful frontline;
- Nautilus lockdown, Trundle pillar, Rumble zoning, and Taliyah control compressing Kalista and Ryze uptime;
- Sivir spell shield reducing the reliability of Thresh or Varus initiating a clean fight.

### Previous rule

v0.3.7 required functional damage, target access, frontline kill speed, carry uptime, and objective-timer checks. It did not force a complete champion-by-champion counter matrix, allowing nominally functional carries to be counted even when multiple opposing mechanics attacked the same delivery route.

### New rule

- Build a mandatory champion-interaction matrix for every completed draft.
- Separate lane counters, direct mechanic counters, teamfight architecture counters, item-timing counters, range/access counters, and objective-geometry counters.
- Explain the counter mechanism rather than using generic counter labels.
- Apply a counter-cluster downgrade when two or more independent tools attack the same engage, frontline, or carry-delivery system.
- Activate a hard `NO BET` veto for positive underdog kill handicaps when the underdog lacks durable space creation, must enter the opponent's strongest control range, faces at least two direct counters on the same delivery route, and has not shown two independent fight conversions.
- Wide lines, attractive prices, nominal multi-carry drafts, and theoretical scaling cannot override the veto.
- Reprice counter severity by patch, items, levels, summoner spells, side, terrain, objective timing, player proficiency, gold distribution, and observed interactions.
- Every actionable assessment must state key lane counters, direct mechanic counters, counter clusters, primary engage path, primary damage-delivery path, alternative win condition, current severity, observed evidence, and veto status.
- Missing counter information requires `NO BET`.

### Expected benefit

Prevent the model from mistaking theoretical damage for deliverable damage and improve draft accuracy when anti-dash, resistance manipulation, point-and-click lockdown, spell shields, terrain control, range, or zoning directly counter a composition's core mechanism.

### Possible downside

The matrix adds time to live analysis and may over-penalize a draft when player execution, role swaps, or unexpected itemization neutralize the theoretical counter.

### Review threshold

Review after the next 10 settled synchronized LoL wagers. Track identified counters, counter type and severity, counter clusters, whether the countered mechanism functioned, veto status, closing-line quality, final kill margin, map result, and net VND/units.

---

## v0.3.7 — 2026-08-01

### LoL functional-damage gate and repeated positive-handicap veto

**Status:** Active where not superseded by v0.3.8 or v0.3.9  
**Detailed implementation:** `MODEL_RULES_LOL_V0.3.7.md`

### Sport and markets affected

League of Legends live positive kill handicaps, comeback moneylines, kill totals, duration, and objective markets.

### Triggering evidence

- Team Heretics vs Vitality Game 2: the model treated layered engage and utility as adequate damage conversion despite insufficient sustained damage and frontline kill speed against a stronger multi-carry composition.
- Movistar KOI vs Shifters Game 2: SHFT +7.5 kills at 1.927 lost. The model called Naafiri, Orianna, and Ezreal three credible damage sources without verifying current item readiness, first-target access, frontline kill speed, carry uptime, or the forced soul-point timer.
- The same process error occurred twice, so a hard veto is required rather than another qualitative reminder.

### Previous rule

The model distinguished engage from damage and asked for real conversion, but nominal champion roles and future scaling could still be counted as current damage. Wide positive handicaps could therefore override a composition-level failure.

### New rule

- Replace nominal damage-source count with current **functional damage** classification.
- Count a source only when it passes target access, frontline kill speed, carry uptime, item readiness, damage-profile, and survival checks.
- Classify every source as `functional`, `conditional`, `future-only`, or `non-damage utility`.
- An official positive kill handicap normally requires at least two functional current damage sources, including reliable sustained damage or demonstrated frontline kill speed.
- Activate a hard `NO BET` veto when the underdog has zero or one functional current source, the opponent has at least two reliable threats plus engage/peel/access denial, and a forced major objective arrives before the underdog's next meaningful breakpoint.
- Lines from +7.5 through +10.5 cannot override the veto through price or width alone.
- Clear the veto only after two independent observed damage conversions.
- Engage attempts, isolated crowd control, harmless poke, tower trades, and one cleanup kill do not count as conversion.
- Compare the next forced objective timer with item timing; soul point and Baron pressure downgrade theoretical future scaling.
- Every positive live kill-handicap assessment must state functional sources, conditional/future-only sources, first reachable targets, frontline kill speed, carry uptime/protection, objective timing, observed conversion count, and veto status.
- Missing information requires `NO BET`.

### Expected benefit

Prevent apparently protected underdog kill handicaps when the underdog cannot return meaningful damage in forced fights. Improve distinction between engage, utility, future scaling, poke, conditional burst, and current sustained conversion.

### Possible downside

The model will pass more wide underdog handicaps and may miss cases where a composition unexpectedly reaches its item window or converts isolated picks.

### Review threshold

Review after the next 10 settled synchronized LoL wagers. Track functional source count, observed conversion count, objective timer versus item timing, final kill margin, closing-line quality, and net VND/units.

---

## v0.3.6 — 2026-08-01

### LoL live comeback, normalized late-game gold, and unit-policy integration

**Status:** Active where not superseded by v0.3.7, v0.3.8, or v0.3.9  
**Detailed implementation:** `MODEL_RULES_LOL_V0.3.6.md`

- Normalize gold leads after 25:00; under 3% is near-even unless tied to a decisive breakpoint.
- Require two independent confirmations for live comeback moneylines.
- Discount champion-expected structures such as an isolated Ziggs first tower.
- Reprice scaling compositions at current item windows.
- Let repeated current-map macro execution override stale pregame reputation.
- Prefer protected markets when evidence supports competitiveness more strongly than outright victory.
- Prioritize Baron, Elder, soul, inhibitor access, map compression, vision, waves, and item breakpoints over small late-game raw gold gaps.

### Triggering evidence

Movistar KOI vs Shifters Game 1: the model over-weighted MKOI's pregame reputation and an expected Ziggs first tower while under-weighting Shifters' objective control, current-map macro, and stronger extended-fight composition.

### Review threshold

Review after the next 10 settled synchronized LoL wagers.

---

## Change-control requirement

Every future change must record:

1. Date and model version.
2. Sport and markets affected.
3. Triggering evidence.
4. Previous rule.
5. New rule.
6. Expected benefit and possible downside.
7. Review threshold.
