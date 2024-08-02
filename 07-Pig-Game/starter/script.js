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
 
 //  //Selecting element
 //  const player0El = document.querySelector('.player--0');//El : element
 //  const player1El = document.querySelector('.player--1');
 //  //We used the hash because that is the selector for the ID and a dot that we used to use is only for classes
 //  const score0El = document.querySelector('#score--0');

 //  //Other way of selecting elements that only works by ID.
 //  //Because now we're not writing a selector, we are only passing in the name of the ID
 //  const score1El = document.getElementById('score--1');
 //  const current0El = document.getElementById('current--0');
 //  const current1El = document.getElementById('current--1');

 //  const diceEl = document.querySelector('.dice'); //For the dice element
 //  const btnNew = document.querySelector('.btn--new');
 //  const btnRoll = document.querySelector('.btn--roll');
 //  const btnHold = document.querySelector('.btn--hold');

 //  const scores = [0,0] //Store the scores of both players in an array.
 //  let currentScore = 0
 //  let activePlayer = 0 //Player 0 play first

 //  //Reset the score to 0
 //  score0El.textContent = 0
 //  score1El.textContent = 0
 //  diceEl.classList.add('hidden')//Adding the hidden class

 //  //Rolling dice functionality
 //  btnRoll.addEventListener('click',function(){
 //     // 1.Generating a random dice roll
 //     const dice = Math.trunc(Math.random() * 6) + 1 //for the dice number and this variable here needs to be not a global variable because each time that we click the btnRoll , we want to generate a new number.
 //     console.log(dice);
    
 //     //2. Display Dice after it was rolled
 //     diceEl.classList.remove('hidden')
    
 //     //Change the image src base on the image name
 //     diceEl.src = `dice-${dice}.png`
 //     //3. Check for rolled to 1 : If true switch to next player
 //     if(dice !== 1){
 //      //Add dice to current score
 //      //Remember from the first project that we should not just store any data only in the DOM. So in this particular case, we should not only display this current score on the user interface. Instead, we also want the variable in our code, which always holds the current score of this current round.
 //      //Also we should not put the varriable that hold the score in the btnRoll because we will reset the score each time we roll       
 //      currentScore += dice
 //      //select the score element dynamically based on which is the active player right now
 //      document.getElementById(`current--${activePlayer}`).textContent = currentScore

 //      current0El.textContent = currentScore
 //     }else{
 //         //Switch to the next player
 //         document.getElementById(`current--${activePlayer}`).textContent = 0 
 //         //We will create a varriable that it will hold 0,if the current player is player 0 and it will hold 1,if the active player is player number 1.
 //         activePlayer = activePlayer === 0 ? 1 : 0
 //         //Set the current score back to 0 
 //         //For example, player 0 was playing and then we switched to player 1, but before we do that switch, we need to change the current score of player 0 back to 0.
 //         currentScore = 0

 //         //the player that is active has this whole section here with the player--active class.But then as we switch to the other player, we want to remove that class from there and basically put it here on the other player.
 //         player0El.classList.toggle('player--active') //toggle will add the class if it is not there and if it is there, it will remove it so this will ensure that it's only ever on one of the elements at once
 //         player1El.classList.toggle('player--active')
 //     } 
 //  })

