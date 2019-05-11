const findMissingNum = require("../findFirstMissingPosNum");

describe("Find Missing Positive Number Problem", () => {
  it("should find the first missing positive integer", () => {
    expect(findMissingNum([3, 4, -1, 1])).toEqual(2);
    expect(findMissingNum([1, 2, 0])).toEqual(3);
    expect(findMissingNum([])).toEqual(-1);
    expect(findMissingNum([-1, -2, 0, -3])).toEqual(1);
    expect(findMissingNum([-1, -2, -3])).toEqual(1);
  });
});
