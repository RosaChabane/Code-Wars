// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

//My Solution:


function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++) {
      z.push(x * i);
    }
    return z;
}


//My Explanation:
//create an empty array (z)
//run for loop that starts at 1 and ends at n
// push x * current iteration into z array, then return that array
// Example: countBy(2,5)
// first iteration i = 1, meaning 2*1 which gets pushed into z, z = [2], second iteration i = 2 -> 2*2 -> z = [2, 4] etc.


//Tests:
countBy(1,10); // [1,2,3,4,5,6,7,8,9,10]
countBy(2,5); // [2,4,6,8,10]