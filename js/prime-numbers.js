function primeNumber() {
  const n = 100;
  let primeNumbers = [];
  for (let i = 0; i < n + 1; i += 1) {
    primeNumbers[i] = i;
  };
  for (let j = 2; j < n + 1; j += 1) {
    if (primeNumbers[j] !== 0) {
      console.log(primeNumbers[j]);
      for (let k = j * j;  k < n + 1; k += j) {
        primeNumbers[k] = 0;
      }
    }
  };
};

primeNumber();