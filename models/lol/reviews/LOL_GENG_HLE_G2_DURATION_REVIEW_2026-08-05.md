# LoL Review — Gen.G vs HLE Game 2 Duration Miss

**Date:** 2026-08-05  
**Model reviewed:** LoL v0.3.25  
**Resulting model:** LoL v0.3.26  
**Bet status:** No Game 2 wager placed

## Final result

HLE defeated Gen.G at 27:26.

- Kills: HLE 16-5
- Gold: HLE approximately +8.8k
- Towers: HLE 7-2
- Dragons: HLE 4-0
- Inhibitors: HLE 1-0
- Barons: 0-0

## Last pre-finish model state

The last reviewed state showed approximately:

- HLE 7-4 kills;
- HLE +1.9k gold;
- HLE 3-2 towers;
- HLE 3-0 dragons;
- HLE three Void Grubs;
- no Baron or inhibitor;
- strong direct engage through Vi and Alistar with Akali follow-up.

The issued projection was approximately 25 total kills and a 34-35 minute finish.

## Forecast error

- Kill point estimate error: +4 kills
- Duration point estimate error: approximately +7 minutes

## What was wrong

1. Void Grubs were omitted until the user corrected the state.
2. The duration route overemphasized the lack of current terminal access.
3. The model treated no-Baron status as evidence for another long setup cycle.
4. It failed to price an imminent fourth-dragon contest as a forced high-leverage event.
5. It applied methodical-control logic to a direct-engage composition capable of ending from one decisive soul fight.
6. It did not explicitly model a fast-close branch.

## Correct interpretation

Before the soul fight, `TERMINAL ACCESS: NO` remained correct. The error was assuming terminal access would develop slowly.

With three dragons, three Grubs, direct initiation, and a trailing opponent unable to concede soul, HLE had an explicit route:

1. force or win the fourth-dragon fight;
2. create long death timers;
3. use surviving members and Grub-enhanced structure damage to take multiple towers;
4. expose and destroy an inhibitor;
5. continue to the Nexus without Baron if waves and timers permitted.

The correct forecast should have included a 27-30 minute fast-close branch and weighted it heavily.

## Model changes

LoL v0.3.26 adds:

- mandatory dragon, soul-point, Grub, and next-neutral verification;
- a soul-cascade branch;
- Grub-assisted structure conversion;
- restrictions on the methodical-control time tax;
- mandatory fast, central, and extension duration branches;
- reduced remaining-kill inventory when one decisive fight can end the map;
- a verdict-first live-response fast path.

## Accounting

No Game 2 bet was placed. No ledger entry or probation change is required.

Current probation remains 11/20, record 7-4, net +335,750 VND / +0.33575u.
