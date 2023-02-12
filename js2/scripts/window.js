// HISTORY - https://developer.mozilla.org/en-US/docs/Web/API/Window/history
console.log(history);
history.pushState({ page: 1 }, 'title 1', '?page=1');

history.back();
// HISTORY

// LOCATION
console.log(location.href);
// LOCATION

// INNER
console.log(innerHeight);
console.log(innerWidth);
// INNER

// SCROLL
console.log(scrollX);
console.log(scrollY);

let middleDiv = document.querySelector('.text.middle');
middleDiv.style.height = '1000px';

window.addEventListener('scroll', () => {
  console.log(scrollY);
});
// SCROLL
