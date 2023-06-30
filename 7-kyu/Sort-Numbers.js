// Finish the solution so that it sorts the passed in array of numbers. 
//If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

//My Solution:
function solution(nums){
    return nums !== null ? nums.sort((a,b) => (a-b)) : [];
}

//My Explanation:
//simply use ternary operator syntax with a condition that checks if argument is not null
//if argument not null, returns sorted array in ascending order
//if argument is null, then empty array is returned



//Tests:
solution([1,2,3,10,5]) // [1,2,3,5,10]
solution(null) // []
solution([]) // []
solution([20, 2, 10]) // [2,10,20]
solution([2, 20, 10]) // [2,10,20]