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
    "Golf VI": {years:yr(2008,2012), engines:[
      E("1.6 TDI 90 PS","CAYB","Дизел"),
      E("1.6 TDI 105 PS","CAYC","Дизел"),
      E("2.0 TDI","—","Дизел"),
      E("1.4 TSI","—","Бензин")
    ]},
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



const VERIFIED_PROFILES = {
  "Volkswagen|Golf VI|CAYC": {
    displacement: "1,598 cm³",
    power: "77 kW / 105 PS @ 4,400 rpm",
    torque: "250 Nm @ 1,500–2,500 rpm",
    injection: "Дизел, директно впръскване, common-rail",
    turbo: "Турбокомпресор с интеркулер",
    engineFamily: "VW EA189",
    cylinders: "4 цилиндъра, редови",
    valves: "16 клапана (4 на цилиндър)",
    boreStroke: "79.5 × 80.5 mm",
    compression: "16.5:1",
    fuel: "Дизел по EN 590",
    emissions: "Euro 5",
    dpf: "Да",
    egr: "Да",
    timing: "Зъбен ремък",
    oilSpec: "VW 507 00",
    oilViscosity: "5W-30 (с одобрение VW 507 00)",
    oilCapacity: "≈ 4.3 l при смяна с маслен филтър",
    serviceInterval: "15,000 km / 12 месеца*",
    fuelTank: "≈ 50 l (предно предаване)",
    sourceNote: "Профилът обединява данни от Volkswagen Newsroom, технически данни за 1.6 TDI common-rail и сервизни/каталожни източници. Интервалът 15 000 km/12 месеца е ориентир за фиксиран сервиз и трябва да се потвърди по конкретния сервизен режим/VIN.",
    confidence: "Проверено с уточнение"
  },
  "Volkswagen|Golf VI|CAYB": {
    displacement: "1,598 cm³",
    power: "66 kW / 90 PS @ 4,200 rpm",
    torque: "230 Nm (проверка по конкретна версия)",
    injection: "Дизел, директно впръскване, common-rail",
    turbo: "Турбокомпресор",
    oilSpec: "VW 507 00",
    oilViscosity: "5W-30 (с одобрение VW 507 00)",
    oilCapacity: "≈ 4.3 l при смяна с маслен филтър",
    serviceInterval: "Потвърди по конкретен сервизен режим",
    fuelTank: "50 l",
    sourceNote: "VW 507 00 и 4.3 l са подкрепени от сервизна документация за семейството 1.6 TDI; точните параметри трябва да се проверят по кода на двигателя/VIN.",
    confidence: "Проверено с уточнение"
  }
};

function profileFor(v){
  return v ? VERIFIED_PROFILES[`${v.make}|${v.model}|${v.engine[1]}`] : null;
}

