/* exported oddOrEven */
function oddOrEven(array: number[]): string[] {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArray.push('even');
    } else {
      newArray.push('odd');
    }
  }
  return newArray;
}
