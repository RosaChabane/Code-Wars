// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

// My Solution:

function findNeedle(haystack) {
    const needle = haystack.findIndex(el => el === "needle");
    return `found the needle at position ${needle}`;
}

//My Explanation:
//Use findIndex that returns the index of element that equals "needle" in haystack array, hold this index inside of needle variable 
//Return "found the needle position (index)" using template literal  


//Tests:
findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]) // 'found the needle at position 3')
findNeedle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']); // 'found the needle at position 5' 
