import { type User, UserSchema } from "types/User.ts";
import x, { fn, type numeric } from "#api/helper/fn.ts";

// uncomment the next block to get ts import error
// import Redis from "ioredis";
// const redis = new Redis();
// console.log(redis);

const { default: Foe } = await import("#api/Foe.ts");

const bar: numeric = new Foe().bar(1);
console.log({ x, fn: fn(2), bar });

const user: User = UserSchema.parse({ id: 1, email: "john.doe@gmail.com", password: "password" });
console.log(user);
