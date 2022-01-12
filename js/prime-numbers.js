function primeNumber() {
  const n = 100;
  let primeNumbers = [];
  for (let i = 0; i <= n; i += 1) {
    primeNumbers[i] = i;
  };
  for (let j = 2; j <= n; j += 1) {
    if (primeNumbers[j] !== 0) {
      console.log(primeNumbers[j]);
      for (let k = j * j;  k <= n; k += j) {
        primeNumbers[k] = 0;
      }
    }
  };
};

primeNumber();