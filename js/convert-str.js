function convertString(str) {
  let resStr = '';
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