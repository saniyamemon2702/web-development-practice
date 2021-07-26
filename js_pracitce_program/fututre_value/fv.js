window.addEventListener("load", (event) => {
  var futureValue, interest;

  //Amount
  var amount = parseFloat(prompt("Enter Investment Amount:"));
  document.getElementById("amt").innerText = amount;
  console.log("Amount:" + amount);

  // Interest Rate
  var interestRate = parseFloat(prompt("Enter Interest Rate:"));
  document.getElementById("ir").innerText = interestRate;
  console.log("Rate:" + interestRate);

  //Years
  var year = parseInt(prompt("Enter Years:"));
  document.getElementById("year").innerText = amount;
  console.log("Years:" + year);

  futureValue = amount;
  for (i = 1; i <= year; i++) {
    interest = (futureValue * interestRate) / 100;
    futureValue += interest;
    var html = `Year ${i}=${interest} Value=${futureValue}`;

    var p = document.createElement("p");
    p.innerText = html;
    document.querySelector(".container").append(p);
  }
});
