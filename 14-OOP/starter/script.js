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
 

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/


const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

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
   greet(){
    console.log(`Hey ${this.firstName}`);
   }
   
 }
 
 const jessica = new PersonCl('jessica',1996) //when we create a new instance here, then it is PersonCl constructor that is gonna be called and that will return a new object and then that will be stored here into jessica
 console.log(jessica);
 jessica.calcAge()

 console.log(jessica.__proto__ === PersonCl.prototype);

 //We could shorten this by doing the above like greet()
 //PersonCl.prototype.greet = function() {
  //console.log(`Hey ${this.firstName}`);
 //}

 jessica.greet()

 //1. Classes are not hoisted and so even if they are class declarations, which means we can't use them before they are declared in the code
 //2. classes are also first-class citizens,that means is that we can pass them into functions and also return them from functions.
 //3. the body of a class is always executed in strict mode even if we didn't activate it
 
///////////////////////////////////////////////////////////////////////////////////
//Setters and Getters

 //So every object in JavaScript can have setter and getter properties. And we call these special properties assessor properties, while the more normal properties are called data properties
 const account = {
  owner : 'Jonas',
  movements : [200,53,12,300],

  //a method to get the latest movement and then to transform this into a getter we simply prepend the keyword get
  get lastest(){
    return this.movements.slice(-1).pop() //this is actually gonna return an array with the last position and so we can simply take that out using the pop method
  },
  set lastest (mov){ //Add new movement to the array and any setter method need to have one parameter
    this.movements.push(mov)
  }
 }
 //this can be very useful when we want to read something as a property, but still need to do some calculations before
 console.log(account.lastest);//we simply use it as a property not as a method

 account.lastest = 50 //this is like a property and not a method so we can simply set it just like we set any other property
 console.log(account.movements);
 
 //Add a getter for the age property
 class PersonCl2{ 
  constructor(fullName,birthYear){
    this.fullName = fullName;
    this.birthYear = birthYear
  } 
  calcAge(){ 
   console.log(2037 - this.birthYear);
  }
  greet(){
   console.log(`Hey ${this.fullName}`);
  }

  get age(){
    return 2037 - this.birthYear
  }  

  //create a setter for the fullName property which will check if this is actually a full name
  set fullName(name){ // right now both the setter function and the constructor function are trying to set the exact same property name . So what we need to do instead is to here create a new property name.
    console.log(name);
    if(name.includes(' ')) this._fullName = name // And the convention for doing that, we add an underscore.However, now when we do this, we are actually creating a new variable.
    else alert(`${name} is not a full name`)
  }

  get fullName(){//And to fix this we need to create a getter
   return this._fullName
  }
}
 const jessica2 = new PersonCl2('jessica davis',1996)
 console.log(jessica2.age);
 const walter = new PersonCl2('Walter',1902)
 
///////////////////////////////////////////////////////////////////////////////////
//Static Methods
 
 console.log(Array.from(document.querySelectorAll('h1')));//Array.from method converts any array like structure to a real Array
 // this from method here is really a method that is attached to the Array constructor. So we could not use the from method on an Array like [1,4,2,12].from()
 
 console.log(Number.parseFloat(12));//this method is another static method and its static on the number constructor. So its not available on numbers, but only on this very constructor.
 
 //Add a static method
 Person.hey = function(){
  console.log('Hey there');
  console.log(this);//whatever object is calling the method, will be the this key word inside of that function. And so here the this key word, is simply that entire constructor function.
 }
 Person.hey()
 //jonas.hey()//hey() is not in nherited. So just like we cannot call the from method on an Array. we cannot say Jonas.hey()

 class PersonCl3{ 
  constructor(fullName,birthYear){
    this.fullName = fullName;
    this.birthYear = birthYear
  } 
  //This methods is call instance
  //Methods will be added to .prototype property
  calcAge(){ 
   console.log(2037 - this.birthYear);
  }
  greet(){
   console.log(`Hey ${this.fullName}`);
  }

  get age(){
    return 2037 - this.birthYear
  }  

  set fullName(name){ 
    console.log(name);
    if(name.includes(' ')) this._fullName = name 
    else alert(`${name} is not a full name`)
  }

  get fullName(){
   return this._fullName
  }
  //This methods is call static
  static hey(){
    console.log('Hey there');
    console.log(this);
    
  }
}

 PersonCl3.hey()

