# League of Legends Model Rules v0.3.1

**Status:** Active evaluation addendum  
**Effective date:** 2026-07-30  
**Applies to:** LoL prematch, post-draft, and live map betting  
**Read with:** `LOL_BETTING_PROCEDURE.md`, `MODEL_CHANGELOG.md`, and `ledger.json`

This addendum overrides conflicting interpretations in sections 7, 12, 15, 17, and 18 of `LOL_BETTING_PROCEDURE.md` until formally merged into the main procedure.

## 1. Team-strength prior remains active after draft

- Build the opponent-adjusted team-strength prior before draft from lane strength, early gold, objective control, lead conversion, macro consistency, player quality, and current-roster cohesion.
- Carry that prior into every post-draft market. A composition with theoretical counterplay may adjust the projection, but must not erase a material team-strength gap without concrete lane, role, champion-proficiency, or execution evidence.
- Any draft-only probability adjustment larger than five percentage points requires an explicit explanation of the decisive mismatch and why the weaker team can realistically execute it.
- When the stronger team also has the easier composition, increase clean-conversion probability and reduce reliance on underdog kill-trading assumptions.

## 2. Mandatory favorite win-path classification

Before selecting a map market, classify the favorite's most likely winning path:

- `clean-macro`: gold, towers, objectives, vision, and efficient closing with limited repeated fighting;
- `fight-heavy`: repeated forced fights, high contest frequency, and large kill-margin potential;
- `mixed`: both branches remain credible.

Use team strength, draft, lane pressure, objective setup, historical lead conversion, and closing efficiency. Do not infer a fight-heavy path from engage tools alone.

## 3. Mandatory rapid parallel market scan

Once roster, sides, full draft, and current prices are confirmed, independently scan at least:

- map moneyline;
- kill handicap;
- total kills;
- map duration.

Rank markets by how directly they express the dominant projected game script. Do not stop after finding the first plausible edge.

The primary recommendation must be the best risk-adjusted market, not merely the first market analyzed. Nearby correlated markets may be shown as `LEAN` or `NO BET`, but normally only one correlated wager should be recommended.

## 4. Kill handicap versus total-kills comparison

For every underdog positive kill handicap, explicitly compare the equivalent total-kills path.

- If the handicap requires the underdog to trade kills, but the stronger favorite can win through clean macro, low-risk objective control, or a short one-sided close, prefer an under total or pass.
- An underdog positive kill handicap requires evidence of realistic target access, damage, lane stability, role-level gold resilience, and likely repeated fighting by the favorite.
- Theoretical tank shredding or late scaling is insufficient when the underdog is materially weaker in laning, coordination, or early-map control.
- When the favorite has a substantial team-strength edge and a utility-heavy or low-risk composition, lower the expected kill total before assuming the underdog can cover through late trades.

## 5. Fast decision protocol

For time-sensitive post-draft or live screenshots:

1. Read the screen directly; do not delay the first decision for nonessential web research.
2. Run the four-market scan in one pass.
3. Send the decision-ready output before extended reasoning.
4. Reassess only when the line, price, draft, or meaningful game state changes.

Required compact format:

`OFFICIAL BET / LEAN / NO BET — market @ odds — stake — Confidence X/10`

Then include no more than three short lines:

- decisive state or draft reason;
- status of the other core markets and their minimum prices when useful;
- expiry condition.

## 6. Confidence scale

Every recommendation must display `Confidence: X/10`.

Confidence reflects:

- estimated edge size;
- team-strength certainty;
- roster and draft completeness;
- market-fit quality;
- execution difficulty;
- state freshness and line-movement risk.

A high confidence score does not authorize a larger stake by itself. The active LoL evaluation stake remains 0.25u unless a later rule changes it.

## 7. Review and shadow-market logging

For the next 10 settled LoL map wagers:

- record the selected market and the strongest unselected core-market alternative available at the decision point;
- do not count the unselected alternative as a bet or include it in ROI;
- compare market fit, closing-line quality, realized game script, and whether team strength or draft theory was overweighted;
- report separately for moneyline, kill handicap, total kills, and duration.

## Triggering case

JD Gaming vs Thunder Talk Gaming, Game 3, 2026-07-30:

- JDG entered as the stronger team and had the easier Malphite-Trundle-Galio-Ezreal-Seraphine execution profile.
- The model leaned TT +6.5 kills at 1.828 because of Vayne-Cassiopeia-Kai'Sa tank shredding and theoretical kill-trading.
- The analysis underweighted JDG's superior laning, coordination, and clean-conversion ability, and did not compare Under 30.5 prominently enough before selecting the handicap.
- At 12 minutes JDG led 5-0 in kills and by roughly 5,000 gold. This is treated as a process trigger, not proof from one final result.

## Expected benefit

Improve market selection, preserve team-strength information after draft, reduce overreliance on theoretical underdog counterplay, and produce faster decisions before lines move.

## Possible downside

The rule may underreact to genuinely decisive draft edges, favor totals too often against low-kill favorites, and miss prices while all four markets are scanned. The compact workflow is intended to limit that delay.
