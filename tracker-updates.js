(() => {
  if (!document.querySelector('link[href="league-logos.css"]')) {
    const logoStyles = document.createElement("link");
    logoStyles.rel = "stylesheet";
    logoStyles.href = "league-logos.css";
    document.head.append(logoStyles);
  }

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

  const normalizeLeagueText = (value = "") => normalize(String(value)).toLowerCase();

  const leagueIdentities = [
    { key: "lpl", label: "LPL", mark: "LPL", tests: ["lpl", "league of legends pro league", "nip vs lng", "lng esports", "weibo gaming", "bilibili gaming", "jd gaming", "top esports"] },
    { key: "lec", label: "LEC", mark: "LEC", tests: ["lec", "league of legends emea championship", "karmine corp", "g2 esports", "movistar koi", "m koi"] },
    { key: "lck", label: "LCK", mark: "LCK", tests: ["lck", "league of legends champions korea", "t1", "gen.g", "hanwha life", "dplus kia"] },
    { key: "lcs", label: "LCS", mark: "LCS", tests: ["lcs", "league championship series", "cloud9", "team liquid lol", "flyquest"] },
    { key: "vcs", label: "VCS", mark: "VCS", tests: ["vcs", "vietnam championship series", "gam esports", "team secret wh"] },
    { key: "cs2", label: "CS2", mark: "CS2", tests: ["cs2", "counter-strike 2", "counter strike 2", "counter-strike", "hltv", "astralis", "hotu"] },
    { key: "valorant", label: "VALORANT", mark: "V", tests: ["valorant", "vct", "valorant champions tour"] },
    { key: "dota2", label: "Dota 2", mark: "D2", tests: ["dota 2", "dota2", "the international"] },
    { key: "pubg", label: "PUBG", mark: "P", tests: ["pubg", "pubg global", "pcl", "pgs"] },

    { key: "australia-cup", label: "Australia Cup", mark: "AUC", tests: ["australia cup", "ffa cup"] },
    { key: "premier-league", label: "Premier League", mark: "PL", tests: ["premier league", "english premier", " epl"] },
    { key: "champions-league", label: "Champions League", mark: "UCL", tests: ["champions league", "uefa champions", " ucl"] },
    { key: "liga-mx", label: "Liga MX", mark: "LMX", tests: ["liga mx", "tigres", "monterrey", "toluca", "club america", "pachuca", "cruz azul", "chivas"] },
    { key: "mls", label: "MLS", mark: "MLS", tests: ["major league soccer", " mls", "lafc", "la fc", "sporting kansas", "inter miami", "la galaxy", "portland timbers", "seattle sounders"] },
    { key: "laliga", label: "LaLiga", mark: "LL", tests: ["laliga", "la liga", "primera division spain"] },
    { key: "serie-a", label: "Serie A", mark: "SA", tests: ["serie a", "italy serie a"] },
    { key: "bundesliga", label: "Bundesliga", mark: "BL", tests: ["bundesliga", "germany bundesliga"] },
    { key: "libertadores", label: "Libertadores", mark: "LIB", tests: ["copa libertadores", "libertadores"] },

    { key: "nba", label: "NBA", mark: "NBA", tests: [" nba", "national basketball association"] },
    { key: "wnba", label: "WNBA", mark: "WNBA", tests: ["wnba", "women's national basketball"] },
    { key: "euroleague", label: "EuroLeague", mark: "EL", tests: ["euroleague", "euro league basketball"] },
    { key: "nfl", label: "NFL", mark: "NFL", tests: ["nfl", "national football league"] },
    { key: "mlb", label: "MLB", mark: "MLB", tests: ["mlb", "major league baseball"] },
    { key: "nhl", label: "NHL", mark: "NHL", tests: ["nhl", "national hockey league"] },
    { key: "atp", label: "ATP", mark: "ATP", tests: ["atp", "atp tour"] },
    { key: "wta", label: "WTA", mark: "WTA", tests: ["wta", "wta tour"] },
    { key: "ufc", label: "UFC", mark: "UFC", tests: ["ufc", "ultimate fighting championship"] },
    { key: "f1", label: "Formula 1", mark: "F1", tests: ["formula 1", "formula one", " f1"] },
    { key: "ipl", label: "IPL", mark: "IPL", tests: ["indian premier league", " ipl"] }
  ];

  const sportFallbacks = [
    { key: "esports", label: "Esports", mark: "🎮", tests: ["esports", "league of legends", "lol", "counter-strike", "valorant", "dota", "pubg"] },
    { key: "football", label: "Football", mark: "⚽", tests: ["football", "soccer", "cup", "liga", "premier", "champions", "serie a", "bundesliga", "eredivisie", "copa", "fc "] },
    { key: "basketball", label: "Basketball", mark: "🏀", tests: ["basketball", "ncaab", "acb"] },
    { key: "baseball", label: "Baseball", mark: "⚾", tests: ["baseball", "npb", "kbo"] },
    { key: "hockey", label: "Hockey", mark: "🏒", tests: ["hockey", "khl"] },
    { key: "tennis", label: "Tennis", mark: "🎾", tests: ["tennis", "challenger"] },
    { key: "american-football", label: "American Football", mark: "🏈", tests: ["american football", "ncaa football"] },
    { key: "combat", label: "Combat Sports", mark: "🥊", tests: ["mma", "boxing", "bellator"] },
    { key: "cricket", label: "Cricket", mark: "🏏", tests: ["cricket", "bbl", "the hundred"] },
    { key: "motorsport", label: "Motorsport", mark: "🏎", tests: ["motogp", "nascar", "motorsport"] }
  ];

  const detectLeagueIdentity = (bet) => {
    const haystack = normalizeLeagueText(`${bet.league || ""} ${bet.event || ""} ${bet.bet || ""}`);
    return leagueIdentities.find((item) => item.tests.some((token) => haystack.includes(token)))
      || sportFallbacks.find((item) => item.tests.some((token) => haystack.includes(token)))
      || { key: "generic", label: bet.league || "Other", mark: "🏆" };
  };

  const decorateLeagueLogos = () => {
    const rows = document.querySelectorAll("#betsTableBody tr");
    rows.forEach((row) => {
      const eventCell = row.cells?.[1];
      const selectionCell = row.cells?.[2];
      if (!eventCell || !selectionCell) return;

      const title = eventCell.querySelector("strong");
      const eventName = title?.textContent?.trim() || "";
      const selection = selectionCell.textContent?.trim() || "";
      const bet = bets.find((item) => item.event === eventName && item.bet === selection)
        || bets.find((item) => item.event === eventName);
      if (!bet) return;

      const identity = detectLeagueIdentity(bet);
      const wrapper = document.createElement("div");
      wrapper.className = "event-cell";

      const logo = document.createElement("span");
      logo.className = `league-logo logo-${identity.key}`;
      logo.setAttribute("role", "img");
      logo.setAttribute("aria-label", `${identity.label} logo`);
      logo.textContent = identity.mark;

      const copy = document.createElement("div");
      copy.className = "event-copy";

      const eventTitle = document.createElement("strong");
      eventTitle.textContent = bet.event;

      const meta = document.createElement("small");
      const leagueName = document.createElement("span");
      leagueName.className = "league-label";
      leagueName.textContent = identity.label;
      meta.append(leagueName);
      if (bet.eventDate) meta.append(` · ${formatDate(bet.eventDate)}`);

      copy.append(eventTitle, meta);
      wrapper.append(logo, copy);
      eventCell.replaceChildren(wrapper);
    });
  };

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
    decorateLeagueLogos();
  };

  persist();
  render();
})();
