(() => {
  document.querySelector('link[href="league-logos.css"]')?.remove();

  if (!document.querySelector('link[href="sports-icons.css"]')) {
    const iconStyles = document.createElement("link");
    iconStyles.rel = "stylesheet";
    iconStyles.href = "sports-icons.css";
    document.head.append(iconStyles);
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

  const normalizeSportText = (value = "") => normalize(String(value)).toLowerCase();

  const sportIcons = {
    esports: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 8.2h9.6a4 4 0 0 1 3.8 5.2l-1.3 4a2.1 2.1 0 0 1-3.5.8l-1.7-1.7H9.9l-1.7 1.7a2.1 2.1 0 0 1-3.5-.8l-1.3-4a4 4 0 0 1 3.8-5.2Z"/><path d="M8.2 11v4M6.2 13h4M16.5 11.8h.01M18 14h.01"/></svg>`,
    football: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m12 7 3 2.2-1.1 3.5h-3.8L9 9.2 12 7Z"/><path d="m9 9.2-3.2-.5M15 9.2l3.2-.5M10.1 12.7 8 15.4M13.9 12.7l2.1 2.7M8 15.4l.7 3M16 15.4l-.7 3"/></svg>`,
    basketball: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3.4 10.2c5.2.7 8.8 4.4 10.4 10M20.6 13.8c-5.2-.7-8.8-4.4-10.4-10M12 3c-1.7 4.8-1.7 13.2 0 18M3 12h18"/></svg>`,
    baseball: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M7.2 4.4c3.1 2 4.5 5.2 4.2 8.2M16.8 19.6c-3.1-2-4.5-5.2-4.2-8.2M8.4 7.1l-1.1 1M10 9.1l-1.2 1M15.6 16.9l1.1-1M14 14.9l1.2-1"/></svg>`,
    hockey: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h3l1.3 12.7c.2 1.8 1.7 3.3 3.6 3.3H19"/><path d="M6 20h6"/><ellipse cx="17.5" cy="20" rx="3.5" ry="1.4"/></svg>`,
    tennis: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M5.4 5.8c4.7 2.8 6.8 7 6.3 12.8M18.6 18.2c-4.7-2.8-6.8-7-6.3-12.8"/></svg>`,
    "american-football": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.2 15.8C2 13.6 3.6 8.5 7.8 5s9.3-4 11.6-1.8 1 7.3-3.2 10.8S6.4 18 4.2 15.8Z"/><path d="m8.2 13.6 7.6-6.4M10 9.7l4.1 4.8M11.7 8.3l4 4.7"/></svg>`,
    combat: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 13.3V8.8a2 2 0 0 1 4 0V7.5a2 2 0 0 1 4 0v1a2 2 0 0 1 4 0v4.2c0 4.8-3.1 8.3-7.7 8.3H9.7C5.9 21 3 18 3 14.3a2 2 0 0 1 3.5-1Z"/><path d="M6.5 13.3 9 15.8"/></svg>`,
    cricket: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15.5 3 2.8 2.8-9.9 11.8-2-2L15.5 3Z"/><path d="m6.4 15.6-2.7 2.7 2 2 2.7-2.7"/><circle cx="18" cy="17" r="2.3"/></svg>`,
    motorsport: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 21V4"/><path d="M6 5h11l-1.7 3L17 11H6Z"/><path d="M9 5v6M13 5v6M6 8h10"/></svg>`,
    generic: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h8v4a4 4 0 0 1-8 0V4Z"/><path d="M8 6H5v1a4 4 0 0 0 4 4M16 6h3v1a4 4 0 0 1-4 4M12 12v5M8 21h8M9 17h6"/></svg>`
  };

  const sports = [
    {
      key: "esports",
      label: "Esports",
      tests: [
        "esports", "lpl", "lec", "lck", "lcs", "vcs", "msi", "worlds",
        "league of legends", " lol ", "cs2", "counter-strike", "counter strike",
        "valorant", "vct", "dota", "pubg", "hltv", "nip vs lng", "lng esports",
        "g2 esports", "karmine corp", "movistar koi", "bilibili gaming", "jd gaming",
        "top esports", "weibo gaming", "t1", "gen.g", "astralis", "hotu"
      ]
    },
    {
      key: "basketball",
      label: "Basketball",
      tests: ["basketball", "nba", "wnba", "euroleague", "ncaab", "ncaawb", "acb"]
    },
    {
      key: "baseball",
      label: "Baseball",
      tests: ["baseball", "mlb", "npb", "kbo"]
    },
    {
      key: "hockey",
      label: "Hockey",
      tests: ["hockey", "nhl", "khl"]
    },
    {
      key: "tennis",
      label: "Tennis",
      tests: ["tennis", "atp", "wta", "challenger"]
    },
    {
      key: "american-football",
      label: "American Football",
      tests: ["american football", "nfl", "ncaa football", "college football"]
    },
    {
      key: "combat",
      label: "Combat Sports",
      tests: ["combat", "ufc", "mma", "boxing", "bellator", "one championship"]
    },
    {
      key: "cricket",
      label: "Cricket",
      tests: ["cricket", "ipl", "bbl", "the hundred"]
    },
    {
      key: "motorsport",
      label: "Motorsport",
      tests: ["motorsport", "formula 1", "formula one", " f1 ", "motogp", "nascar"]
    },
    {
      key: "football",
      label: "Football",
      tests: [
        "football", "soccer", "australia cup", "ffa cup", "premier league", "epl",
        "champions league", "uefa champions", "ucl", "liga mx", "major league soccer",
        " mls ", "laliga", "la liga", "serie a", "bundesliga", "eredivisie",
        "libertadores", "copa", "tigres", "monterrey", "toluca", "club america",
        "pachuca", "cruz azul", "chivas", "lafc", "la fc", "sporting kansas",
        "inter miami", "la galaxy", "portland timbers", "seattle sounders", " fc "
      ]
    }
  ];

  const detectSport = (bet) => {
    const haystack = ` ${normalizeSportText(`${bet.league || ""} ${bet.event || ""} ${bet.bet || ""}`)} `;
    const match = sports.find((sport) => sport.tests.some((token) => haystack.includes(token)));
    return match || { key: "generic", label: "Other" };
  };

  const decorateSportIcons = () => {
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

      const sport = detectSport(bet);
      const wrapper = document.createElement("div");
      wrapper.className = "event-cell";

      const logo = document.createElement("span");
      logo.className = `sport-logo sport-logo--${sport.key}`;
      logo.setAttribute("role", "img");
      logo.setAttribute("aria-label", `${sport.label} icon`);
      logo.title = sport.label;
      logo.innerHTML = sportIcons[sport.key] || sportIcons.generic;

      const copy = document.createElement("div");
      copy.className = "event-copy";

      const eventTitle = document.createElement("strong");
      eventTitle.textContent = bet.event;

      const meta = document.createElement("small");
      const leagueName = document.createElement("span");
      leagueName.className = "league-label";
      leagueName.textContent = bet.league || sport.label;
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
    decorateSportIcons();
  };

  persist();
  render();
})();