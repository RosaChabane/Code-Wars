// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). 
// The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.


//My Solution:

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let doubleAge = dadYearsOld - sonYearsOld * 2;
    return doubleAge < 0 ? doubleAge * -1 : doubleAge;
}


//My Explanation:
//to determine how many years ago the father was twice his son's age, the son's age * 2 can be subtracted from the father's age
//firstly, assign the difference of son'a age * 2 from dad's age to doubleAge variable 
//can simply use ternary operator with condition -> if doubleAge is less than zero (-doubleAge) ? return doubleAge * -1 (in order to return the years in a postive number)
//if doubleAge > 0, then doubleAge will be returned

//Tests:
twiceAsOld(62, 22); // 18
twiceAsOld(60, 20); // 20
twiceAsOld(47, 15); // 17