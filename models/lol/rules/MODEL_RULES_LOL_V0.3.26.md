# League of Legends Model Rules v0.3.26

**Status:** Active immediately  
**Effective date:** 2026-08-05 19:54 UTC+7  
**Purpose:** Add soul-cascade duration compression, Grub-assisted structure conversion, mandatory objective-inventory verification, and a low-latency live-response fast path.

This version supplements v0.3.25 and supersedes it only where stated. All stricter earlier bankroll, placement, probation, state-direction, item-verification, expiry, anti-line-chasing, repair, handicap, moneyline, totals, terminal-access, and exposure rules remain active.

## 1. Triggering result

HLE defeated Gen.G in Game 2 at 27:26.

Final state:

- HLE won 16-5 kills;
- HLE led by approximately 8.8k gold;
- HLE led 7-2 towers;
- HLE held 4-0 dragons and soul;
- HLE destroyed one inhibitor;
- no Baron was secured.

At the last pre-finish review, HLE led 7-4 kills, approximately 1.9k gold, 3-2 towers, 3-0 dragons, and held three Void Grubs. The model projected approximately 25 total kills and a 34-35 minute finish. The map ended with 21 kills at 27:26.

No Game 2 wager was placed. Probation remains unchanged.

## 2. Error diagnosis

The forecast error came from four process failures:

1. three Void Grubs were not incorporated until the user corrected the state;
2. the methodical-control time tax was treated as the default no-terminal-access adjustment even though HLE had direct hard engage and soul-point leverage;
3. the route model assumed another extended neutral and setup cycle instead of testing the immediate fourth-dragon-to-base cascade;
4. the duration output did not force an explicit fast-close branch beside the central route.

The v0.3.25 rule that kill suppression and time compression are separate remains correct. This result shows that both may occur together when an explicit objective-triggered cascade exists.

## 3. Mandatory objective-inventory verification

Before every synchronized duration or kill-total projection, explicitly verify or mark unknown:

- dragon count and whether either team is on soul point;
- Void Grub count by team;
- Herald status;
- Baron and Elder status or spawn timing;
- tower depth by lane when visible;
- inhibitor and base access;
- next major neutral objective and estimated time to contest.

A user correction immediately replaces the prior inventory. Any projection built on missing or incorrect objective inventory expires.

## 4. Soul-cascade branch

At or after 18:00, create a separate **soul-cascade branch** when all are present:

1. the leader has three dragons;
2. the fourth dragon is the next major neutral objective or is expected within approximately three minutes;
3. the leader has at least two executable engage or follow-up channels;
4. the trailing side must contest or concede soul;
5. the leader has meaningful structure conversion through Grubs, a tower lead, strong wave access, or high structure damage.

The soul-cascade branch must estimate:

- time to the fourth-dragon contest;
- likely fight result and death-timer window;
- towers reachable immediately after the fight;
- whether an inhibitor can fall without Baron;
- earliest Nexus time if the fight is decisive.

A valid soul-cascade branch can compress the earliest and central finish ranges by approximately three to seven minutes relative to a standard no-terminal-access route.

## 5. Relationship to terminal access

Soul point and Grubs still do not establish `TERMINAL ACCESS: YES` by themselves.

Before the decisive fight, terminal access may remain `NO` and the one-sequence score remains capped at 3/5. However, the model must recognize that terminal access can switch from `NO` to `YES` immediately after a decisive soul fight through:

- three or more defenders dead;
- multiple open waves;
- rapid outer-to-inner tower conversion;
- exposed inhibitor structures;
- an ace or extended death timers.

Do not require Baron in a route where the soul fight itself can create base access.

## 6. Grub-assisted structure multiplier

Three or more Void Grubs materially increase post-fight structure conversion when the holder also has usable waves and surviving damage dealers.

Apply the Grub-assisted structure multiplier only when the live state supports a reachable tower route. It may:

