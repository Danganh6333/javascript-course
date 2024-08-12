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
  *
  * ### Summary: The JavaScript Engine and Runtime

 **JavaScript Engine:**
  - **Definition:** A JavaScript engine is a computer program that executes JavaScript code. It typically consists of two main components:
  - **Call Stack:** Where the code is executed using execution contexts.
  - **Heap:** An unstructured memory pool where objects are stored.

- **Compilation vs. Interpretation:**
  - **Compilation:** Converts the entire source code into machine code at once, creating a portable file that can be executed later.
  - **Interpretation:** Runs through the source code and executes it line by line, converting it to machine code just before execution.
  - **JavaScript’s Approach:** Modern JavaScript engines use Just-In-Time (JIT) compilation, a mix of both compilation and interpretation. The code is compiled into machine code and executed immediately, allowing for faster performance.

- **Optimization:** JavaScript engines create an unoptimized version of machine code initially to start execution quickly. This code is then optimized and recompiled in the background, with the optimized code replacing the unoptimized one without stopping execution.

**JavaScript Runtime:**
- **Definition:** A JavaScript runtime is a container that includes everything needed to execute JavaScript. The browser is a common runtime.
  - **Components of a JavaScript Runtime:**
    - **JavaScript Engine:** Executes the code.
    - **Web APIs:** Additional functionalities provided by the browser (e.g., DOM manipulation, timers) that are not part of the JavaScript language itself.
    - **Callback Queue:** Holds callback functions that are ready to be executed, such as event handlers.
    - **Event Loop:** Takes functions from the callback queue and places them in the call stack for execution, enabling JavaScript’s non-blocking concurrency model.

- **JavaScript Outside the Browser:**
  - **Node.js Runtime:** Similar to the browser runtime but without web APIs, as it operates outside of the browser. Instead, it uses C++ bindings and a thread pool to manage tasks.

**Conclusion:**
- Understanding the JavaScript engine and runtime is essential for grasping how JavaScript code is executed. The combination of the engine’s just-in-time compilation and the runtime’s structure enables efficient, non-blocking execution of JavaScript in both the browser and other environments like Node.js.
  */

///////////////////////////////////////////////////////////////////////////////////
//Execution Contexts and The Call Stack

 /**
  *Sure! Here's a summary of the video on Execution Contexts and the Call Stack:

### **Execution Contexts**
- **Global Execution Context:** Created when the code is ready to be executed, specifically for top-level code (code not inside any function). Only one global execution context exists.
- **Function Execution Contexts:** Created whenever a function is called, containing all necessary information (e.g., local variables, arguments) to execute that function.

### **Contents of Execution Contexts**
- **Variable Environment:** Stores variables and function declarations, and includes a special `arguments` object for functions.
- **Scope Chain:** Allows functions to access variables outside of their scope.
- **This Keyword:** A special variable available in execution contexts, with specific rules for arrow functions.

### **Execution Phases**
- **Creation Phase:** Before execution, the execution context is created, containing the variable environment, scope chain, and `this` keyword.
- **Execution Phase:** The actual execution of the code takes place.

### **The Call Stack**
- **Stacking Execution Contexts:** As functions are called, their execution contexts are pushed onto the call stack, with the most recent context at the top.
- **Managing Execution Order:** The call stack ensures that JavaScript knows which function to return to after completing the current one.
- **Single Thread:** JavaScript runs on a single thread, meaning only one execution context can be active at a time.

### **Call Stack Example**
- **Global Context:** Executed first, pushing the global execution context onto the stack.
- **Function Calls:** When a function is called, a new execution context is created and pushed onto the stack, pausing the previous context.
- **Return Values:** Once a function completes, its context is popped off the stack, returning control to the previous context.

### **Conclusion**
- **Execution in the Call Stack:** JavaScript code runs inside execution contexts that are managed by the call stack, ensuring that the order of execution is maintained.
  
This video provides a deep dive into how JavaScript code is executed, focusing on the creation and management of execution contexts and the call stack's role in controlling the flow of execution.
   */

