# League of Legends Model Rules v0.3.24

**Status:** Active immediately  
**Effective date:** 2026-08-03 02:45 UTC+7  
**Purpose:** Convert the five-map LEC review into stricter market-family selection, late Kill Over return-kill verification, clean-close suppression, duration quarantine, representative-thesis tracking, and winner-versus-margin separation.

This version supersedes v0.3.23 where conflicting. All stricter earlier bankroll, explicit-placement, probation, item-confirmation, state-direction, expiry, anti-line-chasing, positive-handicap repair, cumulative favorite-margin, unresolved-map-inventory, and one-map-exposure rules remain active.

## 1. Triggering LEC review

The reviewed LEC maps were:

1. G2 Esports vs SK Gaming Game 1;
2. G2 Esports vs SK Gaming Game 2;
3. Movistar KOI vs Fnatic Game 1;
4. Movistar KOI vs Fnatic Game 2;
5. Movistar KOI vs Fnatic Game 3.

Placed official LEC wagers were 4-0:

- SK +9.5 kills @1.854 — won +213,500 VND / +0.2135u;
- Over 49.5 kills @1.740 — won +185,000 VND / +0.185u;
- Over 37.5 kills @1.665 — won +166,250 VND / +0.16625u;
- Fnatic moneyline @1.851 — won +212,750 VND / +0.21275u.

The LEC placed subset returned +777,500 VND / +0.7775u from 1.00u staked. This does not replace the full official record and is not sufficient to increase stake.

The broader correlated snapshot record was materially weaker than the official placed record. The review therefore supports stricter selection and accounting rather than looser promotion.

## 2. Separate performance ledgers

Maintain four independent ledgers:

1. **Placed official wagers** — the only source of official record, P/L, and probation progress.
2. **Unplaced official verdicts** — model-qualified recommendations that were not executed.
3. **Representative formal leans** — one representative entry per continuous thesis phase.
4. **WATCH ONLY calibration** — informational candidates; never added to official or lean performance.

Never combine these ledgers into one win rate.

### Representative-thesis rule

Repeated reprices of the same market direction in a continuous game state are one thesis, not independent observations.

Assign a new representative thesis only after a material state transition, normally at least one of:

- a net two-kill swing;
- approximately 1.5k gold movement;
- a tower or inhibitor change;
- Baron, soul point, soul, or Elder change;
- a decision-critical item breakpoint;
- a verified change in base access, wave control, or return-kill functionality.

A price-only change is not a new thesis. A wider or tighter line without state change is a reprice update.

When a thesis reverses direction after a material transition, expire the old thesis and open a new thesis ID. Do not count every displayed line as a separate model trial.

## 3. One-map market selection

The 0.25u maximum exposure remains one official wager per map during probation.

Before issuing an official verdict, compare the best eligible market across:

- moneyline;
- kill handicap;
- kill total;
- duration, subject to Section 10.

Select the market with the strongest safety-adjusted edge. Do not promote a second market merely because the first market locked or because another correlated market later improves in price. A fresh synchronized reassessment is required.

## 4. Winner confidence and margin confidence are independent

A strong moneyline thesis does not automatically support a large negative kill handicap.

For every favorite handicap, state:

- current kill margin;
- final margin required;
- additional future net kills required;
- structural and objective leverage;
- number of validated favorite conversion channels;
- number of validated opponent return-kill channels.

### Margin independence gate

A negative kill handicap may become official only if it independently passes the active favorite-margin or cumulative-margin rules.

Additional v0.3.24 restrictions:

- If five or more additional future net kills are required, maximum status is normally `LEAN` unless the cumulative favorite-margin gate is fully satisfied with near-terminal structure.
- If the printed line is -10.5 or larger and the favorite leads by fewer than five kills, no official promotion without Baron or equivalent map leverage, at least a two-tower lead, two functioning conversion channels, and a materially impaired opponent carry or protection layer.
- Evidence used to justify the moneyline cannot be counted again as margin evidence unless it specifically creates future net-kill separation.

Exact moneyline verdict and exact handicap verdict must be stated separately.

## 5. Positive-handicap line-width discipline

