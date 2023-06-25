// // Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). 
// Jaden is also known for some of his philosophy that he delivers via Twitter. 
// When writing on Twitter, he is known for almost always capitalizing every word. 
// For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// // Your task is to convert strings to how they would be written by Jaden Smith. 
// The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// // Example:

// // Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// // Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


//My Solution:

String.prototype.toJadenCase = function () {
    let splitStr = this.split(" ");
    let jadenCase = splitStr.map(word => {
      return word[0].toUpperCase() + word.slice(1);
    })
    return jadenCase.join(" ");
};
  
let str = "How can mirrors be real if our eyes aren't real";

str.toJadenCase();

//Solution Explanation:
//First split the string being passed in into an array, use space as a seperator to seperate array by word
//Use map to create a new array where each first letter (index[0] of each word) is changed to uppercase
//Concatenate the rest of the letters using slice with a starting index of 1, and no specified end
//Lastly, return this new array into a string using join with a space as its seperator to seperate string into sentence 

