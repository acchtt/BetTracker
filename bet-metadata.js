(() => {
  if (globalThis.__edgeLogBetMetadata || typeof bets === "undefined") return;
  globalThis.__edgeLogBetMetadata = true;

  const MARKET_OPTIONS = [
    "Totals",
    "Handicap",
    "Moneyline",
    "Kills",
    "Duration",
    "Maps",
    "Player prop",
    "Corners",
    "Cards",
    "Both teams to score",
    "Correct score",
    "Other"
  ];

  const BOOKMAKERS = [
    ["Pinnacle", ["pinnacle"]],
    ["bet365", ["bet365"]],
    ["1xBet", ["1xbet", "1x bet"]],
    ["Betano", ["betano"]],
    ["Stake", ["stake.com", " stake "]],
    ["SBOBET", ["sbobet"]],
    ["Unibet", ["unibet"]],
    ["Betway", ["betway"]],
    ["W88", ["w88"]],
    ["FUN88", ["fun88"]],
    ["DraftKings", ["draftkings"]],
    ["FanDuel", ["fanduel"]]
  ];

  const style = document.createElement("style");
  style.textContent = `
    .bet-copy { display: grid; gap: 7px; min-width: 160px; }
    .bet-copy > strong { line-height: 1.35; }
    .bet-meta { display: flex; flex-wrap: wrap; gap: 5px; }
    .bet-meta-chip {
      display: inline-flex;
      align-items: center;
      min-height: 22px;
      padding: 3px 7px;
      border: 1px solid var(--line);
      border-radius: 999px;
      background: var(--panel-soft);
      color: var(--muted);
      font-size: .66rem;
      font-weight: 760;
      line-height: 1;
      white-space: nowrap;
    }
    .bet-meta-chip--live {
      border-color: color-mix(in srgb, var(--red) 30%, var(--line));
      background: var(--red-soft);
      color: var(--red);
    }
    .bet-meta-chip--prematch {
      border-color: color-mix(in srgb, var(--blue) 28%, var(--line));
      background: var(--blue-soft);
      color: var(--blue);
    }
    .bet-meta-chip--tag {
      border-color: color-mix(in srgb, var(--purple) 28%, var(--line));
      background: var(--purple-soft);
      color: var(--purple);
    }
    .metadata-filter-field { min-width: 148px; }
    .metadata-tag-field { min-width: 158px; }
    .metadata-form-help {
      grid-column: 1 / -1;
      margin: -3px 0 0;
      color: var(--muted);
      font-size: .75rem;
      line-height: 1.45;
    }
    @media (max-width: 760px) {
      .mobile-card-table td[data-label="Bet"] .bet-copy { gap: 8px; }
      .mobile-card-table .bet-meta { gap: 6px; }
      .metadata-filter-field,
      .metadata-tag-field { width: 100%; min-width: 0; }
    }
  `;
  document.head.append(style);

  function normalizeTags(value) {
    const raw = Array.isArray(value) ? value : String(value || "").split(/[,;#]/);
    return [...new Set(raw.map((tag) => normalize(tag).trim()).filter(Boolean))].slice(0, 8);
  }

  function canonicalMarket(value, selection = "") {
    const text = normalize(`${value || ""} ${selection || ""}`).toLowerCase();
    if (!text) return "";
    if (/both teams to score|btts|ca hai doi ghi ban/.test(text)) return "Both teams to score";
    if (/correct score|ty so chinh xac/.test(text)) return "Correct score";
    if (/corner|phat goc/.test(text)) return "Corners";
    if (/card|the phat|booking/.test(text)) return "Cards";
    if (/duration|minutes?|thoi gian|over\s*\d+(?:\.\d+)?\s*min/.test(text)) return "Duration";
    if (/kill|mang ha guc/.test(text)) return "Kills";
    if (/map|game\s*\d|series total|best of/.test(text)) return "Maps";
    if (/player|goalscorer|assists?|shots?|rebounds?|points?/.test(text)) return "Player prop";
    if (/handicap|spread|asian handicap|\+\d|−\d|-\d/.test(text)) return "Handicap";
    if (/over|under|tai|xiu|total goals?|total maps?|total kills?/.test(text)) return "Totals";
    if (/moneyline|match result|match winner|winner|1x2|draw no bet|\bml\b/.test(text)) return "Moneyline";
    return MARKET_OPTIONS.includes(value) ? value : "Other";
  }

  function inferTiming(value, source = "") {
    const text = normalize(`${value || ""} ${source || ""}`).toLowerCase();
    if (/live|in[- ]?play|truc tiep|dang dien ra|at \d{1,2}:\d{2}|\d{1,3}'/.test(text)) return "live";
    if (/pre[- ]?match|prematch|pre game|pre-game|truoc tran/.test(text)) return "prematch";
    return "";
  }

  function inferBookmaker(value, source = "") {
    const explicit = normalize(value || "").trim();
    if (explicit) return explicit;
    const text = ` ${normalize(source || "").toLowerCase()} `;
    const match = BOOKMAKERS.find(([, aliases]) => aliases.some((alias) => text.includes(alias)));
    return match?.[0] || "";
  }

  function metadataFor(bet = {}) {
    return {
      bookmaker: inferBookmaker(bet.bookmaker, `${bet.notes || ""} ${bet.source || ""}`),
      marketType: bet.marketType || canonicalMarket("", bet.bet),
      timing: inferTiming(bet.timing, `${bet.notes || ""} ${bet.bet || ""}`),
      tags: normalizeTags(bet.tags)
    };
  }

  globalThis.EdgeLogMetadata = {
    MARKET_OPTIONS,
    normalizeTags,
    canonicalMarket,
    inferTiming,
    inferBookmaker,
    metadataFor
  };

  if (typeof parseBetslip === "function") {
    const originalParseBetslip = parseBetslip;
    parseBetslip = function metadataParseBetslip(text, thousandsMode) {
      const parsed = originalParseBetslip(text, thousandsMode);
      if (!parsed?.bet) return parsed;
      const entries = typeof lineEntries === "function" ? lineEntries(text) : null;
      const explicitBookmaker = entries && typeof valueFor === "function" ? valueFor(entries, ["Bookmaker", "Sportsbook", "Book", "Nhà cái", "Nha cai"]) : "";
      const explicitMarket = entries && typeof valueFor === "function" ? valueFor(entries, ["Market type", "Bet type", "Loại cược", "Loai cuoc"]) : "";
      const explicitTiming = entries && typeof valueFor === "function" ? valueFor(entries, ["Timing", "Bet timing", "Type", "Thời điểm", "Thoi diem"]) : "";
      const explicitTags = entries && typeof valueFor === "function" ? valueFor(entries, ["Tags", "Strategy", "Chiến lược", "Chien luoc"]) : "";
      parsed.bet.bookmaker = inferBookmaker(explicitBookmaker, text);
      parsed.bet.marketType = canonicalMarket(explicitMarket, parsed.bet.bet);
      parsed.bet.timing = inferTiming(explicitTiming, text);
      parsed.bet.tags = normalizeTags(explicitTags);
      return parsed;
    };
  }

  if (typeof renderDetected === "function") {
    const originalRenderDetected = renderDetected;
    renderDetected = function metadataRenderDetected(confidence = 0) {
      const result = originalRenderDetected(confidence);
      const list = document.querySelector("#detectedFields");
      if (!list || !detectedBet) return result;
      const meta = metadataFor(detectedBet);
      const rows = [
        ["Bookmaker", meta.bookmaker],
        ["Market", meta.marketType],
        ["Timing", meta.timing === "live" ? "Live" : meta.timing === "prematch" ? "Pre-match" : ""],
        ["Tags", meta.tags.join(", ")]
      ].filter(([, value]) => value);
      rows.forEach(([label, value]) => {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = `<dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd>`;
        list.append(wrapper);
      });
      return result;
    };
  }

  function chip(label, className = "") {
    return label ? `<span class="bet-meta-chip ${className}">${escapeHtml(label)}</span>` : "";
  }

  if (typeof betRow === "function") {
    const originalBetRow = betRow;
    betRow = function metadataBetRow(bet, index, actions = true) {
      let html = originalBetRow(bet, index, actions);
      const meta = metadataFor(bet);
      const chips = [
        chip(meta.bookmaker),
        chip(meta.marketType),
        chip(meta.timing === "live" ? "Live" : meta.timing === "prematch" ? "Pre-match" : "", meta.timing ? `bet-meta-chip--${meta.timing}` : ""),
        ...meta.tags.map((tag) => chip(`#${tag}`, "bet-meta-chip--tag"))
      ].filter(Boolean).join("");
      const originalBetCell = `<td>${escapeHtml(bet.bet)}</td>`;
      const replacement = `<td><div class="bet-copy"><strong>${escapeHtml(bet.bet)}</strong>${chips ? `<div class="bet-meta">${chips}</div>` : ""}</div></td>`;
      html = html.replace(originalBetCell, replacement);
      html = html.replace("<tr>", `<tr data-bookmaker="${escapeHtml(meta.bookmaker.toLowerCase())}" data-market="${escapeHtml(meta.marketType.toLowerCase())}" data-timing="${escapeHtml(meta.timing)}" data-tags="${escapeHtml(meta.tags.join("|").toLowerCase())}">`);
      return html;
    };
  }

  function optionMarkup(value, label = value) {
    return `<option value="${escapeHtml(String(value).toLowerCase())}">${escapeHtml(label)}</option>`;
  }

  function ensureFilters() {
    const filters = document.querySelector(".filters");
    if (!filters || document.querySelector("#bookmakerFilter")) return;
    const reset = document.querySelector("#resetFilters");
    const wrapper = document.createElement("div");
    wrapper.style.display = "contents";
    wrapper.innerHTML = `
      <label class="filter-field metadata-filter-field"><select id="bookmakerFilter" aria-label="Filter by bookmaker"><option value="all">All bookmakers</option></select></label>
      <label class="filter-field metadata-filter-field"><select id="marketFilter" aria-label="Filter by market type"><option value="all">All markets</option></select></label>
      <label class="filter-field metadata-filter-field"><select id="timingFilter" aria-label="Filter by timing"><option value="all">All timing</option><option value="live">Live</option><option value="prematch">Pre-match</option><option value="unspecified">Unspecified</option></select></label>
      <label class="filter-field metadata-tag-field"><select id="tagFilter" aria-label="Filter by strategy tag"><option value="all">All tags</option></select></label>`;
    [...wrapper.children].forEach((node) => filters.insertBefore(node, reset || null));
    ["bookmakerFilter", "marketFilter", "timingFilter", "tagFilter"].forEach((id) => document.getElementById(id)?.addEventListener("change", renderTables));
    reset?.addEventListener("click", () => {
      ["bookmakerFilter", "marketFilter", "timingFilter", "tagFilter"].forEach((id) => {
        const element = document.getElementById(id);
        if (element) element.value = "all";
      });
      renderTables();
    });
  }

  function populateDynamicFilters() {
    const bookmakerSelect = document.querySelector("#bookmakerFilter");
    const marketSelect = document.querySelector("#marketFilter");
    const tagSelect = document.querySelector("#tagFilter");
    if (!bookmakerSelect || !marketSelect || !tagSelect) return;
    const current = {
      bookmaker: bookmakerSelect.value,
      market: marketSelect.value,
      tag: tagSelect.value
    };
    const bookmakers = [...new Set(bets.map((bet) => metadataFor(bet).bookmaker).filter(Boolean))].sort((a, b) => a.localeCompare(b));
    const markets = [...new Set(bets.map((bet) => metadataFor(bet).marketType).filter(Boolean))].sort((a, b) => a.localeCompare(b));
    const tags = [...new Set(bets.flatMap((bet) => metadataFor(bet).tags))].sort((a, b) => a.localeCompare(b));
    bookmakerSelect.innerHTML = `<option value="all">All bookmakers</option>${bookmakers.map((value) => optionMarkup(value)).join("")}`;
    marketSelect.innerHTML = `<option value="all">All markets</option>${markets.map((value) => optionMarkup(value)).join("")}`;
    tagSelect.innerHTML = `<option value="all">All tags</option>${tags.map((value) => optionMarkup(value, `#${value}`)).join("")}`;
    bookmakerSelect.value = [...bookmakerSelect.options].some((option) => option.value === current.bookmaker) ? current.bookmaker : "all";
    marketSelect.value = [...marketSelect.options].some((option) => option.value === current.market) ? current.market : "all";
    tagSelect.value = [...tagSelect.options].some((option) => option.value === current.tag) ? current.tag : "all";
  }

  function metadataMatches(bet) {
    const meta = metadataFor(bet);
    const query = normalize(document.querySelector("#searchInput")?.value || "").toLowerCase();
    const bookmaker = document.querySelector("#bookmakerFilter")?.value || "all";
    const market = document.querySelector("#marketFilter")?.value || "all";
    const timing = document.querySelector("#timingFilter")?.value || "all";
    const tag = document.querySelector("#tagFilter")?.value || "all";
    const haystack = normalize(`${bet.event || ""} ${bet.league || ""} ${bet.bet || ""} ${bet.result || ""} ${meta.bookmaker} ${meta.marketType} ${meta.timing} ${meta.tags.join(" ")}`).toLowerCase();
    return (!query || haystack.includes(query))
      && (bookmaker === "all" || meta.bookmaker.toLowerCase() === bookmaker)
      && (market === "all" || meta.marketType.toLowerCase() === market)
      && (timing === "all" || (timing === "unspecified" ? !meta.timing : meta.timing === timing))
      && (tag === "all" || meta.tags.some((item) => item.toLowerCase() === tag));
  }

  if (typeof renderTables === "function") {
    renderTables = function metadataRenderTables() {
      ensureFilters();
      populateDynamicFilters();
      const fullBody = document.querySelector("#betsTableBody");
      if (fullBody) {
        const status = document.querySelector("#statusFilter")?.value || "all";
        const sport = document.querySelector("#sportFilter")?.value || "all";
        const visible = bets.filter((bet) => metadataMatches(bet)
          && (status === "all" || bet.status === status)
          && (sport === "all" || detectSport(bet).key === sport));
        fullBody.innerHTML = visible.map((bet, index) => betRow(bet, index, true)).join("");
        const empty = document.querySelector("#emptyState");
        if (empty) empty.hidden = visible.length > 0;
      }
      const recentBody = document.querySelector("#recentBetsBody");
      if (recentBody) recentBody.innerHTML = bets.slice(0, 5).map((bet, index) => betRow(bet, index, false)).join("");
    };
  }

  ensureFilters();
  renderTables();
})();