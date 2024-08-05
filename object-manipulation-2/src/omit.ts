/* exported omit */
function omit(source: Record<string, any>, keys: string): Record<string, any> {
  const newObj: Record<string, any> = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
