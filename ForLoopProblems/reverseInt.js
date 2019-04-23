var reverse = function(x) {
  let arr = [];
  let negative = false;
  if (x < 0) {
    x = Math.abs(x);
    negative = true;
  }

  while (x >= 1) {
    arr.push(x % 10);
    x = Math.floor(x / 10);
  }
  if (arr[arr.length - 1] == 0) arr.pop();
  x = arr.join("");

  if (x > 2147483647) return 0;
  else return negative ? -Math.abs(x) : x;
};

reverse(-123);
