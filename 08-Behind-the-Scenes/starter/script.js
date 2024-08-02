'use strict';


///////////////////////////////////////////////////////////////////////////////////
//An High-Level Overview of JavaScript


 //JavaScript is a high-level, object-oriented, multi-paradigm programming language.
 //JavaScript is a high-level, prototype-based, object-oriented, multi-paradigm, interpreted or just-in-time compiled, dynamic, single-threaded, garbage-collected programming language with first-class functions and a non-blocking event loop concurrency model.

 /**
  * High-level as you might already know, every program that runs on your computer needs some hardware resources,
  * such as memory and the CPU to do its work.Now, there are low-level languages, such as C,where you have to manually manage these resources.For example,
  * asking the computer for memory to create a new variable.On the other side,you have high-level languages such as JavaScript and Python,
  * where we do not have to manage resources at all because these languages have so-called abstractions
  * that take all of that work away from us.This makes the language easier to learn and to use, but the downside is that programs will never be as fast
  * as optimized as for example, C programs.
  * */

 /**
  * Garbage-collection,which is basically an algorithm inside the JavaScript engine,
  * which automatically removes old, unused objects from the computer memory
  * in order not to clog it up with unnecessary stuff.
  */

 /**
  * In programming, a paradigm is an approach and an overall mindset of structuring our code,
  * which will ultimately direct the coding style and technique
  * in a project that uses a certain paradigm.
  * 
  * Now, three popular paradigms are; procedural, object-oriented,
  * and functional programming.JavaScript does all of it.So it's really flexible and versatile.
  * 
  * Procedural programming organizing the code in a very linear way, and then with some functions in between.
  */

 /**
  * prototype-based
  * 
  * Almost everything in JavaScript is an object, except for primitive values such as numbers, strings, et cetera.
  * But arrays, for example, are just object.Now, have you ever wondered why we can create an array
  * and then use the push method on it.Well, it's because of prototypal inheritance.
  * Basically, we create arrays from an array blueprint,which is like a template and this is called the prototype.
  * This prototype contains all the array methods and the arrays that we create in our code
  * then inherit the methods from the blueprint so that we can use them on the arrays
  */

 /**
  * First-class functions,which simply means that functions
  * are treated just as regular variables.So, we can pass functions into other functions
  * and we can even return functions from functions.It allows for functional-programming
  * 
  * Example : overlay.addEventListener('click',closeModal) We pass the closeModal function into the addEventListener function as if it was just a regular variable
  * 
  */

 /**
  * Dynamic actually means dynamically-typed.
  * In JavaScript, we don't assign data types to variables.Instead, they only became known
  * when the JavaScript engine executes our code.Also, the type of variables can easily be changed
  * as we reassign variables.
  */

 /**
  * concurrency model is how the JavaScript engine handles multiple tasks happening at the same time.
  * 
  * We need the concurrency model because JavaScript itself runs in one single-thread, which means that it can only do one thing at a time 
  * and therefore we need a way of handling multiple things happening at the same time.
  * 
  * A thread is like a set of instructions that is executed in the computer's CPU.
  */

 /**
  * Non-blocking behavior help with long-running task in case it block the single thread where the code is running.
  * By using a so-called event loop.The event loop takes long-running tasks, executes them in the background
  * and then puts them back in the main thread once they are finished.
  */
