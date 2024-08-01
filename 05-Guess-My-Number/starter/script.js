'use strict';

///////////////////////////////////////////////////////////////////////////////////
//  PROJECT #1: Guess My Number!

 /**
  * The goal of this project is to simply guess a secret number which is between one and 20.
  * After each guess that we fail, the score decreases by one.
  * If you want to play again, we can simply click the Again! button and it all resets everything except for the Highscore.
  * Your highscore will change based on how quick you guessed it correct
  */ 
 console.log(document.querySelector('.message').textContent); //when we have multiple . operators, they are executed from left to right.

///////////////////////////////////////////////////////////////////////////////////
// What's the DOM and DOM Manipulation

 /** 
  * DOM stands for Document Object Model, and it is a structured representation of HTML documents.
  * The DOM allows us to use JavaScript to access HTML elements and styles in order to manipulate them.
  * The DOM is automatically created by the browser as soon as the HTML page loads and it's stored in a tree structure
  * We used the terms, child element, parent element, sibling element and so on, when we talk about the DOM tree and DOM manipulation.
  * For each element in the HTML, there is one element node and the DOM tree, and we can access and interact with each of these nodes using JavaScript.
  * HTML usually has two child elements, head and body and hey are adjacent elements, and so they are siblings in our DOM
  * A Dom tree actually has more than just element nodes. It also has nodes for all the text itself, comments and other stuff, because basically the rule is that whatever is in the HTML document also has to be in the DOM.
 */

 //JavaScript is a dialect of the ECMAScript specification

 //Misconception : The DOM is not really a part of Javascript. So up until this point, we have only used the JavaScript language itself.

 //The DOM and DOM methods are  part of the web APIs.So the web API APIs are libraries that browsers implement so that we can access from our JavaScript code.
 //API stands for Application Programming Interface.

///////////////////////////////////////////////////////////////////////////////////
// Selecting and Manipulating Elements

 //  document.querySelector('.message').textContent = 'Correct Number 😒' //This will change the text content of the message class
 //  console.log(document.querySelector('.message').textContent);

 //  document.querySelector('.number').textContent = 13
 //  document.querySelector('.score').textContent = 20 

 //  console.log(document.querySelector('.guess').value);//with an input field, to get the actual value, we use the value property.
 //  document.querySelector('.guess').value = 23 //we can also use it to set a value

///////////////////////////////////////////////////////////////////////////////////
// Handling Click Events

 //An event is something that happens on the page like a mouse click or a mouse moving or many other events.

 //With an event listener, we can wait for a certain event to happen, and then react to it.

 //In order to listen for events, we first need to select the element where the event should happen.


 
 //  function(){ console.log(23);} //this is just a function value
 
 const x = function(){ 
     console.log(23); //And then we can assign that to a variable. And then we call all of this a function expression.
    }
    
    
 //Into this addEventListener method, we first need to pass in the type of the event and to we need to specify the reaction to the event by defining a function and that function is going to be called the event handler.
 //This function will not be called immediately once the script here is executed.This function will only be called as soon as the event happens. 
 //document.querySelector('.check').addEventListener('click',function(){//If a function is just a value, then we can also pass it into another function as an argument and this is just a function expression.
        //log to the console the value that is in the input field
        //const guess = Number(document.querySelector('.guess').value) //whenever we get something from the user interface like from an input field, it usually always is a string.
        //console.log(typeof guess,guess);
        // document.querySelector('.message').textContent = 'Correct Number 😒'

        //Case that there's a actually no guess which has no input value from the user
        //if(!guess){
            //If there is no value, then we can print something to the console as a response
            //Use the negation operator to then invert this Boolean from false to true.
            //document.querySelector('.message').textContent = 'Wrong choice 💣'
        //}
   // }
 //)

///////////////////////////////////////////////////////////////////////////////////
// Implementing the Game Logic

 //const secretNumber = Math.trunc(Math.random() * 20) + 1 //if you want a number between one and 19,you can multiplying this by 20 because the result of this here will never really include the number 20.It might only include like 19.999999 and now we use trunc to cutting of the decimal part so we need to plus 1
 //document.querySelector('.number').textContent = secretNumber

 //we could have also stored this score basically in the DOM.but then we would not have that value in our code. So essentially our application would have no way of knowing that score at all points.

 //let scrore = 20 //Work with a score by create a variable for the score in the code and then update that variable so basically to decrease that variable nd then display the value of that variable here in this score label.

 //document.querySelector('.check').addEventListener('click',function(){
        //const guess = Number(document.querySelector('.guess').value)
        //console.log(typeof guess,guess);
        
        //if(!guess){ //When guess is false or 0
            //document.querySelector('.message').textContent = 'Wrong choice 💣'
        //}else if(guess === secretNumber){ //When the guess is correct
            //document.querySelector('.message').textContent = 'Correct Number 😒'
        //}else if(guess > secretNumber){ //When the guess is greater than the number.
            
            //if(scrore > 1){ 
                 //document.querySelector('.message').textContent = 'Too high 🆙'
                //this score is part of the so-called application state which is basically all the data that is relevant to the application.
                //scrore--
                //document.querySelector('.score').textContent = scrore
            //}else { //when the score is actually zero, then we should get some kind of message here saying that we lost the game
                //document.querySelector('.message').textContent = 'You loss 😟'
                //document.querySelector('.score').textContent = 0
            //}

        //}else if(guess < secretNumber){ //When the guess is lesser than the number.
            //if(scrore > 1){ 
                //document.querySelector('.message').textContent = 'Too low ⬇️ '
            
                //scrore--
                //document.querySelector('.score').textContent = scrore 
            //}else {
                //document.querySelector('.message').textContent = 'You loss 😟'
                //document.querySelector('.score').textContent = 0
            //}

        //}
   //}
 //)
 


 //Define that secret number outside of the button handler because we only want that secret number to be defined once, so only when we start the application.
 //If we define the secret number inside the handler function then on each click, we would get a new secret number.

