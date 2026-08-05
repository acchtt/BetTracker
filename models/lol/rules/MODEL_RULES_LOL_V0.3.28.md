# League of Legends Model Rules v0.3.28

**Status:** Active immediately  
**Effective date:** 2026-08-05 22:33 UTC+7  
**Purpose:** Suspend item verification until explicit restoration, add observed-execution calibration, require correction-triggered market rescans, and improve margin and kill-total assessment.

This version supplements v0.3.27 and supersedes earlier rules only where stated. All stricter bankroll, placement, probation, state-direction, expiry, anti-line-chasing, repair, exposure, objective-inventory, role-gold, soul-cascade, and terminal-access rules remain active.

## 1. Persistent item-verification suspension

Decision-critical item verification is suspended for all LoL analysis until the user explicitly instructs that it be restored.

This suspension has no automatic expiry by match, date, model version, or chat boundary.

During the suspension:

- do not require item screenshots;
- do not delay a verdict solely because items are unreadable or absent;
- do not guess item names, completions, components, or breakpoints;
- do not cite unknown items as positive or negative evidence;
- do not describe a champion as being on a specific item spike unless the user supplies that information clearly;
- an official promotion may proceed without item verification when every other market-family gate is satisfied and no active veto remains.

Item verification resumes only after an explicit user instruction such as `restore item verification`, followed by a model or operating-state update.

## 2. Item-dependent thesis veto

The suspension removes the mandatory item gate; it does not permit unsupported item assumptions.

When a thesis depends primarily on an unverified item condition, remove that condition from the thesis and reassess using observable evidence. Examples include:

- a presumed anti-heal purchase;
- a presumed defensive completion against burst;
- a presumed two-item or three-item spike;
- a presumed penetration, cleanse, stasis, or engage breakpoint.

If the market has no sufficient non-item basis after removing the assumption, return `NO BET — THESIS DEPENDS ON UNVERIFIED ITEMS`.

## 3. Phone-compatible evidence stack

While item verification is suspended, use this evidence order:

1. explicit user correction;
2. synchronized clock, kills, gold direction, towers, dragons, Grubs, Herald, Baron, Elder, inhibitors, and base access;
3. role-gold orientation and carry concentration;
4. K/D/A function, kill participation, survival, and shutdown exposure;
5. independent fight, pick, objective, and structure conversions;
6. target access, protection, disengage, wave access, and objective speed from the known draft;
7. synchronized market line and price;
8. earlier state and draft prior.

Unknown items are neutral and are omitted rather than treated as missing confirmation.

## 4. Triggering review: Gen.G vs HLE Game 3

Gen.G won Game 3 in 36:07.

Final state:

- kills: Gen.G 27-14 HLE;
- gold: Gen.G approximately +6.6k;
- towers: Gen.G 9-6;
- dragons: Gen.G 4-1;
- Barons: Gen.G 2-1;
- inhibitors: 1-1.

The final role-gold display showed approximately:

- HLE top +1,638;
- Gen.G jungle +1,507;
- Gen.G mid +3,256;
- Gen.G bot +2,498;
- Gen.G support +969.

The user correctly identified that Gen.G executed better. The model captured the role-gold correction in v0.3.27 but did not fully convert that lesson into live market assessment.

## 5. What the model missed

### 5.1 Draft-prior overconfidence

The pregame assessment gave HLE a moderate draft edge because of frontline and scaling. This underweighted Gen.G's executable architecture:

- Varus offered long-range pick and initiation;
- Nocturne denied information and delivered backline access;
- Syndra supplied immediate burst and pick conversion;
- Kalista and Renata supplied lane pressure, objective control, protection, and layered engage;
- HLE's Viktor-Yunara core had substantial scaling but limited self-protection against coordinated access;
- Mundo's top-side economy could not automatically compensate for deficits in the primary mid and bot damage roles.

A composition's theoretical front-to-back strength must be discounted when its carries have higher protection and positioning burden than the opponent's initiation burden.

### 5.2 Correction without immediate full rescan

At the 2-2 state, the model initially read the approximately 491-gold direction backward. After correction, it withdrew the HLE +3.5 lean but did not immediately regrade every visible market using the same synchronized scoreboard and odds.

That was a process failure. A correction must trigger a complete rescan before repository maintenance or a request for another screenshot, unless the visible state or prices are clearly stale.

### 5.3 Execution quality was not an explicit live variable

The model described composition quality but lacked a compact method for upgrading the team that repeatedly converted setup into kills, objectives, and structures.

Gen.G's final four dragons, two Barons, nine towers, and carry survival showed an execution advantage beyond raw draft labels.

### 5.4 Margin expansion was under-modeled

The early Gen.G carry-concentrated lead was relevant not only to moneyline direction but also to future kill separation. The model correctly avoided retroactively calling Gen.G -3.5 official, but it did not rescan the negative handicap as a candidate after the gold correction.

### 5.5 Kill-total risk was underweighted

The last early projection centered near 33 kills and treated Under 34.5 as a watch. The map finished with 41 kills.

The model underweighted:

- two-sided initiation and return-kill routes;
- Gen.G's repeatable pick access;
- HLE's capacity to trade kills through Leona, Shyvana, Mundo, Viktor, and Yunara;
- the number of likely major-objective contests;
- the possibility that a superior execution team could win repeatedly without producing a clean low-kill close.

The duration projection near 35 minutes was accurate relative to the 36:07 result; the primary miss was kill inventory, not time.

## 6. Observed-execution override

Draft is a prior. Live execution becomes the controlling signal after sufficient independent evidence.

An **independent execution conversion** is a post-reset sequence that is not merely the continuation of the same fight and produces at least one of:

