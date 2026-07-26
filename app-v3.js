const STORAGE_KEY = "bet-tracker-v2";
const SETTINGS_KEY = "bet-tracker-settings-v2";
const LEGACY_SETTINGS_KEY = "bet-tracker-settings-v1";
const THEME_KEY = "edgelog-theme";
const MIGRATION_KEY = "edgelog-v3-migration";
const MIGRATION_VERSION = "2026-07-26-multipage";

const uid = () => globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const DEFAULT_BETS = [
  { id: uid(), event: "TT vs EDG — Game 1", league: "LPL", bet: "EDG +4.5 kills", odds: 2.007, stakeVnd: 500000, status: "loss", result: "TT won", eventDate: "", notes: "Pre-game entry after finalized draft — settled as loss" },
  { id: uid(), event: "NIP vs LNG — Game 2", league: "LPL", bet: "LNG +13.5 kills", odds: 2.199, stakeVnd: 250000, status: "win", result: "Win", eventDate: "", notes: "Live bet taken at 13:21 — settled as win" },
  { id: uid(), event: "NIP vs LNG — Game 1", league: "LPL", bet: "LNG +9.5 kills", odds: 1.94, stakeVnd: 500000, status: "loss", result: "Loss", eventDate: "2026-07-26T14:00", notes: "Settled as loss" },
  { id: uid(), event: "Weston Workers Bears vs Melbourne City FC", league: "Australia Cup", bet: "Under 1.75 (live at 0–1)", odds: 1.65, stakeVnd: 773000, status: "loss", result: "0–3", eventDate: "2026-07-26T11:00", notes: "Parsed from Vietnamese betslip" },
  { id: uid(), event: "LAFC vs Sporting Kansas City", league: "Major League Soccer", bet: "Under 4.25", odds: 2.09, stakeVnd: 500000, status: "half-win", result: "Half win", eventDate: "", notes: "Official tracked bet" },
  { id: uid(), event: "Tigres UANL vs Atletico San Luis", league: "Mexico Liga MX", bet: "Under 3.5", odds: 1.72, stakeVnd: 594000, status: "loss", result: "2–2", eventDate: "", notes: "Live entry at 47' with the score 1–1" }
];

function loadJson(key, fallback) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key));
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

const legacySettings = loadJson(LEGACY_SETTINGS_KEY, {});
let settings = {
  unitVnd: 500000,
  startingBankroll: 0,
  ...legacySettings,
  ...loadJson(SETTINGS_KEY, {})
};
let bets = loadJson(STORAGE_KEY, DEFAULT_BETS).map((bet) => ({ ...bet, id: bet.id || uid() }));
let detectedBet = null;

function sameBet(a, b) {
  return a.event === b.event && a.bet === b.bet && Number(a.odds) === Number(b.odds) && Number(a.stakeVnd) === Number(b.stakeVnd);
}

function migrateTrackedBets() {
  if (localStorage.getItem(MIGRATION_KEY) === MIGRATION_VERSION) return;
  let changed = false;
  DEFAULT_BETS.forEach((tracked) => {
    const existing = bets.find((bet) => sameBet(bet, tracked) || (bet.event === tracked.event && bet.bet === tracked.bet));
    if (existing) {
      if (tracked.event === "NIP vs LNG — Game 2" && existing.status !== "win") {
        Object.assign(existing, tracked, { id: existing.id });
        changed = true;
      }
      return;
    }
    bets.unshift({ ...tracked, id: uid() });
    changed = true;
  });
  if (changed) persist();
  localStorage.setItem(MIGRATION_KEY, MIGRATION_VERSION);
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bets));
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function normalize(value = "") {
  return String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/gi, "d").replace(/\u00a0/g, " ").trim();
}

