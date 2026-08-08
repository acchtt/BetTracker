# MODEL RULES — LEAGUE OF LEGENDS v0.3.41

**Status:** Active delta  
**Effective date:** 2026-08-08 23:47 UTC+7  
**Supersedes:** v0.3.40 only where stated

## Purpose

Correct the NAVI +5.5 kills vs SK Game 2 failure and, specifically, the failed draft reassessment after the position was already recorded.

The core failure was not merely variance. The model allowed the existence of a recorded position to anchor the current thesis, overvalued generic late scaling as kill-margin resilience, and underweighted SK's pick-to-objective kill-cascade architecture.

v0.3.40 moneyline and early-total corrections, v0.3.39 phase-aware handicap probability gates, v0.3.38 favorite structural ladder, Objective-Control Handicap Veto, executable-price discipline, settlement rules, and all retained controls remain active.

---

## 1. Position-Blind Reassessment Rule

A recorded position and the current thesis are separate state objects.

On every material new snapshot — and whenever the user explicitly asks to **reassess the draft/compositions** — recompute the current thesis **from scratch** using the newest synchronized state.

The reassessment must not use any of the following as supporting evidence:

- the fact that the position was already recorded;
- the original entry recommendation;
- the desire to preserve consistency with a previous verdict;
- sunk stake or simulated P/L;
- the current sportsbook price moving against the recorded selection.

The only permitted inputs are current map state, verified draft/composition, observed execution, objective/structure state, and the applicable model rules.

### Mandatory thesis labels for a recorded position

For the original recorded selection, estimate a current reasonable probability range and compare its lower bound with the original entry break-even probability and the applicable phase edge gate.

- **ACTIVE:** lower bound still clears original entry break-even by the required phase buffer and no hard veto is active.
- **DEGRADED:** lower bound remains above original break-even but no longer clears the required phase buffer.
- **INVALIDATED:** lower bound is at or below original break-even, or any hard veto now applies.
- **CONFIRMED:** only when the thesis has materially strengthened; this never changes settlement rules.

A recorded position remains on the ledger even when the thesis becomes INVALIDATED. Do not rewrite, delete, hedge, rescue, or retroactively cancel it.

---

## 2. Mandatory Reassessment Triggers

Recompute handicap thesis state immediately when any of the following occurs:

- user explicitly asks to reassess draft/compositions;
- >=2.0k meaningful gold swing from the entry snapshot;
- tower differential changes by 2 or more;
- first Baron or Elder is taken;
- inhibitor/base access is created;
- dragon/soul-point alignment changes materially;
- >=2 net-kill swing from the entry snapshot;
- a previously theoretical return-kill or defensive mechanism is repeatedly shown to fail;
- a favorite's pick-to-objective sequence becomes demonstrated rather than theoretical.

The output must state the new thesis label independently of the recorded-position status.

---

## 3. Positive-Handicap Resilience Must Be Mechanistic

Do not treat the words **scaling**, **late game**, **teamfight**, or **multiple carries** as evidence that a trailing team will preserve a positive kill handicap.

For the positive-handicap side, explicitly score whether the composition has credible mechanisms in these six categories:

1. **safe range** — can damage or clear without entering the opponent's primary pick zone;
2. **disengage/reset** — can reliably break the first engage and reset the fight;
3. **waveclear/base defense** — can delay structure conversion without donating kills;
4. **anti-dive / peel** — can protect priority carries after the opponent commits;
5. **objective contest access** — can approach or contest river/objective zones without walking through lethal control;
6. **return-kill reliability** — can consistently trade kills after losing first contact.

Each category is evidence, not a narrative label. Theoretical draft availability is weaker than observed execution.

### Scaling is not resilience

Late scaling only supports a positive handicap when it translates into at least two of the mechanisms above. A short-range scaling composition that must cross enemy control to fight may have strong win-condition scaling but poor **kill-margin resilience**.

---

## 4. Draft Cascade-Structure Veto

This veto is separate from, and cumulative with, the Objective-Control Handicap Veto.

For a **positive kill handicap**, `PASS` unless strong counterevidence exists when all are true:

1. the opponent currently leads in **gold**;
2. the opponent currently leads in **structures** or has demonstrated repeatable structure access;
3. the opponent composition has a clear **pick-to-kill-to-objective cascade** with at least three meaningful components among:
   - point-and-click / highly reliable engage;
   - layered CC follow-up;
   - long-range burst or cleanup;
   - chase / semi-global reinforcement;
   - objective-zone denial;
   - dive continuation;
4. the positive-handicap side does not have demonstrated level-3+ return-kill/contest evidence or at least three credible mechanistic resilience categories from Section 3.

Neutral-objective control being split does **not** cancel this veto. Gold + structural initiative plus a demonstrated cascade architecture can be sufficient.

If the veto is active, a small current kill margin or a visually large handicap cushion is not evidence of value.

---

## 5. Pick-Cascade Margin-Expansion Penalty

When the favorite/leader has a repeatable sequence of:

