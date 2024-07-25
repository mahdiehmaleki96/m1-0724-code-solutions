/* exported sumAll */
function sumAll(num: number[]): number {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}
