<?php
function convert_str($str) {
/**
 * The function takes a string of at most 100 characters and converts it. 
 * Replaces the space character in this string with "% 20" and
 * all Uppercase letters with lowercase letters.
 * @param {string} str - String to konvert.
 * The function does not return anything, the result is displayed on the screen.
 * If the string is more than 100 characters long, it returns an empty string.
 */
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