///////////////////////////////////////////////////////////////////////////////////
//Object.create

 //Third way of implementing prototypal inheritance or delegation.And that third way is to use a function called Object.create

 //With Object.create, there is still the idea of prototypal inheritance. However, there are no prototype properties involved. And also no constructor functions, and no new operator. So instead, we can use Object.create to essentially manually set the prototype of an object, to any other object that we want.

 const PersonProto = {
  //That's all the methods that we want the person objects to inherit And so we put them in the prototype
  calcAge(){ 
    console.log(2037 - this.birthYear);
   },

   init(name,birthYear){
    this.name = name;
    this.birthYear = birthYear
   } 
 }

 const steven = Object.create(PersonProto)//we pass in the object that we want to be the prototype of the new object. And so this will now return a brand new object, that is linked to the prototype that we passed in here.
 console.log(steven);//So Steven here is right now an empty object.And it will be linked to the PersonProto object
 
 //Add properties
 steven.name = 'Steven'
 steven.birthYear = 2002;
 steven.calcAge()

 //The big difference of Object.create is that we didn't need any constructor function, and also no prototype property at all
 console.log(steven.__proto__ === PersonProto);

 const sarah = Object.create(PersonProto)
 sarah.init('Sarah',1979)
 sarah.calcAge()

///////////////////////////////////////////////////////////////////////////////////
//Coding Challenge #2

/*1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);


///////////////////////////////////////////////////////////////////////////////////
//Inheritance Between "Classes": Constructor Functions
 
//This is about real inheritance between classes and not just prototypal inheritance between instances and a prototype property like we've been doing so far
//So in this lecture, we will inherit between classes using constructor functions

/**create a new student class and make it inherit from the person class So this way, all instances of student
 * could also get access to methods from the person's prototype property, like the calcAge method through the prototype chain.
 * Or in other words, we want to set the __proto__ of student.prototype to person.prototype.*/

const Person2 = function(firstName,birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;
}

Person2.prototype.calcAge = function(){
  console.log(2037 - this.birthYear);
 } 
 //The student has an additional property, which is the course
 const Student = function(firstName,birthYear,course){
  
  //This violates the "don't repeat yourself" principle and imagine that the implementation of person here changes in the future, then that change will not be reflected in the student.
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  
  // the problem here is that we are now actually calling this person constructor function as a regular function call. And remember that in a regular function call, the this keyword is set to undefined
  //Person2(firstName,birthYear)

  //instead of simply calling the person function here, we need to manually set the this keyword as well by using  the call method
  Person2.call(this,firstName,birthYear)// the call method will indeed call this function, but we will be able to specify the this keywords here as the first argument in this function
  this.course = course
 }
 
 Student.prototype = Object.create(Person.prototype)//the student.prototype object is now an object that inherits from person.prototype.And so at this point, student dot prototype is empty. And so then onto that empty object,
 //we can add methods like this one.
 //Add methods
 Student.prototype.introduce = function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
  
 }

 const mike = new Student('Mike',2020,'Computer Science')
 console.log(mike);
 mike.calcAge() //whenever we try to access a method, that's not on the object's prototype, then JavaScript, will look up even further in the prototype chain and see if it can find a method so in the parent prototype
 //So JavaScript will finally find the calcAge in person dot prototype

 //It doesn't matter how far away in the prototype chain a method is just like how the object.prototype will sit on top of the prototype chain.
 console.log(mike.__proto__);
 console.log(mike.__proto__.__proto__);

 //These two log will be both true we linked the prototypes together
 console.log(mike instanceof Student);
 console.log(mike instanceof Person);
 
 console.dir(Student.prototype.constructor);//it points to person
 //JavaScript now, thinks that the constructor of student or prototype is person here. And so this makes it so that the constructor of student.prototype is still person
 //So we will fix it by set it to Student
 Student.prototype.constructor = Student
 console.log(Student.prototype.constructor);
 
