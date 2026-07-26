(() => {
  if (globalThis.__edgeLogAnalyticsV2 || typeof bets === "undefined") return;
  globalThis.__edgeLogAnalyticsV2 = true;

  const periodSelect = document.querySelector("#analyticsPeriod");
  const originalRenderAnalytics = typeof renderAnalytics === "function" ? renderAnalytics : () => {};

  function settledChronological() {
    return bets.filter((bet) => bet.status !== "pending").slice().reverse();
  }

  function selectedSettled() {
    const all = settledChronological();
    const period = periodSelect?.value || "all";
    if (period === "10") return all.slice(-10);
    if (period === "25") return all.slice(-25);
    return all;
  }

  function selectedAllBets() {
    const settled = selectedSettled();
    const selectedIds = new Set(settled.map((bet) => bet.id));
    return bets.filter((bet) => selectedIds.has(bet.id));
  }

  function numberTone(element, value) {
    if (!element) return;
    element.classList.toggle("positive", value > 0);
    element.classList.toggle("negative", value < 0);
    element.classList.toggle("neutral-text", value === 0);
  }

  function setValue(id, value, toneValue = null) {
    const element = document.getElementById(id);
    if (!element) return;
    element.textContent = value;
    if (toneValue !== null) numberTone(element, toneValue);
  }

  function selectedMetrics(items) {
    const stake = items.reduce((sum, bet) => sum + Number(bet.stakeVnd || 0), 0);
    const net = items.reduce((sum, bet) => sum + profitLoss(bet), 0);
    const wins = items.filter((bet) => ["win", "half-win"].includes(bet.status)).length;
    return {
      count: items.length,
      stake,
      net,
      roi: stake ? (net / stake) * 100 : 0,
      winRate: items.length ? (wins / items.length) * 100 : 0
    };
  }

  function drawdown(items) {
    let cumulative = 0;
    let peak = 0;
    let maximum = 0;
    items.forEach((bet) => {
      cumulative += profitLoss(bet);
      peak = Math.max(peak, cumulative);
      maximum = Math.max(maximum, peak - cumulative);
    });
    return maximum;
  }

  function currentStreak() {
    const newest = bets.filter((bet) => bet.status !== "pending");
    if (!newest.length) return { value: "—", meta: "No settled bets yet" };
    const classFor = (status) => ["win", "half-win"].includes(status) ? "win" : ["loss", "half-loss"].includes(status) ? "loss" : "void";
    const type = classFor(newest[0].status);
    if (type === "void") return { value: "No active streak", meta: `${newest[0].event} was void` };
    let count = 0;
    for (const bet of newest) {
      if (classFor(bet.status) !== type) break;
      count += 1;
    }
    return {
      value: `${count} ${type}${count === 1 ? "" : "s"}`,
      meta: `Latest: ${newest[0].event}`
    };
  }

  function bestAndWorst(items) {
    if (!items.length) return { best: null, worst: null };
    const sorted = items.slice().sort((a, b) => profitLoss(a) - profitLoss(b));
    return { worst: sorted[0], best: sorted[sorted.length - 1] };
  }

  function renderKpis(items) {
    const m = selectedMetrics(items);
    const maxDrawdown = drawdown(items);
    const streak = currentStreak();
    setValue("analyticsNetUnits", formatUnits(m.net, true), m.net);
    setValue("analyticsNetVnd", formatVnd(m.net, true), m.net);
    setValue("analyticsRoi", `${m.roi >= 0 ? "+" : ""}${m.roi.toFixed(1)}%`, m.roi);
    setValue("analyticsRoiMeta", `${formatUnits(m.stake)} settled across ${m.count} bet${m.count === 1 ? "" : "s"}`);
    setValue("analyticsWinRate", `${m.winRate.toFixed(1)}%`);
    setValue("analyticsWinRateMeta", `${items.filter((bet) => ["win", "half-win"].includes(bet.status)).length} positive result${items.filter((bet) => ["win", "half-win"].includes(bet.status)).length === 1 ? "" : "s"}`);
    setValue("analyticsDrawdownUnits", formatUnits(maxDrawdown));
    setValue("analyticsDrawdownVnd", formatVnd(maxDrawdown));
    setValue("analyticsStreak", streak.value);
    setValue("analyticsStreakMeta", streak.meta);
  }

  function chartColors() {
    const styles = getComputedStyle(document.documentElement);
    return {
      blue: styles.getPropertyValue("--blue").trim() || "#6674ff",
      purple: styles.getPropertyValue("--purple").trim() || "#8a6cff",
      green: styles.getPropertyValue("--green").trim() || "#39b96a",
      red: styles.getPropertyValue("--red").trim() || "#ef6071",
      muted: styles.getPropertyValue("--muted").trim() || "#7b859b",
      line: styles.getPropertyValue("--line").trim() || "#e6eaf2",
      panel: styles.getPropertyValue("--panel").trim() || "#ffffff"
    };
  }

  function svgElement(name, attributes = {}, text = "") {
    const node = document.createElementNS("http://www.w3.org/2000/svg", name);
    Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
    if (text) node.textContent = text;
    return node;
  }

  function renderProfitCurve(items) {
    const container = document.querySelector("#profitCurveChart");
    if (!container) return;
    container.innerHTML = "";
    if (!items.length) {
      container.innerHTML = '<div class="analytics-chart-empty">Settle at least one bet to build the profit curve.</div>';
      return;
    }

    const width = 900;
    const height = 330;
    const padding = { top: 22, right: 24, bottom: 42, left: 64 };
    const plotWidth = width - padding.left - padding.right;
    const plotHeight = height - padding.top - padding.bottom;
    const unit = Math.max(1, Number(settings.unitVnd || 500000));
    let cumulative = 0;
    const values = items.map((bet, index) => {
      cumulative += profitLoss(bet) / unit;
      return { value: cumulative, bet, index };
    });
    const rawMin = Math.min(0, ...values.map((point) => point.value));
    const rawMax = Math.max(0, ...values.map((point) => point.value));
    const range = Math.max(.5, rawMax - rawMin);
    const min = rawMin - range * .12;
    const max = rawMax + range * .12;
    const xFor = (index) => padding.left + (values.length === 1 ? plotWidth / 2 : (index / (values.length - 1)) * plotWidth);
    const yFor = (value) => padding.top + ((max - value) / (max - min)) * plotHeight;
    const colors = chartColors();

    const svg = svgElement("svg", { viewBox: `0 0 ${width} ${height}`, role: "img", "aria-label": "Cumulative profit and loss curve in units" });
    const defs = svgElement("defs");
    const areaGradient = svgElement("linearGradient", { id: "profitAreaGradient", x1: "0", y1: "0", x2: "0", y2: "1" });
    areaGradient.append(svgElement("stop", { offset: "0%", "stop-color": colors.blue, "stop-opacity": ".28" }));
    areaGradient.append(svgElement("stop", { offset: "100%", "stop-color": colors.blue, "stop-opacity": "0" }));
    defs.append(areaGradient);
    svg.append(defs);

    for (let step = 0; step <= 4; step += 1) {
      const value = max - ((max - min) * step / 4);
      const y = yFor(value);
      svg.append(svgElement("line", { x1: padding.left, y1: y, x2: width - padding.right, y2: y, stroke: colors.line, "stroke-width": "1" }));
      svg.append(svgElement("text", { x: padding.left - 12, y: y + 4, "text-anchor": "end", fill: colors.muted, "font-size": "12", "font-family": "Inter, sans-serif" }, `${value >= 0 ? "+" : ""}${value.toFixed(1)}u`));
    }

    const zeroY = yFor(0);
    svg.append(svgElement("line", { x1: padding.left, y1: zeroY, x2: width - padding.right, y2: zeroY, stroke: colors.muted, "stroke-width": "1.2", "stroke-dasharray": "5 6", opacity: ".65" }));

    const path = values.map((point, index) => `${index ? "L" : "M"}${xFor(index).toFixed(2)},${yFor(point.value).toFixed(2)}`).join(" ");
    const baseY = yFor(Math.min(0, min));
    const areaPath = `${path} L${xFor(values.length - 1)},${baseY} L${xFor(0)},${baseY} Z`;
    svg.append(svgElement("path", { d: areaPath, fill: "url(#profitAreaGradient)" }));
    svg.append(svgElement("path", { d: path, fill: "none", stroke: colors.blue, "stroke-width": "4", "stroke-linecap": "round", "stroke-linejoin": "round" }));

    values.forEach((point, index) => {
      const group = svgElement("g");
      const circle = svgElement("circle", {
        cx: xFor(index), cy: yFor(point.value), r: "5.2",
        fill: point.value >= 0 ? colors.green : colors.red,
        stroke: colors.panel, "stroke-width": "3"
      });
      circle.append(svgElement("title", {}, `${point.bet.event} — ${formatUnits(profitLoss(point.bet), true)} · cumulative ${point.value >= 0 ? "+" : ""}${point.value.toFixed(3)}u`));
      group.append(circle);
      svg.append(group);
    });

    const labelIndexes = [...new Set([0, Math.floor((values.length - 1) / 2), values.length - 1])];
    labelIndexes.forEach((index) => {
      const point = values[index];
      const label = point.bet.eventDate ? formatDate(point.bet.eventDate).split(",")[0] : `Bet ${index + 1}`;
      svg.append(svgElement("text", {
        x: xFor(index), y: height - 14, "text-anchor": index === 0 ? "start" : index === values.length - 1 ? "end" : "middle",
        fill: colors.muted, "font-size": "12", "font-family": "Inter, sans-serif"
      }, label));
    });

    container.append(svg);
  }

  function renderInsights(items) {
    const { best, worst } = bestAndWorst(items);
    const averageOdds = items.length ? items.reduce((sum, bet) => sum + Number(bet.odds || 0), 0) / items.length : 0;
    setValue("analyticsBestBet", best ? formatUnits(profitLoss(best), true) : "—", best ? profitLoss(best) : null);
    setValue("analyticsBestBetMeta", best ? `${best.event} · ${best.bet}` : "No settled bets");
    setValue("analyticsWorstBet", worst ? formatUnits(profitLoss(worst), true) : "—", worst ? profitLoss(worst) : null);
    setValue("analyticsWorstBetMeta", worst ? `${worst.event} · ${worst.bet}` : "No settled bets");
    setValue("analyticsAverageOdds", averageOdds ? averageOdds.toFixed(2) : "—");
    setValue("analyticsSettledVolume", formatUnits(items.reduce((sum, bet) => sum + Number(bet.stakeVnd || 0), 0)));
    renderResultDistribution(items);
  }

  function renderResultDistribution(items) {
    const statuses = ["win", "half-win", "loss", "half-loss", "void"];
    const counts = Object.fromEntries(statuses.map((status) => [status, items.filter((bet) => bet.status === status).length]));
    const total = Math.max(1, items.length);
    const bar = document.querySelector("#resultDistributionBar");
    const legend = document.querySelector("#resultDistributionLegend");
    if (bar) {
      bar.innerHTML = statuses.map((status) => `<span class="result-distribution__segment result-distribution__segment--${status}" style="width:${(counts[status] / total) * 100}%" title="${statusLabel(status)}: ${counts[status]}"></span>`).join("");
    }
    if (legend) {
      const colors = { win: "var(--green)", "half-win": "color-mix(in srgb, var(--green) 58%, var(--blue))", loss: "var(--red)", "half-loss": "color-mix(in srgb, var(--red) 60%, var(--amber))", void: "var(--muted)" };
      legend.innerHTML = statuses.map((status) => `<div class="result-distribution__item"><span><i class="result-distribution__dot" style="background:${colors[status]}"></i>${statusLabel(status)}</span><strong>${counts[status]}</strong></div>`).join("");
    }
  }

  function groupBySport(items) {
    const grouped = new Map();
    items.forEach((bet) => {
      const sport = detectSport(bet);
      const current = grouped.get(sport.key) || { ...sport, bets: 0, wins: 0, stake: 0, pl: 0 };
      current.bets += 1;
      current.wins += ["win", "half-win"].includes(bet.status) ? 1 : 0;
      current.stake += Number(bet.stakeVnd || 0);
      current.pl += profitLoss(bet);
      grouped.set(sport.key, current);
    });
    return [...grouped.values()].sort((a, b) => b.bets - a.bets || b.pl - a.pl);
  }

  function renderSportTable(items) {
    const body = document.querySelector("#sportBreakdownBody");
    if (!body) return;
    const rows = groupBySport(items);
    if (!rows.length) {
      body.innerHTML = '<tr class="analytics-empty-row"><td colspan="6">No settled bets in this period.</td></tr>';
      return;
    }
    const maxBets = Math.max(...rows.map((row) => row.bets), 1);
    body.innerHTML = rows.map((item) => `<tr>
      <td><span class="sport-inline"><span class="sport-mark sport-mark--${item.key}"></span>${escapeHtml(item.label)}</span></td>
      <td class="analytics-bar-cell"><strong>${item.bets}</strong><div class="analytics-bar-cell__track"><div class="analytics-bar-cell__fill" style="width:${(item.bets / maxBets) * 100}%"></div></div></td>
      <td>${item.bets ? `${((item.wins / item.bets) * 100).toFixed(1)}%` : "—"}</td>
      <td>${formatUnits(item.stake)}</td>
      <td class="${item.pl > 0 ? "positive" : item.pl < 0 ? "negative" : "neutral-text"}">${formatUnits(item.pl, true)}</td>
      <td>${item.stake ? `${((item.pl / item.stake) * 100).toFixed(1)}%` : "—"}</td>
    </tr>`).join("");
  }

  function oddsBucket(odds) {
    const value = Number(odds || 0);
    if (value < 1.5) return "1.00–1.49";
    if (value < 1.8) return "1.50–1.79";
    if (value < 2) return "1.80–1.99";
    if (value < 2.5) return "2.00–2.49";
    return "2.50+";
  }

  function renderOddsTable(items) {
    const body = document.querySelector("#oddsRangeBody");
    if (!body) return;
    const order = ["1.00–1.49", "1.50–1.79", "1.80–1.99", "2.00–2.49", "2.50+"];
    const grouped = new Map(order.map((label) => [label, { label, bets: 0, wins: 0, stake: 0, pl: 0 }]));
    items.forEach((bet) => {
      const bucket = grouped.get(oddsBucket(bet.odds));
      bucket.bets += 1;
      bucket.wins += ["win", "half-win"].includes(bet.status) ? 1 : 0;
      bucket.stake += Number(bet.stakeVnd || 0);
      bucket.pl += profitLoss(bet);
    });
    const rows = order.map((label) => grouped.get(label)).filter((row) => row.bets > 0);
    if (!rows.length) {
      body.innerHTML = '<tr class="analytics-empty-row"><td colspan="6">No settled bets in this period.</td></tr>';
      return;
    }
    body.innerHTML = rows.map((item) => `<tr>
      <td><strong>${item.label}</strong></td>
      <td>${item.bets}</td>
      <td>${((item.wins / item.bets) * 100).toFixed(1)}%</td>
      <td>${formatUnits(item.stake)}</td>
      <td class="${item.pl > 0 ? "positive" : item.pl < 0 ? "negative" : "neutral-text"}">${formatUnits(item.pl, true)}</td>
      <td>${item.stake ? `${((item.pl / item.stake) * 100).toFixed(1)}%` : "—"}</td>
    </tr>`).join("");
  }

  function renderAnalyticsV2() {
    const items = selectedSettled();
    renderKpis(items);
    renderProfitCurve(items);
    renderInsights(items);
    renderSportTable(items);
    renderOddsTable(items);
  }

  renderAnalytics = function enhancedRenderAnalytics(...args) {
    const result = originalRenderAnalytics(...args);
    renderAnalyticsV2();
    return result;
  };

  periodSelect?.addEventListener("change", renderAnalyticsV2);
  document.querySelectorAll("[data-theme-toggle]").forEach((button) => button.addEventListener("click", () => requestAnimationFrame(renderAnalyticsV2)));
  addEventListener("resize", (() => {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => renderProfitCurve(selectedSettled()), 120);
    };
  })());

  renderAnalyticsV2();
})();