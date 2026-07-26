(() => {
  if (document.documentElement.dataset.manualPopupReady === "true") return;
  document.documentElement.dataset.manualPopupReady = "true";

  document.querySelectorAll(".sidebar-nav a[href='parser.html'], .avatar-pill").forEach((element) => element.remove());
  document.querySelectorAll(".sidebar-brand__mark").forEach((image) => { image.src = "assets/edgelog-mark.svg?v=3"; });
  const favicon = document.querySelector("link[rel~='icon']");
  if (favicon) {
    favicon.href = "assets/edgelog-app-icon.svg?v=3";
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
          <div>
            <p class="panel-kicker">MANUAL ENTRY</p>
            <h2 id="dialogTitle">Add bet</h2>
          </div>
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
              <option value="pending">Pending</option>
              <option value="win">Win</option>
              <option value="half-win">Half win</option>
              <option value="loss">Loss</option>
              <option value="half-loss">Half loss</option>
              <option value="void">Void</option>
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

  function fillDialog(bet = null) {
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

  if (createdHere) {
    field("closeDialogBtn").addEventListener("click", closeManual);
    field("cancelDialogBtn").addEventListener("click", closeManual);
    field("manualForm").addEventListener("submit", (event) => {
      event.preventDefault();
      const item = {
        id: field("editingId").value || uid(),
        event: field("eventField").value.trim(),
        league: field("leagueField").value.trim(),
        bet: field("betField").value.trim(),
        odds: Number(field("oddsField").value),
        stakeVnd: Number(field("stakeField").value),
        status: field("statusField").value,
        eventDate: field("dateField").value,
        result: field("resultField").value.trim(),
        notes: field("notesField").value.trim()
      };
      const index = bets.findIndex((bet) => bet.id === item.id);
      if (index >= 0) bets[index] = item;
      else bets.unshift(item);
      persist();
      render();
      closeManual();
      toast(index >= 0 ? "Bet updated" : "Bet added");
    });
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeManual();
    });
  }

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