/*
Search and replace
*/

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");

/*Output= The sky is blue*/


/*You can also access capture groups in the replacement string with dollar signs ($).*/

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');

/*The replace call would return the string Camp Code.*/

/*Task*/
/*
Write a regex fixRegex using three capture groups that will
search for each word in the string one two three. 
Then update the replaceText variable to replace one 
two three with the string three two one and assign
the result to the result variable. Make sure you are
utilizing capture groups in the replacement string 
using the dollar sign ($) syntax.
*/

/*Solution*/

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);