//                                                 Arrays

/* a) Given a whole year month array, show in console the month 5 and 11.*/

var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
    'Noviembre', 'Diciembre'];
var arrayForExerciseG = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
    'Noviembre', 'Diciembre'];
console.log('The result of exercise 3-a is: ', months[4], ' and ', months[10]);

/*b) Sort the array of months alphabetically and show in console.*/

months.sort();
console.log('The result of exercise 3-b is: ', months);

/*c) Add an element at the beggining and the end of the array*/

months.unshift("First Element");
months.push("Last Element");
console.log('The result of exercise 3-c is: ', months);