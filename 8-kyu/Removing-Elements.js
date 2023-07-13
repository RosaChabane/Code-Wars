// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

//My Solution:
function removeEveryOther(arr){
    return arr.filter((el, i) => i % 2 === 0);
}

//My Explanation:
//use filter to create new array that has parameters of element (e) and index (i)
//if the index of current element is divisble by 2 with no remainder, return that element 

//Tests:
removeEveryOther(['Hello', 'Goodbye', 'Hello Again']); // ['Hello', 'Hello Again']
removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [1, 3, 5, 7, 9]
