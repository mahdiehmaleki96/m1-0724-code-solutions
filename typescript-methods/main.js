'use strict';
const heroes = ['My Mom', 'My Dad', 'My Brothers', 'Myself'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
let randomIndex = Math.floor(randomNumber);
console.log('randomIndex is:', randomIndex);
let randomHero = heroes[randomIndex];
console.log('randomHero is:', randomHero);
const library = [
  { title: 'The Alchemist', author: 'Paulo Coelho' },
  { title: 'Harry Potter and the Goblet of Fire', author: 'Joanne K. Rowling' },
  { title: 'Pippi Longstocking', author: 'Astrid Lindgren' },
];
const lastBook = library.pop();
console.log('Last Book is:', lastBook);
const firstBook = library.shift();
console.log('First Book is:', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(library);
const fullName = 'Mahdieh Maleki';
const firstAndLastName = fullName.split(' ');
console.log('FirstName and LastName is:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('SayMyName is:', sayMyName);
const employee = {
  name: 'Mahdieh',
  age: 28,
  position: 'Engineer',
};
const employeeKeys = Object.keys(employee);
console.log('EmployeeKeys:', employeeKeys);
const employeeValues = Object.values(employee);
console.log('EmployeeValues:', employeeValues);
const employeePairs = Object.entries(employee);
console.log('EmployeePairs:', employeePairs);
