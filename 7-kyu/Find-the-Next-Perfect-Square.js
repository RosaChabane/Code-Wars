// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square


//My Solution:

function findNextSquare(sq) {
    const nextSqrt = (Math.sqrt(sq)+1)**2;
    return nextSqrt % 1 !== 0 ? -1 : nextSqrt;
}


//My Explanation:
//first use Math.sqrt to find the square root of number, add +1 to it to find the "next" perfect square
//put that expression in parentheses to have that be done first, then use **2 to square the result of that expression
//then use ternary operator to return if nextSqrt/1 has a remainder (will check if number is a float)
//if remainder is not 0 (if num is float), return -1, if remainder is 0 return nexSqrt


//Tests:
findNextSquare(121); // 144
findNextSquare(625) // 676
findNextSquare(342786627) // -1
findNextSquare(155) // -1