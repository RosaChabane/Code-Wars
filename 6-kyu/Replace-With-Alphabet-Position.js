// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

//My Solution:

function alphabetPosition(text) {
    return text
      .toLowerCase()
      .split("")
      .filter(el => el >= 'a' && el <= 'z')
      .map(el => el.charCodeAt() - 96)
      .join(" ");
}

//My Explanation:
//Convert all letters in text to lowerCase (this will be useful when dealing with unicode for charCodeAt)
//Split the lowercase letters into array seperated by letter
//Use filter to create new array that only returns elements that are alphabetical letters
//Use map to create new array that calls charCodeAt for each element, subtract 96 to find the letter alphabetic position value

// Example of what charCodeAt is finding with lower case letters :
//
//     DEC     CHAR
//     97  <--  a   (97-96=1)
//     98  <--  b   (98-96=2)
//     99  <--  c   (99-96=3)  etc...
//
// When 96 is subtracted after finding the decimal value, we'll get the desired alphabetic value of said character 

//Lastly, use join to return array as string


//Tests: 
alphabetPosition("The sunset sets at twelve o' clock."); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
alphabetPosition("The narwhal bacons at midnight."); // "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"