- a favorable fight or pick with meaningful resource gain;
- a neutral objective;
- a tower or inhibitor;
- a clean reset that preserves map control and denies the opponent a trade.

After two independent favorable conversions by the same team:

- upgrade that team's live state by one tier;
- reduce the weight of a conflicting pregame draft edge;
- rescan moneyline and handicap markets;
- reassess kill-total and duration routes based on the observed conversion style.

After three independent favorable conversions, the live execution signal supersedes the draft prior unless a major state repair occurs.

## 7. Execution Conversion Score

For each independent sequence, award:

- **1 point:** favorable fight or pick;
- **+1:** dragon, Herald, Baron, Elder, or comparable major neutral secured;
- **+1:** tower, inhibitor, or base access converted;
- **+1:** clean reset or retained control that prevents a meaningful counter-trade.

Interpretation:

- one sequence scoring 3-4 is strong but correlated evidence;
- two separate sequences scoring at least 2 each are hard execution confirmation;
- repeated 3+ sequences support winner and margin expansion, subject to the exact handicap calculation and cascade stress test.

Do not double-count kills, objective, and structures from one continuous sequence as independent confirmations.

## 8. Execution-burden comparison

For every complete draft, compare both teams on:

- initiation simplicity;
- target access;
- damage follow-through;
- carry self-protection;
- peel and disengage;
- objective speed;
- wave access;
- side-lane stability;
- failure cost when the first engage misses.

A scaling or frontline advantage is not sufficient by itself. State which team has the easier repeatable execution pattern and which team has the higher protection or positioning burden.

## 9. Role-gold conversion refinement

Continue the v0.3.27 role weights, with these additions:

- gold on an unkillable or low-threat tank is valuable for space but converts less directly into kill margin than gold on protected mid or bot damage;
- a top-lane lead cannot offset opposing mid-and-bot deficits by raw arithmetic alone;
- carry gold receives full directional weight only when the carry has observable participation, survival, target access, or objective conversion;
- support and facilitator gold receives upgraded value when it is visibly producing repeated successful engage, protection, or objective control.

Required compact output when role gold is visible:

`ROLE GOLD — direction; carry concentration; execution conversion status; key advantaged roles`

## 10. Correction-triggered full market rescan

Any user correction or orientation repair that invalidates a prior verdict must immediately trigger:

1. corrected state statement;
2. corrected role-gold direction when visible;
3. moneyline rescan;
4. kill-handicap rescan;
5. kill-total rescan;
6. duration rescan;
7. replacement verdict or `NO BET`.

Use the existing synchronized prices when they are displayed in the same timestamped state or there is no evidence of a meaningful delay. Do not demand a new screenshot solely because the model corrected its own reading.

Repository writes and model maintenance occur after the corrected live verdict.

## 11. Negative kill-handicap calibration

For a negative kill handicap, state:

- current kill margin;
- required final margin;
- additional future net kills required;
- role-weighted gold direction;
- execution conversion score;
- target-access and protection advantage;
- objective and structure conversion;
- trailing return-kill function;
- clean-close versus repeated-fight route.

Carry-concentrated gold is soft margin evidence. It becomes hard margin evidence only with at least two independent execution conversions or equivalent objective-and-structure confirmation.

At the corrected 2-2 Gen.G vs HLE state, Gen.G -3.5 still required four future net kills. The carry distribution justified a rescan and directional upgrade, but not an automatic official promotion by itself.

## 12. Kill-total calibration

Before leaning Under when both teams have executable engage, verify:

- exact clock;
- current kill rate;
- whether the early kills came from one isolated incident or separate sequences;
- number and timing of remaining major-objective contests;
- both teams' return-kill access;
- whether the leader's likely route is a clean cascade or repeated contested conversion.

Rules:

- if the exact clock is unknown, do not promote a pace-based kill-total thesis;
- four or more early kills before the first completed objective phase, combined with two-sided engage, raises the central kill range unless the next full cycle stabilizes;
- superior execution does not automatically imply a clean low-kill close;
- repeated pick tools plus a trailer that can trade kills support a higher outer range;
- an Under requires line headroom and evidence that at least one side's return-kill function is suppressed.

## 13. Duration calibration retained

No duration-rule change is required from Game 3. The projected point near 35 minutes was close to the 36:07 result.

Continue v0.3.26 fast, central, and extension branches, objective-inventory verification, soul-cascade analysis, terminal-access rules, and methodical-control restrictions.

All duration markets remain official-ineligible through probation wager 20.

## 14. Live response order

For synchronized screenshots, respond in this order:

1. `VERDICT — market @ odds — stake/status`;
2. verified state and direction;
3. `ROLE GOLD` line when available;
4. execution conversion status;
5. total-kill projection;
6. duration projection;
7. one promotion or rejection trigger.

Do not ask for items while the suspension is active.

## 15. Probation and accounting

- Completed: 11/20
- Official model-attributed record: 7-4
- Model-attributed net: +335,750 VND / +0.33575u
- Wager 12 remains next for model-attributed probation
- Standard stake: 0.25u = 250,000 VND
- Maximum exposure: 0.25u per map
- Minimum odds: 1.60
- No correlated same-map add-ons
- Official only after explicit placement confirmation
- No stake increase is authorized

The settled Gen.G Game 1 moneyline and Gen.G Game 3 -3.5 wins remain in the overall ledger but are not automatically model-attributed or counted toward probation.

## 16. Review schedule

Review v0.3.28 after the earlier of:

- five official or representative live assessments made without item verification;
- five synchronized states with role gold and execution scoring;
- probation wager 15 settlement;
- two correction-triggered rescans that materially change the verdict;
- two further kill-total misses of six or more kills;
- an explicit user-requested review.
