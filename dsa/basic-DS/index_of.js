/*
a function, quickCheck, that takes an array and 
an element as arguments. Modify the function using 
indexOf() so that t returns true if the passed element 
exists on the array, and false if it does not.
*/

function quickCheck(arr, elem) {
  // Only change code below this line
  if (arr.indexOf(elem) >= 0) {
    return true;
  } else {
    return false;
  }

  // Only change code above this line
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

/*
Alternative solutions
*/
//[0]

function quickCheck(arr, elem) {
    return arr.indexOf(elem) >= 0 ? true : false;
  }
  console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

//[2]

function quickCheck(arr, elem) {
    return arr.indexOf(elem) != -1;
  }
  console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
