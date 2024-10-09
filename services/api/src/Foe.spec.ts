import type { User } from '@project/types/User.ts';
import UserSchema from '@project/types/src/schemas/User.ts';
import { expect, test } from 'vitest';
import Foe from '#api/Foe.ts';

test('Foe', () => {
  const actual = new Foe().bar(1);
  const expected = 1;
  expect(actual).toBe(expected);
});

test('UserSchema', () => {
  const actual = UserSchema.safeParse({ id: 1, email: 'email', password: 'password' });
  const expected = expect.any(Object);
  expect(actual).toBe(expected);
});