///////////////////////////////////////////////////////////////////////////////////
//The JavaScript Engine and Runtime

 //JavaScript engine is simply a computer program that executes JavaScript code.The most well known engine is Google's V-Eight

 /**
  * Any JavaScript engine always contains a call stack and a heap.
  * The call stack is where our code is actually executed using something called execution contexts.
  * Then the heap is an unstructured memory pool which stores all the objects that our application needs.
  */

 /**
  * The difference between compilation and interpretation
  * 
  * In compilation, the entire source code is converted into machine code at once.
  * And this machine code is then written into a portable file that can be executed on any computer.
  * So first, the machine code is built and then it is executed in the CPU so in the processor.And the execution can happen way after the compilation of course.
  * For example, any application that you're using on your computer right now has been compiled before
  * and you're now executing it way after it's compilation.
  * 
  * Interpreter which runs through the source code and executes it line by line.So the code is read and executed all at the same time
  * 
  * Interpreted languages are much slower than compiled languages
  */

 /**
  * Modern JavaScript engine now use a mix between compilation and interpretation which is called just-in-time compilation.
  * 
  * This approach basically compiles the entire code into machine code at once and then executes it right away but there is no portable file to execute.And the execution happens immediately after a compilation.
  * 
  * As a piece of JavaScript code enters the engine, the first step is to parse the code. During the parsing process, the code is parsed into a data structure called the abstract syntax tree or AST.
  * This works by first splitting up each line of code into pieces that are meaningful to the language like the const or function keywords,and then saving all these pieces into the tree in a structured way.
  * This step also checks if there are any syntax errors and the resulting tree will later be used to generate the machine code.The next step is compilation which takes the generated AST and compiles it into machine code.
  * This machine code then gets executed right away
  * 
  * Javascript engines create a very unoptimized version of machine code in the beginning just so that it can start executing as fast as possible.
  * Then in the background, this code is being optimized and recompiled during the already running program execution. And after each optimization
  * the unoptimized code is simply swept for the new more optimized code without ever stopping execution
  * 
  * This process is what makes modern engines such as the V-Eight so fast
  * and all this parsing, compilation and optimization happens in some special threads inside the engine 
  * that we cannot access from our code.
  */

 /**
  * we can imagine a JavaScript runtime as a big box or a big container 
  * which includes all the things that we need in order to use JavaScript in this case, in the browser.
  * And the heart of any Javascript runtime is always a JavaScript engine
  * However the engine alone is not enough.In order to work properly,we also need access to the web APIs(Everything related to the DOM,...),
  * So essentially web APIs are functionalities provided to the engine, but which are actually not part of the JavaScript language itself.JavaScript simply gets access to these APIs through the global window object.
  * But it still makes sense that the web APIs are also part of the runtime, because again a runtime is just like a box. Next a typical JavaScript runtime
  * also includes a so called callback queue.This is a data structure that contains all the callback functions that are ready to be executed.
  * For example we attach event handler functions to DOM elements like a button to react to certain events.And these event handler functions are also called callback functions. For example we attach event handler functions to DOM elements like a button
  * to react to certain events. And these event handler functions
  * are also called callback functions
  */

 /**
  * JavaScript can exist outside of browsers, for example, in Node.js. we have multiple C ++ bindings
  * and a so called thread pool but we don't have Web API because we are not on a browser
  */

///////////////////////////////////////////////////////////////////////////////////
//Execution Contexts and The Call Stack

 /**
  * Let's start by supposing that our code was just finished compiling.So the code is now ready to be executed.
  * What happens then, is that a so-called global execution context is created for the top-level code.
  * And top-level code is basically code that is not inside any function.So again, in the beginning
  * only the code that is outside of functions will be executed.
  * 
  * Functions should only be executed when they are called.
  * One expression : const first = () => {}
  * One declaration : function second() {}
  * These will be declared, so that they can be called later.But the code inside the functions, will only be executed when the functions are called.
 */

 /**
  * Execution context denfined as an environment in which a piece of JavaScript is executed.
  * It's like a box that stores all the necessary information for some code to be executed.
  * Such as local variables or arguments passed into a function.
  * So, JavaScript code always runs inside an execution context
  * 
  * In any JavaScript project, no matter how large it is, there is only ever one global execution context.
  * It's always there as the default context, and it's where top-level code will execute.
  * 
  * Once the top-level code is finished,functions finally start to executed as well
  * 
  * For each and every function call, and you execution context will be created containing all the information that is necessary to run exactly that function.
  * And the same goes for methods, of course, because they're simply functions attached to objects remember? Anyway, all these execution contexts together,make 
  * up the call stack 
  * 
  * Now, when all functions are done executing, the engine will basically keep waiting for callback functions to arrive so that it can execute these.
  */
 
  /**
   * What is inside a varriable context 
   * The first thing that's inside any execution context is a so-called variable environment.
   * In this environment, all our variables and function declarations are stored,
   * and there is also a special arguments object.This object contains,as the name says all the arguments that were passed
   * into the function that the current execution context belongs to.So basically all the variables
   * that are somehow declared inside a function, will end up in its variable environment.
   * 
   * The second thing is the  scope chain consists of references to variables that are located outside of the current function.
   * And to keep track of the scope chain,it is stored in each execution context.Finally, each context also gets a special variable called the this keyword.
   * 
   * Now, the content of the execution context,so variable environment, scope chain and this keyword is generated in a so-called creation phase.Which happens right before execution.
   * 
   * Execution contexts belonging to arrow functions, do not get their own arguments keyword, nor do they get the this keyword. So, basically arrow functions
   * don't have the arguments object and the this keyword. Instead, they can use the arguments object,and the this keyword
   * from their closest regular function parent.
   */

  /**
   * Call stack is basically a place where execution contexts get stacked on top of each other, in order to keep track 
   * of where we are in the programs execution. So the execution context that is on top of the stack, 
   * is the one that is currently running. And when it's finished running, it will be removed from the stack, 
   * and execution will go back to the previous execution context.
   * 
   * Example : 
   * 
   * const name = 'Jonas'
   * 
   * const first = () => { //When a function is call,it gets its own execution context so that it can run the code that's inside its body and the context get puts in the call stack on top of the current context and so it's now the new current execution context.
   *  let a = 1 //This variable will of course be defined in the variable environment of the current execution context, and not in the global context
   *  const b = second(7,9) //Move to the second() function
   *  a = a + b //the previous execution context, will now be back to being the active execution context again.
   *  return a //finally this first function also returns.So the current execution context gets popped off the stack, and the previous context is now the current context where code is executed.
   *  //In this case, we're back to the global execution context and the line of code where the first function was first called.
   * }
   * 
   * //The first function stopped at this point where the second function was called
   * and will only continue as soon as this second function returns.Cause JavaScript has only one thread of execution.And so it can only do one thing at a time.
   * function second(x,y){ //So  a new execution context was created right away for this second function.And once more, it is pushed onto the call stack and becomes the new act of context.
   * var c = 2
   * return c //the function will finish its execution when we have a return statement and it basically means that the function's execution context, will be popped off the stacknd disappear from the computer's memory.
   * }
   * 
   * const x = first()
   * 
   * when the global execution context is also popped off the stack then the program is really finished
   */