const SPEC_TEMPLATES = {
  overview: [
    ["Марка", v => v.make, "Каталог"],
    ["Модел", v => v.model, "Каталог"],
    ["Година", v => v.year, "Каталог"],
    ["Двигател", v => v.engine[0], "Каталог"],
    ["Код на двигателя", v => v.engine[1], "Каталог"],
    ["Гориво", v => v.engine[3], "Каталог"],
    ["Работен обем", v => profileFor(v)?.displacement || "Изисква проверен източник", v => profileFor(v) ? "Проверено" : "Проверка"],
    ["Мощност", v => profileFor(v)?.power || "Изисква проверен източник", v => profileFor(v) ? "Проверено" : "Проверка"],
    ["Въртящ момент", v => profileFor(v)?.torque || "Изисква проверен източник", v => profileFor(v) ? "Проверено с уточнение" : "Проверка"],
    ["Впръскване", v => profileFor(v)?.injection || "Изисква проверен източник", v => profileFor(v) ? "Проверено" : "Проверка"],
    ["Турбокомпресор", v => profileFor(v)?.turbo || "Изисква проверен източник", v => profileFor(v) ? "Проверено" : "Проверка"],
    ["Семейство двигател", v => profileFor(v)?.engineFamily || "Изисква проверен източник", v => profileFor(v) ? "Проверено" : "Проверка"],
    ["Цилиндри", v => profileFor(v)?.cylinders || "Изисква проверен източник", v => profileFor(v) ? "Проверено" : "Проверка"],
    ["Клапани", v => profileFor(v)?.valves || "Изисква проверен източник", v => profileFor(v) ? "Проверено" : "Проверка"],
    ["Степен на сгъстяване", v => profileFor(v)?.compression || "Изисква проверен източник", v => profileFor(v) ? "Проверено" : "Проверка"],
    ["Гориво", v => profileFor(v)?.fuel || v.engine[3], v => profileFor(v) ? "Проверено" : "Каталог"],
    ["DPF", v => profileFor(v)?.dpf || "Проверка", v => profileFor(v) ? "Проверено" : "Проверка"],
    ["EGR", v => profileFor(v)?.egr || "Проверка", v => profileFor(v) ? "Проверено" : "Проверка"],
    ["Ангренаж", v => profileFor(v)?.timing || "Проверка", v => profileFor(v) ? "Проверено" : "Проверка"]
  ],
  service: [
    ["Моторно масло", v => profileFor(v)?.oilViscosity || "Изисква точна сервизна спецификация", v => profileFor(v) ? "Проверено" : "Проверка"],
    ["Спецификация на маслото", v => profileFor(v)?.oilSpec || "Изисква проверен източник", v => profileFor(v) ? "Проверено" : "Проверка"],
    ["Количество масло", v => profileFor(v)?.oilCapacity || "Изисква проверен източник", v => profileFor(v) ? "Проверено" : "Проверка"],
    ["Маслен филтър", v => profileFor(v) ? "Сменя се при смяна на моторното масло" : "Каталог по VIN/двигател", v => profileFor(v) ? "Сервизна операция" : "Проверка"],
    ["Въздушен филтър", v => profileFor(v) ? "Производител: 90 000 km или 6 години\\nУсловия: при силно запрашаване — по-рано\\nПрактика: проверка при всяко обслужване; смяна според състоянието" : "Каталог по VIN/двигател", v => profileFor(v) ? "Заводски интервал + условия" : "Проверка"],
    ["Горивен филтър", v => profileFor(v) ? "Производител: 90 000 km при EN 590\\nУсловия: нискокачествено гориво — по-рано; извън EN 590 — 30 000 km\\nПрактика: при неизвестна история — смяна; проверка за вода/замърсяване" : "Каталог по VIN/двигател", v => profileFor(v) ? "Заводски интервал + условия" : "Проверка"],
    ["Филтър купе", v => profileFor(v) ? "60 000 km / 24 месеца*" : "Каталог по VIN/модел", v => profileFor(v) ? "Проверено с уточнение" : "Проверка"],
    ["Спирачна течност", v => profileFor(v) ? "Първа смяна 36 месеца, след това на 24 месеца*" : "Провери по сервизния план", v => profileFor(v) ? "Проверено с уточнение" : "Проверка"],
    ["Ангренажен ремък", v => profileFor(v) ? "210 000 km*; при прашни условия интервалът може да е по-кратък" : "Провери по конкретния двигател/VIN", v => profileFor(v) ? "Проверено с уточнение" : "Проверка"],
    ["Периодичен сервиз", v => profileFor(v) ? "Фиксиран режим: 15 000 km / 12 месеца*" : "Изисква проверен производителски източник", v => profileFor(v) ? "Проверено с уточнение" : "Проверка"],
    ["Периодичен преглед", v => profileFor(v) ? "Първи на 60 000 km / 36 месеца; след това 60 000 km / 24 месеца*" : "Проверка", v => profileFor(v) ? "Проверено с уточнение" : "Проверка"],
    ["Горивен резервоар", v => profileFor(v)?.fuelTank || "Проверка", v => profileFor(v) ? "Проверено с уточнение" : "Проверка"],
    ["Бележка", v => profileFor(v) ? "* Интервалите зависят от сервизния режим, пазара, оборудването и условията на експлоатация; потвърди по VIN/сервизна документация." : "", v => profileFor(v) ? "Важно" : ""]
  ],
  fluids: [
    ["Двигателно масло", v => profileFor(v)?.oilSpec || "Спецификацията зависи от двигателя", v => profileFor(v) ? "Проверено" : "Проверка"],
    ["Количество моторно масло", v => profileFor(v)?.oilCapacity || "Изисква проверен източник", v => profileFor(v) ? "Проверено" : "Проверка"],
    ["Охладителна течност", () => "Провери спецификацията по VIN/код на двигателя", "Проверка"],
    ["Спирачна течност", () => "Провери спецификацията по VIN/оборудване", "Проверка"],
    ["Масло скоростна кутия", () => "Зависи от конкретната скоростна кутия", "Проверка"]
  ],
  brakes: [
    ["Предни дискове", () => "Размерът зависи от изпълнението", "Проверка"],
    ["Задни дискове", () => "Размерът зависи от изпълнението", "Проверка"],
    ["Предни накладки", () => "Каталог по VIN/PR кодове", "Проверка"],
    ["Задни накладки", () => "Каталог по VIN/PR кодове", "Проверка"],
    ["Спирачна течност", () => "Тип и процедура: проверен източник", "Проверка"]
  ],
  electrical: [
    ["Акумулатор", () => "Размер/капацитет според оборудването", "Проверка"],
    ["Стартер", () => "Проверка по двигател/VIN", "Проверка"],
    ["Алтернатор", () => "Проверка по двигател/VIN", "Проверка"],
    ["Предпазители", () => "Схема за конкретната година/оборудване", "Проверка"],
    ["Диагностичен интерфейс", () => "OBD-II при съвместими автомобили", "Общо"]
  ]
};

