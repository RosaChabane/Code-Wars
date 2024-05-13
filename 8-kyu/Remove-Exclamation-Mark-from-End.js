// Remove an exclamation mark from the end of a string. 
// For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

//My Solution:

function remove(string) {
    return string[string.length-1] == '!' ? string.slice(0, -1) : string;
}

//My Explanation:
//Use ternary operator with condition if last index of string is '!' then use slice to return the whole string except that last index, if not then return original string


//Tests:
remove("Hi!"); // "Hi"
remove("Hi! Hi!"); // "Hi! Hi"
remove("!Hi"); // "!Hi"