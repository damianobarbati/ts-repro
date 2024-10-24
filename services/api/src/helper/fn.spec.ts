import { type UserRow, UserSchema } from "types/User.ts";
import { describe, expect, it } from "vitest";
import { fn } from "#api/helper/fn.ts";

describe("fn", () => {
  it("should succeed", () => {
    const actual = fn(1);
    const expected = 2;
    expect(actual).toBe(expected);
  });
});

describe("UserSchema imported from another package", () => {
  // here only to show cross-import between packages
  it("should succeed", () => {
    const user_row: UserRow = { id: 1, email: "john.doe@gmail.com", password: "password" };
    const actual = UserSchema.safeParse(user_row);
    expect(actual.success).toBe(true);
  });
});
