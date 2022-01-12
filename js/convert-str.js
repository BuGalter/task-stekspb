/**
 * convert-str module.
 * @module task-stekspb/js/convert-str
 */

function convertString(str) {
  /**
   * The function takes a string of at most 100 characters and converts it. 
   * Replaces the space character in this string with "% 20" and
   * all Uppercase letters with lowercase letters.
   * @param {string} str - String to konvert.
   * @returns The function does not return anything, the result is displayed on the screen.
   * If the string is more than 100 characters long, it returns an empty string.
   */
  let resStr = '';
  if (str.length > 100) {
    return resStr;
  };
  for (let char of str) {
    if (char === ' ') {
      resStr = resStr + '%20';
    } else {
      resStr = resStr + char.toLowerCase();
    };
  }
  return resStr;
};

let testStr = 'HelLo, wOrLD!';

console.log(convertString(testStr));