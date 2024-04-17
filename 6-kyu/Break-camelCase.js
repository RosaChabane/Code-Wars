// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""



function solution(string) {
    let test = string.split("");
    let store = [];
    let count = 0;
    for (let i = 0; i <= test.length; i++) {
      if (i === test.length || test[i] === test[i].toUpperCase()) {
        store.push(test.slice(count, i).join(""));
        count = i;
      }
    }
    return store.join(' ');
}

solution("camelCasingTestHelp");
