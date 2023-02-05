// SINTAKSA
const number = +prompt('Select a number between 1 and 4');

if (number === 1) {
  console.log('You selected number 1');
} else if (number === 2) {
  console.log('You selected number 2');
} else if (number === 3) {
  console.log('You selected number 3');
} else if (number === 4) {
  console.log('You selected number 4');
} else {
  console.log('Not an option!');
}

switch (number) {
  case 1:
    console.log('You selected number 1');
    break;
  case 2:
    console.log('You selected number 2');
    break;
  case 3:
    console.log('You selected number 3');
    break;
  case 4:
    console.log('You selected number 4');
    break;
  default:
    console.log('Not an option!');
}

const cases = {
  1: 'You selected number 1',
  2: 'You selected number 2',
  3: 'You selected number 3',
  4: 'You selected number 4',
  default: 'Not an option!',
};

console.log(cases[number] || cases['default']);
//SINTAKSA

// TRUTHY/FALSY
// s !! mozemo doc do vrijednosti jel nesto true ili false
console.log(!!'word');
console.log(!!'');
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// false, 0, -0, 0n, "", null, undefined, NaN

// TRUTHY/FALSY

// == vs ===
console.log('#1');
console.log(12 == '12');

console.log('#2');
console.log(12 === '12');
// == vs ===
