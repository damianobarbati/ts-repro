import { type User, UserSchema } from "types/User.ts";
import x, { fn, type numeric } from "#api/helper/fn.ts";

const { default: Foe } = await import("#api/Foe.ts");

const bar: numeric = new Foe().bar(1);
console.log({ x, fn: fn(2), bar });

const user: User = UserSchema.parse({ id: 1, email: "john.doe@gmail.com", password: "password" });
console.log(user);
