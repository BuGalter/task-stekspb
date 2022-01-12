<?php
/**
 * The function returns the largest number in the array.
 * @param {Array<number>} arr - Maximum search array.
 * @return {number} max - Maximum array element.
 */
function maxInArray($arr)
{
  $max = null;
  foreach($arr as $value)
    {
      if($value > $max or $max === null)
        $max = $value;
    }
  return $max;
}

$testArray = [0, 2, 5, 7, 1];

echo(maxInArray($testArray));
?>