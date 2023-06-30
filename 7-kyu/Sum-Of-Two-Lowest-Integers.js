// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.


//My Solution:

function sumTwoSmallestNumbers(numbers) {  
    const sortNums = numbers.sort((a,b) => (a-b));
    return sortNums[0] + sortNums[1];
}
  

//My Explanation:
//first sort the array of numbers in ascending order and assign it to the variable sortNums
//in order to find the sum of the 2 lowest numbers, add sortNums[0] (the index of lowest number) and sortNums[1] (the index of second lowest number) and return their sum


//Tests:
sumTwoSmallestNumbers([5, 8, 12, 19, 22]); //expected output: 13
sumTwoSmallestNumbers([15, 28, 4, 2, 43]); //expected output: 6
sumTwoSmallestNumbers([3, 87, 45, 12, 7]); //expected output: 10
sumTwoSmallestNumbers([23, 71, 33, 82, 1]); //expected output: 24
sumTwoSmallestNumbers([52, 76, 14, 12, 4]); //expected output: 16