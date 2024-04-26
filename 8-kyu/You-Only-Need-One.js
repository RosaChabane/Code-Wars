// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// My Solution:

function check(a, x) {
    return a.filter(letter => letter == x).length > 0 ? true : false;
}

//My Explanation:
//Use filter that searches array for matching value of 'x'
//Use ternary operator that returns true if filtered array length is over zero (meaning 'x' was found), if not return false


//Tests:

check([101, 45, 75, 105, 99, 107], 107); // true
check(['t', 'e', 's', 't'], 'e'); // true
check(['what', 'a', 'great', 'kata'], 'kat'); // false