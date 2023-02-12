// KEYWORDS
var variable;
let variable;
const variable = 'neki tekst'; // prvo bez inicijalizacije
variable = 'neki drugi tekst'; // promjena vrijednosti const (ERROR u konzoli)
const variable2 = 'neki drugi tekst'; // pokazi s i bez ;
// KEYWORDS

// CONSOLE.LOG
console.log(variable);
console.log(variable2);
console.log(variable, variable2);
console.log(variable + variable2);
console.log(variable + ' ' + variable2);
// CONSOLE.LOG

// SCOPE
// #1 GLOBAL SCOPE
console.log(variable);
{
  console.log(variable);
}

// // #2 BLOCK SCOPE
{
  const variable2 = 'hello world!';
  console.log(variable2);
}
console.log(variable2);

{
  const variable3 = 'neki treci tekst';
  console.log(variable3);
}
console.log(variable3);

{
  var varira = 'varira';
  console.log(varira);
}
console.log(varira);

// HOISTING
hoistedVariable = 12;
var hoistedVariable;
console.log(hoistedVariable);

hoistedVariable = 12;
let hoistedVariable;
console.log(hoistedVariable);
// SCOPE

// TIPOVI VARIJABLI
const number = 12;
const text = 'text';
const boolean = true;
const object = { key: 'test', value: 'test' };
const array = [1, 2, 3, 4];
const foo = function () {
  // do something here
};
const nothing = null;
let realNothing;
console.log(typeof number);
console.log(typeof text);
console.log(typeof boolean);
console.log(typeof object);
console.log(typeof array);
console.log(typeof foo);
console.log(typeof nothing);
console.log(typeof realNothing);
console.log(typeof NaN);

// DYNAMIC TYPES
let number = 12;
console.log(typeof number);
number = 'text';
console.log(typeof number);

// COERCION
const number = 12;
console.log('Broj je:', number);
console.log('Broj je: ' + number);
// TIPOVI VARIJABLI
