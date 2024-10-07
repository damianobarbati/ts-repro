import type { User } from '@ts-repro/types/User';
import x, { fn, type numeric } from '#api/helper/fn.ts';

const { default: Foe } = await import('#api/Foe.ts');

const bar: numeric = new Foe().bar(1);
console.log({ x, fn: fn(2), bar });

const user: User = { id: 1, email: 'email', password: 'password' };
console.log(user);
