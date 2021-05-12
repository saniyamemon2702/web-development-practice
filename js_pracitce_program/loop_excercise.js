// Excercise-1: printing classic chorus lyrics of "I am blue" by Effie 65
// lyrics are: Da ba dee da ba daa
for (let i = 1; i <=6;i++) {
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
for (let i = 25; i>=0; i-=5) {
    console.log(i);
    
}

// Excercise-2: loop over array named people and print each name in UPPERCASE..
console.clear();
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for (let i = 0; i < people.length; i++) {
    // const element = people[i];
    console.log(people[i].toUpperCase());
}