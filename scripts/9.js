// FOREACH
let fruits = ['banana', 'apple', 'orange', 'kiwi'];

fruits.forEach((fruit) => {
  console.log(fruit);
}); // napomenit da ne smimo modificirat vrijednost varijabli unutar foreach, imaju druge funkcije za to

fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});
// FOREACH

class Fruit {
  constructor(name, color, isForSale) {
    this.name = name;
    this.color = color;
    this.isForSale = isForSale;
  }
}

let fruits = [
  new Fruit('banana', 'yellow', false),
  new Fruit('apple', 'green', false),
  new Fruit('orange', 'orange', false),
];

console.log(fruits);

// MAP
const fruitsForSale = fruits.map((fruit) => {
  return { name: fruit.name, color: fruit.color, isForSale: true };
});

console.log(fruitsForSale);
// MAP

// FILTER
let fruits = [
  new Fruit('banana', ['yellow'], false),
  new Fruit('apple', ['green', 'yellow'], false),
  new Fruit('orange', ['orange'], false),
  new Fruit('kiwi', ['brown', 'green'], false),
  new Fruit('watermelon', ['green', 'red'], false),
];

console.log(fruits);

const filteredFruits = fruits.filter((fruit) => {
  if (fruit.color.length > 1) return fruit;
});

const filteredFruits = fruits.filter(
  (fruit) => fruit.color.length > 1 && fruit
);

console.log(filteredFruits);
// FILTER

// INCLUDES
let basket1 = ['banana', 'apple', 'orange', 'kiwi'];
let basket2 = ['banana', 'apple', 'orange', 'kiwi', 'peach'];

console.log(basket1.includes('peach'));
console.log(basket2.includes('peach'));
// INCLUDES

// SLICE
let fruits = ['banana', 'apple', 'orange', 'kiwi'];
const firstTwoFruits = fruits.slice(0, 2);
const lastTwoFruits = fruits.slice(2);
const lastTwoFruits = fruits.slice(-2);

console.log(firstTwoFruits);
console.log(lastTwoFruits);

// SHALLOW VS DEEP COPY
let fruits = [
  new Fruit('banana', ['yellow'], false),
  new Fruit('apple', ['green', 'yellow'], false),
  new Fruit('orange', ['orange'], false),
  new Fruit('kiwi', ['brown', 'green'], false),
  new Fruit('watermelon', ['green', 'red'], false),
];
console.log(fruits);
const firstFruit = fruits.slice(0, 1);
console.log(firstFruit);
firstFruit[0].color = ['pink'];
console.log(fruits);
console.log(firstFruit);

console.log(fruits);
const firstFruit = JSON.parse(JSON.stringify(fruits.slice(0, 1)));
console.log(firstFruit);
firstFruit[0].color = ['pink'];
console.log(fruits);
console.log(firstFruit);
// SLICE

// SPLICE
let fruits = ['banana', 'apple', 'orange', 'kiwi'];
fruits.splice(1, 0, 'mango'); // doda mango izmedu banane i jabuke
console.log(fruits);
fruits.splice(2, 1, 'peach'); // zamini jabuku s breskvom
console.log(fruits);
// SPLICE

// SORT
let fruits = ['banana', 'apple', 'orange', 'kiwi'];
fruits.sort();
console.log(fruits);
// SORT

// REVERSE
let fruits = ['banana', 'apple', 'orange', 'kiwi'];
fruits.sort().reverse();
console.log(fruits);
// REVERSE

// INDEX OF
const fruits = ['banana', 'apple', 'orange', 'kiwi', 'banana'];

console.log(fruits.indexOf('banana'));
console.log(fruits.indexOf('banana', 1));
console.log(fruits.indexOf('giraffe'));
// INDEX OF

// FIND
let fruits = [
  new Fruit('banana', 'yellow', false),
  new Fruit('apple', 'green', false),
  new Fruit('orange', 'orange', false),
];
const apple = fruits.find((fruit) => fruit.name === 'apple');
console.log(apple);
// FIND

// EVERY - amo provjerit jel kosarica spremna za prodaju - spremna je ako u njoj svako voce spremno za prodaju
let cart = [
  new Fruit('banana', 'yellow', true),
  new Fruit('apple', 'green', false),
  new Fruit('orange', 'orange', true),
];
const isCartReadyForSale = cart.every((fruit) => fruit.isForSale);
console.log(isCartReadyForSale);

let cart = [
  new Fruit('banana', 'yellow', true),
  new Fruit('apple', 'green', true),
  new Fruit('orange', 'orange', true),
];
const isCartReadyForSale = cart.every((fruit) => fruit.isForSale);
console.log(isCartReadyForSale);
// EVERY

// SOME - amo samo obrnit situaciju - nije spremna za prodaju ako postoji voce koje nije spremno za prodaju
let cart = [
  new Fruit('banana', 'yellow', true),
  new Fruit('apple', 'green', false),
  new Fruit('orange', 'orange', true),
];
const doesNotReadyForSaleExist = cart.some((fruit) => !fruit.isForSale);
const isCartReadyForSale = !doesNotReadyForSaleExist;
console.log(doesNotReadyForSaleExist);
console.log(isCartReadyForSale);

let cart = [
  new Fruit('banana', 'yellow', true),
  new Fruit('apple', 'green', true),
  new Fruit('orange', 'orange', true),
];
const doesNotReadyForSaleExist = cart.some((fruit) => !fruit.isForSale);
const isCartReadyForSale = !doesNotReadyForSaleExist;
console.log(doesNotReadyForSaleExist);
console.log(isCartReadyForSale);
// SOME

// REDUCE
const numbersArray = [1, 2, 5, 2];
const sum = numbersArray.reduce((accumulator, value) => {
  return accumulator * value;
});
console.log(sum);
// REDUCE

// RANDOM - amo dobit pseudo random broj
const randomFloat = Math.random();
console.log(randomFloat);
// // RANDOM

// // FLOOR - recimo da zelimo random broj od 1 do 10
let randomInt = Math.floor(randomFloat * 11);
console.log(randomInt);
// FLOOR

// CEIL
const float = 0.5;
const ceiledFloat = Math.ceil(float);
console.log(ceiledFloat);

const float = 0.1;
const ceiledFloat = Math.ceil(float);
console.log(ceiledFloat);
// CEIL

// ROUND;
const float = 0.5;
const roundedFloat = Math.round(float);
console.log(roundedFloat);

const float = 0.1;
const roundedFloat = Math.round(float);
console.log(roundedFloat);
// ROUND

// SUBSTRING - amo pomaknit par slova iz sredine ovog teksta
const text = 'Fast art!';
const firstPart = text.substring(0, 2);
const lastPart = text.substring(6);
console.log(text);
console.log(firstPart + lastPart);
// SUBSTRING

// SPLIT - amo simulirat prvi korak rada js interpretera
const code = `
console.log('Hello world!');
const variable = 12;
const text = 'some text';
`;
const linesOfCode = code.split(';');
console.log(linesOfCode);
// SPLIT

// JOIN
const domainParts = ['www', 'youtube', 'com'];
const protocol = 'https';
const protocolDomainSeparator = '://';
const domain = domainParts.join('.');
const slash = '/';
const query = 'watch?v=dQw4w9WgXcQ';
const urlParts = [protocol, protocolDomainSeparator, domain, slash, query];
const url = urlParts.join('');
console.log(url);
// JOIN
