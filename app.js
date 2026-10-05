const yr = (a,b) => Array.from({length:b-a+1}, (_,i)=>a+i);
const E = (name, code="—", type="—") => [name, code, "—", type];

const DB = {
  "BMW": {
    "1 Series F20": {years:yr(2011,2019), engines:[E("116i"),E("118d","N47D20","Дизел"),E("120d","B47D20","Дизел")]},
    "3 Series E90": {years:yr(2005,2012), engines:[E("2.0 Diesel","N47D20","Дизел"),E("2.0 Petrol","N43B20","Бензин")]},
    "3 Series F30": {years:yr(2012,2019), engines:[E("320d","N47D20/B47D20","Дизел"),E("320i","N20B20","Бензин")]},
    "5 Series E60": {years:yr(2004,2010), engines:[E("2.0 Diesel","—","Дизел"),E("3.0 Diesel","—","Дизел")]},
    "5 Series F10": {years:yr(2010,2017), engines:[E("520d","N47D20/B47D20","Дизел"),E("530d","N57D30","Дизел")]},
    "X3 F25": {years:yr(2010,2017), engines:[E("xDrive20d","N47D20","Дизел"),E("xDrive20i","N20B20","Бензин")]}
  },
  "Mercedes-Benz": {
    "A-Class W176": {years:yr(2012,2018), engines:[E("A180"),E("A200"),E("A200 CDI","—","Дизел")]},
    "C-Class W204": {years:yr(2007,2014), engines:[E("C220 CDI","—","Дизел"),E("C200","—","Бензин")]},
    "C-Class W205": {years:yr(2014,2021), engines:[E("C200"),E("C220d","—","Дизел")]},
    "E-Class W212": {years:yr(2009,2016), engines:[E("E220 CDI","—","Дизел"),E("E250","—","Бензин")]},
    "GLC X253": {years:yr(2015,2022), engines:[E("GLC 220d","—","Дизел"),E("GLC 300","—","Бензин")]}
  },
  "Audi": {
    "A3 8V": {years:yr(2012,2020), engines:[E("1.6 TDI","—","Дизел"),E("2.0 TDI","—","Дизел"),E("1.4 TFSI","—","Бензин")]},
    "A4 B8": {years:yr(2008,2015), engines:[E("2.0 TDI","—","Дизел"),E("1.8 TFSI","—","Бензин")]},
    "A4 B9": {years:yr(2015,2024), engines:[E("2.0 TDI","—","Дизел"),E("2.0 TFSI","—","Бензин")]},
    "A6 C7": {years:yr(2011,2018), engines:[E("2.0 TDI","—","Дизел"),E("3.0 TDI","—","Дизел")]},
    "Q5 8R": {years:yr(2008,2017), engines:[E("2.0 TDI","—","Дизел"),E("2.0 TFSI","—","Бензин")]}
  },
  "Volkswagen": {
    "Golf VI": {years:yr(2008,2012), engines:[E("1.6 TDI","—","Дизел"),E("2.0 TDI","—","Дизел"),E("1.4 TSI","—","Бензин")]},
    "Golf VII": {years:yr(2012,2019), engines:[E("1.6 TDI","—","Дизел"),E("2.0 TDI","—","Дизел"),E("1.4 TSI","—","Бензин")]},
    "Passat B7": {years:yr(2010,2014), engines:[E("2.0 TDI","—","Дизел"),E("1.4 TSI","—","Бензин")]},
    "Passat B8": {years:yr(2014,2023), engines:[E("2.0 TDI","—","Дизел"),E("1.5 TSI","—","Бензин")]},
    "Tiguan II": {years:yr(2016,2024), engines:[E("2.0 TDI","—","Дизел"),E("1.5 TSI","—","Бензин")]}
  },
  "Toyota": {
    "Corolla E150": {years:yr(2006,2013), engines:[E("1.4 D-4D","—","Дизел"),E("1.6 VVT-i","—","Бензин")]},
    "Corolla E210": {years:yr(2018,2024), engines:[E("1.8 Hybrid","—","Хибрид"),E("2.0 Hybrid","—","Хибрид")]},
    "Auris E180": {years:yr(2012,2018), engines:[E("1.4 D-4D","—","Дизел"),E("1.8 Hybrid","—","Хибрид")]},
    "RAV4 XA40": {years:yr(2013,2018), engines:[E("2.0 D-4D","—","Дизел"),E("2.0 Valvematic","—","Бензин")]}
  },
  "Ford": {
    "Focus Mk3": {years:yr(2011,2018), engines:[E("1.6 TDCi","—","Дизел"),E("1.0 EcoBoost","—","Бензин")]},
    "Focus Mk4": {years:yr(2018,2024), engines:[E("1.5 EcoBlue","—","Дизел"),E("1.0 EcoBoost","—","Бензин")]},
    "Mondeo Mk5": {years:yr(2014,2022), engines:[E("2.0 TDCi","—","Дизел"),E("1.5 EcoBoost","—","Бензин")]},
    "Kuga Mk2": {years:yr(2013,2020), engines:[E("2.0 TDCi","—","Дизел"),E("1.5 EcoBoost","—","Бензин")]}
  },
  "Opel": {
    "Astra J": {years:yr(2009,2015), engines:[E("1.7 CDTI","—","Дизел"),E("1.4 Turbo","—","Бензин")]},
    "Astra K": {years:yr(2015,2021), engines:[E("1.6 CDTI","—","Дизел"),E("1.4 Turbo","—","Бензин")]},
    "Insignia A": {years:yr(2008,2017), engines:[E("2.0 CDTI","—","Дизел"),E("1.6 Turbo","—","Бензин")]},
    "Corsa E": {years:yr(2014,2019), engines:[E("1.3 CDTI","—","Дизел"),E("1.4","—","Бензин")]}
  },
  "Skoda": {
    "Octavia II": {years:yr(2004,2013), engines:[E("1.9 TDI","—","Дизел"),E("2.0 TDI","—","Дизел"),E("1.6 MPI","—","Бензин")]},
    "Octavia III": {years:yr(2013,2020), engines:[E("1.6 TDI","—","Дизел"),E("2.0 TDI","—","Дизел"),E("1.4 TSI","—","Бензин")]},
    "Superb II": {years:yr(2008,2015), engines:[E("2.0 TDI","—","Дизел"),E("1.8 TSI","—","Бензин")]},
    "Kodiaq": {years:yr(2016,2024), engines:[E("2.0 TDI","—","Дизел"),E("1.5 TSI","—","Бензин")]}
  },
  "Renault": {
    "Clio IV": {years:yr(2012,2019), engines:[E("1.5 dCi","—","Дизел"),E("0.9 TCe","—","Бензин")]},
    "Megane III": {years:yr(2008,2016), engines:[E("1.5 dCi","—","Дизел"),E("1.2 TCe","—","Бензин")]},
    "Megane IV": {years:yr(2016,2024), engines:[E("1.5 dCi","—","Дизел"),E("1.3 TCe","—","Бензин")]},
    "Kadjar": {years:yr(2015,2022), engines:[E("1.5 dCi","—","Дизел"),E("1.2 TCe","—","Бензин")]}
  },
  "Peugeot": {
    "308 T7": {years:yr(2007,2013), engines:[E("1.6 HDi","—","Дизел"),E("1.6 VTi","—","Бензин")]},
    "308 T9": {years:yr(2013,2021), engines:[E("1.6 BlueHDi","—","Дизел"),E("1.2 PureTech","—","Бензин")]},
    "508 I": {years:yr(2010,2018), engines:[E("2.0 HDi","—","Дизел"),E("1.6 THP","—","Бензин")]}
  },
  "Volvo": {
    "V40": {years:yr(2012,2019), engines:[E("D2","—","Дизел"),E("T3","—","Бензин")]},
    "S60 II": {years:yr(2010,2018), engines:[E("D3","—","Дизел"),E("T5","—","Бензин")]},
    "XC60 I": {years:yr(2008,2017), engines:[E("D4","—","Дизел"),E("T5","—","Бензин")]}
  },
  "Honda": {
    "Civic VIII": {years:yr(2005,2011), engines:[E("2.2 i-CTDi","—","Дизел"),E("1.8 i-VTEC","—","Бензин")]},
    "Civic IX": {years:yr(2011,2017), engines:[E("1.6 i-DTEC","—","Дизел"),E("1.8 i-VTEC","—","Бензин")]},
    "CR-V IV": {years:yr(2012,2018), engines:[E("1.6 i-DTEC","—","Дизел"),E("2.0 i-VTEC","—","Бензин")]}
  },
  "Nissan": {
    "Qashqai J10": {years:yr(2007,2013), engines:[E("1.5 dCi","—","Дизел"),E("1.6","—","Бензин")]},
    "Qashqai J11": {years:yr(2013,2021), engines:[E("1.5 dCi","—","Дизел"),E("1.2 DIG-T","—","Бензин")]},
    "X-Trail T32": {years:yr(2013,2022), engines:[E("1.6 dCi","—","Дизел"),E("1.6 DIG-T","—","Бензин")]}
  },
  "Hyundai": {
    "i30 GD": {years:yr(2011,2017), engines:[E("1.6 CRDi","—","Дизел"),E("1.4 MPI","—","Бензин")]},
    "i30 PD": {years:yr(2016,2024), engines:[E("1.6 CRDi","—","Дизел"),E("1.4 T-GDi","—","Бензин")]},
    "Tucson TL": {years:yr(2015,2020), engines:[E("1.7 CRDi","—","Дизел"),E("1.6 T-GDi","—","Бензин")]}
  },
  "Kia": {
    "Ceed JD": {years:yr(2012,2018), engines:[E("1.6 CRDi","—","Дизел"),E("1.4 MPI","—","Бензин")]},
    "Ceed CD": {years:yr(2018,2024), engines:[E("1.6 CRDi","—","Дизел"),E("1.4 T-GDi","—","Бензин")]},
    "Sportage QL": {years:yr(2015,2021), engines:[E("1.7 CRDi","—","Дизел"),E("1.6 GDi","—","Бензин")]}
  }
};


