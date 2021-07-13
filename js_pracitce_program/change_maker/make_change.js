var $ = function (id) {
  return document.getElementById(id);
};

function makeChange(c) {
  console.log("Make changes fired");
  let quarters = c / 25;
  $("quarters").value = parseInt(quarters);

  c %= 25;
  console.log("Centes after quarters: " + c);
  let dimes = c / 10;
  $("dimes").value = parseInt(dimes);

  c %= 10;
  console.log("Centes after quarters,dimes: " + c);
  let nickels = parseInt(c / 5);
  $("nickels").value = nickels;

  let pennies = c % 5;
  console.log("Centes after quarters,dimes,nickels: " + c);
  $("pennies").value = pennies;
}

function processEntries() {
  //checkpoint

  var cents = parseInt($("cents").value);

  console.log("Cents fetched:" + cents);
  if (cents >= 0 && cents <= 99) {
    makeChange(cents);
    $("cents").focus();
  } else {
    alert("Please, Enter Valid entry");
    $("cents").value = "";
    $("cents").focus();
  }
}

window.onload = function () {
  $("cents").focus();
  $("calculate").onclick = processEntries;

  $("cents").onclick = $("cents").focus;
};
