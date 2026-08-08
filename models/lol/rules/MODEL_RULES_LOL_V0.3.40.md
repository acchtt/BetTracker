# MODEL RULES — LEAGUE OF LEGENDS v0.3.40

**Status:** Active delta  
**Effective date:** 2026-08-08 22:50 UTC+7  
**Supersedes:** v0.3.39 only where stated

## Purpose

Correct two remaining calibration failures exposed by recent shadow review:

1. **pregame / 0:00 moneyline overconfidence after draft**, especially when a qualitative composition read is converted into a narrow win-probability estimate without enough edge over break-even;
2. **early-live Under overconfidence in high-fight/global-engage drafts**, where current kill pace and unresolved objective/cascade inventory are underweighted in the high-kill branch.

v0.3.39 phase-aware kill-handicap rules, v0.3.38 favorite structural margin-expansion ladder, Objective-Control Handicap Veto, executable-price discipline, settlement rules, and all retained controls remain active.

---

## 1. Pregame / 0:00 Moneyline Probability Gate

A draft read is not sufficient by itself to justify a moneyline TAKE.

Before any pregame / 0:00 ML TAKE, explicitly construct:

- baseline map win-probability range before draft;
- verified side adjustment;
- draft/composition adjustment;
- execution/form adjustment that is actually supported by current roster evidence;
- final reasonable `P_win` range;
- `P_break_even = 1 / decimal_odds`.

### TAKE threshold

For a pregame / 0:00 ML TAKE, the **lower end** of the reasonable `P_win` range must clear break-even by at least **3 percentage points**.

If the lower end does not clear by +3pp => `PASS` or `HOLD`.

Do not use the midpoint alone to qualify a TAKE.

---

## 2. Draft-Adjustment Guardrail

Draft/composition analysis may move the baseline map prior, but the size of that move must be disciplined.

### Normal draft adjustment

Absent exceptional evidence, draft alone should move a map prior by approximately **0–4 percentage points**.

### Exceptional adjustment

A draft move greater than 4pp requires at least **three independent, material matchup advantages**, such as:

- clearly superior engage reliability;
- materially stronger objective setup/forcing;
- major side-lane or scaling asymmetry;
- unusually favorable ultimate theft / denial interactions;
- strong anti-dive or anti-frontline interaction;
- superior range/control that changes how fights can begin;
- draft-specific execution evidence from the current roster/team.

The advantages must be independent, not multiple descriptions of the same combo.

### Anti-narrative rule

Do not inflate an underdog's win probability because one visually attractive interaction exists (for example, Sylas having access to strong enemy ultimates) unless that interaction materially changes multiple realistic fight states.

Similarly, do not overrate a wombo composition solely because the combo is obvious; engage reliability, setup requirements, range, cooldown overlap, and opponent disruption must be considered.

---

## 3. Map Prior Must Be Distinct From Series Prior

Series-level team strength is a soft prior, not the map probability itself.

For each map at 0:00:

- reset current-map hard evidence;
- account for side, draft, substitutions, and map-specific composition;
- do not transplant the pre-series series-win probability directly into Game 1/2/3 ML pricing;
- do not let an existing separate series or map bet anchor the new map thesis.

If a pre-series lean and the draft conflict, explicitly state which component changed the map prior and by how much.

---

## 4. Early-Live Total-Kills Probability Gate

Total-kills TAKEs now require an explicit probability edge, not only low/central/high branches.

For **early live** total-kills markets (roughly before repeated objective/structure cycles are established):

1. calculate current total kills;
2. calculate whole kills required to win/lose the line;
3. build low / central / high remaining-kill branches;
4. assign a reasonable probability range to the selection;
5. calculate break-even probability;
6. require the **lower end** of the selection probability range to clear break-even by at least **4 percentage points**.

For **mid/late live** total-kills TAKEs, require at least **+3 percentage points** over break-even at the lower end of the probability range.

If this probability edge is not supportable => `PASS`/`HOLD`.

---

## 5. Early Fight-Density Reserve

When early kill pace is elevated and the compositions contain multiple forced-fight channels, the high-kill branch must receive a larger probability weight.

### Elevated-pacing triggers

Treat the map as high early fight-density when any of the following are true:

- **>=8 total kills by 8:00**;
- **>=10 total kills by 10:00**;
- repeated multi-player skirmishes have already occurred before first major objective cycles complete;
- both teams have multiple globals / semi-globals / point-and-click engage / layered follow-up and those tools are coming online.

### Mandatory high-branch reserve

If an elevated-pacing trigger is active **and** at least three meaningful future fight windows remain (dragons, Grubs/Herald, Baron setup, soul-point/soul, base defense, etc.), the high-kill branch cannot be treated as a remote tail.

