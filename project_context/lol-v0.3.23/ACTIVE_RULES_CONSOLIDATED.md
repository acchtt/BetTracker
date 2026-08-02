# LoL v0.3.23 Active Rules — Consolidated

LoL v0.3.23 supersedes v0.3.22 where conflicting. All stricter earlier bankroll, placement, probation, item, state-direction, expiry, handicap, moneyline, and series rules remain active.

## Fast verdict and exposure

- Verdict first.
- Minimum odds: 1.60.
- Standard probation stake: 0.25u = 250,000 VND.
- Maximum exposure: 0.25u per map.
- No correlated same-map add-ons.
- Official only after explicit placement confirmation.
- Duration Overs are not eligible for official wagers 8-10.
- If a map already has a placed wager, all other markets are `ANALYSIS ONLY — SAME-MAP EXPOSURE CAP`.

## Mandatory live market scan

Every synchronized snapshot must show:

1. moneyline;
2. kill handicap;
3. kill total;
4. duration.

If a market is absent or suspended, state `MARKET UNAVAILABLE/LOCKED`.

## Totals separation

Duration suppression is not kill suppression.

- Functional waveclear can delay towers and extend duration.
- The same extension can create another dragon, Baron, vision, inhibitor, or base-defense kill sequence.
- Never infer a kill Under only because a game projects long.

## Unresolved map inventory

For kill total and duration, record:

- structure depth and exposed lanes;
- dragon, soul, and Elder path;
- first and possible second Baron cycles;
- wave and vision exposure;
- functional damage, engage, frontline, disengage, and return-kill capacity.

When three or more categories remain unresolved, current kill pace cannot be extrapolated linearly.

## Kill-total projection

Display:

- current kills;
- exact line and odds;
- whole kills needed for Over / Under loss;
- conservative remaining sequence range;
- projected final-kill range and central estimate;
- line-specific verdict.

Normal planning ranges:

- objective contest: 4-6 kills;
- inhibitor/base defense: 3-5;
- catch/flank/side collapse: 1-3;
- chase/reset denial: 1-3.

Avoid double-counting one chain, but count separate future cycles separately.

## Variance uplift

Increase the upper projection when game time is normally 15:00-23:00, towers and dragons are near parity, gold is within roughly 2k, both teams have two functioning damage channels, and at least three map-inventory categories remain unresolved.

Add at least one additional objective or base-defense sequence to the upper conservative branch.

## Kill Under

For an official Under:

- use the upper conservative budget;
- require a minimum three-kill safety buffer;
- require four kills when the variance uplift is active unless a verified one-fight close removes a cycle;
- waveclear counts as kill suppression only when it has ended pressured interactions without creating another mandatory contest;
- reject when the Under depends on avoiding an entire plausible Baron, dragon, or base sequence.

## Kill Over

For an official Over:

- require two-sided conversion or sustained high velocity;
- both teams must retain item-qualified damage and access;
- at least two independent future exposure categories remain;
- central final-kill projection must clear the line by at least two;
- lower conservative branch may be no more than three below the line;
- no verified clean-close branch may materially suppress return kills.

## Multi-line selection

When multiple kill-total lines are concurrently available:

- calculate every line separately;
- treat two or more kills of extra protection as material;
- choose at most one formal recommendation;
- prefer the best safety-adjusted expected value;
- never replace line-specific analysis with a generic “Over direction” or “Under direction.”

## Duration projection

Display:

- current time and line;
- towers and exposed lanes;
- objective schedule;
- functional waveclear and safe access;
- fastest finish branch for both teams;
- conservative earliest finish;
- central finish range;
- extension branch.

At 15:00+ with 0-0 or nearly full tower depth, gold within roughly 1.5k, near-equal dragons, functional waveclear and damage, and no base access, include at least one additional objective cycle in the central duration range.

## Duration Under

Official only when:

- conservative earliest finish is at least two minutes before the line;
- central finish estimate is also before the line;
- current waves, structures, objectives, and items support the close;
- defender waveclear/disengage is nonfunctional;
- one won sequence can create the required base access without a full reset;
- no additional objective cycle is credibly required.

Less than a two-minute margin is at most `LEAN`. A central estimate at or beyond the line is `NO BET`.

## G2 vs SK Game 1 calibration

At 17:59: 5-5 kills, approximately +0.5k G2, 0-0 towers, 1-1 dragons, functional Viktor-Sivir and Anivia-Ziggs.

Correct v0.3.23 totals view:

- projected final kills: approximately 24-32;
- Under 28.5: no formal directional preference;
- central duration: approximately 38-43;
- Over 35: strong analysis-only direction.

Final: G2 19-11, 30 kills, 41:36.

## Probation

- completed: 7/10;
- record: 3-4;
- net: -451,750 VND / -0.45175u;
- wager 7: SK +9.5 kills @1.854, won +213,500 VND;
- wagers 8-10 remain.