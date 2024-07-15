interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  name?: string;
  kind?: string;
}

const student: StudentProps = {
  firstName: 'Mahdieh',
  lastName: 'Maleki',
  age: 28,
};

const fullName: string = student.firstName + ' ' + student.lastName;
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

const vehicle: Vehicle = {
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

const pet: Pet = {
  name: 'Beemer',
  kind: 'Pomeranian',
};
delete pet.name;
delete pet.kind;
console.log('Value of the pet is:', pet);
console.log('Type of the pet is:', typeof pet);
