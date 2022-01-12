<?php
function prime_number() {
  $n = 100;
  $prime_number = [];
  for ($i = 0; $i <= $n; $i += 1) {
      $prime_number[$i] = $i;
  };
  for ($j = 2; $j <= $n; $j += 1) {
      if ($prime_number[$j] != 0) {
          echo($prime_number[$j]);
          echo("<br>");
          for ($k = $j * $j; $k <= $n; $k += $j) {
              $prime_number[$k] = 0;
          };
      };
  };
};

prime_number();
?>