(() => {
  if (globalThis.__slipTracePwa) return;
  globalThis.__slipTracePwa = true;

  const VERSION = "20260728-1";
  const MANIFEST_URL = "manifest.webmanifest";
  const SERVICE_WORKER_URL = `./sw.js?v=${VERSION}`;
  const APP_ICON_URL = "assets/sliptrace-app-icon.svg?v=20260727-3";
  const isStandalone = () => matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;

  function ensureHeadMetadata() {
    if (!document.querySelector('link[rel="manifest"]')) {
      const manifest = document.createElement("link");
      manifest.rel = "manifest";
      manifest.href = MANIFEST_URL;
      document.head.append(manifest);
    }

    if (!document.querySelector('link[rel="apple-touch-icon"]')) {
      const appleIcon = document.createElement("link");
      appleIcon.rel = "apple-touch-icon";
      appleIcon.href = APP_ICON_URL;
      document.head.append(appleIcon);
    }

    const metaValues = {
      "mobile-web-app-capable": "yes",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black-translucent",
      "apple-mobile-web-app-title": "SlipTrace"
    };
    Object.entries(metaValues).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = name;
        document.head.append(meta);
      }
      meta.content = content;
    });
  }

  if (!document.querySelector('script[src^="import-review-fix.js"]')) {
    const importFix = document.createElement("script");
    importFix.src = "import-review-fix.js?v=20260727-1";
    document.body.append(importFix);
  }

  const style = document.createElement("style");
  style.textContent = `
    .pwa-status{display:inline-flex;align-items:center;gap:7px;min-height:34px;padding:7px 10px;border:1px solid var(--line);border-radius:10px;background:var(--panel);color:var(--muted);font-size:.74rem;font-weight:760;white-space:nowrap}.pwa-status::before{content:"";width:7px;height:7px;border-radius:999px;background:var(--green)}.pwa-status[data-state="offline"]::before{background:var(--amber)}.pwa-status[data-state="installed"]::before{background:var(--cyan)}.pwa-install{display:none}.pwa-install.is-visible{display:inline-flex}@media(max-width:720px){.pwa-status{display:none}}
  `;
  document.head.append(style);

  let installPrompt = null;
  let registration = null;

  function isIos() {
    return /iphone|ipad|ipod/i.test(navigator.userAgent) && !globalThis.MSStream;
  }

  function ensureUi() {
    const actions = document.querySelector(".topbar-actions");
    if (!actions) return;

    let status = actions.querySelector(".pwa-status");
    if (!status) {
      status = document.createElement("span");
      status.className = "pwa-status";
      actions.prepend(status);
    }

    let install = actions.querySelector(".pwa-install");
    if (!install) {
      install = document.createElement("button");
      install.type = "button";
      install.className = "button secondary pwa-install";
      install.textContent = "Install app";
      install.addEventListener("click", async () => {
        if (installPrompt) {
          installPrompt.prompt();
          const choice = await installPrompt.userChoice;
          if (choice.outcome === "accepted") installPrompt = null;
          updateUi();
          return;
        }
        if (isIos() && !isStandalone()) {
          alert("To install SlipTrace on iPhone or iPad: open the Share menu in Safari, then choose Add to Home Screen.");
        }
      });
      actions.append(install);
    }

    updateUi();
  }

  function updateUi() {
    const status = document.querySelector(".pwa-status");
    const install = document.querySelector(".pwa-install");
    const installed = isStandalone();

    if (status) {
      status.dataset.state = installed ? "installed" : navigator.onLine ? "online" : "offline";
      status.textContent = installed ? "Installed app" : navigator.onLine ? "Online" : "Offline mode";
    }

    if (install) {
      const canOfferIosInstructions = isIos() && !installed;
      install.classList.toggle("is-visible", !installed && Boolean(installPrompt || canOfferIosInstructions));
    }
  }

  async function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return null;
    try {
      registration = await navigator.serviceWorker.register(SERVICE_WORKER_URL, {
        scope: "./",
        updateViaCache: "none"
      });
      await registration.update().catch(() => {});

      if (registration.waiting) registration.waiting.postMessage({ type: "SKIP_WAITING" });
      registration.addEventListener("updatefound", () => {
        const worker = registration.installing;
        worker?.addEventListener("statechange", () => {
          if (worker.state === "installed" && navigator.serviceWorker.controller) {
            registration.waiting?.postMessage({ type: "SKIP_WAITING" });
          }
        });
      });
      return registration;
    } catch (error) {
      console.warn("SlipTrace service worker:", error);
      return null;
    }
  }

  ensureHeadMetadata();
  ensureUi();

  addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    ensureUi();
  });

  addEventListener("appinstalled", () => {
    installPrompt = null;
    updateUi();
    if (typeof toast === "function") toast("SlipTrace installed");
  });
  addEventListener("online", updateUi);
  addEventListener("offline", updateUi);
  matchMedia("(display-mode: standalone)").addEventListener?.("change", updateUi);

  navigator.serviceWorker?.addEventListener("controllerchange", () => {
    updateUi();
    dispatchEvent(new CustomEvent("sliptrace:pwa-controller-change"));
  });

  const registrationPromise = registerServiceWorker();
  globalThis.SlipTracePWA = {
    version: VERSION,
    isStandalone,
    get registration() { return registration; },
    registrationPromise,
    updateUi
  };
})();