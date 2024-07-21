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
 function logger(){
    console.log('My name is Jonas');
 }


