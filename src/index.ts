import x, { fn, type numeric } from '#helper/foe.ts';

const { default: Foe } = await import('#Foe.ts');

const bar: numeric = new Foe().bar(1);

console.log(x, fn(2), bar);
