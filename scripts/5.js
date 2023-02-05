// ARRAY TYPES
const prices = [12, 34, 56, 78];
console.log(prices);
const fruits = ['banana', 'apple', 'orange'];
console.log(fruits);
const mix = [12, 'banana', true, null, 'orange'];
console.log(mix);
// ARRAY TYPES

// REASSIGNMENT
let array = [];
console.log(array);
array = [1];
console.log(array);
array = [1, 2];
console.log(array);

const array = [];
console.log(array);
array = [1];
console.log(array);
array = [1, 2];
console.log(array);

const array = [];
console.log(array);
array.push(1);
console.log(array);
array.push(2);
console.log(array);

let array = [];
console.log(array);
array = [...array, 1];
console.log(array);
array = [...array, 2];
console.log(array);
// REASSIGNMENT

// SIMPLE METHODS
const fruits = ['banana', 'apple', 'orange', 'kiwi'];
console.log(fruits.length);
fruits.push('banana');
console.log(fruits);
fruits.pop();
console.log(fruits);

console.log(fruits[0], fruits[1], fruits[2], fruits[3]);
// SIMPLE METHODS

// FOR
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}
// FOR

// STRING
const text = 'This is a text';
for (let letter of text) console.log(letter);
// STRING
