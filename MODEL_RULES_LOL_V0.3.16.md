# League of Legends Model Rules v0.3.16

**Status:** Active immediately  
**Effective date:** 2026-08-02 00:02 UTC+7  
**Purpose:** Strengthen pre-game and post-draft composition evaluation after the GX vs SK Game 2 review.

This rule supersedes earlier draft-evaluation language where conflicting. All pricing, live-state, item-timing, expiry, stake, objective-reading, and probation rules remain unchanged.

## 1. Triggering review

Draft:

- GX: Renekton / Xin Zhao / Ryze / Viktor / Leona
- SK: Dr. Mundo / Nocturne / Sylas / Varus / Alistar

The prior model called SK the more stable composition because of Mundo frontline, Varus damage, and Nocturne-Alistar access. That was incomplete.

The user reported that Caedrel independently rated GX's draft much better and specifically viewed the SK Sylas and Varus selections as poor. Treat this as an expert-disagreement signal, not as automatic authority. The match evidence also showed the original model had underpriced GX's access, control, damage redundancy, and simpler execution while overpricing SK's nominal frontline and scaling.

## 2. Mandatory draft scorecard

Every full draft must be evaluated across these fields before assigning a directional edge:

1. Role and lane fit for all five champions.
2. Lane priority, lane volatility, and punishability in Top / Jungle / Mid / ADC / Support order.
3. Number of independent, reliable damage channels.
4. Damage delivery: range, uptime, safety, target access, and whether allies create or remove space.
5. Frontline durability against the opponent's actual damage profile.
6. Engage reliability and follow-up geometry.
7. Peel, disengage, counter-engage, and carry protection.
8. Single-target pick versus front-to-back teamfight quality.
9. Side-lane pressure, waveclear, and map assignment flexibility.
10. Objective setup, choke control, and terrain dependence.
11. Execution burden and major failure states.
12. Single-point-of-failure risk.

A draft verdict that omits any decision-critical field must be downgraded.

## 3. Functional composition rules

Do not label a draft "stable" merely because it contains a tank, scaling carry, and engage.

A stable composition normally requires:

- at least two reliable damage channels or one exceptionally protected primary carry;
- a credible method for those carries to deliver damage through the opponent's access tools;
- frontline or peel that remains connected to the damage dealers;
- a teamfight plan that does not require several narrow conditions simultaneously.

A tank is not automatically valuable when the backline cannot safely hit. Engage is not automatically valuable when the diving champions leave the primary carry isolated. Scaling is not automatically valuable when the composition cannot reach its item states or contest space safely.

## 4. Carry-isolation and damage-concentration penalty

Apply a major downgrade when:

- the team has only one dependable ranged damage source;
- that carry is immobile or easily reached;
- allied engage moves away from the carry rather than protecting its damage window;
- the secondary carry has poor access, high execution burden, or unreliable damage uptime;
- frontline champions add durability but insufficient threat.

For positive underdog kill handicaps, this pattern is especially dangerous because it increases clean-wipe and margin-expansion risk.

## 5. Champion-specific conditional checks

### Sylas

Do not grade Sylas from theoretical stolen-ultimate value alone. Assess:

- lane access and ability to survive or contest range;
- quality of the available combat ultimates, not just their names;
- flank dependence;
- target access through opposing peel and zone control;
- whether he is a real secondary damage source or only a conditional diver;
- whether his entry pattern exposes him to layered crowd control.

### Varus and other immobile carries

Assess:

- whether the build and team structure provide sustained damage or only conditional poke/burst;
- whether the carry has reliable protection after allied engage commits;
- opposing point-and-click access, flank pressure, and layered crowd control;
- whether the carry is the only dependable ranged damage source;
- whether the composition can create a stable front-to-back firing line.

## 6. Simplicity and execution burden

Every draft review must identify:

- the simpler win condition;
- the team requiring more precise sequencing;
- the most punishable champion on each side;
- the first composition to become nonfunctional when one role falls behind.

When one team has multiple independent ways to start, peel, zone, and deal damage while the opponent relies on one fragile carry plus a high-burden secondary threat, the simpler composition receives a material draft premium.

## 7. GX vs SK Game 2 correction

The corrected draft read is:

- GX had the stronger and simpler teamfight structure.
- Renekton, Xin Zhao, and Leona created layered access and control onto Varus.
- Ryze and Viktor supplied two independent backline damage channels and strong zone control.
- SK's Nocturne-Alistar entry could separate the engage line from Varus rather than guaranteeing safe damage delivery.
- Mundo provided durability but did not solve SK's damage-access problem.
- Sylas carried high lane and teamfight execution burden and was not a reliable second damage source in this setup.
- Varus was a vulnerable damage bottleneck.

The prior slight-SK draft lean was therefore a material evaluation error.

## 8. Betting application

- Pre-game draft alone still cannot create an official live bet where other rules require current-map confirmation.
- Draft may materially influence fair price, lean direction, and live interpretation.
- A positive underdog kill-handicap lean must be downgraded or vetoed when the underdog draft has carry-isolation, damage-concentration, or execution-collapse risk.
- Once live evidence confirms a predicted draft failure, do not re-enter the same handicap thesis without demonstrated repair under the existing re-entry rules.

## 9. Required draft output

Keep the user-facing verdict fast. The minimum draft output should state:

- directional draft edge;
- simpler win condition;
- primary damage-delivery advantage;
- main vulnerable champion or failure point;
- market consequence.

Detailed lane-by-lane scoring may follow after the verdict.

## 10. Review threshold

Review this rule after five fully graded drafts or at the completion of the current LoL probation, whichever comes first. Track draft edge, simpler win condition, carry-isolation flag, damage-channel count, execution burden, market recommendation, and result.

Probation remains 4 of 10, 1-3, -601,250 VND.