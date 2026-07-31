# LoL Model Changelog Addendum

## v0.3.6 — 2026-08-01

### Live comeback confirmation, normalized gold, structural discounts, and unit-policy change

**Status:** Active evaluation rule  
**Detailed implementation:** `MODEL_RULES_LOL_V0.3.6.md`  
**Unit policy:** `STAKE_POLICY_V2.json`

## Triggering evidence

Movistar KOI vs Shifters Game 1 exposed an anchoring error.

At the live recommendation point, Shifters led 4-2 in kills, had the better early objective profile, and had repeatedly executed the map more cleanly. Gold was almost even and MKOI had taken the first tower with Ziggs. The model treated that single structure as sufficient confirmation for MKOI moneyline at 1.791, later accepted at 1.880.

Shifters' Gnar-Olaf-Cassiopeia-Vladimir-Rell composition had the stronger extended-fight scaling and continued to control major objectives. MKOI lost the map.

## Error classification

This was a model-selection error:

- MKOI's pregame team-strength reputation remained overweighted;
- one Ziggs-assisted tower was treated as independent macro confirmation;
- Shifters' objective control and repeated clean macro were underweighted;
- the model upgraded from a protected kill-handicap concept to a binary moneyline without enough additional evidence;
- late-game raw gold differences were described without normalizing them to total economy or item relevance.

## New active rules

- After 25 minutes, express gold leads as a percentage and identify item-breakpoint relevance.
- Treat sub-3% late-game gold leads as near-even unless a decisive item, level, role concentration, or recall timing changes the fight.
- Require two independent favorable confirmations before backing a live comeback moneyline on a nominally stronger team.
- Discount structures that are highly expected from the draft, especially Ziggs first-tower conversion without follow-up map access.
- Reprice scaling compositions as they reach intended item windows in an even state.
- Reduce the generic team-strength prior after repeated current-map macro outperformance.
- Prefer protected markets when the evidence supports competitiveness more strongly than outright victory.
- After 25 minutes, rank Baron, soul, inhibitor access, map compression, vision, waves, and item breakpoints above raw gold and kills.

## Unit-policy change

Effective 2026-08-01 00:48 UTC+7:

- 1.0u = 1,000,000 VND.
- 0.25u = 250,000 VND.
- 0.5u = 500,000 VND.
- Historical bets are not retroactively renormalized.
- Every future ledger record must include `unitValueVndAtPlacement`.

The MKOI wager and all earlier wagers retain the prior 500,000 VND unit basis because they were placed before the effective timestamp.

## Expected benefit

Reduce reputation-driven comeback moneylines, prevent expected champion-specific structures from being mistaken for broad control, and improve late-game evaluation when raw gold gaps are small relative to total economy.

## Review threshold

Review after the next 10 settled synchronized LoL wagers, including normalized gold, confirmation count, scaling-window assessment, macro-prior adjustment, protected-versus-aggressive market choice, and unit value at placement.
