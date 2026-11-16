const rooms = {
  "f1-office": { title: "Кабинет", floor: "1 этаж", devices: [
    { id: "f1-office-light", icon: "☀", name: "Основной свет", kind: "light" },
    { id: "f1-office-alice", icon: "♫", name: "Алиса Мини с часами", kind: "speaker" }
  ]},
  "f1-entry": { title: "Предбанник", floor: "1 этаж", devices: [
    { id: "f1-entry-light", icon: "☀", name: "Свет предбанника", kind: "light" }
  ]},
  "f1-hall": { title: "Коридор", floor: "1 этаж", devices: [
    { id: "f1-hall-light-a", icon: "☀", name: "Основной свет 1", kind: "light" },
    { id: "f1-hall-light-b", icon: "☀", name: "Основной свет 2", kind: "light" },
    { id: "f1-street-light", icon: "◉", name: "Свет улицы", kind: "light" }
  ]},
  "f1-kitchen": { title: "Кухня", floor: "1 этаж · Rooms 3–4", devices: [
    { id: "f1-kitchen-light", icon: "☀", name: "Основной свет", kind: "light" },
    { id: "f1-plug-1", icon: "⌁", name: "Умная розетка 1", kind: "plug" },
    { id: "f1-plug-2", icon: "⌁", name: "Умная розетка 2", kind: "plug" },
    { id: "vacuum-1", icon: "✦", name: "Xiaomi M40", kind: "vacuum" },
    { id: "f1-alice", icon: "♫", name: "Алиса Мини", kind: "speaker" }
  ]},
  "f1-toilet": { title: "Туалет", floor: "1 этаж", devices: [{ id: "f1-toilet-light", icon: "☀", name: "Свет", kind: "light" }]},
  "f1-terrace": { title: "Терраса", floor: "1 этаж", devices: [{ id: "f1-terrace-light", icon: "☀", name: "Свет террасы", kind: "light" }]},
  "f2-stairs": { title: "Лестница", floor: "2 этаж", devices: [{ id: "f2-stairs-light", icon: "☀", name: "Свет лестницы", kind: "light" }]},
  "f2-guest": { title: "Гостевая спальня", floor: "2 этаж", devices: [
    { id: "f2-guest-main", icon: "☀", name: "Основной свет", kind: "light" }, { id: "f2-guest-wardrobe", icon: "◉", name: "Гардероб", kind: "light" }
  ]},
  "f2-bath": { title: "Ванная", floor: "2 этаж", devices: [
    { id: "f2-bath-main", icon: "☀", name: "Основной свет", kind: "light" }, { id: "f2-bath-mirror", icon: "◉", name: "Зеркало", kind: "light" }, { id: "f2-leak", icon: "◈", name: "Датчик протечки", kind: "sensor" }
  ]},
  "f2-office": { title: "Кабинет", floor: "2 этаж", devices: [
    { id: "f2-office-light", icon: "☀", name: "Свет", kind: "light" }, { id: "vacuum-2", icon: "✦", name: "Xiaomi M40", kind: "vacuum" }, { id: "f2-temperature", icon: "⌁", name: "Температура · 22.8°", kind: "sensor" }
  ]},
  "f2-bedroom": { title: "Спальня", floor: "2 этаж", devices: [
    { id: "f2-bedroom-main", icon: "☀", name: "Основной свет", kind: "light" }, { id: "f2-bed-lamp-1", icon: "◉", name: "Лампа у кровати 1", kind: "light" }, { id: "f2-bed-lamp-2", icon: "◉", name: "Лампа у кровати 2", kind: "light" }, { id: "f2-alice-max", icon: "♫", name: "Алиса Макс", kind: "speaker" }
  ]}
};

const defaults = { devices: { "f1-office-light": true, "f1-entry-light": false, "f1-hall-light-a": true, "f1-hall-light-b": true, "f1-street-light": false, "f1-kitchen-light": true, "f1-plug-1": false, "f1-plug-2": true, "f1-toilet-light": false, "f1-terrace-light": false, "f2-stairs-light": false, "f2-guest-main": false, "f2-guest-wardrobe": false, "f2-bath-main": false, "f2-bath-mirror": false, "f2-office-light": true, "f2-bedroom-main": false, "f2-bed-lamp-1": true, "f2-bed-lamp-2": true }, vacuums: { "vacuum-1": { state: "На базе", battery: 100 }, "vacuum-2": { state: "На базе", battery: 82 } } };
let state = JSON.parse(localStorage.getItem("home-dashboard-demo")) || structuredClone(defaults);
let activeFloor = 1;
let selectedRoom = "f1-kitchen";

const roomPanel = document.querySelector("#room-panel");
const toast = document.querySelector("#toast");

function save() { localStorage.setItem("home-dashboard-demo", JSON.stringify(state)); }
function isOn(id) { return Boolean(state.devices[id]); }
function setDevice(id, on) { state.devices[id] = on; save(); render(); }
function toggleDevice(id) { setDevice(id, !isOn(id)); }
function showToast(text) { toast.textContent = text; toast.classList.add("show"); clearTimeout(showToast.timeout); showToast.timeout = setTimeout(() => toast.classList.remove("show"), 2800); }

function displayVacuum(id) {
  const vacuum = state.vacuums[id];
  return `${vacuum.state} · ${vacuum.battery}%`;
}

