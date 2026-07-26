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

(() => {
  if (globalThis.__edgeLogBetsNavigation || typeof bets === "undefined") return;
  globalThis.__edgeLogBetsNavigation = true;

  const tbody = document.querySelector("#betsTableBody");
  if (!tbody) return;

  const PREFS_KEY = "edgelog-bets-navigation-v1";
  const DEFAULTS = { sort: "added-desc", pageSize: 10 };
  let currentPage = 1;
  let lastFilterSignature = "";

  function loadPreferences() {
    try {
      const parsed = JSON.parse(localStorage.getItem(PREFS_KEY));
      return {
        sort: typeof parsed?.sort === "string" ? parsed.sort : DEFAULTS.sort,
        pageSize: [10, 25, 50, "all"].includes(parsed?.pageSize) ? parsed.pageSize : DEFAULTS.pageSize
      };
    } catch {
      return { ...DEFAULTS };
    }
  }

  let preferences = loadPreferences();
  const savePreferences = () => localStorage.setItem(PREFS_KEY, JSON.stringify(preferences));

  const style = document.createElement("style");
  style.textContent = `
    .bets-browser-bar,.bets-pagination{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:12px 2px}
    .bets-browser-bar{margin-top:4px;border-top:1px solid var(--line)}
    .bets-browser-summary{color:var(--muted);font-size:.76rem;font-weight:720;line-height:1.4}
    .bets-browser-controls{display:flex;align-items:center;flex-wrap:wrap;gap:8px}
    .bets-browser-control{display:inline-flex;align-items:center;gap:7px;color:var(--muted);font-size:.72rem;font-weight:760}
    .bets-browser-control select{min-height:34px;padding:7px 31px 7px 10px;border:1px solid var(--line);border-radius:9px;background:var(--panel);color:var(--text);font-size:.74rem;font-weight:750}
    .bets-pagination{padding-top:14px;border-top:1px solid var(--line)}
    .bets-pagination__buttons{display:inline-flex;align-items:center;gap:6px}
    .bets-pagination button{min-width:34px;min-height:32px;padding:6px 9px;border:1px solid var(--line);border-radius:9px;background:var(--panel);color:var(--muted);font-size:.72rem;font-weight:800}
    .bets-pagination button:hover:not(:disabled){color:var(--text);transform:translateY(-1px)}
    .bets-pagination button:disabled{cursor:default;opacity:.42}
    .bets-pagination__page{min-width:92px;color:var(--muted);font-size:.74rem;font-weight:760;text-align:center}
    @media(max-width:760px){.bets-browser-bar,.bets-pagination{align-items:stretch;flex-direction:column}.bets-browser-controls{display:grid;grid-template-columns:1fr}.bets-browser-control{display:grid;grid-template-columns:70px minmax(0,1fr)}.bets-browser-control select{width:100%}.bets-pagination__buttons{display:grid;grid-template-columns:repeat(4,minmax(0,1fr))}.bets-pagination button{width:100%}.bets-pagination__page{order:-1;width:100%}}
  `;
  document.head.append(style);

  function ensureControls() {
    let bar = document.querySelector("#betsBrowserBar");
    if (bar) return bar;
    const tableWrap = tbody.closest(".table-wrap");
    if (!tableWrap) return null;

    bar = document.createElement("div");
    bar.id = "betsBrowserBar";
    bar.className = "bets-browser-bar";
    bar.innerHTML = `<div id="betsBrowserSummary" class="bets-browser-summary">Showing tracked bets</div><div class="bets-browser-controls">
      <label class="bets-browser-control">Sort<select id="betsSort" aria-label="Sort bet history"><option value="added-desc">Recently added</option><option value="added-asc">Oldest added</option><option value="event-desc">Latest event date</option><option value="event-asc">Earliest event date</option><option value="stake-desc">Highest stake</option><option value="stake-asc">Lowest stake</option><option value="odds-desc">Highest odds</option><option value="odds-asc">Lowest odds</option><option value="pl-desc">Best P/L</option><option value="pl-asc">Worst P/L</option></select></label>
      <label class="bets-browser-control">Rows<select id="betsPageSize" aria-label="Rows per page"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="all">All</option></select></label></div>`;
    tableWrap.parentNode.insertBefore(bar, tableWrap);

    const pagination = document.createElement("div");
    pagination.id = "betsPagination";
    pagination.className = "bets-pagination";
    pagination.innerHTML = `<div id="betsPaginationPage" class="bets-pagination__page">Page 1 of 1</div><div class="bets-pagination__buttons"><button type="button" data-page-action="first" title="First page">«</button><button type="button" data-page-action="previous" title="Previous page">‹</button><button type="button" data-page-action="next" title="Next page">›</button><button type="button" data-page-action="last" title="Last page">»</button></div>`;
    tableWrap.insertAdjacentElement("afterend", pagination);

    const sort = bar.querySelector("#betsSort");
    const pageSize = bar.querySelector("#betsPageSize");
    sort.value = [...sort.options].some((option) => option.value === preferences.sort) ? preferences.sort : DEFAULTS.sort;
    pageSize.value = String(preferences.pageSize);
    sort.addEventListener("change", () => { preferences.sort = sort.value; currentPage = 1; savePreferences(); applyNavigation(); });
    pageSize.addEventListener("change", () => { preferences.pageSize = pageSize.value === "all" ? "all" : Number(pageSize.value); currentPage = 1; savePreferences(); applyNavigation(); });
    pagination.addEventListener("click", (event) => {
      const button = event.target.closest("[data-page-action]");
      if (!button || button.disabled) return;
      const totalPages = Number(pagination.dataset.totalPages || 1);
      if (button.dataset.pageAction === "first") currentPage = 1;
      if (button.dataset.pageAction === "previous") currentPage = Math.max(1, currentPage - 1);
      if (button.dataset.pageAction === "next") currentPage = Math.min(totalPages, currentPage + 1);
      if (button.dataset.pageAction === "last") currentPage = totalPages;
      applyNavigation({ preserveFilterPage: true });
      tableWrap.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return bar;
  }

  const filterSignature = () => [...document.querySelectorAll(".filters input,.filters select")].map((element) => `${element.id}:${element.value}`).join("|");

  function reviewMatches(row) {
    const filter = document.querySelector("#reviewFilter")?.value || "all";
    const reviewed = row.dataset.reviewed === "true";
    const grade = row.dataset.reviewGrade || "unreviewed";
    const hasMistake = row.dataset.hasMistake === "true";
    return filter === "all" || (filter === "unreviewed" && !reviewed) || (filter === "reviewed" && reviewed) || (["good", "mixed", "poor"].includes(filter) && grade === filter) || (filter === "mistake" && hasMistake);
  }

  function duplicateFilterMatches(row) {
    const filter = document.querySelector("#duplicateFilter")?.value || "all";
    const duplicate = row.dataset.duplicate === "true";
    return filter === "all" || (filter === "duplicates" && duplicate) || (filter === "unique" && !duplicate);
  }

  function decorateRows(rows) {
    rows.forEach((row) => {
      const id = row.querySelector("[data-id]")?.dataset.id;
      const bet = bets.find((item) => item.id === id);
      if (!bet) return;
      row.dataset.sortAdded = String(Math.max(0, bets.findIndex((item) => item.id === bet.id)));
      row.dataset.sortEventDate = String(Date.parse(bet.eventDate || "") || 0);
      row.dataset.sortOdds = String(Number(bet.odds || 0));
      row.dataset.sortStake = String(Number(bet.stakeVnd || 0));
      row.dataset.sortPl = String(Number(profitLoss(bet) || 0));
    });
  }

  const numeric = (row, key) => Number(row.dataset[key] || 0);
  function missingLast(a, b, direction) {
    if (!a && !b) return 0;
    if (!a) return 1;
    if (!b) return -1;
    return direction * (a - b);
  }

  function comparator(mode) {
    return (a, b) => {
      let result = 0;
      if (mode === "added-desc") result = numeric(a, "sortAdded") - numeric(b, "sortAdded");
      if (mode === "added-asc") result = numeric(b, "sortAdded") - numeric(a, "sortAdded");
      if (mode === "event-desc") result = missingLast(numeric(a, "sortEventDate"), numeric(b, "sortEventDate"), -1);
      if (mode === "event-asc") result = missingLast(numeric(a, "sortEventDate"), numeric(b, "sortEventDate"), 1);
      if (mode === "stake-desc") result = numeric(b, "sortStake") - numeric(a, "sortStake");
      if (mode === "stake-asc") result = numeric(a, "sortStake") - numeric(b, "sortStake");
      if (mode === "odds-desc") result = numeric(b, "sortOdds") - numeric(a, "sortOdds");
      if (mode === "odds-asc") result = numeric(a, "sortOdds") - numeric(b, "sortOdds");
      if (mode === "pl-desc") result = numeric(b, "sortPl") - numeric(a, "sortPl");
      if (mode === "pl-asc") result = numeric(a, "sortPl") - numeric(b, "sortPl");
      return result || numeric(a, "sortAdded") - numeric(b, "sortAdded");
    };
  }

  function applyNavigation(options = {}) {
    if (!ensureControls()) return;
    const signature = filterSignature();
    if (!options.preserveFilterPage && signature !== lastFilterSignature) currentPage = 1;
    lastFilterSignature = signature;

    const rows = [...tbody.querySelectorAll("tr")];
    decorateRows(rows);
    const eligible = [];
    const excluded = [];
    rows.forEach((row) => {
      const include = reviewMatches(row) && duplicateFilterMatches(row);
      row.hidden = !include;
      (include ? eligible : excluded).push(row);
    });
    eligible.sort(comparator(preferences.sort));
    eligible.forEach((row) => tbody.append(row));
    excluded.forEach((row) => tbody.append(row));

    const pageSize = preferences.pageSize === "all" ? Math.max(eligible.length, 1) : Number(preferences.pageSize || 10);
    const totalPages = Math.max(1, Math.ceil(eligible.length / pageSize));
    currentPage = Math.min(Math.max(1, currentPage), totalPages);
    const start = eligible.length ? (currentPage - 1) * pageSize : 0;
    const end = Math.min(eligible.length, start + pageSize);
    eligible.forEach((row, index) => {
      row.hidden = !(index >= start && index < end);
      const firstCell = row.querySelector("td");
      if (firstCell) firstCell.textContent = String(index + 1);
    });

    const summary = document.querySelector("#betsBrowserSummary");
    if (summary) summary.textContent = eligible.length ? `Showing ${start + 1}–${end} of ${eligible.length} matching bet${eligible.length === 1 ? "" : "s"} · ${bets.length} total` : `No matching bets · ${bets.length} total`;
    const pagination = document.querySelector("#betsPagination");
    if (pagination) {
      pagination.dataset.totalPages = String(totalPages);
      const label = pagination.querySelector("#betsPaginationPage");
      if (label) label.textContent = `Page ${currentPage} of ${totalPages}`;
      pagination.querySelectorAll("[data-page-action]").forEach((button) => {
        const firstSide = ["first", "previous"].includes(button.dataset.pageAction);
        button.disabled = eligible.length === 0 || (firstSide ? currentPage <= 1 : currentPage >= totalPages);
      });
      pagination.hidden = preferences.pageSize === "all" || eligible.length <= pageSize;
    }
    const empty = document.querySelector("#emptyState");
    if (empty) empty.hidden = eligible.length > 0;
  }

  const previousRenderTables = typeof renderTables === "function" ? renderTables : () => {};
  renderTables = function navigatedRenderTables(...args) {
    const result = previousRenderTables(...args);
    applyNavigation();
    return result;
  };

  addEventListener("storage", (event) => {
    if (event.key !== PREFS_KEY) return;
    preferences = loadPreferences();
    const sort = document.querySelector("#betsSort");
    const size = document.querySelector("#betsPageSize");
    if (sort) sort.value = preferences.sort;
    if (size) size.value = String(preferences.pageSize);
    currentPage = 1;
    applyNavigation();
  });

  ensureControls();
  applyNavigation();
})();