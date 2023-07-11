// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]


//My Solution:

var number=function(array){
    return array.map((el, i) => `${i + 1}: ${el}`);
}


//My Explanation:
//use map that has parameters of element (el) and i (index) 
//return new array by using template literal that will return the index of element + 1 (so that numbering doesn't begin at 0) and the element attached to index, seperated by colon
//if the inputted array is empty, map will still return an empty array back


//Tests:
number(["z", "y", "x", "w", "v"]);
number(["a", "b", "c"]);
number([]);
number(["X"]);
