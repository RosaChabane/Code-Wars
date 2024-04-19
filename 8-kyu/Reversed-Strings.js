// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//My Solution:

function solution(str){
    return str.split("").reverse().join("");
}

//My Explanation:
//simply split the string by letter and use reverse to reverse all the elements in split array, then use join to join all elements into string 


//Tests:
solution('world'); // 'dlrow'
solution('hello'); // 'olleh'