// The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters.

//   3. Here's how the app works:

//     * There will be four crystals displayed as buttons on the page.

//     ------------* The player will be shown a random number at the start of the game.

//     * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

//       * Your game will hide this amount until the player clicks a crystal.
//       * When they do click one, update the player's score counter.

//     * The player wins if their total score matches the random number from the beginning of the game.

//     * The player loses if their score goes above the random number.

//     * The game restarts whenever the player wins or loses.

//       * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//     * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.


// ##### Option 1 Game design notes

//   * The random number shown at the start of the game should be between 19 - 120.

//   * Each crystal should have a random hidden value between 1 - 12.


// -------------------------------------------------------------------------------------------




//**MY NOTES**

// * The player will be shown a random number at the start of the game.
    // -The random number will be displayed on the page at the start of the game and it will be 
    //  the total that user will aim to equal.
// * The random number shown at the start of the game should be between 19 - 120. 

        //generates random numbers for each crystal when pages loads

  var crystal1 = Math.floor(Math.random()*11+1);
  var crystal2 = Math.floor(Math.random()*11+1);
  var crystal3 = Math.floor(Math.random()*11+1);
  var crystal4 = Math.floor(Math.random()*11+1);

  console.log(crystal1); 

// setting global variables for counters

var wins = 0;
var losses = 0;
var userScore = 0;


// this functiion is what is immediately loaded on the page when it loads or resets.  

$(document).ready(function(){

  var matchingNum = Math.floor(Math.random()*101+19);

  // console.log(matchingNum); 

//Add the randomly generated numbers as text to the span tag id 'random-number',
//and add the randomly generated numbers as text to the button tag id 'crystal-box-1'
//and repeat through until all 4 crystals are updated.   


  $('#random-number').text(matchingNum);

  $('#crystal-box-1').text(crystal1);
  $('#crystal-box-2').text(crystal2);
  $('#crystal-box-3').text(crystal3);
  $('#crystal-box-4').text(crystal4);

})

 // * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
//   * Each crystal should have a random hidden value between 1 - 12.


  $('#crystal-box-1').on ('click', function(){
    var userScore = userScore + crystal1;
     console.log(userScore);

  })

// add the userScore value as text to span id tag of '#totalUserScore'

// add if, else statements to compare values

// repeat for all for buttons 
  //eg. $('#crystal-box-2').on ('click', function(){