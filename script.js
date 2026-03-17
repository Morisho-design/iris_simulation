const wall = document.getElementById("wall");
const floor = document.getElementById("floor");
const furniture = document.getElementById("furniture");
const butsudan = document.getElementById("butsudan");

const toggleBtn = document.getElementById("toggleFurniture");

let furnitureVisible = false;

/* ファイル一覧（そのまま反映） */
const walls = [
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
"floors_dark.png",
"floors_ivory.png",
"floors_middle.png",
"floors_natural.png",
"floors_oak.png",
"floors_tatami.png",
"floors_tatami2.png",
"floors_wall.png",
];

const furnitures = [
"furniture_dark.png",
"furniture_light.png"
];

const butsudans = [
"iris1200.png",
"iris1300.png",
"iris1300tamo.png",
"iris1500.png",
"irisEX1200.png",
"irisEX1300.png"
];

/* ボタン生成 */
function createButtons(list, containerId, folder, target, isFurniture=false){

const container = document.getElementById(containerId);

list.forEach(file=>{
const btn = document.createElement("button");
btn.textContent = file;

btn.onclick = ()=>{
target.src = folder + "/" + file;

if(isFurniture){
furniture.style.display = "block";
furnitureVisible = true;
toggleBtn.textContent = "表示中";
}
};

container.appendChild(btn);
});
}

/* 家具ON/OFF */
toggleBtn.onclick = ()=>{
furnitureVisible = !furnitureVisible;
furniture.style.display = furnitureVisible ? "block" : "none";
toggleBtn.textContent = furnitureVisible ? "表示中" : "非表示";
};

/* スケーリング */
function fit(){
const stage = document.querySelector(".stage");
const scale = window.innerHeight / 1318;
stage.style.transform = `scale(${scale})`;
}

window.addEventListener("load", fit);
window.addEventListener("resize", fit);

/* 初期化 */
createButtons(walls,"wallButtons","walls",wall);
createButtons(floors,"floorButtons","floors",floor);
createButtons(furnitures,"furnitureButtons","furniture",furniture,true);
createButtons(butsudans,"butsudanButtons","butsudan",butsudan);
