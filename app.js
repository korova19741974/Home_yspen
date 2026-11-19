const rooms = {
  "f1-office": {
    title: "Кабинет",
    floor: "1 этаж · Room 1",
    view: "35 55 245 245",
    devices: [
      {
        id: "f1-office-light",
        icon: "☀",
        name: "Основной свет",
        kind: "light",
      },
      {
        id: "f1-office-alice",
        icon: "♫",
        name: "Алиса Мини с часами",
        kind: "speaker",
      },
    ],
  },
  "f1-entry": {
    title: "Предбанник",
    floor: "1 этаж · Room 5",
    view: "235 30 205 205",
    devices: [
      {
        id: "f1-entry-light",
        icon: "☀",
        name: "Свет предбанника",
        kind: "light",
      },
    ],
  },
  "f1-hall": {
    title: "Коридор",
    floor: "1 этаж · Room 2",
    view: "205 125 270 270",
    devices: [
      {
        id: "f1-hall-light-a",
        icon: "☀",
        name: "Основной свет 1",
        kind: "light",
      },
      {
        id: "f1-hall-light-b",
        icon: "☀",
        name: "Основной свет 2",
        kind: "light",
      },
      { id: "f1-street-light", icon: "◉", name: "Свет улицы", kind: "light" },
    ],
  },
  "f1-kitchen": {
    title: "Кухня",
    floor: "1 этаж · Rooms 3–4",
    view: "65 115 590 345",
    devices: [
      {
        id: "f1-kitchen-light",
        icon: "☀",
        name: "Основной свет",
        kind: "light",
      },
      { id: "f1-plug-1", icon: "⌁", name: "Умная розетка 1", kind: "plug" },
      { id: "f1-plug-2", icon: "⌁", name: "Умная розетка 2", kind: "plug" },
      { id: "vacuum-1", icon: "✦", name: "Xiaomi M40", kind: "vacuum" },
      { id: "f1-alice", icon: "♫", name: "Алиса Мини", kind: "speaker" },
      {
        id: "f1-kitchen-camera",
        icon: "▣",
        name: "Камера кухни",
        kind: "camera",
      },
    ],
  },
  "f1-toilet": {
    title: "Туалет",
    floor: "1 этаж",
    view: "550 250 150 205",
    devices: [
      { id: "f1-toilet-light", icon: "☀", name: "Свет", kind: "light" },
    ],
  },
  "f1-terrace": {
    title: "Терраса",
    floor: "1 этаж",
    view: "330 315 275 165",
    devices: [
      {
        id: "f1-terrace-light",
        icon: "☀",
        name: "Свет террасы",
        kind: "light",
      },
    ],
  },
  "f2-bedroom": {
    title: "Спальня с кладовой",
    floor: "2 этаж",
    devices: [
      {
        id: "f2-bedroom-main",
        icon: "☀",
        name: "Основной свет",
        kind: "light",
      },
      { id: "f2-alice-max", icon: "♫", name: "Алиса Макс", kind: "speaker" },
    ],
  },
  "f2-closet": {
    title: "Гардеробная",
    floor: "2 этаж",
    view: "430 20 255 320",
    devices: [
      {
        id: "f2-closet-light",
        icon: "☀",
        name: "Свет гардеробной",
        kind: "light",
      },
    ],
  },
  "f2-stairs": {
    title: "Лестница",
    floor: "2 этаж",
    view: "670 25 380 310",
    devices: [
      {
        id: "f2-stairs-light",
        icon: "☀",
        name: "Свет лестницы",
        kind: "light",
      },
    ],
  },
  "f2-laundry": {
    title: "Постирочная",
    floor: "2 этаж",
    view: "805 220 275 230",
    devices: [
      {
        id: "f2-laundry-light",
        icon: "☀",
        name: "Свет постирочной",
        kind: "light",
      },
    ],
  },
  "f2-guest": {
    title: "Главная спальня",
    floor: "2 этаж · зелёный шкаф",
    devices: [
      {
        id: "f2-guest-accent",
        icon: "◉",
        name: "Основной свет у кровати",
        kind: "light",
      },
      {
        id: "f2-bed-lamp-1",
        icon: "◉",
        name: "Верхняя прикроватная лампа",
        kind: "light",
      },
      {
        id: "f2-bed-lamp-2",
        icon: "◉",
        name: "Нижняя прикроватная лампа",
        kind: "light",
      },
      {
        id: "f2-guest-wardrobe",
        icon: "◉",
        name: "Основной свет у шкафа",
        kind: "light",
      },
      { id: "f2-tv", icon: "▣", name: "Телевизор", kind: "tv" },
      { id: "f2-aircon", icon: "❄", name: "Кондиционер", kind: "climate" },
    ],
  },
  "f2-bath": {
    title: "Ванная",
    floor: "2 этаж",
    view: "645 415 440 305",
    devices: [
      { id: "f2-bath-main", icon: "☀", name: "Основной свет", kind: "light" },
      { id: "f2-bath-mirror", icon: "◉", name: "Зеркало", kind: "light" },
      { id: "f2-leak", icon: "◈", name: "Датчик протечки", kind: "sensor" },
    ],
  },
  "f2-office": {
    title: "Кабинет",
    floor: "2 этаж",
    view: "645 705 440 355",
    devices: [
      {
        id: "f2-office-light",
        icon: "☀",
        name: "Свет кабинета",
        kind: "light",
      },
      { id: "vacuum-2", icon: "✦", name: "Xiaomi M40", kind: "vacuum" },
      {
        id: "f2-temperature",
        icon: "⌁",
        name: "Температура в комнате и на улице",
        kind: "sensor",
      },
    ],
  },
};
const defaults = {
  devices: {
    "f1-office-light": true,
    "f1-entry-light": false,
    "f1-hall-light-a": true,
    "f1-hall-light-b": true,
    "f1-street-light": false,
    "f1-kitchen-light": true,
    "f1-plug-1": false,
    "f1-plug-2": true,
    "f1-toilet-light": false,
    "f1-terrace-light": false,
    "f2-stairs-light": false,
    "f2-closet-light": false,
    "f2-laundry-light": false,
    "f2-guest-accent": false,
    "f2-aircon": false,
    "f2-tv": false,
    "f2-guest-wardrobe": false,
    "f2-bath-main": false,
    "f2-bath-mirror": false,
    "f2-office-light": true,
    "f2-bedroom-main": false,
    "f2-bed-lamp-1": true,
    "f2-bed-lamp-2": true,
  },
  vacuums: {
    "vacuum-1": {
      state: "На базе",
      battery: 100,
      mode: "Стандарт",
      cleaning: "Сухая уборка",
      route: "Вся карта",
    },
    "vacuum-2": {
      state: "На базе",
      battery: 82,
      mode: "Стандарт",
      cleaning: "Сухая уборка",
      route: "Вся карта",
    },
  },
  tvTimers: { "f2-tv": null },
};
let state =
  JSON.parse(localStorage.getItem("home-dashboard-demo")) ||
  structuredClone(defaults);
