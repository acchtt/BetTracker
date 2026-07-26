(() => {
  const game2Bet = {
    event: "NIP vs LNG — Game 2",
    league: "LPL",
    bet: "LNG +13.5 kills",
    odds: 2.199,
    stakeVnd: 250000,
    status: "win",
    result: "Win",
    eventDate: "",
    notes: "Live bet taken at 13:21 — settled as win"
  };

  const isSameBet = (bet) =>
    bet.event === game2Bet.event &&
    bet.bet === game2Bet.bet &&
    Number(bet.odds) === game2Bet.odds &&
    Number(bet.stakeVnd) === game2Bet.stakeVnd;

  const defaultBet = DEFAULT_BETS.find(isSameBet);
  if (defaultBet) {
    Object.assign(defaultBet, game2Bet);
  } else {
    DEFAULT_BETS.push({ ...game2Bet, id: uid() });
  }

  const savedBet = bets.find(isSameBet);
  if (savedBet) {
    Object.assign(savedBet, game2Bet);
  } else {
    bets.unshift({ ...game2Bet, id: uid() });
  }

  const baseRender = render;
  const renderDashboardExtras = () => {
    const settledCount = bets.filter((bet) => bet.status !== "pending").length;
    const pendingCount = bets.length - settledCount;
    const totalBetsCount = document.querySelector("#totalBetsCount");
    const betCountMeta = document.querySelector("#betCountMeta");
    const unitSummaryValue = document.querySelector("#unitSummaryValue");

    if (totalBetsCount) totalBetsCount.textContent = String(bets.length);
    if (betCountMeta) betCountMeta.textContent = `${settledCount} settled · ${pendingCount} pending`;
    if (unitSummaryValue) unitSummaryValue.textContent = new Intl.NumberFormat("en-US").format(unitVnd);
  };

  render = function enhancedRender() {
    baseRender();
    renderDashboardExtras();
  };

  persist();
  render();
})();
