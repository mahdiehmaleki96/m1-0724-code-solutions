'use strict';
/* exported pick */
function pick(source, keys) {
  let newObj = {};
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (key in source && source[key] !== undefined) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
