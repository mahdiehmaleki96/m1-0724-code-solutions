'use strict';
/* exported takeRight */
function takeRight(array, count) {
  let newArray = [];
  for (let i = Math.max(0, array.length - count); i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