The LEC review again showed that wider positive handicaps can remain valid while tighter versions fail.

For a positive handicap:

- calculate how many future net kills the opponent must add from the current margin to defeat the line;
- treat two additional kills of cushion as material;
- do not transfer a +8.5 thesis to +5.5 or +6.5 without a fresh margin calculation;
- when the opponent has two dominant item-qualified carries and growing structural access, the tighter line requires explicit post-reset stabilization;
- preserve all anti-line-chasing and repaired-watch rules.

A wide line winning does not validate a tighter line from the same map.

## 6. Validated return-kill channels

Kill Over analysis must distinguish nominal damage from executable return-kill capacity.

A **validated return-kill channel** requires both:

1. item-qualified or clearly functional damage; and
2. reliable delivery, frontline, engage, peel, target access, or protection that allows the damage to operate in the next forced sequence.

A fed or farmed carry without functional delivery or protection is not automatically a validated channel.

At or after 18:00, an official Kill Over requires:

- at least two validated conversion channels for the leading side;
- at least two validated return-kill channels for the trailing side;
- at least one trailing channel must include a functional delivery or protection layer, not damage alone;
- recent two-sided conversion in meaningful fights, not merely an aggregate score accumulated earlier;
- decision-critical items verified.

If the trailing side has only one validated return-kill channel, maximum status is `LEAN`, even when the central projection clears the line.

If the trailing side has no validated return-kill channel, return `NO BET` on the Over.

## 7. Clean-close and return-kill suppression veto

Use the exact verdict:

`NO BET — CLEAN-CLOSE/RETURN-KILL SUPPRESSION VETO`

The veto is mandatory when at least four of the following are present:

1. the leader has Baron, base access, an inhibitor route, or at least a two-tower advantage;
2. the leader has at least two item-qualified damage or conversion channels;
3. the trailing engage, frontline, peel, or protection layer is materially impaired;
4. the trailing side has no more than one validated return-kill channel;
5. the leader won the intervening state by at least 2-0 kills while improving gold, towers, or objective control;
6. one credible objective-to-inhibitor or objective-to-Nexus sequence exists before another full neutral cycle.

When the veto is active:

- unresolved Baron, dragon, inhibitor, and base inventory cannot by itself justify an Over;
- do not assume every remaining structure creates another two-sided fight;
- project a one-sided close branch explicitly;
- an earlier Over thesis expires.

This rule corrects MKOI vs FNC Game 3, where the late Over 36.5 thesis remained too high after MKOI established a one-sided close path and FNC's return-kill access deteriorated.

## 8. Kill Over promotion margins

All v0.3.23 requirements remain, plus:

### Balanced or near-parity state

When gold, towers, and objectives are near parity and both teams have two validated channels:

- central final-kill projection must exceed the line by at least two kills;
- lower conservative branch may be no more than three kills below the line.

### Leader-controlled state

When any of the following is true:

- gold lead is approximately 3k or more;
- tower lead is at least two;
- Baron or base access is held;
- the trailing delivery/protection layer is impaired;

then an official Over additionally requires:

- central projection at least three kills above the line;
- lower conservative branch no more than two kills below the line;
- two validated trailing return-kill channels;
- no clean-close veto.

A projected range that barely straddles the line is at most `LEAN`.

## 9. Kill Under unresolved-inventory restraint

Early LEC Under watches repeatedly failed when map inventory remained large.

A formal Kill Under is prohibited when all are present:

- at least three unresolved inventory categories remain;
- both teams retain two validated damage or conversion channels;
- no verified clean-close route removes a future cycle;
- the line sits within two kills of the central projection.

In that state, use `NO BET` or `WATCH ONLY`, even when current kill pace is low.

An Under may still qualify with substantial line-specific headroom, as in FNC vs MKOI Game 2 Under 39.5, provided the upper conservative budget and safety buffer are satisfied.

Do not classify a generic “Under direction.” Grade the exact line.

## 10. Duration probation quarantine

All duration markets are ineligible for `OFFICIAL BET` through the settlement of probation wager 20.

This applies to Duration Over and Duration Under.

Maximum status:

- `LEAN`, or
- `WATCH ONLY`.

