# LoL Cross-Chat Transfer Handoff — 2026-08-07 23:25 UTC+7

**Repository:** `acchtt/SlipTrace`  
**Active model:** **LoL v0.3.36**  
**This handoff amends:** `models/lol/handoffs/CHAT_TRANSFER_HANDOFF_2026-08-07.md`

## Required load order

1. `models/lol/CURRENT_MODEL.md`
2. `models/lol/rules/MODEL_RULES_LOL_V0.3.36.md`
3. v0.3.35 through v0.3.26 deltas
4. item-verification suspension
5. v0.3.25 consolidated rules / probation / calibration handbook
6. live fast path
7. main betting procedure
8. connected-stack sync/recording procedure
9. procedure addenda and scoreboard protocol
10. pre-match/pregame procedure
11. shared stake policy
12. `models/lol/handoffs/CHAT_TRANSFER_HANDOFF_2026-08-07.md`
13. this amendment last

Where this amendment conflicts with older files, **v0.3.36 controls**.

## Current circuit-breaker state

- Required: **20 complete reviewed shadow maps**.
- Complete/reviewed: **14/20**.
- Next map: **CB-15**.
- Settled shadow record through CB-14: **11-7**.
- Settled nominal simulated net through CB-14: **+0.8590u / +859,000 VND**.
- Actual exposure/P&L remains **0u / 0 VND**.
- Official LoL betting remains paused through CB-20 and requires explicit restoration afterward.

## CB-14 settlement — Shifters vs GIANTX Game 2

- User confirmed the final despite the scoreboard tile still showing `FINAL RESULT PENDING`.
- Final: **Shifters won, 17-11 kills, 35:34**.
- `CB-14-P01`: **Under 30.5 kills @2.316**, simulated 0.25u — **WIN +0.329u**.
- `CB-14-P02`: **GX +3.5 kills @1.781**, simulated 0.25u — **LOSS -0.25u**.
- CB-14 net: **+0.079u**.
- Earlier 22:38 attribution correction: the +1.9k gold lead belonged to **GX**, not SHFT.
- No active CB-14 position remains.

## Stake-policy change — effective now

At 23:25 UTC+7 the user explicitly instructed: **remove the per-map exposure cap from now on**.

Therefore:

- prior aggregate **0.25u per-map exposure cap is removed**;
- there is no hard aggregate LoL per-map exposure ceiling;
- standard/default position size remains **0.25u** unless separately justified;
- actual exposure remains 0u during the circuit breaker;
- no-correlated-same-map-add-on and no-chasing rules remain active;
- multiple same-map positions are allowed only when independently justified, materially distinct, synchronized, and not correlation-prohibited;
- removing the cap does not turn a PASS/WATCH into an entry and does not authorize stake escalation.

## Presentation rule

Keep live replies brief and verdict-first, but run the full model/rule checks before the verdict. Brevity is presentation-only.
