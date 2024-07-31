'use strict';
/* exported swapChars */
function swapChars(firstIndex, secondIndex, str) {
  if (
    firstIndex < 0 ||
    secondIndex < 0 ||
    firstIndex >= str.length ||
    secondIndex >= str.length
  ) {
    return str;
  }
  let newArray = str.split('');
  let temp = newArray[firstIndex];
  newArray[firstIndex] = newArray[secondIndex];
  newArray[secondIndex] = temp;
  return newArray.join('');
}
