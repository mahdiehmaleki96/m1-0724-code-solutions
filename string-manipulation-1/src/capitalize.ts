/* exported capitalize */
function capitalize(word: string): string {
  let newWord = word.charAt(0).toUpperCase();
  for (let i = 1; i < word.length; i++) {
    newWord += word.charAt(i).toLowerCase();
  }
  return newWord;
}
