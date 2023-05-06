// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

//My solution:

function multiplyArray(arr) {
    let product = 1;
	for (let i = 0; i < arr.length; i++) {
		product *= arr[i];
	}
    return product;
}

console.log(multiplyArray([1, 2, 3, 4]));
// expected output: 24

console.log(multiplyArray([2, 22, 4, 6]));
// expected output : 1056