// Given an array of integers, return the most frequently recurring number.

function mostFrequentItem(arr = []) {
  if (arr.length === 0) {
    return [];
  }
  let numMap = {};

  for (let i = 0; i < arr.length; i++) {
    if (numMap[arr[i]]) {
      numMap[arr[i]] = numMap[arr[i]] + 1;
    } else {
      numMap[arr[i]] = 1;
    }
  }
  console.log(numMap);
  let biggest = 0;
  let biggestKey = 0;
  for (let p in numMap) {
    if (numMap[p] > biggest) {
      biggest = numMap[p];
      biggestKey = p;
    }
  }
  return biggestKey;
}

mostFrequentItem([1, 3, 2, 5, 2, 1, 2, 3, 5]);
mostFrequentItem();
