(() => {
  const SYNC_KEY = "edgelog-canonical-ledger-version";
  const SYNC_VERSION = "2026-07-26-sandefjord-bodo-under-2-25-loss";

  if (localStorage.getItem(SYNC_KEY) === SYNC_VERSION) return;

  const canonicalBets = [
    {
      event: "Sandefjord vs Bodo/Glimt",
      league: "Norwegian Eliteserien",
      bet: "Under 2.25 total goals",
      odds: 1.75,
      stakeVnd: 250000,
      payoutVnd: 437500,
      status: "loss",
      result: "0–3",
      eventDate: "2026-07-26",
      notes: "Evaluation bet #3 — live entry at 58:34 with Bodo/Glimt leading 1–0 — settled as loss after two added-time goals"
    },
    {
      event: "MKOI vs VIT — Game 1",
      league: "LEC",
      bet: "Over 31 minutes",
      odds: 1.815,
      stakeVnd: 250000,
      status: "loss",
      result: "Loss",
      eventDate: "2026-07-26",
      notes: "Evaluation bet #2 — live entry after the line moved from Over 32 at 2.131; placed at Over 31 — settled as loss"
    },
    {
      event: "BLG vs AL — Game 2",
      league: "LPL",
      bet: "Under 28.5 kills",
      odds: 1.864,
      stakeVnd: 250000,
      status: "win",
      result: "Win",
      eventDate: "2026-07-26",
      notes: "Evaluation bet #1 — live entry at 13:27 with AL leading 3–1; settled as win"
    },
    {
      event: "TT vs EDG — Game 2",
      league: "LPL",
      bet: "Under 24.5 kills",
      odds: 2.028,
      stakeVnd: 250000,
      status: "win",
      result: "Win",
      eventDate: "",
      notes: "Live entry at 18:00 with EDG leading 4–1 — settled as win"
    },
    {
      event: "TT vs EDG — Game 1",
      league: "LPL",
      bet: "EDG +4.5 kills",
      odds: 2.007,
      stakeVnd: 500000,
      status: "loss",
      result: "TT won",
      eventDate: "",
      notes: "Pre-game entry after finalized draft — settled as loss"
    },
    {
      event: "NIP vs LNG — Game 2",
      league: "LPL",
      bet: "LNG +13.5 kills",
      odds: 2.199,
      stakeVnd: 250000,
      status: "win",
      result: "Win",
      eventDate: "",
      notes: "Live bet taken at 13:21 — settled as win"
    },
    {
      event: "NIP vs LNG — Game 1",
      league: "LPL",
      bet: "LNG +9.5 kills",
      odds: 1.94,
      stakeVnd: 500000,
      status: "loss",
      result: "Loss",
      eventDate: "2026-07-26T14:00",
      notes: "Settled as loss"
    },
    {
      event: "Weston Workers Bears vs Melbourne City FC",
      league: "Australia Cup",
      bet: "Under 1.75 (live at 0–1)",
      odds: 1.65,
      stakeVnd: 773000,
      status: "loss",
      result: "0–3",
      eventDate: "2026-07-26T11:00",
      notes: "Parsed from Vietnamese betslip"
    },
    {
      event: "LAFC vs Sporting Kansas City",
      league: "Major League Soccer",
      bet: "Under 4.25",
      odds: 2.09,
      stakeVnd: 500000,
      status: "half-win",
      result: "Half win",
      eventDate: "",
      notes: "Official tracked bet"
    },
    {
      event: "Tigres UANL vs Atletico San Luis",
      league: "Mexico Liga MX",
      bet: "Under 3.5",
      odds: 1.72,
      stakeVnd: 594000,
      status: "loss",
      result: "2–2",
      eventDate: "",
      notes: "Live entry at 47' with the score 1–1"
    }
  ];

  const oldBets = Array.isArray(bets) ? bets : [];
  const aliases = new Map([
    ["Sandefjord vs Bodo/Glimt|Under 2.25 total goals", ["Sandefjord vs Bodo/Glimt", "Sandefjord Fb vs Bodo/Glimt"]],
    ["MKOI vs VIT — Game 1|Over 31 minutes", ["MKOI vs VIT — Game 1", "MKOI vs VIT Game 1"]],
    ["BLG vs AL — Game 2|Under 28.5 kills", ["BLG vs AL — Game 2", "BLG vs AL Game 2"]],
    ["TT vs EDG — Game 2|Under 24.5 kills", ["TT vs EDG — Game 2", "TT vs EDG Game 2"]],
    ["TT vs EDG — Game 1|EDG +4.5 kills", ["TT vs EDG — Game 1", "TT vs EDG Game 1"]],
    ["NIP vs LNG — Game 2|LNG +13.5 kills", ["NIP vs LNG — Game 2"]],
    ["NIP vs LNG — Game 1|LNG +9.5 kills", ["NIP vs LNG — Game 1"]],
    ["Weston Workers Bears vs Melbourne City FC|Under 1.75 (live at 0–1)", ["Weston Workers Bears vs Melbourne City FC"]],
    ["LAFC vs Sporting Kansas City|Under 4.25", ["LAFC vs Sporting Kansas City"]],
    ["Tigres UANL vs Atletico San Luis|Under 3.5", ["Tigres match", "Tigres UANL vs Atletico San Luis"]]
  ]);

  const findExisting = (tracked) => {
    const key = `${tracked.event}|${tracked.bet}`;
    const eventAliases = aliases.get(key) || [tracked.event];
    return oldBets.find((bet) => eventAliases.includes(bet.event) && bet.bet === tracked.bet);
  };

  bets = canonicalBets.map((tracked) => {
    const existing = findExisting(tracked);
    return { ...tracked, id: existing?.id || uid() };
  });

  DEFAULT_BETS.splice(0, DEFAULT_BETS.length, ...canonicalBets.map((tracked) => ({ ...tracked, id: uid() })));
  settings.unitVnd = 500000;
  persist();
  localStorage.setItem(SYNC_KEY, SYNC_VERSION);
  render();
})();