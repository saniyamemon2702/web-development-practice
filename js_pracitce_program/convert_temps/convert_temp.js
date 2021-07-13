"use strict";
var $ = function (id) {
  return document.getElementById(id);
};

var clearTextBoxes = function () {
  $("degrees_entered").value = "";
  $("degrees_computed").value = "";
};

function toFahrenheit() {
  clearTextBoxes();
  console.log("Inside  fahrenheit");

  $("degrees_entered").focus();

  $("degree_label_1").innerText = "Enter C Degrees:";
  $("degree_label_2").innerText = "Degrees Fahrenheit:";

  //   convertTemp();
}

function toCelsius() {
  clearTextBoxes();
  console.log("Inside  celcius");

  $("degrees_entered").focus();

  $("degree_label_1").innerText = "Enter F Degrees:";
  $("degree_label_2").innerText = "Degrees Celcius:";

  //   convertTemp();
}

function convertTemp() {
  console.log("ConvertTemp called...");

  let userInput = parseFloat($("degrees_entered").value);
  let computedVal = 0;
  console.log("Fetched:", userInput);

  if (userInput) {
    if ($("to_celsius").checked) {
      console.log("Fahrenheit to Celsius is checkd...");
      computedVal = (userInput - 32) * (5 / 9);
    } else if ($("to_fahrenheit").checked) {
      console.log("Celsius to Fahrenheit is checkd...");
      computedVal = userInput * (9 / 5) + 32;
    }
    $("degrees_computed").value = computedVal.toFixed(0);
  } else {
    clearTextBoxes();
    alert("You must enter a valid number for degrees.");
  }
  $("degrees_entered").focus();
}

window.onload = function () {
  $("convert").onclick = convertTemp;
  $("to_celsius").onclick = toCelsius;
  $("to_fahrenheit").onclick = toFahrenheit;
  $("degrees_entered").focus();
};
