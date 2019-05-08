const computeSnowpack = require("../snowPack");

describe("SnowPack Problem", () => {
  it("should return the correct snow count", () => {
    expect(computeSnowpack([0, 1, 3, 0, 1, 2, 0, 4, 2, 0, 3, 0])).toBe(13);
    expect(computeSnowpack([1, 3, 2, 4, 1, 3, 1, 4, 5, 2, 2, 1, 4, 2, 2])).toBe(
      14
    );
  });
});