///////////////////////////////////////////////////////////////////////////////////
//Coding Challenge #3

 /* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
 
const Car2 = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car2.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car2.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
///////////////////////////////////////////////////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

class PersonCl4{ 
 constructor(fullName,birthYear){
   this.fullName = fullName;
   this.birthYear = birthYear
 } 
 calcAge(){ 
  console.log(2037 - this.birthYear);
 }
 greet(){
  console.log(`Hey ${this.fullName}`);
 }

 get age(){
   return 2037 - this.birthYear
 }  

 set fullName(name){ 
   console.log(name);
   if(name.includes(' ')) this._fullName = name 
   else alert(`${name} is not a full name`)
 }

 get fullName(){
  return this._fullName
 }
 static hey(){
   console.log('Hey there');
   console.log(this);
   
 }
}
 //to implement inheritance between ES6 classes, We need the extent keywords and the super function
 class Student2 extends PersonCl3{ //the prototype chain was set up automatically by basically by the extends keyword here
  constructor(fullName,birthYear,course){// this one will just like before receive the same arguments as the parent class, but then some additional ones
    //Here we don't need  PersonCl3.call() like the last function but we use the super function
    //Here in the super constructor,this always need to happen first  because this call to the super function is responsible for creating the this keyword in this subclass 
    super(fullName,birthYear) //super() is basically the constructor function of the parent class and we specified these two that are also specified in the parent's constructor
    this.course = course
  }

  introduce(){
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  //override one of the methods of the parent class
  //this new calcAge method here appears first in the prototype chain And so therefore it is essentially overriding the method coming from the parent class
  calcAge(){
    console.log(`Im ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}`);
    
  }
 }

 const martha = new Student2('Martha Jones',2012,'Computer Science')
 martha.introduce()
 martha.calcAge()

///////////////////////////////////////////////////////////////////////////////////
// Inheritance Between "Classes": Object.create

const PersonProto2 = {
  calcAge(){ 
    console.log(2037 - this.birthYear);
   },

   init(name,birthYear){
    this.name = name;
    this.birthYear = birthYear
   } 
 }

 const steven2 = Object.create(PersonProto2)

 const StudentProto2 = Object.create(PersonProto2)
 //the StudentProto2 object is now the prototype of jay, and the PersonProto2 object is in turn the prototype of StudentProto2.And so therefore, PersonProto2 is a parent prototype of jay
 //Add init to the StudentProto2

 StudentProto2.init = function(firstName,birthYear,course){
  //the child prototype can reuse the init method from the person prototype, which is the parent prototype
  PersonProto2.init.call(this,firstName,birthYear) //Set the this keyword
  this.course = course
 }

 StudentProto2.introduce = function(){
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
  
 }

 //in this version, we don't even worry about constructors anymore, and also not about prototype properties, and not about the new operator. So it's really just objects linked to other objects.
 const jay = Object.create(StudentProto2)
 jay.init('Jay',2019,'Computer Science')
 jay.introduce()
 jay.calcAge()

///////////////////////////////////////////////////////////////////////////////////
// Another Class Example

 class Account {
  constructor(owner,currency,pin){
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account`);//when Jonas opens a new account, then he's basically greeted with this message here, coming right from the constructor.
  }

  //Public methods
  deposit(val){
    this.movements.push(val)
  }

  //we can now actually call the deposit method because it's actually gonna work basically the same way. And so, as you can see here, we can actually call other methods inside of a certain method.
  withdrawals(val){
    this.deposit(-val)
  }

  approveLoan(val){
    return true
  }

  //we could make the approval of the loan based on some condition, and that condition could come from some other method
  requestLoan(val){
   if(this.approveLoan(val)){
    this.deposit(val)
    console.log('Loan approve');
    
   }
  }
 }

 const acc1 = new Account('Jonas','EUR',1111)
 console.log(acc1);

 acc1.deposit(250)
 acc1.withdrawals(129)
 acc1.requestLoan(1000)

 // it's not a good idea at all to do this. So, instead of interacting with a property like this, it's a lot better to create methods that interact with these properties.
 //acc1.movements.push(250);
 //acc1.movements.push(-222)
 
///////////////////////////////////////////////////////////////////////////////////
// Encapsulation: Protected Properties and Methods

 //Encapsulation basically means to keep some properties and methods private inside the class so that they are not accessible from outside of the class

 /**
  * there are two big reasons why we need encapsulation and data privacy.
  * So first it is to prevent code from outside of a class to accidentally manipulate or data inside the class.
  * the second reason is that when we expose only a small interfaces so a small API consisting only of a few public methods
  * then we can change all the other internal methods with more confidence.
  */

 class Account2 {
  constructor(owner,currency,pin){
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    //protected proerty
    this._movements = [];// Add this underscore in front of the property name.This does not actually make the property truly private because this is just a convention. So it's something that developers agree to use and then everyone does it this way.
    this.locale = navigator.language;

    console.log(`Thanks for opening an account`);
  }

  //if we still wanted to give access to the movements array from the outside then we would have to implement a public method for that.
  //Public interface
  getMovements(){
    return this._movements
  }


  deposit(val){
    this._movements.push(val)
  }

  withdrawals(val){
    this.deposit(-val)
  }

  _approveLoan(val){
    return true
  }

  requestLoan(val){
   if(this._approveLoan(val)){
    this.deposit(val)
    console.log('Loan approve');
    
   }
  }
 }

 const acc2 = new Account2('Jonas','EUR',1111)
 console.log(acc2);

 console.log(acc2.getMovements());//this one everyone can still at least access the movements but they cannot override them. So they cannot set the movements unless of course they use the underscore with the convention but then at least they will know that it's wrong to access the property.
 acc2.deposit(250)
 acc2.withdrawals(129)
 acc2.requestLoan(1000)

