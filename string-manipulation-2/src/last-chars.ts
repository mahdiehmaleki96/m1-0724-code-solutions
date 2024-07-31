/* exported lastChars */
function lastChars(length: number, str: string): string {
  let newStr = '';
  if (str.length <= length) {
    return str;
  } else {
    for (let i = str.length - length; i < str.length; i++) {
      newStr += str[i];
    }
  }
  return newStr;
}
