'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

 //this is a function and it will accept two parameters,one index for the starter menu and one index for the main menu.And then the person will order basically by giving the index for eat of the menus
  oder: function(starterIndex,mainIndex){
    return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  } ,

  orderDelivery : function({starterIndex = 2,mainIndex = 3,time= '20:00',address = 'Hanoi'}){
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} ad ${time}`);  
  }


};

///////////////////////////////////////////////////////////////////////////////////
//Destructuring Arrays

const restaurant1 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

 //this is a function and it will accept two parameters,one index for the starter menu and one index for the main menu.And then the person will order basically by giving the index for eat of the menus
  oder: function(starterIndex,mainIndex){
    return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  } ,
 };

 //The theme of this section will be to simulate a foot delivery application

 /**
  * Destructuring is an ES6 feature
  * and it's basically a way of unpacking values
  * from an array or an object into separate variables.So in other words destructuring
  * is to break a complex data structure down into a smaller data structure like a variable.
  */
 
 const arr1 = [3,2,3]
 //if we wanted to retrieve each one into its own variable without destructuring,we would do it like this.
 const a = arr1[0]
 const b = arr1[1]
 const c = arr1[2]

 //With destructuring, we can actually declare all the three variables at the same time.
 const [x,y,z] = arr1 //This looks like an array, but it's really not.It's just the destructuring assignment.
 console.log(x,y,z);
 console.log(arr1);
 
 const [first,second] = restaurant1.categories //This will just take the first and the second
 const [first1,,second1] = restaurant1.categories //This will just take the first and the third by leaving a hole in the destructuring operator 
 console.log(first,second);
 console.log(first1,second1);

 //For example, let's say that the owner of the restaurant now decided to switch the main and the secondary category.So right now the primary is Italian and the secondary is vegetarian but now they wanted to switch it.
 
 //If we were to like to switch these two variables,then without destructuring,we would have to do it like this.

 let [main,secondary] = restaurant1.categories

 //const temp = main  //create a temporary variable and then we would assign one of them
 //main = secondary //And then we could switch to main
 //secondary = temp //then secondary is equal to temp because that's where we temporarily stored the value of main
 //We could not just do main equal secondary and then secondary equals main because by then we would already have overwritten the main variable
 console.log(main,secondary);
 

 //With destructuring we can make it a lot easier.
 [main,secondary] = [secondary,main] //creating a new array with the two variables inverted.So first secondary and then main, and then we can simply destuct them.
 console.log(main,secondary);
 
 //This is how we basically receive two return values from a function.

 const [starter,mainCourse] = restaurant1.oder(2,2);
 console.log(starter,mainCourse);
 
 //Nested destructuring
 //with nested, we mean one array inside another 
 const nested = [2,3,4,[3,2]]
 //  const [i,,j] = nested
 //  console.log(i,j);

 //what if we actually wanted all the individual values of the array inside another
 const [i,,,[j,k]] = nested
 console.log(i,j,k);

 //Default value 
 const [p = 1,q=1,r=1] = [8,9]
 console.log(p,q,r);
 
///////////////////////////////////////////////////////////////////////////////////
//Destructuring Objects

const restaurant2 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  oder: function(starterIndex,mainIndex){
    return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  } ,

  /**So many times in JavaScript,we have functions with a lot of parameters.
   * But then it can be hard to know the order of parameters
   * or someone that is using this function.And so instead of defining the parameters manually,
   * we can just pass an object into the function as an argument,and the function will then immediately destructure
   * that object. */

  //  orderDelivery : function(obj){
  //   console.log(obj);
  // }

  orderDelivery : function({
    starterIndex = 2,
    mainIndex = 3,
    time= '20:00',
    address = 'Hanoi'
  }){
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} ad ${time}`);  
  }
 };

 //To destructure objects we use the curly braces.Then all we have to do is to provide the variable names that exactly match the property names that we want to retrieve from the object
 //In an object, the order of elements does not matter, we don't need to manually skip elements like we did in an array.
 
 //what we just did was to call this function here and passing in an object of options.
 restaurant2.orderDelivery({
  time : '22:30',
  address : 'Via del Sole ,21',
  mainIndex : 2,
  starterIndex :2
 })

 restaurant2.orderDelivery({
  address : 'Via del Sole ,21',
  starterIndex :2
 })

 const {name,openingHours,categories} = restaurant2 //this now creates three brand new variables that based on this restaurant object
 console.log(name,openingHours,categories);

 //When we wanted the variable names to be different from the property names
 const {
  name : restaurantName,
  openingHours : hours,
  categories : tags
 } = restaurant2
 console.log(restaurantName,openingHours,tags); //the variables that we now created are called restaurantName, hours and tags

 /**
  * It can be really useful to have default values for the case that we're trying to read a property that does not exist on the object.
  * So usually then we get an undefined.For example if we were trying to say restaurant.menu, this would be undefined
  * because there is no property called menu in the object.And so we can set default values just like we can actually in arrays.
  * */

 const {menu = [] ,starterMenu: starters = []} = restaurant2 //So starterMenu does exist. And so therefore this default value will not apply, but it should apply to menu.
 
 //Mutating varriables
 let d = 111
 let e = 999
 const obj = {d : 23,e : 7, g : 14}; //This line need a ;
 ({d,e} = obj);
 console.log(d,e);

 /**
  * we wanted to create two variables,open and close.And these should contain the open and close hours for Friday.
  * So you see that opening hours is an object.And then in that object, we have another object. 
  * So this Friday is an object inside an object,which itself is inside the restaurant object
  * */
 const {fri : {open : op,close : cl }} = openingHours
 console.log(op,cl);
 
