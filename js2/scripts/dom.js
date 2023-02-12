// BODY - osnove pristupanja elementu
console.log(document.body);
// BODY

// TITLE - promjena elementa
console.log(document.title);
document.title = 'This is cool';
// TITLE

// GET ELEMENT BY ID
let firstDiv = document.getElementById('first');
console.log(firstDiv);
// GET ELEMENT BY ID

// INNER HTML
firstDiv.innerHTML = 'This is the first div!';
firstDiv.innerHTML = `<h1>This is the heading!</h1>`;
// INNER HTML

// GET ELEMENT BY CLASS NAME - https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
let divs = document.getElementsByClassName('text');
console.log(divs);
// GET ELEMENT BY CLASS NAME

// STYLE
const colors = ['red', 'orange', 'yellow', 'green', 'blue'];

// BAD, HTML Collection
// divs.forEach((div, index) => (div.style.backgroundColor = colors[index]));

// GOOD
for (let index = 0; index < divs.length; index++) {
  divs[index].style.backgroundColor = colors[index];
}
// STYLE

// QUERY SELECTOR
divs = document.querySelector('#first'); // notice the #
console.log(divs);
divs = document.querySelector('.text'); // notice the #
console.log(divs);

let middleDiv = document.querySelector('.text.middle');
if (middleDiv) middleDiv.style.height = '100px';
middleDiv.remove();
// QUERY SELECTOR

// QUERY SELECTOR ALL
divs = document.querySelectorAll('.text'); // obratit paznju da nema vise third jer je komplet maknut iz DOMa
console.log(divs);
// FOREACH WORKS!
divs.forEach((div) => (div.style.backgroundColor = 'transparent'));
// QUERY SELECTOR ALL

// #4 ZADATAK
// Koristeći isključivo JS prikazati listu korisnika.
// Korisnik ima: ime, prezime, visinu i profilnu sliku (link).
// Dodati CSS u mjeri da se ne lome stvari na stranici.
// #4 ZADATAK
