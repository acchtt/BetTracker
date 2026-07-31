# LoL Model Changelog Addendum

## v0.3.4 — 2026-07-31

### Engage-to-damage conversion gate

**Status:** Active evaluation rule  
**Detailed implementation:** `MODEL_RULES_LOL_V0.3.4.md`

## Triggering evidence

KT Rolster Challengers defeated DN SOOPers Challengers 26-7 in Game 1. The model leaned DNS.C +4.5 kills after emphasizing Skarner-Alistar initiation, Rumble zone control, and Sivir wave-clear. The accepted price improved from 1.677 to 1.806 on the same synchronized line, so execution quality was clean.

The failure was in draft interpretation. DNS.C could initiate but lacked reliable follow-up damage and sustained champion-damage conversion into KT.C's K'Sante-Shen frontline, Lee Sin disruption, Sylas utility, and Cassiopeia long-fight output. Final state: 33:35, KT.C 70.5k-56.5k gold and 10-2 towers.

## Previous rule weakness

The model checked target access, damage, lane stability, role gold, and fight trading, but practical draft reads could still substitute initiation quality and wave-clear for demonstrated damage conversion. This created false confidence in positive kill handicaps for compositions that could start fights without finishing targets.

## New rule

- Separate setup quality from damage conversion.
- Require at least two credible damage sources, aligned follow-up timing, target access, frontline kill speed, sustained output, carry protection, and plausible player execution.
- Failure on two or more conversion checks normally makes an underdog positive kill handicap `NO BET`.
- Wave-clear and zone control are not counted as direct kill-trading evidence.
- For live upgrades, require observed damage conversion, relevant damage-item breakpoints, carry uptime, or meaningful threat to the opposing frontline.
- Repeated clean setups with little follow-up damage trigger an immediate downgrade.
- Rejecting the handicap does not force an alternative wager; moneyline, totals, and duration must still be priced independently.

## Performance impact

This wager is confirmed LoL bet #15 since the dedicated chat began. Updated cumulative record: 8 wins, 7 losses, +204,125 VND, +0.40825u. The wager remains classified as a `synchronized lean execution`, so the loss is attributed to model selection rather than execution discipline.

## Expected benefit

Reduce positive kill-handicap exposure to teams whose crowd control and fight setup overstate their practical kill output, especially into durable frontline and superior sustained-damage compositions.

## Possible downside

The stricter gate may underprice compositions whose damage is highly player-dependent or whose follow-up becomes strong only after later item breakpoints. Those cases should remain `LEAN` until live evidence confirms conversion.

## Review threshold

Review after the next 10 synchronized LoL wagers, tracking conversion-gate status, realized fight damage, market selection, and result separately.