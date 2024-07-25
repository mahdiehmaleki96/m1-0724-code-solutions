'use strict';
function getDescriptionOfPerson(person) {
  const interpolatedString = `${person.name} is a ${person.occupation} from ${person.birthPlace}.`;
  return interpolatedString;
}
