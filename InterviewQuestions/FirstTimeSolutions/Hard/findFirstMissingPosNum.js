// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

// You can modify the input array in-place.

function findMissingNum(arr) {
  if (arr.length < 1) return -1;
  let sortedArr = arr.sort((a, b) => a - b);
  for (let i = 1; i < sortedArr.length; i++) {
    let prev = sortedArr[i - 1];
    let current = sortedArr[i];
    if (prev === current - 2 && current - 1 > 0) return current - 1;
  }
  return sortedArr[sortedArr.length - 1] > 0
    ? sortedArr[sortedArr.length - 1] + 1
    : 1;
}

module.exports = findMissingNum;
