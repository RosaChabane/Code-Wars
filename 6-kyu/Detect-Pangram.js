// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//My Solution:


function isPangram(string){
    const letters = string.toLowerCase().split("").filter(el => el >= 'a' && el <= 'z');
    const result = new Set(letters);
    return result.size === 26 ? true : false;
}


//My Explanation:
//First, need to take into consideration letter casing, can just convert every letter into lowercase
//will split that lowercase string into array seperated by each character, then will filter for letters that are in the alphabet (a-z)
//will then get that split and filtered string (letters variable) and create a new set out of it
//converting the array into a set will not allow any duplicate elements, which will help for cases such as: 'aaaaaaaaaaaaaaaaaaaaaaaaaa'
//lastly, use ternary operator to return the result, if the size of set is equal to 26 that means it must contain every letter of the alphabet in the sentence


//Tests:
isPangram("The quick brown fox jumps over the lazy dog."); // true
isPangram("This is not a pangram."); // false
isPangram('aaaaaaaaaaaaaaaaaaaaaaaaaa'); // false