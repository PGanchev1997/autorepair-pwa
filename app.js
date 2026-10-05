const DB = {
  "BMW": {
    "3 Series E90": { years:[2005,2006,2007,2008,2009,2010,2011,2012], engines:[["2.0 Diesel","N47D20","177 к.с.","Дизел"],["2.0 Petrol","N43B20","170 к.с.","Бензин"]] },
    "5 Series E60": { years:[2004,2005,2006,2007,2008,2009,2010], engines:[["2.0 Diesel","N47D20","—","Дизел"],["3.0 Diesel","—","—","Дизел"]] }
  },
  "Mercedes-Benz": {
    "C-Class W204": { years:[2007,2008,2009,2010,2011,2012,2013,2014], engines:[["C220 CDI","—","—","Дизел"],["C200","—","—","Бензин"]] }
  },
  "Audi": {
    "A4 B8": { years:[2008,2009,2010,2011,2012,2013,2014,2015], engines:[["2.0 TDI","—","—","Дизел"],["1.8 TFSI","—","—","Бензин"]] }
  },
  "Volkswagen": {
    "Golf VI": { years:[2008,2009,2010,2011,2012], engines:[["1.6 TDI","—","—","Дизел"],["2.0 TDI","—","—","Дизел"],["1.4 TSI","—","—","Бензин"]] }
  }
};

const OBD = [
 ["P0301","Пропуск в запалването/горенето — цилиндър 1",["Запалителна система","Горивна система","Въздушен/вакуумен проблем","Механичен проблем"]],
 ["P0171","Сместа е прекалено бедна — Bank 1",["Вакуумен теч","Недостатъчно гориво","Измерване на въздуха"]],
 ["P0420","Ефективност на катализатора под праг",["Катализатор","Кислороден сензор","Изпускателен теч"]]
];

const el = id => document.getElementById(id);
let vehicle = JSON.parse(localStorage.getItem("vehicle") || "null");
let repairs = JSON.parse(localStorage.getItem("repairs") || "[]");

function show(id){
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const target = el(id);
  if(!target) return;
  target.classList.add("active");
  if(id === "specs") renderSpecs();
  if(id === "diagnostics") renderOBD();
  if(id === "repairs") renderRepairs();
  window.scrollTo(0,0);
}

function init(){
  const make = el("makeSelect");
  make.innerHTML = Object.keys(DB).map(x => `<option value="${escapeHtml(x)}">${escapeHtml(x)}</option>`).join("");
  make.addEventListener("change", renderModels);
  el("modelSelect").addEventListener("change", renderModel);
  el("saveVehicleBtn").addEventListener("click", saveVehicle);
  el("obdSearch").addEventListener("input", renderOBD);
  el("globalSearchInput").addEventListener("input", runGlobalSearch);
  el("addRepairBtn").addEventListener("click", addRepair);
  document.querySelectorAll("[data-show]").forEach(btn => btn.addEventListener("click", () => show(btn.dataset.show)));
  renderModels();
  updateHome();
  renderOBD();
  renderRepairs();
  runGlobalSearch();
}

