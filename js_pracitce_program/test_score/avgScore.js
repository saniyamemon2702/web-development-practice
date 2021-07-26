window.addEventListener("load", (event) => {
  var entry;
  var average;
  var total = 0;

  //get 4 scores from user and add them together
  entry = prompt("Enter test score");
  var score1 = entry;
  total = total + score1;

  entry = prompt("Enter test score");
  var score2 = entry;
  total = total + score2;

  entry = prompt("Enter test score");
  var score3 = entry;
  total = total + score3;

  entry = prompt("Enter test score");
  var score4 = entry;
  total = total + score4;

  //calculate the average
  average = total / 3;

  document.getElementById("score1").innerText = score1;
  document.getElementById("score2").innerText = score2;
  document.getElementById("score3").innerText = score3;
  document.getElementById("score4").innerText = score4;
  document.getElementById("avg").innerText = average;
});
