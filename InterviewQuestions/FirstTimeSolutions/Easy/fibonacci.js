//Recursive Solution -- This solution is very slow
// const fibonacci = n =>
//   n === 0 || n == 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);

//Memoized Solution -- Much faster
const memoize = fn => {
  let cache = {};
  return (...args) => {
    console.log("...args", args);
    let n = args[0];
    console.log("cache", cache);
    if (n in cache) {
      console.log("Fetching from cache");
      return cache[n];
    } else {
      console.log("Calculating result");
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

const fibonacci = memoize(n => {
  if (n === 1) {
    return 1;
  } else if (n === 0) {
    return 0;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
});
console.log(fibonacci(10));
