# MODEL RULES — FOOTBALL v0.2.28

Effective: 2026-08-04

This version supplements v0.2.27 and all active football procedures. Existing bankroll, stake, minimum-odds, penalty-xG, execution, settlement and ledger controls remain unchanged.

## 1. Mandatory assessment-period line

Every football match-analysis message must include an **Assessment period** line immediately below the opening verdict or status line.

Required format:

> **Assessment period:** [match phase] — [quality classification]

Examples:

- **Assessment period:** Pre-match — baseline only
- **Assessment period:** 0'–12' — early evidence, normally no execution
- **Assessment period:** 20'–35' — primary recommendation window
- **Assessment period:** Halftime–60' — tactical repricing window
- **Assessment period:** 65'–78' — selective late window
- **Assessment period:** 80'+ — high-variance late window
- **Assessment period:** Post-goal reset — previous price invalid

This field is mandatory for LEAN, NO BET, OFFICIAL BET, WATCH, settlement-monitoring and reassessment messages concerning a football match.

## 2. Assessment-period classifications

### Pre-match — baseline only

Use for fixture verification, lineups, team priors, league baseline, weather, pitch and opening prices.

A pre-match recommendation can be made only when the lineup, market and fair-price edge are sufficiently robust. Otherwise retain NO BET and identify the first intended live reassessment window.

### 0'–12' — early evidence, normally no execution

This period is mainly for confirming shape, pressing plan, territorial control and whether the expected tactical matchup is appearing.

Do not treat a neutral score, possession edge or one isolated chance as sufficient live confirmation. Execution requires exceptional and independently measurable evidence.

### 13'–19' — developing evidence

One synchronized snapshot may identify a direction, but the normal verdict remains NO BET or WATCH until a second comparable snapshot is available.

### 20'–35' — primary recommendation window

This is the preferred general window for full-match totals and Asian handicaps because it normally provides:

- two synchronized snapshots;
- meaningful xGOT, shots-on-target, big-chance and box-entry evidence;
- enough time for the edge to resolve;
- less price compression than later markets.

A candidate still must satisfy all edge, settlement and execution gates.

### 36'–halftime — compressed first-half window

Use more selectively because the remaining first-half horizon is short and halftime tactical changes may immediately alter the state.

Prefer full-match markets to brittle first-half markets unless the settlement protection is clearly superior.

### Halftime–60' — tactical repricing window

This is the preferred period for:

- remaining-match handicaps;
- second-half markets;
- correcting a misleading halftime score;
- pricing confirmed substitutions and formation changes.

Cumulative first-half dominance alone is insufficient. Review penalty-adjusted chance creation, halftime substitutions, bench quality and, when material, an early second-half synchronized snapshot.

### 61'–64' — transition window

Treat as a bridge between the tactical and late phases. Require clear continuing pressure and exact time-sensitive pricing.

### 65'–78' — selective late window

Suitable only for strong, protected or event-driven opportunities such as:

- late unders with whole-goal or quarter-line protection;
- a side exploiting a verified red-card regime;
- positive handicaps when the opponent's attacking route has disappeared;
- a late over supported by sustained recent chance quality and stoppage-time allowance.

Cumulative match statistics are secondary to the most recent synchronized interval.

### 79'–80' — late transition

Apply the same standards as 80'+ unless the market remains unusually well protected.

### 80'+ — high-variance late window

Default to NO BET unless the edge is exceptional and settlement protection is strong.

Explicitly reserve for:

- stoppage time;
- substitutions and injuries;
- desperate chasing;
- fatigue and goalkeeper-error risk;
- red-card and counterattack effects.

There is little recovery time if the read is wrong.

## 3. Event-reset classification

Any goal, penalty, red card, second yellow, major injury, substitution or tactical change invalidates the previous assessment period and price.

The next message must state one of:

- **Assessment period:** Post-goal reset
- **Assessment period:** Post-penalty reset
- **Assessment period:** Post-red-card reset
- **Assessment period:** Post-substitution reset
- **Assessment period:** Post-injury reset

Do not return to the normal minute-band label until a fresh synchronized post-event state has been collected.

## 4. Period quality must affect the verdict

The assessment-period label is not decorative. It must influence the recommendation threshold.

- Primary window: normal strict 0.25u promotion threshold.
- Tactical window: require tactical and substitution verification.
- Selective late window: require stronger recent-interval evidence and settlement protection.
- Early or high-variance window: default NO BET unless exceptional evidence is present.
- Post-event reset: no executable recommendation from pre-event evidence.

A weak edge must not be promoted merely because the match is in a preferred period, and a strong-looking cumulative profile must not override an unsuitable or stale period.

## 5. Message template

Every football analysis should begin in this order:

1. **LEAN**, **NO BET** or **OFFICIAL BET** verdict;
2. **Assessment period** line;
3. score, exact minute and current regime;
4. synchronized evidence and interval changes;
5. price, fair range and settlement branches;
6. execution conditions or reason for rejection.

Example:

> **NO BET — 27:10, Team A 0-0 Team B.**  
> **Assessment period:** 20'–35' — primary recommendation window.  
> Two synchronized snapshots are available, but the offered price remains inside the fair-value uncertainty range.

## 6. Existing controls unchanged

All previous controls remain active, including:

- 1u = 1,000,000 VND;
- minimum accepted odds = 1.70;
- every executable LEAN uses exactly 0.25u;
- normal official football stake cap = 0.25u;
- two synchronized snapshots normally required;
- fixed penalty value = 0.79 xG;
- sequence-adjusted chance quality;
- league-relative total calibration;
- exact settlement and goal-cliff analysis;
- every material event or price change requires independent repricing;
- a wager is official only after confirmed placement;
- `ledger.json` remains authoritative.