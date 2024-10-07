import { expect, test } from 'vitest';
import Foe from '#api-helper/Foe.ts';

test('Foe', () => {
  const actual = new Foe().bar(1);
  const expected = 1;
  expect(actual).toBe(expected);
});
