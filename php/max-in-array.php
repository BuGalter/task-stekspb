<?php
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