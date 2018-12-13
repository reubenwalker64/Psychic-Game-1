/* The Psycic game
Guess what letter I'm thinking of
Wins: (# of times the user has guessed the letter correctly)
Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
Guesses left: (# of guesses left. This will update)
Your Guesses so far: (the specific letters that the user typed. Display these until the user either wins or loses.)
Note: When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
Note: When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).
*/

//CAPS INDICATE CODE THAT NEED TO BE ADDED OR FIXED

// GUESS WHAT LETTER - Varible or array listing alphabet

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var arrayLength = alphabet.length;

console.log(alphabet.length);

// Creating variables to hold the number of wins, losses, guesses left, and guess so far. They start at 0.

var wins = 0;
var losses = 0;
var guessesLeft = 0;
var guessesSoFar = 0;

// Create variables that hold references to the places in the HTML where we want to display things.
        var wins = document.getElementById("wins");
        var losses = document.getElementById("losses");
        var guessesLeft = document.getElementById("guessesLeft");
        var guessesSoFar = document.getElementById("guessesSoFar");

// select random letter via for loop and randomMath function ???

/* for (var aphabet = 0; j < arrayLength; alphabet++) {

	// Randomly chooses a choice from the options array. This is the Computer's guess. EDIT BELOW

	  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

}  OR
*/
function makeid(l)
{
var text = "";
var computerGuess = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for(var i=0; i < l; i++ )
{
text += computerGuess.charAt(Math.floor(Math.random() * computerGuess.length));
}
return text;
}
console.log(makeid(1));

/* function to convert to lowercase?

var RANDOMMATHLower = RANDOMMATHGUESS.toLowerCase();

*/

// This function is run whenever the user presses a key.
        document.onkeyup = function(event) {

          // Determines which key was pressed.
          var userGuess = event.key;

// Created a prompt to get the user's quess.
        var userGuess = prompt("Which UPPERCASE letter am I thinking of?");



      }

/* if user selects matching letter assign a win to wins id (do while loop?), then reset game with initialize function

if (alphabet.indexOf(userGuess) == computerGuess) {
          ASSIGN A WIN;
        }
*/
//or

/* This logic determines the outcome of the game (wins/losses), and increments the appropriate number
         if ((userGuess === "computerGuess")

           if ((userGuess === "0" && computerGuess === "0") {
             wins++;

           }

//             INITIALIZE HERE with do/while loop? Edit sample below

          function functionName(a){
          var len = a.length, i=0;
          if (len == 0)
          SOMETHING other than console.log("Empty Array");
        }

           else {
             losses++;
           }


//or

/* The Do/While Loop USE THIS???
The do/while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

Syntax

do {
  code block to be executed
}
while (condition);
Example
The example below uses a do/while loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:

Example
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);

Do not forget to increase the variable used in the condition, otherwise the loop will never end!
*/

/* EDIT TO RESET array

var arr = [1, 2, 3, 4, 5];

for (var i = arr.length; i > 0; i--) {

 arr.pop();

}

console.log(arr); //[]
*/

/* else subtract one from guesses left id length,

else {
          SUBTRACT(#guessesLeft LENGTH)
        }
*/

// print the letter the user selected with document.write?

/* Display the user guesses so far.
            userGuessesSoFar.textContent = "The letters " + userGuess;
*/

// when guess left in guesses left id length equal zero (do while loop?) assign a loss (wins and losses conditions), and reset game with initialize function

/* EDIT TO RESET array

var arr = [1, 2, 3, 4, 5];

for (var i = arr.length; i > 0; i--) {

 arr.pop();

}

console.log(arr); //[]
*/
