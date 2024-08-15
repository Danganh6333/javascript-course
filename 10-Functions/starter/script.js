'use strict';

///////////////////////////////////////////////////////////////////////////////////
//Default Parameters
 //create a very basic booking function

 const bookingS = []
 //the default values can contain any expression.
 const createBooking = function(flightNum,numPassengers = 1,price = 199 * numPassengers){ //This is the ES6 way

    //This is the ES5 way
    //numPassengers = numPassengers || 1
    //price = price || 119

    const booking ={ //use the enhanced object literal syntax
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookingS.push(booking)
    
 }

 createBooking('LH123')//the numPassengers and the price are set to undefined because we didn't specify
 createBooking('LH123',2,800)
 createBooking('LH123',2,800)

 createBooking('LH123',undefined,1000) // we wanted to leave the number of passengers as the default value, but then specify the price.

///////////////////////////////////////////////////////////////////////////////////
//How Passing Arguments Works: Value vs. Reference

 /**
  * In the new passport function.I'm passing in an object, and so that object here is then called person.
  * And as the function manipulates that person object,
  * of course, it also gets reflected in Jonas.
  * And then as we pass that Jonas object
  * into the checkIn function, then
  * that passport is no longer the same as the original one.
  */
 const flight = 'LH234'
 const jonas = {
    name :' Jonas Schmedtmann',
    passport : 708909090909
 }
 const checkIn = function(flightNum,passenger){
    flightNum = 'LH999'
    passenger.name = 'Mr.' + passenger.name

    if(passenger.passport === 708909090909 ){
        alert('Check in')
    }else{
        alert('Wrong passport!')
    }
 }

 checkIn(flight,jonas)
 console.log(flight);
 console.log(jonas);
 

 const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 1000000000)
 }

 newPassport(jonas) //We are manipulating the same object and it is modifying the passport
 checkIn(flight,jonas)

 /**
  *  JavaScript does not have passing by reference,
  * only passing by value,even though it looks like it's passing by reference
  * 
  * There are languages like C++, where you can pass a reference to any value,
  * instead of the value itself.This works even with primitives,
  * so you could pass a reference to the value of five,
  * and then the original value, outside of the function, would be changed.
  * And this is called pass by reference.
  * 
  * Once again, JavaScript does not have pass by reference.And I know it's confusing, because as we just learned,
  * for objects, we do in fact pass in a reference.
  * So the memory address of the object.However, that reference itself is still a value.
  * It's simply a value that contains a memory address.So basically we pass a reference to the function,
  * but we do not pass by reference,and this is an important distinction.
  */

///////////////////////////////////////////////////////////////////////////////////
//First-Class and Higher-Order Functions

 /**
  * ### Summary: First-Class and Higher-Order Functions in JavaScript

**First-Class Functions:**
- **Definition:** JavaScript has first-class functions, meaning that functions are treated as values. This concept allows functions to be stored in variables, passed as arguments, and returned from other functions.
- **Why:** Functions in JavaScript are considered objects, and since objects are values, functions are too.
- **Applications:** 
  - Storing functions in variables or object properties.
  - Passing functions as arguments to other functions (e.g., callback functions in event listeners).
  - Returning functions from other functions.

**Higher-Order Functions:**
- **Definition:** A higher-order function is one that either receives another function as an argument or returns a new function.
- **Examples:**
  - **Receiving a Function:** In an event listener, the `addEventListener` function is a higher-order function because it takes another function (e.g., `greet`) as an argument.
  - **Returning a Function:** A higher-order function can also return a new function, which is a more advanced but common technique in JavaScript.

**Key Distinction:**
- **First-Class vs. Higher-Order:** 
  - **First-Class Functions:** A concept indicating that functions are values.
  - **Higher-Order Functions:** Practical implementations that are made possible by the first-class function concept.

**Conclusion:**
- Understanding these concepts is crucial for mastering JavaScript, as first-class functions enable the use of higher-order functions, a powerful tool in the language.
  */

