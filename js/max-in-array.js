/**
 * max-in-array module.
 * @module task-stekspb/js/max-in-array
 */

function maxInArray(arr) {
  /**
   * The function returns the largest number in the array.
   * @param {Array<number>} arr - Maximum search array.
   * @returns {number} max - Maximum array element.
   */
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