///////////////////////////////////////////////////////////////////////////////////
//Scope and The Scope Chain

  //scoping controls how our program's variables are organized and accessed by the JavaScript engine.So basically scoping asks the question, where do variables live? Or where can we access a certain variable and where not?

  //Lexical scoping means that the way variables are organized and accessed is entirely controlled by the placement of functions and blocks in the programs code.For example, a function that is written inside another function has access to the variables of the parent function

  //Scope is the space or environment in which a certain variable is declared,

  //Scope of a variable is basically the entire region of our code, where a certain variable can be accessed.

  /**
   * Three different types of scope in JavaScript
   * The global scope is for top level code.So this is for variables that are declared outside of any function or block.
   * These variables will be accessible everywhere in our program, in all functions and all blocks.
   * 
   * The function scope is for variables that are declared inside  function and only accessible inside that function.This is also called a local scope opposed to the global scope.And outside of the function,the variables are then not accessible at all.
   * 
   * Starting in ES6, blocks creates scopes. And with blocks, we mean everything that is between curly braces, such as the block of an if statement or a for loop. So just like with functions, variables declared inside a block are only accessible 
   * inside that block and not outside of it.Now, the big difference is that block scopes only apply to variables declared with let or const. So if I declared a variable using var in this block,then that variable would actually still be accessible
   * outside of the block,and would be scoped to the current function or to the global scope.
   * 
   * Finally, also starting in ES6, all functions are now also block scoped, at least in strict mode
   */

   /**
    * If one scope needs to use a certain variable, but cannot find it in the current scope,
    * it will look up in the scope chain and see if it can find a variable 
    * in one of the parent scopes. If it can, it will then use that variable. 
    * And if it can't, then there will be an error. And this process is called variable lookup.
    * This does not work the other way around.So one scope can only look up in a scope chain, 
    * but it cannot look down basically
    * 
    * So again, for a variable declared with var, block scopes don't apply at all. 
    * They are functions scoped, not block scoped so it will look up for the nearest function.Also the scope chain apply to block scopes as well.
    * And therefore in or if block scope, we get access to all the variables from all its outer scopes.
    */

    /**
     * the scope chain only works upwards, not sideways by the rule of lexical scoping
     */

