const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const h1 = document.querySelector("h1");
h1.style.textAlign = "center";

for (let i = 1; i <= 800; i++) {
  let newImg = document.createElement("img");

  newImg.src = `${baseURL}${i}.png`;
  container.appendChild(newImg);
  const label = document.createElement("span");
  label.textContent = i;
  container.appendChild(newImg);
  container.appendChild(label);
}
