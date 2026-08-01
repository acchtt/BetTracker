# Football Model Rules v0.2.14

**Status:** Active immediately  
**Effective date:** 2026-08-01  
**Applies to:** Football prematch and live handicaps, moneylines, team totals, totals, and watch-to-live upgrades  
**Supersedes:** Older football rules only where explicitly stated below. v0.2.13 timing and unit rules remain active.

## Triggering review

Puebla vs Guadalajara Chivas, Liga MX Apertura 2026:

- Chivas held a strong territorial and chance-quality advantage before and after halftime.
- Chivas equalized at 63 minutes.
- The model promoted Chivas -0.5 shortly after the equalizer without waiting for a fresh post-goal persistence window.
- The user executed at 1.96 for 338,000 VND (0.338u), above the active 0.25u football cap, and the wager lost.
- The user observed heavy rain and a visibly waterlogged field on the livestream, with difficult ball movement and passing.

The primary process error was the failure to reset the evidence window after the equalizer. The adverse surface increased uncertainty and should have strengthened the veto.

## 1. Hard post-goal reset

Every goal expires all prior live momentum, dominance, and pressure assessments for actionable side, total, team-total, and next-goal recommendations.

After any goal:

- reset the pressure clock to zero;
- do not treat pre-goal xG, shots, box touches, corners, or possession as proof of continued post-goal pressure;
- require a new synchronized observation window before promotion;
- separately price the new score incentives, tactical reset, kickoff response, substitutions, and tempo effects.

### Minimum post-goal confirmation

A live favorite or chasing side cannot be upgraded to `OFFICIAL BET` until at least one of these routes is satisfied:

1. **Eight-minute persistence route:** at least eight minutes of post-goal play with repeated territorial pressure and two independent danger indicators.
2. **Two-snapshot route:** two synchronized post-goal snapshots separated by at least five minutes, both supporting the same direction.
3. **Exceptional immediate route:** two independent high-quality chance clusters after the goal, not merely possession, within a minimum five-minute window.

The exceptional route is unavailable when weather, pitch, red-card uncertainty, injury disruption, or major substitutions materially increase variance.

## 2. Weather and pitch-condition gate

Weather and surface evidence may come from official reports, reliable current weather data, or clear livestream observation. Livestream evidence must be labelled `user-observed` unless independently verified.

Classify the surface:

- `normal`;
- `wet-playable`;
- `degraded`: repeated ball slowdown, slipping, poor first touch, abnormal bounce, or water accumulation;
- `severely degraded`: standing water or repeated failure of normal passing and dribbling mechanics.

For degraded surfaces:

- widen probability intervals;
- reduce the weight of possession and pass-volume dominance;
- reduce confidence in technical combination-play superiority;
- require direct chance-quality and repeatability evidence;
- add at least a two-percentage-point edge requirement to live favorite moneylines and negative handicaps;
- require the full eight-minute post-goal persistence route;
- cap at `LEAN` when severity or directional impact is uncertain.

For severely degraded surfaces:

- default to `NO BET` on live side markets unless the market clearly benefits from the conditions and direct evidence supports the edge;
- prohibit immediate post-goal official upgrades.

Do not mechanically assume an under. Wet conditions can also increase defensive errors, goalkeeper spills, set pieces, rebounds, and random transitions. The adjustment must be market-specific.

## 3. Territorial dominance versus executable chance creation

Classify live pressure into:

- `territorial`: possession, field tilt, final-third circulation;
- `delivery`: box touches, crosses, cutbacks, set pieces;
- `chance creation`: xG, big chances, inside-box shots;
- `shot execution`: xGOT, shots on target;
- `repeatability`: independent sequences across time.

An `OFFICIAL BET` on a favorite or negative handicap requires chance creation plus repeatability. Territorial and delivery dominance alone are insufficient.

On degraded surfaces, set-piece generation, aerial mismatch, direct box entries, rebounds, and goalkeeper handling receive more contextual weight than passing volume.

## 4. Watch-outcome separation

A `LEAN — WATCH` at 0u remains unplaced.

- Do not count a winning watch as a model win.
- Do not count a losing watch as a model loss.
- Track watch outcomes separately by league, market, and reason for non-promotion.
- Repeated winning watches may trigger review but cannot alone loosen official-bet gates.
- Shadow reporting may compare closing price, realized result, and a standardized counterfactual stake, clearly separated from official performance.

## 5. Prematch-to-live transition

A prematch watch is not automatically upgraded when the predicted script appears live.

Before promotion:

- verify that the current price still clears the revised fair range and active edge threshold;
- confirm that the current score branch was included in the prematch model;
- reset after every goal, card, substitution, weather change, or material line move;
- determine whether the market has already priced the observed dominance;
- verify that the current surface and tactical environment still support the original edge.

## 6. Liga MX adjustment

For Liga MX Apertura 2026:

- treat early-season samples as low-volume and roster-sensitive;
- weight confirmed lineups, coaching changes, transfers, fitness, and bench quality more than table position;
- account for altitude, heat, humidity, travel, artificial turf, rain, and surface drainage by venue;
- price substitution impact explicitly;
- distinguish possession dominance from repeatable chance creation against compact low blocks;
- apply finishing-regression checks before chasing favorites that have accumulated xG without scoring;
- require a new post-goal window before any live upgrade;
- log weather and pitch classification for every live official candidate.

## 7. Mandatory recommendation fields

Every actionable live football assessment must include:

- `Post-goal reset status`;
- `Persistence window`;
- `Weather/pitch classification`;
- `Territorial vs chance-creation classification`;
- `Direct chance clusters since last state change`;
- `Market-specific weather implication`;
- `Expiry status`.

Visible material weather or pitch degradation without classification is a veto.

## 8. Stake and execution controls

- 1u = 1,000,000 VND.
- Official football cap = 0.25u.
- `LEAN — SMALL` cap = 0.125u.
- Minimum accepted odds = 1.60 unless a higher market-specific cutoff applies.
- A wager is official only after user confirmation.
- Any changed odds, line, score, minute, card, substitution, weather state, or surface state requires independent repricing.
- Execution above the recommended stake remains a separate deviation even when the selection was model-approved.

## 9. Review threshold

Review after the next 12 Liga MX watch or official candidates, with at least six live candidates when available.

Track prematch classification, live upgrade decision, post-goal reset compliance, persistence minutes, weather/pitch state, quoted and closing odds, official versus watch status, result, standardized official performance, separate watch shadow performance, and whether the chosen or rejected entry improved expected value relative to the prematch watch.
