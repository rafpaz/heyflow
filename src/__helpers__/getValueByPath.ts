export function getValueByPath(
  obj: Record<string, unknown>,
  path: string
): unknown {
  return path
    .replace(/\[(\d+)\]/g, '.$1')
    .split('.')
    .reduce((acc: unknown, part: string) => {
      if (typeof acc === 'object' && acc !== null && part in acc) {
        return (acc as Record<string, unknown>)[part];
      }
      return undefined;
    }, obj);
}