const SPEC_TEMPLATES = {
  overview: [
    ["Марка", v => v.make, "Каталог"],
    ["Модел", v => v.model, "Каталог"],
    ["Година", v => v.year, "Каталог"],
    ["Двигател", v => v.engine[0], "Каталог"],
    ["Код на двигателя", v => v.engine[1], "Каталог"],
    ["Гориво", v => v.engine[3], "Каталог"],
    ["Мощност", () => "Изисква проверен източник", "Проверка"],
    ["Работен обем", () => "Изисква проверен източник", "Проверка"]
  ],
  service: [
    ["Моторно масло", () => "Изисква точна сервизна спецификация", "Проверка"],
    ["Количество масло", () => "Изисква проверен източник", "Проверка"],
    ["Маслен филтър", () => "Изисква каталог по VIN/двигател", "Проверка"],
    ["Въздушен филтър", () => "Изисква каталог по VIN/двигател", "Проверка"],
    ["Горивен филтър", () => "Изисква каталог по VIN/двигател", "Проверка"],
    ["Филтър купе", () => "Изисква каталог по VIN/модел", "Проверка"],
    ["Ремък / верига", () => "Изисква точна конфигурация на двигателя", "Проверка"],
    ["Сервизен интервал", () => "Изисква проверен производителски източник", "Проверка"]
  ],
  fluids: [
    ["Двигателно масло", () => "Спецификацията зависи от двигателя", "Проверка"],
    ["Охладителна течност", () => "Спецификация и количество: проверен източник", "Проверка"],
    ["Спирачна течност", () => "Типът зависи от производителя/системата", "Проверка"],
    ["Масло скоростна кутия", () => "Зависи от кутията и конкретната версия", "Проверка"],
    ["Масло диференциал", () => "Само при приложим тип задвижване", "Проверка"],
    ["Хидравлична течност", () => "Само ако автомобилът използва отделна система", "Проверка"]
  ],
  brakes: [
    ["Предни дискове", () => "Размерът зависи от изпълнението", "Проверка"],
    ["Задни дискове", () => "Размерът зависи от изпълнението", "Проверка"],
    ["Предни накладки", () => "Каталог по VIN/PR кодове/изпълнение", "Проверка"],
    ["Задни накладки", () => "Каталог по VIN/PR кодове/изпълнение", "Проверка"],
    ["Спирачна течност", () => "Тип и процедура: проверен източник", "Проверка"]
  ],
  electrical: [
    ["Акумулатор", () => "Размер/капацитет зависи от конфигурацията", "Проверка"],
    ["Стартер", () => "Проверка по двигател/VIN", "Проверка"],
    ["Алтернатор", () => "Проверка по двигател/VIN", "Проверка"],
    ["Предпазители", () => "Използвай схема за конкретната година/оборудване", "Проверка"],
    ["Диагностичен интерфейс", () => "OBD-II при съвместими автомобили", "Общо"]
  ]
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
  if(id === "specs") renderSpecs(document.querySelector("[data-spec-tab].active")?.dataset.specTab || "overview");
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
  document.querySelectorAll("[data-spec-tab]").forEach(btn => btn.addEventListener("click", () => renderSpecs(btn.dataset.specTab)));
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
  const modelCount = Object.values(DB).reduce((n, models) => n + Object.keys(models).length, 0);
  const brandCount = Object.keys(DB).length;
  el("catalogStatus").textContent = `Каталог: ${brandCount} марки • ${modelCount} модела • Избрано: ${make} → ${model}`;
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
function renderSpecs(tab="overview"){
  const tabs = document.querySelectorAll("[data-spec-tab]");
  tabs.forEach(b=>b.classList.toggle("active", b.dataset.specTab===tab));
  if(!vehicle){
    el("vehicleSummary").innerHTML='<div class="item muted">Първо избери автомобил.</div>';
    el("specList").innerHTML="";
    return;
  }
  el("vehicleSummary").innerHTML=`<div class="item"><b>${escapeHtml(vehicle.make)} ${escapeHtml(vehicle.model)}</b><span class="muted">${escapeHtml(vehicle.year)} • ${escapeHtml(vehicle.engine[0])} • ${escapeHtml(vehicle.engine[1])} • ${escapeHtml(vehicle.engine[3])}</span></div>`;
  const rows = SPEC_TEMPLATES[tab] || SPEC_TEMPLATES.overview;
  el("specList").innerHTML=`<div class="specGrid">${rows.map(([label,get,status])=>{
    const value = get(vehicle);
    const cls = status === "Каталог" || status === "Общо" ? "verified" : "pending";
    return `<div class="specCard"><b>${escapeHtml(label)}</b><div class="value">${escapeHtml(value)}</div><small class="${cls}">${escapeHtml(status)}</small></div>`;
  }).join("")}</div>`;
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
  results.sort((a,b)=>a.localeCompare(b,"bg"));
  el("searchResults").innerHTML = results.length ? results.map(x=>`<div class="item">${escapeHtml(x)}</div>`).join("") : '<div class="item muted">Няма намерени резултати.</div>';
}
function escapeHtml(value){return String(value).replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));}

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js?v=7").catch(()=>{}));
}
document.addEventListener("DOMContentLoaded", init);
