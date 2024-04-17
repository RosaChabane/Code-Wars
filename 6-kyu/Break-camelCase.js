// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//My Solution:

function solution(string) {
    let test = string.split("");
    let store = [];
    let count = 0;
    for (let i = 0; i <= test.length; i++) {
      if (i === test.length || test[i] === test[i].toUpperCase()) {
        store.push(test.slice(count, i).join(""));
        count = i;
      }
    }
    return store.join(' ');
}


//My Explanation:
//First split the string into array of each letter, initialize empty store array to store the seperate words found, and count of zero to keep track of starting index of each word
//run a for loop that goes over each letter and set conditional for when uppercase letter is found the word will be pushed into the store array as a string 
//it is sliced using starting index of count and ending index of 'i', which is the current iteration letter the loop is on
// Example:
// 'c a m e l C a s i n g'
//  0 1 2 3 4 5 6 7 8 9 10
//beginning of loop, count would be 0 and the conditional would find at index 5 a capital 'C', then performing slice(0, 5), because the end of slice is not inclusive, we will get last letter of our first word
//after this finding, count would then be set to the iteration of the first uppercase letter, meaning the next time we slice the starting index would be the start of our next word
//finally, to return the store array as string, join is used with a spacing as a seperator


//Tests:
solution("camelCasing"); // "camel Casing"
solution("camelCasingTest"); // "camel Casing Test"