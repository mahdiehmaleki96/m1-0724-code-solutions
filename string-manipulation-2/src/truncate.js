'use strict';
/* exported truncate */
function truncate(length, str) {
  if (str.length <= length) {
    return str + '...';
  }
  let newStr = '';
  for (let i = 0; i < length; i++) {
    newStr += str[i];
  }
  return newStr + '...';
}
