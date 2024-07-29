/* exported getValues */
function getValues(obj: Record<string, string>): string[] {
  const objArray: string[] = [];
  for (const key in obj) {
    objArray.push(obj[key]);
  }
  return objArray;
}
