'use strict';
const heading = document.querySelector('h1');
setTimeout(() => {
  if (heading) {
    heading.textContent = 'Hello There';
  }
}, 2000);
