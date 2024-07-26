'use strict';
/* exported countdown */
function countdown(num) {
  let numberArray = [];
  for (let i = num; i >= 0; i--) {
    numberArray.push(i);
  }
  return numberArray;
}
