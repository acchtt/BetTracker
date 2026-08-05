# League of Legends Model Rules v0.3.27

**Status:** Active immediately  
**Effective date:** 2026-08-05 20:28 UTC+7  
**Purpose:** Weight role-specific gold distribution explicitly and add a match-scoped item-verification waiver for Gen.G vs HLE Game 3.

This version supplements v0.3.26 and supersedes it only where stated. All stricter earlier bankroll, placement, probation, state-direction, expiry, anti-line-chasing, repair, handicap, moneyline, totals, soul-cascade, terminal-access, and exposure rules remain active.

## 1. Triggering correction

In Gen.G vs HLE Game 3, the 2-2 kill state showed an overall gold lead of approximately 491 for Gen.G, not HLE.

The role split was materially more informative than the small aggregate number:

- Gen.G held meaningful gold advantages in top, mid, and bot carry positions;
- HLE's positive offsets were concentrated mainly in jungle and support;
- the previous analysis treated the aggregate lead as nearly neutral and failed to distinguish carry-concentrated gold from lower-conversion support gold.

The earlier `LEAN — HLE +3.5 kills` is withdrawn because it depended on the wrong gold direction and underweighted the distribution of the lead.

## 2. Mandatory role-gold orientation check

When role-by-role gold is displayed, verify before any verdict:

1. which color and side each role delta favors;
2. whether the displayed total team lead equals the signed sum of the five role deltas;
3. whether carry-role concentration agrees with the stated team direction;
4. whether a user correction or side swap changes the orientation.

If the sign cannot be reconciled, return:

`NO BET — ROLE-GOLD ORIENTATION UNVERIFIED`

Do not describe a team as ahead from the total card alone when the role deltas are visible.

## 3. Role-weighted gold score

Calculate a role-weighted gold score in addition to raw team gold whenever role deltas are available.

Default conversion weights:

- bot carry: **1.30**;
- mid carry: **1.20**;
- top: **1.10**, increased to **1.20** for a gold-dependent carry or side-lane threat and reduced to **0.90** for a low-economy tank;
- jungle: **1.05**, increased to **1.15** for a farm-scaling carry jungler and reduced to **0.95** for a low-economy facilitator;
- support: **0.55**.

Use champion function, not role label alone, for the permitted adjustment.

The score is directional calibration, not a standalone win probability. It must be combined with objectives, structure, fight conversion, lane access, and composition.

## 4. Carry-concentration treatment

Treat a small aggregate gold lead as materially stronger when most of it is held by two or three functioning damage roles.

A **carry-concentrated lead** exists when:

- at least 70% of the positive weighted gold is held by top carry, mid, bot carry, or carry jungle; and
- at least two of those roles are ahead; and
- the champions can plausibly convert the gold through damage, pressure, objective speed, or side-lane access.

Treatment:

- upgrade state direction by one tier relative to the same raw lead spread across support and low-economy roles;
- improve moneyline and negative-handicap conversion assessment only when access and protection are functional;
- do not automatically increase kill-total projection, because carry concentration may create either repeated kills or a clean close.

## 5. Support and facilitator gold

Support gold is not worthless. It can create boots, utility, engage, protection, and vision breakpoints.

However, absent verified items, a support gold lead receives lower direct conversion weight than carry gold. Do not allow a support lead by itself to offset equal raw gold held by an opposing bot carry, mid carry, or carry top.

Jungle gold must be interpreted by function:

- farm-scaling carry jungle gold can be high value;
- facilitator jungle gold is most valuable when paired with objective control, tempo, or repeated successful initiation.

## 6. Mandatory role-gold output

When role deltas are visible, every synchronized response must state in one compact line:

`ROLE GOLD — team direction; carry concentration; most important advantaged roles`

The response must identify whether the aggregate lead is:

- carry-concentrated;
- balanced;
- support/facilitator-concentrated;
- internally inconsistent or orientation-unverified.

## 7. Market-family interaction

### Moneyline

Carry-concentrated gold is an independent soft confirmation. It becomes hard confirmation only when paired with structure, objective control, a repeated post-reset fight win, or a verified item breakpoint after the temporary waiver expires.

### Kill handicap

Use role-weighted gold to assess future margin expansion, not just winner direction. A lead concentrated in protected damage roles supports margin expansion more than the same raw lead concentrated in support, but the full cascade stress test remains mandatory.

### Kill total

Carry concentration increases damage threat but does not automatically support an Over. Test whether the trailing side retains executable return-kill channels and whether the leader can end through one clean cascade.

### Duration

Carry-concentrated gold can shorten structure and objective conversion when wave access exists. Continue to model fast, central, and extension branches under v0.3.26.

## 8. Temporary Game 3 item-verification waiver

For **Gen.G vs HLE Game 3 only**, decision-critical item verification is temporarily waived as a mandatory promotion gate.

During this waiver:

- unknown items do not automatically cap a verdict at `WATCH ONLY` or `NO BET`;
- do not guess item names, completions, or breakpoints;
- unknown items cannot be counted as positive evidence;
- replace the item gate with verified role gold, K/D/A function, objective inventory, structure, fight conversion, and market movement;
- an official promotion without item verification still requires the normal family-specific confirmation gate and no active veto;
- role-gold orientation must be verified before promotion.

The waiver expires automatically at Game 3 settlement or abandonment. After expiration, the v0.3.25 item-verification requirements resume without further action.

## 9. Current Game 3 correction

At the last synchronized 2-2 state:

- Gen.G held approximately +491 total gold;
- Gen.G's positive gold was concentrated across Kiin, Chovy, and Ruler;
- HLE's positive offsets were primarily Kanavi and Delight;
- the distribution favored Gen.G more strongly than the raw +491 total suggested;
- the previous HLE +3.5 lean is invalidated and withdrawn.

Any new verdict requires a fresh synchronized scoreboard and current prices.

## 10. Probation and exposure

- Completed: 11/20
- Official record: 7-4
- Net: +335,750 VND / +0.33575u
- Wager 12 remains next for model-attributed probation
- Standard stake: 0.25u = 250,000 VND
- Maximum exposure: 0.25u per map
- Minimum odds: 1.60
- No correlated same-map add-ons
- Official only after explicit placement confirmation
- All duration markets remain official-ineligible through wager 20
- No stake increase is authorized

## 11. Review schedule

Review the role-weighted gold calibration after the earlier of:

- five synchronized states with visible role gold;
- probation wager 15 settlement;
- two role-gold direction or concentration misclassifications;
- a user-requested review.
