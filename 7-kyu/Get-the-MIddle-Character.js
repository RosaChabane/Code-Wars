// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). 
// You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

//My Solution:

function getMiddle(s) {
    let split = s.split("");
    while (split.length > 2) {
        split.shift();
        split.pop();
    }
    return split.join('');
}

//My Explanation:
// split the string into array separated by each letter
// use while loop if the length of the split string is over 2
// if so, use shift and pop to narrow down the middle element(s)
// if the length of array is 1 or 2 after this process, then return array as string using join


//Tests:
getMiddle("test") // "es"
getMiddle("testing") // "t"
getMiddle("middle") // "dd"
getMiddle("A") // "A"