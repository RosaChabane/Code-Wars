// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

//My Solution:
function take(arr, n) {
    return arr.slice(0, n);
}

//Tests:
take([0, 1, 2, 3, 5, 8, 13], 3); // [0, 1, 2], "should return the first 3 items"