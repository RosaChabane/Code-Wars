// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

//My Solution

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args);
    }
}

//My Explanation:
//use Math.min to find the smallest value in args array
//use spread operator inside Math.min (...args) to iterate through the args array and return the smallest value 
//because Math.min expects distinct variables, an array cannot be used, this in turn, is when the spread operator can be used to convert array in distinct variables



