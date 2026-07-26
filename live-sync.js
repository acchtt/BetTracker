(() => {
  if (globalThis.__edgeLogLiveSync || typeof bets === "undefined") return;
  globalThis.__edgeLogLiveSync = true;

  const FEED_URL = "ledger.json";
  const VERSION_KEY = "edgelog-live-ledger-version";
  const HIDDEN_SYNC_KEY = "edgelog-hidden-sync-ids";
  const POLL_VISIBLE_MS = 10000;
  const POLL_HIDDEN_MS = 30000;
  const syncedFields = [
    "event", "league", "bet", "odds", "stakeVnd", "payoutVnd",
    "status", "result", "eventDate", "notes", "settledAt"
  ];

  let timer = 0;
  let syncing = false;
  let stopped = false;
  let statusElement = null;

  const style = document.createElement("style");
  style.textContent = `
    .live-sync-status {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      min-height: 34px;
      padding: 7px 10px;
      border: 1px solid var(--line);
      border-radius: 10px;
      background: var(--panel);
      color: var(--muted);
      font-size: .75rem;
      font-weight: 750;
      white-space: nowrap;
    }
    .live-sync-status::before {
      content: "";
      width: 7px;
      height: 7px;
      border-radius: 999px;
      background: var(--green);
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--green) 14%, transparent);
    }
    .live-sync-status[data-state="syncing"]::before {
      background: var(--blue);
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--blue) 14%, transparent);
      animation: edgelog-sync-pulse 1s ease-in-out infinite;
    }
    .live-sync-status[data-state="offline"]::before,
    .live-sync-status[data-state="error"]::before {
      background: var(--amber);
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--amber) 14%, transparent);
    }
    @keyframes edgelog-sync-pulse { 50% { opacity: .35; transform: scale(.75); } }
    @media (max-width: 720px) { .live-sync-status { display: none; } }
  `;
  document.head.append(style);

  function ensureStatus() {
    if (statusElement?.isConnected) return statusElement;
    const actions = document.querySelector(".topbar-actions");
    if (!actions) return null;
    statusElement = document.createElement("button");
    statusElement.type = "button";
    statusElement.className = "live-sync-status";
    statusElement.dataset.state = "live";
    statusElement.textContent = "Live sync";
    statusElement.title = "EdgeLog checks for new ChatGPT ledger entries automatically. Click to check now.";
    statusElement.addEventListener("click", () => syncNow({ manual: true }));
    actions.prepend(statusElement);
    return statusElement;
  }

  function setStatus(state, text) {
    const element = ensureStatus();
    if (!element) return;
    element.dataset.state = state;
    element.textContent = text;
  }

  function fingerprint(bet) {
    return normalize(`${bet?.event || ""}|${bet?.bet || ""}`).toLowerCase();
  }

  function timestamp(value) {
    const parsed = Date.parse(value || "");
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function hiddenSyncIds() {
    try {
      const parsed = JSON.parse(localStorage.getItem(HIDDEN_SYNC_KEY));
      return new Set(Array.isArray(parsed) ? parsed : []);
    } catch {
      return new Set();
    }
  }

  function comparableSnapshot(bet) {
    return JSON.stringify(syncedFields.map((field) => bet?.[field] ?? null));
  }

  function remoteRecord(remote) {
    const record = {};
    syncedFields.forEach((field) => {
      if (Object.prototype.hasOwnProperty.call(remote, field)) record[field] = remote[field];
    });
    return record;
  }

  function mergeFeed(feed) {
    const remoteBets = Array.isArray(feed?.bets) ? feed.bets : [];
    const hiddenIds = hiddenSyncIds();
    const additions = [];
    let updated = 0;
    let metadataAttached = 0;

    remoteBets.forEach((remote) => {
      if (!remote?.syncId || !remote.event || !remote.bet || hiddenIds.has(remote.syncId)) return;
      const remoteUpdatedAt = feed.version || remote.updatedAt || new Date(0).toISOString();
      let existing = bets.find((bet) => bet._syncId === remote.syncId);

      if (!existing) {
        existing = bets.find((bet) => !bet._syncId && fingerprint(bet) === fingerprint(remote));
        if (existing) {
          existing._syncId = remote.syncId;
          existing._syncUpdatedAt = remoteUpdatedAt;
          metadataAttached += 1;
          return;
        }
      }

      if (!existing) {
        additions.push({
          ...remoteRecord(remote),
          id: uid(),
          _syncId: remote.syncId,
          _syncUpdatedAt: remoteUpdatedAt
        });
        return;
      }

      const previousSyncTime = timestamp(existing._syncUpdatedAt);
      const localEditTime = timestamp(existing._localEditedAt);
      const remoteEditTime = timestamp(remoteUpdatedAt);
      if (localEditTime && localEditTime > previousSyncTime) return;
      if (remoteEditTime && remoteEditTime <= previousSyncTime) return;

      const before = comparableSnapshot(existing);
      const preserved = {
        id: existing.id,
        _localEditedAt: existing._localEditedAt
      };
      Object.assign(existing, remoteRecord(remote), preserved, {
        _syncId: remote.syncId,
        _syncUpdatedAt: remoteUpdatedAt
      });
      if (comparableSnapshot(existing) !== before) updated += 1;
    });

    if (additions.length) bets = [...additions, ...bets];
    return { added: additions.length, updated, metadataAttached };
  }

  function scheduleNext() {
    clearTimeout(timer);
    if (stopped) return;
    timer = setTimeout(() => syncNow(), document.hidden ? POLL_HIDDEN_MS : POLL_VISIBLE_MS);
  }

  async function syncNow(options = {}) {
    if (syncing || stopped) return;
    if (!navigator.onLine) {
      setStatus("offline", "Offline");
      scheduleNext();
      return;
    }

    syncing = true;
    setStatus("syncing", "Syncing…");
    try {
      const separator = FEED_URL.includes("?") ? "&" : "?";
      const response = await fetch(`${FEED_URL}${separator}_=${Date.now()}`, {
        cache: "no-store",
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error(`Ledger request failed: ${response.status}`);
      const feed = await response.json();
      if (!feed?.version || !Array.isArray(feed.bets)) throw new Error("Invalid ledger feed");

      const currentVersion = localStorage.getItem(VERSION_KEY);
      if (feed.version !== currentVersion) {
        const changes = mergeFeed(feed);
        if (changes.added || changes.updated || changes.metadataAttached) {
          persist();
          render();
        }
        localStorage.setItem(VERSION_KEY, feed.version);

        if (changes.added || changes.updated) {
          const parts = [];
          if (changes.added) parts.push(`${changes.added} new bet${changes.added === 1 ? "" : "s"}`);
          if (changes.updated) parts.push(`${changes.updated} updated`);
          toast(`${parts.join(" · ")} synced from ChatGPT`);
        } else if (options.manual) {
          toast("EdgeLog is up to date");
        }
      } else if (options.manual) {
        toast("EdgeLog is up to date");
      }
      setStatus("live", "Live sync");
    } catch (error) {
      console.warn("EdgeLog live sync:", error);
      setStatus("error", "Sync retrying");
      if (options.manual) toast("Could not check for new entries yet");
    } finally {
      syncing = false;
      scheduleNext();
    }
  }

  addEventListener("online", () => syncNow());
  addEventListener("offline", () => setStatus("offline", "Offline"));
  addEventListener("focus", () => syncNow());
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) syncNow();
    else scheduleNext();
  });
  addEventListener("storage", (event) => {
    if (event.key !== STORAGE_KEY || !event.newValue) return;
    try {
      const incoming = JSON.parse(event.newValue);
      if (!Array.isArray(incoming)) return;
      bets = incoming;
      render();
    } catch {
      // Ignore malformed data from another tab.
    }
  });
  addEventListener("beforeunload", () => {
    stopped = true;
    clearTimeout(timer);
  });

  ensureStatus();
  syncNow();
})();