state.devices = { ...defaults.devices, ...state.devices };
Object.keys(defaults.vacuums).forEach((id) => {
  state.vacuums[id] = { ...defaults.vacuums[id], ...state.vacuums[id] };
});
state.tvTimers = { ...defaults.tvTimers, ...(state.tvTimers || {}) };
let activeFloor = 2;
let selectedRoom = "f2-guest";
const secondFloorLightIds = [
  "f2-bedroom-main",
  "f2-bed-lamp-1",
  "f2-bed-lamp-2",
  "f2-closet-light",
  "f2-stairs-light",
  "f2-laundry-light",
  "f2-guest-accent",
  "f2-guest-wardrobe",
  "f2-bath-main",
  "f2-bath-mirror",
  "f2-office-light",
];
const lightPresets = {
  off: [],
  work: ["f2-office-light", "f2-closet-light", "f2-stairs-light"],
  evening: [
    "f2-bedroom-main",
    "f2-bed-lamp-1",
    "f2-bed-lamp-2",
    "f2-guest-accent",
    "f2-bath-mirror",
  ],
  all: secondFloorLightIds,
};
const roomPanel = document.querySelector("#room-panel"),
  toast = document.querySelector("#toast"),
  vacuumModal = document.querySelector("#vacuum-modal"),
  cameraModal = document.querySelector("#camera-modal");
