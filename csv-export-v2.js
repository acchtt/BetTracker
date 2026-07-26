(() => {
  if (globalThis.__edgeLogCsvExportV2 || typeof bets === "undefined") return;
  globalThis.__edgeLogCsvExportV2 = true;

  const headers = [
    "Record ID",
    "Sync ID",
    "Event",
    "League",
    "Sport",
    "Bookmaker",
    "Market Type",
    "Timing",
    "Strategy Tags",
    "Selection",
    "Entry Odds",
    "Opening Odds",
    "Closing Odds",
    "CLV %",
    "Implied Probability Edge pp",
    "Closing Line Verdict",
    "Stake VND",
    "Stake Units",
    "Potential Payout VND",
    "Status",
    "Result",
    "P/L VND",
    "P/L Units",
    "ROI on Stake %",
    "Event Date",
    "Settled At",
    "Notes",
    "Last Local Edit",
    "Last Sync Update"
  ];

  function metadataFor(bet = {}) {
    if (globalThis.EdgeLogMetadata?.metadataFor) return globalThis.EdgeLogMetadata.metadataFor(bet);
    return {
      bookmaker: bet.bookmaker || "",
      marketType: bet.marketType || "",
      timing: bet.timing || "",
      tags: Array.isArray(bet.tags) ? bet.tags : String(bet.tags || "").split(/[,;#]/).map((tag) => tag.trim()).filter(Boolean)
    };
  }

  function isoDate(value) {
    if (!value) return "";
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? String(value) : date.toISOString();
  }

  function payoutFor(bet) {
    const explicit = Number(bet.payoutVnd || 0);
    if (explicit > 0) return explicit;
    const stake = Number(bet.stakeVnd || 0);
    const odds = Number(bet.odds || 0);
    return stake > 0 && odds > 1 ? Math.round(stake * odds) : 0;
  }

  function optionalOdds(value) {
    if (globalThis.EdgeLogCLV?.optionalOdds) return globalThis.EdgeLogCLV.optionalOdds(value);
    const parsed = Number(value || 0);
    return Number.isFinite(parsed) && parsed > 1 ? parsed : null;
  }

  function clvPercent(bet) {
    if (globalThis.EdgeLogCLV?.clvPercent) return globalThis.EdgeLogCLV.clvPercent(bet);
    const entry = optionalOdds(bet.odds);
    const close = optionalOdds(bet.closingOdds);
    return entry && close ? ((entry / close) - 1) * 100 : null;
  }

  function probabilityEdge(bet) {
    if (globalThis.EdgeLogCLV?.impliedProbabilityEdge) return globalThis.EdgeLogCLV.impliedProbabilityEdge(bet);
    const entry = optionalOdds(bet.odds);
    const close = optionalOdds(bet.closingOdds);
    return entry && close ? ((1 / close) - (1 / entry)) * 100 : null;
  }

  function closingVerdict(bet) {
    if (globalThis.EdgeLogCLV?.verdict) return globalThis.EdgeLogCLV.verdict(bet).label;
    const clv = clvPercent(bet);
    if (clv === null) return "";
    if (clv > 0.05) return "Beat close";
    if (clv < -0.05) return "Missed close";
    return "Matched close";
  }

  function csvSafeText(value) {
    const text = String(value ?? "");
    return /^[=+\-@]/.test(text) ? `'${text}` : text;
  }

  function csvCell(value) {
    const normalized = typeof value === "number" && Number.isFinite(value) ? String(value) : csvSafeText(value);
    return `"${normalized.replaceAll('"', '""')}"`;
  }

  function rowFor(bet) {
    const meta = metadataFor(bet);
    const stake = Number(bet.stakeVnd || 0);
    const pl = Number(profitLoss(bet) || 0);
    const unit = Math.max(1, Number(settings.unitVnd || 500000));
    const roi = stake > 0 && bet.status !== "pending" ? (pl / stake) * 100 : 0;
    const sport = typeof detectSport === "function" ? detectSport(bet).label : "";
    const clv = clvPercent(bet);
    const edge = probabilityEdge(bet);

    return [
      bet.id || "",
      bet._syncId || "",
      bet.event || "",
      bet.league || "",
      sport,
      meta.bookmaker || "",
      meta.marketType || "",
      meta.timing === "live" ? "Live" : meta.timing === "prematch" ? "Pre-match" : "",
      meta.tags.join(" | "),
      bet.bet || "",
      Number(bet.odds || 0),
      optionalOdds(bet.openingOdds) ?? "",
      optionalOdds(bet.closingOdds) ?? "",
      clv ?? "",
      edge ?? "",
      closingVerdict(bet),
      stake,
      stake / unit,
      payoutFor(bet),
      typeof statusLabel === "function" ? statusLabel(bet.status) : bet.status || "",
      bet.result || "",
      pl,
      pl / unit,
      roi,
      isoDate(bet.eventDate),
      isoDate(bet.settledAt),
      bet.notes || "",
      isoDate(bet._localEditedAt),
      isoDate(bet._syncUpdatedAt)
    ];
  }

  function filename() {
    const date = new Date();
    const stamp = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    return `edgelog-detailed-bets-${stamp}.csv`;
  }

  function exportDetailedCsv() {
    const rows = [headers, ...bets.map(rowFor)];
    const csv = `\uFEFF${rows.map((row) => row.map(csvCell).join(",")).join("\r\n")}`;
    download(filename(), csv, "text/csv;charset=utf-8");
    toast(`Detailed CSV exported · ${bets.length} bet${bets.length === 1 ? "" : "s"}`);
  }

  function decorateSettings() {
    document.querySelectorAll("[data-export-csv]").forEach((button) => {
      button.textContent = "Export detailed CSV";
      button.title = "Includes line prices, CLV, bookmaker, market, timing, tags, payout, P/L, dates, and sync metadata.";
    });

    const button = document.querySelector("[data-export-csv]");
    const panel = button?.closest(".panel");
    if (panel && !panel.querySelector(".csv-export-scope")) {
      const note = document.createElement("div");
      note.className = "backup-scope csv-export-scope";
      note.innerHTML = "<strong>Detailed CSV includes:</strong> entry, opening and closing odds, CLV, implied probability edge, sport, bookmaker, market, timing, strategy tags, payout, units, ROI, dates, notes, and synchronization identifiers.";
      panel.append(note);
    }
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-export-csv]");
    if (!button) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    exportDetailedCsv();
  }, true);

  decorateSettings();
})();