function parseNumber(value = "") {
  const match = String(value).replace(/,/g, ".").match(/-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : 0;
}

function parseMoney(value = "", thousandsMode = true) {
  const amount = parseNumber(String(value).replace(/\s/g, ""));
  return Number.isFinite(amount) ? Math.round(amount * (thousandsMode ? 1000 : 1)) : 0;
}

function statusFrom(value = "") {
  const text = normalize(value).toLowerCase();
  if (/nua\s*thang|half\s*win/.test(text)) return "half-win";
  if (/nua\s*thua|half\s*loss/.test(text)) return "half-loss";
  if (/hoan\s*tien|hoa|void|push|refund/.test(text)) return "void";
  if (/dang\s*cho|cho\s*xu\s*ly|pending|open|chua\s*ket\s*thuc/.test(text)) return "pending";
  if (/thang|won|win/.test(text)) return "win";
  if (/thua|lost|loss/.test(text)) return "loss";
  return "pending";
}

function toLocalDate(value = "") {
  const match = value.match(/(\d{4})[\/-](\d{1,2})[\/-](\d{1,2})(?:\s+|T)(\d{1,2}):(\d{2})/);
  if (!match) return "";
  const [, y, m, d, h, min] = match;
  return `${y}-${m.padStart(2, "0")}-${d.padStart(2, "0")}T${h.padStart(2, "0")}:${min}`;
}

function lineEntries(text) {
  const lines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  return { lines, normalized: lines.map((line) => normalize(line).toLowerCase()) };
}

function valueFor(entries, labels) {
  const wanted = labels.map((label) => normalize(label).toLowerCase());
  for (let i = 0; i < entries.lines.length; i += 1) {
    const current = entries.normalized[i];
    for (const label of wanted) {
      if (current === label || current === `${label}:` || current.startsWith(`${label}:`)) {
        const colon = entries.lines[i].indexOf(":");
        const inline = colon >= 0 ? entries.lines[i].slice(colon + 1).trim() : "";
        return inline || entries.lines[i + 1] || "";
      }
    }
  }
  return "";
}

function detectSelection(entries) {
  const labeled = valueFor(entries, ["Cược", "Lựa chọn", "Kèo", "Bet", "Selection", "Market"]);
  if (labeled) return labeled;
  for (const line of entries.lines) {
    if (/^(tai|xiu|over|under|handicap|moneyline|ml|draw|team|tong|kill)/i.test(normalize(line).toLowerCase())) return line;
  }
  return "";
}

function parseBetslip(text, thousandsMode) {
  const entries = lineEntries(text);
  if (!entries.lines.length) return { bet: null, confidence: 0 };
  const event = valueFor(entries, ["Sự kiện", "Event", "Match"]);
  const league = valueFor(entries, ["Giải đấu", "League", "Competition"]);
  const selection = detectSelection(entries);
  const odds = parseNumber(valueFor(entries, ["Tỷ lệ cược", "Odds", "Price"]));
  const stakeVnd = parseMoney(valueFor(entries, ["Tiền cược", "Stake", "Wager"]), thousandsMode);
  const payoutVnd = parseMoney(valueFor(entries, ["Tiền trả về", "Return", "Payout", "To win"]), thousandsMode);
  const rawStatus = valueFor(entries, ["Trạng thái", "Status"]);
  const result = valueFor(entries, ["Kết quả", "Result", "Score"]);
  const rawDate = valueFor(entries, ["Ngày sự kiện", "Event date", "Date"]);
  const betType = valueFor(entries, ["Loại cược", "Bet type", "Market type"]);
  const bet = { id: uid(), event, league, bet: selection, odds, stakeVnd, payoutVnd, status: statusFrom(rawStatus), result, eventDate: toLocalDate(rawDate), notes: betType ? `Slip type: ${betType}` : "Auto-detected from pasted betslip" };
  const confidence = Math.min(100, (event ? 24 : 0) + (selection ? 20 : 0) + (odds > 1 ? 16 : 0) + (stakeVnd > 0 ? 16 : 0) + (rawStatus ? 10 : 0) + (league ? 5 : 0) + (bet.eventDate ? 5 : 0) + (result ? 4 : 0));
  return { bet, confidence };
}

function profitLoss(bet) {
  const stake = Number(bet.stakeVnd) || 0;
  const odds = Number(bet.odds) || 0;
  const payout = Number(bet.payoutVnd) || 0;
  if (["pending", "void"].includes(bet.status)) return 0;
  if (payout > 0 && ["win", "half-win"].includes(bet.status)) return payout - stake;
  if (bet.status === "win") return stake * Math.max(0, odds - 1);
  if (bet.status === "half-win") return stake * Math.max(0, odds - 1) / 2;
  if (bet.status === "half-loss") return -stake / 2;
  if (bet.status === "loss") return -stake;
  return 0;
}

function formatVnd(value, signed = false) {
  const sign = value < 0 ? "−" : value > 0 && signed ? "+" : "";
  return `${sign}${new Intl.NumberFormat("en-US").format(Math.round(Math.abs(value)))} VND`;
}

function formatUnits(value, signed = false) {
  const amount = settings.unitVnd ? value / settings.unitVnd : 0;
  const sign = amount < 0 ? "−" : amount > 0 && signed ? "+" : "";
  return `${sign}${Math.abs(amount).toFixed(3)}u`;
}

function formatOdds(value) {
  return Number(value || 0).toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
}

function formatDate(value) {
  if (!value) return "";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : new Intl.DateTimeFormat("en-GB", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(date);
}

function statusLabel(status) {
  return ({ pending: "Pending", win: "Win", "half-win": "Half win", loss: "Loss", "half-loss": "Half loss", void: "Void" })[status] || status;
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" })[char]);
}

function detectSport(bet) {
  const text = ` ${normalize(`${bet.league || ""} ${bet.event || ""} ${bet.bet || ""}`).toLowerCase()} `;
  const groups = [
    ["esports", "Esports", [" lpl ", " lec ", " lck ", " lcs ", "vcs", "league of legends", "cs2", "counter-strike", "valorant", "dota", "pubg", "nip vs lng", "tt vs edg"]],
    ["basketball", "Basketball", ["nba", "wnba", "basketball", "euroleague", "ncaab"]],
    ["baseball", "Baseball", ["mlb", "baseball", "npb", "kbo"]],
    ["hockey", "Hockey", ["nhl", "hockey", "khl"]],
    ["tennis", "Tennis", ["tennis", "atp", "wta", "challenger"]],
    ["american-football", "American Football", ["nfl", "american football", "college football"]],
    ["combat", "Combat Sports", ["ufc", "mma", "boxing", "bellator"]],
    ["cricket", "Cricket", ["cricket", "ipl", "bbl"]],
    ["motorsport", "Motorsport", ["formula 1", " f1 ", "motogp", "nascar"]],
    ["soccer", "Soccer", ["football", "soccer", "australia cup", "premier league", "epl", "champions league", "ucl", "liga mx", "major league soccer", " mls ", "la liga", "serie a", "bundesliga", "copa", "tigres", "lafc", "sporting kansas", " fc "]]
  ];
  const match = groups.find(([, , tokens]) => tokens.some((token) => text.includes(token)));
  return match ? { key: match[0], label: match[1] } : { key: "generic", label: "Other" };
}

function metrics() {
  const settledBets = bets.filter((bet) => bet.status !== "pending");
  const settledStake = settledBets.reduce((sum, bet) => sum + Number(bet.stakeVnd || 0), 0);
  const net = settledBets.reduce((sum, bet) => sum + profitLoss(bet), 0);
  const pending = bets.filter((bet) => bet.status === "pending").reduce((sum, bet) => sum + Number(bet.stakeVnd || 0), 0);
  const wins = settledBets.filter((bet) => ["win", "half-win"].includes(bet.status)).length;
  const avgOdds = bets.length ? bets.reduce((sum, bet) => sum + Number(bet.odds || 0), 0) / bets.length : 0;
  return {
    total: bets.length,
    settled: settledBets.length,
    pendingCount: bets.length - settledBets.length,
    settledStake,
    net,
    pending,
    roi: settledStake ? (net / settledStake) * 100 : 0,
    winRate: settledBets.length ? (wins / settledBets.length) * 100 : 0,
    avgOdds,
    currentBankroll: Number(settings.startingBankroll || 0) + net,
    availableBankroll: Number(settings.startingBankroll || 0) + net - pending
  };
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function setTone(id, value) {
  const element = document.getElementById(id);
  if (!element) return;
  element.classList.toggle("positive", value > 0);
  element.classList.toggle("negative", value < 0);
}

function renderSummary() {
  const m = metrics();
  setText("netUnits", formatUnits(m.net, true));
  setText("netVnd", formatVnd(m.net, true));
  setText("pendingUnits", formatUnits(m.pending));
  setText("pendingVnd", formatVnd(m.pending));
  setText("totalBetsCount", String(m.total));
  setText("betCountMeta", `${m.settled} settled · ${m.pendingCount} pending`);
  setText("unitSummaryValue", new Intl.NumberFormat("en-US").format(settings.unitVnd));
  setText("roiValue", `${m.roi >= 0 ? "+" : ""}${m.roi.toFixed(1)}%`);
  setText("winRateValue", `${m.winRate.toFixed(1)}%`);
  setText("averageOddsValue", m.avgOdds.toFixed(2));
  setText("settledStakeUnits", formatUnits(m.settledStake));
  setText("settledStakeVnd", formatVnd(m.settledStake));
  setText("startingBankrollDisplay", formatVnd(settings.startingBankroll));
  setText("currentBankrollDisplay", formatVnd(m.currentBankroll, true));
  setText("availableBankrollDisplay", formatVnd(m.availableBankroll, true));
  setTone("netUnits", m.net);
  setTone("roiValue", m.roi);
  setTone("currentBankrollDisplay", m.currentBankroll - Number(settings.startingBankroll || 0));
}

function betRow(bet, index, actions = true) {
  const pl = profitLoss(bet);
  const plClass = pl > 0 ? "positive" : pl < 0 ? "negative" : "neutral-text";
  const sport = detectSport(bet);
  return `<tr>
    <td>${index + 1}</td>
    <td><div class="event-cell"><span class="sport-mark sport-mark--${sport.key}" title="${sport.label}"></span><div class="event-copy"><strong>${escapeHtml(bet.event)}</strong><small>${escapeHtml(bet.league || sport.label)}${bet.eventDate ? ` · ${escapeHtml(formatDate(bet.eventDate))}` : ""}</small></div></div></td>
    <td>${escapeHtml(bet.bet)}</td>
    <td>${formatOdds(bet.odds)}</td>
    <td><strong>${formatUnits(bet.stakeVnd)}</strong><small>${formatVnd(bet.stakeVnd)}</small></td>
    <td><span class="status-pill ${bet.status}">${statusLabel(bet.status)}</span></td>
    <td>${escapeHtml(bet.result || "—")}</td>
    <td class="${plClass}"><strong>${bet.status === "pending" ? "—" : formatUnits(pl, true)}</strong><small>${bet.status === "pending" ? "" : formatVnd(pl, true)}</small></td>
    ${actions ? `<td class="row-actions"><button type="button" data-action="edit" data-id="${bet.id}">Edit</button><button type="button" data-action="delete" data-id="${bet.id}">Delete</button></td>` : ""}
  </tr>`;
}

function renderTables() {
  const fullBody = $("#betsTableBody");
  if (fullBody) {
    const query = normalize($("#searchInput")?.value || "").toLowerCase();
    const status = $("#statusFilter")?.value || "all";
    const sport = $("#sportFilter")?.value || "all";
    const visible = bets.filter((bet) => {
      const haystack = normalize(`${bet.event} ${bet.league} ${bet.bet} ${bet.result}`).toLowerCase();
      return (!query || haystack.includes(query)) && (status === "all" || bet.status === status) && (sport === "all" || detectSport(bet).key === sport);
    });
    fullBody.innerHTML = visible.map((bet, index) => betRow(bet, index, true)).join("");
    const empty = $("#emptyState");
    if (empty) empty.hidden = visible.length > 0;
  }
  const recentBody = $("#recentBetsBody");
  if (recentBody) recentBody.innerHTML = bets.slice(0, 5).map((bet, index) => betRow(bet, index, false)).join("");
}

function renderAnalytics() {
  const body = $("#sportBreakdownBody");
  if (!body) return;
  const grouped = new Map();
  bets.forEach((bet) => {
    const sport = detectSport(bet);
    const current = grouped.get(sport.key) || { ...sport, bets: 0, settledStake: 0, pl: 0 };
    current.bets += 1;
    if (bet.status !== "pending") current.settledStake += Number(bet.stakeVnd || 0);
    current.pl += profitLoss(bet);
    grouped.set(sport.key, current);
  });
  body.innerHTML = [...grouped.values()].sort((a, b) => b.bets - a.bets).map((item) => `<tr><td><span class="sport-inline"><span class="sport-mark sport-mark--${item.key}"></span>${item.label}</span></td><td>${item.bets}</td><td>${formatUnits(item.settledStake)}</td><td class="${item.pl > 0 ? "positive" : item.pl < 0 ? "negative" : "neutral-text"}">${formatUnits(item.pl, true)}</td><td>${item.settledStake ? `${((item.pl / item.settledStake) * 100).toFixed(1)}%` : "—"}</td></tr>`).join("");
}

function renderDetected(confidence = 0) {
  const list = $("#detectedFields");
  if (!list) return;
  const values = detectedBet ? [
    ["Event", detectedBet.event], ["Bet", detectedBet.bet], ["Odds", detectedBet.odds || ""],
    ["Stake", detectedBet.stakeVnd ? `${formatVnd(detectedBet.stakeVnd)} · ${formatUnits(detectedBet.stakeVnd)}` : ""],
    ["Status", statusLabel(detectedBet.status)], ["Result", detectedBet.result], ["League", detectedBet.league], ["Date", formatDate(detectedBet.eventDate)]
  ] : [];
  list.innerHTML = values.length ? values.map(([label, value]) => `<div><dt>${label}</dt><dd>${escapeHtml(value || "Not detected")}</dd></div>`).join("") : `<div class="detected-placeholder">Paste a slip to preview detected fields.</div>`;
  setText("confidenceLabel", `${confidence}% confidence`);
  const add = $("#addDetectedBtn");
  if (add) add.disabled = !(detectedBet?.event && detectedBet?.bet && detectedBet?.odds > 1 && detectedBet?.stakeVnd > 0);
  const status = $("#parserStatus");
  if (status) {
    status.textContent = confidence >= 80 ? "Ready to add" : confidence > 0 ? "Review fields" : "Waiting for input";
    status.className = `status-chip ${confidence >= 80 ? "success" : confidence > 0 ? "warning" : "neutral"}`;
  }
}

function renderInputs() {
  const unit = $("#unitValue");
  if (unit) unit.value = settings.unitVnd;
  const bankroll = $("#startingBankroll");
  if (bankroll) bankroll.value = settings.startingBankroll || "";
  const themeSelect = $("#themeSelect");
  if (themeSelect) themeSelect.value = currentTheme();
}

function render() {
  renderSummary();
  renderTables();
  renderAnalytics();
  renderInputs();
}

function toast(message) {
  const element = $("#toast");
  if (!element) return;
  element.textContent = message;
  element.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => element.classList.remove("show"), 2200);
}

function markActiveNavigation() {
  const page = location.pathname.split("/").pop() || "index.html";
  $$('[data-nav]').forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === page));
}

