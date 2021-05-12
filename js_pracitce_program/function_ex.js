// Excrecise-1: Defining simple functions...getting started
console.clear();
function printHeart() {
  console.log("<3");
}

printHeart();

// Excrecise-2: Function with one argument...
console.clear();
function rant(message) {
  for (let index = 0; index < 3; index++) {
    console.log(message.toUpperCase());
  }
}
rant("I hate beets...");

// // Excrecise-3: Function with multiple arguments...
console.clear();
function isSnakeEyes(dice1, dice2) {
  if (dice1 === 1 && dice2 === 1) {
    console.log("Snake Eyes!");
  } else {
    console.log("Not Snake Eyes!");
  }
}
isSnakeEyes(1, 1);
isSnakeEyes(1, 5);
isSnakeEyes(4, 5);
// // Excrecise-4
// console.clear();

// // Excrecise-5
// console.clear();

// // Excrecise-6
// console.clear();

// // Excrecise-7
// console.clear();

// // Excrecise-8
// console.clear();
