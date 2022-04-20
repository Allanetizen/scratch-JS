
/*=====Note=====*/ 
/*

You can specify the lower and upper number of
 patterns with quantity specifiers.
 Quantity specifiers are used with 
 curly brackets ({ and }). 
 You put two numbers between the curly brackets
 - for the lower and upper number of patterns.

*/
//example
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);

//solution
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);
