import { changeAnimation } from "@utils";

describe("function animation changes", () => {
  test("return value to left", () => {
    expect(changeAnimation('FROM_LEFT')).toBe("TO_LEFT");
  });
});