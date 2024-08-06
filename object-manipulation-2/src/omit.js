'use strict';
/* exported omit */
function omit(source, keys) {
  let newObj = {};
  for (let key in source) {
    if (!keys.includes(key)) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