///////////////////////////////////////////////////////////////////////////////////
//Functions Accepting Callback Functions

 //This function here takes in one string and returns a new one without any spaces in it
 const oneWord = function(str){
    return str.replace(/ /g,'').toLowerCase()//we're going to select all these spaces
 }

 const upperFirstWord = function(str){
    const[first,...others] = str.split(' ')
    return [first.toUpperCase(),...others].join(' ')
 }

 //A high order function
 const transformer = function(str,fn){
   console.log(`Original String : ${str}`);
   console.log(`Transformed string : ${fn(str)}`);
   
   //functions have methods and even have properties. And one of them is the name property.
   console.log(`Transfromed by : ${fn.name}`);//The name of the function
   
 }
 //Using the upperFirstWord as the function to transform the string 
 transformer('Javascript is the best!' , upperFirstWord)

 transformer('Javascript is the best',oneWord) //Delegating the string transformation to the other lower level of functions

 const highFive = function(){ 
   console.log('😂');
 }

 document.body.addEventListener(`click`,highFive); //highFive is the callback function ,addEventListener is the higher order function

 ['Jonas', 'Martha', 'Adam'].forEach(highFive)//we get here these three wave because we have three elements in this array

 /**
  * Why our callback functions so much used in JavaScript and why are they so helpful?
  *  It makes it easy to split up or code into more reusable and interconnected parts.(Spliting function,..)
  * callback functions allow us to create abstraction
  */

 //abstract hide the detail of some code implementation because we don't really care about all that detail.

///////////////////////////////////////////////////////////////////////////////////
//Functions Returning Functions

 const greet = function(greeting){
   return function(name){
      console.log(`${greeting} ${name}`);
      
   }
 }

 const greeterHey = greet('Hey') //this value here now is now a function. So what this means is that we can now call this greeter function just as if it was any other function that we defined ourselves.
 greeterHey('Jonas')
 greeterHey('Steven')
 
 greet('Hello')('Jonas')//This will return Jonas

 //Try to rewrite as an arrow function
 const greetArr = greeting => name  => console.log(`${greeting} ${name}`);
   
 greetArr('Hello')('Jonas')

///////////////////////////////////////////////////////////////////////////////////
//The call and apply Methods

 const lufthansa = {
   airline : 'Lufthansa',
   iataCode : 'LH',
   booking : [],
   //Without enhanced object literal syntax
   // book:function {}

   //With enhanced object literal syntax
   book(flightNum,name){
      console.log(`${name} book a seat on ${this.airline} flight ${this.iataCode}${flightNum} `);
      this.booking.push({flight : ` ${this.iataCode}${flightNum}`,name }) //Pushing into the array
   }
 }

 lufthansa.book(239,'Jonas Schmedtmann')
 lufthansa.book(299,'John Smith')

 //After some years, the Lufthansa group created a new airlines
 const euroWings = {
  name : 'Eurowings',
  iataCode :'EW',
  booking : []
 }

 const book = lufthansa.book //Store a function into a value

 //book(23,'Sarah william') //In regular function, the this keyword points to undefined in strict mode

 //What to do when we want to book a Lufthansa flight, the this keyword point to Lufthansa but if we want to book a Eurowings flight, then the this keyword be point to Eurowings.

 //Call method
 book.call(euroWings,23,'Sarah William')
 console.log(euroWings);
 
 book.call(lufthansa,233,'Mary Cooper')
 console.log(lufthansa);

 //Apply method
 //The only difference is that apply does not receive a list of arguments after the this keyword but instead, it's gonna take an array of the arguments


 //This apply method is not that used anymore in modern JavaScript
 const flightData = [383,'George Cooper']
 book.apply(euroWings,flightData)
 console.log(euroWings);
 
 //We can do this instead
 book.call(euroWings,...flightData)