**reliable first contact -> burst/CC conversion -> numbers advantage -> objective/structure control -> second pick**, materially widen the favorite's high-margin kill branch.

The penalty is strongest when:

- the trailing team is short-ranged;
- objective approaches are choke-dependent;
- the trailing team lacks safe waveclear/disengage;
- the leader has Gnar-like zone control, Pantheon/Nocturne/global reinforcement, Leona/Vi-type reliable initiation, Syndra/Varus-type ranged conversion, or equivalent functional tools;
- the leader already owns map tempo.

Do not model each future fight as independent. The first successful cascade can increase the probability of the next one by shrinking vision, structure and objective access.

---

## 6. Reassessment Probability Discipline

For an existing handicap position, do not keep the thesis ACTIVE using qualitative phrases such as "still defensible" or "scaling keeps it alive."

At every mandatory reassessment:

1. restate current exact kill margin and remaining cushion;
2. update gold / towers / neutral objectives / Baron / base access;
3. re-score cascade risk and mechanistic resilience;
4. estimate a fresh current cover-probability range for the **original selection**;
5. compare the lower bound with original entry break-even and phase buffer;
6. assign ACTIVE / DEGRADED / INVALIDATED.

If the probability range cannot be supported, fail closed to **DEGRADED** or **INVALIDATED**, never ACTIVE by intuition.

---

## 7. NAVI vs SK Game 2 Calibration

### Recorded position

At 14:51, NAVI +5.5 kills @1.886 was recommended and confirmed for 0.25u shadow.

Entry state:

- SK 8-7 NAVI;
- SK +1.9k gold;
- SK 1-0 towers;
- SK 2-1 Grubs;
- NAVI 1-0 dragons.

Drafts:

- NAVI: Ambessa / Lee Sin / Ryze / Viktor / Alistar
- SK: Gnar / Pantheon / Syndra / Varus / Leona

Final: **SK 18-8 NAVI**, SK +10 kill margin. NAVI +5.5 lost by 4.5 kills.

### Entry-process error

The original 58-63% cover estimate was too high.

The model overvalued NAVI's generic extended-fight/scaling labels and underweighted:

- NAVI's short effective range into Varus/Syndra control;
- SK's Pantheon + Leona first-contact reliability;
- Syndra/Varus ranged conversion after first CC;
- Gnar objective-zone denial;
- SK's existing gold + structural initiative;
- the serial nature of pick -> objective -> vision denial -> next pick.

Under v0.3.41, the **Draft Cascade-Structure Veto** would have been active at 14:51. NAVI +5.5 would therefore be `PASS`, absent stronger observed level-3+ return-kill/contest evidence.

### Failed explicit reassessment

When the user explicitly asked to reassess the compositions, the response said the position was "still defensible" and became only slightly less bullish.

That was incorrect. The reassessment should have been position-blind and should have reduced the current NAVI +5.5 cover range to approximately a non-qualifying band, marking the thesis **DEGRADED or INVALIDATED** while leaving the recorded position untouched.

By 19:51, SK led 10-8 kills, +3.0k gold and 3-1 towers with dragons 1-1. Under v0.3.41 the recorded NAVI +5.5 thesis must be **INVALIDATED** because gold + structural control and SK's demonstrated cascade architecture were aligned even though dragons were tied.

By 21:01, SK led +5.3k with Baron and 3-1 towers; the position was structurally broken and must remain INVALIDATED.

---

## 8. Relationship to Existing Handicap Rules

v0.3.41 does not lower v0.3.39 probability thresholds. It adds stricter veto/reassessment requirements.

For a new handicap TAKE, the lower end of `P_cover` still must clear break-even by:

- +5pp for pregame positive handicaps;
- +4pp for early-live handicaps;
- +3pp for mid/late-live handicaps.

If the Draft Cascade-Structure Veto or Objective-Control Handicap Veto is active, the positive handicap is a `PASS` regardless of a superficial probability estimate unless the veto's explicit counterevidence requirement is met.

---

## 9. Recorded Position vs New Market Decisions

When a recorded position is INVALIDATED:

- do not add to it;
- do not recommend a wider same-side handicap as rescue;
- do not automatically take the opposite side because that would be correlated repair/chasing;
- continue to scan independent markets normally subject to correlation rules;
- record the thesis-state change separately from settlement.

The purpose of invalidation is calibration and decision quality, not in-play hedging.

---

## 10. Retained Controls

All prior controls remain active:

- verdict first;
- complete checklist before every live verdict;
- executable-price confirmation before recording;
- minimum odds 1.60;
- official betting remains paused until explicit restoration;
- default shadow stake 0.25u;
- no correlated same-map add-ons;
- no rescue/chase logic;
- total kills and duration remain independent;
- current-map hard evidence resets every map;
- item verification remains suspended;
- user `Final` instruction is authoritative final-state confirmation when synchronized grading statistics are present;
- logging/plugins occur after the live verdict.

Where this delta conflicts with earlier rules, **v0.3.41 controls**.
