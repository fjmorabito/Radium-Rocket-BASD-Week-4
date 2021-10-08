//                                                Functions

/*a) Create a sum function that receives two numeric values ​​and returns the result. Execute the function and save the 
result in a variable, showing the value of said variable in the browser console.*/

function sum(a, b) {
    return a + b;
}
var resultSum = sum(80, 150);
console.log('The result of exercise 6-a is: ', resultSum);

/*b) To the previous sum function, add a validation to control if any of the parameters is not a number, show an alert 
clarifying that one of the parameters has an error and return the NaN value as a result.*/

function validateAndSum(a, b) {
    if (typeof a !== 'number') {
        alert('The result of exercise 6-b is: the a variable is not a number');
        return NaN;
    } else if (typeof b !== 'number') {
        alert('The result of exercise 6-b is: the b variable is not a number');
        return NaN;
    }
    else {
        return a + b;
    }
}
var resultAlteredSum = sum(5, 4);
console.log('The result of exercise 6-b is:', resultAlteredSum);

/*c) Create a validate integer function that takes a number as a parameter and returns true if it is an integer.*/

function validateInteger(number) {
    if (typeof number !== 'number') {
        console.log('The result of exercise 6-c is: the parameter is not a number');
        return;
    } else if (number % 1 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(validateInteger(8.6));

