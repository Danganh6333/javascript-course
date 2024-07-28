'use strict'

///////////////////////////////////////
//Activating Strict Mode

let hasDriversLicense = false;
const passTest = true;

//ReferenceError: hasDriverLicense is not defined when using strict mode but nothing on loose mode
//  if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

///////////////////////////////////////
//Functions

//Fuctions a piece of code that can be reuse over and over again in our code

//calling / running / invoking the function
function logger() {
  console.log('My name is Jonas');//this fuction does not return a value 
}

logger()
logger()

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);//Using the parameter as a normal variables
  const juice = `Juice with ${apples} apples and ${oranges} oranges`
  return juice
}

const appleJuice = fruitProcessor(5, 0)//If we want to use the value that was returned we need to store it in a variable
console.log(appleJuice);

console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4) // Without the parenthesis, the function is really just a value

console.log(appleOrangeJuice);

///////////////////////////////////////
//Function Declarations vs. Expressions
//Last lecture,we use funtion declarations because we simply use the fuction keyword to declare

const age1 = calcAge1(2002)
console.log(age1);

function calcAge1(birthYear) {
  return 2037 - birthYear
}
//Anonymous function because we didn't give it a name,this is a function expression(a function value stored in a variable)
const calcAge2 = function (birthyear) {
  return 2037 - birthyear
}

const age2 = calcAge2(1991)
console.log(age1, age2);
//Functions are just values but not a type

//We can call the function declarations before they are defined in the code

///////////////////////////////////////
//Arrow Functions

const calcAge3 = birthYeah => 2037 - birthYeah
console.log(calcAge3(37));

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2033 - birthYear
  const retirement = 68 - age
  return `${firstName} retires on ${retirement}`
}

console.log(yearUntilRetirement(200, 'Huy'));

///////////////////////////////////////
//Functions Calling Other Functions

function cutFruitPieces(fruit) {//DRY : Don't repeat yourself
  return fruit * 4
}


function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

///////////////////////////////////////
//Reviewing Functions

//Two birthYear in these two function do not have anything to do with one another

const calcAge4 = function (birthYear) {
  return 2037 - birthYear
}
//Alt + Up : Move the line up
const yearUntilRetirement2 = function (birthYear, firstName) {
  const age = calcAge4(birthYear)
  const retirement = 68 - age
  if (retirement > 0) {
    return retirement
  } else {
    return -1 //-1 a standard number in programming,we could use another numbers cause a number show us that this has no meaning
  }
}

console.log(yearUntilRetirement2(1991, 'Jonas'));

///////////////////////////////////////
//Introduction to Arrays 
const friends = ['Michael', 'Steven', 'Peter'] //literal syntax
console.log(friends);

const years = new Array(1991, 1984, 2000, 2020)

console.log(friends[0]);//Print out the first element of the friends Array

console.log(friends.length);// .length is what we call a property,this print out the exact ammount of elements that's in the Array and it's not zero-based

console.log(friends[friends.length - 1]);//Getting the index of the last element in the Array

friends[2] = 'Jay' //The [] brackets is not only for retrieving elements from the Array,but we can use it to add element to the Array
console.log(friends);

/***
 * Question : Why varriables declared with const cannot be changed but it is still able to change one element of the Array 
 * Answer : Only primitive values are immutable
 */

/**
 *  We cannot replace the entire Array 
 *  Example :friends = ['Bob', 'Alice']
 */
const firstName = 'Jonas'
const Jonas = [firstName, 'Schmedtmann', 2037 - 1991, friends]
console.log(Jonas);

// Exercise : We have an array of birth years and then we want to caculate the ages for some of them
const calcAge = function (birthYeah) {// This operation here expects a single value and we cannot do minus number and array
  return 2037 - birthYeah;
}
const years1 = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years1));//We cannot do operations(+,-,/,*,..) with array

const age3 = calcAge(years[0])
const age4 = calcAge(years[1])
const age5 = calcAge(years[years.length - 1])
console.log(age3, age4, age5);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]

///////////////////////////////////////
//Basic Array Operations (Methods)

const friends2 = ['Michael', 'Steven', 'Peter']
console.log(friends);

