/**
 * Analogy of noun,adjectives and verbs to make the seperation of HTML,Javascript,CSS
 * HTML represent the nouns 
 * CSS  represent the adjectives
 * Javascript represent the verbs
 */

let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas" //This is what we call declaring a value
let first = "Matilda"
let PI = 3.1415

/**
 * Imagine a variable as a box, so a box can hold some object and we 
 * can write a label to describe what's in it and we can find the object when we need it 
 * by using that label 
 */

console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

/**
 * CONVENTION AND RULES FOR NAMING VARIABLES 
 * 
 * camelCase : Write the first word with a lowercase and the next words with the uppercase
 * underscore : Write the underscore between word 
 * 
 * The dollar signs are allow to use in namming variable
 * Word starting with an uppercase should be reserved for namming object,
 * Variables that are all in uppercase are reserved for constant which will never change
 * Make sure variable name is descriptive
 */

/**
 * THE 7 PRIMITIVE DATA TYPES 
 * 
 * Number : Floating point numbers,used fpr decimals and integers
 * String : Sequence of characters,used for text
 * Boolean : Logical type that only be true of false,used for taking decisions
 * Undefined : Value taken by a variable that is not yet defined('empty value'),variable declare without assigning a value
 * Null : Also means 'empty value'
 * Symbol (ES2015) : Value that is unique and cannot be changed
 * BigInt (ES2020) : Larger integers than Number type can hold
 */

/**
 * Javascript has dynamic typing : Value has type, not varribable 
 */


// Ctrl + / to comment 

//Javascript programs are executed from top to bottom

//typeof  : operator to show the type of a value

console.log(typeof true);
console.log(typeof 23);
console.log(typeof "Gudjdmddjdojsjdsjsjo");

//Dynamic typing : we can change the type of value that is hold by a varriable 

//Undefined are both the value and the type

//Type of null is a object

/**
 * Three different ways of declaring value in Javascript
 * let : Can change the value of the varriable later
 * const : It is use to declare varriables that aren't supposed to change at any point in the future,should have a initial value
 * var : Should be avoided,can change the value of the varriable later
 */

lastName = "Johan" //This should not be use,it will create a property on the global object 
console.log(lastName);

/////////////////////////////////////////////////
//Basic Operator
 /**
 * Operator : It allows us to transform values of combine mutiple values,...
 * Many categories of operators : mathematical operators, comparison operators, logical operators, assignment operator,...
 */

 //Math operator
 const now = 2037
 const ageJonas = now - 1991
 const ageSarah = now - 2018
 console.log(ageJonas, ageSarah);

 console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);
 // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

 // concatenate : link (things) together in a chain or series
 const firstName1 = 'Jonas'
 const lastName1 = 'Schmedtmann'
 console.log(firstName1 + ' ' + lastName1);

 //Assignment operator
 let x = 10 + 5 // 15
 x += 10; // x = x + 10
 x *= 4; // x = x * 4 
 x++ // x = x + 1
 x-- // x = x - 1
 console.log(x);

 //Comparison operators 
 console.log(ageJonas > ageSarah); // >, <, >=,<=
 console.log(ageSarah >= 18);

 const isFullAge = ageSarah >= 18

 console.log(now - 1991 > now - 2018); //Why is the subtraction is executed beofore the comparision operator 

/////////////////////////////////////////////
//Operator Precedence

 /**
 * Operation Precedence determines how operators are parsed concerning each other. Operators with higher 
 * precedence become the operands of operators with lower precedence.
 */

 // Parenthesis sign : ( )

/////////////////////////////////////////////
// String and template literals
 const firstName2 = 'Jonas'
 const job = 'teacher'
 const birthYear = 1991

 const year1 = 2037

 const jonas = "I'm " + firstName2 + ', a ' + (year1 - birthYear) + ' years old ' + job + '!'

 console.log(jonas);

 const jonasNew = `I'm ${firstName2}, a ${year1 - birthYear} year old ${job}`
 console.log(jonasNew);

 console.log("String with \n\
 multiple\n\
 lines");

 console.log(`String 
 multiple 
 line`);

////////////////////////////////////////
// Taking Decisions : if/else Statements
 /**
 * if(condition){
 *     blocks 1
 * }
 * What ever we write into the blocks, which is denoted by the curly brace
 * will be executed whenever the condition that's here is true
 */
 const age = 15;

 if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
 } else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
 }

 const birthYear3 = 2012;

 let century;
 if (birthYear3 <= 2000) {
    century = 20;
 } else {
    century = 21;
 }
 console.log(century);