function currentTheme() {
  return localStorage.getItem(THEME_KEY) || "light";
}

function applyTheme(theme) {
  const selected = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = selected;
  localStorage.setItem(THEME_KEY, selected);
  $$('[data-theme-label]').forEach((element) => { element.textContent = selected === "dark" ? "Light theme" : "Dark theme"; });
  $$('[data-theme-icon]').forEach((element) => { element.textContent = selected === "dark" ? "☀" : "☾"; });
  const select = $("#themeSelect");
  if (select) select.value = selected;
}

function toggleTheme() {
  applyTheme(currentTheme() === "dark" ? "light" : "dark");
}

function download(filename, content, type) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([content], { type }));
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}

function exportJson() {
  download("edgelog-backup.json", JSON.stringify({ settings, bets }, null, 2), "application/json");
}

function exportCsv() {
  const rows = [["Event", "League", "Bet", "Odds", "Stake VND", "Stake Units", "Status", "Result", "P/L VND", "P/L Units"]];
  bets.forEach((bet) => rows.push([bet.event, bet.league, bet.bet, bet.odds, bet.stakeVnd, bet.stakeVnd / settings.unitVnd, bet.status, bet.result, profitLoss(bet), profitLoss(bet) / settings.unitVnd]));
  const csv = rows.map((row) => row.map((cell) => `"${String(cell ?? "").replaceAll('"', '""')}"`).join(",")).join("\n");
  download("edgelog-bets.csv", csv, "text/csv;charset=utf-8");
}