///////////////////////////////////////////////////////////////////////////////////
//Holding Current Score

 //The switching of player only happens when the score is still below 100, because when the score is at least 100, the current player wins.

 //  const player0El = document.querySelector('.player--0');
 //  const player1El = document.querySelector('.player--1');
 
 //  const score0El = document.querySelector('#score--0');

 
 //  const score1El = document.getElementById('score--1');
 //  const current0El = document.getElementById('current--0');
 //  const current1El = document.getElementById('current--1');

 //  const diceEl = document.querySelector('.dice'); 
 //  const btnNew = document.querySelector('.btn--new');
 //  const btnRoll = document.querySelector('.btn--roll');
 //  const btnHold = document.querySelector('.btn--hold');

 //  const scores = [0,0] 
 //  let currentScore = 0
 //  let activePlayer = 0 
 //  //create a variable that hosts the state of the game, which tells us the condition of a system in this case the condition will be is the game playing or not? And so if the game is playing, then we can click these buttons and then everything will work as normally.But then as soon as the game is finished,we will say that the game is no longer playing and then we can no longer click on these buttons.
 //  let playing =  true

 //  score0El.textContent = 0
 //  score1El.textContent = 0
 //  diceEl.classList.remove('hidden')

 // const switchPlayer = function(){
 //    document.getElementById(`current--${activePlayer}`).textContent = 0 
 //    activePlayer = activePlayer === 0 ? 1 : 0
 //    currentScore = 0
 //    player0El.classList.toggle('player--active') 
 //    player1El.classList.toggle('player--active')
 //  } 
 
 //  btnRoll.addEventListener('click',function(){
 //    //The btnRoll should only be active when we are playing
 //    if(playing){
 //       const dice = Math.trunc(Math.random() * 6) + 1 
 //       console.log(dice);
 //      diceEl.classList.remove('hidden')
 //      diceEl.src = `dice-${dice}.png`
 //      if(dice !== 1){
 //       currentScore += dice
 //       document.getElementById(`current--${activePlayer}`).textContent = currentScore
 //      }else{
 //        switchPlayer()
 //     } 
 //    }
    
 //  })

 

 //  btnHold.addEventListener('click',function(){
 //     if(playing){
 //       //1.Add current score to active player's score
 //     scores[activePlayer] += currentScore //when it's player one, then this will be scores one, but when player is zero, then it will be scores zero.And then we take that value and add the current score to it and assign it again to scores at the current active player.
 //     console.log(scores[activePlayer]);
 //     document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

 //     //2.Check if player's score is >= 100 then the player has won
 //     if(scores[activePlayer] >= 10){
 //       //Finish the game
 //       playing = false
 //       diceEl.classList.add('hidden')
 //       document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
 //       //Also we want to remove the active player class because otherwise we will have the active player class at the same time as the player winner class.
 //       document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
 //     }else{
 //    //Switch to the next player
 //     switchPlayer()
 //     }
 //     }
 //  })

///////////////////////////////////////////////////////////////////////////////////
//Resetting the Game

 const player0El = document.querySelector('.player--0');
 const player1El = document.querySelector('.player--1');
 
 const score0El = document.querySelector('#score--0');

 
 const score1El = document.getElementById('score--1');
 const current0El = document.getElementById('current--0');
 const current1El = document.getElementById('current--1');

 const diceEl = document.querySelector('.dice'); 
 const btnNew = document.querySelector('.btn--new');
 const btnRoll = document.querySelector('.btn--roll');
 const btnHold = document.querySelector('.btn--hold');

 diceEl.classList.remove('hidden')
 
 let scores,currentScore,activePlayer,playing //define a bunch of empty variables by using commas

 //Starting condition
 const init = function(){ 
   //We want to use this in two situations.Whenever we load the page for the very first time or also when btnNew is clicked that we were just working on
   scores = [0,0] 
   currentScore = 0
   activePlayer = 0 
   playing =  true

   score0El.textContent = 0
   score1El.textContent = 0
   current0El.textContent = 0
   current1El.textContent = 0
   player0El.classList.remove('player--winner')
   player1El.classList.remove('player--winner')
   player0El.classList.add('player--active')
   //player zero should be the active player in the beginning.And so there's no need of removing it and then adding it back.So if the class is not there,but we are still telling JavaScript to remove it, it will not give us an error.It will simply do nothing.And if we add a class that's already there,it will not add a second one.
   player1El.classList.remove('player--active')
   
   diceEl.classList.remove('hidden')
 }

 init()//as we now load the script, JavaScript will find this function definition, and then it will find this line of code which runs the function

 const switchPlayer = function(){
   document.getElementById(`current--${activePlayer}`).textContent = 0 
   activePlayer = activePlayer === 0 ? 1 : 0
   currentScore = 0
   player0El.classList.toggle('player--active') 
   player1El.classList.toggle('player--active')
 } 
 
 btnRoll.addEventListener('click',function(){
   if(playing){
      const dice = Math.trunc(Math.random() * 6) + 1 
      console.log(dice);
      diceEl.classList.remove('hidden')
      diceEl.src = `dice-${dice}.png`
      if(dice !== 1){
         currentScore += dice
         document.getElementById(`current--${activePlayer}`).textContent = currentScore
     }else{
       switchPlayer()
    } 
   }
 })

 btnHold.addEventListener('click',function(){
    if(playing){
      scores[activePlayer] += currentScore 
      console.log(scores[activePlayer]);
      document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
      if(scores[activePlayer] >= 100){
         playing = false
         diceEl.classList.add('hidden')
         document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
         document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
      }else{
         switchPlayer()
     }
    }
 })
 
 btnNew.addEventListener('click',init)