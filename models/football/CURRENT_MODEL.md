# Current Football Model

**Canonical namespace:** `models/football/`

- Active model: **Football v0.2.24**
- Active amendment: `models/football/rules/MODEL_RULES_FOOTBALL_V0.2.24.md`
- Market-expression rules: `models/football/rules/MODEL_RULES_FOOTBALL_V0.2.23.md`
- Live-total trajectory rules: `models/football/rules/MODEL_RULES_FOOTBALL_V0.2.22.md`
- Authoritative betting feed: `/ledger.json`

## Required load order

1. `models/football/rules/MODEL_RULES_FOOTBALL_V0.2.24.md`
2. `models/football/rules/MODEL_RULES_FOOTBALL_V0.2.23.md`
3. `models/football/rules/MODEL_RULES_FOOTBALL_V0.2.22.md`
4. earlier active football procedures and rules where not superseded
5. latest file in `models/football/handoffs/`, when available

## Active operating values

- 1u = 1,000,000 VND
- Minimum odds: 1.70
- Executable LEAN stake: 0.25u = 250,000 VND
- Normal official stake cap: 0.25u
- `LEAN — SMALL` is retired for future recommendations
- A wager is official only after confirmed placement
- Ledger writes remain on hold until explicitly approved

## Write boundary

All new football rules, context, reviews, and handoffs must be written under `models/football/`. Legacy root football files remain read-only compatibility sources.
