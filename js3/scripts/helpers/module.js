// EXPORT { ... }
const add = (number1, number2) => number1 + number2;

// EXPORT CONST/FUNCTION
export const log = (value) => console.log(value);

// EXPORT RENAME
const sub = (number1, number2) => number1 - number2;

export { add, sub as subtract };

// EXPORT DEFAULT PERSON
const person = {
  firstName: 'Bartol',
  lastName: 'Deak',
};

export default person;

// EXPORT DEFAULT { ... }
export default {
  firstName: 'Bartol',
  lastName: 'Deak',
};
