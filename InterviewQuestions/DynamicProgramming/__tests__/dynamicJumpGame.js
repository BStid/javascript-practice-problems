const JumpGame = require("../JumpGame/dynamicJumpGame");

describe("Dynamic Programming Jump Game", () => {
  it("should solve Jump Game problem in bottom-up dynamic programming manner", () => {
    expect(JumpGame([1, 0])).toBe(true);
    expect(JumpGame([100, 0])).toBe(true);
    expect(JumpGame([2, 3, 1, 1, 4])).toBe(true);
    expect(JumpGame([1, 1, 1, 1, 1])).toBe(true);
    expect(JumpGame([1, 1, 1, 10, 1])).toBe(true);
    expect(JumpGame([1, 5, 2, 1, 0, 2, 0])).toBe(true);

    expect(JumpGame([1, 0, 1])).toBe(false);
    expect(JumpGame([3, 2, 1, 0, 4])).toBe(false);
    expect(JumpGame([0, 0, 0, 0, 0])).toBe(false);
    expect(JumpGame([5, 4, 3, 2, 1, 0, 0])).toBe(false);
  });
});
