'use strict';
/* exported filterOutNulls */
function filterOutNulls(values) {
  let newArray = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] != null) {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
