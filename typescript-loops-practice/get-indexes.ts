/* exported getIndexes */
function getIndexes(array: any[]): number[] {
  const indexArray = [];
  for (let i = 0; i < array.length; i++) {
    indexArray.push(i);
  }
  return indexArray;
}
