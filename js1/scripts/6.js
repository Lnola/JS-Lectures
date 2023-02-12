// ERROR REASSIGNMENT
const person = {
  firstName: 'Luka', // objasnit key value pair na ovom primjeru
  lastName: 'Nola',
};

person = {
  firstName: 'Bartol',
  lastName: 'Deak',
};
console.log(person);
// ERROR REASSIGNMENT

// FIX REASSIGNMENT
let person = {
  firstName: 'Luka',
  lastName: 'Nola',
};

person = {
  firstName: 'Bartol',
  lastName: 'Deak',
};
console.log(person);
// FIX REASSIGNMENT

// INDEXING
let person = {
  firstName: 'Luka',
  lastName: 'Nola',
};
console.log(person.firstName, person.lastName);
console.log(person['firstName'], person['lastName'], person['wrong']);
// INDEXING

// ADDING PROPERTIES
const person = {
  firstName: 'Luka',
  lastName: 'Nola',
};

person.firstName = 'Bartol';
person.lastName = 'Deak';
console.log(person);

person.height = 121;
console.log(person);
// ADDING PROPERTIES

// FOR IN
for (let key in person) {
  console.log(key);
  console.log(key, person[key]);
}
// FOR IN
