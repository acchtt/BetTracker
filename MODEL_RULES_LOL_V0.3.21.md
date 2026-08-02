# League of Legends Model Rules v0.3.21

**Status:** Active immediately  
**Effective date:** 2026-08-02 19:58 UTC+7  
**Purpose:** Recognize favorite kill-margin expansion created by distributed economy, Grub-to-tower conversion, structural compression, and delayed forced fights; prevent false kill-Under confidence when a trailing team avoids mid-game fights while losing map access.

This version supersedes v0.3.20 where conflicting. All stricter bankroll, placement-confirmation, probation, item-timing, state-direction, anti-line-chasing, expiry, moneyline, series-spread, and official-promotion rules remain active.

## 1. Triggering review

KT Rolster vs Hanwha Life Esports Game 2 exposed a linked handicap and kill-total calibration failure.

- At 18:22, HLE led 5-2 kills, 33.7k-29.1k gold, 1-0 towers, and had converted three Grubs into structural pressure. HLE -10.5 was available at 1.728. The model returned `NO BET` and issued `LEAN — Under 25.5 kills @ 1.649`.
- At 20:32, HLE still led 5-2 kills but had expanded to 38.4k-33.0k gold and 3-0 towers. HLE -10.5 was available at 1.815. The model again returned `NO BET` because the current kill lead was only three.
- KT were visibly avoiding fights. The model treated this primarily as kill suppression rather than as loss of map access followed by compressed Baron, inhibitor, and base-defense violence.
- Final result: HLE won 19-7, a 12-kill margin and 26 total kills.
- HLE -10.5 and -11.5 won. HLE -13.5 lost. Under 25.5 lost by one kill.

The correction is not to back every large favorite handicap. It is to recognize the specific middle band where structural dominance makes a future net kill expansion of roughly eight or nine plausible, while still rejecting an excessive line requiring ten or more additional net kills.

## 2. Structural-compression definition

**Structural compression** exists when the leading team converts economy into map access while the trailing team avoids fights and loses the ability to farm, contest, or reset normally.

Required evidence includes:

- a meaningful gold lead;
- converted tower or lane-access advantage;
- reliable engage, global access, or terrain control;
- at least two functioning damage or conversion channels;
- a trailing team that is conceding structures or neutral setup rather than restoring parity.

Structural compression can produce **delayed violence**: low mid-game kill pace followed by several forced contests, catches, and base-defense deaths in a short period.

Do not extrapolate current kill pace linearly when structures and gold are deteriorating rapidly.

## 3. Grub conversion weighting

Void Grubs remain soft evidence before conversion.

Upgrade three or more Grubs to **hard structural acceleration** only after at least one of the following is visible:

- first tower secured with Grub-assisted pressure;
- a two-tower lead or repeated plate/tower conversion;
- established lane access that forces the opponent to concede waves or neutral setup.

Once upgraded, count the Grubs together with the tower state as one structural-conversion cluster, not as separate independent confirmations.

## 4. Favorite negative kill-handicap screening

For a favorite negative kill handicap, calculate:

1. current kill margin;
2. final margin required to cover;
3. additional future net kills required;
4. expected net kills from the remaining forced-fight inventory;
5. a two-kill safety buffer.

Example: a favorite leading by three at -10.5 must gain eight additional net kills to cover.

Do not reject the market merely because the current kill lead is small. The relevant question is whether structural compression makes the required future net expansion realistic.

## 5. `WATCH ONLY — FAVORITE MARGIN` gate

A favorite negative handicap may be `WATCH ONLY — FAVORITE MARGIN` when all are true:

- game time is normally 15:00-24:00;
- favorite gold lead is at least roughly 4,000;
- favorite has at least one converted tower plus hard structural acceleration, or a two-tower lead;
- favorite has at least two functioning damage or conversion channels with distributed economy;
- trailing team has not shown a post-reset structured-fight recovery;
- at least two forced-fight sequences remain, such as Baron, dragon/soul, inhibitor, or base defense;
- the line requires no more than nine additional future net kills;
- offered odds meet the global 1.60 minimum.

This status does not enter the formal lean record.

## 6. `LEAN — FAVORITE MARGIN` gate

A favorite negative kill handicap may be a formal lean only when every condition below is met:

1. favorite gold lead is at least roughly 5,000, or at least 4,000 with superior item distribution and hard structural acceleration;
2. favorite leads by at least two towers, normally three towers for a line requiring eight or more additional future net kills;
3. the lead is distributed across at least two item-qualified damage, engage, or follow-up roles rather than concentrated on one low-reliability champion;
4. the trailing primary carries are materially behind, unproven in structured fights, or unable to access the favorite's carries reliably;
5. the trailing team is avoiding fights while its gold, tower, or wave-access position continues to deteriorate;
6. at least two mandatory forced-fight or base-defense sequences remain;
7. the conservative favorite-controlled cascade projects the required additional net kills plus a two-kill safety buffer;
8. no credible waveclear, split-map, protected-carry, or objective-trade stabilization path invalidates the cascade;
9. odds meet the line-specific floor below.

