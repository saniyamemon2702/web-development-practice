// Excercise-1: printing classic chorus lyrics of "I am blue" by Effie 65
// lyrics are: Da ba dee da ba daa
for (let i = 1; i <= 6; i++) {
  console.log("Da ba dee da ba daa");
}

//  Excercise-2: Write a loop that prints:
// 25
// 20
// 15
// 10
// 5
// 0
console.clear();
for (let i = 25; i >= 0; i -= 5) {
  console.log(i);
}

// Excercise-3: loop over array named people and print each name in UPPERCASE..
console.clear();
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase());
}
// Excercise-4: loop over array named number and print its square using FOR OF LOOP..
console.clear();
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let iterator of numbers) {
  console.log(Math.pow(iterator, 2));
}
