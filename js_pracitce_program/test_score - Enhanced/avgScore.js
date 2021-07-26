window.addEventListener("load", (event) => {
  var entry = [];
  var average;
  var total = 0;

  //get 4 scores from user and add them together
  for (i = 0; i < 4; i++) {
    entry[i] = parseFloat(prompt("Enter test score"));
    total = total + entry[i];
    console.log("Score" + i + ":" + entry[i]);
    document.getElementById(`score${i}`).innerText = entry[i];
  }
  //calculate the average
  average = total / 4;

  // document.getElementById("score1").innerText = score1;
  // document.getElementById("score2").innerText = score2;
  // document.getElementById("score3").innerText = score3;
  // document.getElementById("score4").innerText = score4;
  document.getElementById("avg").innerText = average.toFixed(2);
  document.getElementById("maxScore").innerText = Math.max(...entry);
});
