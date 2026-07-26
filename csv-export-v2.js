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
    "Decimal Odds",
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
      button.title = "Includes bookmaker, market, timing, tags, payout, P/L, dates, and sync metadata.";
    });

    const button = document.querySelector("[data-export-csv]");
    const panel = button?.closest(".panel");
    if (panel && !panel.querySelector(".csv-export-scope")) {
      const note = document.createElement("div");
      note.className = "backup-scope csv-export-scope";
      note.innerHTML = "<strong>Detailed CSV includes:</strong> sport, bookmaker, market, live/pre-match timing, strategy tags, payout, units, ROI, event and settlement dates, notes, and synchronization identifiers.";
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