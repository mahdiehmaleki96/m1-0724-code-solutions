'use strict';
/* exported dropRight */
function dropRight(array, count) {
  let newArray = [];
  for (let i = 0; i < Math.max(0, array.length - count); i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
