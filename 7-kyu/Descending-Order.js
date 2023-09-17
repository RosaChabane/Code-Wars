// Your task is to make a function that can take any non-negative integer as an argument 
// and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//My Solution:

function descendingOrder(n){
    const result = n.toString().split("").sort((a,b) => b-a);
    return Number(result.join(""));
}
  
//My Explanation:
//use toString() to return string to then split into array seperated by each number
//use sort to sort the numbers highest to lowest
//use join with no seperator to create new string that concates all elements from sorted array 
//return that in Number type


//Tests:
descendingOrder(123456789); // 987654321
descendingOrder(1021); // 2110
descendingOrder(15); // 51
