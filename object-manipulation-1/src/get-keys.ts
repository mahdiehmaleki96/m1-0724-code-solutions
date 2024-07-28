/* exported getKeys */
function getKeys(obj: Record<string, unknown>): string[] {
  const objArray: string[] = [];
  for (const key in obj) {
    objArray.push(key);
  }
  return objArray;
}
