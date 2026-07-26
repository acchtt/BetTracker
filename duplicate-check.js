(() => {
  if (globalThis.__edgeLogDuplicateCheck || typeof bets === "undefined") return;
  globalThis.__edgeLogDuplicateCheck = true;

  const style = document.createElement("style");
  style.textContent = `
    .bet-meta-chip--duplicate {
      border-color: color-mix(in srgb, var(--amber) 34%, var(--line));
      background: color-mix(in srgb, var(--amber) 12%, var(--panel));
      color: var(--amber);
    }
    .duplicate-filter-field { min-width: 154px; }
    @media (max-width: 760px) {
      .duplicate-filter-field { width: 100%; min-width: 0; }
    }
  `;
  document.head.append(style);

  function clean(value) {
    return normalize(String(value || ""))
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function dateKey(value) {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return clean(value).slice(0, 10);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  }

  function fingerprint(bet = {}) {
    return `${clean(bet.event)}|${clean(bet.bet)}|${dateKey(bet.eventDate)}`;
  }

  function looseFingerprint(bet = {}) {
    return `${clean(bet.event)}|${clean(bet.bet)}`;
  }

  function duplicateMatches(candidate = {}, excludeId = "") {
    const exact = fingerprint(candidate);
    const loose = looseFingerprint(candidate);
    const candidateOdds = Number(candidate.odds || 0);
    return bets.filter((bet) => {
      if (excludeId && bet.id === excludeId) return false;
      if (!clean(candidate.event) || !clean(candidate.bet)) return false;
      if (fingerprint(bet) === exact) return true;
      if (looseFingerprint(bet) !== loose) return false;
      const existingOdds = Number(bet.odds || 0);
      return !candidateOdds || !existingOdds || Math.abs(existingOdds - candidateOdds) <= 0.02;
    });
  }

  function duplicateCountFor(bet) {
    return duplicateMatches(bet, bet.id).length;
  }

  function confirmDuplicate(candidate, excludeId = "") {
    const matches = duplicateMatches(candidate, excludeId);
    if (!matches.length) return true;
    const first = matches[0];
    const details = [
      `${matches.length} similar entr${matches.length === 1 ? "y" : "ies"} already exist${matches.length === 1 ? "s" : ""}.`,
      `Existing: ${first.event} — ${first.bet}`,
      `Odds ${Number(first.odds || 0).toFixed(3)} · ${statusLabel(first.status)}`
    ];
    if (matches.length > 1) details.push(`Plus ${matches.length - 1} additional match${matches.length - 1 === 1 ? "" : "es"}.`);
    return window.confirm(`Possible duplicate bet\n\n${details.join("\n")}\n\nSave another entry anyway?`);
  }

  globalThis.EdgeLogDuplicates = {
    fingerprint,
    duplicateMatches,
    duplicateCountFor,
    confirmDuplicate
  };

  if (typeof betRow === "function") {
    const originalBetRow = betRow;
    betRow = function duplicateAwareBetRow(bet, index, actions = true) {
      let html = originalBetRow(bet, index, actions);
      const count = duplicateCountFor(bet);
      if (!count) return html.replace("<tr", '<tr data-duplicate="false"');
      const chip = `<span class="bet-meta-chip bet-meta-chip--duplicate" title="${count + 1} matching entries">Duplicate ×${count + 1}</span>`;
      if (html.includes('<div class="bet-meta">')) {
        html = html.replace('<div class="bet-meta">', `<div class="bet-meta">${chip}`);
      } else {
        const marker = `<td><div class="bet-copy"><strong>${escapeHtml(bet.bet)}</strong>`;
        if (html.includes(marker)) html = html.replace(marker, `${marker}<div class="bet-meta">${chip}</div>`);
      }
      return html.replace("<tr", '<tr data-duplicate="true"');
    };
  }

  function ensureFilter() {
    const filters = document.querySelector(".filters");
    if (!filters || document.querySelector("#duplicateFilter")) return;
    const reset = document.querySelector("#resetFilters");
    const label = document.createElement("label");
    label.className = "filter-field duplicate-filter-field";
    label.innerHTML = `<select id="duplicateFilter" aria-label="Filter duplicate bets">
      <option value="all">All entries</option>
      <option value="duplicates">Possible duplicates</option>
      <option value="unique">Unique entries</option>
    </select>`;
    filters.insertBefore(label, reset || null);
    label.querySelector("select").addEventListener("change", renderTables);
    reset?.addEventListener("click", () => {
      const select = document.querySelector("#duplicateFilter");
      if (select) select.value = "all";
      renderTables();
    });
  }

  function applyFilter() {
    const body = document.querySelector("#betsTableBody");
    if (!body) return;
    const mode = document.querySelector("#duplicateFilter")?.value || "all";
    let visible = 0;
    [...body.querySelectorAll("tr")].forEach((row) => {
      const duplicate = row.dataset.duplicate === "true";
      const show = mode === "all" || (mode === "duplicates" && duplicate) || (mode === "unique" && !duplicate);
      row.hidden = !show;
      if (show) {
        visible += 1;
        const first = row.querySelector("td");
        if (first) first.textContent = String(visible);
      }
    });
    const empty = document.querySelector("#emptyState");
    if (empty) empty.hidden = visible > 0;
  }

  if (typeof renderTables === "function") {
    const previousRenderTables = renderTables;
    renderTables = function duplicateAwareTables(...args) {
      const result = previousRenderTables(...args);
      ensureFilter();
      applyFilter();
      return result;
    };
  }

  document.addEventListener("submit", (event) => {
    if (event.target?.id !== "manualForm") return;
    const get = (id) => event.target.querySelector(`#${id}`);
    const candidate = {
      event: get("eventField")?.value.trim(),
      bet: get("betField")?.value.trim(),
      odds: Number(get("oddsField")?.value || 0),
      eventDate: get("dateField")?.value || ""
    };
    const excludeId = get("editingId")?.value || "";
    if (confirmDuplicate(candidate, excludeId)) return;
    event.preventDefault();
    event.stopImmediatePropagation();
  }, true);

  document.addEventListener("click", (event) => {
    const button = event.target.closest("#addDetectedBtn");
    if (!button || !detectedBet) return;
    if (confirmDuplicate(detectedBet)) return;
    event.preventDefault();
    event.stopImmediatePropagation();
  }, true);

  ensureFilter();
  if (typeof renderTables === "function") renderTables();
})();