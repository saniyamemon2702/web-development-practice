window.addEventListener("load", (event) => {
  var entry = [];
  var average;
  var total = 0;

  //get 4 scores from user and add them together
  for (i = 0; i < 4; i++) {
    entry[i] = parseFloat(prompt("Enter test score"));
    total = total + entry[i];
    document.getElementById("score" + (i + 1)).innerText = entry[i];
    console.log("Score" + i + ":" + entry[i]);
  }
  //calculate the average
  average = total / 4;
  document.getElementById("avg").innerText = average.toFixed(2);
  document.getElementById("maxScore").innerText = Math.max(...entry);
});
