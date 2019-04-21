// Given a string S of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions ) so that the resulting parentheses string is valid.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
// Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.

// Example 1:

// Input: "())"
// Output: 1
// Example 2:

// Input: "((("
// Output: 3
// Example 3:

// Input: "()"
// Output: 0
// Example 4:

// Input: "()))(("
// Output: 4

// Note:

// S.length <= 1000
// S only consists of '(' and ')' characters.

var minAddToMakeValid = function(S) {
  let parArr = S.split("");
  let par = 0;
  let count = 0;

  for (let i = 0; i < parArr.length; i++) {
    let currentPar = parArr[i];
    console.log("par", par);
    if (par < 0) {
      count++;
      console.log("count", count);
      par = 0;
    }
    if (currentPar == "(") {
      par++;
    } else {
      par--;
    }
  }
  console.log(par, count);
  if (par > 0) {
    count += par;
  } else if (par < 0) {
    count += Math.abs(par);
  }
  console.log("count", count);
  return count;
};

minAddToMakeValid("()))((");
