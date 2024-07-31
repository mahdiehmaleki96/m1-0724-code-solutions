/* exported capitalizeWords */
function capitalizeWords(word: string): string {
  const strArray: string[] = word.split(' ');
  const newArray = [];
  for (let i = 0; i < strArray.length; i++) {
    newArray.push(capitalizeWord(strArray[i]));
  }

  return newArray.join(' ');
}
