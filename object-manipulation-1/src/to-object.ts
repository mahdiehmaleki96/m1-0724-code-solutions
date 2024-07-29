/* exported toObject */
function toObject(keyValuePair: string[]): object {
  const obj = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}
