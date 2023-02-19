// NEW PROMISE
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const seconds = new Date().getSeconds();
    if (seconds % 2 === 0) resolve(seconds);
    reject(seconds);
  }, 100);
});
// NEW PROMISE

// PROMISE CHAIN
promise.then((data) => console.log('resolve', data));

promise
  .then((data) => console.log('resolve', data))
  .catch((data) => console.log('reject', data));

promise
  .then((data) => console.log('resolve', data))
  .catch((data) => console.log('reject', data))
  .finally(() => console.log('The time is now!'));

promise
  .then(() => {
    return 'H';
  })
  .then((value) => {
    return value + 'e';
  })
  .then((value) => {
    return value + 'l';
  })
  .then((value) => {
    return value + 'l';
  })
  .then((value) => {
    return value + 'o';
  })
  .then((value) => {
    console.log(value + ' there!\nGeneral Kenobi!');
  })
  .catch((err) => {
    console.log('reject', err);
  });
// PROMISE CHAIN

// EMPTY PROMISE RESOLVE/REJECT - NO RETURN
const promise2 = new Promise((resolve) => resolve());

promise2
  .then(() => {
    throw new Error('Whoops!');
  })
  .catch((err) => {
    console.log(err);
  });
// EMPTY PROMISE RESOLVE/REJECT - NO RETURN

// PROMISE.ALL
const hwan = Promise.resolve('resolve hwan');
const tu = 'resolve tu';
const fri = new Promise((resolve) => {
  setTimeout(() => resolve('resolve fri'), 3000);
});
Promise.all([hwan, tu, fri]).then((values) => {
  console.log(values);
});

const fhor = new Promise((resolve) => {
  setTimeout(() => resolve('resolve fhor'), 10000);
});
Promise.all([hwan, tu, fri, fhor]).then((values) => {
  console.log(values);
});
// PROMISE.ALL

// PROMISE.RACE
const race1 = new Promise((resolve) => {
  setTimeout(resolve, 500, 'Racer #1 is the winner!'); // drugi nacin pisanja argumenata
});

const race2 = new Promise((resolve) => {
  setTimeout(resolve, 100, 'Racer #1 sucks, #2 is the winner');
});

Promise.race([race1, race2]).then((value) => {
  console.log(value);
});
// PROMISE.RACE
