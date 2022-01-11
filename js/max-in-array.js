function maxInArray(arr) {
  let len = arr.length;
  let max = -Infinity;
  for (let i = 0; i < len; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    };
  };
  return max;
};

const testArr = [0, 2, 5, 7, 1];

console.log(maxInArray(testArr));