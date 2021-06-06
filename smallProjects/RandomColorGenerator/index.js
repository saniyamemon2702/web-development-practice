const btn = document.querySelector("button");
const h1 = document.querySelector("h1");

btn.addEventListener("click", function () {
  const newColor = makeRandomColor();
  console.log(newColor);
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
});

const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  console.log(r + g + b <= 200);
  if (r + g + b > 200) {
    h1.style.color = "black";
  } else {
    h1.style.color = "white";
  }
  return `rgb(${r},${g},${b})`;
};
