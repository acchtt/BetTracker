# League of Legends Model Rules v0.3.8

**Status:** Active immediately  
**Effective date:** 2026-08-01 02:08 UTC+7  
**Applies to:** LoL pre-draft, post-draft, and live moneylines, kill handicaps, kill totals, duration, objective, and tower markets  
**Read with:** `LOL_BETTING_PROCEDURE.md`, `MODEL_RULES_LOL_V0.3.7.md`, `MODEL_RULES_LOL_V0.3.6.md`, `STAKE_POLICY_V2.json`, and `MODEL_CHANGELOG.md`

This addendum responds to another draft-process failure: the model counted functional damage sources without fully checking whether opposing champions directly countered the mechanisms those sources needed to deliver damage.

## 1. Champion-counter matrix is mandatory

Every completed-draft assessment must build a champion-interaction matrix before assigning fair probabilities.

For each champion, assess interactions against all five opposing champions across:

1. **Lane interaction:** priority, range, sustain, all-in threat, wave control, jungle exposure, and expected resource access.
2. **Target access:** whether engage, dash, flank, hook, or movement patterns are blocked or punished.
3. **Damage delivery:** whether the carry can hit the first reachable target and maintain uptime.
4. **Defensive denial:** spell shields, cleanses, untargetability, displacement, terrain, peel, shields, healing, and resistance stacking.
5. **Frontline interaction:** resistance theft, percentage-health damage, true damage, armor or magic-resistance profile, and time to kill.
6. **Objective-fight geometry:** choke control, zone denial, wall creation, anti-dash zones, range advantage, and setup priority.
7. **Reset and retreat:** whether the composition can disengage, kite, or deal damage while retreating.

A champion is not a functional damage source merely because its normal role deals damage. Its delivery mechanism must survive this matrix.

## 2. Counter types must be separated

Classify every material interaction as one of:

- `lane counter`;
- `direct mechanic counter`;
- `teamfight architecture counter`;
- `item-timing counter`;
- `range or access counter`;
- `objective-geometry counter`;
- `soft counter`;
- `neutral interaction`.

Do not use generic counter labels without explaining the mechanism.

Solo-lane advantage alone does not imply a teamfight counter. Conversely, a neutral lane can still produce a decisive composition counter.

## 3. Counter-cluster rule

A counter becomes structurally important when two or more independent opposing tools attack the same critical system.

Examples:

- anti-dash plus point-and-click lockdown against a short-range carry;
- resistance theft plus sustained damage against a single frontline;
- spell shield plus peel against a pick-reliant composition;
- zone control plus terrain denial against one-dimensional engage;
- range advantage plus disengage against a composition with no flank access.

When a counter cluster affects the underdog's primary engage, only frontline, or main carry-delivery route, downgrade all markets that rely on competitive teamfights or kill trading.

## 4. Damage-delivery architecture veto

For positive underdog kill handicaps, `NO BET` applies when all are true:

1. the underdog lacks a durable frontline or reliable space creator;
2. its main carries must enter the opponent's strongest control range;
3. at least two direct counters interfere with the same engage or damage-delivery system;
4. the underdog has not demonstrated two independent fight conversions.

A wide line, attractive price, nominal three-carry draft, or theoretical late scaling cannot override this veto.

The veto may be cleared only after observed evidence shows the countered mechanism is still functioning, such as:

- the short-range carry maintains meaningful uptime through the control zone;
- the engager reaches priority targets despite anti-dash or displacement;
- the frontline survives resistance manipulation and creates space;
- the composition wins or trades evenly in two separate structured fights.

## 5. Counter severity depends on current state

Champion counters must be repriced by:

- current patch;
- current items and levels;
- summoner spells and cooldowns;
- side selection;
- objective spawn and terrain;
- lane assignment and role swaps;
- player proficiency;
- gold distribution;
- whether the relevant interaction has already been observed.

Do not treat a theoretical late-game counter as fully active before its item window. Do not ignore an early mechanic counter merely because the disadvantaged composition scales later.

## 6. Required post-draft block

Every actionable post-draft or live recommendation must state:

- `Key lane counters`;
- `Direct mechanic counters`;
- `Counter clusters`;
- `Primary engage path`;
- `Primary damage-delivery path`;
- `Alternative win condition`;
- `Current counter severity`;
- `Observed evidence`;
- `Veto status`.

If the matrix cannot be completed from the available draft and state, output `NO BET`.

## 7. Triggering case: Movistar KOI vs Shifters Game 3

Draft:

- MKOI: Rumble, Trundle, Taliyah, Sivir, Nautilus.
- SHFT: Varus, Wukong, Ryze, Kalista, Thresh.

The initial model correctly identified multiple SHFT damage sources but failed to account for the counter architecture:

- Taliyah's anti-dash control directly disrupted Wukong access and Kalista movement.
- Trundle's resistance theft punished Wukong as SHFT's only meaningful frontline and space creator.
- Nautilus lockdown, Trundle pillar, Rumble zoning, and Taliyah control compressed Kalista and Ryze uptime.
- Sivir's spell shield reduced the reliability of Thresh or Varus starting a clean fight.
- SHFT's carries had damage, but their delivery routes were forced into MKOI's strongest control range.

The correct label was not `three functional damage sources`. It was:

- multiple nominal damage sources;
- weak space creation;
- one vulnerable engager;
- direct anti-dash and frontline counters;
- poor carry uptime;
- high one-sided-fight risk.

Under v0.3.8, SHFT +10.5 kills would be `NO BET` at draft unless two independent structured-fight conversions were observed.

## 8. Market implications

- **Moneyline:** downgrade the side whose main win condition is directly countered without an alternative route.
- **Positive kill handicap:** apply the architecture veto when the underdog cannot deliver damage through the counter cluster.
- **Kill totals:** do not assume multiple carries create high kills when one side may be unable to return damage.
- **Duration:** direct counters can either accelerate a stomp or create waveclear stalls; price the actual interaction rather than the draft label.
- **Objectives:** prioritize choke control, setup access, frontline durability, and zone denial over nominal scaling.

## 9. Review threshold

Review after the next 10 settled synchronized LoL wagers and track:

- key champion counters identified at draft;
- counter type and severity;
- counter clusters;
- primary and alternative damage-delivery paths;
- whether the countered mechanism functioned in live fights;
- veto status;
- closing-line quality;
- final kill margin and map result;
- net VND and units.
