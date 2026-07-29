const CACHE_NAME = "sliptrace-shell-20260729-5";

const CORE_SHELL = [
  "./",
  "./index.html",
  "./bets.html",
  "./analytics.html",
  "./calendar.html",
  "./reports.html",
  "./bankroll.html",
  "./settings.html",
  "./help.html",
  "./manifest.webmanifest",
  "./dashboard.css",
  "./sliptrace-brand.css?v=20260727-3",
  "./sliptrace-brand.css?v=20260727-1",
  "./sliptrace-brand.js?v=20260727-3",
  "./dashboard-home.css?v=20260727-1",
  "./analytics-v2.css",
  "./bankroll-v2.css",
  "./app-v3.js",
  "./parser-popup.js",
  "./parser-popup.js?v=20260729-1",
  "./latest-bets.js?v=20260729-5",
  "./pwa.js?v=20260728-1",
  "./assets/sliptrace-mark.svg",
  "./assets/sliptrace-mark.svg?v=20260727-3",
  "./assets/sliptrace-app-icon.svg",
  "./assets/sliptrace-app-icon.svg?v=20260727-3"
];

const OPTIONAL_SHELL = [
  "./bet-metadata.js?v=20260727-1",
  "./bet-metadata-fixes.js?v=20260727-1",
  "./backup-v2.js?v=20260727-1",
  "./csv-export-v2.js?v=20260727-4",
  "./risk-guardrails.js?v=20260727-1",
  "./duplicate-check.js?v=20260727-1",
  "./sport-detection-patch.js?v=20260727-1",
  "./live-sync.js?v=20260729-1",
  "./manual-popup.js?v=20260729-1",
  "./logo-home-link.js?v=20260727-1",
  "./quick-settlement.js?v=20260727-2",
  "./mobile-history.js?v=20260727-1",
  "./reporting-suite.js?v=20260727-1",
  "./bets-productivity.js?v=20260727-1",
  "./bankroll-goals.js?v=20260727-1",
  "./bets-workspace.js?v=20260727-1",
  "./import-review-fix.js?v=20260727-1",
  "./parser-image-ocr.js",
  "./bankroll-v2.js",
  "./analytics-v2.js",
  "./analytics-dimensions.js?v=20260727-2",
  "./pwa-diagnostics.js?v=20260728-1",
  "./assets/sliptrace-horizontal-dark.svg?v=20260727-3"
];

async function cacheOptionalFiles(cache) {
  await Promise.allSettled(OPTIONAL_SHELL.map(async (url) => {
    const response = await fetch(url, { cache: "reload" });
    if (!response.ok) throw new Error(`${url} returned ${response.status}`);
    await cache.put(url, response);
  }));
}

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(CORE_SHELL);
    await cacheOptionalFiles(cache);
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

function pathRequest(url) {
  return new Request(`${url.origin}${url.pathname}`, { method: "GET" });
}

async function navigationResponse(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(pathRequest(new URL(request.url)), response.clone());
    }
    return response;
  } catch {
    const url = new URL(request.url);
    return (await caches.match(request))
      || (await caches.match(pathRequest(url)))
      || (await caches.match("./index.html"));
  }
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, response.clone());
    }
    return response;
  } catch {
    return caches.match(request);
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) {
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, response.clone());
  }
  return response;
}

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === "navigate") {
    event.respondWith(navigationResponse(event.request));
    return;
  }

  if (url.pathname.endsWith("/ledger.json") || url.pathname.endsWith("/manifest.webmanifest")) {
    event.respondWith(networkFirst(event.request));
    return;
  }

  event.respondWith(cacheFirst(event.request));
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
});