'use strict';
/* exported getValues */
function getValues(obj) {
  let objArray = [];
  for (let key in obj) {
    objArray.push(obj[key]);
  }
  return objArray;
}
