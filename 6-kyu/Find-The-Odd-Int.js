// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//My Solution:

function findOdd(A) {
    const counter = {};
    A.forEach(el => {
      if (counter[el]) {
        counter[el] += 1;
      } else {
        counter[el] = 1;
      }
    });

    for (const [key, value] of Object.entries(counter)) {
        if (value % 2 !== 0)
        return Number(key);
    }
}     

//My Explanation:
//create the empty counter object 
//use forEach to loop through each element in array
//if element hasn't been counted yet, else block executes and object key is set to 1
//if element has been counted before, then counter increments by 1 
//use for of statement to loop over counter object, use Object.entries() to loop through key- value pairs
//use conditional if value doesn't divide by 2 evenly (meaning value would be odd), then return the key converted back into a number


//Tests:

findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]); // 5
findOdd([7]); // 7
findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]); // 4
findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]); // -1