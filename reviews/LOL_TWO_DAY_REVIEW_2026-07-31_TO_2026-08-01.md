# League of Legends Two-Day Review

**Review window:** 2026-07-31 through 2026-08-01 UTC+7  
**Status:** Completed after settlement of Movistar KOI vs Shifters Game 3  
**Authoritative results source:** `ledger.json`  
**Purpose:** Separate outcome variance from repeated model-process failures and define the evidence for LoL model v0.3.9.

## 1. Settled performance

Twelve confirmed LoL wagers settled during the review window.

- Record: **3 wins, 9 losses**.
- Total actual stake: **2,525,000 VND**.
- Net actual profit/loss: **-1,052,125 VND**.
- Actual-stake ROI: **-41.67%**.
- Standardized at the model-recommended stake for each selection: approximately **-1.56325u over 3.00u staked**, or **-52.11% ROI**.

Because the unit convention changed during the review window, VND is the authoritative combined currency measure. Historical wagers retain the unit value in force when placed.

## 2. Results by market

### Positive underdog kill handicaps

- Record: **2-6**.
- Actual net profit/loss: **-392,125 VND**.
- Standardized model-stake result: approximately **-0.99325u over 2.00u**, or **-49.66% ROI**.

Wins:

1. DN SOOPers Challengers +5.5 kills vs KT Rolster Challengers Game 2.
2. Team Heretics +7.5 kills vs Team Vitality Game 1.

Losses:

1. DN SOOPers Challengers +4.5 kills vs KT Rolster Challengers Game 1.
2. Team WE +6.5 kills vs Bilibili Gaming Game 2.
3. Kiwoom DRX +7.5 kills vs HANJIN BRION Game 1.
4. Team Heretics +7.5 kills vs Team Vitality Game 2.
5. Shifters +7.5 kills vs Movistar KOI Game 2.
6. Shifters +10.5 kills vs Movistar KOI Game 3.

The two wins shared positive structural features: aligned engage-to-damage conversion, at least two usable damage paths, and an opponent without overwhelming frontline or counter architecture. The six losses repeatedly involved one or more of the following: engage without damage, nominal damage without delivery, poor frontline kill speed, stronger-opponent structural control, champion-counter clusters, or execution after a material price move without fresh state synchronization.

### Moneylines

- Record: **0-3**.
- Actual net profit/loss: **-750,000 VND**.

Losses:

1. DN SOOPers Challengers moneyline vs KT Rolster Challengers Game 3.
2. HANJIN BRION moneyline vs Kiwoom DRX Game 3.
3. Movistar KOI moneyline vs Shifters Game 1.

The common error was not random finishing variance. The model repeatedly overweighted generic team strength or theoretical composition shape while underweighting player execution, coordinated map systems, current-series macro evidence, objective control, and composition-specific counters.

### Duration

- Record: **1-0**.
- Actual net profit/loss: **+90,000 VND**.

The winning Over 33 minutes in HANJIN BRION vs Kiwoom DRX Game 2 followed the intended process: two independent stall indicators, close structural state, strong waveclear, limited tower progression, and synchronized execution. One win is not sufficient to validate the entire duration model, but the process was materially cleaner than the recent kill-handicap and moneyline process.

## 3. What the wins actually support

The wins do not justify broad confidence in positive underdog handicaps.

They support narrower propositions:

- Engage is useful only when damage arrives on time and can remain active after the initial control chain.
- A positive kill handicap can be viable when the underdog has two deliverable damage sources, credible space creation, and an opponent that cannot force one-sided front-to-back fights.
- Duration overs can be considered when at least two independent stall mechanisms exist and no immediate close trigger is present.
- Winning oversized wagers must not influence stake calibration. The Team Heretics Game 1 win was selected correctly, but the actual 1.0u stake exceeded the model recommendation and must not be used to justify higher exposure.

## 4. What the losses establish

The review contains repeated evidence for process changes, not merely a poor short-term record.

### 4.1 Wide handicap illusion

Lines such as +7.5, +10.5, or wider were repeatedly treated as protection by themselves. A wide line does not protect a team that cannot return damage in structured fights.

### 4.2 Engage-to-damage confusion

Skarner, Alistar, Jarvan IV, Galio, Shen, Nautilus, and similar setup tools were repeatedly credited as evidence of kill trading. Setup does not qualify unless the follow-up damage is available, can reach the first target, and survives long enough to continue dealing damage.

### 4.3 Nominal damage versus deliverable damage

Counting champion roles or theoretical carry labels was insufficient. Shifters Game 2 and Game 3 showed that damage can exist on paper while being suppressed by item timing, weak space creation, frontline vulnerability, anti-dash control, point-and-click lockdown, zoning, spell shields, and objective geometry.

### 4.4 Team reputation persistence

The model did not decay pre-series priors quickly enough after observing superior opponent macro or execution. Neutral early states were incorrectly treated as confirmation for the nominally stronger team.

### 4.5 Material price moves were not enforced as expiries

Several wagers were placed after odds moved by at least 0.10 or at least three implied-probability points without a new synchronized snapshot. The model recorded the rule but did not operationally veto the stale recommendation.

### 4.6 Same-series error repetition

After a composition or damage-delivery failure appeared in one map, the model remained willing to recommend a similar positive handicap for the same team in the following map. The Shifters Game 2 and Game 3 sequence is the clearest example.

## 5. Model response

The evidence supports a temporary market-specific probation rather than a global stake increase or a broad abandonment of all LoL markets.

LoL model v0.3.9 therefore introduces:

1. A ten-settled-wager probation period.
2. No post-draft or pre-game `OFFICIAL BET` on positive underdog kill handicaps during probation.
3. Live promotion only after two independent structured-fight conversions and a clear champion-counter and damage-delivery gate.
4. A same-series lockout after a draft or damage-delivery model error.
5. A hard stale-recommendation expiry after material odds movement or relevant state change.
6. A two-confirmation requirement for moneylines based on current-map evidence rather than reputation.
7. A 0.25u per-map exposure cap during probation with no correlated add-ons.
8. Retention of the two-stall-indicator duration framework, with an additional fast-close veto.

## 6. Review standard going forward

Review v0.3.9 after the next 10 settled, synchronized, model-approved LoL wagers.

Track separately:

- market and timing;
- recommendation type;
- team-strength prior and how it changed during the series;
- champion-counter matrix;
- functional damage and damage-delivery classification;
- space creation and frontline kill speed;
- observed structured-fight conversions;
- structural control flags;
- price movement between recommendation and execution;
- whether the recommendation expired before placement;
- closing-line quality when available;
- result, VND profit/loss, units, and standardized model-stake result.

No rule should be relaxed solely because one wide handicap wins during the probation period.