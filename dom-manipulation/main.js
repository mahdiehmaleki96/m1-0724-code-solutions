'use strict';
let clickCount = 0;
const hotButton = document.querySelector('.hot-button');
const clickCountElement = document.querySelector('.click-count');
if (!hotButton) throw new Error('The hotButton query does not exist');
if (!clickCountElement) throw new Error('The clickCountElement does not exist');
hotButton.addEventListener('click', () => {
  clickCount++;
  if (!hotButton || !clickCountElement) {
    throw new Error('The hotButton or clickCountElement do not exist');
  }
  clickCountElement.textContent = `${clickCount}`;
  if (clickCount < 4) {
    hotButton.className = 'hot-button cold';
  } else if (clickCount < 7) {
    hotButton.className = 'hot-button cool';
  } else if (clickCount < 10) {
    hotButton.className = 'hot-button tepid';
  } else if (clickCount < 13) {
    hotButton.className = 'hot-button warm';
  } else if (clickCount < 16) {
    hotButton.className = 'hot-button hot';
  } else {
    hotButton.className = 'hot-button nuclear';
  }
});
