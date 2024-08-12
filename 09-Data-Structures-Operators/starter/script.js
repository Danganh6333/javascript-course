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
 
const weekdates = ['mon','tue','wed','thu','fri','sat' , 'sun']

const openingHours1 = { //create a separate object
  //The third enhancement is that we can now actually compute property names instead of having to write them out manually and literally.
  [weekdates[3]]: {
    open: 12,
    close: 22,
  },
  [weekdates[4]]: {
    open: 11,
    close: 23,
  },
  [weekdates[5]] :{
    open: 0, // Open 24 hours
    close: 24,
  },
 }

 
 const restaurant9 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //now, we still want to have the opening hours object inside of the restaurant.

  ////the first enhancement
  openingHours : openingHours1,
 
  
  //the second enhancement to object literals is about writing methods
  
  oder(starterIndex,mainIndex){//So essentially, we create a property just like we do all the other properties and then we set that to a function expression.
    return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  } ,
  
  orderPasta(ing1,ing2,ing3){
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
    
  },
  orderDelivery({
    starterIndex = 2,
    mainIndex = 3,
    time= '20:00',
    address = 'Hanoi'
  }){
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} ad ${time}`);  
  },
  oderPizza(mainIngredients,...otherIngredients){
    console.log(mainIngredients);
    console.log(otherIngredients);
  }
 };
 console.log(restaurant9);
 
///////////////////////////////////////////////////////////////////////////////////
//Optional Chaining (?.)
const restaurant10 = {
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


 //This can get out of hand pretty quickly when we have deeply nested objects with lots of optional properties so it will be too long to check
 if(restaurant10.openingHours  && restaurant10.openingHours.mon) console.log(restaurant10.openingHours.mon.open);//We do actually get an error because the results of this was undefined.And then undefined.open is really an error. So that's the error that we get here. So in order to avoid this error, we would first have to check if this here actually exists.
 
 //if(restaurant10.openingHours.fri) console.log(restaurant10.openingHours.fri.open);
 //There is a better way by using Optional Chaining (?.)
 //With optional chaining, if a certain property does not exist, then undefined is returned immediately.
 console.log(restaurant10.openingHours.mon?.open ); //if the property that is before this question mark here exist then the property will be read from there.But if not, then immediately undefined will be returned
 //And exists here actually means the nullish concept.So, a property exists if it's not null and not undefined.So if it's zero or the empty string, then it still exists

 //here we are testing for both opening hours and for Monday.
 console.log(restaurant10.openingHours.mon?.open);//Monday is optional, and that's why we have the question mark here basically, asking if it exists
 console.log(restaurant10.openingHours?.mon?.open);
  

 //Example 
 //Loop over this array and then log to the console, whether the restaurant is open or closed on each of the days.
 const days = ['mon','tue','wed','thu','fri','sat' , 'sun']
 for (const day of days) {
  console.log(day);
  // restaurant10.openingHours.day //we cannot do this because this is not an actual property name of the object.And so if we want to use a variable name as the property name, we need to use the brackets notation.
  const open = restaurant10.openingHours[day]?.open ?? closed //ask if open exists and set the nullish coalescing operator cause the Saturday
  console.log(`On ${day}, we open at ${open}`);
  //In Sarturday we open at zero and zero is a falsy value.And so therefore it will then trigger this second part of the operator.
 }

 //Check if the methods exist before we call it
 //this optional chaining operator will check if order actually exists.And if it doesn't,well then it will immediately return undefined.And so all of this then returns undefined.
 console.log(restaurant10.oder?.(0,2) ?? 'Method does not exist');

 //Get the name of the first element of this array
 const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
 console.log(users[0]?.name ?? 'User array empty');

 //And without optional chaining,we would have to write something like this.
 if(users.length > 0) console.log(users[0].name); 
 else console.log('User array empty');
 
///////////////////////////////////////////////////////////////////////////////////
//Looping Objects: Object Keys, Values, and Entries
 
const restaurant11 = {
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

 //Looping over property names. And remember they are also called keys.
 
 const properties = Object.keys(openingHours)
 console.log(properties);

 //Compute how many properties are in the object.
 let openStr = console.log(`We are open on ${properties.length}`);
 

 for (const day of properties) {
    openStr += `${day}`  
 }

 console.log(openStr);

 //Looping over property values

 const values = Object.values(openingHours)
 console.log(values);
 
///////////////////////////////////////////////////////////////////////////////////
//Sets

 //sets and maps were introduced in ESX

 //A set is basically just a collection of unique values. So that means that a set can never have any duplicates.

 //Create a set
 const ordersSet = new Set(['Pasta','Pizza','Pizza','Risotto','Pizza'])

 //Set can hold mixed data types.
 console.log(ordersSet); //When we log it out we only see three value that are pasta, pizza and risotto.
 //All the duplicates are actually gone

 /**
  * A set is very different from an array.
  * So first, because its elements are unique.
  * And second, because the order 
  * of elements in the set is irrelevant.
  */

 //We can also pass in a String because a String is iterable 
 console.log(new Set('Jonas'));//now we get a set with these five elements j,o,n,a,s

 console.log(ordersSet.size); //In set,it is size not length like in  array
 console.log(ordersSet.has('Pizza'));//check if a certain element is in a set.
 
 //add new elements to a set.
 ordersSet.add('Garlic Bread') //Only one garlic bread is added
 ordersSet.add('Garlic Bread')

 //Delete element
 ordersSet.delete('Risotto')

 //Retrieve value out of a set
 //There's really no need for getting data out of a set. That's because if all values are unique, and if their order does not matter, then there is no point of retrieving values out of a set.

 //Delete all element 
 //ordersSet.clear()

 //Looping over set 
 for (const order of ordersSet) {
  console.log(order);
 }
 
 //the main use case of sets is to remove duplicate values of arrays.
 //Example 
 const Staff = ['Waiter','Chef','Waiter','Manager','Chef','Waiter']
 const staffUnique = [...new Set(Staff)]//Using spread operator to unpack the set and then these elements will be put into the newly constructed array.
 console.log(staffUnique);

 //Only wanted to know how many different positions there are
 console.log(new Set(['Waiter','Chef','Waiter','Manager','Chef','Waiter']).size);
 
 //Checking how many different letters there are in a string
 console.log(new Set('Jonasschmedtmann').size);
 
///////////////////////////////////////////////////////////////////////////////////
//Maps: Fundamentals
 
 //A map is a data structure that we can use to map values to keys. So, just like an object data is stored in key value pairs in maps.

 //The big difference between objects and maps is that in maps, the keys can have any type but in objects, the keys are basically always strings.
 
 const rest = new Map()
 //here, we pass into arguments.The first is the key name.And then, the name of the restaurant itself.
 rest.set('name','Classico Italiano')
 rest.set(1,'Firenze, Italy')
 console.log(rest.set(2,'Lisbon, Portugal'));
 
 //The fact that the set method actually returns the updated map allows us to change the set method like this.
 rest.set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open',11).set('close',23).set(true,'We are open').set(false,'We are close')//calling the set method returns the updated map And so, we can call set again on that map. And, we can continue this even further

 //read data from a map
 console.log(rest.get('name'));//Pass the name of the key
 console.log(rest.get(true));
 console.log(rest.get(1));
 
 const time = 21
 rest.get(rest.get(time > rest.get('open') && time < rest.get('close') )) //Checking if the time is between 23 and 11 and by using the boolean key we can log out the value of the true and false key

 //Check if the map contain a certain key
 console.log(rest.has('categories'));

 //Delete from the map by using the key 
 rest.delete(2)

 //remove all the elements from the map
 //  rest.clear()
 console.log(rest);
 console.log(rest.size);

 //Using array or objects as map key
 const arr2 = [1,2]
 rest.set(arr2,'Test')
 rest.set(document.querySelector('h1','Heading')) //Using the document.querySelector as an object 

 console.log(rest.get(arr));

 // rest.set([1,1],'Test')
 ///console.log(rest.get[1,1]);//Eventhough both array are [1,1] but they are not the same object in the heap so we cannot log out the value from array key like this
  
///////////////////////////////////////////////////////////////////////////////////
//Maps: Iteration
 
const restaurant12 = {
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

 //Before we would have used the set method but now we can specify an array 
 const question = new Map([
  //in each of these arrays, the first position is gonna be the key. And the second position is gonna be the value.
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],//The correct answer
  //The result 
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

 //Convert object to map
 const hoursMap = new Map(Object.entries(openingHours))
 console.log(hoursMap);

 //Quiz App 
 //Log out the question
 console.log(question.get('question'));
 
 // restructure into two separate variables.
 for (const [key,value] of question) { //The only difference is that for the object, we needed object.entries. And that's just because the object is not an iterable
  if(typeof key == 'number') console.log(`Answer ${key} : ${value}`); //print an element if the key is a number
}
 //Answer 
 const answer = Number(prompt('Your answer'))//Convert prompt into number
 console.log(answer);
 
 console.log(question.get(question.get('correct') == answer))//The question.get('correct') == answer will return a boolean and the question.get will be true or false
 
 //Convert map to array
 console.log([...question]);

 console.log([...question.keys()]);//All the key
 console.log([...question.values()]);//All the map 

///////////////////////////////////////////////////////////////////////////////////
//Summary: Which Data Structure to Use?

 /**
  * ### Summary: Choosing the Right Data Structure

**Sources of Data:**
1. **Program Source Code:** Hard-coded data like status messages.
2. **User Interface:** Data from forms or DOM elements (e.g., tasks in a todo app).
3. **External Sources:** Data from web APIs (e.g., weather, movies, currency rates).

**JavaScript Data Structures:**
1. **Arrays:**
   - **Use for:** Simple lists of values, preserving order, allowing duplicates.
   - **Advantages:** Extensive array methods for data manipulation.
   - **Example:** Array of recipe objects.

2. **Sets:**
   - **Use for:** Collections of unique values.
   - **Advantages:** Faster performance for operations like searching and deleting. Useful for removing duplicates.
   - **Note:** Not meant to replace arrays, but complement them when dealing with unique items.

3. **Objects:**
   - **Use for:** Key-value pairs where keys are typically strings.
   - **Advantages:** Easy to write and access data using dot or bracket notation. Good for storing functions as methods.
   - **Common Use:** Handling JSON data.

4. **Maps:**
   - **Use for:** Key-value pairs with keys of any data type, requiring efficient performance.
   - **Advantages:** Better performance for key-value storage, easy to iterate, compute size.
   - **Note:** Not ideal for functions or methods as values.

**Additional Data Structures:**
- **WeakSets and WeakMaps:** Advanced structures for handling collections with automatic garbage collection.
- **Other Structures:** Stacks, queues, linked lists, trees, hash tables (not built into JavaScript, but used in programming).

**Conclusion:**
- Use **arrays** for ordered lists with possible duplicates.
- Use **sets** for collections of unique values and performance optimization.
- Use **objects** for simple key-value storage, especially when working with JSON or methods.
- Use **maps** for advanced key-value pairs, especially with non-string keys and performance needs.

This overview helps in selecting the appropriate data structure based on data requirements and operations.
  */

///////////////////////////////////////////////////////////////////////////////////
// Working With Strings - Part 1

 const airline = 'TAP Air Portugal'
 const plane = 'A320'

 console.log(plane[0]);
 console.log('B737',[0]); //String is iterable too
 
 console.log(airline.length);// read the length property of strings
 console.log('B737'.length);
 
 console.log(airline.indexOf('r')); //get the position in which a certain letter is in the string but this here will only give us the first occurrence
 console.log(airline.lastIndexOf('r'));//So we use lastIndexOf

 console.log(airline.indexOf('portugal'));//This is case sensitive.So if I search with lowercase, then we get minus one because this can now not be found in this airline's string.

 //extract part of a string
console.log(airline.slice(4));//this 4 here is the position at which the extraction will start.
 //Four here is the A in Air 
 console.log(airline.slice(4,7));//Specify an end parameter so that the end value is actually not included in the string 
 ///The length of the extracted string is always going to be end minus beginning

 //

 // it's actually impossible to mutate strings 
 //if we wanted to use this string now we would have to store it first into some variable or some data structure.
 //So all the method always return a new string
 
 console.log(airline.slice(0,airline.indexOf('')));//Extract till the space blank
 console.log(airline.slice(0,airline.lastIndexOf('')));//Extract till the last space blank

 console.log(airline.slice(-2));//This will extract from the end of the array
 console.log(airline.slice(1,1));

 const checkMiddleSeat = function(seat){
 //In small planes, like the A320, or the Boeing 737, we only have six seats in one row. And that means that B and E are the middle seats.
  const s = seat.slice(-1)//Taking the last value
  if(s === 'B' || s === 'E') console.log('You got the millde seat :(');
  else console.log('You got lucky');
  //Whenever we call a method on a string,JavaScript will automatically behind the scenes convert that string primitive to a string object with the same content.
  //this process is called boxing because it basically takes our string and puts it into a box which is the object.
 }
 checkMiddleSeat('11B')
 checkMiddleSeat('23C')
 checkMiddleSeat('3E')

 console.log(typeof new String('jonas'));//This is a object
 console.log(typeof new String('jonas').slice(1));//This is a string
 
///////////////////////////////////////////////////////////////////////////////////
// Working With Strings - Part 2
 
 const airline1 = 'TAP Air Portugal'

 //changing the case of a string.
 console.log(airline1.toLowerCase());
 console.log(airline1.toUpperCase());
 
 //fix the capitalization in a name
 const passenger = 'jOnAS' 
 const passengerLowerCase = passenger.toLowerCase() //Turn the string to lower case
 const passengerCorrect = passengerLowerCase[0].toUpperCase() + passengerLowerCase.slice(1) //Turn the first element into uppercase and add the rest of the string starting fron 1
 console.log(passengerCorrect);

 //Comparing Email
 const email = 'hello@jonas.io'
 const loginEmail = 'Hello@Jonas.io \n'
 
 const lowerCase = loginEmail.toLowerCase()
 const trimmedEmail = loginEmail.trim()//Cutting the white space of ' \n'
 console.log(trimmedEmail);
 console.log(email === trimmedEmail);

 //replacing
 const priceGB = '288,97£'
 const priceUS = priceGB.replace('£','$').replace(',','.') //replace the pound with the dollar sign and the coma with the period
 console.log(priceUS);

 //we can also replace entire words, not just single characters
 const anouncement = 'All passengers come to barding door 23. Boarding door 23'
 //replace creates a brand new string so it doesn't mutate the original one and it is case sensitive
 console.log(anouncement.replace('door','gate'));//this only replace the first occurrence of this door string
 
 //We are just gonna use a very simple regular expression to tell the replace method that it should actually target all the occurrences
 console.log(anouncement.replace(/door/g,'gate')); //g mean global 

 //Boolean 
 //three simple methods that return booleans.
 const plane1 = 'A320neo'
 console.log(plane1.includes('Boeing'));
 console.log(plane1.startsWith('Airb'));

 //check if the current plane is part of the new airbus family.
 if(plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
 }
 
 //check if the baggage officer and passenger is basically allowed to be checked-in.
 const checkBaggage = function(items){
   //when we receive input from a user, we usually always start by putting everything into lower case
  const baggage = items.toLowerCase()
  if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('You are not allowed');
    
  }else{
    console.log('Ok,you can go');
    
  }
 }
 checkBaggage('I have a laptop,some food and a pocket Knife')
 checkBaggage('Socks and camera')
 checkBaggage('Got some snacks and a gun for protection')

///////////////////////////////////////////////////////////////////////////////////
// Working With Strings - Part 3

 //split allows us to split a string into multiple parts based on a divider string

 console.log('a+very+nice+string'.split('+'));
 console.log('Jonas Schmedtmann'.split(''));

 const [firstName, lastName] = 'Jonas Schmedtmann'.split('')
 
 //we want to start with Mr. and then the last name in uppercase
 const newName = ['Mr.',firstName,lastName.toUpperCase()].join('') //We then join the array into a string with the ' ' space

 const capitalizeName = function(name){
  const names = name.split(' ')
  const namesUpper = []
  for (const n of names) { 
      //namesUpper.push(n[0].toUpperCase() + n.slice(1))
      //Different way
      namesUpper.push(n.replace(n[0],n[0].toUpperCase()))
  }
  console.log(namesUpper.join(' '))
}
 capitalizeName('jessica ann smith davis')
 capitalizeName('jonas schmedtmann')
 
 //padding a string means to add a number of characters to the string until the string has a certain desired length.
 const message = 'Go to gate 23'
 console.log(message.padStart(2,'+'));//we want it to be 25 characters long,And then the character that we want to pad the string with at the start.
 console.log(message.padEnd(2,'+').padStart(2,'+'));

 //Masking the last four digit of the Credit card
 const maskedCreditCard = function(number) {
  // const str = new String()
  const str = number + '' //Turn the number to a string
  const last = str.slice(-4) //Gettign the 4 last digits
  return last.padStart(str.length,'*')

 }

 console.log(maskedCreditCard(43454746434423));//**********4423
 console.log(maskedCreditCard(344224649464543));

 //Repeat the same string 
 const message3 = 'Bad weather... All departures Delayed...'
 console.log(message3.repeat[3]);//Repeat 3 times

 const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);//Repeat the plane emoji n times
 }
 planesInLine(8)
 planesInLine(8)
 
///////////////////////////////////////////////////////////////////////////////////
// String Methods Practice

const flights2 =
  `_Delayed_Departure;fao93766109;txl2133758440;11:25
  +_Arrival;bru0943384722;fao93766109;11:45
  +_Delayed_Arrival;hel7439299980;fao93766109;12:05
  +_Departure;fao93766109;lis2323639855;12:30`;

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights2.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}

