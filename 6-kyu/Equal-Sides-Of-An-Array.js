// You are going to be given an array of integers. Your job is to take that array and find an index N 
// where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. 
// If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.



//My Solution:

function findEvenIndex(arr) {
    let totalSum = 0;
    let leftSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
      totalSum += arr[i];  
    }
    
    for (let i = 0; i < arr.length; i++) {
      totalSum -= arr[i];
      if (totalSum == leftSum) {
        return i;
      }
      leftSum += arr[i];
    }

    return -1;
}
 
//My Explanation: 
//first initialize totalSum and leftSum variable to both zero
//have 2 seperate for loops that run, the first loop adds all elements in the array and reassigns totalSum total sum of array
//the second for loop will subtract an element from totalSum, it will then check if totalSum is equal to leftSum 
//if they are equal the index of the current element that has balanced the array will be returned
//if condition is not met, the current value the loop is on will be added to leftSum
//if totalSum and leftSum are never met equally, then -1 will be returned

//Tests:
findEvenIndex([1,2,3,4,3,2,1]) // 3
findEvenIndex([1,100,50,-51,1,1]) // 1
findEvenIndex([1,2,3,4,5,6]) // -1
findEvenIndex([20,10,30,10,10,15,35]) // 3


