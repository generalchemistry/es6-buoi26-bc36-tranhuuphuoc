const domId = (id) => {
  return document.getElementById(id);
};

const colorList = ["pallet",  "viridian",  "pewter",  "cerulean",  "vermillion",  "lavender",  "celadon",  "saffron",  "fuschia",  "cinnabar",];

let currentColorIndex = 0;

const loadColorButton = () => {
  let html = "";
  for (let i in colorList) {
    html += `
    <button class="color-button ${colorList[i]}" onclick=changeHouseColor(${i})></button> `;
  }
  domId("colorContainer").innerHTML = html;
};

const changeHouseColor = (idx) => {
  domId("house").classList.remove(colorList[currentColorIndex]);
  domId("colorContainer").getElementsByTagName("button")[currentColorIndex].classList.remove("active");

  domId("house").classList.add(colorList[idx]);
  domId("colorContainer").getElementsByTagName("button")[idx].classList.add("active");
  currentColorIndex = idx;
};

window.onload = loadColorButton();
window.onload = changeHouseColor(0);