Absent strong suppression evidence, assign the high-kill branch at least **25–30% probability mass** during early live modeling.

Strong suppression evidence means more than towerlessness. Examples include repeated disengages, failed objective contests without deaths, compositionally credible long-range stalling, or a demonstrated inability of the leader to force contact.

---

## 6. Global / Cascade Composition Reserve for Unders

For an Under, explicitly inventory both teams' remaining fight-creation channels:

- globals / semi-globals;
- point-and-click engage;
- layered engage chains;
- reset/chase tools;
- objective forcing;
- dive + follow-up;
- safe cleanup DPS;
- base-defense kill opportunities.

If the two drafts collectively contain **four or more meaningful fight-creation channels**, apply a volatility penalty against early Under positions.

The Under may still qualify at a sufficiently inflated line/price, but the model must demonstrate the required probability edge after the volatility penalty.

---

## 7. Line Expansion Can Improve an Under Thesis

Do not assume that a later, larger total-kills line is worse merely because more kills have occurred.

Reprice from scratch using:

- current kills;
- additional kills required to break the Under;
- remaining clock/structure state;
- objective inventory;
- base access;
- current gold/control;
- branch probabilities.

A line can move from a bad Under (for example, 32.5 in a high-paced early map) to a good Under (for example, 43.5 after the bookmaker overextends the kill projection) if the additional cushion grows faster than the unresolved kill inventory.

This does **not** permit chasing an expired recommendation. Each new line is an independent decision.

---

## 8. NAVI vs SK Game 1 Calibration

### Recorded post-draft ML loss

At 0:00, SK ML @2.239 was recommended and confirmed as a separate 0.25u shadow bet.

Drafts:

- NAVI: Olaf / Nocturne / Orianna / Miss Fortune / Shen
- SK: Kled / Vi / Sylas / Corki / Rell

The recommendation priced SK around 47–50% versus 44.66% break-even. Final was NAVI 27-12 at 30:14.

Process error:

- the lower end of the stated SK range (47%) cleared break-even by only ~2.34pp, which would **fail the new +3pp pregame ML gate**;
- the analysis overemphasized Sylas access to NAVI ultimates and SK return-engage;
- NAVI's Nocturne/Shen delivery into Orianna/Miss Fortune plus Olaf front pressure formed a more coherent, repeatable initiation package than the adjustment credited.

Under v0.3.40, SK ML @2.239 would be **PASS/HOLD**, not TAKE, unless the lower-bound `P_win` estimate reached at least ~47.66% after all draft adjustments.

### Unconfirmed early Under 32.5

At 6:51, NAVI led 6-2 with +2.9k gold and first dragon. Under 32.5 @2.827 was recommended but never confirmed; final total was 39, so it remains **NO BET / 0u** and is calibration only.

Process error:

- 8 kills by 6:51 already activated high fight-density;
- both drafts had multiple global/engage/cascade channels;
- unresolved dragons/Grubs/Baron/base-defense windows gave the high branch too much inventory to be treated lightly.

Under v0.3.40, the high branch receives a mandatory 25–30% early reserve absent strong suppression evidence, and an early Under TAKE must still clear break-even by +4pp at the lower end of its probability range.

### Later unconfirmed reads

Under 43.5 @2.480 at 13:21 and Over 29 minutes @2.008 at 18:41 were unconfirmed and therefore **NO BET / 0u**, even though final 39 kills / 30:14 would have favored both. They remain calibration examples only.

---

## 9. Relationship to Existing Rules

### Moneyline

v0.3.40 adds the +3pp lower-bound edge gate for pregame/0:00 ML. Existing minimum odds 1.60 still applies.

### Kill handicap

v0.3.39 remains fully controlling for handicap phase separation and cover-probability thresholds.

### Favorite structural ladder

v0.3.38 remains active.

### Objective-Control Handicap Veto

Remains active.

### Duration

No weakening or merger with total kills. Duration remains independently modeled. NAVI vs SK Game 1 reinforced that a high-kill map can still require methodical structure conversion and run past a short duration line.

---

## 10. Retained Controls

All prior controls remain active:

- verdict first;
- complete checklist before every live verdict;
- recorded positions separate from current thesis;
- executable-price confirmation before recording;
- minimum odds 1.60;
- official betting remains paused until explicit restoration;
- default shadow stake 0.25u;
- no correlated same-map add-ons;
- no rescue/chase logic;
- total kills and duration independent;
- user `Final` instruction is authoritative final-state confirmation when synchronized grading statistics are present;
- logging/plugins occur after active live verdicts.

Where this delta conflicts with earlier rules, **v0.3.40 controls**.
