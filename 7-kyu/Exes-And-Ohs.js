// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//My Solution:

function XO(str) {
    const caseStr = str.toLowerCase().split("");
    let ex = caseStr.filter( letter => letter === "x" );
    let oh = caseStr.filter( letter => letter === "o" );
    return ex.length === oh.length ? true : false; 
}
  

//My Explanation:
//first make sure string is converted to all lower case and then split the string between each letter
//filter through each letter to find each "x" and "oh" and assign finding to seperate variables
//use ternary operator to check condition -> if the length of the ex array (array of filtered "x") and oh array are equal, then return true, otherwise return false


//Tests:
XO("XXxOOo"); // true
XO("XXxOo"); // false
XO("zpzpzpp"); // true