- increase the expected number of structures taken after a won fight;
- reduce the number of resets required;
- turn a dragon win into immediate inhibitor pressure;
- lower the central duration range by approximately one to three minutes.

Grubs without waves, surviving attackers, or reachable structures remain soft confirmation only.

## 7. Methodical-control tax restriction

Do not activate the v0.3.25 methodical-control time tax merely because terminal access is absent.

The tax is prohibited when the current state instead supports a high-commit objective cascade, including:

- soul point with an imminent forced contest;
- multiple hard-engage channels;
- three or more Grubs plus reachable structures;
- a trailing team that cannot safely concede the objective;
- death timers likely to create immediate tower or inhibitor access.

In these states, model the soul-cascade branch first. Apply a time tax only to a separate failed-fight or disengaged extension branch.

## 8. Dual duration branches required

For every duration projection after 18:00, provide at least:

1. **fast-close branch** — the earliest credible decisive-fight-to-Nexus route;
2. **central branch** — the most likely route with realistic resets;
3. **extension branch** — failed contest, stalled siege, or defensive hold.

When a team is on soul point, the fast-close branch cannot be omitted.

The final point estimate must weight these branches rather than defaulting to the central no-terminal-access route.

## 9. Kill-total interaction

When the soul-cascade branch is active, reduce remaining kill inventory if the likely path is one decisive one-sided fight followed by structures.

A high-engage composition does not automatically imply a Kill Over. Test whether:

- the trailing side has two executable return-kill channels;
- the decisive fight is likely to be competitive or one-sided;
- the winning team can end before another full contest;
- the line requires repeated fights that the fast-close branch removes.

A soul-cascade state may support both a shorter duration and a lower kill total.

## 10. Live-response fast path

For synchronized live screenshots, the first user-visible line must be:

`VERDICT — market @ odds — stake/status`

Then provide only:

1. verified state and state direction;
2. total-kill projection with low, central, high, and point estimate;
3. duration projection with fast, central, extension, and point estimate;
4. the single promotion or rejection trigger.

Additional detail is optional and must not delay the verdict.

During an active map:

- do not perform repository maintenance before giving the verdict;
- do not browse the web when the supplied screenshots and user corrections contain the required state;
- use the smallest complete model calculation;
- treat user corrections as immediate overrides;
- always include kill and duration projections when those markets are displayed or requested.

## 11. Game 2 calibration

Corrected pre-finish interpretation of HLE vs Gen.G Game 2:

- HLE had three dragons and three Grubs;
- HLE had direct initiation through Vi and Alistar with Akali follow-up;
- Gen.G was required to contest or concede soul;
- a decisive soul fight could create multiple tower takes and inhibitor access without Baron;
- methodical-control tax: inactive in the fast-close branch;
- terminal access before the fight: `NO`;
- terminal access after a decisive fight: capable of switching immediately to `YES`;
- corrected duration range at the last pre-finish state: approximately 27-32 minutes central, not 34-35;
- corrected kill central range: approximately 20-25, not 23-27 with a 25-point estimate.

Actual: HLE 16-5, 21 kills, 27:26.

## 12. Probation and exposure

- Completed: 11/20
- Official record: 7-4
- Net: +335,750 VND / +0.33575u
- Wager 12 remains next for model-attributed probation
- Standard stake: 0.25u = 250,000 VND
- Maximum exposure: 0.25u per map
- Minimum odds: 1.60
- No correlated same-map add-ons
- Official only after explicit placement confirmation
- All duration markets remain official-ineligible through wager 20
- No stake increase is authorized

The user-confirmed Gen.G Game 1 moneyline win remains in the overall ledger but is not model-attributed and does not automatically count toward probation because the placed market differed from the evaluated series market.

## 13. Review schedule

Review v0.3.26 after the earlier of:

- five new soul-point duration states;
- probation wager 15 settlement;
- two further misses of four or more minutes involving Grubs or soul point;
- a user-requested review.
