// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


//My Solution:

function positiveSum(arr) {
    const positive = arr.filter(el => el > 0);
    return positive.reduce((a, b) => a + b, 0);
}



//Tests:
positiveSum([1,2,3,4,5]); // 15
positiveSum([1,-2,3,4,5]); // 13
positiveSum([]); // 0
positiveSum([-1,-2,-3,-4,-5]); // 0
positiveSum([-1,2,3,4,-5]); // 9