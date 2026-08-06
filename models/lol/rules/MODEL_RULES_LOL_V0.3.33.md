# MODEL RULES — LEAGUE OF LEGENDS v0.3.33

**Status:** Active delta  
**Effective date:** 2026-08-06  
**Supersedes:** v0.3.32 only where stated

## Purpose

Correct the late-game total-kill and moneyline errors identified in NIP vs IG Game 3 while preserving the four-map shadow circuit breaker.

## 1. Position-state separation

Every logged lean has two separate fields:

1. **Recorded position state:** issued, settled win, settled loss, or void.
2. **Current analytical thesis state:** active, degraded, invalidated, or confirmed.

A recorded shadow or official position cannot be removed after issuance. However, once the live evidence breaks its assumptions, the response must say `THESIS INVALIDATED` rather than `RETAIN`, even though the position remains open for settlement.

## 2. Total-kill invalidation thresholds

For an existing kill Under:

- If the remaining cushion is **nine kills or fewer** and at least **two unresolved major fight triggers** remain, mark the thesis `INVALIDATED`.
- If the remaining cushion is **five kills or fewer** and at least **one unresolved major fight trigger** remains, mark the thesis `INVALIDATED`.
- No new or correlated Under may be added after either threshold is met.

Major fight triggers include:

- live or soon-respawning Baron;
- soul-point dragon contest;
- Elder Dragon contest;
- inhibitor or Nexus defense;
- a second Baron cycle after the first Baron failed to close;
- both teams retaining credible contest access to the same late objective.

## 3. Late objective-density kill reserve

Late kill projections must be built from remaining fight inventory rather than recent kill pace alone.

Minimum reserve guidance:

- one ordinary dragon or Baron contest: **+3 to +6** potential kills;
- soul-point or Elder contest: **+4 to +8** potential kills;
- inhibitor or Nexus defense: **+3 to +7** potential kills;
- second major-objective cycle after a failed close: **+3 to +6** additional potential kills.

When two or more triggers remain, do not simply add the central values mechanically; create an explicit low, central and high branch. If both teams have three dragons, or one team owns soul while Baron/Elder remains contestable, the central late reserve should normally be at least **8 to 14 kills** unless one team has lost contest access.

## 4. Baron expiry interpretation

A Baron expiring without an inhibitor is:

- positive evidence for duration extension;
- evidence that another objective cycle may occur;
- **not automatically positive for a kill Under**.

If the failed Baron creates a second Baron, soul, Elder or base-defense cycle, the kill projection must increase even if the prior siege was low-action.

## 5. Soul-adjusted moneyline control

Dragon soul is a persistent combat and objective-control advantage. When the gold leader does not own soul:

- apply a material penalty to the leader's live win probability;
- do not infer superiority from kill lead and aggregate gold alone;
- require structural control, Elder priority, or clearly superior five-role combat access before assigning the leader more than a modest favorite probability.

A team leading by approximately 3k to 5k gold but facing enemy soul and an unresolved Elder/Baron cycle must be treated as a volatile or near-even late state unless the opponent has lost map access.

## 6. Deciding-map volatility modifier

In a Game 3 or other deciding map, widen the late high-kill branch when both teams retain objective contest access. This is a variance modifier, not an automatic Over signal.

## 7. Verdict-first live response

The first line must state the actionable verdict and current thesis state. Repository logging and extended explanation occur after the verdict.

Examples:

- `VERDICT — NO NEW LEAN; existing Under remains ACTIVE.`
- `VERDICT — NO NEW LEAN; existing Under THESIS INVALIDATED.`
- `SETTLED — existing Under LOST.`

## Circuit breaker status

- Shadow maps completed after NIP vs IG Game 3: **3 of 4**.
- Current settled shadow record: **3-2**.
- Current nominal simulated net: **+0.12525u**.
- Actual exposure and official ledger impact remain **0u**.
- The next complete LoL map is shadow map 4 of 4.
- Official recommendations still require explicit user authorization after the fourth map is settled and reviewed.
