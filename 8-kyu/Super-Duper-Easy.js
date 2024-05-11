// Make a function that returns the value multiplied by 50 and increased by 6. 
// If the value entered is a string it should return "Error".

//My Solution:

function problem(x){
    return x === Number(x) ? x * 50 + 6 : "Error";
}


//Tests:
problem(1); // 56
problem(5); // 256
problem("RyanIsCool"); // "Error"