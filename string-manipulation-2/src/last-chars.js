'use strict';
/* exported lastChars */
function lastChars(length, str) {
  let newStr = '';
  if (str.length <= length) {
    return str;
  } else {
    for (let i = str.length - length; i < str.length; i++) {
      newStr += str[i];
    }
  }
  return newStr;
}