Use the exact verdict:

`LEAN — FAVORITE MARGIN — [market] @ [odds] — 0u watch, not placed`

### Price floors

- If the line requires at most eight additional future net kills: target floor 1.80, hard floor 1.70.
- If the line requires nine additional future net kills: target floor 1.85, hard floor 1.75.
- If the line requires ten or more additional future net kills: normally `NO BET` during probation.

## 7. Favorite margin line selection

When multiple negative handicaps are available:

- choose at most one formal favorite-margin line per synchronized state;
- prefer the smallest line that meets the target floor;
- do not move from -10.5 to -13.5 merely for a modest price improvement;
- reject a line requiring ten or more additional future net kills unless the game is already in a near-terminal multi-inhibitor state with a demonstrated repeated-catch pattern.

The KT-HLE correction is:

- HLE -10.5 @ 1.728 at 18:22: `WATCH ONLY — FAVORITE MARGIN`; price below target and only one tower converted.
- HLE -10.5 @ 1.815 at 20:32: `LEAN — FAVORITE MARGIN`; +5.4k gold, 3-0 towers, distributed HLE economy, KT fight avoidance, and multiple forced late sequences supported the eight-net-kill requirement.
- HLE -13.5 @ 1.874: `NO BET`; the required future net expansion was too large. It lost.

## 8. Fight-avoidance inversion

When the trailing team avoids fights, determine whether the avoidance is stabilizing or compressive.

### Stabilizing avoidance

Positive for an Under or positive handicap only when the trailing team:

- preserves tower parity or loses structures slowly;
- maintains waveclear and safe farm access;
- trades objectives or side-lane resources;
- reaches item breakpoints without the gold deficit materially widening;
- retains a protected carry or reliable disengage path.

### Compressive avoidance

Positive for favorite margin expansion and negative for an Under when:

- gold deficit expands while kills remain flat;
- tower deficit grows by two or more;
- the trailing team cedes Baron or dragon setup without compensation;
- carries lose farm or remain materially behind;
- future fights become mandatory at inhibitor or base terrain.

State explicitly which form of avoidance is present. Do not describe all fight avoidance as kill suppression.

## 9. Kill-Under delayed-violence veto

A formal kill-Under lean is prohibited when all are present:

- game time is at least 15:00;
- leading team has at least roughly 4,000 gold and a two-tower lead, or equivalent hard structural acceleration;
- trailing team is avoiding fights but not stabilizing;
- at least two mandatory Baron, dragon/soul, inhibitor, or base-defense sequences remain;
- the upper end of the conservative remaining fight budget reaches within three kills of the Under headroom.

For structurally compressed games, budget the remaining sequences separately rather than using average kill pace:

- major neutral setup or contest: normally 2-5 kills;
- first inhibitor or base-defense sequence: normally 3-6 kills;
- repeated base defense or ending attempt: normally 3-6 kills;
- additional catch or reset denial: normally 1-3 kills.

Use composition and state to avoid double-counting, but include the upper plausible cascade. If the Under survives only the median projection and not the upper conservative projection plus the three-kill safety buffer, return `NO BET`.

The KT-HLE Under 25.5 at 18:22 should therefore have been `NO BET`, not `LEAN`.

## 10. Official-bet treatment during probation

The new favorite-margin framework is lean-only for the remainder of probation wagers 7-10 unless the existing official gates independently provide:

- one additional post-reset structured-fight conversion;
- maintained structural control after that reset;
- decision-critical item confirmation;
- accepted odds at or above the applicable target floor;
- full compliance with the 0.25u map-exposure cap.

Do not promote a favorite-margin lean to `OFFICIAL BET` from structural projection alone.

## 11. Tracking and anti-overfit rule

Track favorite negative handicap snapshots as one thesis per map.

Record:

- current line and required future net kills;
- structural-compression state;
- distributed economy;
- forced-fight inventory;
- projected cascade range;
- final kill margin.

One successful correction does not validate every favorite handicap. The same review also showed HLE -13.5 losing, which establishes a meaningful line ceiling.

Review this gate after five qualifying favorite-margin theses or after probation wager 10 settles, whichever occurs first.

## 12. Probation and fast output

Probation remains unchanged:

- completed: 6/10;
- record: 2-4;
- net: -665,250 VND / -0.66525u;
- wager 7 remains unplaced;
- standard stake: 0.25u = 250,000 VND;
- minimum odds: 1.60;
- no correlated same-map add-ons;
- duration Overs remain ineligible for official wagers 7-10;
- official only after explicit user placement confirmation.

Return the verdict first. For favorite-margin analysis, state current margin, required future net kills, structural-compression evidence, forced-fight inventory, price floors, and `not placed` status.