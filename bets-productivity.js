(() => {
  if (globalThis.__edgeLogBetsProductivity || typeof bets === "undefined") return;
  globalThis.__edgeLogBetsProductivity = true;

  const TABLE_PREFS_KEY = "edgelog-table-preferences-v1";
  const HIDDEN_SYNC_KEY = "edgelog-hidden-sync-ids";
  const selected = new Set();
  let detailBetId = "";

  const style = document.createElement("style");
  style.textContent = `
    .bulk-select-cell{display:inline-flex;align-items:center;gap:7px;white-space:nowrap}.bulk-select-cell input{width:16px;height:16px;margin:0}
    .bulk-toolbar{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 13px;border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:var(--panel-soft)}
    .bulk-toolbar__left,.bulk-toolbar__right{display:flex;align-items:center;gap:8px;flex-wrap:wrap}.bulk-toolbar__count{color:var(--muted);font-size:.75rem;font-weight:780}.bulk-toolbar button:disabled{opacity:.42;cursor:not-allowed}
    .bet-detail-dialog,.bulk-edit-dialog,.table-view-dialog{width:min(680px,calc(100vw - 28px));max-height:calc(100vh - 28px);padding:0;border:0;border-radius:20px;background:transparent}.bet-detail-dialog::backdrop,.bulk-edit-dialog::backdrop,.table-view-dialog::backdrop{background:rgba(4,10,22,.68);backdrop-filter:blur(6px)}
    .productivity-dialog-shell{padding:20px;border:1px solid var(--line);border-radius:20px;background:var(--panel);color:var(--text);box-shadow:var(--shadow)}.productivity-dialog-heading{display:flex;align-items:flex-start;justify-content:space-between;gap:14px;margin-bottom:16px}.productivity-dialog-heading h2{margin:3px 0 0}.productivity-dialog-actions{display:flex;justify-content:flex-end;gap:9px;flex-wrap:wrap;margin-top:17px}
    .bet-detail-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.bet-detail-item{padding:12px;border:1px solid var(--line);border-radius:12px;background:var(--panel-soft)}.bet-detail-item--wide{grid-column:1/-1}.bet-detail-item span{display:block;color:var(--muted);font-size:.65rem;font-weight:820;letter-spacing:.07em;text-transform:uppercase}.bet-detail-item strong,.bet-detail-item p{display:block;margin:6px 0 0;font-size:.8rem;line-height:1.5;word-break:break-word}
    .bulk-edit-grid,.table-view-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:11px}.bulk-edit-field{display:grid;grid-template-columns:auto 1fr;align-items:center;gap:8px;padding:11px;border:1px solid var(--line);border-radius:12px;background:var(--panel-soft)}.bulk-edit-field input[type=checkbox]{width:17px;height:17px}.bulk-edit-field label{display:grid;gap:6px;font-size:.75rem;font-weight:780}
    .table-view-option{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px;border:1px solid var(--line);border-radius:12px;background:var(--panel-soft);font-size:.78rem;font-weight:780}.table-view-option input{width:17px;height:17px}
    table.is-compact th,table.is-compact td{padding-top:7px!important;padding-bottom:7px!important;font-size:.74rem}table.is-compact .event-copy small,table.is-compact td small{font-size:.64rem}
    .import-review-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.import-review-field{display:grid;gap:5px}.import-review-field--wide{grid-column:1/-1}.import-review-field span{color:var(--muted);font-size:.64rem;font-weight:820;text-transform:uppercase;letter-spacing:.06em}.import-review-field input,.import-review-field select{width:100%;min-height:36px;padding:7px 9px;border:1px solid var(--line);border-radius:9px;background:var(--panel);color:var(--text)}.import-review-field.is-missing input{border-color:var(--red);background:var(--red-soft)}.import-review-note{grid-column:1/-1;margin:3px 0 0;color:var(--muted);font-size:.68rem;line-height:1.4}
    .bet-row-clickable{cursor:pointer}.bet-row-clickable:hover td{background:color-mix(in srgb,var(--blue) 4%,transparent)}
    @media(max-width:760px){.bulk-toolbar{align-items:stretch;flex-direction:column}.bulk-toolbar__right{display:grid;grid-template-columns:1fr 1fr}.bet-detail-grid,.bulk-edit-grid,.table-view-grid,.import-review-grid{grid-template-columns:1fr}.import-review-field--wide,.bet-detail-item--wide{grid-column:auto}.productivity-dialog-actions{display:grid}.productivity-dialog-actions .button{width:100%}}
  `;
  document.head.append(style);

  function loadPrefs() {
    try {
      const value = JSON.parse(localStorage.getItem(TABLE_PREFS_KEY));
      return { density: value?.density === "compact" ? "compact" : "comfortable", hidden: Array.isArray(value?.hidden) ? value.hidden : [] };
    } catch { return { density: "comfortable", hidden: [] }; }
  }
  let prefs = loadPrefs();
  function savePrefs(){localStorage.setItem(TABLE_PREFS_KEY,JSON.stringify(prefs));}

  function ensureDialogs() {
    if (!document.querySelector("#betDetailDialog")) {
      const dialog=document.createElement("dialog");dialog.id="betDetailDialog";dialog.className="bet-detail-dialog";dialog.innerHTML=`<div class="productivity-dialog-shell"><div class="productivity-dialog-heading"><div><p class="panel-kicker">BET DETAILS</p><h2 id="betDetailTitle">Bet details</h2></div><button class="icon-button" type="button" data-close-productivity>×</button></div><div id="betDetailGrid" class="bet-detail-grid"></div><div class="productivity-dialog-actions"><button id="betDetailDelete" class="button subtle" type="button">Delete</button><button id="betDetailEdit" class="button primary" type="button">Edit bet</button></div></div>`;document.body.append(dialog);
      dialog.addEventListener("click",(event)=>{if(event.target===dialog||event.target.closest("[data-close-productivity]"))dialog.close();});
      dialog.querySelector("#betDetailEdit").addEventListener("click",()=>{const bet=bets.find((item)=>item.id===detailBetId);dialog.close();if(bet&&globalThis.openEdgeLogManualBet)globalThis.openEdgeLogManualBet(bet);});
      dialog.querySelector("#betDetailDelete").addEventListener("click",()=>{const bet=bets.find((item)=>item.id===detailBetId);if(!bet||!confirm(`Delete ${bet.event} — ${bet.bet}?`))return;deleteBets([bet]);dialog.close();});
    }
    if (!document.querySelector("#bulkEditDialog")) {
      const dialog=document.createElement("dialog");dialog.id="bulkEditDialog";dialog.className="bulk-edit-dialog";dialog.innerHTML=`<form id="bulkEditForm" class="productivity-dialog-shell"><div class="productivity-dialog-heading"><div><p class="panel-kicker">BULK EDIT</p><h2>Edit selected bets</h2><p class="panel-copy">Enable only the fields you want to replace.</p></div><button class="icon-button" type="button" data-close-productivity>×</button></div><div class="bulk-edit-grid"><div class="bulk-edit-field"><input id="bulkBookmakerEnabled" type="checkbox"><label>Bookmaker<input id="bulkBookmaker" placeholder="e.g. Pinnacle"></label></div><div class="bulk-edit-field"><input id="bulkMarketEnabled" type="checkbox"><label>Market type<input id="bulkMarket" placeholder="e.g. Totals"></label></div><div class="bulk-edit-field"><input id="bulkTimingEnabled" type="checkbox"><label>Timing<select id="bulkTiming"><option value="">Unspecified</option><option value="prematch">Pre-match</option><option value="live">Live</option></select></label></div><div class="bulk-edit-field"><input id="bulkTagsEnabled" type="checkbox"><label>Strategy tags<input id="bulkTags" placeholder="value, live-read"></label></div></div><div class="productivity-dialog-actions"><button class="button secondary" type="button" data-close-productivity>Cancel</button><button class="button primary" type="submit">Apply changes</button></div></form>`;document.body.append(dialog);
      dialog.addEventListener("click",(event)=>{if(event.target===dialog||event.target.closest("[data-close-productivity]"))dialog.close();});
      dialog.querySelector("#bulkEditForm").addEventListener("submit",(event)=>{event.preventDefault();applyBulkEdit();dialog.close();});
    }
    if (!document.querySelector("#tableViewDialog")) {
      const dialog=document.createElement("dialog");dialog.id="tableViewDialog";dialog.className="table-view-dialog";dialog.innerHTML=`<div class="productivity-dialog-shell"><div class="productivity-dialog-heading"><div><p class="panel-kicker">TABLE VIEW</p><h2>Density and visible columns</h2></div><button class="icon-button" type="button" data-close-productivity>×</button></div><div class="table-view-grid"><label class="table-view-option"><span>Compact rows</span><input id="tableCompact" type="checkbox"></label>${[["event","Event"],["bet","Bet"],["odds","Odds"],["stake","Stake"],["status","Status"],["result","Result"],["pl","P/L"],["actions","Actions"]].map(([key,label])=>`<label class="table-view-option"><span>${label}</span><input type="checkbox" data-column-key="${key}" checked></label>`).join("")}</div><div class="productivity-dialog-actions"><button id="tableViewReset" class="button secondary" type="button">Reset</button><button class="button primary" type="button" data-close-productivity>Done</button></div></div>`;document.body.append(dialog);
      dialog.addEventListener("click",(event)=>{if(event.target===dialog||event.target.closest("[data-close-productivity]"))dialog.close();});
      dialog.querySelector("#tableCompact").addEventListener("change",(event)=>{prefs.density=event.target.checked?"compact":"comfortable";savePrefs();applyTablePrefs();});
      dialog.querySelectorAll("[data-column-key]").forEach((input)=>input.addEventListener("change",()=>{const key=input.dataset.columnKey;prefs.hidden=input.checked?prefs.hidden.filter((item)=>item!==key):[...new Set([...prefs.hidden,key])];savePrefs();applyTablePrefs();}));
      dialog.querySelector("#tableViewReset").addEventListener("click",()=>{prefs={density:"comfortable",hidden:[]};savePrefs();syncTableDialog();applyTablePrefs();});
    }
  }

  function detailValue(label,value,wide=false){return `<div class="bet-detail-item ${wide?"bet-detail-item--wide":""}"><span>${escapeHtml(label)}</span>${wide?`<p>${escapeHtml(value||"—")}</p>`:`<strong>${escapeHtml(value||"—")}</strong>`}</div>`;}
  function openDetails(bet){ensureDialogs();detailBetId=bet.id;document.querySelector("#betDetailTitle").textContent=bet.event||"Bet details";const pl=profitLoss(bet);document.querySelector("#betDetailGrid").innerHTML=[detailValue("Selection",bet.bet,true),detailValue("League",bet.league),detailValue("Status",statusLabel(bet.status)),detailValue("Odds",formatOdds(bet.odds)),detailValue("Stake",`${formatUnits(bet.stakeVnd)} · ${formatVnd(bet.stakeVnd)}`),detailValue("Result",bet.result),detailValue("P/L",bet.status==="pending"?"Pending":`${formatUnits(pl,true)} · ${formatVnd(pl,true)}`),detailValue("Event date",formatDate(bet.eventDate)),detailValue("Bookmaker",bet.bookmaker),detailValue("Market",bet.marketType),detailValue("Timing",bet.timing==="live"?"Live":bet.timing==="prematch"?"Pre-match":""),detailValue("Tags",Array.isArray(bet.tags)?bet.tags.join(", "):bet.tags),detailValue("Notes",bet.notes,true)].join("");document.querySelector("#betDetailDialog").showModal();}

  function hiddenSyncIds(){try{const value=JSON.parse(localStorage.getItem(HIDDEN_SYNC_KEY));return new Set(Array.isArray(value)?value:[]);}catch{return new Set();}}
  function deleteBets(items){const ids=new Set(items.map((bet)=>bet.id));const hidden=hiddenSyncIds();items.forEach((bet)=>{if(bet._syncId)hidden.add(bet._syncId);});bets=bets.filter((bet)=>!ids.has(bet.id));localStorage.setItem(HIDDEN_SYNC_KEY,JSON.stringify([...hidden]));persist();selected.clear();render();toast(`${items.length} bet${items.length===1?"":"s"} deleted`);}

  function ensureBulkToolbar(){const body=document.querySelector("#betsTableBody");if(!body||document.querySelector("#bulkToolbar"))return;const wrap=body.closest(".table-wrap");if(!wrap)return;const toolbar=document.createElement("div");toolbar.id="bulkToolbar";toolbar.className="bulk-toolbar";toolbar.innerHTML=`<div class="bulk-toolbar__left"><strong id="bulkCount" class="bulk-toolbar__count">0 selected</strong><button id="bulkClear" class="button subtle" type="button" disabled>Clear</button></div><div class="bulk-toolbar__right"><button id="tableViewButton" class="button secondary" type="button">Table view</button><button id="bulkEditButton" class="button secondary" type="button" disabled>Edit metadata</button><button id="bulkSettleButton" class="button secondary" type="button" disabled>Settle</button><button id="bulkDeleteButton" class="button subtle" type="button" disabled>Delete</button></div>`;wrap.before(toolbar);
    toolbar.querySelector("#bulkClear").addEventListener("click",()=>{selected.clear();syncSelection();});
    toolbar.querySelector("#tableViewButton").addEventListener("click",()=>{ensureDialogs();syncTableDialog();document.querySelector("#tableViewDialog").showModal();});
    toolbar.querySelector("#bulkEditButton").addEventListener("click",()=>{ensureDialogs();document.querySelector("#bulkEditDialog").showModal();});
    toolbar.querySelector("#bulkSettleButton").addEventListener("click",bulkSettle);
    toolbar.querySelector("#bulkDeleteButton").addEventListener("click",()=>{const items=selectedBets();if(items.length&&confirm(`Delete ${items.length} selected bet${items.length===1?"":"s"}?`))deleteBets(items);});
  }

  function selectedBets(){return bets.filter((bet)=>selected.has(bet.id));}
  function syncSelection(){document.querySelectorAll("[data-bulk-select]").forEach((input)=>{input.checked=selected.has(input.dataset.bulkSelect);});const count=selected.size;const label=document.querySelector("#bulkCount");if(label)label.textContent=`${count} selected`;["bulkClear","bulkEditButton","bulkSettleButton","bulkDeleteButton"].forEach((id)=>{const button=document.querySelector(`#${id}`);if(button)button.disabled=!count;});const all=document.querySelector("#bulkSelectAll");if(all){const visible=[...document.querySelectorAll("#betsTableBody [data-bulk-select]")].filter((input)=>!input.closest("tr")?.hidden);all.checked=visible.length>0&&visible.every((input)=>selected.has(input.dataset.bulkSelect));all.indeterminate=visible.some((input)=>selected.has(input.dataset.bulkSelect))&&!all.checked;}}

  function bulkSettle(){const items=selectedBets();if(!items.length)return;const status=prompt("Settlement status: win, half-win, loss, half-loss, or void","win");if(!["win","half-win","loss","half-loss","void"].includes(status||"")){if(status!==null)alert("Invalid settlement status.");return;}const result=prompt("Result or score (optional)","")||"";const now=new Date().toISOString();items.forEach((bet)=>{bet.status=status;bet.result=result||bet.result||"";bet.settledAt=bet.settledAt||now;bet._localEditedAt=now;});persist();selected.clear();render();toast(`${items.length} bet${items.length===1?"":"s"} settled`);}

  function applyBulkEdit(){const items=selectedBets();if(!items.length)return;const enabled=(id)=>document.querySelector(`#${id}`)?.checked;const now=new Date().toISOString();items.forEach((bet)=>{if(enabled("bulkBookmakerEnabled"))bet.bookmaker=document.querySelector("#bulkBookmaker").value.trim();if(enabled("bulkMarketEnabled"))bet.marketType=document.querySelector("#bulkMarket").value.trim();if(enabled("bulkTimingEnabled"))bet.timing=document.querySelector("#bulkTiming").value;if(enabled("bulkTagsEnabled")){const raw=document.querySelector("#bulkTags").value;bet.tags=globalThis.EdgeLogMetadata?.normalizeTags?globalThis.EdgeLogMetadata.normalizeTags(raw):raw.split(/[,;#]/).map((tag)=>tag.trim()).filter(Boolean);}bet._localEditedAt=now;});persist();selected.clear();render();toast(`${items.length} bet${items.length===1?"":"s"} updated`);}

  const columnMap={event:2,bet:3,odds:4,stake:5,status:6,result:7,pl:8,actions:9};
  function applyTablePrefs(){const table=document.querySelector("#betsTableBody")?.closest("table");if(!table)return;table.classList.toggle("is-compact",prefs.density==="compact");Object.entries(columnMap).forEach(([key,index])=>{table.querySelectorAll(`tr > :nth-child(${index})`).forEach((cell)=>{cell.hidden=prefs.hidden.includes(key);});});syncTableDialog();}
  function syncTableDialog(){const dialog=document.querySelector("#tableViewDialog");if(!dialog)return;dialog.querySelector("#tableCompact").checked=prefs.density==="compact";dialog.querySelectorAll("[data-column-key]").forEach((input)=>{input.checked=!prefs.hidden.includes(input.dataset.columnKey);});}

  function enhanceHeader(){const table=document.querySelector("#betsTableBody")?.closest("table");const first=table?.querySelector("thead th");if(first&&!first.querySelector("#bulkSelectAll")){first.innerHTML=`<label class="bulk-select-cell"><input id="bulkSelectAll" type="checkbox" aria-label="Select all visible bets"><span>#</span></label>`;first.querySelector("input").addEventListener("change",(event)=>{document.querySelectorAll("#betsTableBody tr:not([hidden]) [data-bulk-select]").forEach((input)=>event.target.checked?selected.add(input.dataset.bulkSelect):selected.delete(input.dataset.bulkSelect));syncSelection();});}}

  if(typeof betRow==="function"){
    const previousBetRow=betRow;
    betRow=function productivityBetRow(bet,index,actions=true){let html=previousBetRow(bet,index,actions);if(!actions)return html;html=html.replace("<tr",`<tr class="bet-row-clickable" data-bet-id="${escapeHtml(bet.id)}"`);html=html.replace(/<td>([\s\S]*?)<\/td>/,`<td><label class="bulk-select-cell"><input type="checkbox" data-bulk-select="${escapeHtml(bet.id)}" aria-label="Select ${escapeHtml(bet.event)}"><span>$1</span></label></td>`);return html;};
  }

  function renderImportReview(confidence=0){const list=document.querySelector("#detectedFields");if(!list)return;if(!detectedBet){list.innerHTML='<div class="detected-placeholder">Paste a slip to preview and edit detected fields.</div>';return;}const required=["event","bet","odds","stakeVnd"];const field=(key,label,type="text",wide=false)=>{const value=detectedBet[key]??"";const missing=required.includes(key)&&(!value||(key==="odds"&&Number(value)<=1)||(key==="stakeVnd"&&Number(value)<=0));return `<label class="import-review-field ${wide?"import-review-field--wide":""} ${missing?"is-missing":""}"><span>${label}</span><input data-import-field="${key}" type="${type}" value="${escapeHtml(value)}"></label>`;};list.innerHTML=`<div class="import-review-grid">${field("event","Event","text",true)}${field("league","League")}${field("bet","Selection","text",true)}${field("odds","Odds","number")}${field("stakeVnd","Stake VND","number")}<label class="import-review-field"><span>Status</span><select data-import-field="status">${["pending","win","half-win","loss","half-loss","void"].map((value)=>`<option value="${value}" ${detectedBet.status===value?"selected":""}>${statusLabel(value)}</option>`).join("")}</select></label>${field("result","Result / score")}${field("eventDate","Event date","datetime-local")}<p class="import-review-note">Red fields are required or need correction before saving. All values remain editable.</p></div>`;
    list.querySelectorAll("[data-import-field]").forEach((input)=>input.addEventListener("input",()=>{const key=input.dataset.importField;detectedBet[key]=["odds","stakeVnd"].includes(key)?Number(input.value||0):input.value;renderDetected(confidence);}));
  }

  if(typeof renderDetected==="function"){
    const previousDetected=renderDetected;
    renderDetected=function editableDetected(confidence=0){const result=previousDetected(confidence);renderImportReview(confidence);return result;};
  }

  if(typeof renderTables==="function"){
    const previousTables=renderTables;
    renderTables=function productivityTables(...args){const result=previousTables(...args);ensureBulkToolbar();enhanceHeader();applyTablePrefs();syncSelection();return result;};
  }

  document.addEventListener("change",(event)=>{const input=event.target.closest("[data-bulk-select]");if(!input)return;input.checked?selected.add(input.dataset.bulkSelect):selected.delete(input.dataset.bulkSelect);syncSelection();});
  document.addEventListener("click",(event)=>{const row=event.target.closest("#betsTableBody tr[data-bet-id]");if(!row||event.target.closest("button,a,input,label,select"))return;const bet=bets.find((item)=>item.id===row.dataset.betId);if(bet)openDetails(bet);});

  ensureDialogs();
  if(document.querySelector("#betsTableBody")){ensureBulkToolbar();enhanceHeader();renderTables();}
  if(document.querySelector("#detectedFields"))renderDetected(detectedBet?80:0);
})();