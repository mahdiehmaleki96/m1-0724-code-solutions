'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('Convert Minutes to Seconds (5) is: ', convertMinutesToSeconds(5));
console.log(
  'Convert Minutes To Seconds (10) is : ',
  convertMinutesToSeconds(10)
);
function greet(name) {
  const interpolatedString = `Hey ${name}! Welcome back :)`;
  return interpolatedString;
}
console.log(greet('Mahdieh'));
console.log(greet('Dr. Sam'));
const getArea = (width, height) => {
  return width * height;
};
console.log(
  'The area of the rectangle is (width: 17 , height: 42): ',
  getArea(17, 42)
);
console.log(
  'The area of the rectangle is (width: 22 , height: 38): ',
  getArea(22, 38)
);
const getFirstName = (person) => {
  return person.firstName;
};
console.log(
  'FirstName is:',
  getFirstName({ firstName: 'Mahdieh', lastName: 'Maleki' })
);
console.log(
  'FirstNAme is:',
  getFirstName({ firstName: 'John', lastName: 'Henry' })
);
const getLastElement = (array) => {
  return array[array.length - 1];
};
console.log(
  'The last element of the array is:',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
console.log(
  'The last element of the array is:',
  getLastElement([true, true, false, true])
);
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
console.log(
  'CallOtherFunction(ConvertMinutesToSeconds,10) is:',
  callOtherFunction(convertMinutesToSeconds, 10)
);
console.log(
  'CallOtherFunction(getLastElement) is:',
  callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha'])
);
