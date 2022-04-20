/*
parentheses are uses to check a
group of characters. Examle , if 
you want to find either Penguin or pumpkin
in a string you can use :
/P(engu|umpk)in/

Then check whether thr desired string groups
are in the test string by using thr test()
method

*/


let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);

//output: true 

/* Question

Fix the regex so that it checks for 
the names of Franklin Roosevelt or 
Eleanor Roosevelt in a case sensitive
manner and it should make concessions
for middle names.
Then fix the code so that the regex that
you have created is checked against 
myString and either true or false is
returned depending on whether the regex
matches.
*/

let myString = "Eleanor Roosevelt";
let myRegex = / (Franklin|Eleanor).*Roosevelt/; // Change this line
let result = false; // Change this line

// After passing the challenge experiment with myString and see how the grouping works
let _myString = "Eleanor Roosevelt";
let _myRegex = /(Franklin|Eleanor).*Roosevelt/; // Change this line
let _result = myRegex.test(_myString); // Change this line

