// SET + GET
const userId = 4;
console.log(userId);

localStorage.setItem('userId', userId);

const userIdFromStorage = localStorage.getItem('userId');
console.log(userIdFromStorage);
// SET + GET - NUMBER

// SET + GET - OBJECT
const people = [
  {
    firstName: 'Bartol',
    age: 10,
  },
  {
    firstName: 'Luka',
    age: 11,
  },
  {
    firstName: 'Duje',
    age: 25,
  },
  {
    firstName: 'Alex',
    age: 23,
  },
];

localStorage.setItem('people', people);
let peopleFromStorage = localStorage.getItem('people');
console.log(peopleFromStorage);

const peopleReadyForStorage = JSON.stringify(people);
localStorage.setItem('people', peopleReadyForStorage);
peopleFromStorage = localStorage.getItem('people');
console.log(peopleFromStorage);

localStorage.setItem('people', peopleReadyForStorage);
peopleFromStorage = localStorage.getItem('people');
const peopleReadyFromStorage = JSON.parse(peopleFromStorage);
console.log(peopleReadyFromStorage);
// SET + GET - OBJECT

// REMOVE
localStorage.removeItem('people');
console.log(localStorage.getItem('people'));
// REMOVE

// CLEAR
localStorage.clear(); // dodajmo rucno u localstorage u browseru
// CLEAR

// #3 ZADATAK

// Definirajte objekt.
// Spremite njegovu vrijednost kao niz u localstorage.
// Ukoliko u localstorage već postoji niz, dodajte svoj objekt kao novi element niza i vrijednost spremite u localstorage.
// Za kraj ispišite vrijednost iz localstorage (za taj ključ).

// #3 ZADATAK

// RJESENJE
const person = {
  firstName: 'Luka',
  lastName: 'Nola',
};
const currentStorage = JSON.parse(localStorage.getItem('person'));
// SIMPLE RJESENJE
if (!currentStorage || !currentStorage.length) {
  localStorage.setItem('person', JSON.stringify([person]));
} else {
  localStorage.setItem('person', JSON.stringify([...currentStorage, person]));
}
// SIMPLE RJESENJE

// CLEANER RJESENJE
const prev = !currentStorage?.length ? [] : currentStorage;
localStorage.setItem('person', JSON.stringify([...prev, person]));
// CLEANER RJESENJE

console.log(JSON.parse(localStorage.getItem('person')));
