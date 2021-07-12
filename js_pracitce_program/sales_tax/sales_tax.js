var $ = function (id) {
  return document.getElementById(id);
};

function processEntries() {
  //checkpoint
  console.log("calculate fired");

  //fetching subtotal
  var subTotal = parseFloat($("subtotal").value);
  console.log("Subtotal Fetched:" + subTotal);

  //fetching tax_rate
  var taxRate = parseFloat($("tax_rate").value);
  console.log("Tax rate fetched:" + taxRate);

  //data validation for subtotal and tax rate.
  if (subTotal > 0 && subTotal < 10000 && taxRate > 0 && taxRate < 12) {
    let calculatedTax = (subTotal * taxRate) / 100;
    let totalVal = calculatedTax + subTotal;
    $("sales_tax").value = calculatedTax.toFixed(2); //rounds upto two decimal point
    $("total").value = totalVal.toFixed(2);

    $("subtotal").focus(); //for focusing subtotal after tax calculation
  } else if (!(subTotal > 0 && subTotal < 10000)) {
    clear();
    alert("Subtotal must be > 0 and < 10000 Tax");
  } else if (!(taxRate > 0 && taxRate < 12)) {
    clear();
    alert(" Rate must be > 0 and < 12");
  }
}

//clear button click event
function clear() {
  console.log("Clear fired");
  $("subtotal").value = "";
  $("tax_rate").value = "";
  $("sales_tax").value = "";
  $("total").value = "";

  $("subtotal").focus();
}

//onload click event
window.onload = function () {
  $("subtotal").focus();
  $("calculate").onclick = processEntries;
  $("clear").onclick = clear;
  $("subtotal").onclick = function () {
    $("subtotal").value = "";
  };
  $("tax_rate").onclick = function () {
    $("tax_rate").value = "";
  };
};