///////////////////////////////////////////////////////////////////////////////////
//Scope and The Scope Chain

  /**
   * 
   * 

1. **Scoping Definition**: Scoping determines where variables are accessible within the code. It asks the question: "Where do variables live?" or "Where can we access a certain variable?"

2. **Types of Scope**:
   - **Global Scope**: Variables declared outside of any function or block. These are accessible everywhere in the code.
   - **Function Scope**: Each function creates its own scope, containing variables declared within it. Variables in a function scope are only accessible within that function.
   - **Block Scope (ES6)**: Blocks, like those within `if` statements or loops, also create their own scope. This applies to variables declared with `let` and `const`, but not `var`.

3. **Lexical Scoping**: In JavaScript, scoping is controlled by where functions and blocks are written in the code. Functions written inside other functions have access to the outer function's variables.

4. **Scope Chain**:
   - Each scope has access to its own variables and all variables from its outer (parent) scopes.
   - When a variable is not found in the current scope, the JavaScript engine looks up in the scope chain to find it. This is known as "variable lookup."
   - The scope chain only works upwards (from child to parent scope) and does not provide access from a parent scope to a child scope.

5. **Scope Chain vs. Call Stack**:
   - The scope chain is related to where functions are written in the code (lexical scoping) and is unaffected by the order in which functions are called.
   - The call stack, on the other hand, is based on the order of function calls during execution.

6. **Important Points**:
   - Variables declared with `let` and `const` are block-scoped, while `var` is function-scoped.
   - The scope chain only allows access to variables from outer scopes, not from sibling or inner scopes.
   - The scope chain and the call stack are different but related concepts.

The video emphasizes understanding these concepts to effectively work with JavaScript and how it handles variable accessibility.} birthYear 
   * @returns 
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

 /**
  * Certainly! Here's a summary of the video on Variable Environment: Hoisting and the Temporal Dead Zone (TDZ) in JavaScript:

### Key Concepts:
1. **Execution Context:**
   - Consists of the variable environment, the scope chain, and the `this` keyword.
   - Focus is on how variables are created in JavaScript.

2. **Hoisting:**
   - Hoisting is a mechanism where some variables and functions can be accessed before they are declared in the code.
   - Commonly misunderstood as variables being "moved" to the top of their scope. However, in reality, JavaScript scans for declarations during the creation phase of the execution context.

3. **Function Declarations:**
   - Hoisted with their entire function definition, making them usable before their actual declaration in the code.
   - Block-scoped in strict mode.

4. **`var` Variables:**
   - Hoisted but initialized with `undefined`. This can lead to unexpected behavior and bugs.
   - This is one reason `var` is avoided in modern JavaScript.

5. **`let` and `const` Variables:**
   - Technically hoisted but set to "uninitialized," making them inaccessible until the line of declaration.
   - They exist in the Temporal Dead Zone (TDZ) from the start of the scope until they are declared.

6. **Function Expressions and Arrow Functions:**
   - Hoisting behavior depends on whether they are declared with `var`, `let`, or `const`.
   - If declared with `var`, they are hoisted to `undefined`. If with `let` or `const`, they are not usable until declared due to the TDZ.

### Temporal Dead Zone (TDZ):
- **TDZ** is the period between the start of the scope and the declaration of a variable where it cannot be accessed.
- Attempting to access a variable in the TDZ results in a reference error.
- The TDZ helps catch errors and prevents bugs associated with accessing variables too early.

### Why Hoisting Exists:
- Hoisting was implemented to allow the use of function declarations before they are defined, which is useful for certain programming techniques.
- The hoisting of `var` is a byproduct of function hoisting, but it leads to less desirable outcomes, hence the preference for `let` and `const` in modern JavaScript.

### Conclusion:
- Hoisting, particularly with `var`, can cause problems and bugs. 
- Modern best practices involve using `let` and `const` to avoid these issues and take advantage of the TDZ for better error handling.

The video ends with a suggestion to practice hoisting with real examples.
  */
  
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

  //Solution 02
  calcAge : function (){ //this worked because this arrow function uses the this keyword from its parent scope
    console.log(2037 - this.year);
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    }
    isMillenial()


    //Solution 01
    // const self = this //here we are still outside of this isMillennial function.And so here, we still have access to this keyword set to Jonas so we defined self as this
    // const isMillenial = function(){//This is just a regular function call even though it happens inside a method And the rule says that inside a regular function call, that this keyword must be undefined
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this);//This will log out as undefined
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // }
    // isMillenial()
  
  },

  greet : () => console.log(`Hey ${this.firstName1}`) //an arrow function does not get its own this keyword.it will simply use the this keyword from its surroundings. So in other words, its parents this keyword, and the parent scope of this greet method is the global scope
 }
 var firstName1 = 'Matilda'//This is in a gloabal scope

 jonas1.greet() // Because we declare firstName1 with var then this will log out Hey Matilda
 jonas1.calcAge()
 
 //Just like the this keyword, the arguments keyword is only available in regular functions.

 const addExpr1 = function(a,b){ 
  console.log(arguments);
  
  return a + b
 }

 addExpr1(2,4)//up until this point, we have only ever specified exactly the arguments that we have here in the list of parameters.But it is completely legal to add more arguments.They will not have a name, so we didn't name them, but they exist.

 var addArrow1 = (a,b) => {
  // console.log(arguments);//arguments keyword exists, but that it only exists in regular functions.So in function expressions like this and also in function declarations,but not in an arrow function.
    a + b
 }

