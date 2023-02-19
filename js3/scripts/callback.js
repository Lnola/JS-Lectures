// DEFINICIJA CALLBACKA
function add(number1, number2, callback) {
  const sum = number1 + number2;
  callback(sum);
}

function log(value) {
  console.log(value);
}

add(2, 4, log);

// definiramo anonimnu funkciju
add(4, 5, function (value) {
  console.log(value);
});

// definiramo anonimnu arrow funkciju / lambdu
add(419, 1, (value) => {
  console.log(value);
});
// DEFINICIJA CALLBACKA

// PRIKAZ ASINKRONOSTI
// sekvencijsko izvodenje, tocno kako ocekujemo
for (let i = 0; i < 100; i++) {
  Math.pow(i, 2);
}
console.log('test');

// asinkrono izvodenje, gets fucky
setTimeout(() => {
  for (let i = 0; i < 100; i++) {
    Math.sqrt(Math.pow(i, 2));
  }
  console.log('in');
}, 1000);

console.log('out');
// PRIKAZ ASINKRONOSTI

// https://www.youtube.com/watch?v=AOcY_hFIBEw&t=21975s - DUMP Days
// https://www.youtube.com/watch?v=8aGhZQkoFbQ - JS Conf

// DELAY DEPENDS ON END OF SLOW() EXECUTION
const start = performance.now();
setTimeout(() => {
  const end = performance.now();
  console.log('Time elapsed: ', end - start); // delay is 0 without slow function, high with slow function
  for (let i = 0; i < 100; i++) {
    Math.sqrt(Math.pow(i, 2));
  }
  console.log('KRAJ');
}, 0);

console.log('test');

function slow(speedDial = 0) {
  console.time('slow');
  let result = 0;
  for (let i = Math.pow(12 - speedDial, 7); i >= 0; i--) {
    result += Math.atan(i) * Math.tan(i);
  }
  console.timeEnd('slow');
}

slow(2);
// DELAY DEPENDS ON END OF SLOW() EXECUTION

// CALLBACK HELL!!!

// INTERVAL
const interval = setInterval(() => {
  const now = new Date();
  console.log(
    `Current time is: ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
  );
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 10000);
// INTERVAL
