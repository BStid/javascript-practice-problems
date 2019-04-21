let Jewels = "aA";
let Stones = "aAAbbbb";

const checkJewels = (J, S) => {
  let count = 0;
  for (let s of S) {
    if (J.indexOf(s) > -1) {
      count++;
    }
  }
  return count;
};

checkJewels(Jewels, Stones);