///////////////////////////////////////////////////////////////////////////////////
//The Spread Operator (...)

const restaurant3 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  oder: function(starterIndex,mainIndex){
    return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  } ,

  orderPasta : function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
    
  },

  orderDelivery : function({
    starterIndex = 2,
    mainIndex = 3,
    time= '20:00',
    address = 'Hanoi'
  }){
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} ad ${time}`);  
  }
 };

 //we want to create a new array based one this array but with some new elements at the beginning.
 const arr = [8,2,1]
 const badNewArr = [2,3,arr[0],arr[1],arr[2]]

 const newArr = [1,2, ...arr]//what the spread operator does is to take all the values out of this arr array, and then write them individually as if we wrote seven, eight, nine here manually.
 console.log(newArr);

 //We can use the spread operator whenever we would otherwise write multiple values separated by commas. And that situation happens whenever we write an array literal like we did up here.

 console.log(...arr); //If we use the spread operator to expand the new array,It logged the individual elements of the array.So this would be the same as writing one, two, seven, eight, nine individually.
 
 //whenever we need the elements of an array individually,then we can use the spread operator.

 // In this example, we will create an array with one more food item in the main menu array.So that main menu is here at restaurant.mainMenu

 const newMenu = [...restaurant3.mainMenu,'Gnocci']//we are writing a new array but simply expanding this array, and then adding another element to it.
 console.log(newMenu);
 
 //the big difference from destructuring is that the spread operator takes all the elements from the array and it also doesn't create new variables

 //Create shallow copies of arrays
 const mainMenuCopy = [...restaurant3.mainMenu]

 //Join 2 arrays
 const menu1 = [...restaurant3.mainMenu,...restaurant3.starterMenu]
 console.log(menu1);
 
 //The spread operator works on all so-called iterables.

 //iterables are things like all arrays, strings, maps, or sets, but not objects.

 //Use the spread operator on a string

 const str = 'Jonas'
 const letters = [...str,'','s']
 console.log(letters);

 //We cannot use the spread operator to build a string using a template literal.
 //  console.log(`${...str} Schmedtmann`);

 const ingredients = [ //building an array of the three ingredients.
  prompt('Let\'s make pasta! ingredient 1?'),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
 ]
 console.log(ingredients);

 restaurant3.orderPasta(ingredients[0],ingredients[1],ingredients[2]) //The old way
 restaurant3.orderPasta(...ingredients) //The new way

 //Since ES 2018, the spread operator actually also works on objects, even though objects are not iterables.

 const newRestaurant = {foundedIn : 1998,...restaurant3,founder:'Guiseppe'}
 console.log(newRestaurant);
 
 //Create shallow copies of objects
 const restaurantCoyp = {...restaurant3}
 restaurantCoyp.name = 'Ristorante Roma'
 console.log(restaurantCoyp.name);
 console.log(restaurant3.name);
 
///////////////////////////////////////////////////////////////////////////////////
//Rest Pattern and Parameters

const restaurant4 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  oder: function(starterIndex,mainIndex){
    return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  } ,

  orderPasta : function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
    
  },

  orderDelivery : function({
    starterIndex = 2,
    mainIndex = 3,
    time= '20:00',
    address = 'Hanoi'
  }){
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} ad ${time}`);  
  },

  oderPizza : function(mainIngredients,...otherIngredients){
    console.log(mainIngredients);
    console.log(otherIngredients);
  }


 };

 /**
  * Rest pattern looks exactly like the spread operator.So it has the same syntax with the three dots but it actually does the opposite of the spread operator
  * Rest pattern collect multiple elements and condense them into an array
  * The spread operat or is to unpack an array while rest is to pack elements into an array
  * */

 //1)DESTRUCTURING

 //Spread because on the right side of the assignment operator(=)
 const arrSpread = [1,2,...[1,4]]

 //We can also use it on the left hand side of the assignment operator together with destructuring

 //Here it is the rest syntax because it's on the left hand side of the assignment operator(=)
 const [o1,o2,...others] = [1,2,3,4,5]
 console.log(o1,o2,others);//the first and the second elements become this first and second variables, but then here comes the rest pattern and so it's called rest because it will take the rest of the elements to be be put in a new array.

 //Use the three dots on both sides of the assignment operator.
 //we get the string pizza the string risotto and then all the rest of the elements that we didn't select previously into their own variables and note here that the rest syntax collects all the array after the last variable.so it does not include any skipped elements and so it's really just the rest of the elements
 const [pizza,,risotto,...otherFood] = [...restaurant4.mainMenu,restaurant4.starterMenu]

 //const [pizza,,risotto,...otherFood,bread] = [...restaurant4.mainMenu,restaurant4.starterMenu]// The rest element must be the last element and there can only ever be one rest in any destructuring assignment
 
 //Objects 
 const {sat, ...weekdays} = restaurant4.openingHours
 console.log(weekdays);//It is an object only containing Friday and Thursday, that's because we already took Saturday into its own variable before and so this then collected the rest of the properties into its own new object.
 
 //2)FUNCTIONS
 const add = function (...numbers) { //rest parameters.
    let sum = 0
    for (let i = 0; i < numbers.length; i++) sum += numbers[i] //add the current number to the current sum value 
    console.log(numbers);
    console.log(sum);
 }
 //the rest syntax is taking multiple numbers or multiple values and then packs them all into one array
 add(2,3)
 add(2,3,5,3)
 add(2,2,4,5,2,1,2)

 //take these values here and call the add function with these three values
 const h = [23,2,1]
 add(...h)// here we unpacked the values and then pack them back again into an array in the add function 

 restaurant4.oderPizza('Ketchup','onion','olives','spinach'); //we get mushrooms, which is this first ingredient here and then we get an array of all the remaining ingredients that we passed in
 restaurant4.oderPizza('Mushroom') //The remaining arguments here will simply be put in an empty array because of course there are none and so there is nothing to collect into the array but we still get an empty array that we can work with if we want
 
 //The spread operator is used where we would otherwise write values, separated by a comma.
 //The rest pattern is basically used where we would otherwise write variable names separated by commas.

