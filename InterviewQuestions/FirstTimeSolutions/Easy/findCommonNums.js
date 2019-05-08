//Given two arrays, return a new array of the most common elements.
//Example: [1,3,4,6,7,9], [1,2,5,5,9,10] should return [1,4,9].

// Declare a new Map
// Inject first array in Map
// loop through second array checking if the property value exists

function commonElements(arr1, arr2) {
  let numMap = new Map();
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    numMap.set(arr1[i], arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    if (numMap.has(arr2[j])) {
      answer.push(arr2[j]);
    }
  }
  return answer;
}
const a = [-6, -1, 3, 4, 7, 9];
const b = [-6, -1, 2, 4, 5, 9, 10];
commonElements(a, b);
