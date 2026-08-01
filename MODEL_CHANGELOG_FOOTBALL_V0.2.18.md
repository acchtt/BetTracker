# FOOTBALL MODEL CHANGELOG v0.2.18

Date: 2026-08-01

## Trigger

Post-match review of Shanghai Port 0-1 Shandong Taishan after the official Shanghai Port -0.5 live wager at 1.83 lost.

## Evidence

Shanghai Port finished with 2.22 xG, 2.09 xGOT, 19 shots, 8 shots on target, 4 big chances, 33 opposition-box touches, a missed penalty, and a disallowed goal. Shandong produced 0.41 xG and later received a red card.

## Change

Added mandatory separation between settlement result and process quality.

Added the dominant-process variance-loss classification.

Added a prohibition on changing directional rules from a single variance-heavy outcome.

Added a hindsight-control rule: final xG may support the entry thesis but cannot be treated as information available at entry.

Strengthened the trailing-favorite handicap gate by requiring separate estimates for equalization, subsequent win conversion, counterattack risk, and the protection differences among 0, -0.25, and -0.5.

## Case classification

- Result: loss, -0.25u
- Process: good
- Error type: finishing/conversion variance, not a demonstrated directional-model failure
- Action: retain the core live-dominance rule; monitor calibration of trailing-favorite -0.5 entries over a larger sample
