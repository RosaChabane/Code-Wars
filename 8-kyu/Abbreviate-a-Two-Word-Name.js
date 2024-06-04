// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

//My Solution:

function abbrevName(name){
    let test = name.split(" ");
    return test[0][0].toUpperCase() + '.' + test[1][0].toUpperCase();
}
  
//My Explanation:
//split separated between both names
//return the initials by using index of the name and index of desired letter and uppercase them

//Tests:
abbrevName("Sam Harris")// "S.H"
abbrevName("Patrick Feenan")// "P.F"
abbrevName("Evan Cole")// "E.C"
abbrevName("P Favuzzi")// "P.F"
abbrevName("David Mendieta")// "D.M"