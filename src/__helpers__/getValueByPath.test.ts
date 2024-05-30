import { getValueByPath } from '@/__helpers__/getValueByPath';

describe('getPropertyValue', () => {
  const obj = {
    a: {
      b: [
        {
          c: 42,
          d: 'hello',
        },
        {
          c: 43,
          d: 'world',
        },
      ],
      e: 'f',
    },
    x: 10,
    y: null,
    z: [1, 2, 3],
  };

  test('should return the value at a nested path', () => {
    expect(getValueByPath(obj, 'a.e')).toBe('f');
  });

  test('should return undefined for non-existing path', () => {
    expect(getValueByPath(obj, 'a.b.e')).toBeUndefined();
  });

  test('should return the value for a top-level path', () => {
    expect(getValueByPath(obj, 'x')).toBe(10);
  });

  test('should return undefined for non-existing top-level path', () => {
    expect(getValueByPath(obj, 'w')).toBeUndefined();
  });

  test('should return the value for a path with null value', () => {
    expect(getValueByPath(obj, 'y')).toBeNull();
  });

  test('should return the value for a path pointing to an array', () => {
    expect(getValueByPath(obj, 'z')).toEqual([1, 2, 3]);
  });

  test('should handle empty object', () => {
    expect(getValueByPath({}, 'a')).toBeUndefined();
  });

  test('should handle empty path', () => {
    expect(getValueByPath(obj, '')).toEqual(undefined);
  });

  test('should return undefined for invalid paths', () => {
    expect(getValueByPath(obj, 'a..b')).toBeUndefined();
    expect(getValueByPath(obj, 'a.b.')).toBeUndefined();
    expect(getValueByPath(obj, '.a.b')).toBeUndefined();
  });

  test('should handle paths with numbers as keys in objects', () => {
    const numKeyObj = { '1': 'one', '2': { '3': 'three' } };
    expect(getValueByPath(numKeyObj, '2.3')).toBe('three');
  });

  test('should handle paths with array indeices', () => {
    expect(getValueByPath(obj, 'a.b[0].c')).toBe(42);
    expect(getValueByPath(obj, 'a.b[1].d')).toBe('world');
  });
});
