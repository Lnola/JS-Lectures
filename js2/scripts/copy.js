// DEEP COPY - kopiranome je sve u memoriji
// SHALLOW COPY - kopirani pointa na podvrijednosti originalnog
// super clanak: https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/

// DEEP COPY
console.log('DEEP COPY');
const number1 = 5;
let number2 = number1;
number2 = 6;
console.log(number1);
console.log(number2);

// SHALLOW COPY
console.log('\nSHALLOW COPY');
const object1 = { example: 'Luka' };
console.log(object1);
let object2 = object1;
console.log(object2);
object2.example = 'Bartol';
console.log(object1.example);
console.log(object2.example);

// DEEP COPY - or is it?
console.log('\nDEEP COPY - or is it');
const object3 = { language: 'en' };
console.log(object3);
let object4 = Object.assign({}, object3); // samo zamjeni s let object4 = { ...object3 }; i pokazi sa spreadom
console.log(object4);
object4.language = 'de';
console.log(object3.language);
console.log(object4.language);

// it is not
console.log('\nit is not');
const object5 = {
  foods: {
    dinner: 'Pasta',
  },
};
let object6 = { ...object5 };
object6.foods.dinner = 'Soup';
console.log(object5.foods.dinner);
console.log(object6.foods.dinner);

// this is but it sucks
console.log('\nthis is but it sucks');
const object7 = {
  foods: {
    dinner: 'Pasta',
  },
};
let object8 = { foods: { ...object7.foods } };
object8.foods.dinner = 'Soup';
console.log(object7.foods.dinner);
console.log(object8.foods.dinner);

// Easy DEEP COPY
console.log('\nEasy DEEP COPY');
const object9 = {
  foods: {
    dinner: 'Pasta',
  },
};
let object10 = JSON.parse(JSON.stringify(object9)); // detaljnije o ovome u buducnosti
object10.foods.dinner = 'Soup';
console.log(object9.foods.dinner);
console.log(object10.foods.dinner);

// isto je za nizove (i pogotovo nestane)

// #1 ZADATAK

// Definirati niz minimalne duljine 6 koji sadržava podatke o gradovima.
// Svaki grad osim svog imena sadrži i ime države te poštanski broj.
// Definirati dvije funkcije koje kao argument primaju destrukturirani objekt i printaju informacije o određenom gradu.
// Prva ispisuje samo ime i državu, a druga uz to ispisuje i poštanski broj.
// Za prvi grad ispisati ime, državu i poštanski broj, a za sve ostale samo ime i državu.
// Prije ispisa prvog grada - kopirajte ga i kopiranome promijenite ime države te ga ispišite s ostalima.
// Zabranjena provjera je li grad prvi u listi.

class City {
  constructor(name, zipCode) {
    this.name = name;
    this.country = { name: 'Hrvatska' };
    this.zipCode = zipCode;
  }
}

// #1 ZADATAK

// RJESENJE
const print = ({ name, country }) => {
  console.log(`Grad: ${name}, država: ${country.name}!`);
};

const printWithZipCode = ({ name, country, zipCode }) => {
  console.log(`Grad: ${name} - ${zipCode}, država: ${country.name}!`);
};

const cities = [
  new City('Split', '21000'),
  new City('Zagreb', '10000'),
  new City('Zadar', '23000'),
  new City('Rijeka', '51000'),
  new City('Osijek', '31000'),
  new City('Makarska', '21300'),
];

const [first, ...remainingCities] = cities;

const firstCopy = JSON.parse(JSON.stringify(first));
firstCopy.country.name = 'Australia';
printWithZipCode(firstCopy);

printWithZipCode(first);
remainingCities.forEach((city) => print(city));
