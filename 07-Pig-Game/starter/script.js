'use strict';

/**
 * In this dice game, two players take turns rolling a dice. 
 * The active player rolls the dice and adds the rolled number to their current round score. 
 * They can continue rolling to accumulate more points or choose to hold, adding their current 
 * round score to their total score and passing the turn to the other player. 
 * However, if a player rolls a one, their current round score is lost, and the turn immediately passes to the other player. 
 * The objective is to be the first player to reach a total score of 100 points. 
 * The game also features a reset button that clears all scores and resets the game.
 * 
 */
 
 //Selecting element
 const player0El = document.querySelector('.player--0');//El : element
 const player1El = document.querySelector('.player--1');
 //We used the hash because that is the selector for the ID and a dot that we used to use is only for classes
 const score0El = document.querySelector('#score--0');

 //Other way of selecting elements that only works by ID.
 //Because now we're not writing a selector, we are only passing in the name of the ID
 const score1El = document.getElementById('score--1');
 const current0El = document.getElementById('current--0');
 const current1El = document.getElementById('current--1');

 const diceEl = document.querySelector('.dice'); //For the dice element
 const btnNew = document.querySelector('.btn--new');
 const btnRoll = document.querySelector('.btn--roll');
 const btnHold = document.querySelector('.btn--hold');

 const scores = [0,0] //Store the scores of both players in an array.
 let currentScore = 0
 let activePlayer = 0 //Player 0 play first

 //Reset the score to 0
 score0El.textContent = 0
 score1El.textContent = 0
 diceEl.classList.add('hidden')//Adding the hidden class

 //Rolling dice functionality
 btnRoll.addEventListener('click',function(){
    // 1.Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1 //for the dice number and this variable here needs to be not a global variable because each time that we click the btnRoll , we want to generate a new number.
    console.log(dice);
    
    //2. Display Dice after it was rolled
    diceEl.classList.remove('hidden')
    
    //Change the image src base on the image name
    diceEl.src = `dice-${dice}.png`
    //3. Check for rolled to 1 : If true switch to next player
    if(dice !== 1){
     //Add dice to current score
     //Remember from the first project that we should not just store any data only in the DOM. So in this particular case, we should not only display this current score on the user interface. Instead, we also want the variable in our code, which always holds the current score of this current round.
     //Also we should not put the varriable that hold the score in the btnRoll because we will reset the score each time we roll       
     currentScore += dice
     //select the score element dynamically based on which is the active player right now
     document.getElementById(`current--${activePlayer}`).textContent = currentScore

     current0El.textContent = currentScore
    }else{
        //Switch to the next player
        document.getElementById(`current--${activePlayer}`).textContent = 0 
        //We will create a varriable that it will hold 0,if the current player is player 0 and it will hold 1,if the active player is player number 1.
        activePlayer = activePlayer === 0 ? 1 : 0
        //Set the current score back to 0 
        //For example, player 0 was playing and then we switched to player 1, but before we do that switch, we need to change the current score of player 0 back to 0.
        currentScore = 0
    } 
 })


 