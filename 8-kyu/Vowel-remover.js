// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

//My Solution:


function shortcut(str) {
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' && str[i] !== 'o' && str[i] !== 'u') {
        result += str[i];
      }
    }
  
    return result;
}


//Tests:
shortcut('never'); // nvr
shortcut('hello'); // hll
shortcut('how are you today?'); // hw r y tdy?