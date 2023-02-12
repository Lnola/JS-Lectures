const now = new Date();
console.log(now, typeof now);

const dateString = Date();
console.log(dateString, typeof dateString);

console.log(now.toString());

let birthday = new Date(2002, 08, 16); // mjeseci su 0 indexed
console.log(birthday);

birthday = new Date('2002-09-16'); // format nije isti za sve browsere - ovaj ISO-8601 radi za sve browsere
console.log(birthday);
birthday = new Date('2002-09-16T18:25:00');
console.log(birthday);

const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const dayOfTheWeek = birthday.getDay();
console.log(dayOfTheWeek);
console.log(weekday[dayOfTheWeek]);

console.log(birthday.getDate());
console.log(birthday.getHours());

console.log(birthday.getTime()); // Y2K problem, Jan 1 1970 UTC - system time UNIX-a
console.log(now.getTime());
console.log(Date.now());

let beginningOfTime = new Date('1970-01-01');
console.log(beginningOfTime.getTime());
beginningOfTime = new Date('1970-01-01T00:00:00');
console.log(beginningOfTime.getTime());

// NEMA BRISANJA, SAMO DODAJEMO beginningOfTime u CONSOLE.LOG
let beginningOfTime = new Date('1970-01-01');
console.log(beginningOfTime, beginningOfTime.getTime());
beginningOfTime = new Date('1970-01-01T00:00:00');
console.log(beginningOfTime, beginningOfTime.getTime());

console.log(now.getTimezoneOffset());
console.log(now.getUTCHours());

console.log(now.toUTCString());
console.log(now.toLocaleString());

// #2 ZADATAK

// Napraviti funkciju koja prima varijabilan niz datuma i ispisuje jesu li svi na isti dan dan u tjednu.
// Testirat randomly na svom rodendanu i ovim datumima
new Date('2002-09-16');
new Date('2001-09-17');
new Date('2023-02-12');
new Date('2023-02-13');

// #2 ZADATAK

// RJESENJE
const checker = (...dates /* ILI ARGUMENTS OBJEKT */) => {
  return dates.every((date) => date.getDay() === dates[0].getDay());
};
