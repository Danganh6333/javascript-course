'use strict';

///////////////////////////////////////////////////////////////////////////////////
//What is Object-Oriented Programming?

 /**
  * The video provides an introductory overview of Object-Oriented Programming (OOP), explaining its core concepts, principles, and benefits.
  * 1. **Introduction to OOP**: Object-Oriented Programming (OOP) is a programming paradigm centered around objects. It allows us to model real-world entities (e.g., users, to-do list items) as objects that contain both data (properties) and behavior (methods). Objects in OOP serve as self-contained blocks of code, enabling better organization and interaction through a public interface or API.
  * 2. **Why OOP Exists**: OOP was developed to improve code organization, making it more flexible and easier to maintain, especially in large codebases. Before OOP, unstructured code, often referred to as "spaghetti code," made maintenance and the addition of new features difficult. OOP emerged as a solution to this problem, becoming the most popular programming paradigm in large-scale software engineering. Other paradigms like functional programming also aim to avoid spaghetti code but differ in approach.
  * 3. **Classes and Objects**: In OOP, classes act as blueprints for creating objects. These classes describe the structure and behavior of objects, but they don’t contain actual data. Objects, or instances, are created based on these classes and contain real data. For example, a user class might describe a user with properties like username and email, and methods like login. Multiple objects (users) can be created from this class, each with different data but sharing the same behavior.
  * 4  **Designing Classes**: Designing classes involves modeling real-world data into a structured format. There isn't a single correct way to design a class, but four fundamental principles guide good class design: abstraction, encapsulation, inheritance, and polymorphism.
  * 5. **Principles of OOP**:
    - **Abstraction**: Abstraction involves hiding unnecessary details to simplify interaction with the object. For example, a phone user interacts with a simple interface (buttons, screen) without worrying about the internal workings (vibration motor, voltage). In programming, abstraction allows developers to use functions like `addEventListener` without knowing how they work internally.
    - **Encapsulation**: Encapsulation refers to keeping some properties and methods private within a class, preventing external code from directly accessing or modifying them. This protects the internal state of an object and reduces the risk of bugs. Public methods are exposed through an API, allowing controlled interaction with the object.
    - **Inheritance**: Inheritance allows a child class to inherit properties and methods from a parent class. For example, an admin class might inherit from a user class, gaining all its properties and methods while adding its unique features. This reduces code duplication and forms a class hierarchy.
    - **Polymorphism**: Polymorphism enables a child class to override a method inherited from a parent class, providing a specialized implementation. For instance, an admin class might have a more secure login method than a regular user class. This allows different classes to provide unique implementations of the same method 
  * 6. **Conclusion**: The video concludes by emphasizing the importance of understanding these fundamental concepts before moving on to how OOP is implemented in JavaScript. While JavaScript implements OOP differently than traditional languages, grasping these principles is crucial for effective programming.
  */
 
///////////////////////////////////////////////////////////////////////////////////
//OOP in JavaScript

 /**
  * ### Summary: OOP in JavaScript

#### **Introduction to OOP in JavaScript**
- The lecture focuses on how Object-Oriented Programming (OOP) works specifically in JavaScript.
- JavaScript’s approach to OOP is different from traditional OOP, which uses classes and instances.

#### **Review of Classical OOP**
- In traditional OOP, a class is a blueprint for creating instances (objects)
- Instantiation is the process of creating an object from a class.

#### **JavaScript’s Prototypal Inheritance**
- In JavaScript, objects are linked to a prototype object, which contains methods and properties that can be accessed by those objects.
- This is known as **prototypal inheritance**, where objects inherit properties and methods from their prototype.
- This mechanism is also referred to as **delegation**, where an object delegates behavior to its prototype.

#### **Difference from Classical OOP**
- In classical OOP, methods are copied from the class to the object.
- In JavaScript, objects delegate behavior to their prototype rather than copying it.

#### **Practical Example: Arrays**
- JavaScript arrays inherit methods like `map` from `Array.prototype`.
- This means that when you call `map` on an array, it’s not defined directly on the array, but rather on its prototype (`Array.prototype`).

#### **Questions Addressed**
- The lecture raises key questions about how to create prototypes, link objects to prototypes, and implement OOP in JavaScript without traditional classes.

#### **Three Ways to Implement OOP in JavaScript**
1. **Constructor Functions**: 
   - A traditional way to create objects and set prototypes.
   - This method has been used in JavaScript since its inception.
   
2. **ES6 Classes**:
   - Introduced in ES6, these are syntactic sugar over constructor functions, making OOP easier and more familiar for developers coming from other languages.
   - Despite the syntax, they still use prototypal inheritance under the hood.
   
3. **Object.create()**:
   - The simplest and most direct way to link an object to a prototype.
   - However, it’s less commonly used compared to the other two methods.

#### **Four Principles of OOP in JavaScript**
- The core principles of OOP—abstraction, encapsulation, inheritance, and polymorphism—are still valid in JavaScript, even with prototypal inheritance.

#### **Next Steps**
- The following lectures will dive into practical implementation, focusing on how to apply these concepts and principles in JavaScript.
  */

