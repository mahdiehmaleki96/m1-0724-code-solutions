'use strict';
/* exported getWords */
function getWords(str) {
  if (str.trim() === '') {
    return [];
  }
  return str.split(' ');
}
