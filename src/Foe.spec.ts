import { expect, test } from 'vitest';
import Foe from '#Foe.ts';

test('Foe', () => {
  const actual = new Foe().bar(1);
  const expected = 1;
  expect(actual).toBe(expected);
});
