# Active LoL Betting Rules — Consolidated v0.3.21

## Status and bankroll

- Active model: **LoL v0.3.21**
- 1u = **1,000,000 VND**
- Standard stake: **0.25u = 250,000 VND**
- Maximum probation exposure: **0.25u per map**
- Minimum accepted odds: **1.60**
- No correlated same-map add-ons during probation.
- Official only after explicit user placement confirmation.
- Probation remains **6/10, 2-4, -665,250 VND / -0.66525u**.
- Wager 7 remains unplaced.

## Verdict taxonomy

Use only:

- `OFFICIAL BET`
- `LEAN`
- `LEAN — REPAIRED WATCH`
- `LEAN — FAVORITE MARGIN`
- `WATCH ONLY`
- `WATCH ONLY — FAVORITE MARGIN`
- `NO BET`

Only exact `LEAN` verdicts enter the formal lean record.

## Existing controls retained

Retain v0.3.20 state-direction verification, moneyline objective-conflict gate, series -1.5 expiry, positive-underdog anti-line-chasing veto, tiered repair, item timing, kill-total gates, expiry rules, and probation restrictions.

## Structural compression

Structural compression exists when a leading team converts economy into map access while the trailing team avoids fights and loses farm, towers, neutral setup, or normal reset paths.

Low current kill pace can become delayed violence when Baron, inhibitors, and base defense later force clustered fights.

## Grub conversion

Three or more Grubs remain soft evidence until converted. Upgrade them to hard structural acceleration only after first tower, a two-tower lead, repeated plate/tower conversion, or established lane access.

Count converted Grubs and the resulting tower state as one structural cluster.

## Favorite negative kill-handicap calculation

Always state:

1. current kill margin;
2. final margin required;
3. additional future net kills required;
4. remaining forced-fight inventory;
5. projected cascade range plus a two-kill safety buffer.

A favorite leading by three at -10.5 requires eight additional future net kills.

## Favorite-margin watch gate

`WATCH ONLY — FAVORITE MARGIN` requires normally:

- 15:00-24:00;
- at least ~4k gold lead;
- one converted tower plus hard structural acceleration, or a two-tower lead;
- distributed economy across at least two functioning conversion channels;
- no post-reset recovery by the trailing team;
- at least two mandatory late sequences remaining;
- no more than nine additional future net kills required;
- odds at least 1.60.

## Favorite-margin lean gate

`LEAN — FAVORITE MARGIN` requires all:

- at least ~5k gold, or ~4k with superior item distribution and hard acceleration;
- at least two towers, normally three towers if eight or more additional net kills are required;
- at least two item-qualified favorite damage/engage/follow-up channels;
- materially behind or unproven trailing carries;
- trailing-team fight avoidance while structure or economy continues to worsen;
- at least two mandatory Baron, dragon/soul, inhibitor, or base sequences;
- projected favorite-controlled cascade covers the required future net kills plus two;
- no credible waveclear, split-map, protected-carry, or trade stabilization path.

Price floors:

- required future net kills <=8: target 1.80, hard 1.70;
- required future net kills =9: target 1.85, hard 1.75;
- required future net kills >=10: normally `NO BET` during probation.

Choose at most one favorite-margin line per state and prefer the smallest line meeting the target floor.

## Fight-avoidance inversion

### Stabilizing avoidance

Supports an Under or positive handicap only if the trailing team preserves structures, maintains waveclear/farm, trades resources, reaches items without widening the deficit, and retains protected damage or disengage.

### Compressive avoidance

Supports favorite margin expansion and opposes an Under when gold grows while kills stay flat, tower deficit expands, neutral setup is conceded, carries lose farm, and future base fights become mandatory.

Always identify which type is present.

## Kill-Under delayed-violence veto

No formal Under lean when:

- after 15:00;
- leader has ~4k plus a two-tower lead or equivalent hard acceleration;
- trailing team avoids fights without stabilizing;
- at least two mandatory late sequences remain;
- upper conservative fight budget comes within three kills of the Under headroom.

Budget structurally compressed games by sequence:

- neutral setup/contest: 2-5 kills;
- first inhibitor/base defense: 3-6;
- repeated base defense/end attempt: 3-6;
- catch/reset denial: 1-3.

Avoid double-counting, but test the upper plausible cascade. Low mid-game pace alone is not Under evidence.

## Probation treatment

The new favorite-margin framework is lean-only for wagers 7-10 unless existing official gates independently add a post-reset fight conversion, maintained structural control, confirmed decision-critical items, target-floor price, and exposure compliance.

Duration Overs remain ineligible for official wagers 7-10.

## Fast output

Verdict first. For favorite-margin analysis, include current margin, required future net kills, structural-compression evidence, forced-fight inventory, target floor, hard floor, and `not placed`.