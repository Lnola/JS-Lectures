console.log('This is an output to the console!');

alert('This is an alert!');

const input = prompt('Prompt text');
const parsedInt = parseInt(input);
const parsedNumber = Number(input);
const parsedPlus = +input;

console.log(`Tip varijable ${input} je: ${typeof input}`); // objasnit string interpolaciju
console.log(`Tip varijable ${parsedInt} je: ${typeof parsedInt}`);
console.log(`Tip varijable ${parsedNumber} je: ${typeof parsedNumber}`);
console.log(`Tip varijable ${parsedPlus} je: ${typeof parsedPlus}`);

console.log(input, parsedInt); // primjer za boju ispisa

if (confirm('This is the confirmation text')) {
  console.log('Confirmed');
} else {
  console.log('Not confirmed');
}
