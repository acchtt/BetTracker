# League of Legends Model Rules v0.3.14

**Status:** Active immediately  
**Effective date:** 2026-08-01 21:09 UTC+7  
**Applies to:** All live LoL markets after the first meaningful recall cycle, and any earlier state where completed items or meaningful components are visible  
**Read with:** `MODEL_RULES_LOL_V0.3.13.md`, `MODEL_RULES_LOL_V0.3.12.md`, `MODEL_RULES_LOL_V0.3.11.md`, earlier unsuperseded LoL rules, `LOL_BETTING_PROCEDURE_ADDENDUM_2026-08-01.md`, `LOL_BETTING_PROCEDURE.md`, and `STAKE_POLICY_V2.json`

This revision follows the review of DK vs Gen.G Game 2 and BLG vs JDG Game 2. The live analysis used kills, raw gold, towers, objectives, draft structure, and recent fight frequency, but did not consistently inventory completed items, meaningful components, item concentration, unspent gold, or current damage-versus-durability breakpoints.

The omission was material. Raw gold is not automatically usable combat strength. A 2,000 gold lead concentrated on a completed carry item can be more relevant than a larger distributed lead held in support income, components, or unspent gold. Likewise, champion damage, waveclear, frontline, engage, and scaling are only functional when current item state supports them.

## 1. Probation continuity

The user-defined probation remains **4 of 10, 1-3, -601,250 VND, -0.60125u**.

- No official result or probation count changes because this rule is a process correction.
- The strict model-approved execution view remains separate.
- The active per-map exposure cap remains 0.25u.
- The v0.3.13 same-day duration-over suspension remains active for the remainder of 2026-08-01.

## 2. Mandatory item-strength inventory

For every live assessment after the first meaningful recall cycle, record the visible item state for both teams.

Use the fixed role order:

- Top;
- Jungle;
- Mid;
- ADC;
- Support.

For each role, record when visible:

- completed major items;
- meaningful components;
- boots tier;
- defensive or utility purchases that materially alter target access, burst survival, sustain, waveclear, objective damage, or engage reliability;
- relevant level breakpoint;
- whether the player is currently on the map, recalling, dead, or carrying substantial unspent gold when that information is available.

Do not infer exact items from raw gold alone.

## 3. Usable strength versus raw gold

Every live read must classify the economy advantage by current usability.

State whether the lead is concentrated on:

- primary sustained damage;
- burst or pick damage;
- frontline durability;
- engage or support utility;
- side-lane pressure;
- components not yet converted into a completed spike;
- unspent gold.

A raw gold lead counts as a current combat confirmation only when the relevant gold has been converted into usable items, levels, or map tempo.

Distributed team gold must not be treated as equivalent to a decisive carry or frontline item lead.

## 4. Functional-statements gate

The model may not describe any of the following as functional without current item evidence:

- damage;
- waveclear;
- frontline;
- engage;
- disengage;
- sustain;
- scaling;
- objective damage;
- tower pressure;
- one-fight close potential.

A champion name or draft archetype establishes theoretical access only. Current functionality requires item, level, cooldown, positioning, and safe-delivery evidence.

When item readiness is unknown, state `ITEM STRENGTH UNKNOWN` and downgrade the verdict under Section 8.

## 5. Damage-versus-durability comparison

Before projecting fight lethality, compare the current damage profile with opposing durability.

At minimum assess:

- completed offensive items on the main damage sources;
- penetration, anti-tank, anti-heal, or burst completion when relevant;
- completed defensive items, shields, stasis, cleanse, spell shields, and sustain;
- whether frontline can survive the first rotation;
- whether carries can deliver damage safely through the opponent's access tools;
- whether damage is one-sided or both teams can return meaningful damage.

Do not project high-kill fights merely because both drafts contain engage tools.

## 6. Market-specific application

### Moneylines

Item distribution may count as one independent current-map confirmation only when:

