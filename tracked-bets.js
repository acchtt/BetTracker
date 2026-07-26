(() => {
  const SYNC_KEY = "bet-tracker-chat-sync-version";
  const SYNC_VERSION = "2026-07-26-tt-edg-game-2-under-24-5";

  if (localStorage.getItem(SYNC_KEY) === SYNC_VERSION) return;

  const trackedBets = [
    {
      event: "Tigres UANL vs Atletico San Luis",
      league: "Mexico Liga MX",
      bet: "Under 3.5",
      odds: 1.72,
      stakeVnd: 594000,
      status: "loss",
      result: "2–2",
      eventDate: "",
      notes: "Live entry at 47' with the score 1–1",
      aliases: ["Tigres match", "Tigres UANL vs Atletico San Luis"]
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
      notes: "Official tracked bet",
      aliases: ["LAFC vs Sporting Kansas City"]
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
      notes: "Pre-game entry after finalized draft — settled as loss",
      aliases: ["TT vs EDG — Game 1", "TT vs EDG Game 1"]
    },
    {
      event: "TT vs EDG — Game 2",
      league: "LPL",
      bet: "Under 24.5 kills",
      odds: 2.028,
      stakeVnd: 250000,
      status: "pending",
      result: "",
      eventDate: "",
      notes: "Live entry at 18:00 with EDG leading 4–1",
      aliases: ["TT vs EDG — Game 2", "TT vs EDG Game 2"]
    }
  ];

  const matchesTrackedBet = (bet, tracked) => {
    const sameEvent = tracked.aliases.includes(bet.event);
    const sameSelection = bet.bet === tracked.bet;
    return sameEvent && sameSelection;
  };

  const upsert = (collection, tracked) => {
    const existing = collection.find((bet) => matchesTrackedBet(bet, tracked));
    const cleanTracked = { ...tracked };
    delete cleanTracked.aliases;

    if (existing) {
      Object.assign(existing, cleanTracked);
      return;
    }

    collection.unshift({ ...cleanTracked, id: uid() });
  };

  trackedBets.forEach((tracked) => {
    upsert(DEFAULT_BETS, tracked);
    upsert(bets, tracked);
  });

  persist();
  localStorage.setItem(SYNC_KEY, SYNC_VERSION);
  render();
})();
