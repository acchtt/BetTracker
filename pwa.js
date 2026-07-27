(() => {
  if (globalThis.__slipTracePwa) return;
  globalThis.__slipTracePwa = true;

  const manifest = document.createElement("link");
  manifest.rel = "manifest";
  manifest.href = "manifest.webmanifest";
  document.head.append(manifest);

  const appleCapable = document.createElement("meta");
  appleCapable.name = "apple-mobile-web-app-capable";
  appleCapable.content = "yes";
  document.head.append(appleCapable);

  if (!document.querySelector('script[src^="import-review-fix.js"]')) {
    const importFix = document.createElement("script");
    importFix.src = "import-review-fix.js?v=20260727-1";
    document.body.append(importFix);
  }

  const style = document.createElement("style");
  style.textContent = `
    .pwa-status{display:inline-flex;align-items:center;gap:7px;min-height:34px;padding:7px 10px;border:1px solid var(--line);border-radius:10px;background:var(--panel);color:var(--muted);font-size:.74rem;font-weight:760;white-space:nowrap}.pwa-status::before{content:"";width:7px;height:7px;border-radius:999px;background:var(--green)}.pwa-status[data-state="offline"]::before{background:var(--amber)}.pwa-install{display:none}.pwa-install.is-visible{display:inline-flex}@media(max-width:720px){.pwa-status{display:none}}
  `;
  document.head.append(style);

  let installPrompt = null;

  function ensureUi() {
    const actions = document.querySelector(".topbar-actions");
    if (!actions) return;
    if (!actions.querySelector(".pwa-status")) {
      const status = document.createElement("span");
      status.className = "pwa-status";
      status.dataset.state = navigator.onLine ? "online" : "offline";
      status.textContent = navigator.onLine ? "Online" : "Offline mode";
      actions.prepend(status);
    }
    if (!actions.querySelector(".pwa-install")) {
      const install = document.createElement("button");
      install.type = "button";
      install.className = "button secondary pwa-install";
      install.textContent = "Install app";
      install.addEventListener("click", async () => {
        if (!installPrompt) return;
        installPrompt.prompt();
        await installPrompt.userChoice;
        installPrompt = null;
        install.classList.remove("is-visible");
      });
      actions.append(install);
    }
  }

  function updateStatus() {
    ensureUi();
    const status = document.querySelector(".pwa-status");
    if (!status) return;
    status.dataset.state = navigator.onLine ? "online" : "offline";
    status.textContent = navigator.onLine ? "Online" : "Offline mode";
  }

  addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    ensureUi();
    document.querySelector(".pwa-install")?.classList.add("is-visible");
  });
  addEventListener("appinstalled", () => {
    installPrompt = null;
    document.querySelector(".pwa-install")?.classList.remove("is-visible");
    if (typeof toast === "function") toast("SlipTrace installed");
  });
  addEventListener("online", updateStatus);
  addEventListener("offline", updateStatus);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch((error) => console.warn("SlipTrace service worker:", error));
  }

  ensureUi();
  updateStatus();
})();