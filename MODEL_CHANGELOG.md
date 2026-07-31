# EdgeLog Model Changelog

This file records active betting-model rules, evidence, and approved changes. `ledger.json` remains the authoritative betting record.

Historical changelog entries through 2026-07-31 remain preserved in Git history. Those entries continue to apply unless a newer dated rule below explicitly supersedes them.

## Active operational documents

- League of Legends recommendations must follow `LOL_BETTING_PROCEDURE.md`, `MODEL_RULES_LOL_V0.3.8.md`, `MODEL_RULES_LOL_V0.3.7.md`, `MODEL_RULES_LOL_V0.3.6.md`, `STAKE_POLICY_V2.json`, and this changelog. Older LoL rules remain active where not superseded.
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

## v0.3.8 — 2026-08-01

### LoL champion-counter matrix and damage-delivery architecture veto

**Status:** Active immediately  
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

**Status:** Active where not superseded by v0.3.8  
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

**Status:** Active where not superseded by v0.3.7 or v0.3.8  
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
