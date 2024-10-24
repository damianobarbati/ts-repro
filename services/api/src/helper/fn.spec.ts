import { describe, expect, it } from "vitest";
import { fn } from "#api/helper/fn.ts";

describe("fn", () => {
  it("should succeed", () => {
    const actual = fn(1);
    const expected = 2;
    expect(actual).toBe(expected);
  });
});
