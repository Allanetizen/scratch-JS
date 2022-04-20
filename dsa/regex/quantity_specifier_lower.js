/*-----------------------------------------------------------
  You can specify the lower and upper number of patterns with 
  quantity specifiers using curly brackets. Sometimes you only
  want to specify the lower number of patterns with no upper limit.
------------------------------------------------------------------*/

// haRegex to match the word Hazzah only when it has four or more letter z's.


let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