///////////////////////////////////////////////////////////////////////////////////
//Encapsulation: Private Class Fields and Methods

 //some parts of this proposal actually already work in Google Chrome, but other parts don't.

 /**
  * in traditional OOP languages like Java and C++,
  * properties are usually called fields.So what this means is that with this new proposal,
  * JavaScript is moving away from the idea that classes
  * are just syntactic sugar over constructor functions.Because with this new class features classes actually start to have abilities
  * that we didn't previously have with constructor functions.
  */

 /**
  * in this proposal, there are actually four different kinds of fields and methods, and actually it's even eight.
  * But in this video, I'm just gonna focus on these four.
  * Public fields 
  * Private fields
  * Public methods
  * Private methods
  * (there is also static version)
  */

 class Account3 {

  //Public fields
  //Adding a public fields by no declaring it using like const or let
  //these public fields here are gonna be present on all the instances that we are creating through the class. So they are not on the prototype

  locale = navigator.language

  //Private fields
  #movements = [] //this is the syntax that makes a field private in this new class proposal by using the # symbol
  #pin;//setting the pin based on the input value to the constructor.However, we can not define a field in the constructor.So the fields, they really have to be out here outside of any method
  constructor(owner,currency,pin){
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    
    console.log(`Thanks for opening an account`);
  }

  getMovements(){
    return this.#movements
  }

  static helper(){
    console.log(Help);
    
  }

  //all these methods here that we have been using are public methods
  deposit(val){
    this.#movements.push(val)
  }

  withdrawals(val){
    this.deposit(-val)
  }


  requestLoan(val){
   if(this._approveLoan(val)){
    this.deposit(val)
    console.log('Loan approve');
    
   }
  }

  //Private methods
  // to make a private method, the syntax is exactly the same as private fields. So just like with the hash
  _approveLoan(val){
    return true
  }
 }
 const acc3 = new Account3('Jonas','EUR',1111)
 //console.log(acc3.#movements);//if we try to read account3.#movements then we get a syntax error.
 console.log(acc3.getMovements());//this one we can still use to get the movement.

