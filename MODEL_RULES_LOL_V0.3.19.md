# League of Legends Model Rules v0.3.19

**Status:** Active immediately  
**Effective date:** 2026-08-02 15:38 UTC+7  
**Purpose:** Prevent positive-underdog kill-handicap line chasing, preserve thesis history across changed lines, and strengthen next-sequence stress testing.

This rule supersedes v0.3.18 positive-underdog kill-handicap revision and stress-test language where conflicting. All stricter moneyline, draft, item, kill-total, duration, expiry, stake, probation, and status-language rules remain active.

## 1. Triggering review

ThunderTalk Gaming vs Team WE Game 2 produced one evolving positive-kill-handicap thesis:

- TT +5.5 kills was initially a defensible `LEAN — 0u watch` while TT was level or ahead in the early state.
- TT +7.5 was later reissued after the game and market moved materially against TT.
- TT +9.5 was then reissued with WE ahead in kills and gold and TT's moneyline materially worse.
- The user confirmed that TT +9.5 would have lost.

The failure was not three independent unlucky snapshots. It was one thesis-level process error: the model treated a widening handicap as additional protection while underweighting the information contained in worsening state, adverse repricing, and favorite-controlled follow-up sequences.

## 2. Thesis continuity across changed lines

Each map has one active thesis per market family.

A changed line must still be priced independently, but independent pricing does not erase the history of the active thesis. A wider positive handicap offered after deterioration is a revision of the same thesis, not a fresh opportunity.

The handicap size itself is not positive evidence. It improves value only when the underlying fair probability has remained stable or improved. When the fair probability has deteriorated, the larger cushion may merely compensate for increased blowout risk.

## 3. Anti-line-chasing warning and hard veto

Trigger a **line-chasing warning** when the positive-underdog handicap widens by at least 2.0 kills from the active lean.

Return `NO BET — LINE-CHASING VETO` and withdraw the thesis when that warning is accompanied by at least two of the following:

1. **Adverse moneyline repricing:** the underdog's moneyline odds worsen by at least 0.40 or its implied win probability falls by at least 5 percentage points from the active-lean snapshot.
2. **State deterioration:** the underdog's gold position worsens materially, including a new deficit of roughly 1,500 gold or more, or the deficit expands by roughly 1,500 gold or more.
3. **Structural deterioration:** tower, dragon, soul-point, Herald, Baron, wave-access, or vision control shifts toward the favorite.
4. **Conversion failure:** the underdog loses a structured fight, fails to convert an earlier lead, or shows repeated inability to deliver damage in prepared terrain.
5. **Fragile kill production:** the underdog's kills are concentrated in a low-economy engager or jungler while primary carries have not demonstrated reliable structured-fight damage.

A wider line, higher odds, one isolated return kill, or one opponent error cannot cancel this veto.

## 4. Positive-handicap revision cap

Before a qualifying withdrawal-and-repair sequence, a positive-underdog kill-handicap thesis may receive:

- one initial lean; and
- at most one non-material reassessment while the game state is substantially unchanged.

A line move of at least 2.0 kills, a material moneyline move, or a material state event ends the price-only reassessment allowance.

After that point, the output must be `NO BET`, `EXPIRED — REASSESSMENT REQUIRED`, or `NO BET — LINE-CHASING VETO` unless the existing same-map repair gate is fully met.

## 5. Fight-cascade stress test

Do not test the cushion against only one isolated fight.

Model the most plausible favorite-controlled cascade:

1. one clean or near-clean favorite fight;
2. the immediate objective, tower, or Baron conversion;
3. the next forced setup, base-defense sequence, or contest before the underdog restores map parity.

Estimate the realistic total negative kill swing across that sequence.

Return `NO BET` when a plausible cascade would consume at least half of the remaining cushion and the underdog lacks a credible reset, waveclear, cross-map trade, or protected-carry stabilization path.

Return `NO BET` automatically when the cascade can consume most of the cushion or create repeated forced entries into prepared terrain.

## 6. Return-kill quality check

Raw team kills are not sufficient proof that return damage is reliable.

Explicitly distinguish:

- kills produced by item-qualified primary carries;
- kills produced by low-economy engage champions or isolated skirmishes;
- structured-fight damage delivered through the opponent's access and peel;
- repeatable cleanup routes after the first target dies.

When primary carries remain unproven and most kills are concentrated in jungle or frontline roles, downgrade the positive handicap by one level. A marginal lean becomes `NO BET`.

## 7. Adverse repricing interpretation

Market movement is not treated as authority, but it is diagnostic evidence.

When adverse moneyline and handicap movement agrees with worsening gold, structure, objective control, or fight conversion, the movement must be counted against the thesis. It cannot be dismissed merely because the new line looks larger or the odds look more attractive.

A recommendation must state whether the new price represents:

- genuine improved value with stable fundamentals; or
- compensation for a materially worse state.

If that distinction cannot be supported, return `NO BET`.

## 8. Same-map repair remains strict

A withdrawn or line-chasing-vetoed positive-handicap thesis remains locked for the map.

Re-entry requires all existing v0.3.18 conditions:

1. two new qualifying structured-fight conversions after withdrawal;
2. clear structural or objective stabilization;
3. restored item-qualified damage or frontline function;
4. explicit evidence that the original failure condition has been repaired.

The line becoming wider again does not count as repair.

## 9. TT vs WE Game 2 correction

Correct process grading:

- TT +5.5: defensible initial `LEAN — 0u watch` at the early favorable state.
- Same-line early reassessment: permissible while the state remained favorable.
- TT +7.5: should have been `NO BET — LINE-CHASING VETO` because the moneyline and game state had deteriorated without qualifying repair.
- TT +9.5: should have remained `NO BET`; it was not a new lean.
- User-confirmed outcome: TT +9.5 lost.

Because no placement was confirmed, official P/L impact and probation impact remain zero.

## 10. Probation wagers 7–10

The remaining probation controls are unchanged:

- standard stake: 0.25u = 250,000 VND;
- maximum exposure: 0.25u per map;
- minimum accepted odds: 1.60;
- no correlated same-map add-ons;
- duration Overs are not eligible for `OFFICIAL BET`;
- selectivity is mandatory;
- prefer `NO BET` over a marginal pass.

## 11. Fast output protocol

Return the verdict first.

For positive-underdog kill handicaps, include the first failed gate immediately. When the line-chasing rule is triggered, use the exact status:

`NO BET — LINE-CHASING VETO`

Changed-line analysis must include thesis history, adverse repricing, state direction, and the fight-cascade stress test before discussing the larger cushion.

## 12. Review schedule

Review v0.3.19 after probation wager 10 settles or after five new positive-underdog kill-handicap theses, whichever occurs first. Do not relax the rule because a vetoed wider line later wins.