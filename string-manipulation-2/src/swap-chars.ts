/* exported swapChars */
function swapChars(
  firstIndex: number,
  secondIndex: number,
  str: string
): string {
  if (
    firstIndex < 0 ||
    secondIndex < 0 ||
    firstIndex >= str.length ||
    secondIndex >= str.length
  ) {
    return str;
  }
  const newArray = str.split('');
  const temp = newArray[firstIndex];
  newArray[firstIndex] = newArray[secondIndex];
  newArray[secondIndex] = temp;

  return newArray.join('');
}
