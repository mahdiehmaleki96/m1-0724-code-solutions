/* exported invert */
function invert(source: Record<string, any>): Record<string, any> {
  const newObj: Record<string, any> = {};
  let temp: any;
  for (const key in source) {
    temp = source[key];
    newObj[temp] = key;
  }
  return newObj;
}
