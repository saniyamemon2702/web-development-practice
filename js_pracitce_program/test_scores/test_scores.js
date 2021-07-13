var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) {
  return document.getElementById(id);
};

function addScore() {
  console.log("Inside addScre function");

  let name = $("name").value;
  let score = parseFloat($("score").value);

  if (!name || !score) {
    $("name").value = "";
    $("score").value = "";
    $("name").focus();
    alert("You must enter a name and a valid score");
  } else if (score >= 0 && score <= 100) {
    console.log("new entry:\n name:", name, "\n score:", score);
    names.push(name);
    scores.push(score);

    console.log(names, scores);
    //   alert("Added successfully...");
  } else {
    $("name").value = "";
    $("score").value = "";
    $("name").focus();
    alert("Score must be between 0 to 100!");
  }
}

function displayResults() {
  console.log("Inside displayResul function");

  //for adding all array elements...
  let avgScore = 0;
  scores.forEach((element) => {
    avgScore += element;
  });

  let highScore = Math.max(...scores); //lrgest element from array
  console.log(highScore);
  let name = names[scores.indexOf(highScore)];

  $("results").innerHTML = `<h2>Results</h2> <p>Average Score=${
    avgScore / scores.length
  }</p>  <p>High Score= ${name} with a score of ${highScore}</p>`;
}

function displayScores() {
  console.log("Inside displayScore function");
  let newH2 = document.createElement("h2");
  newH2.innerText = "Scores";
  //   $("results").insertAdjacentElement("afterend", newH2); //adding h2 element between div#results and table

  $("scores_table").innerHTML =
    "<h2>Score</h2><tr><th>Name</th><th>Score</th><tr>";
  for (let i = 0; i < scores.length; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${names[i]}</td><td>${scores[i]}</td>`;
    $("scores_table").insertAdjacentElement("beforeend", tr);
  }
}

window.onload = function () {
  $("add").onclick = addScore;
  $("display_results").onclick = displayResults;
  $("display_scores").onclick = displayScores;
};
