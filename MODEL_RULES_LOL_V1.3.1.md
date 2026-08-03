# League of Legends Model Rules v1.3.1

**Status:** Active immediately  
**Effective date:** 2026-08-03 16:10 UTC+7  
**Supersedes:** LoL v0.3.24 where conflicting  
**Purpose:** Make forward kill and duration projections mandatory in every synchronized live assessment, prevent projection omissions after chat migration or context compression, formalize incomplete-output handling, and apply the minimum-odds gate uniformly to every wager.

All stricter existing bankroll, probation, minimum-odds, explicit-placement, one-map-exposure, no-correlated-add-on, item-verification, state-direction, thesis-expiry, anti-line-chasing, winner-versus-margin separation, favorite-margin, positive-handicap, kill-total, duration-quarantine, return-kill, clean-close, and market-selection rules remain active.

## 1. Critical mandatory live projection rule

Every synchronized live assessment **must** contain explicit forward kill and duration projections, even when the verdict is `NO BET`, `LEAN`, `WATCH ONLY`, a market is unavailable, or duration is ineligible for official betting.

This requirement is non-optional.

Failure to provide either the kill projection block or the duration projection block is a **model execution error**. The assessment is incomplete and may not be treated as a valid official model evaluation until the missing projection is reconstructed.

> **Projection is the engine of the model. Current-state description alone is never sufficient for a live betting decision.**

## 2. Mandatory kill projection block

Every synchronized live assessment must display:

1. current total kills;
2. supplied kill-total line and odds, or `MARKET NOT SUPPLIED` / `MARKET UNAVAILABLE/LOCKED`;
3. whole additional kills required for the Over to win;
4. whole additional kills available before the Under loses;
5. conservative remaining-kill range;
6. projected final-kill range;
7. central projected final-kill estimate;
8. lower-tail branch;
9. upper-tail branch;
10. unresolved map-inventory categories;
11. validated conversion channels for the leading side;
12. validated return-kill channels for the trailing side;
13. clean-close/return-kill suppression status.

Qualitative wording such as “Over direction,” “likely Under,” “high-action,” or “slow game” cannot replace numerical projections.

### Kill-handicap projection requirements

For every supplied kill handicap, also display:

- current kill margin;
- final margin required to cover the exact line;
- additional future net kills required from the current state;
- conservative future net-kill range;
- central future net-kill estimate;
- structural and objective leverage;
- number of validated favorite conversion channels;
- number of validated opponent return-kill channels;
- whether the cumulative favorite-margin gate is satisfied;
- exact handicap verdict, separate from the moneyline verdict.

A gold lead, moneyline edge, or winner thesis may count as handicap evidence only when it specifically supports future **net-kill separation**.

## 3. Mandatory duration projection block

Every synchronized live assessment must display:

1. current game time;
2. supplied duration line and odds, or `MARKET NOT SUPPLIED` / `MARKET UNAVAILABLE/LOCKED`;
3. fastest credible finish;
4. conservative earliest credible finish;
5. central finish range;
6. expected remaining game time;
7. long-game extension branch;
8. towers remaining and exposed lanes;
9. dragon, Baron, soul, Elder, inhibitor, and base-access schedule where relevant;
10. functional waveclear and safe wave access;
11. one-sequence close score at or after 20:00;
12. duration verdict and official eligibility.

Duration projection remains mandatory while duration markets are analysis-only through probation wager 20. Projection and betting eligibility are independent.

## 4. Projection must precede verdict formation

The model must construct the forward game tree before finalizing any kill-handicap, kill-total, or duration verdict.

The required reasoning sequence is:

1. inventory the remaining map;
2. project future fight and objective sequences;
3. estimate remaining kills and future net-kill separation;
4. estimate finish branches and remaining time;
5. compare every supplied exact line with the projections;
6. issue the exact verdict.

Do not issue a line verdict based only on current score, current gold, current pace, or sportsbook repricing.

## 5. Mandatory synchronized output order

Every live synchronized assessment must follow this order:

