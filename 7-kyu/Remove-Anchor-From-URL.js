// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"


//My Solution:

function removeUrlAnchor(url){
    if (url.includes("#")) {
      let findIndex = url.indexOf("#");
      return url.slice(0, findIndex);
    }
    return url;
}


//My Explanation: 
//first determine if the inputted URL includes '#'
//assign the indexOf '#' to the variable findIndex
//if the URL contains '#' return a sliced version of that URL by using .slice() that starts at URL[0], and ends at findIndex (the index of '#')
//if no '#' is in URL, then return orignal URL



//Tests:
removeUrlAnchor('www.codewars.com#about'); //expected output: 'www.codewars.com'
removeUrlAnchor('www.codewars.com/katas/?page=1#about'); //expeceted output: 'www.codewars.com/katas/?page=1'
removeUrlAnchor('www.codewars.com/katas/'); //expected output: 'www.codewars.com/katas/'