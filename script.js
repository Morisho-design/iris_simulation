const wall = document.getElementById("wall");
const floor = document.getElementById("floor");
const furniture = document.getElementById("furniture");
const butsudan = document.getElementById("butsudan");
const currentButsudanName = document.getElementById("currentButsudanName");
const toggleFurnitureBtn = document.getElementById("toggleFurnitureBtn");

let furnitureVisible = false;

async function fetchList(path) {
  const res = await fetch(path);
  if (!res.ok) {
    throw new Error(`${path} の読み込みに失敗しました`);
  }
  return await res.json();
}

function makeThumbButton({ file, folder, target, container, onClick, active = false }) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "thumb-btn";
  if (active) btn.classList.add("active");

  const img = document.createElement("img");
  img.src = `${folder}/${file}`;
  img.alt = file;

  const label = document.createElement("div");
  label.className = "thumb-label";
  label.textContent = file.replace(".png", "");

  btn.appendChild(img);
  btn.appendChild(label);

  btn.addEventListener("click", () => {
    target.src = `${folder}/${file}`;

    container.querySelectorAll(".thumb-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    if (onClick) onClick(file);
  });

  container.appendChild(btn);
}

async function loadThumbGroup({
  jsonPath,
  containerId,
  folder,
  target,
  defaultFile,
  onClick
}) {
  const files = await fetchList(jsonPath);
  const container = document.getElementById(containerId);

  files.forEach((file) => {
    makeThumbButton({
      file,
      folder,
      target,
      container,
      onClick,
      active: file === defaultFile
    });
  });
}

async function init() {
  await loadThumbGroup({
    jsonPath: "walls/walls.json",
    containerId: "wallButtons",
    folder: "walls",
    target: wall,
    defaultFile: "walls_ivory.png"
  });

  await loadThumbGroup({
    jsonPath: "floors/floors.json",
    containerId: "floorButtons",
    folder: "floors",
    target: floor,
    defaultFile: "floors_natural.png"
  });

  await loadThumbGroup({
    jsonPath: "furniture/furniture.json",
    containerId: "furnitureButtons",
    folder: "furniture",
    target: furniture,
    defaultFile: "",
    onClick: () => {
      furnitureVisible = true;
      furniture.style.display = "block";
      toggleFurnitureBtn.textContent = "家具 ON";
      toggleFurnitureBtn.classList.add("active");
    }
  });

  await loadThumbGroup({
    jsonPath: "butsudan/butsudan.json",
    containerId: "butsudanButtons",
    folder: "butsudan",
    target: butsudan,
    defaultFile: "iris1300tamo.png",
    onClick: (file) => {
      currentButsudanName.textContent = file.replace(".png", "");
    }
  });
}

toggleFurnitureBtn.addEventListener("click", () => {
  furnitureVisible = !furnitureVisible;
  furniture.style.display = furnitureVisible ? "block" : "none";
  toggleFurnitureBtn.textContent = furnitureVisible ? "家具 ON" : "家具 OFF";
  toggleFurnitureBtn.classList.toggle("active", furnitureVisible);
});

init().catch((err) => {
  console.error(err);
  alert("json または画像の読み込みに失敗しました。ファイル名と配置を確認してください。");
});