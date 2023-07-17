// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//My Solution:

function sumMix(x){
    let counter = 0;
    let result = x.map(Number);
    result.forEach(el => counter += el);
    return counter
}

//My Explanation:
//create counter variable and assign value of 0
//use map to create new array that converts every element to number, assign it to variable result 
//use forEach to loop through every array element in result and reassign counter to current element (will give us the sum of all values in array)


//Tests:
sumMix([9, 3, '7', '3']); // 22
sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]); // 42
sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']); // 41