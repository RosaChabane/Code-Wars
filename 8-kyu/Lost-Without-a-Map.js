// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//My Solution:

function maps(x){
    return x.map(el => el * 2);
}

//Tests:
maps([1, 2, 3]) // [2, 4, 6]
maps([4, 1, 1, 1, 4]) // [8, 2, 2, 2, 8]
maps([2, 2, 2, 2, 2, 2]) // [4, 4, 4, 4, 4, 4]