'use strict';
/* exported invert */
function invert(source) {
  let newObj = {};
  let temp;
  for (let key in source) {
    temp = source[key];
    newObj[temp] = key;
  }
  return newObj;
}
