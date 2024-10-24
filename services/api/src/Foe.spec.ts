import { describe, expect, it } from "vitest";
import Foe from "#api/Foe.ts";

describe("Foe", () => {
  it("should succeed", () => {
    const actual = new Foe().bar(1);
    const expected = 1;
    expect(actual).toBe(expected);
  });
});
