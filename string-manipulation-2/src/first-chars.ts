/* exported firstChars */
function firstChars(length: number, str: string): string {
  let newStr = '';
  if (str.length <= length) {
    return str;
  } else {
    for (let i = 0; i < length && Math.max(0, str.length); i++) {
      newStr += str[i];
    }
  }
  return newStr;
}
