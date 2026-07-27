(() => {
  if (globalThis.__slipTraceBrandApplied) return;
  globalThis.__slipTraceBrandApplied = true;

  const VERSION = "20260727-3";
  const BRAND = "SlipTrace";
  const TAGLINE = "Track every slip.";
  const MARK = `assets/sliptrace-mark.svg?v=${VERSION}`;
  const ICON = `assets/sliptrace-app-icon.svg?v=${VERSION}`;

  function ensureStylesheet() {
    const existing = document.querySelector('link[href^="sliptrace-brand.css"]');
    if (existing) {
      existing.href = `sliptrace-brand.css?v=${VERSION}`;
      return;
    }
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `sliptrace-brand.css?v=${VERSION}`;
    document.head.append(link);
  }

  function replaceBrandText(value) {
    return String(value ?? "").replaceAll("EdgeLog", BRAND);
  }

  function replaceTextNodes(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      if (node.parentElement?.closest("script,style")) return;
      if (node.textContent.includes("EdgeLog")) node.textContent = replaceBrandText(node.textContent);
    });
  }

  function updateAttributes(root) {
    const elements = root?.querySelectorAll ? [root, ...root.querySelectorAll("[alt],[title],[aria-label]")] : [];
    elements.forEach((element) => {
      ["alt", "title", "aria-label"].forEach((attribute) => {
        const value = element.getAttribute?.(attribute);
        if (value?.includes("EdgeLog")) element.setAttribute(attribute, replaceBrandText(value));
      });
    });
  }

  function canonicalBrandMarkup() {
    return `<a class="sidebar-brand__home" href="index.html" aria-label="Go to SlipTrace dashboard"><img class="sidebar-brand__mark" src="${MARK}" alt="SlipTrace"><div class="sidebar-brand__copy"><div class="sidebar-brand__name"><span class="brand-slip">SLIP</span><span class="brand-trace">TRACE</span></div><div class="sidebar-brand__meta">${TAGLINE}</div></div></a>`;
  }

  function enforceSidebarBrand() {
    document.querySelectorAll(".sidebar-brand").forEach((brand) => {
      const home = brand.querySelector(":scope > .sidebar-brand__home");
      const mark = home?.querySelector(":scope > .sidebar-brand__mark");
      const name = home?.querySelector(".sidebar-brand__name");
      const oldAsset = [...brand.querySelectorAll("img")].some((image) => /edgelog/i.test(image.getAttribute("src") || ""));
      const oldText = /edge\s*\.?\s*log/i.test(brand.textContent || "");
      const canonical = Boolean(home && mark && name && name.textContent.replace(/\s/g, "").toUpperCase() === "SLIPTRACE");

      if (!canonical || oldAsset || oldText) {
        brand.innerHTML = canonicalBrandMarkup();
        return;
      }

      if (mark.getAttribute("src") !== MARK) mark.setAttribute("src", MARK);
      mark.alt = BRAND;
      home.href = "index.html";
      home.setAttribute("aria-label", "Go to SlipTrace dashboard");
      const meta = home.querySelector(".sidebar-brand__meta");
      if (meta && meta.textContent !== TAGLINE) meta.textContent = TAGLINE;
    });
  }

  function updateStaticBrand() {
    document.documentElement.dataset.brand = "sliptrace";
    document.title = replaceBrandText(document.title);

    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = replaceBrandText(description.content);

    document.querySelectorAll('link[rel~="icon"], link[rel="apple-touch-icon"]').forEach((link) => {
      link.href = ICON;
      link.type = "image/svg+xml";
    });

    enforceSidebarBrand();

    document.querySelectorAll(".topbar-kicker").forEach((kicker) => {
      if (kicker.textContent.trim() === "EdgeLog" || kicker.textContent.trim() === BRAND) kicker.textContent = BRAND;
    });

    replaceTextNodes(document.body);
    updateAttributes(document.body);
  }

  ensureStylesheet();
  updateStaticBrand();

  const originalAlert = globalThis.alert?.bind(globalThis);
  if (originalAlert) globalThis.alert = (message) => originalAlert(replaceBrandText(message));
  const originalConfirm = globalThis.confirm?.bind(globalThis);
  if (originalConfirm) globalThis.confirm = (message) => originalConfirm(replaceBrandText(message));

  document.addEventListener("click", (event) => {
    const link = event.target.closest?.("a[download]");
    if (!link?.download) return;
    link.download = link.download.replace(/edgelog/gi, "sliptrace");
  }, true);

  let queued = false;
  const scheduleUpdate = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      updateStaticBrand();
    });
  };

  const observer = new MutationObserver(scheduleUpdate);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["src", "alt", "title", "aria-label"]
  });

  addEventListener("DOMContentLoaded", updateStaticBrand, { once: true });
  addEventListener("load", updateStaticBrand, { once: true });
  [100, 500, 1500, 3000].forEach((delay) => setTimeout(updateStaticBrand, delay));
})();