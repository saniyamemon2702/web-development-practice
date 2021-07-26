window.addEventListener("load", (event) => {
  var amount = parseFloat(prompt("Enter Investment Amount:"));
  document.getElementById("amt").innerText = amount;
  console.log("Amount:" + amount);

  var interestRate = 7.5;
  document.getElementById("ir").innerText = "7.5";
  console.log("Rate:" + interestRate);

  var year = parseInt(prompt("Enter Years:"));
  document.getElementById("year").innerText = amount;
  console.log("Years:" + year);
});
