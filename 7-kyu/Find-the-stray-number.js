// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3


//My Solution:

function stray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      const a = numbers[i];
      const b = numbers[i+1];
      const c = numbers[i+2];
      
      if (a != b && a != c) {
        return a;
      } else if (b != a && b != c) {
        return b;
      } else if (c != a && c != b) {
        return c;
      }
    }
}

// My Explanation:
// Use for loop and compare in sets of 3 to find stay number that doesnt equal all the others

//Tests:
stray([1, 1, 2]) // 2
stray([1, 2, 1]) // 2
stray([2, 1, 1]) // 2
stray([17, 17, 3, 17, 17, 17, 17]) // 3