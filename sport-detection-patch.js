(() => {
  if (typeof detectSport !== "function" || globalThis.__edgeLogNorwaySoccerPatch) return;
  globalThis.__edgeLogNorwaySoccerPatch = true;

  const originalDetectSport = detectSport;
  const norwegianSoccerTokens = [
    "eliteserien",
    "norway eliteserien",
    "norwegian eliteserien",
    "norwegian premier league",
    "obos-ligaen",
    "obos ligaen",
    "obosligaen",
    "norway division 1",
    "norwegian division 1",
    "norway 1st division",
    "1. divisjon",
    "postnord-ligaen",
    "postnord ligaen",
    "norway division 2",
    "norwegian division 2",
    "2. divisjon",
    "norsk tipping-ligaen",
    "norsk tipping ligaen",
    "toppserien",
    "norwegian cup",
    "norway cup",
    "nm cup",
    "nm cupen",
    "norgesmesterskapet",
    "bodo/glimt",
    "bodo glimt",
    "molde fk",
    "rosenborg",
    "sk brann",
    "viking fk",
    "tromso",
    "valerenga",
    "stromsgodset",
    "sarpsborg 08",
    "fk haugesund",
    "fredrikstad fk",
    "hamkam",
    "sandefjord fotball",
    "kristiansund bk"
  ];

  detectSport = function patchedDetectSport(bet) {
    const text = ` ${normalize(`${bet?.league || ""} ${bet?.event || ""} ${bet?.bet || ""}`).toLowerCase()} `;
    if (norwegianSoccerTokens.some((token) => text.includes(token))) {
      return { key: "soccer", label: "Soccer" };
    }
    return originalDetectSport(bet);
  };

  if (typeof render === "function") render();
})();