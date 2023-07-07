// Write a function that takes an array of numbers and returns the sum of the numbers. 
// The numbers can be negative or non-integer. 
// If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.

//My Solution:

function sum (numbers) {
    let sum = 0;
    let result = numbers.forEach(num => {
      sum += num;
    });
    return numbers.length === 0 ? 0 : sum;
};


//Tests:
sum([]); // 0
sum([1, 5.2, 4, 0, -1]); // 9.2

//My Explanation:
//create sum variable and assign it to value of 0
//use forEach to run through every element in array, take each element and add it to sum (0) in order to find the sum of the array
//use ternary operator with condition if length of numbers array equals 0, return 0 if true, return sum of array if false