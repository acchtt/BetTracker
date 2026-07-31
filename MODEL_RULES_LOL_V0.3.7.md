# League of Legends Model Rules v0.3.7

**Status:** Active immediately  
**Effective date:** 2026-08-01 01:30 UTC+7  
**Applies to:** LoL live kill handicaps, comeback moneylines, kill totals, duration, and objective markets  
**Read with:** `LOL_BETTING_PROCEDURE.md`, `MODEL_RULES_LOL_V0.3.6.md`, `STAKE_POLICY_V2.json`, and `ledger.json`

This addendum responds to a repeated model error: counting nominal champions, engage tools, and future scaling as usable damage without verifying whether the composition can actually damage the opponent in the next relevant fight.

## 1. Functional damage replaces nominal damage count

Do not count a champion as a damage source merely because the champion normally deals damage.

A damage source is `functional now` only when the current state supports all of the following:

1. **Target access:** it can reach a relevant target through the opponent's peel, frontline, mobility, range, and crowd control.
2. **Frontline kill speed:** it can materially damage the first reachable durable target instead of being stalled indefinitely.
3. **Carry uptime:** it can continue dealing damage after the initial engage rather than contributing one conditional burst window.
4. **Item and level readiness:** its current items and levels are sufficient for the next objective cycle, not only for a theoretical later state.
5. **Damage profile:** the composition is not easily neutralized by the opponent's current armor, magic resistance, shields, healing, or defensive itemization.
6. **Survival and protection:** the carry can remain alive and positioned long enough to deliver its expected damage.

Classify each source as:

- `functional`;
- `conditional`;
- `future-only`; or
- `non-damage utility`.

Only `functional` sources count toward the live damage-conversion gate.

## 2. Positive kill-handicap damage gate

Before recommending a positive live kill handicap, explicitly compare the underdog's functional damage system with the opponent's defensive and access-denial system.

An `OFFICIAL BET` normally requires:

- at least two independent functional damage sources at current items; and
- at least one of those sources to have reliable sustained damage or demonstrated frontline kill speed; and
- a viable way to survive or disengage the opponent's first engage; and
- no forced major-objective fight before the damage system reaches its required breakpoint.

K'Sante, Alistar, Shen, Galio, and similar utility or tank champions do not count as damage sources unless the live items and matchup show meaningful kill conversion.

An assassin such as Naafiri counts as `conditional`, not functional, when it requires immediate backline access and cannot damage the first reachable target.

Poke champions count only when the poke is causing recalls, denying setup, forcing objective control, or producing repeated health advantages. Harmless skill-shot contact does not count as conversion.

## 3. Repeated-error veto

Because the same error occurred in both Team Heretics vs Vitality Game 2 and Movistar KOI vs Shifters Game 2, the following lockout is active:

A positive underdog kill handicap is `NO BET` when all three are true:

1. the underdog has zero or one functional current damage source;
2. the opponent has at least two reliable current damage threats plus engage, peel, or access denial; and
3. the underdog must contest a major objective before reaching its next meaningful damage breakpoint.

A wide line from +7.5 through +10.5 does not override this veto by itself.

The veto may be cleared only by at least two observed damage conversions, such as:

- two fights where the underdog materially damages or kills frontline targets;
- repeated poke that forces recalls and secures map access;
- a successful objective fight followed by another independent conversion; or
- an item breakpoint that clearly changes target access or time-to-kill.

Engage attempts, isolated crowd control, tower trades, and one cleanup kill do not clear the veto.

## 4. Objective-timer maturity rule

Before backing a scaling or defensive underdog, compare its next required item breakpoint with the next forced neutral-objective timer.

If the opponent is at soul point, threatening Baron, or controls the next mandatory fight before the underdog's damage system matures:

- downgrade the underdog's future scaling value;
- increase multi-kill-loss risk;
- block positive-handicap add-ons unless current damage conversion has already been demonstrated; and
- do not use theoretical late scaling as protection for the current kill margin.

## 5. Frontline interaction table is mandatory

For every positive kill-handicap recommendation, state:

- first reachable target for each carry;
- estimated ability to kill that target at current items;
- who provides sustained damage after the first spell rotation;
- who protects each carry;
- what interrupts or denies target access; and
- whether the underdog can deal damage while retreating.

If this cannot be answered from the available snapshot, output `NO BET` rather than assuming normal champion behavior.

## 6. Composition labels must reflect current function

Do not describe a composition as having three damage sources when the accurate live label is, for example:

- one conditional burst source;
- one underdeveloped control mage;
- one low-impact poke carry;
- and two utility frontliners.

The recommendation must use the functional label, not the champion-role label.

## 7. Protected line is not sufficient protection against zero conversion

A large positive kill handicap protects against ordinary map loss, but not against a composition that cannot return damage during forced fights.

When conversion is absent, the likely loss distribution becomes more asymmetric: the underdog can remain close briefly and then lose several kills in one or two objective fights. Therefore, line width must be evaluated together with functional damage, not independently.

## 8. Triggering cases

### Team Heretics vs Vitality — Game 2

The model overvalued Jarvan IV, Galio, Shen, Gnar, and Orianna layering while underestimating the lack of sustained damage and frontline kill speed against Aatrox, Akali, and Cassiopeia.

### Movistar KOI vs Shifters — Game 2

Shifters drafted K'Sante, Naafiri, Orianna, Ezreal, and Alistar against Jayce, Lee Sin, Galio, Lucian, and Leona. The model incorrectly called Naafiri, Orianna, and Ezreal three credible damage sources.

The functional live assessment was weaker:

- Naafiri was conditional burst with poor first-target access;
- Orianna and Ezreal had not reached demonstrated damage breakpoints;
- K'Sante and Alistar supplied control and durability but little frontline kill speed;
- MKOI had earlier and more reliable damage, access denial, and soul-point pressure.

Under v0.3.7, SHFT +7.5 remains `NO BET` unless two independent damage conversions are observed before the forced objective cycle.

## 9. Required recommendation block

Every positive live kill-handicap recommendation must now include:

- `Functional damage sources`;
- `Conditional/future-only sources`;
- `First-target and frontline kill-speed check`;
- `Carry uptime and protection`;
- `Next forced objective versus item timing`;
- `Observed conversion count`; and
- `Veto status`.

Missing information means `NO BET`.

## 10. Review threshold

Review after the next 10 settled synchronized LoL wagers and separately track:

- functional damage-source count at entry;
- observed conversion count;
- objective timer versus item timing;
- positive handicap line;
- whether the repeated-error veto applied;
- final kill margin;
- closing-line quality; and
- net VND and units.
