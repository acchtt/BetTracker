# League of Legends Model Rules v0.3.31

**Status:** Active immediately  
**Effective date:** 2026-08-06 14:30 UTC+7  
**Purpose:** Correct false live-handicap stabilization, require multi-snapshot trend reversal, and activate a temporary official-wager circuit breaker after consecutive model failures.

This version supplements v0.3.30 and supersedes earlier rules only where stated. All stricter bankroll, placement, exposure, minimum-odds, duration-ineligibility, item-suspension, role-gold, current-map reset, conversion-arithmetic, resilience, anti-whipsaw, and correction-rescan rules remain active.

## 1. Triggering shadow miss

During T1 Esports Academy vs DN SOOPers Challengers Game 3, the model issued a live candidate:

`DNS +11.5 kills @1.913 — 0.25u candidate`

The user did not confirm placement, so this was not an official wager and does not affect the ledger or probation record.

At the candidate state:

- T1A led 10-7 kills;
- T1A led approximately 4,000 gold;
- T1A led 2-0 towers;
- T1A led 2-0 dragons;
- role gold favored T1A in top, mid, bot, and support;
- DNS led only jungle gold;
- no Baron or inhibitor had been taken.

The game ended 26-12 in the score order supplied by the user. From the candidate state, T1A won the remaining kills 16-5, a +11 future net-kill margin. DNS +11.5 would therefore have lost by 2.5 kills.

## 2. What went wrong

The model treated one DNS kill and a small reduction in the gold deficit as a defensive confirmation. That was incorrect because the broader state remained structurally dominant for T1A.

The candidate failed for five reasons:

1. **Single-event confirmation error:** one kill was treated as independent stabilization despite no objective or structure reversal.
2. **Trend blindness:** the model compared only the latest snapshot, not the sequence from T1A +2.1k to +4.5k and two towers before the minor pullback to +4k.
3. **Broad role-gold underweighting:** T1A led four of five roles, including both solo lanes and bot.
4. **Objective inventory underweighting:** T1A held two dragons and two towers, preserving several forced-fight and structure-conversion branches.
5. **Remaining-fight inventory error:** the model assumed +9 future net kills was difficult without estimating how many major contests and base-defense fights remained.

## 3. Official-wager circuit breaker

Effective immediately, the next **two complete LoL maps** are shadow-analysis only.

During the circuit breaker:

- no market may be labeled `BET`, `OFFICIAL BET`, or an official candidate;
- all stakes are 0u;
- the model must still issue exact market verdicts, projections, and promotion/rejection logic for calibration;
- no wager counts toward probation;
- the circuit breaker cannot be shortened by line movement, user urgency, or a strong single-map read.

The circuit breaker ends only after:

1. two complete maps are tracked from draft or first synchronized live state through settlement;
2. each map receives a written post-map calibration review;
3. no unresolved state-orientation error remains; and
4. the user explicitly authorizes restoration of official LoL recommendations.

Do not recommend betting against the model during this period. A failed directional model does not imply that the inverse selection has positive expected value.

## 4. Multi-snapshot stabilization requirement

For any live underdog positive kill handicap of +7.5 or wider, stabilization requires **two consecutive synchronized snapshots** separated by meaningful game action.

Across those snapshots, the underdog must satisfy at least two of the following:

- reduce the gold deficit by at least 20%;
- win a full teamfight or multi-kill sequence with no immediate counter-trade;
- secure or deny a major neutral objective;
- take a tower while conceding none;
- reduce the favorite's role-gold breadth from three or more winning roles to two or fewer;
- prevent the next expected objective or structure conversion and force a clean reset.

A single isolated kill, one pick, or a small gold fluctuation does not satisfy stabilization.

Required output:

`TREND CONFIRMATION — previous snapshot; current snapshot; gold trend; objective/structure trend; stabilization passed/failed`

## 5. Dominance override

Return `NO BET — DOMINANCE OVERRIDE` on an underdog positive kill handicap when all of the following are true:

- game clock is between 12:00 and 24:00;
- favorite leads by at least 3,000 gold;
- favorite leads in at least three role-gold matchups, including at least two of top, mid, and bot;
- favorite leads by at least two combined towers and dragons;
- underdog has not won a full teamfight or major-objective contest since the previous snapshot.

The override remains active even when:

- the handicap widens;
- the price improves;
- the underdog records one isolated kill;
- the favorite's gold lead briefly contracts by less than 20%.

Promotion can resume only after the multi-snapshot stabilization requirement is passed.

## 6. Remaining-fight inventory

For every live kill-handicap assessment, estimate the remaining major fight inventory.

Count expected forced contests from:

- remaining dragons before soul or Elder;
- Herald or Baron windows;
- outer and inner tower defense;
- inhibitor and base-defense sequences;
- composition-specific forced engage or pick frequency;
- whether the trailing team must repeatedly contest from poor entry.

Required output:

`FIGHT INVENTORY — expected major contests remaining; favorite conversion route; projected future net-kill range`

Do not describe a required future net-kill margin as difficult merely because the number is large. Compare it with the number of likely remaining contests and the favorite's demonstrated conversion quality.

## 7. Role-gold breadth rule

Broad role-gold control is distinct from aggregate gold.

When one team leads at least four roles, including at least two damage roles, treat the state as a broad-system advantage. An opposing jungle-only lead or support-only lead cannot neutralize it by arithmetic.

For a positive underdog handicap under broad-system disadvantage:

- require a full fight or objective reversal;
- do not count isolated kills as resilience confirmation;
- increase the favorite's future net-kill upper branch;
- preserve the dominance override until breadth materially narrows.

## 8. Line-widening discipline

A wider handicap is not automatically safer when it is caused by worsening game state.

Before promoting a widened underdog line, state:

- previous line and state;
- current line and state;
- whether the additional cushion exceeds the deterioration in gold, objective control, structure control, role-gold breadth, and expected fight inventory.

If the line improvement merely compensates for deterioration, return:

`NO BET — LINE MOVED WITH DOMINANCE`

## 9. Game 3 review conclusion

At 16:27, T1A led 10-6, approximately +4.5k gold, 2-0 towers, and 2-0 dragons. The model correctly withdrew DNS +13.5 because of deterioration.

At the later 10-7, approximately +4k state, it incorrectly re-promoted DNS +11.5 based on one kill and minor gold contraction. The correct verdict remained:

`NO BET — DOMINANCE OVERRIDE`

The final 26-12 score confirms that the T1A cascade remained active.

## 10. Probation and operating state

- completed: 13/20;
- official record: 7-6;
- official net: -164,250 VND / -0.16425u;
- next official wager number remains 14;
- open LoL exposure: 0u;
- item verification remains suspended until explicit restoration;
- duration remains official-ineligible through wager 20;
- next two complete maps are shadow-analysis only;
- no stake increase is authorized.
