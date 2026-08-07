# League of Legends Model Rules v0.3.25

**Status:** Active immediately  
**Effective date:** 2026-08-04 02:36 UTC+7  
**Purpose:** Separate kill suppression from duration compression, require verified terminal access for fast-close projections, add a methodical-control time adjustment, and prevent positive-handicap entries that underweight aligned objective and gold control.

This version supersedes v0.3.24 where conflicting. All stricter earlier bankroll, placement, probation, item-verification, state-direction, expiry, anti-line-chasing, repair, handicap, moneyline, totals, representative-thesis, return-kill, and clean-close rules remain active.

## 1. Triggering result

KC defeated Team Heretics 16-5 in 34:29.

At the user-corrected 25:00 state, KC led 8-3 kills, approximately 5.3k gold, 3-0 towers, and 3-1 dragons. The placed Under 22.5 kills won at 21 total kills, but Duration Under 30 lost by 4:29.

The state correctly supported return-kill suppression. It did not support immediate terminal conversion.

## 2. Kill suppression and time compression are independent

Never infer a short remaining duration solely from:

- one or zero validated trailing return-kill channels;
- a clean-close veto on a Kill Over;
- a large gold lead;
- soul point;
- a two- or three-tower lead;
- strong zone control;
- an impaired trailing carry or protection layer.

These factors may lower expected future kills without materially shortening the time required to secure Baron, align waves, take inner towers, breach an inhibitor, or reach the Nexus.

A Kill Under may qualify while Duration Under remains `NO BET` or `WATCH ONLY`.

## 3. Verified terminal-access gate

At or after 20:00, a Duration Under thesis or a one-sequence close score above 3 requires **verified terminal access**.

Terminal access exists only when at least one of the following is true:

1. Baron buff is active, or Baron has just been secured, with a healthy siege group and at least one usable pushing wave;
2. an inhibitor turret is down or immediately exposed and the leader has controllable wave access;
3. the base is already breached and the leader retains sufficient health, wave access, and structure damage to continue;
4. at least three defenders are dead, or an ace has occurred, with death timers and wave position sufficient for an inhibitor or Nexus attempt;
5. another equivalently explicit route to inhibitor or Nexus is visible and requires no full neutral-objective cycle.

The following do **not** establish terminal access by themselves:

- soul point;
- three Grubs;
- a 5k or larger gold lead;
- a two- or three-tower lead composed mainly of outer towers;
- strong engage or zone control;
- an impaired enemy bot lane;
- theoretical scaling or superior teamfighting.

When terminal access is not verified, state `TERMINAL ACCESS: NO`.

## 4. Revised one-sequence close score

Continue scoring the five v0.3.24 factors:

1. two item-qualified conversion channels;
2. objective leverage or next-neutral control;
3. tower access, exposed lane, or Baron-enabled siege;
4. impaired defender waveclear, carry, frontline, or protection;
5. reliable engage, flank, backline access, or reset denial.

Apply these hard limits:

- Without verified terminal access, the score is capped at **3/5**.
- A score of **4/5 or 5/5** is permitted only when terminal access is verified.
- Soul point or outer-tower control may satisfy objective or map-control factors, but cannot substitute for terminal access.

### Treatment

- **0-2:** no automatic duration compression.
- **3 without terminal access:** shorten the central range by at most one minute; Duration Under is normally `WATCH ONLY` at best.
- **4 with terminal access:** a Duration Under lean requires an explicit finish route, no more than one reset, and at least a two-minute central cushion beneath the line.
- **5 with terminal access:** explicitly test the immediate route; a Duration Under lean still requires the conservative route to fit the line. The score alone is never sufficient.

Duration remains official-ineligible through wager 20.

## 5. Methodical-control time tax

Add a **methodical-control time tax** of approximately two to four minutes to the central duration range when all are present:

- the leader suppresses return kills through zone control, disengage, range, or waveclear;
- terminal access is not verified;
- at least one inner-tower or inhibitor layer still requires setup;
- the observed state favors resets, wave alignment, vision control, or waiting for the next objective rather than immediate siege.

Champion names alone do not trigger the tax. It must be supported by the live state.

Typical functional patterns include Anivia wall and waveclear, Ashe pick control, Seraphine disengage, Azir defensive clear, or similar compositions that can dominate safely while converting slowly.

## 6. Mandatory Duration Under route statement

Every Duration Under analysis after 20:00 must state:

- current verified clock;
- remaining time to the line;
- terminal-access status;
- exact expected route to the Nexus;
- number of resets required;
- whether another full neutral-objective cycle is required;
- structure depth and wave status;
- conservative earliest, central, and extension finish ranges.

If the route requires Baron that has not spawned or has not been secured, a full dragon cycle, two or more resets, or multiple untouched structure layers, do not treat the state as a one-sequence finish.