const OBD = [
 ["P0301","Пропуск в запалването/горенето — цилиндър 1",["Запалителна система","Горивна система","Въздушен/вакуумен проблем","Механичен проблем"]],
 ["P0171","Сместа е прекалено бедна — Bank 1",["Вакуумен теч","Недостатъчно гориво","Измерване на въздуха"]],
 ["P0420","Ефективност на катализатора под праг",["Катализатор","Кислороден сензор","Изпускателен теч"]]
];

const el = id => document.getElementById(id);
function safeJSON(key, fallback){
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch(e) {
    localStorage.removeItem(key);
    return fallback;
  }
}
let vehicle = safeJSON("vehicle", null);
let vinProfile = safeJSON("vinProfile", null);
let repairs = safeJSON("repairs", []);
if(!Array.isArray(repairs)) repairs = [];

window.show = function show(id){
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
  if(!make) return;
  make.innerHTML = Object.keys(DB).map(x => `<option value="${escapeHtml(x)}">${escapeHtml(x)}</option>`).join("");
  make.addEventListener("change", renderModels);
  el("modelSelect")?.addEventListener("change", renderModel);
  el("saveVehicleBtn")?.addEventListener("click", saveVehicle);
  el("decodeVinBtn")?.addEventListener("click", decodeVIN);
  el("vinInput")?.addEventListener("input", e => { e.target.value = e.target.value.toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, "").slice(0,17); });
  el("obdSearch")?.addEventListener("input", renderOBD);
  el("globalSearchInput")?.addEventListener("input", runGlobalSearch);
  el("addRepairBtn")?.addEventListener("click", addRepair);
  document.addEventListener("click", e => {
    const btn = e.target.closest("[data-show]");
    if(btn) { e.preventDefault(); show(btn.dataset.show); }
  });
  document.querySelectorAll("[data-spec-tab]").forEach(btn => {
    btn.addEventListener("click", () => renderSpecs(btn.dataset.specTab));
    btn.addEventListener("keydown", e => {
      if(e.key === "Enter" || e.key === " ") { e.preventDefault(); renderSpecs(btn.dataset.specTab); }
    });
  });
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
function normalizeVin(v){ return String(v||"").trim().toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, "").slice(0,17); }
function vinField(r, key){ return String(r?.[key] ?? "").trim(); }
function firstNonEmpty(...vals){ return vals.map(v=>String(v??"").trim()).find(Boolean) || ""; }
function fordVinInfo(vin){
  const v=normalizeVin(vin);
  if(v.length!==17) return {isFord:false};
  const wmi=v.slice(0,3);
  return {
    isFord:wmi === "WFO" || wmi === "NM0",
    wmi,
    region:wmi === "WFO" ? "Ford of Europe" : (wmi === "NM0" ? "Ford Otosan / Europe" : "")
  };
}
function cleanYear(value, vin, source){
  const y=parseInt(String(value||""),10);
  if(!y || y<1981 || y>2035) return "";
  const fi=fordVinInfo(vin);
  // vPIC sometimes returns misleading model years for European Ford VINs.
  // Never present a suspicious Ford year as fact.
  if(fi.isFord && source === "NHTSA vPIC" && (y===1999 || y===2000 || y===2001)) return "";
  return String(y);
}
function normalizeProviderResult(raw, source, vin){
  if(!raw) return null;
  const r=raw;
  const make=firstNonEmpty(r.Make,r.make,r.brand,r.Manufacturer);
  const model=firstNonEmpty(r.Model,r.model);
  const year=cleanYear(firstNonEmpty(r.ModelYear,r.year,r.modelYear),vin,source);
  const engineModel=firstNonEmpty(r.EngineModel,r.engineModel,r.engine,r.Engine);
  const engineCode=firstNonEmpty(r.EngineCode,r.engineCode,r.EngineCodePrimary);
  const disp=firstNonEmpty(r.DisplacementL,r.displacementL,r.displacement,r.engineDisplacement);
  const cyl=firstNonEmpty(r.EngineCylinders,r.engineCylinders,r.cylinders);
  const fuel=firstNonEmpty(r.FuelTypePrimary,r.fuelType,r.fuel);
  const trans=firstNonEmpty(r.TransmissionStyle,r.transmission,r.gearbox);
  const drive=firstNonEmpty(r.DriveType,r.drive,r.drivetrain);
  const body=firstNonEmpty(r.BodyClass,r.bodyType,r.body);
  const manufacturer=firstNonEmpty(r.Manufacturer,r.manufacturer);
  const modelDetail=firstNonEmpty(r.Version,r.version,r.trim,r.variant);
  return {vin,make,model,year,engineModel,engineCode,disp,cyl,fuel,trans,drive,body,manufacturer,modelDetail,source};
}
function mergeVinResults(results){
  const valid=results.filter(Boolean);
  if(!valid.length) return null;
  const out={...valid[0]};
  const fields=["make","model","year","engineModel","engineCode","disp","cyl","fuel","trans","drive","body","manufacturer","modelDetail"];
  for(const f of fields){
    if(!out[f]){
      const hit=valid.find(x=>x[f]);
      if(hit) out[f]=hit[f];
    }
  }
  const sources=[...new Set(valid.map(x=>x.source).filter(Boolean))];
  out.sources=sources;
  out.agreement={};
  for(const f of ["make","model","year","engineCode","disp","fuel","trans","drive"]){
    const vals=[...new Set(valid.map(x=>String(x[f]||"").toLowerCase()).filter(Boolean))];
    out.agreement[f]=vals.length===1 && vals.length>0;
  }
  return out;
}
function exactnessLabel(v){
  const hasIdentity=!!(v?.make && v?.model);
  const hasBuild=!!(v?.engineModel || v?.engineCode || v?.disp || v?.trans || v?.drive);
  const sourceCount=(v?.sources||[]).length;
  const agreement=["make","model","year","engineCode","disp","trans","drive"].filter(k=>v?.agreement?.[k]).length;
  if(hasIdentity && hasBuild && sourceCount>=2 && agreement>=3) return {label:"Висока увереност",cls:"verified",note:"Данните са съгласувани между повече от един VIN източник."};
  if(hasIdentity && hasBuild) return {label:"Идентифициран",cls:"verified",note:"Има технически данни, но не всички полета са потвърдени от независим източник."};
  if(hasIdentity) return {label:"Частично идентифициран",cls:"pending",note:"Липсват достатъчно технически данни за безопасна сервизна идентификация."};
  return {label:"Няма достатъчно данни",cls:"pending",note:"VIN-ът е валиден по формат, но автомобилът не е идентифициран надеждно."};
}
function renderVinResult(v){
  if(!v){ el("vinStatus").textContent="VIN не може да бъде идентифициран надеждно."; el("vinResult").innerHTML='<aside>Няма достатъчно данни от достъпните VIN източници. Не използвай резултата за сервизни спецификации.</aside>'; return; }
  const knownEngine = Object.values(DB[v.make]||{}).flatMap(m=>m.engines).find(e => v.engineCode && e[1]===v.engineCode) || null;
  vinProfile={...v};
  localStorage.setItem("vinProfile", JSON.stringify(vinProfile));
  const confidence=exactnessLabel(v);
  const sourceText=(v.sources||[v.source||"VIN decoder"]).join(" + ");
  el("vinStatus").innerHTML=`<span class="${confidence.cls}">${confidence.label}</span> — ${escapeHtml(confidence.note)}`;
  const agreement=(field)=>v.agreement?.[field] ? '<small class="verified">✓ съгласувано</small>' : '<small class="pending">непотвърдено от втори източник</small>';
  el("vinResult").innerHTML=`
  <div class="item"><b>${escapeHtml(v.make||"Неизвестна марка")} ${escapeHtml(v.model||"")}</b>
  <span>${escapeHtml(v.year||"Година: не е потвърдена")}</span>
  <span>${escapeHtml(v.engineModel||"Двигател: не е потвърден")}${v.engineCode?" • "+escapeHtml(v.engineCode):""}</span>
  ${v.modelDetail?`<span>${escapeHtml(v.modelDetail)}</span>`:""}
  <small class="pending">Източник: ${escapeHtml(sourceText)}</small></div>
  <div class="specGrid">
   <div class="specCard"><b>Работен обем</b><div class="value">${escapeHtml(v.disp?v.disp+" L":"Не е потвърден")}</div>${agreement("disp")}</div>
   <div class="specCard"><b>Цилиндри</b><div class="value">${escapeHtml(v.cyl||"Не е потвърдено")}</div></div>
   <div class="specCard"><b>Гориво</b><div class="value">${escapeHtml(v.fuel||"Не е потвърдено")}</div>${agreement("fuel")}</div>
   <div class="specCard"><b>Скоростна кутия</b><div class="value">${escapeHtml(v.trans||"Не е потвърдена")}</div>${agreement("trans")}</div>
   <div class="specCard"><b>Задвижване</b><div class="value">${escapeHtml(v.drive||"Не е потвърдено")}</div>${agreement("drive")}</div>
   <div class="specCard"><b>Купе</b><div class="value">${escapeHtml(v.body||"Не е потвърдено")}</div></div>
  </div>
  <aside><b>Правило на AutoRepair:</b> неподтвърдено поле не се превръща в сервизна спецификация. Особено за европейски Ford не приемаме автоматично година/двигател от NHTSA като факт.</aside>
  ${knownEngine?`<button type="button" onclick="useVinVehicle()" style="margin-top:10px">Използвай този автомобил</button>`:`<aside style="margin-top:10px"><b>Не е готов за сервизен каталог.</b> Кодът на двигателя не е потвърден в локалната техническа база.</aside>`}`;
}
async function fetchJson(url, options={}){
  const res=await fetch(url,options);
  if(!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.json();
}
async function decodeVIN(){
  const vin=normalizeVin(el("vinInput")?.value);
  if(vin.length!==17){ el("vinStatus").textContent="VIN трябва да съдържа точно 17 символа (без I, O и Q)."; el("vinResult").innerHTML=""; return; }
  el("vinInput").value=vin; el("vinStatus").textContent="Проверка в европейски и общ VIN източник..."; el("vinResult").innerHTML="";
  const results=[];
  const fi=fordVinInfo(vin);
  // Source 1: free European-oriented database. It is used as an additional source, not as a blind authority.
  try{
    const j=await fetchJson(`https://db.vin/api/v1/vin/${encodeURIComponent(vin)}`);
    if(j && (j.brand||j.make||j.model)) results.push(normalizeProviderResult(j,"DB.VIN (EU)",vin));
  }catch(e){ /* optional source */ }
  // Source 2: NHTSA vPIC. Useful as a secondary source; never trusted alone for European Ford year/build fields.
  try{
    const j=await fetchJson(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${encodeURIComponent(vin)}?format=json`,{headers:{"Accept":"application/json"}});
    const r=Array.isArray(j.Results)?j.Results[0]:null;
    if(r){
      const err=vinField(r,"ErrorText");
      if(!err || r.Make || r.Model) results.push(normalizeProviderResult(r,"NHTSA vPIC",vin));
    }
  }catch(e){ /* optional source */ }
  const merged=mergeVinResults(results);
  if(!merged){
    el("vinStatus").textContent="VIN не беше идентифициран надеждно.";
    el("vinResult").innerHTML=`<aside>Не получихме достатъчно данни от VIN източниците. ${fi.isFord?"Разпознат е европейски Ford, но това само по себе си не е достатъчно за сервизна идентификация.":"Опитай отново с проверен 17-символен VIN."}</aside>`;
    return;
  }
  renderVinResult(merged);
}
function useVinVehicle(){
  if(!vinProfile) return;
  const dbModel=DB[vinProfile.make]?.[vinProfile.model];
  const knownEngine=dbModel?.engines?.find(e=>vinProfile.engineCode && e[1]===vinProfile.engineCode);
  if(!knownEngine){ el("vinStatus").textContent="VIN е разпознат, но няма потвърден двигател в локалния технически каталог. Не го използваме за сервизни данни."; return; }
  vehicle={make:vinProfile.make,model:vinProfile.model,year:vinProfile.year||"—",engine:knownEngine,vin:vinProfile.vin,vinSource:(vinProfile.sources||[]).join(" + ")};
  localStorage.setItem("vehicle",JSON.stringify(vehicle));
  updateHome(); show("home");
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
  el("selectedEngine").textContent = vehicle ? `${vehicle.engine[0]} • ${vehicle.engine[1]} • ${vehicle.engine[3]}${vehicle.vin ? " • VIN: "+vehicle.vin : ""}` : "Избери автомобил, за да започнеш.";
}
function renderSpecs(tab="overview"){
  const tabs = document.querySelectorAll("[data-spec-tab]");
  tabs.forEach(b=>b.classList.toggle("active", b.dataset.specTab===tab));
  if(!vehicle){
    el("vehicleSummary").innerHTML='<div class="item muted">Първо избери автомобил.</div>';
    el("specList").innerHTML="";
    return;
  }
  const p = profileFor(vehicle);
  el("vehicleSummary").innerHTML=`<div class="item"><b>${escapeHtml(vehicle.make)} ${escapeHtml(vehicle.model)}</b><span class="muted">${escapeHtml(vehicle.year)} • ${escapeHtml(vehicle.engine[0])} • ${escapeHtml(vehicle.engine[1])} • ${escapeHtml(vehicle.engine[3])}</span>${p ? `<small class="verified">${escapeHtml(p.confidence)} • профилът е за ${escapeHtml(vehicle.engine[1])}</small>` : ""}</div>`;
  const rows = SPEC_TEMPLATES[tab] || SPEC_TEMPLATES.overview;
  const serviceNote = tab === "service" && p ? '<aside class="serviceNote"><b>Как да четем интервала:</b> „Производител“ е заводският интервал; „Условия“ описва кога той трябва да се съкрати; „Практика“ е сервизна препоръка и не заменя официалния сервизен план.</aside>' : "";
  el("specList").innerHTML=`${serviceNote}<div class="specGrid">${rows.map(([label,get,status])=>{
    const value = get(vehicle);
    const statusValue = typeof status === "function" ? status(vehicle) : status;
    const cls = statusValue === "Каталог" || statusValue === "Общо" || statusValue === "Проверено" || statusValue === "Проверено с уточнение" ? "verified" : "pending";
    return `<div class="specCard"><b>${escapeHtml(label)}</b><div class="value">${escapeHtml(value)}</div><small class="${cls}">${escapeHtml(statusValue)}</small></div>`;
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
  window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js?v=18").catch(()=>{}));
}
document.addEventListener("DOMContentLoaded", init);
