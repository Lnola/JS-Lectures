// CLICK
const middleDiv = document.querySelector('.text.middle');
middleDiv.innerHTML = 'Click me!';
middleDiv.classList.add('clickable');

middleDiv.addEventListener('click', function (e) {
  this.innerHTML = 'Clicked!'; // obrati paznju na this
  this.classList.remove('clickable');
  this.classList.add('clicked');
  console.log(e);
});
// CLICK

// CHANGE - https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick
const textInput = document.getElementsByTagName('input')[0];
textInput.onchange = (e) => {
  console.log(e);
  console.log(this.value); // obrati paznju na this
};

textInput.onchange = (e) => {
  console.log(e);
  console.log(textInput.value); // razlika lambde i function
};

textInput.addEventListener('change', function (e) {
  console.log(e);
  console.log(this.value);
});
// CHANGE

// SCROLL
middleDiv.innerHTML = `Top <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> Bottom`;
middleDiv.style.height = '50px';
middleDiv.style.overflowY = 'scroll';

middleDiv.addEventListener('scroll', () => {
  console.log('scrolling');
});
// SCROLL

// KEYPRESS
document.addEventListener('keypress', (e) => {
  console.log(e);
});
// KEYPRESS

// FOCUS
textInput.addEventListener('focus', () => {
  textInput.style.background = 'yellow';
});
// FOCUS

// BLUR
textInput.addEventListener('blur', function () {
  this.style.background = '';
});
// BLUR

// KEYPRESS ON INPUT OR INPUT
textInput.addEventListener('keypress', checkName, false);

function checkName(e) {
  let charCode = e.charCode;
  if (charCode != 0) {
    if (charCode < 97 || charCode > 122) {
      e.preventDefault();
      alert(
        'Please use lowercase letters only.' +
          '\n' +
          'charCode: ' +
          charCode +
          '\n'
      );
    }
  }
}
// KEYPRESS ON INPUT

// BUBBLING - https://javascript.info/bubbling-and-capturing
const form = document.getElementsByTagName('form')[0];
const span = document.getElementsByTagName('span')[0];
const p = document.getElementsByTagName('p')[0];

form.addEventListener('click', (e) => {
  alert('FORM');
});

span.addEventListener('click', (e) => {
  e.stopPropagation();
  alert('SPAN');
});

p.addEventListener('click', (e) => {
  e.stopPropagation();
  alert('P');
});
// BUBBLING

// #5 ZADATAK
// Napravite da input promini boju u "lime" ako je fokusiran i u njemu pise nesto duze od 4 slova.
// Ukoluko nista ne pise, a fokusiran je onda je "pink".
// Ako nije fokusiran onda je proziran.
// #5 ZADATAK

// const textInput = document.getElementsByTagName('input')[0];

// textInput.addEventListener('focus', () => {
//   textInput.style.background = textInput.value.length ? 'lime' : 'pink';
// });

// textInput.addEventListener('input', () => {
//   textInput.style.background = textInput.value.length > 4 && 'lime';
// });

// textInput.addEventListener('blur', function () {
//   this.style.background = '';
// });
