console.clear();
const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter'];
console.log('Before updating, Array is:', planets);
planets.shift(); //removing first array element.
planets.push('Saturn');
planets.unshift('Mercury');
console.log('After updating, Array is:', planets);