//Push method adds elements to the end of the array 
const newLength = friends2.push('Jay') //Push is a function so it can return something and the value that is return is the length of the new array
console.log(newLength);//Log out as 4

//Unshift method add elements to the beginning of the array
friends2.unshift('John') //Unshift also return the length of the new array
console.log(friends2);

//Pop method is the opposite of the push method
const popped = friends2.pop()//Pop return the removed element
console.log(popped);
console.log(friends2);

//Shift method is the opposite of the unshift method
friends2.shift()//Shift also return the removed element
console.log(friends2);

console.log(friends2.indexOf('Steven'));// indexOf return the index at which this element is position
console.log(friends2.indexOf('Billy')); // we will get minus one if the array does not hold that element

//Includes method will return true if the element is in the array and false if it's not
console.log(friends2.includes('Steven'));
console.log(friends2.includes('Billy'));

//Includes method use strict equality for it's check so it does not do type coercion
friends2.push(34)
console.log(friends2.includes(34));
console.log(friends2.includes('34'));//This will return false

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
//Ctrl + B open and closed the explorer

///////////////////////////////////////
//Introduction to Objects

//In objects, we define key value pairs
const jonas = { //Using the {} to create object is called the object literal syntax
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2047 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Steven', 'Peter']
}

//In object the oder of the values does ot matter when we want to retrieve them so we should use objects for more unstructured data and array for a more oder data

///////////////////////////////////////
//Dot vs. Bracket Notation
const jonas2 = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2047 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Steven', 'Peter']
}

//First way of getting a property from an object is using the dot notation
console.log(jonas2.lastName);

//Second way of getting a property from an object is using the bracket
console.log(jonas2['lastName']);//We need to specify a string with the property name 

const nameKey = 'Name'//Repeating part in the property name firstName and lastName
console.log(jonas2['first' + nameKey]);
console.log(jonas2['last' + nameKey]);

//When we need to first compute the property name like in the first and last Name, we use the bracket notation and in any othẻ situation just use the dot notation because it's cleaner and easier to use

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
console.log(jonas2.interestedIn);//Undefined is what we get when we try to access a property that does not exist on an object.

console.log(jonas2[interestedIn]);//Return the value of the property that we have input from the prompt


if (jonas2[interestedIn]) { //Create a custom string whenever user trying to acces a property that does not exist
  console.log(jonas2[interestedIn]);
} else {
  console.log(`Wrong request !Choose between firstName, lastName, age, job, and friends `);
}

//Add new properties to the objects
jonas2.location = 'Portugal';
jonas2['twitter'] = '@jonasschmedtman';
console.log(jonas2);

/*
Challenge : writing this sentence but without hard coding : "Jonas has 3 friends, and his best friend is called Michael"
 so we need to get Jonas,3 and Michael
*/
console.log(jonas2[`first` + nameKey] + ' has ' + jonas2['friends'].length + ' friends, and his best friend is called ' + jonas2.friends[0]);

///////////////////////////////////////
//Object Methods
 const jonas3 = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Steven', 'Peter'],
  hasDriversLicense: true,

  // calcAge : function (birthYear){ // We need a function expression to create this method so we cannot use a function declaration
  //   return 2037 - birthYear
  // }
  
  //In this calcAge function,we can read the birth year directly from this object itself without having to pass it in as a parameter here into this function.
  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear //Using the this keyword will everthing to keep going when we change the object name 
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear // Using the this keyword to create a new properties
    return this.age
  },

  /**
  * Challenge
  * write a method called getSummary and this method should return a string which should summarize the data about Jonas
  * 'Jonas is a 46 year old teacher and he has a driver's license.'
  */

  getSumary : function(){
    return `${this.firstName} is a ${this.calcAge()} year old teacher and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license` 
  }

 }

 console.log(jonas3.calcAge());
 // console.log(jonas3['calcAge'](1991));
 console.log(jonas3.age);

 console.log(jonas3.getSumary());

///////////////////////////////////////
// Iteration: The for Loop

 /*
  The loop statement has three parts.
  The first part is the initial value of a counter
  The second part, is a logical condition that is evaluated before each iteration of the loop.
 */

 // for loop keeps running while condition is TRUE
 for (let rep = 1; rep <= 10; index++) {
  const element = array[index];
  
 }
