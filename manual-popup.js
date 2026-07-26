(() => {
  if (document.documentElement.dataset.manualPopupReady === "true") return;
  document.documentElement.dataset.manualPopupReady = "true";

  document.querySelectorAll(".sidebar-nav a[href='parser.html'], .avatar-pill").forEach((element) => element.remove());

  const horizontalBrandStyle = document.createElement("style");
  horizontalBrandStyle.textContent = `
    .sidebar-brand.sidebar-brand--horizontal { display: block; padding: 0 4px 20px; }
    .sidebar-brand__horizontal { display: block; width: min(100%, 190px); height: auto; margin: 0 auto; }
  `;
  document.head.append(horizontalBrandStyle);

  document.querySelectorAll(".sidebar-brand").forEach((brand) => {
    brand.classList.add("sidebar-brand--horizontal");
    brand.innerHTML = `<img class="sidebar-brand__horizontal" src="assets/edgelog-horizontal-dark.svg?v=1" alt="EdgeLog — Log Bets. Gain Edge.">`;
  });

  const favicon = document.querySelector("link[rel~='icon']");
  if (favicon) {
    favicon.href = "assets/edgelog-app-icon.svg?v=4";
    favicon.type = "image/svg+xml";
  }
  document.querySelectorAll("a[href='bets.html?add=1'], a[href$='/bets.html?add=1']").forEach((link) => {
    link.dataset.openManual = "";
    link.href = "#";
  });

  let dialog = document.querySelector("#manualDialog");
  const createdHere = !dialog;

  if (!dialog) {
    dialog = document.createElement("dialog");
    dialog.id = "manualDialog";
    dialog.innerHTML = `
      <form id="manualForm" method="dialog">
        <div class="dialog-heading">
          <div><p class="panel-kicker">MANUAL ENTRY</p><h2 id="dialogTitle">Add bet</h2></div>
          <button id="closeDialogBtn" class="icon-button" type="button" aria-label="Close">×</button>
        </div>
        <input id="editingId" type="hidden">
        <div class="form-grid">
          <label>Event<input id="eventField" required></label>
          <label>League<input id="leagueField"></label>
          <label>Bet<input id="betField" required></label>
          <label>Odds<input id="oddsField" type="number" min="1" step="0.001" required></label>
          <label>Stake (VND)<input id="stakeField" type="number" min="0" step="1000" required></label>
          <label>Status
            <select id="statusField">
              <option value="pending">Pending</option><option value="win">Win</option><option value="half-win">Half win</option>
              <option value="loss">Loss</option><option value="half-loss">Half loss</option><option value="void">Void</option>
            </select>
          </label>
          <label>Event date<input id="dateField" type="datetime-local"></label>
          <label>Result / score<input id="resultField"></label>
          <label class="full-width">Notes<textarea id="notesField" rows="3"></textarea></label>
        </div>
        <div class="button-row dialog-actions">
          <button id="cancelDialogBtn" class="button secondary" type="button">Cancel</button>
          <button class="button primary" type="submit">Save bet</button>
        </div>
      </form>`;
    document.body.append(dialog);
  }

  function field(id) {
    return dialog.querySelector(`#${id}`);
  }

  function ensureMetadataFields() {
    if (field("bookmakerField")) return;
    const grid = dialog.querySelector(".form-grid");
    const notesLabel = field("notesField")?.closest("label");
    if (!grid) return;
    const fragment = document.createElement("div");
    fragment.style.display = "contents";
    const marketOptions = (globalThis.EdgeLogMetadata?.MARKET_OPTIONS || ["Totals", "Handicap", "Moneyline", "Kills", "Duration", "Maps", "Player prop", "Corners", "Cards", "Both teams to score", "Correct score", "Other"])
      .map((value) => `<option value="${value}">${value}</option>`).join("");
    fragment.innerHTML = `
      <label>Bookmaker<input id="bookmakerField" type="text" placeholder="e.g. Pinnacle"></label>
      <label>Market type<select id="marketTypeField"><option value="">Auto-detect</option>${marketOptions}</select></label>
      <label>Bet timing<select id="timingField"><option value="">Unspecified</option><option value="prematch">Pre-match</option><option value="live">Live</option></select></label>
      <label>Strategy tags<input id="tagsField" type="text" placeholder="value, live-read, evaluation"></label>
      <p class="metadata-form-help">Tags are comma-separated and can be used to filter your betting history later.</p>`;
    [...fragment.children].forEach((node) => grid.insertBefore(node, notesLabel || null));
  }

  function ensureClvFields() {
    if (field("openingOddsField")) return;
    const grid = dialog.querySelector(".form-grid");
    const notesLabel = field("notesField")?.closest("label");
    if (!grid) return;
    const fragment = document.createElement("div");
    fragment.style.display = "contents";
    fragment.innerHTML = `
      <label>Opening odds<input id="openingOddsField" type="number" min="1.001" step="0.001" placeholder="Optional"></label>
      <label>Closing odds<input id="closingOddsField" type="number" min="1.001" step="0.001" placeholder="Optional"></label>
      <p class="clv-form-help">The main Odds field is your entry price. Add the market's opening and closing prices to calculate closing-line value automatically.</p>`;
    [...fragment.children].forEach((node) => grid.insertBefore(node, notesLabel || null));
  }

  ensureMetadataFields();
  ensureClvFields();

  function metadataFor(bet = {}) {
    if (globalThis.EdgeLogMetadata?.metadataFor) return globalThis.EdgeLogMetadata.metadataFor(bet);
    return {
      bookmaker: bet.bookmaker || "",
      marketType: bet.marketType || "",
      timing: bet.timing || "",
      tags: Array.isArray(bet.tags) ? bet.tags : String(bet.tags || "").split(",").map((tag) => tag.trim()).filter(Boolean)
    };
  }

  function optionalOdds(value) {
    if (globalThis.EdgeLogCLV?.optionalOdds) return globalThis.EdgeLogCLV.optionalOdds(value);
    const parsed = Number(value || 0);
    return Number.isFinite(parsed) && parsed > 1 ? parsed : null;
  }

  function fillDialog(bet = null) {
    ensureMetadataFields();
    ensureClvFields();
    const meta = metadataFor(bet || {});
    field("dialogTitle").textContent = bet ? "Edit bet" : "Add bet";
    field("editingId").value = bet?.id || "";
    field("eventField").value = bet?.event || "";
    field("leagueField").value = bet?.league || "";
    field("betField").value = bet?.bet || "";
    field("oddsField").value = bet?.odds || "";
    field("stakeField").value = bet?.stakeVnd || "";
    field("statusField").value = bet?.status || "pending";
    field("dateField").value = bet?.eventDate || "";
    field("resultField").value = bet?.result || "";
    field("bookmakerField").value = meta.bookmaker;
    field("marketTypeField").value = meta.marketType === "Other" && !bet?.marketType ? "" : meta.marketType;
    field("timingField").value = meta.timing;
    field("tagsField").value = meta.tags.join(", ");
    field("openingOddsField").value = optionalOdds(bet?.openingOdds) || "";
    field("closingOddsField").value = optionalOdds(bet?.closingOdds) || "";
    field("notesField").value = bet?.notes || "";
  }

  function openManual(bet = null) {
    const parserDialog = document.querySelector("#parserDialog");
    if (parserDialog?.open) parserDialog.close();
    fillDialog(bet);
    if (!dialog.open) dialog.showModal();
    requestAnimationFrame(() => field("eventField")?.focus());
  }

  function closeManual() {
    if (dialog.open) dialog.close();
  }

  window.openEdgeLogManualBet = openManual;
  if (typeof openDialog === "function") openDialog = openManual;

  if (createdHere) {
    field("closeDialogBtn").addEventListener("click", closeManual);
    field("cancelDialogBtn").addEventListener("click", closeManual);
    dialog.addEventListener("click", (event) => { if (event.target === dialog) closeManual(); });
  }

  field("manualForm").addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    const existing = bets.find((bet) => bet.id === field("editingId").value);
    const rawTags = field("tagsField").value;
    const tags = globalThis.EdgeLogMetadata?.normalizeTags
      ? globalThis.EdgeLogMetadata.normalizeTags(rawTags)
      : [...new Set(rawTags.split(/[,;#]/).map((tag) => tag.trim()).filter(Boolean))];
    const selectedMarket = field("marketTypeField").value;
    const inferredMarket = globalThis.EdgeLogMetadata?.canonicalMarket
      ? globalThis.EdgeLogMetadata.canonicalMarket(selectedMarket, field("betField").value)
      : selectedMarket;
    const status = field("statusField").value;
    const now = new Date().toISOString();
    const item = {
      ...(existing || {}),
      id: field("editingId").value || uid(),
      event: field("eventField").value.trim(),
      league: field("leagueField").value.trim(),
      bet: field("betField").value.trim(),
      odds: Number(field("oddsField").value),
      openingOdds: optionalOdds(field("openingOddsField").value),
      closingOdds: optionalOdds(field("closingOddsField").value),
      stakeVnd: Number(field("stakeField").value),
      status,
      eventDate: field("dateField").value,
      result: field("resultField").value.trim(),
      bookmaker: field("bookmakerField").value.trim(),
      marketType: inferredMarket,
      timing: field("timingField").value,
      tags,
      notes: field("notesField").value.trim(),
      settledAt: status === "pending" ? existing?.settledAt : (existing?.settledAt || now),
      _localEditedAt: now
    };
    const index = bets.findIndex((bet) => bet.id === item.id);
    if (index >= 0) bets[index] = item;
    else bets.unshift(item);
    persist();
    render();
    closeManual();
    toast(index >= 0 ? "Bet updated" : "Bet added");
  }, true);

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-open-manual], a[href='bets.html?add=1'], a[href$='/bets.html?add=1']");
    if (!trigger) return;
    event.preventDefault();
    event.stopPropagation();
    openManual();
  }, true);

  const params = new URLSearchParams(location.search);
  if (params.get("add") === "1") {
    openManual();
    params.delete("add");
    const next = `${location.pathname}${params.toString() ? `?${params}` : ""}${location.hash}`;
    history.replaceState({}, "", next);
  }
})();