///////////////////////////////////////////////////////////////////////////////////
//Chaining Methods

 //Do you remember how we chained array methods one after another, for example filter map and reduce?So we can actually implement the same ability of chaining methods in the methods of our class.
 
 class Account4 {

  //Public fields
  //Adding a public fields by no declaring it using like const or let
  //these public fields here are gonna be present on all the instances that we are creating through the class. So they are not on the prototype

  locale = navigator.language

  //Private fields
  #movements = [] 
  #pin;
  constructor(owner,currency,pin){
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    
    console.log(`Thanks for opening an account`);
  }

  getMovements(){
    return this.#movements
  }

  static helper(){
    console.log(Help);
    
  }

  deposit(val){
    this.#movements.push(val)
    return this
  }

  withdrawals(val){
    this.deposit(-val)
    return this
  }


  requestLoan(val){
   if(this._approveLoan(val)){
    this.deposit(val)
    console.log('Loan approve');
    return this
   }
  }


  _approveLoan(val){
    return true
  }
 }
 const acc4 = new Account4('Jonas','EUR',1111)
 acc4.deposit(300).deposit(300).withdrawals(30).requestLoan(888)
 console.log(acc4);
 console.log(acc4.getMovements());
 
 ///////////////////////////////////////////////////////////////////////////////////
//ES6 Classes Summary

 //this is how we define a class and this is  child class
 //So student is a child class of the parent class person because of the extends keyword to set up the inheritance between these two classes
 //the extends keyword will also automatically set up the prototype chain for us.
 class Student3 extends Person{
  university = 'University of Lisbon'//Public fields
  #studyhour = 0// Private fields
  static numSubjects = 18 //Static public fields(only available on class)
 //this is the constructor method and it is automatically called by the new operator whenever we create a new instance of the class.So basically a new object.
  constructor(fullName, birthYear, startYear, course) {//And this constructor method is mandatory in any regular class, but it might be omitted in a child class if we want it to have the exact same number and the exact same name of parameters.
    super(fullName,birthYear)//the super method only necessary whenever we are writing a child class
    //the difference between varriable and the public field is that we set these instance properties based on input data of the constructor.
    this.startYear = startYear;
    //this.#course = course;//created the private fields out there without any value. And then here we are simply redefining it to the value that is coming into the constructor
  }

  introduce(){
    console.log(`I study ${this.course} at ${this.university}`);
  }

  study(h){
    this.makeCoffe();
    this.#studyhour += h
  }

  #makeCoffe(){
    return `Here is a coffee for you`
  }

  // a getter method is basically so that we can get a value out of an object by simply writing a property instead of writing a method
 //So in this case, we can simply define the test score by setting it to some value instead of calling a test score method.
  get testScore(){
    return this._testScore
  }

  set testScore(score){
    this._testScore = score < 20 ? score : 0//if you have a setter for a property that is already defined in the constructor, then you need to create basically a new property with the underscore in front of it.
  }
 
  // static method is available only on the class so it cannot access the instance properties nor the methods, but only the static ones.
  //So for example, that static public fields that we defined there in the top will of course be accessible in the static method.
  static printCurriculum(){
    console.log(`There are ${this.numSubjects}`);
  }

 }

 const student = new Student3('Jonas',2020,2037,'Medicine')

 ///////////////////////////////////////////////////////////////////////////////////
//Coding Challenge #4
 
/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
class CarCl2 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl2 {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);