<?php
function convert_str($str) {
    $resultstr = '';
    if (strlen($str) > 100) {
      return $resultstr;
    };
    for ($i = 0; $i < strlen($str); $i++) {
        if ($str[$i] == ' ') {
            $resultstr .= '%20';
        } else {
            $resultstr .= strtolower($str[$i]);         
        };
    };
    return $resultstr;
};

$teststr = 'HelLo, wOrLD!';
echo(convert_str($teststr));
?>