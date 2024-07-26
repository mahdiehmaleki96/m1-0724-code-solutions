/* exported getWords */
function getWords(str: string): string[] {
  if (str.trim() === '') {
    return [];
  }
  return str.split(' ');
}
