// Write a function that removes the spaces from the string, then return the resultant string.

// Examples:

// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

//My Solution:

function noSpace(x){
    return x.split(" ").join("");
}


//My Explanation:
//split the string into array to join that array into string that removes every empty space and return that string


//Tests:
noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'); // '8j8mBliB8gimjB8B8jlB'
noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'); // '88Bifk8hB8BB8BBBB888chl8BhBfd'
noSpace('8aaaaa dddd r     '); // '8aaaaaddddr'