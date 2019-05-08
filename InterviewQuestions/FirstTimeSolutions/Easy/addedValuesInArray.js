// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

function findAddedValue(arr, k) {
  if (arr.length <= 1) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(k - arr[i]) > 0) {
      return [arr[i], arr[arr.indexOf(k - arr[i])]];
    }
  }
  return false;
}

// findAddedValue([10, 15, 3, 7], 17);
// findAddedValue([], 0);
// findAddedValue([1], 1);
// findAddedValue([20, 5, 14, 0, 2], 16);
findAddedValue([1, 15, 3, 8], 17);