///////////////////////////////////////////////////////////////////////////////////
//The bind Method

 //Just like the call  method, bind also allows us to manually set this keywords for any function call. The difference is that bind does not immediately call the function. Instead it returns a new function where this keyword is bound.

 //bookEW is a new function with this bound to airline, so it behaves as if you were calling airline.book.
 const bookEW = book.bind(euroWings)
 const bookLH = book.bind(lufthansa)
 console.log(bookEW);
 bookEW(23,'Steven William')

 /**
  * Key Differences Between call, apply, and bind
  call and apply: These methods are used when you want to immediately invoke the function with a specific this value. The difference between them is how you pass the arguments (individually with call or as an array with apply).

  bind: This method is used when you want to create a new function with a specific this value, but you don't want to call the function immediately. The new function can be called later, and this will always refer to the value you provided to bind.
  */

  const bookEW23 = book.bind(euroWings,23)//Preset euroWings and 23 here
  //This will be set into euroWings
  bookEW23('Jonas Schmedtmann')
  bookEW23('Martha Cooper')

  //partial application means that a part of the arguments of the original function are already applied, so which means, already set.

 //With event Listeners
 lufthansa.planes = 300 //Adding new property to lufthansa and set it to 300
 lufthansa.buyPlane = function(){ //Add a new method
  this.planes++ //Add a new plane whenever we click
  console.log(this.planes);
 }
 /**
  * we learned that in an event handler function, that this keyword always points to the element on which that handler is attached to.
  * And therefore, inside of the handler function or the event listener, it doesn't really matter. 
  * But inside of this function, this keyword will point to the button element. And so that's why this keyword here returns this button
  */
 //document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane)//addEventListener here is the higher order function which receives a callback function and that should be lufthansa.buyPlane

 document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa)) //The this keyword will now point to Lufthansa

 //Partial application

 const addTax = (rate,value) => value + value * rate
 console.log(addTax(0.2,200));

 // here in Portugal, the VAT, which is value added tax, is 23% And so we can now use the bind function on this function and preset the rate always, so that it always will be this 23%.
 const addVAT = addTax.bind(null,0.23)

 console.log(addVAT(100));

 //Functions Returning Functions way
  const addTaxRate = function(rate){
    return function(value){
      return value + value * rate
    }
  }
 
  const addVAT2 = addTaxRate(0.23)//Preset the rate 
  console.log(addVAT2(100));

///////////////////////////////////////////////////////////////////////////////////
//Coding Challenge #1

 /* 
 Let's build a simple poll app!

 A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

  Here are your tasks:

  1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
  2. Call this method whenever the user clicks the "Answer poll" button.
  3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
  4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

  HINT: Use many of the tools you learned about in this and the last section 😉

  BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

  BONUS TEST DATA 1: [5, 2, 3]
  BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

  GOOD LUCK 😀
 */

  const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),
    registerNewAnswer(){
      //Create prompt
      const answer = Number( prompt(`${this.question}\n ${this.options.join('\n')}\n(Write option number)`)) //Transform array into a string
      console.log(answer);
    //Register the answer
    //Check if the value is actually a number and if the answer is below the length of the array like if the answer is 10, then that doesn't make any sense.
      typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++ // if the option is 3, increase the value AT POSITION 3 of the array by 1
      this.displayResults()
      this.displayResults('string')
    },  
    //To display the result
    displayResults(type = 'array'){ //Preset the type as an array as the default
      if(type === 'array'){//If type is 'array', display the results array using console.log()
        console.log(this.answers);
      }else if(type === 'string'){
        //Poll results are 12,2,1,121
        console.log(`Poll results are ${this.answers.join(',')}`);
        
      }
    }
  };

  document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll))//Point to the poll object

  /**
   * The bonus part of the challenge is asking you to use the displayResults method to display results from two test arrays ([5, 2, 3] and [1, 5, 3, 9, 6, 1]). These arrays are not part of the poll object, so you need to consider how to use the this keyword correctly when calling the displayResults method with these external arrays.
   */
  //[5, 2, 3]
  //[1, 5, 3, 9, 6, 1]
 poll.displayResults.call({answers : [5,2,3]},'string') //Using the call method to  manually set  the this keyword to a new object, which as the answers property has that new array
 poll.displayResults.call({answers : [1, 5, 3, 9, 6, 1]},'string')

