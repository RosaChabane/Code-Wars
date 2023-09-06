// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.


//My Solution:

function expandedForm(num) {
  num = num.toString();
  const placeValueArr = [];
  let placeVal = 1; //10

  for (let i = 1; i <= num.length; i++) {
    const digit = num[num.length - i]; // 70304
    if (digit > 0) {
        placeValueArr.unshift(digit*placeVal);
    }
    placeVal *= 10;
  }
  return placeValueArr.join( " + " );
}

//My Explanation:
//first will convert num to string (so we can loop through and access characters in num easily) and assign placeValueArr to empty array and placeVal value of 1 
//use for loop that loops through num string 
//use variable 'digit' to keep track of each character, using num[num.length-1] will grab the characters of the string starting from end of string making way to beginning of string
//if the current digit is greater than 0, then it will be multiplied with placeVal (which gets reassigned by *10 each iteration) and stored into beginning of placeValueArr
//if the current digit is not greater than zero then nothing will be done with that digit and the placeVal will still increase by *10
//when loop ends, use join to return the placeValueArr as a string and use '+' as a separator in order to return as expanded form

//Tests:
expandedForm(12); // '10 + 2'
expandedForm(42); // '40 + 2'
expandedForm(70304); // '70000 + 300 + 4'