///////////////////////////////////////////////////////////////////////////////////
// Primitives vs. Objects (Primitive vs. Reference Types)

 let age = 30 
 let oldAge = age
 age = 31 //Changed the original one from 30 to 31.
 console.log(age);
 console.log(oldAge);//But the old age is still 30 here.And that's because I set the code to age at the point in which was still 30 .And so then changing the age here from 30 to 31 did of course not affect the old age variable again.

 const me1 = {
  name : 'Jonas',
  age : 30
 }

 //Both me and friend have the age of 27 And that looks a little bit strange because all we did was to change the age of the friend
 const friend = me1
 friend.age = 27
 console.log('Friend',friend);
 console.log('Me',me1);
 
 /**
  * Now, when we're talking about memory and memory management, it's usual to call primitives, primitive types and objects reference types because of the different way in which they are stored in memory.
  * Reference types(objects) will get stored right in the memory heap.
  * On the other hand, primitives or primitive types are stored in the call stack so they are stored in the execution contexts in which they are declared.
  * */
 
 /**
  * Primitive values example 
  * 
  * let age = 30 
  * let oldAge = age
  * age = 31 
  * console.log(age);
  * console.log(oldAge);
  * 
  * So when we declare a variable like age equals 30, JavaScript will create 
  * a so-called unique identifier with the variable name. Then a piece of memory will be allocated
  * with a certain address, so 0001 in this example, and finally the value would be stored in memory
  * at the specified address.And remember this all happens in a call stack
  * where primitive values are stored.Now what's extremely important to understand here
  * is that the identifier actually points to the address and not to the value itself.
  * 
  * So we would say that the age variable is equal to 30,but in fact, age is equal to the memory address 0001,which holds the value of 30
  * Now, in the next line, we declare old age to be equal to age.And it will point the oldAge to the same memory address
  * as the age variable.
  * 
  * In the next line, we set age to 31.The value at address 0001 will certainly not become 31 because that would change old age as well,
  * since they both point to the same address.Also the value at a certain memory address is immutable,
  * or in other words, it cannot be changed.So instead what's going to happen here
  * is that a new piece of memory is allocated.So the age identifier now simply points
  * to the new address, which is holding the new value of 31
  * 
  * And that's why when we log both of variables to the console in the end,they both return exactly values that we expect.
  */

 /**
  * Reference values example 
  * const me1 = {
  * name : 'Jonas',
  * age : 30
  * }
  * 
  * const friend = me1 
  * friend.age = 27 //Even though we defined the 'friend' variable as a constant, we can actually still manipulate the object without problems.
  * //Because we're actually not changing the value in memory for the Friend identifier, it is still D30F. 
  * So the reference to the object. All we did was to change the value in the heap, and that's not a problem.
  * 
  * console.log('Friend',friend);
  * console.log('Me',me1)
  * 
  * 
  * 
  * When a new object is created such as this 'me1' object,it is stored in the heap
  * And like Primitive values example there is a memory address and then the value itself.
  * In the case of reference values like this 'me1' object, the 'me1' identifier
  * does actually not point directly to this newly created memory address in the heap.
  * So in this example, D30F,instead, it will point to a new piece of memory
  * that's created in the stack.
  * 
  * And this new piece of memory will then point to the object
  * that's in the heap by using the memory address as its value.
  * In other words, the piece of memory in the call stack
  * has a reference to the piece of memory in the heap,
  * which holds or 'me1' object, okay?
  * 
  * And that's the reason why we call objects reference types
  * 
  * So again, when we declare a variable as an object,an identifier is created,
  * which points to a piece of memory in the stack,which in turn points to a piece of memory in the heap.
  * And that is where the object is actually stored.
  * And it works this way because objects might be
  * too large to be stored in the stack.
  * Instead they are stored in the heap,
  * which is like an almost unlimited memory pool.
  * And the stack just keeps a reference
  * to where the object is actually stored in the heap
  * so that it can find it whenever necessary.
  * 
  * Now, moving on in the code, we create a new variable called 'friend'
  * that we set equal to the 'me' object.And just like with primitive values,
  * the 'friend' identifier will point to the exact same memory address as the 'me' identifier.
  * And again, that address contains the reference,which then points to the object itself.
  * And like this the Friend object is now essentially the exact same as the 'me' object.
  * Now we're actually gonna change a property in the Friend object by setting friend.age to 27
  * So what happens then is that the object is found in the heap, and the 30 is changed to 27.
  * 
  * In the slide is the fact that 'me1' and 'friend' actually point to the exact same object in the memory heap. 
  * So whenever we change something in this object, it will always be reflected in 'friend' and in 'me1'.
  * So in both these objects.So these are basically just two different identifiers
  * pointing to the exact same value.So whenever you think that you're copying an object,
  * you're really just creating a new variable that points to the exact same object
  */