///////////////////////////////////////////////////////////////////////////////////
// Constructor Functions and the new Operator

 //The only difference between a regular function, and a function that we call constructor function, is that we call a constructor function with the new operator
 const Person = function(firstName,birthYear){//in OOP there is this convention that constructor functions always start with a capital letter
  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
  
  //We should never create a class inside a constructor function That's because imagine we were gonna create a hundred tens of thousands of person objects using this constructor function. Then what would happen, is that each of these objects would carry around this function here.So if we had a thousand objects, we would essentially create a thousand copies of this function.
  // this.calcAge = function() {
  //   console.log(2037 - this.birthYear);
    
  // }
 } 
 const jonas = new Person('Jonas',1991)
 console.log(jonas);
 
 //behind the scenes, there have been four steps that happen when we call a function with the new operator like this.
 //1.New empty objects is created
 //2.the function is called and in this function call the this keyword will be set to this newly created object
 //3. the newly created object is linked to a prototype
 //4. function automatically returns that empty object from the beginning And so whatever we add to that empty object, will then be returned from the function. And that returned object is what we are trying to build 


 //in classical object oriented programming, an object created from a class is called an instance
 //we didn't technically create a class here because as we discussed before, JavaScript doesn't really have classes in the sense of traditional OOP. However, we did create an object from a constructor function
 const matilda = new Person('Matilda',2017)
 const jack = new Person('Jack',1975)
 console.log(matilda);

 console.log(jonas instanceof Person);

///////////////////////////////////////////////////////////////////////////////////
// Prototypes

 //There exist only one copy of this function but then all of the objects that are created using this constructor function can basically reuse this function on themselves
 Person.prototype.calcAge = function(){//all the objects that are created through this constructor function here will inherit, so they will get access to all the methods and properties that are defined on this prototype property
  console.log(2037 - this.birthYear);
 } 

 //So if we check our Jonas here, then you see that it contains of course the birth year and the first name, but it does not contain the calcAge method. But still, we have access to it because of prototypal inheritance
 jonas.calcAge()
 matilda.calcAge()
 
 //
 console.log(jonas.__proto__);//each object has a special property called a __proto__
 console.log(jonas.__proto__ === Person.prototype);//Person.prototype here is actually not the prototype of person. But instead, it is what's gonna be used as the prototype of all the objects that are created with the person constructor function.
 
 // test if this is a prototype of another object
 console.log(Person.prototype.isPrototypeOf(jonas)); //So this confirms one more time that person.prototypenis indeed the prototype of Jonas.bAnd the same for Matilda, of course as well. But person.prototype is not the prototype of person.
 console.log(Person.prototype.isPrototypeOf(matilda));
 console.log(Person.prototype.isPrototypeOf(Person));

 //Set properties on prototype
 Person.prototype.species = 'Homo Sapien'//this property is not really directly in the object, so it's not its own property. So own properties are only the ones that are declared directly on the object itself not including the inherited properties
 console.log(jonas.species,matilda.species);


 console.log(jonas.hasOwnProperty('firstName'));
 console.log(jonas.hasOwnProperty('species'));//this property is not really inside of the Jonas object. It simply has access to it because of its prototype

