const wall = document.getElementById("wall");
const floor = document.getElementById("floor");
const furniture = document.getElementById("furniture");
const butsudan = document.getElementById("butsudan");

const wallButtons = document.getElementById("wallButtons");
const floorButtons = document.getElementById("floorButtons");
const furnitureButtons = document.getElementById("furnitureButtons");
const butsudanButtons = document.getElementById("butsudanButtons");

const toggleFurniture = document.getElementById("toggleFurniture");


// =====================
// データ（日本語化）
// =====================

const wallData = [
  { label: "アイボリー", src: "walls/walls_ivory.png" },
  { label: "グレー", src: "walls/walls_gray.png" }
];

const floorData = [
  { label: "ナチュラル", src: "floors/floors_natural.png" },
  { label: "ウォールナット", src: "floors/floors_walnut.png" }
];

const furnitureData = [
  { label: "なし", src: "" },
  { label: "サイドボード", src: "furniture/board.png" }
];

const butsudanData = [
  { label: "アイリス 1300", src: "butsudan/iris1300.png", width: "18%" },
  { label: "アイリス 1500", src: "butsudan/iris1500.png", width: "20%" },
  { label: "アイリス 1700", src: "butsudan/iris1700.png", width: "22%" }
];


// =====================
// ボタン生成
// =====================

function createButtons(data, container, callback) {
  data.forEach(item => {
    const btn = document.createElement("button");
    btn.textContent = item.label;

    btn.addEventListener("click", () => {
      callback(item);
    });

    container.appendChild(btn);
  });
}


// 壁
createButtons(wallData, wallButtons, item => {
  wall.src = item.src;
});

// 床
createButtons(floorData, floorButtons, item => {
  floor.src = item.src;
});

// 家具
createButtons(furnitureData, furnitureButtons, item => {
  if (item.src === "") {
    furniture.classList.add("hidden");
  } else {
    furniture.src = item.src;
    furniture.classList.remove("hidden");
  }
});

// 仏壇
createButtons(butsudanData, butsudanButtons, item => {
  butsudan.src = item.src;
  butsudan.style.width = item.width;
});


// =====================
// 家具トグル
// =====================

toggleFurniture.addEventListener("click", () => {
  furniture.classList.toggle("hidden");

  toggleFurniture.textContent =
    furniture.classList.contains("hidden") ? "表示" : "非表示";
});
