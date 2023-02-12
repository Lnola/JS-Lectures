// DESTRUCTURING
// OBJECTS
const person = {
  firstName: 'Luka',
  lastName: 'Nola',
};

let { firstName, lastName } = person;
console.log(firstName);
console.log(lastName);

firstName = 'Bartol';
console.log(firstName); // Bartol
console.log(person.firstName); // Luka

const { lastName: surname } = person; // reassignment
console.log(surname);
// OBJECTS

// ARRAYS
const people = ['Luka', 'Bartol', 'Duje'];
console.log(people);

let [first, second] = people;
console.log(first);
console.log(second);

[second, first] = [first, second];
console.log(first);
console.log(second);
console.log(people);

[first, , second] = people;
console.log(first);
console.log(second);
// ARRAYS

// STRINGS
const string = 'ASSERT';
[first, second, third] = string;
console.log(first);
console.log(second);
console.log(third);
// STRINGS
// DESTRUCTURING

// SPREADING
const expandedPeople = [...people, 'Alex'];
console.log(expandedPeople);

const copiedPeople = [...expandedPeople]; // shallow copy
console.log(copiedPeople);

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const multipleArraysToOne = [...numbers1, ...numbers2];
console.log(multipleArraysToOne);

let copiedPerson = { ...person };
let extendedPerson = { ...person, age: 44 };
console.log(copiedPerson);
console.log(extendedPerson);

[first, second, ...rest] = expandedPeople;
console.log(first);
console.log(second);
console.log(rest);
// SPREADING
