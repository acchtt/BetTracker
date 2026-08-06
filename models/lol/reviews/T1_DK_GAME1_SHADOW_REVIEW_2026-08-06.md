# T1 vs Dplus KIA Game 1 Shadow Review

**Date:** 2026-08-06  
**Model:** LoL v0.3.31  
**Circuit-breaker map:** 1 of 2  
**Status:** Complete; shadow only; no ledger or probation impact

## Final supplied state

- Winner: T1
- Final game time: 28:24
- Final kills: T1 20-4 DK
- Total kills: 24
- Gold lead: approximately T1 +10k
- Towers: T1 9-2 DK
- Dragons: T1 3-1 DK
- Barons: T1 1-0 DK
- Inhibitors: T1 1-0 DK

## Logged shadow leans

Both leans were issued from the synchronized 13:42 state, when T1 led 9-1 kills and approximately 4.5k gold, towers were 0-0, dragons were 1-1, and T1 had three Grubs.

1. **Under 30.5 total kills @1.827 — WIN**
   - Final total: 24
   - Margin to line: 6.5 kills
   - Issuance projection: central 24-28; point estimate 26
   - Assessment: well calibrated. T1 converted the lead primarily through structures, Baron pressure and controlled fights rather than repeated two-sided skirmishing.

2. **Over 29 minutes @1.856 — LOSS**
   - Final duration: 28:24
   - Miss: 36 seconds
   - Issuance projection: central 30-33; point estimate 31
   - Assessment: directionally close but incorrectly promoted as a lean. The model overvalued DK's theoretical waveclear and the 0-0 tower state while underweighting T1's three-Grub structure acceleration, broad role-gold control and ability to convert the first tower into a rapid six-tower, Baron and base sequence.

## Calibration findings

### Kill-total model

The kill-total model performed correctly. At issuance, the model recognized that T1 could win through objectives and structures without requiring a high fight count. The final 24 kills landed inside the central 24-28 range.

### Duration model

The duration model treated the absence of early towers as independent stall evidence. In this map, that was misleading because T1 held:

- a broad five-role gold advantage;
- large mid and bot carry leads;
- three Grubs;
- an 8-kill margin;
- enough engage and pick control to turn the first structural breach into a fast map collapse.

The key lesson is that early tower count cannot be read without structure-conversion capacity. Three Grubs plus broad carry gold materially compress the post-first-tower closing window.

## Provisional duration safeguard

Until the second circuit-breaker map is reviewed, apply the following calibration note:

- an Over-duration shadow lean near the current clock requires at least a two-minute projection buffer above the line;
- when the leading team has three or more Grubs, at least +4k gold, and leads four or more roles, theoretical enemy waveclear alone is insufficient stall confirmation;
- require one observed successful base or inner-tower defense after the first major structure conversion before upgrading the extension branch.

This is a review finding, not a new active model version. Final rule promotion should be decided after shadow map 2.

## Circuit-breaker progress

- Complete shadow maps: 1 of 2
- Shadow lean record: 1-1
- Official betting: remains paused
- Next map: shadow analysis only, 0u
- Probation remains 13/20, record 7-6, net -164,250 VND / -0.16425u
