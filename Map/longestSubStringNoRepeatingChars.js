// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
  let map = new Map();
  let maxLength = 0;
  let num = 0;
  let stringArr = s.split("");

  for (let i = 0; i < stringArr.length; i++) {
    let char = stringArr[i];
    let val = map.get(char);

    if (val !== undefined && num <= val) num = val + 1;
    map.set(char, i);
    val = map.get(char);
    if (i - num + 1 > maxLength) maxLength = i - num + 1;
  }
  return maxLength;
};
lengthOfLongestSubstring("abcabcbb");
