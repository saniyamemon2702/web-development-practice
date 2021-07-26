window.addEventListener("load", (event) => {
  var futureValue, interest;
  while (1) {
    //Amount
    var amount = parseFloat(prompt("Enter Investment Amount:"));
    document.getElementById("amt").innerText = amount;
    console.log("Amount:" + amount);
    if (amount <= 0) {
      alert("Values must be positive");
      continue;
    } else if (isNaN(amount)) {
      alert("Value must be integer!");
      continue;
    }

    // Interest Rate
    var interestRate = parseFloat(prompt("Enter Interest Rate:"));
    document.getElementById("ir").innerText = interestRate;
    console.log("Rate:" + interestRate);
    if (interestRate <= 0) {
      alert("Values must be positive");
      continue;
    } else if (isNaN(interestRate)) {
      alert("Value must be integer!");
      continue;
    }
    //Years
    var year = parseInt(prompt("Enter Years:"));
    document.getElementById("year").innerText = amount;
    console.log("Years:" + year);
    if (year <= 0) {
      alert("Values must be positive");
      continue;
    } else if (isNaN(year)) {
      alert("Value must be integer!");
      continue;
    }

    futureValue = amount;
    for (i = 1; i <= year; i++) {
      interest = (futureValue * interestRate) / 100;
      futureValue += interest;
      var html = `Year ${i}=${interest.toFixed(
        2
      )} Value=  ${futureValue.toFixed(2)}`;

      var p = document.createElement("p");
      p.innerText = html;
      document.querySelector(".container").append(p);
    }
  }
});
