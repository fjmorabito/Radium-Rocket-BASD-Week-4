//                                                  For

/*a)  Create an array that contain five words and go over the array using a loop for of JavaScript to show an alert using
each words.*/

var fiveWordsArray = ['My', 'name', 'is', 'Federico', 'Morabito'];
for (counter = 0; counter < fiveWordsArray.length; counter++) {
    alert(fiveWordsArray[counter]);
};

/*b) To the previous array, convert the first letter of each word to uppercase and show an alert for each modified word. */

for (counter = 0; counter < fiveWordsArray.length; counter++) {
    alert(fiveWordsArray[counter].substring(0, 1).toUpperCase() + fiveWordsArray[counter].substring(1));
};

/*part c) Create a variable called "sentence" that has an empty string, then to the array from point a) go through it with 
a "for" loop to save each word within the sentence variable. At the end show a single alert with the complete chain.*/

var emptySentence = '';
for (counter = 0; counter <= fiveWordsArray.length - 1; counter++) {
    emptySentence += (fiveWordsArray[counter]);
};
alert(emptySentence);