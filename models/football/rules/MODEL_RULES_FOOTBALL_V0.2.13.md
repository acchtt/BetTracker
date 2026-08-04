# Football Model Rules v0.2.13

**Effective date:** 2026-08-01  
**Status:** Active operational correction  
**Supersedes:** Older football rules where timing classification, delivery attribution, or unit value conflict. All v0.2.12 analytical restrictions remain active.

## Trigger

The Valerenga vs HamKam preview was delivered after kickoff even though it was presented as a prematch recommendation. The user then placed a live Under 3 wager at 0-0. This was a model delivery-timing failure, not a user failure to synchronize the recommendation.

The project unit value was also changed from 500,000 VND to 1,000,000 VND.

## Active rules

### 1. Unit convention

- From 2026-08-01, **1u = 1,000,000 VND**.
- Standard `OFFICIAL BET` stake: **0.25u = 250,000 VND**.
- Standard `LEAN — SMALL` stake: **0.125u = 125,000 VND**.
- Football exposure cap remains **0.25u per match** unless explicitly changed later.
- Historical bets retain the unit value used at placement. Do not retroactively rewrite their unit results.
- For reports spanning multiple unit regimes, VND is authoritative and unit performance must be separated by unit regime.

### 2. Kickoff-status gate

Before issuing any prematch recommendation, verify the current local time against the confirmed kickoff time.

- If kickoff has passed or match status is uncertain, do not label the recommendation prematch.
- Switch to live assessment and require the current score, minute, current odds, cards, substitutions, and a fresh state snapshot.
- A lineup screen and prematch odds are not sufficient once the match has started.
- If a fresh live state cannot be obtained, return `NO BET — match already started; live state not synchronized`.

### 3. Delivery order and latency

For time-sensitive recommendations, deliver in this order:

1. recommendation label;
2. exact market and line;
3. executable minimum odds;
4. stake in units and VND;
5. expiry or invalidation condition;
6. concise reason.

Detailed analysis follows only after the executable decision. The recommendation timestamp must be compared with kickoff and quote-validity limits.

### 4. Timing attribution

- A recommendation delivered after kickoff without a fresh live reassessment is a `model-timing-failure`.
- Do not classify the resulting execution as a user synchronization error solely because the user acted on the late recommendation.
- Stake or line deviations remain separate execution issues and must not erase model timing responsibility.

### 5. Valerenga vs HamKam correction

Slip `871076012434309120`:

- Market: live Under 3 goals at 2.10, entry score 0-0.
- Stake: 250,000 VND = **0.25u** under the new unit convention.
- Potential return: 525,000 VND.
- The stake was above the `LEAN — SMALL` recommendation of 0.125u, but it did not exceed the 0.25u football cap.
- The late delivery is attributed to the model.

## Review

Track delivery timing for the next 20 football recommendations:

- delivered before kickoff;
- delivered after kickoff with synchronized live state;
- delivered after kickoff without synchronized live state;
- quote still valid at delivery;
- user execution within the stated band.

Any recommendation delivered after kickoff without synchronized live state is an automatic process-grade failure regardless of the result.