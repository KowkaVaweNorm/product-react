// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { classNames } from '../ClassNames/ClassNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with only first param', () => {
    expect(classNames('someClass', {}, ['class1'])).toBe('someClass class1');
  });

  test('with mods', () => {
    expect(classNames('someClass', { hovered: true, scrollable: true })).toBe(
      'someClass hovered scrollable',
    );
  });

  test('with mods false', () => {
    expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1'])).toBe(
      'someClass class1 hovered',
    );
  });

  test('with mods undefined', () => {
    expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['class1'])).toBe(
      'someClass class1 hovered',
    );
  });
});