////////////////////////////////////////
//Type Conversion and Coercion

 /**
 * Type Conversion : When we manually convert from one type to another 
 * Type Coercion : When Javascript automatically converts type behind the scence
 */

 //Type conversion
 const inputYear = '1991'
 console.log(inputYear + 18,Number(inputYear) + 18);//199118,2009

 console.log(Number(inputYear),inputYear);//1991,"1991"

 console.log(Number('Jonas'));//NaN

 console.log(typeof NaN); //number

 //Type coercion
 console.log('I am ' + 23 + ' year old');//plus operator triggers a coercion to strings
 console.log('23' - '10' - 3);// minus operator triggers a coercion to Number
 console.log('23' * '2');//multiplier operator triggers a coercion to Number
 console.log('23' / '2');//dividing operator triggers a coercion to Number

////////////////////////////////////////
//Truthy and Falsy Values

 // 5 falsy values: 0, '', undefined, null, NaN
 console.log(Boolean(0));//false

 console.log(Boolean(undefined));//false

 console.log(Boolean('Jonas'));//true

 console.log(Boolean({}));//true

 console.log(Boolean(''));//false

 //Checking if the varriable ís define or not
 let height;
 if(height){
    console.log('YAY! Height is defined');
 }else{
    console.log('Height is undefined');
 }

////////////////////////////////////////
//Equality Operators: == vs. ===
 const age3 = 18
 
 if (age === 18) console.log('You just became an adult :D (strict)');

 if (age == 18) console.log('You just became an adult :D (loose)');
 
 /**
  * The one with the triple equal is called the strict equality operator,it does not perform type coercion
  * The one with the two equal is called the loose equality operator,it dóes type coercion
  */
 
 //Avoid the loose equality operator as much as you can

 const favourite = Number(prompt("What's your favourite number"))
 console.log(favourite);
 console.log(typeof favourite);

 if(favourite === 23) console.log("Cool! 23 is an amazing number");

////////////////////////////////////////
//Boolean Logic
 
 //Boolean Logic ís aa branch of computer science which use true and false values to solve complex logical problems

 /**
  *               A AND B
  *  ----------------------------------
  *  | AND    | TRUE    | FALSE        |
  * -----------------------------------
  *  | TRUE   | TRUE    | FALSE        | 
  *  -----------------------------------
  *  | FALSE  | FALSE   | FALSE        |
  *  -----------------------------------
  * 
  *               A OR B
  *  ----------------------------------
  *  | AND    | TRUE    | FALSE        |
  * -----------------------------------
  *  | TRUE   | TRUE    | TRUE         | 
  *  -----------------------------------
  *  | FALSE  | TRUE    | FALSE        |
  *  -----------------------------------
  *   
  *   NOT A,NOT B inverrt true/false value 
  */
 
////////////////////////////////////////
//Logical Operators
 const hasDriversLicense = true; //A
 const hasGoodVision = false;//B

 console.log(hasDriversLicense && hasGoodVision); //false
 console.log(hasDriversLicense || hasGoodVision); //true
 console.log(!hasDriversLicense);// false

 const isTired = false
 if(hasDriversLicense && !hasGoodVision && !isTired){
    console.log('Sarah is able to drive!');
 }else{
    console.log("Someone else should drive...");
 }

////////////////////////////////////////
//The switch Statement
 const day = 'monday'

 switch(day){
    case 'monday' : //day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break
    case 'tuesday' :
        console.log('Prepare theory video');
        break
    case 'wednesday' :
    case 'thursday':
        console.log('Write code examples');  
        break   
    case 'friday':   
        console.log('Record videos');
        break
    case 'saturday' :
    case 'sunday' :
        console.log('Enjoy the weekend');
        break
    default :
        console.log('Not a valid day');
 }

////////////////////////////////////////
//Statements and Expressions

 //Expression is a piece of code that produce a value(exp: 3,4 + 9,true && false && !false),string is a expression

 //Statements perform action or a command

////////////////////////////////////////
//JavaScript Releases: ES5, ES6+ and ESNext

 /**
 * 1995 - Bendan Eich create the first version of Js in 10 days.It was call Mocha
 * 1996 - Mocha was renamed to Livescript and the to Js to attract Java developers.Microsoft launches IE,copying Js from Netscape 
 * and calling it JScript
 * 1997 - ECMA releases ECMAScript 1(ES1),the first officical standard for Js cause we need to standardize the language
 * 2009 - ES5 release
 * 2015 - ES6 was released,ECMAScript changes to anual release cycle in order to ship less features per update
 */

 //Backward Compatibility : Js engines nowadays is able  to understand old code written 25 years ago, there's almost nothing remove from the language, but only added in new versions

 /**
  * How we can use the modern Js 
  * During development : simple use the latest google version
  * During production : Use babel to transpile and polyfill your code 
  */