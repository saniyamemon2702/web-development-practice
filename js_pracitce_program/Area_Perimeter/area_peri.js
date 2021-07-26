window.addEventListener("load", (event) => {
  var length = parseFloat(prompt("Enter Length:"));
  var width = parseFloat(prompt("Enter width:"));
  var area = length * width;
  var perimeter = 2 * (length + width);
  document.getElementById("len").innerText = length;
  document.getElementById("wid").innerText = width;
  document.getElementById("area").innerText = area;
  document.getElementById("perimeter").innerText = perimeter;
  //   alert("Miles per gallon = " + mpg);
});
