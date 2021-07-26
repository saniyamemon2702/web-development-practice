window.addEventListener("load", (event) => {
  var entry;
  var average;
  var total = 0;

  //get 4 scores from user and add them together
  var score1 = parseFloat(prompt("Enter test score"));
  total = total + score1;
  console.log("Score1:" + score1);

  var score2 = parseFloat(prompt("Enter test score"));
  total = total + score2;
  console.log("Score2:" + score2);

  var score3 = parseFloat(prompt("Enter test score"));
  total = total + score3;
  console.log("Score3:" + score3);

  var score4 = parseFloat(prompt("Enter test score"));
  total = total + score4;
  console.log("Score4:" + score4);

  console.log("Total:" + total);
  //calculate the average
  average = total / 4;

  document.getElementById("score1").innerText = score1;
  document.getElementById("score2").innerText = score2;
  document.getElementById("score3").innerText = score3;
  document.getElementById("score4").innerText = score4;
  document.getElementById("avg").innerText = average.toFixed(2);
});
