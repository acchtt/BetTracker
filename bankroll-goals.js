(() => {
  if (globalThis.__edgeLogBankrollGoals || typeof bets === "undefined") return;
  globalThis.__edgeLogBankrollGoals = true;

  const TRANSACTION_KEY = "edgelog-bankroll-transactions-v1";

  const style = document.createElement("style");
  style.textContent = `
    .bankroll-goal-panel{margin:0 0 16px;padding:20px 22px}.bankroll-goal-heading{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;margin-bottom:16px}.bankroll-goal-heading h2{margin:3px 0 0}.bankroll-goal-grid{display:grid;grid-template-columns:minmax(240px,.8fr) minmax(0,1.2fr);gap:16px}.bankroll-goal-form{display:grid;gap:8px;padding:15px;border:1px solid var(--line);border-radius:14px;background:var(--panel-soft)}.bankroll-goal-form label{font-size:.75rem;font-weight:800}.bankroll-goal-form__row{display:flex;gap:8px}.bankroll-goal-form__row input{width:100%}.bankroll-goal-status{padding:15px;border:1px solid var(--line);border-radius:14px;background:var(--panel-soft)}.bankroll-goal-status__top{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}.bankroll-goal-status__top span{color:var(--muted);font-size:.68rem;font-weight:820;text-transform:uppercase;letter-spacing:.07em}.bankroll-goal-status__top strong{display:block;margin-top:6px;font-size:1.2rem;letter-spacing:-.035em}.bankroll-goal-status__percent{font-size:1rem!important;color:var(--blue)!important}.bankroll-goal-bar{height:10px;margin-top:15px;overflow:hidden;border-radius:999px;background:var(--line)}.bankroll-goal-bar__fill{height:100%;border-radius:inherit;background:linear-gradient(90deg,var(--blue),var(--purple));transition:width .3s ease}.bankroll-goal-meta{display:flex;justify-content:space-between;gap:12px;margin-top:9px;color:var(--muted);font-size:.71rem;line-height:1.4}.bankroll-goal-achieved{color:var(--green)!important}
    @media(max-width:800px){.bankroll-goal-panel{padding:17px}.bankroll-goal-heading{flex-direction:column}.bankroll-goal-grid{grid-template-columns:1fr}.bankroll-goal-meta{flex-direction:column}}
  `;
  document.head.append(style);

  function transactions() {
    try { const value=JSON.parse(localStorage.getItem(TRANSACTION_KEY)); return Array.isArray(value)?value:[]; }
    catch { return []; }
  }

  function cashNet() {
    return transactions().reduce((sum,item)=>sum+(item?.type==="withdrawal"?-1:1)*Math.max(0,Number(item?.amountVnd||0)),0);
  }

  function currentBankroll() {
    const settled=bets.filter((bet)=>bet.status!=="pending").reduce((sum,bet)=>sum+Number(profitLoss(bet)||0),0);
    return Number(settings.startingBankroll||0)+cashNet()+settled;
  }

  function ensurePanel() {
    if (!document.body.classList.contains("bankroll-page")) return null;
    let panel=document.querySelector("#bankrollGoalPanel");
    if(panel)return panel;
    const summary=document.querySelector(".bankroll-summary-grid");
    if(!summary?.parentNode)return null;
    panel=document.createElement("section");panel.id="bankrollGoalPanel";panel.className="panel bankroll-goal-panel";panel.innerHTML=`<div class="bankroll-goal-heading"><div><p class="panel-kicker">BANKROLL GOAL</p><h2>Target progress</h2><p class="panel-copy">Set a target balance and track how much profit remains.</p></div></div><div class="bankroll-goal-grid"><div class="bankroll-goal-form"><label for="bankrollGoalInput">Target bankroll (VND)</label><div class="bankroll-goal-form__row"><input id="bankrollGoalInput" type="number" min="0" step="1000" placeholder="10000000"><button id="bankrollGoalSave" class="button primary" type="button">Save</button></div><small style="color:var(--muted);font-size:.7rem;line-height:1.4">Set the target to 0 to clear it. The goal stays in this browser and is included with settings backups.</small></div><div class="bankroll-goal-status"><div class="bankroll-goal-status__top"><div><span>Current balance</span><strong id="bankrollGoalCurrent">0 VND</strong></div><strong id="bankrollGoalPercent" class="bankroll-goal-status__percent">0.0%</strong></div><div class="bankroll-goal-bar"><div id="bankrollGoalFill" class="bankroll-goal-bar__fill" style="width:0%"></div></div><div class="bankroll-goal-meta"><span id="bankrollGoalTarget">No target set</span><span id="bankrollGoalRemaining">Set a target to begin tracking</span></div></div></div>`;
    summary.after(panel);
    panel.querySelector("#bankrollGoalSave").addEventListener("click",()=>{settings.bankrollGoalVnd=Math.max(0,Number(panel.querySelector("#bankrollGoalInput").value)||0);persist();renderGoal();toast(settings.bankrollGoalVnd?"Bankroll goal saved":"Bankroll goal cleared");});
    return panel;
  }

  function renderGoal() {
    const panel=ensurePanel();if(!panel)return;
    const current=currentBankroll();const target=Math.max(0,Number(settings.bankrollGoalVnd||0));const progress=target>0?Math.max(0,Math.min(100,(current/target)*100)):0;const remaining=Math.max(0,target-current);
    const input=panel.querySelector("#bankrollGoalInput");if(input&&document.activeElement!==input)input.value=target||"";
    panel.querySelector("#bankrollGoalCurrent").textContent=formatVnd(current);
    panel.querySelector("#bankrollGoalPercent").textContent=target?`${progress.toFixed(1)}%`:"—";
    panel.querySelector("#bankrollGoalPercent").classList.toggle("bankroll-goal-achieved",target>0&&current>=target);
    panel.querySelector("#bankrollGoalFill").style.width=`${progress}%`;
    panel.querySelector("#bankrollGoalTarget").textContent=target?`Target ${formatVnd(target)}`:"No target set";
    panel.querySelector("#bankrollGoalRemaining").textContent=!target?"Set a target to begin tracking":current>=target?`Goal exceeded by ${formatVnd(current-target)}`:`${formatVnd(remaining)} remaining`;
  }

  if(typeof render==="function"){
    const previous=render;
    render=function bankrollGoalRender(...args){const result=previous(...args);renderGoal();return result;};
  }
  addEventListener("storage",(event)=>{if([STORAGE_KEY,SETTINGS_KEY,TRANSACTION_KEY].includes(event.key))renderGoal();});
  ensurePanel();renderGoal();
})();