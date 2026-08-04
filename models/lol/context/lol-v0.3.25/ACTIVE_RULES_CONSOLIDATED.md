# LoL v0.3.25 Active Rules — Consolidated

LoL v0.3.25 supersedes v0.3.24 where conflicting. All stricter earlier bankroll, placement, probation, state-direction, item, expiry, anti-line-chasing, repair, handicap, moneyline, totals, and series rules remain active.

## Fast status

- Verdict first.
- Minimum odds: 1.60.
- Standard stake: 0.25u = 250,000 VND.
- Maximum exposure: 0.25u per map.
- No correlated same-map add-ons.
- Official only after explicit placement confirmation.
- Probation: 11/20, record 7-4, net +335,750 VND / +0.33575u.
- Wagers 12-20 remain.
- All duration markets are official-ineligible through wager 20.

## Exact taxonomy

- `WATCH ONLY` — informational candidate, not a formal recommendation.
- `LEAN` — formal unplaced recommendation in the representative-thesis ledger.
- `OFFICIAL BET` — model-qualified but still unplaced until explicit confirmation.
- `NO BET` — rejected.
- `FORCED PICK` — hypothetical answer, not model-approved.
- `LEAN — REPAIRED WATCH` — one permitted positive-handicap repaired re-entry pathway.

Do not use ambiguous labels.

## Performance ledgers

Track separately:

1. placed official wagers;
2. unplaced official verdicts;
3. representative formal leans;
4. WATCH ONLY calibration.

Never combine these into one win rate.

## Evidence hierarchy and state correction

Use this order when data conflicts:

1. explicit user correction;
2. synchronized scoreboard;
3. near-synchronized market screenshot;
4. secondary telemetry;
5. earlier state or inference.

Before a new state-sensitive lean or official verdict, verify who secured intervening kills, towers, objectives, whether gold improved, and score orientation. If uncertain, return:

`NO BET — STATE DIRECTION UNVERIFIED`

A later correction invalidates any recommendation or rationale that depended on the wrong fact.

## Representative thesis

Repeated reprices in one continuous state are one thesis.

Open a new thesis after a material transition, normally:

- net two-kill swing;
- approximately 1.5k gold movement;
- tower or inhibitor change;
- Baron, soul point, soul, Elder, or equivalent objective transition;
- decision-critical item breakpoint;
- verified change in wave control, base access, protection, or return-kill function.

A price-only change is a reprice update.

## Mandatory four-family scan

Every synchronized snapshot must assess:

1. moneyline;
2. kill handicap;
3. kill total;
4. duration.

If absent or suspended, state `MARKET UNAVAILABLE/LOCKED`.

## Item verification

At or after 15:00, decision-critical item strength is mandatory. Do not guess unclear icons. If the relevant item state cannot be verified, cap at `WATCH ONLY` or return `NO BET`.

## Winner versus margin

Moneyline confidence does not transfer automatically to a negative kill handicap.

For each favorite handicap, state:

- current margin;
- required final margin;
- additional future net kills required;
- structural and objective leverage;
- favorite conversion channels;
- opponent return-kill channels.

Restrictions:

- five or more required future net kills is normally at most `LEAN`;
- -10.5 or larger with a current lead below five cannot be official without Baron or equivalent leverage, a two-tower lead, two favorite channels, and impaired opponent carry or protection;
- evidence must support margin expansion, not merely the winner.

## Positive-handicap width and line chasing

Two kills of cushion are material. Do not transfer a wide-line thesis to a tighter line without a fresh calculation.

A positive line widening by two or more kills triggers a warning. Apply:

`NO BET — LINE-CHASING VETO`

when the warning combines with at least two of:

- adverse moneyline repricing;
- material gold deterioration;
- structural deterioration;
- conversion failure;
- fragile kill production.

A wider line or better price is not state evidence.

## Positive-handicap repair

Official re-entry after withdrawal still requires two new structured-fight conversions, stabilization, restored item-qualified function, and explicit repair.

Once per map, `LEAN — REPAIRED WATCH` is allowed only when all active repair conditions are satisfied, including a qualifying conversion, meaningful deficit improvement, structural compensation or wave access, demonstrated carry function, sufficient remaining cushion, and explicit repair of the original failure.

## Fight-cascade stress test

For a handicap, test:

1. favorite fight win;
2. objective, tower, or Baron conversion;
3. next forced setup or base defense.

Reject when a plausible cascade consumes at least half the cushion without stabilization.

## Validated conversion and return-kill channels

A validated channel requires:

1. item-qualified or clearly functional damage; and
2. executable delivery, engage, frontline, peel, target access, or protection.

Damage without access or protection is nominal.

At or after 18:00, an official Kill Over requires:

- two leader conversion channels;
- two trailing return-kill channels;
- at least one trailing channel with functional delivery or protection;
- recent two-sided meaningful conversion;
- verified items.

One trailing channel means maximum `LEAN`. Zero means `NO BET` on the Over.

## Clean-close and return-kill suppression veto

Exact verdict:

`NO BET — CLEAN-CLOSE/RETURN-KILL SUPPRESSION VETO`

