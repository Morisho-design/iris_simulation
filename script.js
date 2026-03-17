const wall = document.getElementById("wall");
const floor = document.getElementById("floor");
const furniture = document.getElementById("furniture");
const butsudan = document.getElementById("butsudan");

const toggleBtn = document.getElementById("toggleFurniture");
const stage = document.getElementById("stage");
const viewer = document.querySelector(".viewer");

let furnitureVisible = false;

/* 全選択肢 */
/* データ */
const walls = [
  { file: "walls_beige.png", label: "ベージュ" },
  { file: "walls_beige2.png", label: "ベージュ 2" },
  { file: "walls_brown.png", label: "ブラウン" },
  { file: "walls_ivory.png", label: "アイボリー" },
  { file: "walls_ivory2.png", label: "アイボリー 2" },
  { file: "walls_washitsu.png", label: "和室" },
  { file: "walls_washitsu2.png", label: "和室 床の間" },
  { file: "walls_white.png", label: "ホワイト" }
"walls_beige.png",
"walls_beige2.png",
"walls_brown.png",
"walls_ivory.png",
"walls_ivory2.png",
"walls_washitsu.png",
"walls_washitsu2.png",
"walls_white.png"
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
"floors_dark.png",
"floors_ivory.png",
"floors_middle.png",
"floors_natural.png",
"floors_oak.png",
"floors_tatami.png",
"floors_tatami2.png",
"floors_wall.png",
"floors_light.png"
];

const furnitures = [
  { file: "furniture_dark.png", label: "家具 ダーク" },
  { file: "furniture_light.png", label: "家具 ライト" }
"furniture_dark.png",
"furniture_light.png"
];

const butsudans = [
  { file: "iris1200.png", label: "アイリス 1200" },
  { file: "iris1300.png", label: "アイリス 1300" },
  { file: "iris1300tamo.png", label: "アイリス 1300 タモ" },
  { file: "iris1500.png", label: "アイリス 1500" },
  { file: "irisEX1200.png", label: "アイリス EX 1200" },
  { file: "irisEX1300.png", label: "アイリス EX 1300" }
"iris1200.png",
"iris1300.png",
"iris1300tamo.png",
"iris1500.png",
"irisEX1200.png",
"irisEX1300.png"
];

function createButtons(items, containerId, folder, target, isFurniture = false) {
/* ボタン生成 */
function createButtons(list, containerId, folder, target, isFurniture=false){

  const container = document.getElementById(containerId);

  items.forEach((item) => {
  list.forEach(file=>{

    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = item.label;
    btn.textContent = file;

    btn.addEventListener("click", () => {
      target.src = `${folder}/${item.file}`;
    btn.onclick = ()=>{
      target.src = folder + "/" + file;

      if (isFurniture) {
        furnitureVisible = true;
      if(isFurniture){
        furniture.style.display = "block";
        furnitureVisible = true;
        toggleBtn.textContent = "表示中";
      }
    });
    };

    container.appendChild(btn);

  });
}

toggleBtn.addEventListener("click", () => {
/* 家具切替 */
toggleBtn.onclick = ()=>{

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
};

createButtons(walls, "wallButtons", "walls", wall);
createButtons(floors, "floorButtons", "floors", floor);
createButtons(furnitures, "furnitureButtons", "furniture", furniture, true);
createButtons(butsudans, "butsudanButtons", "butsudan", butsudan);
/* 初期化 */
createButtons(walls,"wallButtons","walls",wall);
createButtons(floors,"floorButtons","floors",floor);
createButtons(furnitures,"furnitureButtons","furniture",furniture,true);
createButtons(butsudans,"butsudanButtons","butsudan",butsudan);
