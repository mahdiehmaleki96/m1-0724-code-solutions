function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
console.log('Convert Minutes to Seconds (5) is: ', convertMinutesToSeconds(5));
console.log(
  'Convert Minutes To Seconds (10) is : ',
  convertMinutesToSeconds(10)
);

function greet(name: string): string {
  const interpolatedString: string = `Hey ${name}! Welcome back :)`;
  return interpolatedString;
}
console.log(greet('Mahdieh'));
console.log(greet('Dr. Sam'));

const getArea = (width: number, height: number): number => {
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

interface Person {
  firstName: string;
  lastName: string;
}
const getFirstName = (person: Person): string => {
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

const getLastElement = (array: any): any => {
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

function callOtherFunction(otherFunction: Function, params: unknown): any {
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
