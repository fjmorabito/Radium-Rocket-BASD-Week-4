//                                                If Else

/*a) Create a random number between 0 and 1 using the function Math.random(). If the value is greater or equal than 0,5, 
show an alert with a message "Greater than 0,5". If not, then show an alert with a message "Lower than 0.5"  */

var randomNumber = Math.random(0, 1);
if (randomNumber >= 0.5) {
    alert('Greater than 0,5', randomNumber);
} else {
    alert('Lower than 0,5', randomNumber);
};