function renderModels(){
  const make = el("makeSelect").value;
  const models = Object.keys(DB[make] || {});
  el("modelSelect").innerHTML = models.map(x => `<option value="${escapeHtml(x)}">${escapeHtml(x)}</option>`).join("");
  renderModel();
}
function renderModel(){
  const make = el("makeSelect").value;
  const model = el("modelSelect").value;
  const data = DB[make]?.[model];
  if(!data) return;
  el("yearSelect").innerHTML = data.years.map(y => `<option value="${y}">${y}</option>`).join("");
  el("engineSelect").innerHTML = data.engines.map((e,i) => `<option value="${i}">${escapeHtml(e[0])} • ${escapeHtml(e[1])} • ${escapeHtml(e[3])}</option>`).join("");
  el("catalogStatus").textContent = `Заредени: ${make} → ${model}`;
}
function saveVehicle(){
  const make = el("makeSelect").value, model = el("modelSelect").value;
  const data = DB[make][model], engine = data.engines[Number(el("engineSelect").value)];
  vehicle = {make,model,year:el("yearSelect").value,engine};
  localStorage.setItem("vehicle", JSON.stringify(vehicle));
  updateHome(); show("home");
}
function updateHome(){
  el("selectedCar").textContent = vehicle ? `${vehicle.make} ${vehicle.model} • ${vehicle.year}` : "Не е избран";
  el("selectedEngine").textContent = vehicle ? `${vehicle.engine[0]} • ${vehicle.engine[1]} • ${vehicle.engine[3]}` : "Избери автомобил, за да започнеш.";
}
function renderSpecs(){
  if(!vehicle){ el("vehicleSummary").innerHTML='<div class="item muted">Първо избери автомобил.</div>'; el("specList").innerHTML=""; return; }
  el("vehicleSummary").innerHTML=`<div class="item"><b>${escapeHtml(vehicle.make)} ${escapeHtml(vehicle.model)}</b><span class="muted">${escapeHtml(vehicle.year)} • ${escapeHtml(vehicle.engine[0])} • ${escapeHtml(vehicle.engine[1])}</span></div>`;
  el("specList").innerHTML=["Моторно масло","Количество масло","Моменти на затягане","Сервизни интервали"].map(x=>`<div class="item"><b>${x}</b><span class="muted">Изисква проверен източник</span></div>`).join("");
}
function renderOBD(){
  const q = el("obdSearch").value.trim().toUpperCase();
  const list = OBD.filter(x => x[0].includes(q) || x[1].toUpperCase().includes(q));
  el("obdList").innerHTML = list.length ? list.map(x=>`<button class="item itemButton" data-obd="${x[0]}"><b>${x[0]}</b><span>${x[1]}</span></button>`).join("") : '<div class="item muted">Няма намерени кодове.</div>';
  document.querySelectorAll("[data-obd]").forEach(b=>b.addEventListener("click",()=>openOBD(b.dataset.obd)));
}
function openOBD(code){
  const x = OBD.find(y=>y[0]===code); if(!x) return;
  el("obdDetailBody").innerHTML=`<h2>${x[0]}</h2><div class="item"><b>Описание</b><span>${x[1]}</span></div><div class="item"><b>Възможни направления</b><ul>${x[2].map(y=>`<li>${y}</li>`).join("")}</ul></div><aside>OBD кодът е отправна точка за диагностика, а не автоматична диагноза.</aside>`;
  show("obdDetail");
}
function addRepair(){
  const work = prompt("Какъв ремонт е извършен?"); if(!work) return;
  repairs.unshift({date:new Date().toLocaleDateString("bg-BG"),work,vehicle:vehicle ? `${vehicle.make} ${vehicle.model}` : ""});
  localStorage.setItem("repairs",JSON.stringify(repairs)); renderRepairs();
}
function renderRepairs(){
  el("repairList").innerHTML = repairs.length ? repairs.map(r=>`<div class="item"><b>${escapeHtml(r.work)}</b><span class="muted">${escapeHtml(r.vehicle||"")} • ${escapeHtml(r.date)}</span></div>`).join("") : '<div class="item muted">Няма записи.</div>';
}
function runGlobalSearch(){
  const q = el("globalSearchInput").value.trim().toLowerCase();
  let results=[];
  Object.entries(DB).forEach(([brand,models])=>Object.entries(models).forEach(([model,data])=>data.engines.forEach(e=>results.push(`${brand} ${model} ${e.join(" ")}`))));
  results = [...results, ...OBD.map(x=>x.join(" "))].filter(x=>!q || x.toLowerCase().includes(q));
  el("searchResults").innerHTML = results.map(x=>`<div class="item">${escapeHtml(x)}</div>`).join("");
}
function escapeHtml(value){return String(value).replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));}

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js?v=4").catch(()=>{}));
}
document.addEventListener("DOMContentLoaded", init);