///////////////////////////////////////////////////////////////////////////////////
//Immediately Invoked Function Expressions (IIFE)

 //Sometimes in JavaScript, we need a function that is only executed once. And then never again. So basically a function that disappears right after it's called once.
  const runOnce = function () {
    console.log('This will never run again');
  }
  runOnce();//This is not one time use because we can actually run this function again.
  runOnce()
 //We can trick  JavaScript into thinking that this is just an expression. And we do that by simply wrapping all of this into parentheses. And so now, we basically transformed the statement that we had before into an expression
 (function() { //This is called the Immediately Invoked Function Expression
  console.log('This will never run again');
 })();//Calling by adding the ()

 //Using the arrow
 (() =>  console.log('This will never run again'))()


 //Immediately Invoked Function Expressions are not that used anymore. Because if all we want is to create a new scope for data privacy. All we need to do, is to just create a block like this
 {
  const isPrivate = 23 //We create a block with const where the outside cannot accessed
  var isPrivate = 34 //This can be use outside
 } 
  
///////////////////////////////////////////////////////////////////////////////////
//Closures
  
 //This is call secureBooking because passengerCount variable cannot be manipulated and accessed from the outside.
 const secureBooking = function () {
  let passengerCount = 0

  return function(){
    passengerCount++
    console.log(`${passengerCount} passenger`);
    
  }
 }

 const booker = secureBooking()

 /**
  * ### Summary of Closure Concept:

A **closure** is a powerful feature in JavaScript that allows a function to remember and access variables from its lexical scope, even after the function that created those variables has finished executing. This means that a function can "close over" the environment in which it was created, retaining access to variables that should technically no longer be available once the function's execution context is gone.

### Explanation with Example:

Consider the following code:

```javascript
const secureBooking = function () {
  let passengerCount = 0;

  return function() {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};

const booker = secureBooking();
//booker function is able to increment the passengerCount to one, then to two and then to three.
//How can the Booker function update the passengerCount variable that's defined in the secure booking function that actually has already finished executing

that actually has already finished executing.
booker();//Log out 1 passengers
booker();//Log out 2 passengers
booker()://Log out 3 passengers
```

1. **Function Creation**: The `secureBooking` function defines a variable `passengerCount` and returns an inner function that increments and logs `passengerCount` whenever it is called.

2. **Calling the Function**: When `secureBooking` is called and assigned to `booker`, the inner function is returned and stored in `booker`.

3. **Closure in Action**: Even after `secureBooking` has finished executing and its execution context is removed from the call stack, the `booker` function still has access to `passengerCount`. This is because of the closure. The closure "remembers" the environment in which the `booker` function was created, so `booker` can still manipulate and access `passengerCount`.

### Key Points:

- **Closure Creation**: Closures are created automatically when a function is defined within another function and retains access to the parent function’s variables.
  
- **Persistent Environment**: The inner function retains access to variables from the outer function’s scope even after the outer function has completed execution.

- **No Manual Creation**: You don't manually create closures. They happen naturally in JavaScript whenever an inner function accesses variables from its outer function's scope.

- **Use Case**: Closures are widely used in JavaScript for things like data encapsulation, creating private variables, and in callback functions.

### Example Visualization:

Imagine the function is like a person carrying a backpack (closure) filled with variables. Even after the function's original environment (or home) is gone, it still carries that backpack around, allowing it to access those variables anywhere it goes.

### Final Note:

Closures are fundamental to understanding JavaScript’s behavior, especially in asynchronous programming and when working with callbacks. They allow functions to maintain access to their scope even after the context in which they were created has finished executing.
  */

///////////////////////////////////////////////////////////////////////////////////
//More Closure Examples

 let f;//Defining a empty value name f

 const g = function() {
  const a = 23;
  f = function() { //Reassign the f varriable and assign it a function value
    console.log(a * 2);
  }
 }
 g()
 f()