// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

//My Solution:

function gimme (triplet) {
    let copyNums = triplet.map((x) => x);
    let sortNums = copyNums.sort((a,b) => (a-b));
    return triplet.indexOf(sortNums[1]);
}


//My Explanation:
//first create a copy of the inputted array (triplet) using map, assign it to copyNums variable 
//use sort to sort the copied array in ascending order, in this case index[1] of the sorted array (sortNums) will always be the middle value of inputted array (triplet)
//lastly, find the indexOf the middle value inside triplet using sortNums[1]
//how indexOf is working in final line of function using inputted array example => return [2, 3, 1].indexOf(2);


//Testing:
gimme([2, 3, 1]); //expected output: 0
gimme([5, 10, 14]); //expected output: 1
gimme([2.1, 3.2, 1.4]); //expected output: 0
gimme([-5, -10, -14]); //expected output 1
gimme([-2, -3.2, 1]); //expected output 0
