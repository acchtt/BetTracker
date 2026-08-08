# SlipTrace Football Chat Operating Protocol

Effective: 2026-08-08

Purpose: enforce consistent record keeping and model discipline across ChatGPT football-analysis chats.

## Required sources

1. **GitHub (`acchtt/SlipTrace`) is the authoritative model/ledger source.**
   - Resolve the active football model version and exact commit before relying on rules.
   - Read the applicable model file from that commit/ref; do not assume the default branch contains the active historical model file.
   - `ledger.json` is the authoritative official betting record.
   - **Ledger writes are on hold unless the user explicitly authorizes them.**

2. **Airtable (`SlipTrace Football Decision Control`) is the operational discipline/audit layer.**
   - Use `Decision States` for material football assessments.
   - Use `Circuit Breaker` for counted shadow selections.
   - Airtable does not replace `ledger.json` for official bankroll accounting.

## Pre-verdict discipline

Before issuing an actionable football verdict, use the operational control layer where applicable and record the material assessment state rather than relying only on conversational memory.

At minimum preserve:
- match / competition;
- model version;
- assessment time and minute;
- score and reset epoch;
- assessment period;
- candidate market, line and odds;
- goal-environment classification;
- synchronized-state / reset resolution;
- competition-format and utility checks;
- xG role and independent primary evidence channels;
- favorite-fade / directional-persistence checks;
- market scan;
- circuit-breaker status;
- validator result, fail reasons and evidence summary.

## Circuit breaker

When circuit-breaker mode is active:
- counted selections are SHADOW only unless the active model explicitly says otherwise;
- track the exact selection, odds, simulated stake, result, simulated P/L, process validity and review notes in Airtable;
- preserve procedural violations separately from outcome;
- do not erase a counted sample because the process grade was poor;
- do not convert shadow P/L into official bankroll P/L.

## Cross-chat rule

Any ChatGPT chat working on SlipTrace football should first consult this protocol plus the current GitHub model state and Airtable decision-control state. Do not reconstruct authoritative state from chat memory when the connected sources can be queried.

## Separation of records

- **Official placed wagers / bankroll P&L:** `ledger.json` only, after confirmed placement and only when ledger writes are authorized.
- **Decision-state audit, NO BET, watch, lean, shadow and circuit-breaker tracking:** Airtable.
- **Model rules and durable operating protocol:** GitHub.
