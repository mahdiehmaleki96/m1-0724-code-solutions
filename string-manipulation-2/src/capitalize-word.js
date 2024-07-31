'use strict';
/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  let newWord = word.charAt(0).toUpperCase();
  for (let i = 1; i < word.length; i++) {
    newWord += word.charAt(i).toLowerCase();
  }
  return newWord;
}