///////////////////////////////////////////////////////////////////////////////////
//  Primitives vs. Objects in Practice
 let lastName = 'Williams'
 let oldLastName = lastName
 lastName = 'Davis'
 console.log(lastName,oldLastName);

 //As we already know is a reference value because it is gonna be stored in the heap, and the stack then just keeps a reference to the memory position at which the object is stored in the heap.

 const  jessica = {
  firstName : 'Jessica',
  lastName : 'William',
  age : 27
 }

 const marriedJessica = jessica
 marriedJessica.lastName = 'Davis'

 console.log('Before Marriage',jessica);
 console.log('After Marriage',marriedJessica);
 /**
  * When we attempted to copy the original Jessica object,it did in fact not create a new object in the heap.
  * So it is not a new object in the heap.It's simply just another variable in the stack,
  * which holds the reference to the original object.So, both of these two variables simply point
  * to exactly the same memory address in the heap.And that's because in the stack,they both hold the same memory address reference.
  * And so of course, it makes sense that if we change a property on marriedJessica,
  * it will also change on Jessica itself.So, again, because they are essentially just two different names for the same thing.
  * Now, this is also the reason why we can change properties in the marriedJessica object,which was declared using a const here.
  * And const is supposed to be for constants.So, for things that we cannot change.However, what actually needs to be constant 
  * is the value in the stack.And in the stack, the value only holds the reference,
  * which we are not actually changing.The only thing that we are changing is the underlying object
  * that is stored in the heap.
  */

  /**
   * marriedJessica = {}
   * We could not say marriedJessica is equal to this new empty object. 
   * Because this new object will be stored at a different position in memory, and therefore 
   * the reference to that position in memory will have to change here in this variable.Because that is in the stack
   * since it is a constant,we cannot change that value in the stack.So, we cannot change the value to a new memory address,
   * and therefore, this does not work.If it was a let here,then we could do this, what we have here.
   * But since it's a constant, again, it is not allowed.So, as a conclusion, completely changing the object,so, assigning a new object to it
   * is completely different than simply changing a property as we did
   * */ 
 
  //Copy the object so that we could then change one of them without changing the othe

   const jessica1 = {
    firstName : 'Jessica',
    lastName : 'William',
    age : 27,
    family : ['Alice','Bob'] //Add an Array Object
   }
  //If we really wanted to copy this object, we could use a function called object.assign. And what this function does is to merge two objects and then return a new one.

  const jessicaCopy = Object.assign({},jessica1) //By merging with an empty new object,  this will then create a completely new object where all the properties are really copied

  jessicaCopy.lastName = 'Davis'

 console.log('Before Marriage',jessica1);
 console.log('After Marriage',jessicaCopy);

 jessicaCopy.family.push('Mary')
 jessicaCopy.family.push('John')

 console.log('Before Marriage',jessica1);
 console.log('After Marriage',jessicaCopy);

 /**
  * Because using this technique of object.assign only works on the first level.
  * Or in other words, if we have an object inside the object, then this inner object will actually still be the same.
  * So, it will still point to the same place in memory.And that's why we say that this object.assign
  * only creates a shallow copy and not a deep clone which is what we would like to have.
  */
 
 