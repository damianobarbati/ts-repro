import type { User } from '@project/types/User.ts';
import UserSchema from '@project/types/src/schemas/User.ts';
import x, { fn, type numeric } from '#api/helper/fn.js';

const { default: Foe } = await import('#api/Foe.ts');

const bar: numeric = new Foe().bar(1);
console.log({ x, fn: fn(2), bar });

const user: User = UserSchema.parse({ id: 1, email: 'email', password: 'password' });
console.log(user);
