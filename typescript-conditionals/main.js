'use strict';
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
function isUnderFive(number) {
  if (number < 5) {
    return true;
  }
  return false;
}
function isEven(number) {
  if (number % 2 == 0) {
    return true;
  }
  return false;
}
function startsWithJ(string) {
  if (string.startsWith('J')) {
    return true;
  }
  return false;
}
function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  }
  return false;
}
function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  }
  return false;
}
function isOldEnoughToDrinkAndDrive(person) {
  if (isOldEnoughToDrink(person) && isOldEnoughToDrive(person)) {
    return true;
  }
  return false;
}
function categorizeAcidity(pH) {
  if (pH >= 0 && pH < 7) {
    return 'Acid';
  } else if (pH == 7) {
    return 'Neutral';
  } else if (pH > 7 && pH <= 14) {
    return 'Base';
  } else {
    return 'Invalid pH level';
  }
}
function introduceWarnerBro(name) {
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
function recommendMovie(genre) {
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
