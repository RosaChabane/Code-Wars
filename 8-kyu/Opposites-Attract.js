// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

//My Solution:

function lovefunc(flower1, flower2){
    return (flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0 ) ? true : false;
}


//My Explanation:
//Use ternary operator with condition that checks for even and odd numbers by using remainders to return true or false


//Tests:
lovefunc(1,4); // true
lovefunc(2,2); // false
lovefunc(0,1); // true
lovefunc(0,0); // false