## 7. Kill-total interaction

The clean-close and return-kill-suppression rules remain active for kill totals.

However:

- activating the Kill Over clean-close veto does not automatically support Duration Under;
- a low-kill controlled close may still last eight to twelve minutes;
- unresolved time inventory and unresolved kill inventory must be modeled separately.

For a leader-controlled Kill Under, continue to require line-specific headroom, a conservative remaining kill budget, and suppressed trailing return-kill capacity.

## 8. Mandatory live output additions

At or after 20:00, every synchronized live response must include when relevant:

- `TERMINAL ACCESS: YES/NO`;
- one-sequence close score after the terminal-access cap;
- methodical-control time tax: active or inactive;
- explicit remaining finish route for duration analysis;
- separate conclusions for future-kill suppression and time compression.

Do not write that a map will end quickly merely because the trailing side is unlikely to trade kills.

## 9. Calibration example: KC vs Team Heretics Game 2

Correct 25:00 assessment:

- Kill Under: strong, because KC suppressed Team Heretics return-kill access and held substantial line headroom.
- Duration Under 30: not supported, because KC lacked Baron, inhibitor exposure, base access, and a live death-timer finish window.
- Revised terminal-access status: `NO`.
- Revised one-sequence score: capped at `3/5`, not 5/5.
- Methodical-control time tax: active.
- Final: 21 kills, 34:29.

## 10. Probation and exposure

- Completed: 11/20
- Official record: 7-4
- Net: +335,750 VND / +0.33575u
- Wagers 12-20 remain
- Standard stake: 0.25u = 250,000 VND
- Maximum exposure: 0.25u per map
- Minimum odds: 1.60
- No correlated same-map add-ons
- Official only after explicit placement confirmation
- All duration markets remain official-ineligible through wager 20
- No stake increase is authorized

## 11. Review schedule

Review this patch after the earlier of:

- five new representative duration theses;
- probation wager 15 settlement;
- two further terminal-access misclassifications;
- a user-requested review.

## 12. Aligned objective-control safeguard for positive kill handicaps

**Added 2026-08-08 after FNC vs Team Heretics Game 2.**

Triggering failure: at 9:05 FNC led only 1-0 kills and about 0.8k gold, but already held all three first Grubs and the first dragon. The model backed TH +7.5 kills @1.940 largely because the current kill margin was small. FNC later converted the aligned map-control edge into a one-sided kill margin and won the map. The error was treating a wide positive handicap as intrinsically safe while underweighting objective-led future fight access.

### 12.1 Aligned-control state

Treat the leader as having **aligned objective control** when all are true:

1. the same team leads gold by a meaningful amount or has a clearly improving gold trajectory;
2. that team controls both early neutral-objective classes available in the current phase — normally Grubs/Herald-side leverage **and** dragons — or has equivalent cross-map objective dominance;
3. the trailing side has not demonstrated compensating tower pressure, successful structured fights, or a durable lane/economy advantage.

A low current kill count does not neutralize aligned objective control.

### 12.2 Positive-handicap restriction

When aligned objective control is active against the side receiving the positive kill handicap:

- **Do not promote the trailing side's positive kill handicap solely because the current kill margin is small or the cushion is wide.**
- Require at least one verified compensation signal before a formal `LEAN` and at least two before an `OFFICIAL BET` or simulated circuit-breaker `TAKE`.

Valid compensation signals are:

1. a tower lead or clear tower-trade path for the trailing side;
2. a successful structured 4v4/5v5 or two separate meaningful skirmish conversions;
3. stable or improving gold despite losing the objective classes;
4. item-qualified carry function plus executable engage/peel that has already produced a live conversion;
5. control of the next major neutral setup with lane priority and vision sufficient to contest rather than merely arrive.

Champion composition alone is not compensation.

### 12.3 Escalation rule

If the leader progresses from aligned objective control to **two dragons plus first objective-class sweep**, or adds a material gold lead while the trailing side still has zero towers and no meaningful fight win, then:

`NO BET — OBJECTIVE-CONTROL HANDICAP VETO`

applies to the trailing side's positive kill handicap until the state is repaired by a verified compensation signal.

Do not use the phrase “they only need to avoid losing by X kills” as sufficient rationale in this state. The model must instead estimate whether the leader's objective control is likely to create repeated forced-fight and structure-conversion sequences that can expand the kill margin non-linearly.

### 12.4 Mandatory handicap check

Before every positive kill-handicap recommendation, explicitly check:

- current kill margin and cushion;
- gold direction;
- Grubs/Herald-side control;
- dragon control;
- tower state;
- whether the trailing side has actually won a structured fight;
- whether the leader can force the next two objective or structure sequences.

If objective control and gold are aligned for the opponent and the trailing side lacks compensation, the default is **PASS**, not “cushion safety.”
