// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//My solution:

function reverseWords(str) {
    //seperate each letter/space into an array then reverse those letters/spaces and join into string 
    let newStr = str.split("").reverse().join("");
    //seperate each word and reverse/join again to return a string that is each word reversed but in inputted order
    return newStr.split(" ").reverse().join(" ");
}


//expected output: 'sihT si na !elpmaxe'
console.log(reverseWords("This is an example!"));

//expected output: 'elbuod  secaps'
console.log(reverseWords('double  spaces'));
