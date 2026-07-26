(() => {
  if (globalThis.__edgeLogBetMetadataFixes || !globalThis.EdgeLogMetadata) return;
  globalThis.__edgeLogBetMetadataFixes = true;

  const options = EdgeLogMetadata.MARKET_OPTIONS;
  const improvedMarket = (value = "", selection = "") => {
    const explicit = String(value || "").trim();
    if (options.includes(explicit) && explicit !== "Other") return explicit;
    const text = normalize(`${selection || ""} ${explicit}`).toLowerCase();
    if (/both teams to score|btts|ca hai doi ghi ban/.test(text)) return "Both teams to score";
    if (/correct score|ty so chinh xac/.test(text)) return "Correct score";
    if (/corner|phat goc/.test(text)) return "Corners";
    if (/card|the phat|booking/.test(text)) return "Cards";
    if (/player|goalscorer|assists?|shots?|rebounds?|points?/.test(text)) return "Player prop";
    if (/handicap|spread|asian handicap|(?:^|\s)[+-]\d/.test(text)) return "Handicap";
    if (/duration|minutes?|thoi gian|over\s*\d+(?:\.\d+)?\s*min/.test(text)) return "Duration";
    if (/kill|mang ha guc/.test(text)) return "Kills";
    if (/map|game\s*\d|series total|best of/.test(text)) return "Maps";
    if (/over|under|tai|xiu|total goals?|total maps?|total kills?/.test(text)) return "Totals";
    if (/moneyline|match result|match winner|winner|1x2|draw no bet|\bml\b/.test(text)) return "Moneyline";
    return explicit === "Other" ? "Other" : "";
  };

  EdgeLogMetadata.canonicalMarket = improvedMarket;

  if (typeof parseBetslip === "function") {
    const previousParseBetslip = parseBetslip;
    parseBetslip = function refinedMetadataParse(text, thousandsMode) {
      const parsed = previousParseBetslip(text, thousandsMode);
      if (parsed?.bet) parsed.bet.marketType = improvedMarket(parsed.bet.marketType, parsed.bet.bet);
      return parsed;
    };
  }

  let changed = false;
  bets.forEach((bet) => {
    if (bet.marketType) return;
    const inferred = improvedMarket("", bet.bet);
    if (!inferred) return;
    bet.marketType = inferred;
    changed = true;
  });
  if (changed) persist();

  const rerender = () => queueMicrotask(() => typeof renderTables === "function" && renderTables());
  document.querySelector("#searchInput")?.addEventListener("input", rerender);
  document.querySelector("#statusFilter")?.addEventListener("change", rerender);
  document.querySelector("#sportFilter")?.addEventListener("change", rerender);

  if (changed && typeof render === "function") render();
})();