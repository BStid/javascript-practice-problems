let pOfAllNums = require("../productOfAllNums");

describe("Product Of All Numbers Problem", () => {
  it("should be the product of all numbers in the array expect i", () => {
    expect(pOfAllNums([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
    expect(pOfAllNums([3, 2, 1])).toEqual([2, 3, 6]);
  });
});
