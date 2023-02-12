function print() {
  console.log('Hello there!');
}
print();

function printWithArgument(name) {
  console.log(`Hello there ${name}!`);
}
printWithArgument('Luka');

function printWithArgumentAndReturn(name) {
  console.log(`Hello there ${name}!`);
  return `Hello there ${name}!`;
}
const returnValue = printWithArgumentAndReturn('Luka');
console.log(returnValue);

const print = function () {
  console.log('Hello there!');
};
print();

const print = () => {
  console.log('Hello there!');
};
print();

(function () {
  console.log('Hello there!');
})();

(() => {
  console.log('Hello there!');
})();
