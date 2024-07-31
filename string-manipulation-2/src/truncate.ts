/* exported truncate */
function truncate(length: number, str: string): string {
  if (str.length <= length) {
    return str + '...';
  }
  let newStr = '';
  for (let i = 0; i < length; i++) {
    newStr += str[i];
  }
  return newStr + '...';
}