///////////////////////////////////////////////////////////////////////////////////
//Short Circuiting (&& and ||)

const restaurant5 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  oder: function(starterIndex,mainIndex){
    return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  } ,
  orderPasta : function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
    
  },
  orderDelivery : function({
    starterIndex = 2,
    mainIndex = 3,
    time= '20:00',
    address = 'Hanoi'
  }){
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} ad ${time}`);  
  },
  oderPizza : function(mainIngredients,...otherIngredients){
    console.log(mainIngredients);
    console.log(otherIngredients);
    
  }
 };

 //In the the OR operation,the result is true, if at least one operand is true.So if the first operand is already true,then JavaScript doesn't even have to look at the other values because the result of the expression will already be true anyway
 console.log(3 || 'Jonas');//Here we used two values that are not Booleans And it then returned a value that was not a Boolean and that is 3 
 console.log('' || 'Jonas'); //This return Jonas
 console.log(true || 0);//This return true
 console.log(undefined || null); //This return null even though boths are falsy values

 console.log(undefined || 0 || '' || 'Hello' || 23 || null);
 
 console.log('----OR-----');
 
 /**
  * three properties about logical operators.
  * First, they can use any data type. They can return any data type and they do something called short circuiting, or as we also call it short circuit evaluation.
  * 
  * In the case of the OR operator, short circuiting means that if the first value is a truthy value, it will immediately return that first value.So again, if the first operand is truthy here in the OR operator,then the other operand will not even be evaluated.
  * */
 
 restaurant5.numGuest = 23 //If we set this to 0 then this will not work
 const guests1 = restaurant5.numGuest ? restaurant5.numGuest : 10 //Let's say that there might be a property on the restaurant object with the number of guests.But again, we don't know if it exists.However, we want to basically define a variable based on this number of guests. And we want to set a default value if this doesn't exist
 console.log(guests1);

 const guests2 = restaurant5.numGuest || 10 //this is a way easier method of setting default values than having to deal with this ternery operator or even worse an if else statement
 console.log(guests2);

 console.log('----AND-----');

 console.log(0 && 'Jonas');//when the first value is falsy and then immediately returns that falsy value without even evaluating the second operand.
 console.log(7 && 'Jonas');//when it is truthy, it means that the evaluation continues and then simply the last value is returned.
 
 
 console.log('Hello' && 23 && null && 'jonas');//Null is a falsy value so it's does not continue

 //what we're doing is to basically pretending that we don't know if order pizza exists. And so we first check if it exists and only then we execute it.
 if(restaurant5.oderPizza){
  restaurant5.oderPizza('mushroom','spinach ')
 }

 restaurant5.oderPizza && restaurant5.oderPizza('mushroom','spinach') //if restaurant dot order pizza does not exist, so it's undefined, it will then short circuit the evaluation and nothing else will happen.

 /**
  * let's now summarize.
  * So the OR operator will return the first truthy value of all the operands,
  * or simply the last value if all of them are falsy.
  * 
  * the AND operator will return the first falsy value
  * or the last value if all of them are truthy.
  * 
  * And as for practical applications,
  * we can use the OR operator to set default values,and we can use the AND operator
  * to execute code in the second operand
  */

///////////////////////////////////////////////////////////////////////////////////
//The Nullish Coalescing Operator (??)

 const restaurant6 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  oder: function(starterIndex,mainIndex){
    return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  } ,
  orderPasta : function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
    
  },
  orderDelivery : function({
    starterIndex = 2,
    mainIndex = 3,
    time= '20:00',
    address = 'Hanoi'
  }){
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} ad ${time}`);  
  },
  oderPizza : function(mainIngredients,...otherIngredients){
    console.log(mainIngredients);
    console.log(otherIngredients);
  }
 };

 //nullish coalescing operator.It's an operator that was introduced in ES2020

 restaurant6.numGuest = 0 
 const guests3 = restaurant6.numGuest || 10 
 console.log(guests3);//When we set numGuest to 0,then JavaScript will still take the default value and assign it to guests because 0 is a falsy value now, and so therefore, we go to the second operand

 const guestCorrect = restaurant6.numGuest ?? 10 
 console.log(guestCorrect);//We get 0 . It is because the nullish coalescing operator works with the idea or with the concept of nullish values instead of falsy values.And nullish values are null and undefined.
 
