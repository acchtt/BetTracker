# Model Changelog — LoL v0.3.13

**Effective:** 2026-08-01 19:47 UTC+7  
**Trigger:** Review after four user-defined probation wagers, including three settled duration-over losses.

## Evidence reviewed

- AL vs TT Game 1 Over 32 minutes at 1.999, 0.25u: loss; final duration 21:50.
- AL vs TT Game 2 Under 29.5 kills at 1.795, 0.25u: win; final total 28.
- TES vs LGD Game 3 Over 33 minutes at 2.117, 0.25u: loss; execution followed a material immediate price jump without fresh reassessment.
- DK vs Gen.G Game 2 Over 33 minutes at 2.021, 0.30u: loss; execution followed a 0.101 price move and exceeded the 0.25u map cap.
- Unplaced DK vs Gen.G Game 1 Under 32.5 kills: losing process candidate that triggered v0.3.12.

## Diagnosis

The repeated official-market problem was duration-over promotion from incomplete or correlated stall evidence. Low kills, modest gold separation, low tower progression, and nominal waveclear were treated as persistence signals without a complete fastest-finish-path inventory.

The DK vs Gen.G Game 2 recommendation also failed procedural enforcement: the v0.3.10 required duration block was not fully established before `OFFICIAL BET` was issued.

Execution discipline separately weakened evaluation. Two duration wagers were placed after material price changes, and one exceeded the active map cap. These deviations did not cause the underlying selections to lose, but they prevented clean model attribution and increased realized exposure.

## Changes

- Added same-day duration-over suspension for the remainder of 2026-08-01.
- Added complete synchronized state requirement.
- Required two independent post-objective-cycle anti-conversion events, including one recent event.
- Added fastest-finish-path inventory for both teams.
- Added a minimum three-minute conservative finish-window margin for official duration overs.
- Added a one-fight compression veto.
- Clarified that quiet-state variables are one correlated evidence cluster.
- Reaffirmed v0.3.11 price-expiry rules and the 0.25u map cap.
- Required separate reporting of strict model-approved execution and user-defined all-official probation performance.

## Expected effect

The model will issue fewer live duration overs and will miss some winning overs. This is acceptable during probation because the current failure pattern is concentrated in duration markets and includes both calibration and rule-enforcement errors.