// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.


//My Solution:
function testEven(n) {
    return n % 2 === 0 ? true : false;
}


//My Explanation:
//using ternary operator syntax to create conditional that returns true or false by checking if number/2 has a remainder of zero, meaning it can be divided evenly



//Tests:
testEven(0) // true
testEven(0.5) // false
testEven(1) // false
testEven(2) // true
testEven(-4) // true