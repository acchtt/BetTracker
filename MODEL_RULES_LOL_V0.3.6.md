# League of Legends Model Rules v0.3.6

**Status:** Active evaluation addendum  
**Effective date:** 2026-08-01  
**Applies to:** LoL post-draft and live moneylines, kill handicaps, totals, duration, and objective markets  
**Read with:** `LOL_BETTING_PROCEDURE.md`, `MODEL_RULES_LOL_V0.3.4.md`, `MODEL_RULES_LOL_V0.3.5.md`, `STAKE_POLICY_V2.json`, and `ledger.json`

This addendum responds to Movistar KOI vs Shifters Game 1. It strengthens live comeback pricing, late-game gold interpretation, champion-specific structural adjustments, current-map macro weighting, and market-protection discipline.

## 1. Active unit conversion

Effective 2026-08-01 00:48 UTC+7:

- 1.0u = 1,000,000 VND.
- Standard evaluation stake: 0.25u = 250,000 VND.
- Normal maximum stake: 0.5u = 500,000 VND.
- Bets placed before the effective timestamp retain their original unit basis and VND amounts.
- Every new ledger entry must record `unitValueVndAtPlacement`.

`STAKE_POLICY_V2.json` is authoritative for unit conversion.

## 2. Normalized late-game gold rule

After 25:00, do not describe a raw gold lead as meaningful without normalizing it.

Calculate or estimate:

- gold lead as a percentage of the trailing team's gold; and
- whether the lead creates a relevant item breakpoint on a high-impact role.

Default interpretation after 25:00:

- under 3%: near-even unless tied to a decisive item, level, recall, or role concentration;
- 3% to 6%: modest advantage requiring structural context;
- above 6%: material economy advantage, still subject to objective and composition context.

A small late-game gold lead must not outweigh Baron, soul point, inhibitor access, tower differential, wave position, vision control, or superior scaling.

## 3. Two-confirmation gate for live comeback moneylines

When backing a pregame favorite or nominally stronger team that is being outperformed live, require at least two independent favorable confirmations.

Valid confirmations include:

1. at least a 3% economy advantage or a decisive carry-item breakpoint;
2. tower and map-access advantage beyond an expected champion-specific structure;
3. objective-control reversal or first setup around the next major objective;
4. two observed successful picks, fights, or damage conversions;
5. superior side-lane pressure with safe objective timing;
6. evidence that the opponent's scaling or fight system is failing in practice.

One tower alone, nearly even gold alone, or a larger price alone is insufficient.

If the opponent still leads objectives, has shown better macro, or owns the stronger current-item teamfight composition, the moneyline is normally `NO BET` until the two-confirmation gate is passed.

## 4. Champion-specific structural discount

Not every tower or structure has equal evidential value.

Discount structural events that were strongly expected from the draft, including:

- Ziggs early turret conversion;
- Herald-assisted first turret with no follow-up map access;
- split-push towers taken while conceding a major neutral objective;
- structures gained through a temporary lane assignment that does not improve the next objective setup.

A Ziggs first tower is positive, but it is not independent proof of superior macro. Count it as a full confirmation only when accompanied by map access, objective setup, a meaningful gold swing, or repeated siege conversion.

## 5. Scaling-clock adjustment

Reprice the live map as compositions reach intended item and level breakpoints.

When a scaling composition reaches an even or near-even state at its expected power window:

- reduce the opposing pregame team-strength prior;
- increase the scaling team's long-fight and objective-fight probability;
- reassess frontline kill speed, carry uptime, and target access at current items;
- do not preserve an earlier moneyline merely because the nominally stronger team remains close in gold.

Multi-carry long-fight compositions receive an additional adjustment when they reach two-item or three-item windows without falling structurally behind.

## 6. Current-map macro override

Current-map execution must update team strength faster when it persists across multiple snapshots.

After two or more cycles showing the same team with better objective setup, vision timing, fight selection, cross-map decisions, or lead conversion:

- reduce the generic pregame reputation prior by at least one classification level;
- for example, `material edge` may become `moderate`, `near-even`, or reversed depending on the evidence;
- state the updated live prior explicitly.

Do not continue calling a team materially stronger when the current map repeatedly shows the opponent executing the relevant win conditions better.

## 7. Protected-market preference

When evidence supports competitiveness more strongly than outright victory, prefer a protected market.

Examples:

- positive kill handicap over underdog or comeback moneyline;
- duration over rather than trailing-team moneyline when stall is the clearer path;
- objective or tower protection when map control can remain competitive without a win.

Do not upgrade from a wide protected handicap to a binary moneyline solely because the stronger team gains one expected structure.

Every aggressive market must have evidence beyond the evidence already supporting the protected market.

## 8. Objective and structure hierarchy after 25:00

After 25:00, prioritize:

1. Baron, Elder, soul, and soul-point control;
2. inhibitor status and exposed base access;
3. tower differential and map compression;
4. vision and first setup around the next major objective;
5. wave state and side-lane pressure;
6. carry item and level breakpoints;
7. normalized gold percentage;
8. raw kill score.

A nearly even gold state can still be heavily one-sided when one team owns Baron, inhibitor access, or decisive map control.

## 9. Triggering case

Movistar KOI vs Shifters, Game 1, 2026-08-01:

- At 14:34, Shifters led 4-2 in kills and held the better early objective profile.
- Gold was nearly even, while MKOI led towers 1-0 through a Ziggs composition.
- The model treated the tower as sufficient structural confirmation and recommended MKOI moneyline.
- Shifters continued to execute objectives and long fights better with Gnar, Olaf, Cassiopeia, Vladimir, and Rell.
- The model had over-weighted MKOI's pregame reputation and under-weighted Shifters' current-map macro and scaling composition.

Under v0.3.6, the MKOI moneyline remains `NO BET` because only one discounted confirmation was present.

## 10. Review threshold

Review after the next 10 settled synchronized LoL wagers.

Track:

- normalized gold percentage after 25:00;
- number and type of live confirmations;
- champion-specific structural discount applied;
- current-map macro prior adjustment;
- protected versus aggressive market choice;
- scaling-window adjustment;
- unit value at placement;
- result and net VND/units.
