document.onload(() => {
  var miles = parseFloat(prompt("Enter Miles Driven:"));
  var gallons = parseFloat(prompt("Enter gallons of Gas used:"));
  var mpg = miles / gallons;
  mpg = parseInt(mpg);

  document.getElementById("mile").nodeValue = miles;
  document.getElementById("gallon").nodeValue = gallons;
  document.getElementById("mpg").nodeValue = mpg;
  //   alert("Miles per gallon = " + mpg);
});
