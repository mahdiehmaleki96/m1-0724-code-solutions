/* exported defaults */
function defaults(
  target: Record<string, any>,
  source: Record<string, any>
): any {
  for (const key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
}
