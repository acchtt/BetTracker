# MODEL RULES — LEAGUE OF LEGENDS v0.3.32

**Status:** Active delta  
**Effective date:** 2026-08-06  
**Supersedes:** v0.3.31 only where stated

## Purpose

Extend the official-wager circuit breaker by two additional complete maps after the first two-map shadow review.

## Extended circuit breaker

1. The circuit breaker now covers **four complete reviewed maps** in total.
2. The first two maps are complete: T1 vs Dplus KIA Games 1 and 2.
3. The next two complete LoL maps are shadow-analysis only.
4. During these maps:
   - actual stake and exposure are 0u;
   - no market may be labeled `BET`, `OFFICIAL BET`, or an official candidate;
   - logged shadow leans default to a nominal simulated stake of 0.25u unless explicitly stated otherwise;
   - exact verdicts, projections, synchronized-state arithmetic, settlement, and written post-map review remain mandatory;
   - no shadow result changes the official ledger or probation.
5. Official recommendations do not resume automatically after map four. Restoration still requires explicit user authorization after all four maps are settled and reviewed.

## Market controls retained

- Duration remains official-ineligible through wager 20.
- Item verification remains suspended until explicit restoration.
- No correlated same-map official add-ons.
- Wide positive handicaps remain subject to the v0.3.31 dominance override, two-snapshot stabilization requirement, fight-inventory analysis, and line-chasing veto.
- Total kills and duration remain separate analytical market families.

## Review requirement

After the fourth complete shadow map, produce a combined review covering:

- record and nominal simulated P&L;
- market-family performance;
- calibration errors by phase of game;
- whether any market family is suitable for limited restoration;
- whether the circuit breaker should end, narrow, or continue.