///////////////////////////////////////////////////////////////////////////////////
//Scoping in Practice

  function calcAge(birthYear){
    const age = 2037 - birthYear
    
    console.log(firstName); //Now as you see, this first name variable is not actually in this scope of the calcAge function. However, it is a global variable that we defined out here. And so therefore, through the scope chain, it's gonna be made available also inside of this scope.
    
    function printAge(){
      let output = `${firstName} ,You are ${age}, born in ${birthYear}`
      console.log(output);

      if(birthYear >= 1991 && birthYear <= 1996){
        var millenial = true
        const firstName = 'Steven'//JavaScript tries to look for the variable name in the current scope.And right now, it actually is in the current scope.So first name is indeed, in this same block.And so therefore, JavaScript will then use that variable and not perform any variable look up in the scope chain.
        const str = `Oh, and you're a millenial, ${firstName}`
        console.log(str);
        
        function add(a,b){
          return a + b
        }
        add(2,3)
        output = 'NEW OUTPUT'//We manipulated an existing variable here, inside of a child scope.So if we did create a new variable called output here, then we would have the same situation as before with first name.
      }
      console.log(output);
      
      console.log(millenial);//The scope of millenial is the entire printAge function
      // console.log(str);
      // console.log(add(2,3)) //If you turn off the strict mode this can be use   
    }
    printAge()
    return age
  }

  const firstName = 'Jonas'//The code in the function is only executed once it's actually called. And so that happens after the declaration of the first name variable.And so at this point in the code, the first name variable is already in the global execution variable environment.
  calcAge(1991) 

  //In the global scope, we do not have access to any variables defined in any other scope
  //console.log(age);
  //printAge()
  
///////////////////////////////////////////////////////////////////////////////////
//Variable Environment: Hoisting and The TDZ

 /*
  * hoisting make some types of variables accessible, or let's say usable in the code before they are actually declared in the code.
  * And that is actually what hoisting looks like on the surface.But behind the scenes
  * that's in fact not what happens. Instead, behind the scenes the code is basically scanned for variable declarations before it is executed.
  * So this happens during the so-called creation phase of the execution context.
  * Then for each variable that is found in the code,a new property is created in a variable environment object.
  * */
  
 /**
  * hoisting does not work the same for all variable types
  *         Hoisting in Javascript
  * *---------------------------------------------------------------------------------------------------------
  *  |                                           | HOISTED   | INITIAL VALUE         | SCOPE
  *  ---------------------------------------------------------------------------------------------------------
  *  | function declarations                     | YES       | Actual function       | Block
  *  ---------------------------------------------------------------------------------------------------------
  *  | var variables                             | YES       | undefined             | Function
  *  ---------------------------------------------------------------------------------------------------------
  *  | let or const variables                    | NO        | <uninitialized> TDZ   | Block
  *  ---------------------------------------------------------------------------------------------------------
  *  | function expressions and arrow functions  | depends if they were created using var or const or let.
  *  ---------------------------------------------------------------------------------------------------------
  * 
  * Actual declaration : We can use function declarations before they are actually declared in the code because they are stored in the variable environment object,
  * even before the code starts executing
  * 
  * Block scope is only true for strict mode in function declarations 
  * 
  * When we try to access a var variable before it's declared in a code, we don't get the declared value but we get undefined.
  * 
  * let or const variables are actually hoisted but their value is basically set to an initialized. So there is no value to work with at all.
  * And so in practice, it is as if hoisting was not happening at all.
  * Instead, we say that these variables are placed in a so-called Temporal Dead Zone or TDZ which makes it so that we can't access the variables between the beginning of the scope 
  * and the place where the variables are declared.So as a consequence,if we attempt to use a let or const variable
  * before it's declared, we get an error.
  * 
  * 
  * A function expression or arrow function created with var is hoisted to undefined.
  * But if created with let or const, it's not usable before it's declared in a code because of the Temporal Dead Zone.
  * So just like normal variables
  * 
  * 
  * The main reason that the TDZ was introduced in ES6 is that the behavior I described before makes it way easier to avoid and catch errors. Because using a variable that is set to undefined
  * before it's actually declared can cause serious bugs which might be hard to find.
  * 
  * A second and smaller reason why the TDZ exists is to make const variables actually work the way they are supposed to.
  * So as you know, we can't reassign const variables.So it will not be possible to set them to undefined first and then assign their real value later.
  * Const should never be reassigned.And so it's only assigned when execution
  * actually reaches the declaration.And that makes it impossible to use the variable before.
  */

///////////////////////////////////////////////////////////////////////////////////
//Hoisting and TDZ in Practice

 //console.log(me);//the first log result in undefined, and that's because variables declared with var are actually hoisted, but they are hoisted to the value of undefined.
 //console.log(job); //Then on the contrary we have this let variable, and so here we see that we cannot access job before initialization.the job variable is still in the temporal dead zone here at this point.
 //console.log(year);//we get the same error here for the year variable as job

 var me = 'Jonas'
 let job = 'teacher'
 const year = 1991
 
//  function hello(){
//   console.log(job);
  
