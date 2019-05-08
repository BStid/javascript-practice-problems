/* Problem Name is &&& Snowpack &&& PLEASE DO NOT REMOVE THIS LINE. */

/*
 ** Instructions to candidate.
 **  1) Given an array of non-negative integers representing the elevations
 **     from the vertical cross section of a range of hills, determine how
 **     many units of snow could be captured between the hills.
 **
 **     See the example array and elevation map below.
 **                                 ___
 **             ___                |   |        ___
 **            |   |        ___    |   |___    |   |
 **         ___|   |    ___|   |   |   |   |   |   |
 **     ___|___|___|___|___|___|___|___|___|___|___|___
 **     {0,  1,  3,  0,  1,  2,  0,  4,  2,  0,  3,  0}
 **                                 ___
 **             ___                |   |        ___
 **            |   | *   *  _*_  * |   |_*_  * |   |
 **         ___|   | *  _*_|   | * |   |   | * |   |
 **     ___|___|___|_*_|___|___|_*_|___|___|_*_|___|___
 **     {0,  1,  3,  0,  1,  2,  0,  4,  2,  0,  3,  0}
 **
 **     Solution: In this example 13 units of snow (*) could be captured.
 **
 **  2) Consider adding some additional tests.
 **  3) Implement computeSnowpack() correctly.
 */

/**
 * Find the amount that will be captured
 * @returns {int}
 **/

function computeSnowpack(heights = [], newArr = []) {
  let tallest = 0;
  let secondTallest = 0;
  let snowCount = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] > tallest) {
      secondTallest = tallest;
      tallest = heights[i];
    }
  }
  let tallestIndex = heights.indexOf(tallest);
  let secTallestIndices = [];
  for (let j = 0; j < heights.length; j++) {
    if (heights[j] === secondTallest) {
      secTallestIndices.push(j);
    }
  }

  if (tallestIndex < secTallestIndices[secTallestIndices.length - 1]) {
    newArr = heights.slice(
      secTallestIndices[0],
      secTallestIndices[secTallestIndices.length - 1] + 1
    );
    for (let k = 0; k < newArr.length; k++) {
      if (newArr[k] <= secondTallest) {
        snowCount += secondTallest - newArr[k];
      }
    }
    return snowCount;
  }
  return -1;
}

module.exports = computeSnowpack;
