'use strict';
/* exported take */
function take(array, count) {
  let newArray = [];
  for (let i = 0; i < count && i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
