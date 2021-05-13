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

// // Excrecise-4:Returning value from function...
console.clear();
function multiply(num1, num2) {
  return num1 * num2;
}
let product = multiply(2, 3);
console.log(product);
product = multiply(9, 9);
console.log(product);
product = multiply(5, 4);
console.log(product);

// // Excrecise-5: Practicing...
console.clear();
function isShortsWeather(temperature) {
  if (temperature >= 75) {
    return true;
  } else {
    return false;
  }
}
isShortsWeather(80);
isShortsWeather(48);
isShortsWeather(75);

// // Excrecise-6: Prcaticing more...
console.clear();
function lastElement(array) {
  if (array.length !== 0) {
    return array[array.length - 1];
  } else {
    return null;
  }
}

console.log(lastElement([3, 5, 7]));
console.log(lastElement([1]));
console.log(lastElement([]));

// // Excrecise-7:  Write function to capitalze first letter of passed string...
console.clear();
function capitalize(str) {
  let firstLetter = str.charAt(0).toUpperCase();
  let remainingStr = str.slice(1);
  //   console.log(firstLetter);
  console.log(firstLetter + remainingStr);
  return firstLetter + remainingStr;
}
capitalize("eggplant");
capitalize("pamplemousse");
capitalize("squid");

// // Excrecise-8: Write function to Add array elements...
console.clear();
function sumArray(array) {
  sum = 0;
  for (const iterator of array) {
    sum += iterator;
  }
  return sum;
}

sumArray([1, 2, 3]);
sumArray([2, 2, 2, 2]);
sumArray([50, 50, 1]);

// // Excrecise-8: Write function to return day of the week based on number...
console.clear();
function returnDay(dayNum) {
  const days = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };
  if (dayNum <= 0 || dayNum > 7) {
    return null;
  } else {
    return days.dayNum;
  }
}

returnDay(7);
returnDay(4);
returnDay(0);

// // Excrecise-9: Write function expression to square a number
console.clear();
const square = function (number) {
  return number * number;
};
square(4);
square(3);

// Excrecise-10: Methods
console.clear();
const square = {
  area(side) {
    return side ** 2;
  },
  perimeter(side) {
    return side * 4;
  },
};

square.area(10);
square.perimeter(10);

// Excrecise-11: this keyword
console.clear();
const hen = {
  name: "helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount += 1;
    return "EGG";
  },
};
hen.name;
hen.eggCount;
hen.layAnEgg();
hen.layAnEgg();
hen.eggCount;
