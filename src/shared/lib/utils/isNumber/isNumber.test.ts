import { isNumber } from './isNumber';

describe('isNumber', () => {
  test('with empty string', () => {
    expect(isNumber('')).toEqual(true);
  });
  test('with filled string', () => {
    expect(isNumber('string')).toEqual(false);
  });
  test('with filled string of number', () => {
    expect(isNumber('12233')).toEqual(true);
  });
  test('with filled string of number and letters', () => {
    expect(isNumber('1223a3')).toEqual(false);
  });
  test('with number 0', () => {
    expect(isNumber(0)).toEqual(true);
  });
  test('with positive number', () => {
    expect(isNumber(10)).toEqual(true);
  });
  test('with negative number', () => {
    expect(isNumber(-10)).toEqual(true);
  });
  test('with object number 0', () => {
    expect(isNumber(Number(0))).toEqual(true);
  });
  test('with object positive number', () => {
    expect(isNumber(Number(10))).toEqual(true);
  });
  test('with object negative number', () => {
    expect(isNumber(Number(-10))).toEqual(true);
  });
  test('testing with the Number object to which the filled string was passed ', () => {
    expect(isNumber(Number('sstring'))).toEqual(false);
  });
});
