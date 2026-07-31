# LoL Model Changelog Addendum

## v0.3.5 — 2026-07-31

### Team-strength calibration, structural handicap veto, macro-control gate, and price-only trigger ban

**Status:** Active evaluation rule  
**Detailed implementation:** `MODEL_RULES_LOL_V0.3.5.md`

## Reviewed sample

Seven confirmed esports wagers placed on 2026-07-31:

1. KT.C vs DNS.C Game 1 — DNS.C +4.5 kills at 1.806, 0.25u, loss.
2. KT.C vs DNS.C Game 2 — DNS.C +5.5 kills at 2.015, 0.25u, win.
3. KT.C vs DNS.C Game 3 — DNS.C moneyline at 2.254, 0.25u, loss.
4. BLG vs WE Game 2 — WE +6.5 kills at 1.816, 0.25u, loss.
5. BRO vs KRX Game 1 — KRX +7.5 kills at 2.132, 0.30u, loss.
6. BRO vs KRX Game 2 — Over 33 minutes at 1.720, 0.25u, win.
7. BRO vs KRX Game 3 — BRO moneyline at 1.943, 0.25u, loss.

Official daily esports result: 2 wins, 5 losses, -433,125 VND, -0.86625u on 1.80u staked, ROI -48.13%.

## Attribution split

The headline result concealed a major execution split.

### Synchronized or model-compliant wagers

- DNS.C +4.5 kills: -0.25u.
- DNS.C +5.5 kills: +0.25375u.
- BRO vs KRX Over 33 minutes: +0.18u.
- BRO Game 3 moneyline: -0.25u.

Result: 2-2, -33,125 VND, -0.06625u on 1.00u staked, ROI -6.625%.

### User-executed deviations

- DNS.C Game 3 moneyline: -0.25u after a material favorable price move without a freshly synchronized state.
- WE +6.5 kills: -0.25u after a material adverse price move without a freshly synchronized state.
- KRX +7.5 kills: -0.30u after a material price move, no fresh state, and a stake above the 0.25u cap.

Result: 0-3, -400,000 VND, -0.80u on 0.80u staked, ROI -100%.

This does not excuse the model-selection errors, but it shows that most of the daily drawdown came from expired or oversized executions.

## Market split

- Positive kill handicaps: 1-3, -273,125 VND, -0.54625u.
- Positive kill handicaps with synchronized execution only: 1-1, +1,875 VND, +0.00375u.
- Positive kill-handicap deviations: 0-2, -275,000 VND, -0.55u.
- Moneylines: 0-2, -250,000 VND, -0.50u.
- Duration totals: 1-0, +90,000 VND, +0.18u.

The evidence does not justify banning all positive kill handicaps. It does justify stronger structural-state and execution gates.

## What worked

### DNS.C +5.5 kills

DNS.C passed the engage-to-damage conversion test through Jarvan IV initiation, Ryze follow-up, and Lucian-Milio sustained damage. KT.C lacked a durable conventional frontline. DNS.C won the map and final kills 16-13.

### BRO vs KRX Over 33 minutes

The market was selected independently from the moneyline and kill markets. Anivia wave-clear and low structural progression with only one tower down provided two separate stall indicators. The accepted price improved slightly and the state remained synchronized.

## What failed

### DNS.C +4.5 kills

The model substituted setup quality for damage conversion. Skarner-Alistar initiation, Rumble zone control, and Sivir wave-clear did not create enough sustained damage into KT.C's frontline and long-fight output. This triggered v0.3.4.

### DNS.C Game 3 moneyline

The model over-weighted theoretical front-to-back composition and underweighted the player-strength and execution gap. The accepted price moved materially from 2.004 to 2.254 without a fresh state, so execution was also a deviation.

### WE +6.5 kills

The model over-weighted Malphite-Nautilus engage while BLG already held a 3.8k gold lead and 3-1 tower control. WE lacked proven live damage conversion and BLG had the cleaner close path. The accepted price also fell from 1.979 to 1.816 without a fresh state.

### KRX +7.5 kills

The model overestimated KRX's sustained damage and underweighted BRO's player-strength and lead-conversion edge. Jhin limited extended-fight output. The execution moved materially from 1.869 to 2.132, was not re-synchronized, and used 0.30u above the active cap.

### BRO Game 3 moneyline

The live trigger was based mainly on the price reaching 2.00 while the game remained 0-0 and structurally neutral. That was not positive evidence. KRX's Nocturne-Shen globals, Ryze movement, Sivir wave control, and cleaner objective coordination created a macro-control system that the model underweighted. KRX later controlled gold, towers, and objectives cleanly.

## Previous rule weakness

The model already required team-strength priors, damage conversion, state synchronization, and changed-line reassessment. In practice:

- team strength was stated but not decomposed consistently before every bet;
- current-series macro evidence was not weighted enough in deciding maps;
- neutral state plus a larger price was sometimes treated as a favorable trigger;
- positive handicaps did not have a sufficiently explicit gold-and-tower veto;
- global and semi-global compositions were evaluated mainly as teamfight drafts rather than map-control systems;
- execution rules were known but not enforced strictly enough after price changes.

## New rule

- Require a concise team-strength preview before every `OFFICIAL BET` or `LEAN`.
- Classify the team-strength gap as material, moderate, or near-even.
- Update the next-map prior using objective setup, tower conversion, side-lane response, vision, and lead conversion from the current series.
- Ban price-only live triggers: a threshold price requires favorable structural confirmation.
- Treat an unexplained adverse move of at least 0.10 in a neutral state as negative market information requiring reassessment.
- Apply a deciding-map global and macro-control gate.
- Add a positive kill-handicap structural veto when the favorite owns both a material gold lead and a two-tower or greater advantage.
- Require two live observations of practical damage conversion before an official positive handicap when the underdog is structurally behind.
- Enforce the 0.25u cap and fresh-state requirement without exception.
- Keep the two-stall-indicator duration rule unchanged.
- Continue separating market performance by execution-attribution tier.

## Expected benefit

Reduce bets driven by roster reputation, theoretical engage, larger displayed handicaps, or unexplained price movement. Improve deciding-map pricing and prevent structurally losing underdog handicaps from being mistaken for protection.

## Possible downside

The rules will create more `NO BET` decisions and may miss some profitable reversals before level six or the first objective. This is acceptable while the sample remains small and execution deviations are producing disproportionate losses.

## Review threshold

Review after the next 10 settled synchronized LoL wagers. Report team-strength gap, current-series macro adjustment, price-trigger type, global-control score, damage-conversion result, structural-veto result, execution tier, market, and net units.