///////////////////////////////////////////////////////////////////////////////////
// Manipulating CSS Styles

    //Change the background of the entire page here to a green color. Whenever the player guesses the right number
    
    //  const secretNumber = Math.trunc(Math.random() * 20) + 1 
    //  document.querySelector('.number').textContent = secretNumber

    //  let scrore = 20

    //  document.querySelector('.check').addEventListener('click',function(){
    //     const guess = Number(document.querySelector('.guess').value)
    //     console.log(typeof guess,guess);
        
    //     // When there is no input
    //     if(!guess){
    //         document.querySelector('.message').textContent = 'Wrong choice 💣'
    //     // When player wins
    //     }else if(guess === secretNumber){ 
    //         document.querySelector('.message').textContent = 'Correct Number 😒'
    //         document.querySelector('body').style.backgroundColor = 'green' //Select the whole body of this page and the background color to green
    //         document.querySelector('.number').style.width = '30rem'//whenever we are manipulating a Style, we always need to specify a string so no number
    //     // When guess is too high
    //     }else if(guess > secretNumber){ 
            
    //         if(scrore > 1){ 
    //              document.querySelector('.message').textContent = 'Too high 🆙'
                
    //             scrore--
    //             document.querySelector('.score').textContent = scrore
    //         }else { 
    //             document.querySelector('.message').textContent = 'You loss 😟'
    //             document.querySelector('.score').textContent = 0
    //         }

    //     }else if(guess < secretNumber){ 
    //         if(scrore > 1){ 
    //             document.querySelector('.message').textContent = 'Too low ⬇️ '
            
    //             scrore--
    //             document.querySelector('.score').textContent = scrore 
    //         }else {
    //             document.querySelector('.message').textContent = 'You loss 😟'
    //             document.querySelector('.score').textContent = 0
    //         }

    //     }
    // }
    // )

///////////////////////////////////////
// Coding Challenge #1

 /* 
 Implement a game rest functionality, so that the player can make a new guess! Here is how:

 1. Select the element with the 'again' class and attach a click event handler
 2. In the handler function, restore initial values of the score and secretNumber variables
 3. Restore the initial conditions of the message, number, score and guess input field
 4. Also restore the original background color (#222) and number width (15rem)

 GOOD LUCK 😀
 */
 //  let secretNumber = Math.trunc(Math.random() * 20) + 1 


 //  let scrore = 20

 //  document.querySelector('.check').addEventListener('click',function(){
 //    const guess = Number(document.querySelector('.guess').value)
 //    console.log(typeof guess,guess);
   
 //    // When there is no input
 //    if(!guess){
 //        document.querySelector('.message').textContent = 'Wrong choice 💣'
 //    // When player wins
 //    }else if(guess === secretNumber){ 
 //        document.querySelector('.message').textContent = 'Correct Number 😒'
 //        document.querySelector('body').style.backgroundColor = 'green' //Select the whole body of this page and the background color to green
 //        document.querySelector('.number').textContent = secretNumber //Show the number when the player guess it correct
 //        document.querySelector('.number').style.width = '30rem'//whenever we are manipulating a Style, we always need to specify a string so no number
   
 //    // When guess is too high
 //    }else if(guess > secretNumber){ 
       
 //        if(scrore > 1){ 
 //             document.querySelector('.message').textContent = 'Too high 🆙'
           
 //            scrore--
 //            document.querySelector('.score').textContent = scrore
 //        }else { 
 //            document.querySelector('.message').textContent = 'You loss 😟'
 //            document.querySelector('.score').textContent = 0
 //        }

 //    }else if(guess < secretNumber){ 
 //        if(scrore > 1){ 
 //            document.querySelector('.message').textContent = 'Too low ⬇️ '
       
 //            scrore--
 //            document.querySelector('.score').textContent = scrore 
 //        }else {
 //            document.querySelector('.message').textContent = 'You loss 😟'
 //            document.querySelector('.score').textContent = 0
 //         }

 //     }
 //   }
 //  )

 //  document.querySelector('.again').addEventListener('click',function(){
 //      secretNumber = Math.trunc(Math.random() * 20) + 1 
 //      scrore = 20
 //      document.querySelector('.message').textContent = 'Start guessing...'
 //      document.querySelector('body').style.backgroundColor = '#222'
 //      document.querySelector('.number').style.width = '15rem'
 //      document.querySelector('.score').textContent = scrore
 //      document.querySelector('.number').textContent = '?'
 //      document.querySelector('.guess').value = '' 
 //  })

