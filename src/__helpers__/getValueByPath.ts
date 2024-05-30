export function getValueByPath(
  obj: Record<string, unknown> | null,
  path: string
): unknown {
  if (!obj) return undefined;

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
