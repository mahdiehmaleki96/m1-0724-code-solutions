/* exported setValue */
function setValue(
  obj: Record<string, unknown>,
  key: string,
  value: string
): any {
  obj[key] = value;
}
