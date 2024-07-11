const width: number = 4;
const height: number = 5;
const area: number = width * height;
console.log('Value of area is: ', area);
console.log('Type of area is: ', typeof area);

const bill: number = 250;
const payment: number = 300;
const change: number = payment - bill;
console.log('Value of change is: ', change);
console.log('Type of change is: ', typeof change);

const quizzes: number = 89;
const midterm: number = 95;
const final: number = 92;
const grade: number = (quizzes + midterm + final) / 3;
console.log('Value of grade is: ', grade);
console.log('Type of grade is: ', typeof grade);

const firstName: string = 'Mahdieh';
const lastName: string = 'Maleki';
const fullName: string = firstName + ' ' + lastName;
console.log('Value of fullName is: ', fullName);
console.log('Type of fullName is: ', typeof fullName);

const pH: number = 8;
const isAcidic: boolean = pH <= 7;
console.log('Value of isAcidic is: ', isAcidic);
console.log('Type of isAcidic is: ', typeof isAcidic);

const headCount: number = 290;
const isSparta: boolean = headCount === 300;
console.log('Value of isSparta is: ', isSparta);
console.log('Type of isSparta is: ', typeof isSparta);

let motto: string = fullName;
motto += ' is the GOAT!';
console.log('Value of motto is: ', motto);
console.log('Type of motto is: ', typeof motto);
