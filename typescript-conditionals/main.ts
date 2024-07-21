/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number: number): boolean {
  if (number < 5) {
    return true;
  }
  return false;
}

function isEven(number: number): boolean {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

function startsWithJ(string: string): boolean {
  if (string.startsWith('J')) {
    return true;
  }
  return false;
}

interface Person {
  name: string;
  age: number;
}
function isOldEnoughToDrink(person: Person): boolean {
  if (person.age >= 21) {
    return true;
  }
  return false;
}

function isOldEnoughToDrive(person: Person): boolean {
  if (person.age >= 16) {
    return true;
  }
  return false;
}

function isOldEnoughToDrinkAndDrive(person: Person): boolean {
  if (isOldEnoughToDrink(person) && isOldEnoughToDrive(person)) {
    return true;
  }
  return false;
}

function categorizeAcidity(pH: number): string {
  if (pH >= 0 && pH < 7) {
    return 'Acid';
  } else if (pH === 7) {
    return 'Neutral';
  } else if (pH > 7 && pH <= 14) {
    return 'Base';
  } else {
    return 'Invalid pH level';
  }
}

function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return 'We are the warner brothers!';
    case 'dot':
      return 'I am cute~';
    default:
      return 'Good night everybody!';
  }
}

function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'The Big Lebowski';
    case 'horror':
      return 'The Conjuring';
    case 'drama':
      return 'The Last Song';
    case 'musical':
      return 'Mean Girls';
    case 'sci-fi':
      return 'Atlas';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
