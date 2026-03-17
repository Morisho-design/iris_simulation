const wall = document.getElementById("wall");
const floor = document.getElementById("floor");
const furniture = document.getElementById("furniture");
const butsudan = document.getElementById("butsudan");

const toggleBtn = document.getElementById("toggleFurniture");
const stage = document.getElementById("stage");
const viewer = document.querySelector(".viewer");

let furnitureVisible = false;

/* 全選択肢 */
const walls = [
  { file: "walls_beige.png", label: "ベージュ" },
  { file: "walls_beige2.png", label: "ベージュ 2" },
  { file: "walls_brown.png", label: "ブラウン" },
  { file: "walls_ivory.png", label: "アイボリー" },
  { file: "walls_ivory2.png", label: "アイボリー 2" },
  { file: "walls_washitsu.png", label: "和室" },
  { file: "walls_washitsu2.png", label: "和室 床の間" },
  { file: "walls_white.png", label: "ホワイト" }
];

const floors = [
  { file: "floors_dark.png", label: "ダーク" },
  { file: "floors_ivory.png", label: "アイボリー" },
  { file: "floors_middle.png", label: "ミドル" },
  { file: "floors_natural.png", label: "ナチュラル" },
  { file: "floors_oak.png", label: "オーク" },
  { file: "floors_tatami.png", label: "畳" },
  { file: "floors_tatami2.png", label: "畳 2" },
  { file: "floors_wall.png", label: "壁床一体" },
  { file: "floors_light.png", label: "ライト" }
];

const furnitures = [
  { file: "furniture_dark.png", label: "家具 ダーク" },
  { file: "furniture_light.png", label: "家具 ライト" }
];

const butsudans = [
  { file: "iris1200.png", label: "アイリス 1200" },
  { file: "iris1300.png", label: "アイリス 1300" },
  { file: "iris1300tamo.png", label: "アイリス 1300 タモ" },
  { file: "iris1500.png", label: "アイリス 1500" },
  { file: "irisEX1200.png", label: "アイリス EX 1200" },
  { file: "irisEX1300.png", label: "アイリス EX 1300" }
];

function createButtons(items, containerId, folder, target, isFurniture = false) {
  const container = document.getElementById(containerId);

  items.forEach((item) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = item.label;

    btn.addEventListener("click", () => {
      target.src = `${folder}/${item.file}`;

      if (isFurniture) {
        furnitureVisible = true;
        furniture.style.display = "block";
        toggleBtn.textContent = "表示中";
      }
    });

    container.appendChild(btn);
  });
}

toggleBtn.addEventListener("click", () => {
  furnitureVisible = !furnitureVisible;
  furniture.style.display = furnitureVisible ? "block" : "none";
  toggleBtn.textContent = furnitureVisible ? "表示中" : "非表示";
});

function fitStage() {
  const baseWidth = 894;
  const baseHeight = 1016;

  const availableWidth = viewer.clientWidth - 24;
  const availableHeight = viewer.clientHeight - 24;

  if (availableWidth <= 0 || availableHeight <= 0) return;

  const scaleW = availableWidth / baseWidth;
  const scaleH = availableHeight / baseHeight;
  const scale = Math.min(scaleW, scaleH, 1);

  stage.style.transform = `scale(${scale})`;
}

window.addEventListener("load", fitStage);
window.addEventListener("resize", fitStage);

createButtons(walls, "wallButtons", "walls", wall);
createButtons(floors, "floorButtons", "floors", floor);
createButtons(furnitures, "furnitureButtons", "furniture", furniture, true);
createButtons(butsudans, "butsudanButtons", "butsudan", butsudan);
