# Closed Live Handoff — NIP vs IG Game 3 Shadow

**Closed:** 2026-08-06 20:09 UTC+7  
**Model at issuance:** LoL v0.3.32  
**Competition:** LPL 2026 Split 3  
**Circuit-breaker status:** Shadow map 3 of 4 complete  
**Actual exposure:** 0u

## Draft

- NIP blue: Poppy / Skarner / Sylas / Sivir / Karma
- IG red: Jax / Wukong / Viktor / Ezreal / Seraphine

## Settlement

- Winner: NIP
- Final kills: NIP 16-21 IG
- Final total kills: 37
- Logged shadow lean: Under 27.5 total kills @2.066, simulated 0.25u
- Result: loss
- Simulated P&L: -0.25u / -250,000 VND
- IG ML was never logged.

## Failure summary

The pregame Under thesis was reasonable, but it should have been invalidated once the remaining cushion fell to nine kills while soul, another Baron cycle and base defenses remained. The model understated late objective-density kill inventory and treated failed Baron conversion as favorable to the Under when it actually created additional fight cycles.

## Model contribution

LoL v0.3.33 adds:

- recorded-position versus live-thesis state separation;
- explicit Under invalidation thresholds;
- late objective-density kill reserves;
- corrected Baron-expiry interpretation;
- soul-adjusted moneyline controls;
- deciding-map volatility widening.

## Circuit-breaker accounting after settlement

- Completed: 3 of 4 maps
- Combined shadow record: 3-2
- Combined simulated net: +0.12525u / +125,250 VND
- Actual exposure: 0u
- Official ledger and probation: unchanged

Full review: `models/lol/reviews/NIP_IG_GAME3_SHADOW_REVIEW_2026-08-06.md`
