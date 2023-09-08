// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false


//My Solution:

function isIsogram(str) {
    const strArr = str.toLowerCase().split("").sort();
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === strArr[i+1]) {
            return false;
            break;
        }
    }
    return true;
}

//My Explanation:
//first convert str to all lowercase, split into array seperated by letter, then sort
//because sorted, if theres any repeating letters they will be placed side by side 
// moOse --> ['e', 'm', 'o', 'o', 's']
//use for loop to loop through this sorted array, use strArr[i] and strArr[i+1] to compare if the letters are equal to eachother
//if equal to eachother, word is not an isogram due to repeating letters, return false and break from loop
//if theres no repeating letters equal to eachother then return true


//Tests:

isIsogram("Dermatoglyphics") // true
isIsogram("moOse") // false
isIsogram("isIsogram") // false
isIsogram("isogram") // true
