// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

//My Solution

function oddOrEven(array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
       counter += array[i];
     }
    return counter % 2 === 0 ? "even" : "odd";
}

//My Explanation
//create variable counter than has assigned value of 0
//use for loop that reassigns counter to be the value of current array element (counter value will become sum of all elements in array after lopping through all elements)
//use ternary operator with condition if counter is divisible by 2 with no remainder, if true return even, if false return odd


//Tests:
oddOrEven([0, 1, 5]); // even
oddOrEven([1023, 1, 3]) // odd
oddOrEven([0, -1, -3]) // even
oddOrEven([-1023, -1, 3]) // odd