function renderRoomPanel() {
  const room = rooms[selectedRoom];
  if (!room) { roomPanel.innerHTML = '<div class="empty-panel"><b>Выберите комнату</b>На карте появятся её устройства.</div>'; return; }
  const items = room.devices.map(device => {
    if (device.kind === "sensor") return `<div class="control-row"><span class="control-icon">${device.icon}</span><span class="control-copy"><strong>${device.name}</strong><small>${device.id === "f2-leak" ? "Сухо · Zigbee" : "Zigbee · данные в демо"}</small></span></div>`;
    if (device.kind === "vacuum") return `<div class="control-row"><span class="control-icon">${device.icon}</span><span class="control-copy"><strong>${device.name}</strong><small>${displayVacuum(device.id)}</small></span><button class="device-action" data-vacuum-action="${device.id}">${state.vacuums[device.id].state === "Убирает" ? "Пауза" : "Старт"}</button></div>`;
    if (device.kind === "speaker") return `<div class="control-row"><span class="control-icon">${device.icon}</span><span class="control-copy"><strong>${device.name}</strong><small>Яндекс Музыка · тестовый режим</small></span><button class="device-action" data-music="${device.id}">Играть</button></div>`;
    const status = isOn(device.id) ? "Включено" : "Выключено";
    return `<div class="control-row"><span class="control-icon">${device.icon}</span><span class="control-copy"><strong>${device.name}</strong><small>${status} · Tuya</small></span><button class="toggle ${isOn(device.id) ? "on" : ""}" data-toggle="${device.id}" aria-label="Переключить ${device.name}"><span></span></button></div>`;
  }).join("");
  roomPanel.innerHTML = `<p class="eyebrow">КОМНАТА</p><h3>${room.title}</h3><p>${room.floor}</p><div class="room-devices">${items}</div><div class="room-tip"><strong>Сейчас демо.</strong><br>Позже элементы подключатся к Home Assistant без изменения карты.</div>`;
}

function renderMap() {
  document.querySelectorAll(".floor-map").forEach(map => map.classList.toggle("hidden", map.id !== `floor-${activeFloor}`));
  document.querySelectorAll(".floor-tab").forEach(tab => { const active = Number(tab.dataset.floor) === activeFloor; tab.classList.toggle("active", active); tab.setAttribute("aria-selected", active); });
  document.querySelector(".floor-label").textContent = `${activeFloor} этаж`;
  document.querySelectorAll(".floor-room").forEach(element => {
    const room = rooms[element.dataset.room];
    const hasActive = room && room.devices.some(device => device.kind !== "sensor" && device.kind !== "vacuum" && device.kind !== "speaker" && isOn(device.id));
    element.classList.toggle("selected", element.dataset.room === selectedRoom);
    element.classList.toggle("room-active", hasActive);
  });
}

function renderSummary() {
  const count = Object.values(state.devices).filter(Boolean).length;
  document.querySelector("#lights-count").textContent = count;
  document.querySelector("#vacuum-1-summary").textContent = displayVacuum("vacuum-1");
  document.querySelector("#vacuum-2-summary").textContent = displayVacuum("vacuum-2");
}

function render() { renderMap(); renderRoomPanel(); renderSummary(); }

function setVacuum(id, action = "toggle") {
  const vacuum = state.vacuums[id];
  if (action === "home") vacuum.state = "Возвращается на базу";
  else vacuum.state = vacuum.state === "Убирает" ? "На паузе" : "Убирает";
  save(); render(); showToast(`${id === "vacuum-1" ? "Робот 1 этажа" : "Робот 2 этажа"}: ${vacuum.state.toLowerCase()}`);
}

function runScene(scene) {
  if (scene === "night" || scene === "away") {
    Object.keys(state.devices).forEach(id => { state.devices[id] = false; });
    if (scene === "away") Object.values(state.vacuums).forEach(vacuum => { if (vacuum.state === "Убирает") vacuum.state = "На паузе"; });
    showToast(scene === "night" ? "Сценарий «Спокойной ночи» запущен" : "Дом переведён в режим «Никого нет дома»");
  } else {
    const id = scene === "clean-first" ? "vacuum-1" : "vacuum-2";
    state.vacuums[id].state = "Убирает";
    showToast(`Уборка ${scene === "clean-first" ? "1" : "2"} этажа запущена`);
  }
  save(); render();
}

document.addEventListener("click", event => {
  const roomElement = event.target.closest(".floor-room");
  if (roomElement) { selectedRoom = roomElement.dataset.room; activeFloor = selectedRoom.startsWith("f2-") ? 2 : 1; render(); return; }
  const floorTab = event.target.closest(".floor-tab");
  if (floorTab) { activeFloor = Number(floorTab.dataset.floor); selectedRoom = activeFloor === 1 ? "f1-kitchen" : "f2-bedroom"; render(); return; }
  const toggle = event.target.closest("[data-toggle]"); if (toggle) { toggleDevice(toggle.dataset.toggle); return; }
  const vacuumButton = event.target.closest("[data-vacuum-action],[data-vacuum]"); if (vacuumButton) { setVacuum(vacuumButton.dataset.vacuumAction || vacuumButton.dataset.vacuum); return; }
  const music = event.target.closest("[data-music]"); if (music) { showToast("В демо музыка не запускается. После подключения Яндекс Станции добавим плейлист."); return; }
  const scene = event.target.closest("[data-scene]"); if (scene) { runScene(scene.dataset.scene); return; }
  if (event.target.closest("#theme-toggle")) { document.body.classList.toggle("high-contrast"); }
});

if ("serviceWorker" in navigator) navigator.serviceWorker.register("./service-worker.js").catch(() => {});
render();
