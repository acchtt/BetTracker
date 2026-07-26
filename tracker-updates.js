(() => {
  const game2Bet = {
    event: "NIP vs LNG — Game 2",
    league: "LPL",
    bet: "LNG +13.5 kills",
    odds: 2.199,
    stakeVnd: 250000,
    status: "pending",
    result: "",
    eventDate: "",
    notes: "Live bet taken at 13:21"
  };

  const isSameBet = (bet) =>
    bet.event === game2Bet.event &&
    bet.bet === game2Bet.bet &&
    Number(bet.odds) === game2Bet.odds &&
    Number(bet.stakeVnd) === game2Bet.stakeVnd;

  if (!DEFAULT_BETS.some(isSameBet)) {
    DEFAULT_BETS.push({ ...game2Bet, id: uid() });
  }

  if (!bets.some(isSameBet)) {
    bets.unshift({ ...game2Bet, id: uid() });
    persist();
    render();
    toast("LNG +13.5 Game 2 bet added");
  }
})();
