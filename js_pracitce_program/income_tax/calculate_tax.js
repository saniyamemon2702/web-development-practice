"use strict";

var $ = function (id) {
  return document.getElementById(id);
};

var userIncome;

function processEntry() {
  userIncome = parseInt($("income").value);
  console.log("User entered:", userIncome);
  if (userIncome < 0 || isNaN(userIncome)) {
    alert("Please enter Valid income!");
    $("income").value = "";
  } else {
    calculateTax();
    $("income").focus();
  }
}

function calculateTax() {
  console.log("Inside calculate tax function!");
  let tax = 0;
  if (userIncome >= 0 && userIncome <= 9275) {
    tax += userIncome * 0.1;
  } else if (userIncome > 9275 && userIncome <= 37650) {
    tax += 927.5 + (userIncome - 9275) * 0.15;
  } else if (userIncome > 37650 && userIncome <= 91150) {
    tax += 5183.75 + (userIncome - 37650) * 0.25;
  } else if (userIncome > 91150 && userIncome <= 190150) {
    tax += 18558.75 + (userIncome - 91150) * 0.28;
  } else if (userIncome > 190150 && userIncome <= 413350) {
    tax += 46278.75 + (userIncome - 190150) * 0.33;
  } else if (userIncome > 413350 && userIncome <= 415050) {
    tax += 119934.75 + (userIncome - 413350) * 0.35;
  } else if (userIncome > 415050) {
    tax += 120529.75 + (userIncome - 415050) * 0.396;
  }

  console.log("income: " + userIncome + "\n Tax: " + tax);
  $("tax").value = tax.toFixed(2);
}

window.onload = function () {
  $("calculate").onclick = processEntry;
  $("income").focus();
};
