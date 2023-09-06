// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  
}

// THOUGHT PROCESS:
//can possibly grab every 3 digits of num then % 10
//if first 3 digits starting at num.length-1 does not have num ending in 0, then take 
//off that last digit and isolate it
//ex: 310 % 10 = 31, take 1 off and replace with 0, = 30 + 1\

//OR could use toString and split into array, and maybe use .length to determine the 
//value of num
//and have seperate loop that starts at -1+1 of arr and each loop adds '1' + '0' = 10
//next loop after '10' + '0' = '100'