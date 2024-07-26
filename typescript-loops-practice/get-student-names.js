'use strict';
function getStudentNames(student) {
  let newArray = [];
  for (const key of student) {
    newArray.push(key.name);
  }
  return newArray;
}
