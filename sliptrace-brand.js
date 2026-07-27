(() => {
  if (globalThis.__slipTraceBrandApplied) return;
  globalThis.__slipTraceBrandApplied = true;

  const VERSION = "20260727-2";
  const BRAND = "SlipTrace";
  const TAGLINE = "Track every slip.";
  const MARK = `assets/sliptrace-mark.svg?v=${VERSION}`;
  const ICON = `assets/sliptrace-app-icon.svg?v=${VERSION}`;

  function ensureStylesheet() {
    if (document.querySelector('link[href^="sliptrace-brand.css"]')) return;
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

  function updateStaticBrand() {
    document.documentElement.dataset.brand = "sliptrace";
    if (document.title.includes("EdgeLog")) document.title = replaceBrandText(document.title);

    const description = document.querySelector('meta[name="description"]');
    if (description?.content.includes("EdgeLog")) description.content = replaceBrandText(description.content);

    document.querySelectorAll('link[rel~="icon"], link[rel="apple-touch-icon"]').forEach((link) => {
      if (!link.href.includes("sliptrace-app-icon.svg")) link.href = ICON;
      if (link.type !== "image/svg+xml") link.type = "image/svg+xml";
    });

    document.querySelectorAll(".sidebar-brand__mark").forEach((image) => {
      if (!image.src.includes("sliptrace-mark.svg")) image.src = MARK;
      if (image.alt !== BRAND) image.alt = BRAND;
    });

    document.querySelectorAll(".sidebar-brand__name").forEach((name) => {
      if (name.dataset.sliptraceReady === "true") return;
      name.dataset.sliptraceReady = "true";
      name.innerHTML = '<span class="brand-slip">SLIP</span><span class="brand-trace">TRACE</span>';
    });

    document.querySelectorAll(".sidebar-brand__meta").forEach((meta) => {
      if (meta.textContent !== TAGLINE) meta.textContent = TAGLINE;
    });
    document.querySelectorAll(".topbar-kicker").forEach((kicker) => {
      if (kicker.textContent.trim() === "EdgeLog") kicker.textContent = BRAND;
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

  const observer = new MutationObserver((mutations) => {
    let refreshStatic = false;
    mutations.forEach((mutation) => mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        if (node.textContent.includes("EdgeLog")) node.textContent = replaceBrandText(node.textContent);
        return;
      }
      if (node.nodeType !== Node.ELEMENT_NODE) return;
      replaceTextNodes(node);
      updateAttributes(node);
      refreshStatic ||= Boolean(node.matches?.(".sidebar-brand,.sidebar-brand__mark,.sidebar-brand__name,.sidebar-brand__meta,.topbar-kicker") || node.querySelector?.(".sidebar-brand,.topbar-kicker"));
    }));
    if (refreshStatic) updateStaticBrand();
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