///////////////////////////////////////////////////////////////////////////////////
//Logical Assignment Operators

const restaurant7 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  oder: function(starterIndex,mainIndex){
    return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  } ,
  orderPasta : function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
    
  },
  orderDelivery : function({
    starterIndex = 2,
    mainIndex = 3,
    time= '20:00',
    address = 'Hanoi'
  }){
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} ad ${time}`);  
  },
  oderPizza : function(mainIngredients,...otherIngredients){
    console.log(mainIngredients);
    console.log(otherIngredients);
  }
 };

 //set a default number of guests for all the restaurant objects that do not have that property.
 const rest1 = {
  name : 'Capri',
  numGuest : 20,
 }

 const rest2 = {
  name : 'La Piazza',
  owner : 'Giovanni Rossi'
 }

 rest1.numGuest = rest1.numGuest || 10 //So in the or operator,if the first value is truthy, then that first value will immediately be returned and the second value will not even be evaluated.
 rest2.numGuest = rest2.numGuest || 10

 //the very first logical assignment operator, which is the OR assignment operator.
 //rest1.numGuest ||= 10 //This is a more concise way than  rest1.numGuest = rest2.numGuest || 10
 //rest2.numGuest ||= 10 //this variable is currently falsy and so it will be assigned the value of 10.


 //the second logical assignment operator, which is the Nullish assignment operator.
 rest1.numGuest ??= 10 
 rest2.numGuest ??= 10

 rest1.owner = rest1.owner && '<ANONYMOUS>'
 rest2.owner = rest2.owner && '<ANONYMOUS>'
 
 
 //the third logical assignment operator, which is the AND assignment operator.
 //what the logical and assignment operator does is to assign a value to a variable if it is currently truthy.
 rest1.owner &&= '<ANONYMOUS>'
 rest2.owner &&= '<ANONYMOUS>'

 console.log(rest1);
 console.log(rest2);
 

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
 };

 const [players1,players2] = game.players
 console.log(players1,players2);

 const [gk,...fieldPlayers] = players1
 console.log(gk,fieldPlayers);

 const allPlayers = [...players1,...players2]
 console.log(allPlayers);

 const players1Final = [...players1,'Thiago', 'Coutinho','Perisic']
 console.log(players1Final);

 const {
  team1, x : draw, team2
 } = game.odds

 console.log(team1,draw,team2);
 
 //abitrary mean any number 
 const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
 };

 printGoals(...game.scored); 
 
 team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

///////////////////////////////////////////////////////////////////////////////////
//Looping Arrays: The for-of Loop

const restaurant8 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  oder: function(starterIndex,mainIndex){
    return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  } ,
  orderPasta : function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
    
  },
  orderDelivery : function({
    starterIndex = 2,
    mainIndex = 3,
    time= '20:00',
    address = 'Hanoi'
  }){
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} ad ${time}`);  
  },
  oderPizza : function(mainIngredients,...otherIngredients){
    console.log(mainIngredients);
    console.log(otherIngredients);
  }
 };

 const menu2 = [...restaurant8.starterMenu,...restaurant8.mainMenu]

 //the item variable is always the current element in each iteration.
 for (const item of menu2) { //this loop will automatically loop over the entire array and in each iteration, it will give us access to the current array item, which we can specify here.
  console.log(item);
 }

 //print a nice menu and then let's actually add one to it so that we can start the menu at one
 for (const [i,el] of menu2.entries()) { //If the item is now an array we can destructure it.We don't have to manually take element zero and element one,
  console.log(`${i + 1} : ${el}`);
 }

 console.log(...menu2.entries());//This print out out an array, which in each position contains a new array, which contains the element and the index of that elemnent in the original array.

///////////////////////////////////////////////////////////////////////////////////
//Enhanced Object Literals

const restaurant9 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  oder: function(starterIndex,mainIndex){
    return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  } ,
  orderPasta : function(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
    
  },
  orderDelivery : function({
    starterIndex = 2,
    mainIndex = 3,
    time= '20:00',
    address = 'Hanoi'
  }){
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} ad ${time}`);  
  },
  oderPizza : function(mainIngredients,...otherIngredients){
    console.log(mainIngredients);
    console.log(otherIngredients);
  }
 };
 
 
 
