/* exported pick */
function pick(
  source: Record<string, any>,
  keys: string[]
): Record<string, any> {
  const newObj: Record<string, any> = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key in source && source[key] !== undefined) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
