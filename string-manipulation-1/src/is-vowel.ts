/* exported isVowel */
function isVowel(char: string): boolean {
  const vowelChar = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
  for (let i = 0; i < vowelChar.length; i++) {
    if (char === vowelChar[i]) {
      return true;
    }
  }
  return false;
}
