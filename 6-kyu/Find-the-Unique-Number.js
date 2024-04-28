// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// My Solution:

function findUniq(arr) {
    let sample = arr[0];
    let result1 = arr.filter(el => el === sample);
    let result2 = arr.filter(el => el != sample);
    return result1.length > result2.length ? Number(result2) : Number(result1); 
}


//My Explanation:
//First create a sample that takes the first element of array
//Create 2 arrays using filter, one will have all the non unique elements and the other will have just one unique element
//Knowing that the unique array will have only one element, can then use ternary operator that returns the array that has lowest length as a Number


//Tests:

findUniq([ 0, 1, 0 ]); // 1
findUniq([ 0, 0, 1 ]); // 1
findUniq([ 1, 1, 1, 2, 1, 1 ]); // 2
findUniq([ 1, 1, 2, 1, 1 ]); // 2
findUniq([ 3, 10, 3, 3, 3 ]); // 10