///////////////////////////////////////////////////////////////////////////////////
// Prototypal Inheritance and The Prototype Chain

 /**### Summary: Prototypal Inheritance and The Prototype Chain

#### **Overview**
- The lecture consolidates the understanding of prototypal inheritance and the prototype chain in JavaScript using a diagram and an example involving the `Person` constructor function.

#### **Constructor Function and Prototype**
- The `Person` constructor function has a prototype property, which is an object.
- Inside this prototype object, the `calcAge` method is defined.
- The `Person.prototype` object has a `constructor` property that points back to the `Person` function.
- `Person.prototype` is not the prototype of the `Person` function itself but of all objects created using the `Person` constructor.

#### **Creating an Object Using the Constructor Function**
- When a function is called with the `new` operator:
  1. A new empty object is instantly created.
  2. The `this` keyword within the function is set to the new object.
  3. Properties (e.g., `name`, `birthYear`) are set on this new object.
  4. The new object is linked to the constructor function’s prototype (`Person.prototype`) through the `__proto__` property.
  5. The new object is automatically returned unless something else is explicitly returned in the function.

#### **Accessing Methods Through Prototypal Inheritance**
- When trying to access the `calcAge` method on the `jonas` object (created from `Person`):
  - JavaScript looks for the method directly on the `jonas` object.
  - If not found, it checks the object's prototype (`Person.prototype`), where the method is defined.
  - This lookup behavior is known as **prototypal inheritance** or **delegation**.

#### **Prototype Chain**
- The connection between the `jonas` object and `Person.prototype` forms a **prototype chain**.
- **Prototype chains** do not end with the first prototype object:
  - `Person.prototype` itself is an object and has its own prototype, which is `Object.prototype`.
  - `Object.prototype` is usually at the top of the prototype chain and its `__proto__` property is `null`, marking the end of the chain.
  
#### **Similarity to Scope Chain**
- The prototype chain is analogous to the **scope chain**:
  - In the scope chain, JavaScript searches for a variable in the current scope and then moves to the outer scopes if it’s not found.
  - In the prototype chain, JavaScript searches for properties or methods in the current object, then moves up the chain if it’s not found.

#### **Example: Method Lookup in the Prototype Chain**
- Calling the `hasOwnProperty` method on the `jonas` object demonstrates the prototype chain:
  - JavaScript first looks for the method on the `jonas` object itself.
  - Not finding it, it checks `Person.prototype`.
  - If not found there, it moves up to `Object.prototype`, where it finds the method.
  - JavaScript then runs the method as if it were directly defined on `jonas`, even though it was inherited through the prototype chain.

#### **Conclusion**
- This lecture explains the underlying magic of prototypes and the prototype chain in JavaScript.
- It sets the stage for more complex topics, such as inheritance between different types of objects or classes, which will be explored in future lectures. */

///////////////////////////////////////////////////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
 
// we already know that this is the prototype of Jonas which is exactly the prototype property of person which contains the CalcAge() method
 console.log(jonas.__proto__);
 // let's actually move up in the prototype chain and essentially take a look at the prototype of Jonas's prototype.And it is indeed the prototype property of object
 console.log(jonas.__proto__.__proto__);
 //Move up and and we see that is null because object.prototype is usually the top of the scope chain.
 console.log(jonas.__proto__.__proto__.__proto__);

 //person.prototype has a constructor property that point back to the person itself
 console.log(Person.prototype.constructor);
 //Now, if we want to inspect that function here
 console.dir(Person.prototype.constructor);
 //the prototype of arrays
 const arr = [3,7,85,96,97]
 console.log(arr.__proto__);//this is the reason why all the arrays get access to all of these methods. So each array does of course not contain all of these methods but instead, each array will inherit these methods from its prototype
 console.log(arr.__proto__ === Array.prototype)


 console.log(arr.__proto__.__proto__); // back to having object.prototype.
 
 //So we know at this point, that any array inherits all their methods from it's a prototype. And therefore we can use that knowledge to extend the functionality of arrays even further.
 
 //create a method which returns all the unique elements of an array
 Array.prototype.unique = function(){ //extending the prototype of a built-in object is generally not a good idea
  return [...new Set(this)]
 }
 console.log(arr.unique());

 /**
  * Reasons to not extending the prototype
  * The first reason is that the next version of JavaScript might add a method with the same name that we are adding but it might work in a different way
  * The second reason is when you work on a team of developers, multiple developers might implement the same method with a different name then that's just going to create so many bugs
  */

 //Select the DOM elements
 const h1 = document.querySelector('h1')
 console.dir(h1); //This prototype have 6 or 7 levels
 
 //Select the function
 console.dir(x => x + 1);//as I mentioned a bit earlier in this video the function itself is also an object. And so therefore it also has a prototype. And in this case to prototype will then contain the methods that we have used previously on functions
 
///////////////////////////////////////////////////////////////////////////////////
//ES6 Classes

 //const PersonCL = class{ //Class expression

 //}

 //with this syntax,all we have to do is to write the methods  inside the class, but outside of the constructor, and then they will automatically be added to the prototype property of the class basically
 class PersonCl{ //Class declaration
   constructor(firstName,birthYear){//just like in constructor functions, we pass in arguments basically for the properties that we want the object to have
     this.firstName = firstName;//the this keyword here inside of the constructor will be set to the newly created empty object
     this.birthYear = birthYear
   } 
   calcAge(){ //All of these methods outside of the constructor will be on the prototype of the object and not on the object itself
    console.log(2037 - this.birthYear);
    
   }
 }
 
 const jessica = new PersonCl('jessica',1996) //when we create a new instance here, then it is PersonCl constructor that is gonna be called and that will return a new object and then that will be stored here into jessica
 console.log(jessica);
 jessica.calcAge()

 console.log();
 
 