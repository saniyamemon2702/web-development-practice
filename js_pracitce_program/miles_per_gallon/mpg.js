window.addEventListener("load", (event) => {
  var miles = parseFloat(prompt("Enter Miles Driven:"));
  var gallons = parseFloat(prompt("Enter gallons of Gas used:"));
  var mpg = miles / gallons;
  mpg = parseInt(mpg);

  document.getElementById("mile").innerText = miles;
  document.getElementById("gallon").innerText = gallons;
  document.getElementById("mpg").innerText = mpg;
  //   alert("Miles per gallon = " + mpg);
});
