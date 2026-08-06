# T1 vs Dplus KIA Game 2 Shadow Review — 2026-08-06

**Model:** LoL v0.3.31  
**Competition:** LCK 2026 Rounds 3-4  
**Circuit-breaker map:** 2 of 2  
**Actual exposure:** 0u  
**Official ledger/probation impact:** none

## Final supplied state

T1 defeated Dplus KIA at **36:57**.

- Kills: **T1 17-7 DK**
- Gold: **T1 approximately +10k**
- Towers: **T1 10-3 DK**
- Dragons: **DK 3-2 T1**
- Barons: **T1 2-0 DK**
- Inhibitors: **T1 1-0 DK**

## Settled shadow leans

Each lean carried a nominal simulated stake of **0.25u**. Actual stake remained 0u.

1. **Under 31.5 total kills @1.811 — WIN**
   - Final total: 24 kills
   - Simulated profit: `0.25 × (1.811 - 1) = +0.20275u`
   - Simulated VND equivalent: **+202,750 VND**

2. **Over 34 minutes @1.863 — WIN**
   - Final duration: 36:57
   - Simulated profit: `0.25 × (1.863 - 1) = +0.21575u`
   - Simulated VND equivalent: **+215,750 VND**

### Map 2 shadow result

- Record: **2-0**
- Nominal simulated exposure: **0.50u**
- Simulated net: **+0.41850u / +418,500 VND**
- Actual exposure and P&L: **0u / 0 VND**

## Timeline review

### 14:09 issuance state

- T1 led 5-3 kills and approximately 275 gold.
- Towers were 0-0.
- T1 led dragons 1-0.
- DK led Grubs 2-1.
- DK led top, jungle and mid role gold.
- T1 led bot and support role gold.

The state was genuinely split rather than dominated by either side. That supported both a lower-kill structure and an extension branch.

### 24:39 update

T1 had moved to +3.4k gold, 4-2 towers, 1-0 Barons and four winning role-gold matchups. The Under 31.5 thesis strengthened, while Over 34 became materially impaired because T1 had a credible immediate close route.

### Baron-expiry confirmation

T1's first Baron expired without an inhibitor or finish. That was the first observed successful major defensive cycle by DK and materially restored the extension branch. The map then reached 36:57.

## Calibration findings

### Total kills

The Under 31.5 decision was correct. Final total kills were 24, seven below the line. The model correctly recognized that both teams could play through siege, zone control and objective pressure without repeated two-sided fighting.

The 24:39 central projection of 15-19 kills was too low; five additional kills occurred before the finish. Future late-map projections should reserve a larger cleanup-fight allowance when a second Baron and base defense remain available, even in otherwise low-action maps.

### Duration

The original 36:15 point estimate was accurate to within 42 seconds. The main positive process signal was not theoretical waveclear alone, but the observed expiration of T1's first Baron without an inhibitor. This validates the v0.3.31 requirement for an actual successful inner-tower or base defensive cycle before upgrading an extension branch.

### Role gold and objectives

At 14:09, T1's bot/support economy was offset by DK's top/jungle/mid advantages. By 24:39, T1 had broad role-gold control, but DK's dragon stack and successful Baron defense preserved enough fight inventory to extend the map without forcing a high kill total.

## Circuit-breaker conclusion

The two required shadow maps are now complete and reviewed.

- Game 1 shadow leans: 1-1
- Game 2 shadow leans: 2-0
- Combined circuit-breaker shadow record: **3-1**

Official LoL betting does **not** resume automatically. It remains paused until the user explicitly authorizes restoration. Probation remains 13/20, record 7-6, net -164,250 VND / -0.16425u.

## Retained operating rules

- Shadow leans default to a nominal simulated stake of 0.25u unless specified otherwise.
- Actual shadow exposure remains 0u.
- Total kills and duration remain separate analytical markets.
- Duration remains official-ineligible through wager 20.
- Item verification remains suspended until explicit restoration.
- Every new map resets hard evidence; prior-map execution is a soft prior only.
