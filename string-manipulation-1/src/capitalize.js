'use strict';
/* exported capitalize */
function capitalize(word) {
  let newWord = word.charAt(0).toUpperCase();
  for (let i = 1; i < word.length; i++) {
    newWord += word.charAt(i).toLowerCase();
  }
  return newWord;
}
