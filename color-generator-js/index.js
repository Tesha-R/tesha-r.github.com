const seedColor = document.getElementById("seed-color");
const colorGen = document.getElementById("color-gen");
const schemeSelect = document.getElementById("scheme-select");
const col = document.querySelector(".col");

const baseURL = "https://www.thecolorapi.com";

// clicking button makes a request to the color API and returns color scheme
colorGen.addEventListener("submit", (e) => {
  e.preventDefault();
  // get color from input; seed color
  // get hex value from color picker and remove pound sign
  let hex = seedColor.value;
  hex = hex.slice(1);
  col.innerHTML = "";
  // request to color API
  fetch(`${baseURL}/scheme?hex=${hex}&mode=${schemeSelect.value}&count=6`)
    .then((res) => res.json())
    .then((colors) => {
      // console.log(colors);
      colors.colors.forEach((color, index) => {
        //console.log(color);
        col.innerHTML += `
    <div class="colors" style="background-color: ${color.hex.value}">
    <p class="color-hex">${color.hex.value}</p>
    </div>
    `;
      });
    });
});
