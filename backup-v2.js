(() => {
  if (globalThis.__slipTraceBackupV2 || globalThis.__edgeLogBackupV2 || typeof bets === "undefined") return;
  globalThis.__slipTraceBackupV2 = true;
  globalThis.__edgeLogBackupV2 = true;

  const BACKUP_SCHEMA_VERSION = 2;
  // Legacy storage keys are intentionally retained to preserve existing browser data.
  const TRANSACTION_KEY = "edgelog-bankroll-transactions-v1";
  const HIDDEN_SYNC_KEY = "edgelog-hidden-sync-ids";
  const SAFETY_BACKUP_KEY = "edgelog-pre-import-backup-v1";
  const LIVE_VERSION_KEY = "edgelog-live-ledger-version";
  let undoTimer = 0;

  const style = document.createElement("style");
  style.textContent = `
    .backup-scope {
      margin: 14px 0 0;
      padding: 13px 14px;
      border: 1px solid var(--line);
      border-radius: 13px;
      background: var(--panel-soft);
      color: var(--muted);
      font-size: .76rem;
      line-height: 1.55;
    }
    .backup-scope strong { color: var(--text); }
    .toast.backup-undo-toast {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
    }
    .toast.backup-undo-toast button {
      padding: 6px 10px;
      border: 1px solid rgba(255,255,255,.24);
      border-radius: 8px;
      background: rgba(255,255,255,.12);
      color: #fff;
      font-weight: 800;
      white-space: nowrap;
    }
  `;
  document.head.append(style);

  function safeArray(key) {
    try {
      const parsed = JSON.parse(localStorage.getItem(key));
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function normalizedTransactions(value) {
    if (!Array.isArray(value)) return [];
    return value.map((item) => ({
      id: item?.id || uid(),
      type: item?.type === "withdrawal" ? "withdrawal" : "deposit",
      amountVnd: Math.max(0, Number(item?.amountVnd || 0)),
      date: String(item?.date || ""),
      note: String(item?.note || "").slice(0, 200)
    })).filter((item) => item.amountVnd > 0);
  }

  function normalizedHiddenIds(value) {
    return [...new Set((Array.isArray(value) ? value : []).map((item) => String(item || "").trim()).filter(Boolean))];
  }

  function dispatchBackupRestored(detail) {
    dispatchEvent(new CustomEvent("sliptrace:backup-restored", { detail }));
    // Retained for compatibility with modules from earlier EdgeLog builds.
    dispatchEvent(new CustomEvent("edgelog:backup-restored", { detail }));
  }

  function currentSnapshot() {
    return {
      app: "SlipTrace",
      schemaVersion: BACKUP_SCHEMA_VERSION,
      exportedAt: new Date().toISOString(),
      settings: { ...settings },
      bets: bets.map((bet) => ({ ...bet, tags: Array.isArray(bet.tags) ? [...bet.tags] : bet.tags })),
      bankrollTransactions: normalizedTransactions(safeArray(TRANSACTION_KEY)),
      hiddenSyncIds: normalizedHiddenIds(safeArray(HIDDEN_SYNC_KEY)),
      theme: typeof currentTheme === "function" ? currentTheme() : (localStorage.getItem(THEME_KEY) || "light")
    };
  }

  function datedFilename() {
    const date = new Date();
    const stamp = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    return `sliptrace-full-backup-${stamp}.json`;
  }

  function exportFullBackup() {
    download(datedFilename(), JSON.stringify(currentSnapshot(), null, 2), "application/json");
    toast("Full backup exported");
  }

  function backupRoot(data) {
    if (Array.isArray(data)) return { bets: data, legacyArray: true };
    if (!data || typeof data !== "object") throw new Error("Invalid backup");
    return data.data && typeof data.data === "object" ? { ...data, ...data.data } : data;
  }

  function prepareImport(data) {
    const root = backupRoot(data);
    const importedBets = root.bets;
    if (!Array.isArray(importedBets)) throw new Error("Backup does not contain a bets array");

    const nextBets = importedBets
      .filter((bet) => bet && typeof bet === "object")
      .map((bet) => ({
        ...bet,
        id: bet.id || uid(),
        tags: Array.isArray(bet.tags)
          ? [...new Set(bet.tags.map((tag) => normalize(tag).trim()).filter(Boolean))]
          : bet.tags
      }));

    const hasTransactions = Object.prototype.hasOwnProperty.call(root, "bankrollTransactions")
      || Object.prototype.hasOwnProperty.call(root, "transactions");
    const hasHiddenIds = Object.prototype.hasOwnProperty.call(root, "hiddenSyncIds");
    const hasTheme = Object.prototype.hasOwnProperty.call(root, "theme");
    const rawSettings = root.settings && typeof root.settings === "object" ? root.settings : {};
    const nextSettings = { ...settings, ...rawSettings };
    if (Number(root.unitVnd) > 0) nextSettings.unitVnd = Number(root.unitVnd);
    nextSettings.unitVnd = Math.max(1, Number(nextSettings.unitVnd) || 500000);
    nextSettings.startingBankroll = Math.max(0, Number(nextSettings.startingBankroll) || 0);

    return {
      bets: nextBets,
      settings: nextSettings,
      transactions: hasTransactions ? normalizedTransactions(root.bankrollTransactions ?? root.transactions) : null,
      hiddenSyncIds: hasHiddenIds ? normalizedHiddenIds(root.hiddenSyncIds) : null,
      theme: hasTheme && root.theme === "dark" ? "dark" : hasTheme ? "light" : null,
      schemaVersion: Number(root.schemaVersion || 1)
    };
  }

  function applySnapshot(snapshot, options = {}) {
    bets = snapshot.bets.map((bet) => ({ ...bet, id: bet.id || uid() }));
    settings = { ...settings, ...snapshot.settings };
    persist();

    if (snapshot.transactions !== null && snapshot.transactions !== undefined) {
      localStorage.setItem(TRANSACTION_KEY, JSON.stringify(normalizedTransactions(snapshot.transactions)));
    }
    if (snapshot.hiddenSyncIds !== null && snapshot.hiddenSyncIds !== undefined) {
      localStorage.setItem(HIDDEN_SYNC_KEY, JSON.stringify(normalizedHiddenIds(snapshot.hiddenSyncIds)));
    }
    if (snapshot.theme) applyTheme(snapshot.theme);

    localStorage.removeItem(LIVE_VERSION_KEY);
    render();
    dispatchBackupRestored({
      transactions: snapshot.transactions,
      source: options.source || "import"
    });
  }

  function safetySnapshot() {
    try {
      localStorage.setItem(SAFETY_BACKUP_KEY, JSON.stringify(currentSnapshot()));
    } catch (error) {
      console.warn("SlipTrace safety backup could not be saved:", error);
    }
  }

  function restoreSafetyBackup() {
    try {
      const saved = JSON.parse(localStorage.getItem(SAFETY_BACKUP_KEY));
      if (!saved) throw new Error("No safety backup");
      const prepared = prepareImport(saved);
      applySnapshot(prepared, { source: "undo" });
      localStorage.removeItem(SAFETY_BACKUP_KEY);
      document.querySelector("#toast")?.classList.remove("backup-undo-toast");
      clearTimeout(undoTimer);
      toast("Previous tracker data restored");
    } catch {
      toast("Previous tracker data is no longer available");
    }
  }

  function showUndo(message) {
    const element = document.querySelector("#toast");
    if (!element) return;
    clearTimeout(toast.timer);
    clearTimeout(undoTimer);
    element.classList.add("show", "backup-undo-toast");
    element.innerHTML = `<span>${escapeHtml(message)}</span><button type="button" data-undo-backup-import>Undo</button>`;
    undoTimer = setTimeout(() => {
      element.classList.remove("show", "backup-undo-toast");
      localStorage.removeItem(SAFETY_BACKUP_KEY);
    }, 12000);
  }

  async function importBackup(input) {
    const file = input.files?.[0];
    if (!file) return;
    try {
      const prepared = prepareImport(JSON.parse(await file.text()));
      const cashCount = prepared.transactions?.length ?? safeArray(TRANSACTION_KEY).length;
      const message = `Import ${prepared.bets.length} bet${prepared.bets.length === 1 ? "" : "s"}${prepared.transactions !== null ? ` and ${cashCount} cash adjustment${cashCount === 1 ? "" : "s"}` : ""}? This replaces the included tracker data.`;
      if (!confirm(message)) return;
      safetySnapshot();
      applySnapshot(prepared);
      showUndo(`Backup imported · ${prepared.bets.length} bets${prepared.transactions !== null ? ` · ${cashCount} cash entries` : ""}`);
    } catch (error) {
      console.warn("SlipTrace backup import:", error);
      alert("This file is not a valid SlipTrace or legacy EdgeLog JSON backup.");
    } finally {
      input.value = "";
    }
  }

  function resetAllTrackerData() {
    if (!confirm("Reset bets, bankroll cash adjustments, and hidden synced entries? Settings such as unit size are kept.")) return;
    safetySnapshot();
    bets = DEFAULT_BETS.map((bet) => ({ ...bet, id: uid() }));
    localStorage.removeItem(TRANSACTION_KEY);
    localStorage.removeItem(HIDDEN_SYNC_KEY);
    localStorage.removeItem(LIVE_VERSION_KEY);
    persist();
    render();
    dispatchBackupRestored({ transactions: [], source: "reset" });
    showUndo("Tracker data reset");
  }

  function decorateSettings() {
    const exportButton = document.querySelector("[data-export-json]");
    if (exportButton) exportButton.textContent = "Export full JSON backup";
    const importInput = document.querySelector("#importJsonInput");
    const importLabel = importInput?.closest("label");
    if (importLabel) {
      [...importLabel.childNodes].forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) node.textContent = "Import full JSON ";
      });
    }
    const panel = exportButton?.closest(".panel");
    if (panel && !panel.querySelector(".backup-scope")) {
      const transactions = safeArray(TRANSACTION_KEY).length;
      const scope = document.createElement("div");
      scope.className = "backup-scope";
      scope.innerHTML = `<strong>Full backup includes:</strong> bets and metadata, unit and bankroll settings, ${transactions} cash-ledger entr${transactions === 1 ? "y" : "ies"}, theme, and locally hidden synced bets. Legacy EdgeLog JSON backups remain supported.`;
      panel.append(scope);
    }
  }

  document.addEventListener("click", (event) => {
    const exportButton = event.target.closest("[data-export-json]");
    if (exportButton) {
      event.preventDefault();
      event.stopImmediatePropagation();
      exportFullBackup();
      return;
    }

    const resetButton = event.target.closest("[data-reset-data]");
    if (resetButton) {
      event.preventDefault();
      event.stopImmediatePropagation();
      resetAllTrackerData();
      return;
    }

    if (event.target.closest("[data-undo-backup-import]")) {
      event.preventDefault();
      event.stopImmediatePropagation();
      restoreSafetyBackup();
    }
  }, true);

  document.addEventListener("change", (event) => {
    if (event.target?.id !== "importJsonInput") return;
    event.preventDefault();
    event.stopImmediatePropagation();
    importBackup(event.target);
  }, true);

  decorateSettings();
})();