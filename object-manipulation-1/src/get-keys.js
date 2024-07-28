'use strict';
/* exported getKeys */
function getKeys(obj) {
  let objArray = [];
  for (let key in obj) {
    objArray.push(key);
  }
  return objArray;
}
