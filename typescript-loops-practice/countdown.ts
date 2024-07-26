/* exported countdown */
function countdown(num: number): number[] {
  const numberArray = [];
  for (let i = num; i >= 0; i--) {
    numberArray.push(i);
  }
  return numberArray;
}
