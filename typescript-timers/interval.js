'use strict';
const heading1 = document.querySelector('h1');
let countdown = 4;
const intervalId = setInterval(() => {
  if (heading1) {
    if (countdown > 0) {
      heading1.textContent = countdown.toString();
      countdown--;
    } else {
      heading1.textContent = '~Earth Beeeelooowww Us~';
      clearInterval(intervalId);
    }
  }
}, 1000);
