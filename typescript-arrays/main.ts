const colors: string[] = ['red', 'white', 'blue'];
console.log('Value of colors[0]: ', colors[0]);
console.log('Value of colors[1]: ', colors[1]);
console.log('Value of colors[2]: ', colors[2]);
const interpolatedString1: string = `America is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`;
console.log(interpolatedString1);

colors[2] = 'green';
const interpolatedString2: string = `Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}.`;
console.log(interpolatedString2);

console.log('Value of colors: ', colors);
console.log('Type of colors: ', typeof colors);

const students: string[] = ['Madia', 'Philip', 'Shea', 'Devin'];
const numberOfStudents: number = students.length;
const interpolatedString3: string = `There are ${numberOfStudents} students in the class.`;
console.log(interpolatedString3);

const lastIndex: number = students.length - 1;
const lastStudent: string = students[lastIndex];
const interpolatedString4: string = `The last Student in the array is ${lastStudent}.`;
console.log(interpolatedString4);
console.log('Value of Students: ', students);
console.log('Type of students: ', typeof students);
