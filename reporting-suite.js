(() => {
  if (globalThis.__edgeLogReportingSuite || typeof bets === "undefined") return;
  globalThis.__edgeLogReportingSuite = true;

  const DASHBOARD_RANGE_KEY = "edgelog-dashboard-range-v1";
  const REPORT_MODE_KEY = "edgelog-report-mode-v1";
  let calendarCursor = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

  const style = document.createElement("style");
  style.textContent = `
    .report-range-select{min-height:38px;padding:8px 34px 8px 12px;border:1px solid var(--line);border-radius:10px;background:var(--panel);color:var(--text);font-weight:760}
    .reporting-context{margin:0 0 14px;color:var(--muted);font-size:.76rem;font-weight:720}
    .report-summary-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-bottom:16px}
    .report-summary-card{padding:16px;border:1px solid var(--line);border-radius:15px;background:var(--panel)}
    .report-summary-card span{display:block;color:var(--muted);font-size:.67rem;font-weight:820;letter-spacing:.08em;text-transform:uppercase}
    .report-summary-card strong{display:block;margin-top:8px;font-size:1.18rem;letter-spacing:-.035em}
    .report-summary-card small{display:block;margin-top:5px;color:var(--muted);font-size:.72rem;line-height:1.4}
    .report-toolbar{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:16px}
    .report-toolbar__group{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
    .report-table{min-width:920px}
    .report-period-cell strong{display:block}.report-period-cell small{display:block;margin-top:4px;color:var(--muted);font-size:.7rem}
    .comparison-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}
    .comparison-card{padding:14px;border:1px solid var(--line);border-radius:13px;background:var(--panel-soft)}
    .comparison-card span{display:block;color:var(--muted);font-size:.66rem;font-weight:800;text-transform:uppercase;letter-spacing:.07em}
    .comparison-card strong{display:block;margin-top:7px;font-size:1rem}.comparison-card small{display:block;margin-top:4px;color:var(--muted);font-size:.7rem}
    .calendar-shell{padding:20px 22px}.calendar-toolbar{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px}.calendar-toolbar__controls{display:flex;align-items:center;gap:8px}
    .calendar-month-title{font-size:1.12rem;font-weight:850;letter-spacing:-.03em}.calendar-grid{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:7px}.calendar-weekday{padding:7px;color:var(--muted);font-size:.66rem;font-weight:820;text-align:center;text-transform:uppercase}
    .calendar-day{min-height:112px;padding:10px;border:1px solid var(--line);border-radius:12px;background:var(--panel);color:inherit;text-decoration:none}.calendar-day:hover{border-color:color-mix(in srgb,var(--blue) 38%,var(--line));transform:translateY(-1px)}.calendar-day--outside{opacity:.34}.calendar-day--today{border-color:var(--blue)}
    .calendar-day__number{font-size:.72rem;font-weight:850}.calendar-day__pl{display:block;margin-top:14px;font-size:.94rem;font-weight:850}.calendar-day__meta{display:block;margin-top:5px;color:var(--muted);font-size:.68rem}.calendar-day--positive .calendar-day__pl{color:var(--green)}.calendar-day--negative .calendar-day__pl{color:var(--red)}
    .calendar-legend{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-top:13px;color:var(--muted);font-size:.7rem}.calendar-legend i{display:inline-block;width:8px;height:8px;margin-right:5px;border-radius:999px}
    .date-filter-banner{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:0 0 12px;padding:10px 12px;border:1px solid var(--line);border-radius:11px;background:var(--blue-soft);color:var(--blue);font-size:.76rem;font-weight:760}
    @media(max-width:1050px){.report-summary-grid,.comparison-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.calendar-day{min-height:92px}}
    @media(max-width:700px){.report-summary-grid,.comparison-grid{grid-template-columns:1fr}.calendar-shell{padding:16px}.calendar-grid{gap:4px}.calendar-day{min-height:72px;padding:7px}.calendar-day__pl{margin-top:9px;font-size:.72rem}.calendar-day__meta{display:none}.calendar-weekday{padding:5px 1px;font-size:.58rem}}
  `;
  document.head.append(style);

  function dateForBet(bet) {
    const value = bet.settledAt || bet.eventDate || bet._localEditedAt || bet._syncUpdatedAt;
    const date = value ? new Date(value) : null;
    return date && !Number.isNaN(date.getTime()) ? date : null;
  }

  function dayKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`;
  }

  function startOfDay(date) { return new Date(date.getFullYear(), date.getMonth(), date.getDate()); }
  function startOfWeek(date) {
    const copy = startOfDay(date);
    const day = (copy.getDay() + 6) % 7;
    copy.setDate(copy.getDate() - day);
    return copy;
  }
  function startOfMonth(date) { return new Date(date.getFullYear(), date.getMonth(), 1); }
  function addDays(date, days) { const copy = new Date(date); copy.setDate(copy.getDate()+days); return copy; }
  function addMonths(date, months) { return new Date(date.getFullYear(), date.getMonth()+months, 1); }

  function rangeBounds(key, now = new Date()) {
    const end = new Date(now.getTime() + 1);
    if (key === "today") return { start: startOfDay(now), end, label: "Today" };
    if (key === "7") return { start: addDays(startOfDay(now), -6), end, label: "Last 7 days" };
    if (key === "30") return { start: addDays(startOfDay(now), -29), end, label: "Last 30 days" };
    if (key === "month") return { start: startOfMonth(now), end, label: "This month" };
    return { start: null, end: null, label: "All time" };
  }

  function inBounds(bet, bounds) {
    if (!bounds.start) return true;
    const date = dateForBet(bet);
    return Boolean(date && date >= bounds.start && date < bounds.end);
  }

  function stats(items) {
    const settled = items.filter((bet) => bet.status !== "pending");
    const stake = settled.reduce((sum, bet) => sum + Number(bet.stakeVnd || 0), 0);
    const pl = settled.reduce((sum, bet) => sum + Number(profitLoss(bet) || 0), 0);
    const wins = settled.filter((bet) => ["win","half-win"].includes(bet.status)).length;
    const pending = items.filter((bet) => bet.status === "pending");
    const pendingStake = pending.reduce((sum, bet) => sum + Number(bet.stakeVnd || 0), 0);
    const avgOdds = items.length ? items.reduce((sum, bet) => sum + Number(bet.odds || 0), 0) / items.length : 0;
    let running = 0, peak = 0, drawdown = 0;
    settled.slice().sort((a,b)=>(dateForBet(a)?.getTime()||0)-(dateForBet(b)?.getTime()||0)).forEach((bet)=>{running += Number(profitLoss(bet)||0); peak=Math.max(peak,running); drawdown=Math.max(drawdown,peak-running);});
    const sportMap = new Map();
    settled.forEach((bet)=>{const sport=detectSport(bet).label; const row=sportMap.get(sport)||{label:sport,pl:0}; row.pl+=Number(profitLoss(bet)||0); sportMap.set(sport,row);});
    const bestSport=[...sportMap.values()].sort((a,b)=>b.pl-a.pl)[0];
    return { total:items.length, settled:settled.length, pending:pending.length, stake, pl, roi:stake?(pl/stake)*100:0, winRate:settled.length?(wins/settled.length)*100:0, pendingStake, avgOdds, drawdown, bestSport:bestSport?.label||"—" };
  }

  function tone(element, value) {
    if (!element) return;
    element.classList.toggle("positive", value > 0);
    element.classList.toggle("negative", value < 0);
    element.classList.toggle("neutral-text", value === 0);
  }

  function ensureDashboardRange() {
    if (!document.body.classList.contains("dashboard-page") || document.querySelector("#dashboardRange")) return;
    const actions = document.querySelector(".topbar-actions");
    if (!actions) return;
    const select = document.createElement("select");
    select.id = "dashboardRange";
    select.className = "report-range-select";
    select.setAttribute("aria-label", "Dashboard date range");
    select.innerHTML = `<option value="all">All time</option><option value="today">Today</option><option value="7">Last 7 days</option><option value="30">Last 30 days</option><option value="month">This month</option>`;
    select.value = localStorage.getItem(DASHBOARD_RANGE_KEY) || "all";
    select.addEventListener("change",()=>{localStorage.setItem(DASHBOARD_RANGE_KEY,select.value);renderDashboardRange();});
    actions.prepend(select);
    const shell=document.querySelector(".dashboard-shell");
    const summary=shell?.querySelector(".summary-grid");
    if(summary){const context=document.createElement("p");context.id="dashboardRangeContext";context.className="reporting-context";summary.before(context);}
  }

  function renderDashboardRange() {
    if (!document.body.classList.contains("dashboard-page")) return;
    ensureDashboardRange();
    const key=document.querySelector("#dashboardRange")?.value||"all";
    const bounds=rangeBounds(key);
    const items=bets.filter((bet)=>inBounds(bet,bounds));
    const m=stats(items);
    setText("netUnits",formatUnits(m.pl,true)); setText("netVnd",formatVnd(m.pl,true));
    setText("pendingUnits",formatUnits(m.pendingStake)); setText("pendingVnd",formatVnd(m.pendingStake));
    setText("totalBetsCount",String(m.total)); setText("betCountMeta",`${m.settled} settled · ${m.pending} pending`);
    setText("roiValue",`${m.roi>=0?"+":""}${m.roi.toFixed(1)}%`); setText("winRateValue",`${m.winRate.toFixed(1)}%`);
    setText("averageOddsValue",m.avgOdds.toFixed(2)); setText("settledStakeUnits",formatUnits(m.stake)); setText("settledStakeVnd",formatVnd(m.stake));
    tone(document.querySelector("#netUnits"),m.pl); tone(document.querySelector("#roiValue"),m.roi);
    const context=document.querySelector("#dashboardRangeContext"); if(context) context.textContent=`Dashboard period: ${bounds.label} · ${m.total} recorded bet${m.total===1?"":"s"}`;
    const recent=document.querySelector("#recentBetsBody"); if(recent) recent.innerHTML=items.slice().sort((a,b)=>(dateForBet(b)?.getTime()||0)-(dateForBet(a)?.getTime()||0)).slice(0,5).map((bet,index)=>betRow(bet,index,false)).join("");
  }

  function ensureNavLinks() {
    document.querySelectorAll(".sidebar-nav").forEach((nav)=>{
      if(!nav.querySelector('a[href="calendar.html"]')){
        const analytics=nav.querySelector('a[href="analytics.html"]');
        const calendar=document.createElement("a");calendar.className="sidebar-link";calendar.dataset.nav="";calendar.href="calendar.html";calendar.innerHTML='<span class="sidebar-link__icon">▦</span><span>Calendar</span>';
        analytics?.after(calendar);
        const reports=document.createElement("a");reports.className="sidebar-link";reports.dataset.nav="";reports.href="reports.html";reports.innerHTML='<span class="sidebar-link__icon">≋</span><span>Reports</span>';
        calendar.after(reports);
      }
    });
    if(typeof markActiveNavigation==="function") markActiveNavigation();
  }

  function groupPeriods(mode) {
    const groups=new Map();
    bets.filter((bet)=>bet.status!=="pending").forEach((bet)=>{
      const date=dateForBet(bet); if(!date) return;
      const start=mode==="weekly"?startOfWeek(date):startOfMonth(date);
      const key=dayKey(start); const row=groups.get(key)||{start,items:[]}; row.items.push(bet); groups.set(key,row);
    });
    return [...groups.values()].sort((a,b)=>b.start-a.start);
  }

  function periodLabel(start,mode) {
    if(mode==="weekly"){const end=addDays(start,6);return `${start.toLocaleDateString("en-US",{month:"short",day:"numeric"})} – ${end.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}`;}
    return start.toLocaleDateString("en-US",{month:"long",year:"numeric"});
  }

  function ensureReportsPage() {
    const root=document.querySelector("#reportsRoot"); if(!root) return;
    root.innerHTML=`<section class="panel" style="padding:20px 22px;margin-bottom:16px"><div class="report-toolbar"><div><p class="panel-kicker">PERIOD REPORTS</p><h2>Weekly and monthly performance</h2><p class="panel-copy">Review profitability, volume, hit rate, drawdown, and your strongest sport for each period.</p></div><div class="report-toolbar__group"><select id="reportMode" class="report-range-select"><option value="weekly">Weekly</option><option value="monthly">Monthly</option></select></div></div><div id="reportSummary" class="report-summary-grid"></div><div class="table-wrap"><table class="report-table"><thead><tr><th>Period</th><th>Bets</th><th>Stake</th><th>P/L</th><th>ROI</th><th>Win rate</th><th>Drawdown</th><th>Best sport</th></tr></thead><tbody id="reportRows"></tbody></table></div></section><section class="panel" style="padding:20px 22px"><div class="panel-heading"><div><p class="panel-kicker">PERFORMANCE COMPARISON</p><h2>Latest period versus previous period</h2><p class="panel-copy">Compare equal weekly or monthly periods using the selected report mode.</p></div></div><div id="comparisonGrid" class="comparison-grid"></div></section>`;
    const mode=document.querySelector("#reportMode"); mode.value=localStorage.getItem(REPORT_MODE_KEY)||"weekly"; mode.addEventListener("change",()=>{localStorage.setItem(REPORT_MODE_KEY,mode.value);renderReports();});
  }

  function deltaText(current,previous,suffix="") { const delta=current-previous; return `${delta>=0?"+":""}${delta.toFixed(1)}${suffix} vs previous`; }

  function renderReports() {
    const root=document.querySelector("#reportsRoot"); if(!root) return;
    if(!document.querySelector("#reportRows")) ensureReportsPage();
    const mode=document.querySelector("#reportMode")?.value||"weekly"; const groups=groupPeriods(mode); const latest=groups[0]; const previous=groups[1];
    const all=stats(bets); const last=latest?stats(latest.items):stats([]);
    document.querySelector("#reportSummary").innerHTML=`<div class="report-summary-card"><span>Total P/L</span><strong class="${all.pl>0?"positive":all.pl<0?"negative":"neutral-text"}">${formatUnits(all.pl,true)}</strong><small>${formatVnd(all.pl,true)} all time</small></div><div class="report-summary-card"><span>Latest ${mode==="weekly"?"week":"month"}</span><strong class="${last.pl>0?"positive":last.pl<0?"negative":"neutral-text"}">${formatUnits(last.pl,true)}</strong><small>${last.roi>=0?"+":""}${last.roi.toFixed(1)}% ROI</small></div><div class="report-summary-card"><span>Latest volume</span><strong>${formatUnits(last.stake)}</strong><small>${last.settled} settled bet${last.settled===1?"":"s"}</small></div><div class="report-summary-card"><span>Latest drawdown</span><strong class="${last.drawdown?"negative":"neutral-text"}">${formatUnits(last.drawdown)}</strong><small>Peak-to-trough within period</small></div>`;
    const rows=document.querySelector("#reportRows"); rows.innerHTML=groups.length?groups.map((group)=>{const s=stats(group.items);return `<tr><td class="report-period-cell"><strong>${periodLabel(group.start,mode)}</strong><small>${dayKey(group.start)}</small></td><td>${s.settled}</td><td>${formatUnits(s.stake)}</td><td class="${s.pl>0?"positive":s.pl<0?"negative":"neutral-text"}"><strong>${formatUnits(s.pl,true)}</strong><small>${formatVnd(s.pl,true)}</small></td><td>${s.roi>=0?"+":""}${s.roi.toFixed(1)}%</td><td>${s.winRate.toFixed(1)}%</td><td>${formatUnits(s.drawdown)}</td><td>${escapeHtml(s.bestSport)}</td></tr>`;}).join(""):'<tr><td colspan="8" class="empty-state">No dated settled bets are available yet.</td></tr>';
    const current=latest?stats(latest.items):stats([]), prev=previous?stats(previous.items):stats([]);
    document.querySelector("#comparisonGrid").innerHTML=`<div class="comparison-card"><span>P/L change</span><strong class="${current.pl-prev.pl>0?"positive":current.pl-prev.pl<0?"negative":"neutral-text"}">${formatUnits(current.pl-prev.pl,true)}</strong><small>${formatUnits(current.pl,true)} current · ${formatUnits(prev.pl,true)} previous</small></div><div class="comparison-card"><span>ROI change</span><strong>${deltaText(current.roi,prev.roi," pp")}</strong><small>${current.roi.toFixed(1)}% current · ${prev.roi.toFixed(1)}% previous</small></div><div class="comparison-card"><span>Volume change</span><strong>${formatUnits(current.stake-prev.stake,true)}</strong><small>${current.settled} current · ${prev.settled} previous bets</small></div><div class="comparison-card"><span>Drawdown change</span><strong>${formatUnits(current.drawdown-prev.drawdown,true)}</strong><small>${formatUnits(current.drawdown)} current · ${formatUnits(prev.drawdown)} previous</small></div>`;
  }

  function ensureCalendarPage() {
    const root=document.querySelector("#calendarRoot"); if(!root) return;
    root.innerHTML=`<section class="panel calendar-shell"><div class="calendar-toolbar"><div><p class="panel-kicker">DAILY PERFORMANCE</p><h2>Monthly betting calendar</h2><p class="panel-copy">Click a day to open the bets recorded or settled on that date.</p></div><div class="calendar-toolbar__controls"><button id="calendarPrevious" class="button secondary" type="button">‹</button><strong id="calendarMonthTitle" class="calendar-month-title"></strong><button id="calendarNext" class="button secondary" type="button">›</button></div></div><div class="calendar-grid" id="calendarGrid"></div><div class="calendar-legend"><span><i style="background:var(--green)"></i>Profitable day</span><span><i style="background:var(--red)"></i>Losing day</span><span><i style="background:var(--muted)"></i>No settled P/L</span></div></section>`;
    document.querySelector("#calendarPrevious").addEventListener("click",()=>{calendarCursor=addMonths(calendarCursor,-1);renderCalendar();});
    document.querySelector("#calendarNext").addEventListener("click",()=>{calendarCursor=addMonths(calendarCursor,1);renderCalendar();});
  }

  function renderCalendar() {
    const root=document.querySelector("#calendarRoot"); if(!root) return;
    if(!document.querySelector("#calendarGrid")) ensureCalendarPage();
    document.querySelector("#calendarMonthTitle").textContent=calendarCursor.toLocaleDateString("en-US",{month:"long",year:"numeric"});
    const first=startOfWeek(startOfMonth(calendarCursor)); const todayKey=dayKey(new Date()); const cells=[];
    ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].forEach((day)=>cells.push(`<div class="calendar-weekday">${day}</div>`));
    for(let i=0;i<42;i+=1){const date=addDays(first,i);const key=dayKey(date);const dayBets=bets.filter((bet)=>{const d=dateForBet(bet);return d&&dayKey(d)===key;});const s=stats(dayBets);const outside=date.getMonth()!==calendarCursor.getMonth();const toneClass=s.pl>0?"calendar-day--positive":s.pl<0?"calendar-day--negative":"";cells.push(`<a class="calendar-day ${outside?"calendar-day--outside":""} ${key===todayKey?"calendar-day--today":""} ${toneClass}" href="bets.html?date=${key}"><span class="calendar-day__number">${date.getDate()}</span><strong class="calendar-day__pl">${s.settled?formatUnits(s.pl,true):"—"}</strong><small class="calendar-day__meta">${dayBets.length} bet${dayBets.length===1?"":"s"} · ${s.settled} settled</small></a>`);}
    document.querySelector("#calendarGrid").innerHTML=cells.join("");
  }

  function applyDateQuery() {
    const body=document.querySelector("#betsTableBody"); if(!body) return;
    const params=new URLSearchParams(location.search); const key=params.get("date"); if(!key) return;
    const panel=body.closest(".table-panel"); if(panel&&!panel.querySelector(".date-filter-banner")){const banner=document.createElement("div");banner.className="date-filter-banner";banner.innerHTML=`<span>Showing bets for ${escapeHtml(key)}</span><a class="button subtle" href="bets.html">Clear date</a>`;panel.querySelector(".table-wrap")?.before(banner);}
    [...body.querySelectorAll("tr")].forEach((row)=>{const id=row.querySelector("[data-id]")?.dataset.id;const bet=bets.find((item)=>item.id===id);const d=bet&&dateForBet(bet);if(!d||dayKey(d)!==key)row.hidden=true;});
  }

  if(typeof renderTables==="function"){
    const previousTables=renderTables;
    renderTables=function reportingAwareTables(...args){const result=previousTables(...args);applyDateQuery();return result;};
  }
  if(typeof render==="function"){
    const previousRender=render;
    render=function reportingAwareRender(...args){const result=previousRender(...args);renderDashboardRange();renderReports();renderCalendar();return result;};
  }

  ensureNavLinks();
  ensureDashboardRange();
  ensureReportsPage();
  ensureCalendarPage();
  renderDashboardRange();
  renderReports();
  renderCalendar();
  if(document.querySelector("#betsTableBody")){applyDateQuery();}
})();