Mandatory when at least four are present:

1. Baron, base access, inhibitor route, or at least a two-tower lead;
2. two leader conversion channels;
3. impaired trailing engage, frontline, peel, or protection;
4. at most one trailing validated return-kill channel;
5. leader won the intervening state by at least 2-0 kills while improving gold, structure, or objectives;
6. a credible objective-to-base finish exists before another full neutral cycle.

When active, unresolved map inventory does not justify a Kill Over by itself.

## Kill Over promotion

Near parity:

- central projection at least two kills above the line;
- lower conservative branch no more than three below.

Leader-controlled state — any of approximately +3k gold, two-tower lead, Baron/base access, or impaired trailing protection:

- central projection at least three above the line;
- lower branch no more than two below;
- two trailing validated return-kill channels;
- no clean-close veto.

A range barely straddling the line is at most `LEAN`.

## Kill Under restraint

A formal Under is prohibited when all are present:

- at least three unresolved inventory categories;
- both sides retain two validated channels;
- no verified controlled-close route removes a cycle;
- the line is within two kills of the central projection.

A Kill Under may qualify when line-specific headroom exceeds the conservative fight budget plus safety buffer and trailing return-kill capacity is suppressed.

Grade the exact line, not a generic Under direction.

## Kill suppression versus duration compression

These are separate dimensions.

A state may strongly support a Kill Under while providing no value on Duration Under. Do not infer a fast finish solely from:

- low trailing return-kill capacity;
- the Kill Over clean-close veto;
- a large gold lead;
- soul point;
- Grubs;
- outer-tower control;
- strong zone control;
- an impaired enemy carry or protection layer.

Low expected future kills can coexist with eight to twelve minutes of methodical conversion.

## Duration quarantine

All Duration Over and Duration Under markets are official-ineligible through wager 20.

Maximum status is `LEAN` or `WATCH ONLY`. Append:

`ANALYSIS ONLY — DURATION INELIGIBLE THROUGH WAGER 20`

Duration analysis remains mandatory.

## Verified terminal-access gate

At or after 20:00, a Duration Under thesis or one-sequence score above 3 requires `TERMINAL ACCESS: YES`.

Terminal access exists only when at least one is verified:

1. active or freshly secured Baron with a healthy siege group and usable pushing wave;
2. inhibitor turret down or immediately exposed with controllable wave access;
3. base already breached with health, wave, and structure damage to continue;
4. ace or at least three defenders dead with sufficient death timers and wave position;
5. another explicit inhibitor-or-Nexus route requiring no full neutral cycle.

Soul point, three Grubs, a 5k gold lead, outer-tower advantage, superior teamfighting, or impaired enemy bot lane do not establish terminal access alone.

## Revised one-sequence close score

Score the leader on:

1. two item-qualified conversion channels;
2. objective leverage or next-neutral control;
3. tower access, exposed lane, or Baron-enabled siege;
4. impaired defender waveclear, carry, frontline, or protection;
5. reliable engage, flank, backline access, or reset denial.

Hard caps:

- no terminal access: maximum 3/5;
- 4/5 or 5/5 requires terminal access.

Treatment:

- 0-2: no automatic compression;
- 3 without terminal access: shorten central duration by at most one minute and normally cap Duration Under at `WATCH ONLY`;
- 4 with terminal access: Under lean requires an explicit route, no more than one reset, and at least two minutes of central cushion;
- 5 with terminal access: the conservative route must still fit the line; score alone is insufficient.

## Methodical-control time tax

Add approximately two to four minutes to the central duration range when:

- the leader suppresses return kills through zone control, disengage, range, or waveclear;
- terminal access is absent;
- at least one inner or inhibitor structure layer requires setup;
- the live state favors resets, wave alignment, vision control, or objective waiting over immediate siege.

Champion names alone do not trigger the tax. The live state must show methodical conversion.

## Mandatory Duration Under route statement

After 20:00, every Duration Under analysis must state:

- verified clock and time remaining to line;
- terminal-access status;
- exact route to Nexus;
- number of resets;
- whether a full neutral cycle is required;
- structure depth and wave status;
- conservative earliest, central, and extension finish ranges;
- methodical-control tax status.

If the route requires an unsecured Baron, a full dragon cycle, two or more resets, or multiple untouched structure layers, it is not a one-sequence finish.

## Moneyline preference

Prefer moneyline over an excessive negative handicap when the side has independent kill, tower, or objective confirmation, two functioning channels, superior protection or access, and the opponent has an impaired core channel.

## Mandatory live additions

Display when relevant:

- thesis ID and new-thesis or reprice status;
- validated channels for both sides;
- trailing return-kill count;
- clean-close veto status;
- `TERMINAL ACCESS: YES/NO` after 20:00;
- capped one-sequence score;
- methodical-control time tax;
- exact finish route for duration;
- official eligibility and placement status.

## Current probation

- 11/20 completed;
- 7-4;
- +335,750 VND / +0.33575u;
- wagers 12-20 remain;
- 0.25u maximum per map;
- no correlated same-map add-ons;
- duration markets official-ineligible through wager 20;
- no stake increase authorized.