- a completed breakpoint is visible;
- the breakpoint is on a relevant carry, frontline, or side-lane champion;
- the champion can currently use it in the next objective, siege, or side-lane sequence;
- the advantage is not neutralized by recall timing, unspent opposing gold, or inaccessible positioning.

A moneyline still requires two independent current-map confirmations.

### Kill-total Overs

A kill-total Over cannot be `LEAN` or `OFFICIAL BET` from draft engage density alone.

At minimum require:

- one observed two-sided structured-fight conversion or a clearly demonstrated high kill-velocity window; and
- current item damage that can realistically overcome the opposing frontline and defensive tools.

If both teams lack completed damage or one side can control objectives through zoning without committing, downgrade or veto the Over.

### Kill-total Unders

The v0.3.12 fight-budget rules remain mandatory.

In addition, assess whether upcoming completed-item spikes can sharply increase fight lethality before the next mandatory contest. An Under must not rely on a slow recent window when both teams are one recall away from major damage breakpoints.

### Kill handicaps

For a favorite to cover a large negative kill handicap, verify that its item lead supports clean wipes, chase, and margin expansion rather than only map control.

For a positive underdog handicap, verify whether the underdog's current items allow return damage and trade kills. Every changed handicap line remains an independent assessment.

### Duration markets

The v0.3.13 finish-path framework remains mandatory.

Item state must be included in:

- functional defense;
- waveclear access;
- frontline survival;
- one-fight compression;
- objective-to-structure conversion;
- conservative earliest finish time.

A duration thesis cannot use future scaling as current resistance unless the necessary item breakpoint is already completed or immediately purchasable with a verified safe recall window.

## 7. Item-change expiry

The following are material state events that expire a recommendation:

- completion of a major item by a relevant carry, frontline, or engage champion;
- a recall that converts substantial unspent gold into a meaningful breakpoint;
- purchase or loss of a decisive defensive active or utility item;
- a level breakpoint that materially changes the next fight;
- a visible item correction showing that the prior inventory was wrong.

After such a change, use `EXPIRED — REASSESSMENT REQUIRED` and assess the current line independently.

## 8. Unknown-item veto

After the first meaningful recall cycle:

- an `OFFICIAL BET` requires readable current items for both teams' primary damage sources and the relevant frontline or engage champions;
- if the item panel is missing or too unclear to establish those breakpoints, use `NO BET` when item strength is decision-critical;
- `LEAN — 0u watch` is allowed only when the market's other gates pass and the item uncertainty cannot plausibly reverse the directional read;
- do not guess item names from icon color, team gold, or champion identity.

## 9. Required synchronized item block

Every actionable live LoL recommendation after the first recall cycle must include:

- clock, kills, gold, towers, objectives, and next major objective;
- both teams' items in Top / Jungle / Mid / ADC / Support order;
- item-advantage concentration;
- meaningful completed breakpoints and components;
- damage-versus-durability assessment;
- unspent-gold or recall-timing risk when known;
- functional damage, waveclear, frontline, engage, and scaling status;
- item unknowns;
- market-specific gate result;
- quoted odds, model target floor, hard execution floor, stake, placement status, and expiry triggers.

If the required item evidence is unavailable, do not issue an official live recommendation.

## 10. Outcome-neutral use

Apply the item-strength gate before knowing the result.

- A bet that passes every item gate remains a valid model selection if it later loses.
- A market that fails the item gate remains `NO BET` or `LEAN` if it later wins.
- Do not loosen item requirements because a low-item game becomes bloody.
- Do not tighten them only because a high-item game remains controlled.

## 11. Review threshold

Review v0.3.14 after the earlier of:

- five settled or fully graded live LoL assessments using the required item block; or
- completion of the ten-wager probation.

Track visible items, completed breakpoints, item concentration, unspent-gold risk, damage-versus-durability read, market, odds, result, VND, units, and whether the item assessment materially changed the verdict.