1. **Verdict first**, including exact market, odds, stake, VND amount, and placement status when official;
2. timestamped synchronized state;
3. state-direction verification from the previous checkpoint;
4. thesis status: new thesis, reprice update, durable thesis, expired thesis, or reversed thesis;
5. thesis validation or failure evidence;
6. mandatory kill projection block;
7. mandatory duration projection block;
8. market-by-market verdicts for moneyline, kill handicap, kill total, and duration;
9. primary risk;
10. official eligibility and placement status.

When a market is missing, state `MARKET NOT SUPPLIED`. When suspended or unavailable, state `MARKET UNAVAILABLE/LOCKED`.

## 6. Chat-continuity and handoff safeguard

The mandatory projection blocks remain in force after:

- moving to a new chat;
- conversation summarization or context compression;
- repository synchronization;
- portable-context restoration;
- model-version changes;
- long gaps between screenshots;
- tool failures or partial state recovery.

Each synchronized screenshot or state update must be independently reviewable. Prior projections may be reused only after verifying state direction and confirming that no material transition has invalidated them.

A handoff that states only bankroll, record, rules, or the latest verdict is incomplete unless it also preserves this mandatory projection requirement.

## 7. Incomplete-assessment protocol

An assessment is incomplete if any of the following are omitted when applicable:

- conservative remaining-kill range;
- projected final-kill range;
- central final-kill estimate;
- future net-kill range for a supplied handicap;
- fastest credible finish;
- central finish range;
- extension branch;
- exact market verdicts.

When an omission is detected:

1. acknowledge the model execution error;
2. reconstruct the missing projection from the synchronized state;
3. replace the incomplete verdict;
4. do not count the incomplete output as an official, unplaced-official, lean, or watch trial.

## 8. BFX vs BRO Game 1 calibration trigger

This rule was triggered by BNK FEARX Youth vs BRO Challengers Game 1 on 2026-08-03.

At 25:09:

- BFX led 12-6 kills;
- BFX led by approximately 5.7k gold;
- BFX led 3-0 towers and 2-0 dragons;
- BFX -12.5 kills was priced at 1.625;
- total kills were 18;
- kill-total line was 35.5;
- duration line was 31 minutes.

The live output evaluated the markets structurally but omitted explicit final-kill and duration projections. The final result was:

- BFX won 20-6;
- final kill margin was +14;
- final total kills were 26;
- final duration was 31:56;
- BRO recorded no return kill after 25:09.

The lesson is not that the final result retroactively makes the handicap official. The lesson is that the model must quantify the remaining-kill budget, future net-kill distribution, clean-close branch, and finish-time branches before deciding whether the exact line clears the gate.

## 9. Universal minimum-odds gate

The minimum odds threshold of **1.60 applies to every wager without exception**.

This includes:

- prematch and live bets;
- series and map moneylines;
- series and map handicaps;
- kill handicaps;
- kill totals;
- duration markets when otherwise eligible;
- exact series scores;
- over/under map-count markets;
- any future market family added to the model.

Any offered price below 1.60 is automatically ineligible for `OFFICIAL BET`, regardless of projected win probability, edge, market type, or confidence. The correct verdict must explicitly state that the price is below the universal minimum-odds gate.

The threshold applies to all placed and unplaced official recommendations. `LEAN` and `WATCH ONLY` may still describe directional analysis below 1.60, but such prices can never be promoted unless the executable price reaches at least 1.60 in a fresh synchronized assessment.

## 10. Active bankroll and execution state

The active execution constraints remain:

- probation completed: 10/20;
- official record: 6-4;
- official net: +112,250 VND / +0.11225u;
- standard stake: 0.25u = 250,000 VND;
- maximum exposure: 0.25u per map;
- minimum odds: 1.60 for all wagers;
- no correlated same-map add-ons;
- duration markets are analysis-only through wager 20;
- a wager becomes official only after explicit placement confirmation.

## 11. Version authority

LoL v1.3.1 is the active root rules version immediately upon this file being committed to the repository.

Where this file conflicts with v0.3.24 or earlier versions, v1.3.1 controls. Where it does not conflict, all stricter earlier rules remain active.