//  }
//  hello() //This works


  console.log(addDecl(2,3));
  // console.log(addExpr(2,3));
  // console.log(addArrow(2,3));

  

 //Functions hoisting
 function addDecl(a,b){//we were able to call the function declaration before it was actually defined here in the code.
  return a + b
 }

 const addExpr = function(a,b){ //this function here right now is simply a const variable too. And so it means that it's now also in the temporal dead zone
  return a + b
 }

 var addArrow = (a,b) => a + b //Any variables declared with var will be hoisted and set to undefined.And now this addArrow here is essentially that, it's a variable declared with var and so right now it is undefined.
 
 console.log(numProduct);//this return undefined so don't use var to declare varriable.Use const most of the time to declare variables and let, if you really need to change the variable later.  Also in order to write clean code,you should declare your variables at the top of each scope.
 
 if(!numProduct) deleteShoppingCart() //when there is no products, we want to delete the shopping cart.

 var numProduct = 10

 function deleteShoppingCart(){
  console.log('All products delete');
  
 }

 var x = 1
 let y = 2
 const z = 3

 /**
  * Window is the global object of JavaScript in the browser.And as we type window in the browser console we can see
  * all these functions and we also get a property of x equals one.
  * And that's exactly the variable that we declared right here using the var keyword.
  * However, we cannot find y or z here anywhere in this object.
  * And that's because they were declared with let or const.
  * And so variables declared that way do not create properties on the window object.
  * */

 console.log(x === window.x);
 console.log(y === window.y);
 console.log(z === window.z);

///////////////////////////////////////////////////////////////////////////////////
//The this Keyword
 
 //This keyword or this variable is basically a special variable that is created for every execution context and therefore any function.t's one of the three components of any execution context,along with the variable environment and scope chain
 
 //the this keyword, will always take the value of the owner of the function in which, the this keyword is used.

 /**
  * this is NOT static. It depends on how the function is called, and its value is only assigned when the function is actually called
  * 
  * Method 👉 this = <Object that is calling the method>
  * 
  * Simple function call 👉 this = undefined //However, that is only valid for strict mode. So if you're not in strict mode, this will actually point to the global object,
  * which in case of the browser is the window object.
  * 
  * Arrow functions 👉 this = <this of surrounding function (lexical this)> // arrow functions do not get their own 'this keyword'. Instead, if you use 'the this variable' in an arrow function, it will simply be the this keyword of the surrounding function.
  * 
  * Event listener 👉 this = <DOM element that the handler is attached to> //he this keyword will always point to the DOM element that the handler function is attached to.  
  * 
  * this does NOT point to the function itself, and also NOT the its variable environment
  * */

///////////////////////////////////////////////////////////////////////////////////
//The this Keyword in Practice
 
 console.log(this);//the this keyword in the global scope is simply the window object.

 const calcAge1 = function(birthYear){ //Inside of just a regular function call,the disc keyword is undefined.
  console.log(2037 - birthYear);
  console.log(this);
 }

 calcAge1(1991)

 const calcAgeArrow = (birthYear) =>{ 
  console.log(2037 - birthYear);
  console.log(this);//It is window
 }

 calcAgeArrow(1991) 

 const jonas = {
  year : 1991,
  calcAge : function (){
    console.log(this); //when we  use the this keyword inside of a method call,the this keyword insight of the method will be the object that is calling the method.And in this case, that's the Jonas object.
    console.log(2037 - this.year);
  }
 }
 jonas.calcAge() //So here we wrote the calcAge method inside of the Jonas object.And so we might think that is the reason why the this keyword points to jonas.But that is not true, reason that the this keyword will point to Jonas in this case is because Jonah's was the object calling this keyword
 
 const matilda = {
  year : 2017
 }

 matilda.calcAge = jonas.calcAge //The calcAge is in Jonas but now we copied it from one object to the other, and this is called to method borrowing. So we basically borrowed here the method from one object to the other.
 matilda.calcAge() //the this keyword always points to the object that is calling the method. And so here we are calling the method on Matilda

 //taking the function out of the Jonas object.
 const f = jonas.calcAge
 //f()//The this keyword is now undefine So this happens because this function here is now just a regular function call. It is not attached to any object.There is no owner of this F function anymore here at this point.

///////////////////////////////////////////////////////////////////////////////////
//Regular Functions vs. Arrow Functions

 const jonas1 = { //This is not a code block. It is an object literal.So it's just a way that we literally define objects
  firstName : 'Jonas',
  year : 1991,
  calcAge : function (){
    console.log(this); 
    console.log(2037 - this.year);
  },
  greet : () => console.log(`Hey ${this.firstName}`) //an arrow function does not get its own this keyword.it will simply use the this keyword from its surroundings. So in other words, its parents this keyword, and the parent scope of this greet method is the global scope
 }

 jonas.greet()