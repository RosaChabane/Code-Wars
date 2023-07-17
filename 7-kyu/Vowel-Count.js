// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//My Solution:

function getCount(str) {
    let result = [];
    let splitStr = str.split("");
    for (let i = 0; i < splitStr.length; i++) {
      if (splitStr[i] === "a" || splitStr[i] === "e" || splitStr[i] === "i" || splitStr[i] === "o" || splitStr[i] === "u") {
        result.push(splitStr[i]);
      }
    }
    return result.length;
}


//My Explanation:
//create an empty array and assign that to variable result
//split the string by each letter
//run a for loop that pushes any vowel into the result array, do this by using conditonal that pushes element if element is equal to a,e,i,o,u


//Tests:
getCount("abracadabra"); // 5
getCount('o a kak ushakov lil vo kashu kakao'); // 13