Every duration verdict must append:

`ANALYSIS ONLY — DURATION INELIGIBLE THROUGH WAGER 20`

Duration analysis remains mandatory at each synchronized state, but it cannot consume map exposure or advance probation.

## 11. One-sequence close score for duration

At or after 20:00, score the leading side on five factors:

1. two item-qualified damage or conversion channels;
2. objective leverage or control of the next mandatory neutral setup;
3. tower access, exposed lane, or Baron-enabled siege;
4. materially impaired defender waveclear, carry, frontline, or protection layer;
5. reliable engage, flank, backline access, or reset denial.

### Score treatment

- **0-2:** no automatic compression adjustment.
- **3:** shorten the central duration range by approximately one to two minutes unless structure depth strongly opposes it.
- **4:** do not issue a Duration Over lean unless the conservative earliest finish remains at least three minutes beyond the line.
- **5:** Duration Over is `NO BET`; explicitly test a one-sequence or one-reset finish.

A prior Baron recovery by the trailing team does not automatically add a full objective cycle. It adds time only if safe waves, vision access, item function, and structure defense were actually restored.

## 12. Moneyline preference under objective confirmation

Moneyline may be the best safety-adjusted market when:

- the proposed side has independent confirmation through kills, towers, dragons, Baron, or wave access;
- at least two functioning conversion channels exist;
- carry protection or engage reliability is superior;
- the opponent has an impaired core damage or protection channel;
- the negative kill handicap requires excessive future separation.

This preserves the FNC Game 2 lesson: the moneyline was correct while FNC -12.5 was too aggressive.

## 13. Mandatory live output additions

Every synchronized state must still display:

1. moneyline;
2. kill handicap;
3. kill total;
4. duration.

In addition, display when decision-relevant:

- thesis ID and whether the line is a new thesis or reprice update;
- validated conversion channels for each side;
- validated return-kill channels for the trailing side;
- clean-close veto status;
- one-sequence close score for duration after 20:00;
- official eligibility and placement status.

If a market is absent or suspended, state `MARKET UNAVAILABLE/LOCKED`.

## 14. Five-map LEC calibration summary

### G2 vs SK Game 1

- SK +9.5 placed and won.
- Under 28.5 watch lost at 30 total kills.
- Final duration 41:36 demonstrated that waveclear can extend both time and cumulative kill inventory.

### G2 vs SK Game 2

- SK positive handicaps covered throughout.
- Early Under watches lost.
- Late Kill Overs and Duration Overs won in a prolonged near-parity state.
- Over 49.5 placed and won at 51 total kills.

### MKOI vs FNC Game 1

- FNC +8.5 covered; tighter +5.5 and +6.5 failed.
- Over 37.5 placed and won by only 0.5 kills.
- Duration Over 33/34 failed because MKOI had an accelerated objective-to-base close.

### MKOI vs FNC Game 2

- FNC moneyline placed and won.
- FNC -12.5 failed despite the correct winner thesis.
- Under 39.5 won.
- Duration Under 31 missed by nine seconds; Duration Over 33/34 failed.

### MKOI vs FNC Game 3

- MKOI -10.5 watch won.
- Late Over 36.5 unplaced official and lean both lost at 34 kills.
- Duration Over entries failed at a 30:49 finish.
- The key correction is validated return-kill functionality and clean-close suppression.

## 15. Probation and bankroll

Current official probation state:

- completed: 10/20;
- record: 6-4;
- net: +112,250 VND / +0.11225u;
- wagers 11-20 remain;
- standard stake: 0.25u = 250,000 VND;
- maximum exposure: 0.25u per map;
- minimum odds: 1.60;
- no correlated same-map add-ons;
- official only after explicit placement confirmation;
- duration markets official-ineligible through wager 20.

The LEC 4-0 subset does not authorize a stake increase.

## 16. Review schedule

Review v0.3.24 after the earlier of:

- five new representative Kill Over or clean-close theses;
- five new representative duration theses;
- probation wager 15 settlement;
- a user-requested review.

Track representative theses rather than every reprice. Grade process, line selection, execution availability, and settlement separately.