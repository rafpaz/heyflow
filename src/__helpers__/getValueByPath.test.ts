import { getPropertyValue } from './getValueByPath';

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
    expect(getPropertyValue(obj, 'a.e')).toBe('f');
  });

  test('should return undefined for non-existing path', () => {
    expect(getPropertyValue(obj, 'a.b.e')).toBeUndefined();
  });

  test('should return the value for a top-level path', () => {
    expect(getPropertyValue(obj, 'x')).toBe(10);
  });

  test('should return undefined for non-existing top-level path', () => {
    expect(getPropertyValue(obj, 'w')).toBeUndefined();
  });

  test('should return the value for a path with null value', () => {
    expect(getPropertyValue(obj, 'y')).toBeNull();
  });

  test('should return the value for a path pointing to an array', () => {
    expect(getPropertyValue(obj, 'z')).toEqual([1, 2, 3]);
  });

  test('should handle empty object', () => {
    expect(getPropertyValue({}, 'a')).toBeUndefined();
  });

  test('should handle empty path', () => {
    expect(getPropertyValue(obj, '')).toEqual(undefined);
  });

  test('should return undefined for invalid paths', () => {
    expect(getPropertyValue(obj, 'a..b')).toBeUndefined();
    expect(getPropertyValue(obj, 'a.b.')).toBeUndefined();
    expect(getPropertyValue(obj, '.a.b')).toBeUndefined();
  });

  test('should handle paths with numbers as keys in objects', () => {
    const numKeyObj = { '1': 'one', '2': { '3': 'three' } };
    expect(getPropertyValue(numKeyObj, '2.3')).toBe('three');
  });

  test('should handle paths with array indeices', () => {
    expect(getPropertyValue(obj, 'a.b[0].c')).toBe(42);
    expect(getPropertyValue(obj, 'a.b[1].d')).toBe('world');
  });
});