function openDialog(bet = null) {
  const dialog = $("#manualDialog");
  if (!dialog) return;
  setText("dialogTitle", bet ? "Edit bet" : "Add bet");
  $("#editingId").value = bet?.id || "";
  $("#eventField").value = bet?.event || "";
  $("#leagueField").value = bet?.league || "";
  $("#betField").value = bet?.bet || "";
  $("#oddsField").value = bet?.odds || "";
  $("#stakeField").value = bet?.stakeVnd || "";
  $("#statusField").value = bet?.status || "pending";
  $("#dateField").value = bet?.eventDate || "";
  $("#resultField").value = bet?.result || "";
  $("#notesField").value = bet?.notes || "";
  dialog.showModal();
}

function bindEvents() {
  $$('[data-theme-toggle]').forEach((button) => button.addEventListener("click", toggleTheme));
  $("#themeSelect")?.addEventListener("change", (event) => applyTheme(event.target.value));
  $$('[data-export-json]').forEach((button) => button.addEventListener("click", exportJson));
  $$('[data-export-csv]').forEach((button) => button.addEventListener("click", exportCsv));
  $$('[data-open-manual]').forEach((button) => button.addEventListener("click", () => openDialog()));

  const importInput = $("#importJsonInput");
  importInput?.addEventListener("change", async () => {
    const file = importInput.files?.[0];
    if (!file) return;
    try {
      const data = JSON.parse(await file.text());
      const imported = Array.isArray(data) ? data : data.bets;
      if (!Array.isArray(imported)) throw new Error("Invalid backup");
      bets = imported.map((bet) => ({ ...bet, id: bet.id || uid() }));
      if (data.settings) settings = { ...settings, ...data.settings };
      if (Number(data.unitVnd) > 0) settings.unitVnd = Number(data.unitVnd);
      persist(); render(); toast("Backup imported");
    } catch {
      alert("This file is not a valid EdgeLog JSON backup.");
    } finally {
      importInput.value = "";
    }
  });

  $("#unitValue")?.addEventListener("change", (event) => {
    settings.unitVnd = Math.max(1, Number(event.target.value) || 500000);
    persist(); render(); renderDetected(detectedBet ? 80 : 0);
  });
  $("#startingBankroll")?.addEventListener("change", (event) => {
    settings.startingBankroll = Math.max(0, Number(event.target.value) || 0);
    persist(); render();
  });
  $("#searchInput")?.addEventListener("input", renderTables);
  $("#statusFilter")?.addEventListener("change", renderTables);
  $("#sportFilter")?.addEventListener("change", renderTables);
  $("#resetFilters")?.addEventListener("click", () => {
    if ($("#searchInput")) $("#searchInput").value = "";
    if ($("#statusFilter")) $("#statusFilter").value = "all";
    if ($("#sportFilter")) $("#sportFilter").value = "all";
    renderTables();
  });

  $("#slipInput")?.addEventListener("input", (event) => {
    const parsed = parseBetslip(event.target.value, $("#thousandsMode")?.checked ?? true);
    detectedBet = parsed.bet;
    renderDetected(parsed.confidence);
  });
  $("#thousandsMode")?.addEventListener("change", () => $("#slipInput")?.dispatchEvent(new Event("input")));
  $("#clearSlipBtn")?.addEventListener("click", () => {
    $("#slipInput").value = "";
    detectedBet = null;
    renderDetected();
  });
  $("#addDetectedBtn")?.addEventListener("click", () => {
    if (!detectedBet) return;
    bets.unshift({ ...detectedBet, id: uid() });
    persist(); render(); toast("Detected bet added");
    $("#slipInput").value = "";
    detectedBet = null;
    renderDetected();
  });

  $("#closeDialogBtn")?.addEventListener("click", () => $("#manualDialog")?.close());
  $("#cancelDialogBtn")?.addEventListener("click", () => $("#manualDialog")?.close());
  $("#manualForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const item = {
      id: $("#editingId").value || uid(),
      event: $("#eventField").value.trim(),
      league: $("#leagueField").value.trim(),
      bet: $("#betField").value.trim(),
      odds: Number($("#oddsField").value),
      stakeVnd: Number($("#stakeField").value),
      status: $("#statusField").value,
      eventDate: $("#dateField").value,
      result: $("#resultField").value.trim(),
      notes: $("#notesField").value.trim()
    };
    const index = bets.findIndex((bet) => bet.id === item.id);
    if (index >= 0) bets[index] = item; else bets.unshift(item);
    persist(); render(); $("#manualDialog").close(); toast(index >= 0 ? "Bet updated" : "Bet added");
  });

  $("#betsTableBody")?.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;
    const bet = bets.find((item) => item.id === button.dataset.id);
    if (!bet) return;
    if (button.dataset.action === "edit") openDialog(bet);
    if (button.dataset.action === "delete" && confirm(`Delete ${bet.event}?`)) {
      bets = bets.filter((item) => item.id !== bet.id);
      persist(); render(); toast("Bet deleted");
    }
  });

  $$('[data-reset-data]').forEach((button) => button.addEventListener("click", () => {
    if (!confirm("Reset all EdgeLog data to the starter bets?")) return;
    bets = DEFAULT_BETS.map((bet) => ({ ...bet, id: uid() }));
    persist(); render(); toast("Tracker reset");
  }));

  if (new URLSearchParams(location.search).get("add") === "1") openDialog();
}

migrateTrackedBets();
markActiveNavigation();
applyTheme(currentTheme());
bindEvents();
renderDetected();
render();
