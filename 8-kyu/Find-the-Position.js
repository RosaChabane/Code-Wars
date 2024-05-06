// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

//My Solution:

function position(letter){
    return `Position of alphabet: ${letter.charCodeAt() - 96}`;
}

//My Explanation:
//Use charCodeAt to find position of letter in alphabet, return this using template literal 

// Example of what charCodeAt is finding with lower case letters :
//
//     DEC     CHAR
//     97  <--  a   (97-96=1)
//     98  <--  b   (98-96=2)
//     99  <--  c   (99-96=3)  etc...
//
// When 96 is subtracted after finding the decimal value, we'll get the desired alphabetic value of said character 




//Tests:
position("a"); // "Position of alphabet: 1"
position("z"); // "Position of alphabet: 26"
position("e"); // "Position of alphabet: 5"