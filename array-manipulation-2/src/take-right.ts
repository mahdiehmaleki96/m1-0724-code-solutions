/* exported takeRight */
function takeRight(array: any[], count: number): any[] {
  const newArray = [];
  for (let i = Math.max(0, array.length - count); i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
