// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 

//My Solution:


function squareSum(numbers){
    return numbers.map(el => el ** 2).reduce((a, b) => a + b, 0);
}

//Tests:
squareSum([1,2]); // 5
squareSum([0, 3, 4, 5]); // 50
squareSum([]); // 0