'use strict';
/* exported capitalizeWords */
function capitalizeWords(word) {
  let strArray = word.split(' ');
  let newArray = [];
  for (let i = 0; i < strArray.length; i++) {
    newArray.push(capitalizeWord(strArray[i]));
  }
  return newArray.join(' ');
}