///////////////////////////////////////////////////////////////////////////////////
//  Implementing Highscores

    //  let secretNumber = Math.trunc(Math.random() * 20) + 1 


    //  let scrore = 20
    //  let highscore = 0

    //  document.querySelector('.check').addEventListener('click',function(){
    //   const guess = Number(document.querySelector('.guess').value)
    //   console.log(typeof guess,guess);
    
    //   // When there is no input
    //   if(!guess){
    //       document.querySelector('.message').textContent = 'Wrong choice 💣'
    //   // When player wins
    //   }else if(guess === secretNumber){ 
    //       document.querySelector('.message').textContent = 'Correct Number 😒'
    //       document.querySelector('body').style.backgroundColor = 'green' 
    //       document.querySelector('.number').textContent = secretNumber
    //       document.querySelector('.number').style.width = '30rem'

    //       if(scrore > highscore){ //if our score of the current game is greater than the highest score that we already had, well, then the highest score will become this new current score.
    //         highscore = scrore 
    //         document.querySelector('.highscore').textContent = highscore
    //       }

      

    //   // When guess is too high
    //   }else if(guess > secretNumber){ 
        
    //       if(scrore > 1){ 
    //            document.querySelector('.message').textContent = 'Too high 🆙'
            
    //           scrore--
    //           document.querySelector('.score').textContent = scrore
    //       }else { 
    //           document.querySelector('.message').textContent = 'You loss 😟'
    //           document.querySelector('.score').textContent = 0
    //       }

    //   }else if(guess < secretNumber){ 
    //       if(scrore > 1){ 
    //           document.querySelector('.message').textContent = 'Too low ⬇️ '
        
    //           scrore--
    //           document.querySelector('.score').textContent = scrore 
    //       }else {
    //           document.querySelector('.message').textContent = 'You loss 😟'
    //           document.querySelector('.score').textContent = 0
    //        }

    //    }
    //  }
    //  )

    //  document.querySelector('.again').addEventListener('click',function(){
    //     secretNumber = Math.trunc(Math.random() * 20) + 1 
    //     scrore = 20
    //     document.querySelector('.message').textContent = 'Start guessing...'
    //     document.querySelector('body').style.backgroundColor = '#222'
    //     document.querySelector('.number').style.width = '15rem'
    //     document.querySelector('.score').textContent = scrore
    //     document.querySelector('.number').textContent = '?'
    //     document.querySelector('.guess').value = '' 

    //  })

///////////////////////////////////////////////////////////////////////////////////
//Refactoring Our Code: The DRY Principle
 let secretNumber = Math.trunc(Math.random() * 20) + 1 


 let score = 20
 let highscore = 0

 const displayMessage = function(message){
    document.querySelector('.message').textContent = message
 }

 document.querySelector('.check').addEventListener('click',function(){
 
    const guess = Number(document.querySelector('.guess').value)
 
    console.log(typeof guess,guess);
 
 
 // When there is no input
 if(!guess){
     displayMessage('Wrong choice 💣')
 // When player wins
 }else if(guess === secretNumber){ 
     displayMessage('Correct Number 😒') 
     document.querySelector('body').style.backgroundColor = 'green' 
     document.querySelector('.number').textContent = secretNumber
     document.querySelector('.number').style.width = '30rem'

     if(score > highscore){ //if our score of the current game is greater than the highest score that we already had, well, then the highest score will become this new current score.
       highscore = score 
       document.querySelector('.highscore').textContent = highscore
     }

    //In these two scenarios where the guess is too high and where the guess is too low. The code is really almost the same so it violates the don't repeat yourself principle.
    //whenever we have duplicate code ,when we want to change some functionality we have to change the same code in multiple places.
    //It's no big problem to start out with duplicate code
    /**
     * Refactoring means to restructure the code but without changing how it works.
     * The first step of refactoring is to identify duplicate or almost duplicate code
     * */

    /**
     * Whenever the guess is different from the secret number then all of this code here should get executed but the only thing that's changes is the message for high and low so instead of having one big block for the case where the guess is to high and one for when the guess is too low, let's just have one blog for the situation where the guess is different.
     */
 //When the guess is wrong
   } else if(guess !== secretNumber) {
     if (score > 1) {
        // document.querySelector('.message').textContent =
        // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
        //We took this code here which is responsible for setting the message and put it into this display message function
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        // document.querySelector('.message').textContent = '💥 You lost the game!';
        displayMessage('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;
        
      }
    }
  })

 document.querySelector('.again').addEventListener('click',function(){
   secretNumber = Math.trunc(Math.random() * 20) + 1 
   score = 20
   displayMessage('Start guessing...');
   document.querySelector('body').style.backgroundColor = '#222'
   document.querySelector('.number').style.width = '15rem'
   document.querySelector('.score').textContent = score
   document.querySelector('.number').textContent = '?'
   document.querySelector('.guess').value = '' 

 })