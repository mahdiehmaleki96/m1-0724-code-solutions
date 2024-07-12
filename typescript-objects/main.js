'use strict';
const student = {
  firstName: 'Mahdieh',
  lastName: 'Maleki',
  age: 28,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName is: ', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Teacher';
console.log('Value of student.livesInIrvine is:', student.livesInIrvine);
console.log(
  'Value of student.previousOccupation is:',
  student.previousOccupation
);
console.log('Value of student:', student);
console.log('Type of student is:', typeof student);
const vehicle = {
  make: 'Porsche',
  model: 'Macan S',
  year: 2025,
};
vehicle['color'] = 'Black';
vehicle['isConvertible'] = false;
console.log('Color of the vehicle is:', vehicle['color']);
console.log('Value of isConvertible is:', vehicle['isConvertible']);
console.log('Value of vehicle is:', vehicle);
console.log('Type of the vehicle is:', typeof vehicle);
const pet = {
  name: 'Beemer',
  kind: 'Pomeranian',
};
delete pet.name;
delete pet.kind;
console.log('Value of the pet is:', pet);
console.log('Type of the pet is:', typeof pet);
