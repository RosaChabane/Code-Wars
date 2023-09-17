// In this little assignment you are given a string of space separated numbers
// and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.


//My Solution:
function highAndLow(numbers) {
    const split = numbers.split(" ");
    const mapped = split.map(el => Number(el));
    const lowest = Math.min(...mapped);
    const highest = Math.max(...mapped);
    return highest.toString() + " " + lowest.toString();
}

//My Explanation:
//first split numbers into an array seperated by each number
//use map and Number() to return new array of previous split string elements but in number type so we can use Math.min/max
//use Math.min/Math.max and spread operator (...mapped) to iterate over the mapped array, and store those values into variables
//when returning higihest/lowest use toString() to return it as a string


//Tests:
highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"); // "42 -9"
highAndLow("1 2 3"); // "3 1"
highAndLow("1 2 -3 4 5"); // "5 -3"