let tvTimerHandle = null;
function save() {
  localStorage.setItem("home-dashboard-demo", JSON.stringify(state));
}
function isOn(id) {
  return Boolean(state.devices[id]);
}
function toggleMapLight(id, label) {
  const deviceName = Object.values(rooms)
    .flatMap((room) => room.devices)
    .find((device) => device.id === id)?.name;
  state.devices[id] = !isOn(id);
  save();
  render();
  showToast(
    `${label || deviceName || "Устройство"}: ${isOn(id) ? "включено" : "выключено"}`,
  );
}
function showToast(text) {
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("show"), 2800);
}
function displayVacuum(id) {
  const v = state.vacuums[id];
  return `${v.state} · ${v.battery}%`;
}
function tvTimerText() {
  const offAt = state.tvTimers["f2-tv"];
  if (!offAt) return "";
  const remaining = Math.max(0, offAt - Date.now());
  return remaining ? ` · таймер ${Math.ceil(remaining / 60000)} мин` : "";
}
function syncTvTimer() {
  clearTimeout(tvTimerHandle);
  const offAt = state.tvTimers["f2-tv"];
  if (!offAt) return;
  const remaining = offAt - Date.now();
  if (remaining <= 0) {
    state.devices["f2-tv"] = false;
    state.tvTimers["f2-tv"] = null;
    save();
    return;
  }
  tvTimerHandle = setTimeout(() => {
    state.devices["f2-tv"] = false;
    state.tvTimers["f2-tv"] = null;
    save();
    render();
    showToast("Телевизор второго этажа выключен по таймеру");
  }, remaining);
}
function toggleTv() {
  state.devices["f2-tv"] = !isOn("f2-tv");
  if (!state.devices["f2-tv"]) state.tvTimers["f2-tv"] = null;
  save();
  render();
  showToast(`Телевизор: ${isOn("f2-tv") ? "включён" : "выключен"}`);
}
function setTvTimer(minutes = 30) {
  state.devices["f2-tv"] = true;
  state.tvTimers["f2-tv"] = Date.now() + minutes * 60 * 1000;
  save();
  render();
  showToast(`Телевизор выключится через ${minutes} минут`);
}
function renderRoomPanel() {
  const room = rooms[selectedRoom];
  const items = room.devices
    .map((d) => {
      if (d.kind === "sensor")
        return `<div class="control-row"><span class="control-icon">${d.icon}</span><span class="control-copy"><strong>${d.name}</strong><small>${d.id === "f2-leak" ? "Сухо · Zigbee" : "22.8° в комнате · 8.4° на улице"}</small></span></div>`;
      if (d.kind === "vacuum")
        return `<div class="control-row"><span class="control-icon">${d.icon}</span><span class="control-copy"><strong>${d.name}</strong><small>${displayVacuum(d.id)} · ${state.vacuums[d.id].cleaning}</small></span><button class="device-action" data-vacuum-settings="${d.id}">Настроить</button></div>`;
      if (d.kind === "tv")
        return `<div class="control-row tv-control-row"><span class="control-icon">${d.icon}</span><span class="control-copy"><strong>${d.name}</strong><small>${isOn(d.id) ? "Включён" : "Выключен"}${tvTimerText()} · демо</small></span><button class="toggle ${isOn(d.id) ? "on" : ""}" data-tv-toggle="${d.id}" aria-label="Включить или выключить телевизор"><span></span></button><button class="device-action" data-tv-timer="30">Через 30 мин</button></div>`;
      if (d.kind === "speaker")
        return `<div class="control-row"><span class="control-icon">${d.icon}</span><span class="control-copy"><strong>${d.name}</strong><small>Яндекс Музыка · тестовый режим</small></span><button class="device-action" data-music="${d.id}">Играть</button></div>`;
      if (d.kind === "camera")
        return `<div class="control-row"><span class="control-icon">${d.icon}</span><span class="control-copy"><strong>${d.name}</strong><small>Через регистратор · демо</small></span><button class="device-action" data-camera="kitchen">Открыть</button></div>`;
      return `<div class="control-row"><span class="control-icon">${d.icon}</span><span class="control-copy"><strong>${d.name}</strong><small>${isOn(d.id) ? "Включено" : "Выключено"} · Tuya</small></span><button class="toggle ${isOn(d.id) ? "on" : ""}" data-toggle="${d.id}" aria-label="Переключить ${d.name}"><span></span></button></div>`;
    })
    .join("");
  roomPanel.innerHTML = `<p class="eyebrow">ВЫБРАННАЯ ЗОНА</p><h3>${room.title}</h3><p>${room.floor}</p><div class="room-devices">${items}</div><div class="room-tip"><strong>Карта неподвижна.</strong><br>В главной спальне зоны у шкафа и у кровати соответствуют двум клавишам выключателя. Прикроватные лампы и зеркало включаются отдельно.</div>`;
}
function renderMap() {
  document
    .querySelectorAll(".floor-map")
    .forEach((m) =>
      m.classList.toggle("hidden", m.id !== `floor-${activeFloor}`),
    );
  document.querySelectorAll(".floor-tab").forEach((t) => {
    const a = Number(t.dataset.floor) === activeFloor;
    t.classList.toggle("active", a);
    t.setAttribute("aria-selected", a);
  });
  document.querySelector(".floor-label").textContent = `${activeFloor} этаж`;
  document.querySelectorAll(".floor-room").forEach((el) => {
    const room = rooms[el.dataset.room],
      active = room.devices.some(
        (d) => ["light", "plug"].includes(d.kind) && isOn(d.id),
      );
    el.classList.toggle("selected", el.dataset.room === selectedRoom);
    el.classList.toggle("room-active", active);
  });
  document
    .querySelectorAll("[data-light-layer]")
    .forEach((layer) =>
      layer.classList.toggle("is-on", isOn(layer.dataset.lightLayer)),
    );
  document
    .querySelectorAll("[data-light-device]")
    .forEach((el) =>
      el.classList.toggle("is-on", isOn(el.dataset.lightDevice)),
    );
  document
    .querySelectorAll("[data-device-state]")
    .forEach((el) =>
      el.classList.toggle("is-on", isOn(el.dataset.deviceState)),
    );
  document.querySelectorAll("[data-light-preset]").forEach((button) => {
    const preset = lightPresets[button.dataset.lightPreset];
    button.classList.toggle(
      "active",
      preset.length === secondFloorLightIds.filter((id) => isOn(id)).length &&
        preset.every(isOn),
    );
  });
  const vacuumMarker = document.querySelector("#vacuum-2-marker");
  const vacuumCleaning = state.vacuums["vacuum-2"].state === "Убирает";
  if (vacuumMarker)
    vacuumMarker.classList.toggle("is-cleaning", vacuumCleaning);
  document.querySelector("#vacuum-2-robot")?.classList.toggle("is-cleaning", vacuumCleaning);
  document.querySelector("#vacuum-route-line")?.classList.toggle("is-cleaning", vacuumCleaning);
  document.querySelector("#aircon-flow")?.classList.toggle("is-on", isOn("f2-aircon"));
  document.querySelector("#tv-screen")?.classList.toggle("is-on", isOn("f2-tv"));
}
function renderSummary() {
  document.querySelector("#lights-count").textContent = Object.values(
    state.devices,
  ).filter(Boolean).length;
  document.querySelector("#vacuum-1-summary").textContent =
    displayVacuum("vacuum-1");
  document.querySelector("#vacuum-2-summary").textContent =
    displayVacuum("vacuum-2");
}
function render() {
  syncTvTimer();
  renderMap();
  renderRoomPanel();
  renderSummary();
}
function setVacuum(id, action = "toggle") {
  const v = state.vacuums[id];
  v.state =
    action === "home"
      ? "Возвращается на базу"
      : v.state === "Убирает"
        ? "На паузе"
        : "Убирает";
  save();
  render();
  showToast(
    `${id === "vacuum-1" ? "Робот 1 этажа" : "Робот 2 этажа"}: ${v.state.toLowerCase()}`,
  );
}
function openVacuumSettings(id) {
  const v = state.vacuums[id],
    name = id === "vacuum-1" ? "Xiaomi M40 · 1 этаж" : "Xiaomi M40 · 2 этаж";
  vacuumModal.innerHTML = `<div class="modal-content"><div class="modal-top"><div><p class="eyebrow">НАСТРОЙКИ УБОРКИ</p><h2>${name}</h2><p>${displayVacuum(id)} · ${v.route}</p></div><button class="modal-close" data-close-modal="vacuum-modal">×</button></div><div class="setting-group"><strong>Тип уборки</strong><div class="mode-options">${["Сухая уборка", "Влажная", "Комбо"].map((x) => `<button class="mode-pill ${v.cleaning === x ? "active" : ""}" data-vacuum-cleaning="${x}" data-vacuum-id="${id}">${x}</button>`).join("")}</div></div><div class="setting-group"><strong>Режим мощности</strong><div class="mode-options">${["Тихий", "Стандарт", "Турбо", "Макс"].map((x) => `<button class="mode-pill ${v.mode === x ? "active" : ""}" data-vacuum-mode="${x}" data-vacuum-id="${id}">${x}</button>`).join("")}</div></div><div class="setting-group"><strong>Маршрут уборки</strong><div class="mode-options">${["Вся карта", "По комнатам", "Точечная"].map((x) => `<button class="mode-pill ${v.route === x ? "active" : ""}" data-vacuum-route="${x}" data-vacuum-id="${id}">${x}</button>`).join("")}</div></div><div class="modal-actions"><button class="modal-secondary" data-vacuum-home="${id}">На базу</button><button class="modal-primary" data-vacuum-start="${id}">${v.state === "Убирает" ? "Пауза" : "Начать уборку"}</button></div></div>`;
  vacuumModal.showModal();
}
function openCamera(type) {
  const title = type === "kitchen" ? "Камера кухни" : "Камеры участка",
    text =
      type === "kitchen"
        ? "Камера появится после добавления регистратора в Home Assistant."
        : "Камеры вокруг дома будут добавлены единым подключением регистратора.";
  cameraModal.innerHTML = `<div class="modal-content"><div class="modal-top"><div><p class="eyebrow">ВИДЕОНАБЛЮДЕНИЕ</p><h2>${title}</h2><p>Демо-режим</p></div><button class="modal-close" data-close-modal="camera-modal">×</button></div><div class="camera-feed"><div><b>Видео появится после подключения</b>${text}</div></div><div class="room-tip"><strong>Подключение позже:</strong><br>понадобятся модель регистратора, его локальный IP и отдельная учётная запись только для просмотра.</div></div>`;
  cameraModal.showModal();
}
function runScene(scene) {
  if (scene === "night" || scene === "away") {
    Object.keys(state.devices).forEach((id) => (state.devices[id] = false));
    state.tvTimers["f2-tv"] = null;
    if (scene === "away")
      Object.values(state.vacuums).forEach((v) => {
        if (v.state === "Убирает") v.state = "На паузе";
      });
    showToast(
      scene === "night"
        ? "Сценарий «Спокойной ночи» запущен"
        : "Дом переведён в режим «Никого нет дома»",
    );
  } else {
    const id = scene === "clean-first" ? "vacuum-1" : "vacuum-2";
    state.vacuums[id].state = "Убирает";
    showToast(`Уборка ${scene === "clean-first" ? "1" : "2"} этажа запущена`);
  }
  save();
  render();
}
function setLightPreset(preset) {
  secondFloorLightIds.forEach((id) => {
    state.devices[id] = lightPresets[preset].includes(id);
  });
  save();
  render();
  showToast(
    `Свет: ${document.querySelector(`[data-light-preset="${preset}"]`).textContent.toLowerCase()}`,
  );
}
vacuumModal.addEventListener("click", (e) => {
  const mode = e.target.closest("[data-vacuum-mode]"),
    cleaning = e.target.closest("[data-vacuum-cleaning]"),
    route = e.target.closest("[data-vacuum-route]"),
    home = e.target.closest("[data-vacuum-home]"),
    start = e.target.closest("[data-vacuum-start]");
  if (mode || cleaning || route) {
    const id = (mode || cleaning || route).dataset.vacuumId;
    if (mode) state.vacuums[id].mode = mode.dataset.vacuumMode;
    else if (cleaning) state.vacuums[id].cleaning = cleaning.dataset.vacuumCleaning;
    else state.vacuums[id].route = route.dataset.vacuumRoute;
    save();
    render();
    vacuumModal.close();
    openVacuumSettings(id);
    e.stopPropagation();
  } else if (home || start) {
    const id =
      (home || start).dataset.vacuumHome || (home || start).dataset.vacuumStart;
    setVacuum(id, home ? "home" : "toggle");
    vacuumModal.close();
    openVacuumSettings(id);
    e.stopPropagation();
  }
});
document.addEventListener("click", (e) => {
  const tvToggle = e.target.closest("[data-tv-toggle]");
  if (tvToggle) return toggleTv();
  const tvTimer = e.target.closest("[data-tv-timer]");
  if (tvTimer) return setTvTimer(Number(tvTimer.dataset.tvTimer) || 30);
  const room = e.target.closest(".floor-room");
  if (room) {
    selectedRoom = room.dataset.room;
    activeFloor = selectedRoom.startsWith("f2-") ? 2 : 1;
    const primaryLight = room.dataset.primaryLight
      ? rooms[selectedRoom].devices.find(
          (device) => device.id === room.dataset.primaryLight,
        )
      : rooms[selectedRoom].devices.find((device) => device.kind === "light");
    if (selectedRoom.startsWith("f2-") && primaryLight)
      return toggleMapLight(
        primaryLight.id,
        room.dataset.primaryLight ? primaryLight.name : rooms[selectedRoom].title,
      );
    render();
    return;
  }
  const tab = e.target.closest(".floor-tab");
  if (tab) {
    activeFloor = Number(tab.dataset.floor);
    selectedRoom = activeFloor === 1 ? "f1-kitchen" : "f2-guest";
    render();
    return;
  }
  const toggle = e.target.closest("[data-toggle]");
  if (toggle) return toggleMapLight(toggle.dataset.toggle);
  const settings = e.target.closest("[data-vacuum-settings],[data-vacuum]");
  if (settings)
    return openVacuumSettings(
      settings.dataset.vacuumSettings || settings.dataset.vacuum,
    );
  const music = e.target.closest("[data-music]");
  if (music)
    return showToast(
      "После подключения Яндекс Станции здесь появится выбор музыки.",
    );
  const camera = e.target.closest("[data-camera]");
  if (camera) return openCamera(camera.dataset.camera);
  const mode = e.target.closest("[data-vacuum-mode]");
  if (mode) {
    state.vacuums[mode.dataset.vacuumId].mode = mode.dataset.vacuumMode;
    save();
    render();
    return openVacuumSettings(mode.dataset.vacuumId);
  }
  const route = e.target.closest("[data-vacuum-route]");
  if (route) {
    state.vacuums[route.dataset.vacuumId].route = route.dataset.vacuumRoute;
    save();
    render();
    return openVacuumSettings(route.dataset.vacuumId);
  }
  const home = e.target.closest("[data-vacuum-home]");
  if (home) {
    setVacuum(home.dataset.vacuumHome, "home");
    return openVacuumSettings(home.dataset.vacuumHome);
  }
  const start = e.target.closest("[data-vacuum-start]");
  if (start) {
    setVacuum(start.dataset.vacuumStart);
    return openVacuumSettings(start.dataset.vacuumStart);
  }
  const close = e.target.closest("[data-close-modal]");
  if (close)
    return document.querySelector(`#${close.dataset.closeModal}`).close();
  const scene = e.target.closest("[data-scene]");
  if (scene) runScene(scene.dataset.scene);
});
document.addEventListener("click", (e) => {
  const mapLight = e.target.closest("[data-map-toggle]"),
    mapVacuum = e.target.closest("[data-map-vacuum]"),
    roomSelect = e.target.closest("[data-room-select]");
  if (mapLight) toggleMapLight(mapLight.dataset.mapToggle);
  if (mapVacuum) openVacuumSettings(mapVacuum.dataset.mapVacuum);
  if (roomSelect) {
    selectedRoom = roomSelect.dataset.roomSelect;
    activeFloor = 2;
    render();
  }
});
document.addEventListener("click", (e) => {
  const preset = e.target.closest("[data-light-preset]");
  if (preset) setLightPreset(preset.dataset.lightPreset);
});
document.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const control = e.target.closest(
    ".photo-room,[data-map-toggle],[data-map-vacuum],[data-room-select]",
  );
  if (!control) return;
  e.preventDefault();
  control.click();
});
if ("serviceWorker" in navigator)
  navigator.serviceWorker.register("./service-worker.js?v=12").catch(() => {});
render();
