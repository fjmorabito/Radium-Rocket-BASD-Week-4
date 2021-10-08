//                                                   strings

//a) Create a variable string type with at least 10 characters, and change the text into uppercase (use toUppercase).

var shopName = 'leecoopers watches';
console.log('The result of exercise 2-a is: ', shopName.toUpperCase());

//b) Create a string type variable with at least 10 characters and generate a new one with the first 5 characters from it.

var newShopName = 'efficiently sport'
var shopName5Characthers = newShopName.substring(0, 5);
console.log('The result of exercise 2-b is: ', shopName5Characthers);

//c) Create a string type variable with at least 10 characters and generate a new one with the last 3 characters from it.

var stringOf10Charts = 'Radium Rocket web developer program';
var threeChart = stringOf10Charts.substring(stringOf10Charts.length - 3, stringOf10Charts.length);
console.log('The result of exercise 2-c is: ', threeChart);

/*d) Create a string type variable with at least 10 characters and generate a new one with the first letter uppercased and the
 rest lowercased. Save the result in a new variable.*/

 var tenCharts = "manufactured by arikan"; 
 var firstUppercase = tenCharts.substring(0,1).toUpperCase() + tenCharts.substring(1 , tenCharts.length).toLowerCase();
 console.log('The result of exercise 2-d is: ', firstUppercase);