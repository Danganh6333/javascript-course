'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////
//Simple Array Methods

 //arrays are objects, and that they get access to special built in methods that we can essentially see as tools for arrays

 let arr = ['a','b','c','d','e'] 
 //with the slice method, we can extract part of any array, but without changing the original array.
 console.log(arr.slice(2));//When we say two here, we should start extracting here at C, and then all the way to the end. And then this slice method will return a new array.
 console.log(arr.slice(2,4));//the end parameter here is not included in the output. And so the length of the output array right here will be the end parameter minus the beginning parameter 
 console.log(arr.slice(-2));//minus 2 will basically take the last two elements of the array
 console.log(arr.slice(-1));//Get the last element of the array 
 console.log(arr.slice(1,-2));//extracting at position one and take everything except the last two 
 
 //Create a shallow copy of an array
 console.log(arr.slice());
 //We can also create a shallow copy of an array by using the spread operator
 console.log([...arr]);

 //The difference of splice with slice is that it does actually change the original array
 console.log(arr.slice(2));//The same as console.log(arr.slice(2)); 
 console.log(arr);

 //Remove the last element
 arr.splice(-1)

 arr.splice(1,2)//So this first parameter here works the same as in the slice method but the second one is really the number of elements that we want to delete.
 console.log(arr);
  
 //Reverse mutate the original array 
 let arr2 = ['a','j','k','e','b'] 
 console.log(arr2.reverse());
 console.log(arr2);

 //Concatenate the array does not mutate the original array
 const letters = arr2.concat(arr2)
 //We can also do thís to concatenate the array
 console.log([...arr],[...arr2]);
 
 console.log(letters.join('-'));
 
///////////////////////////////////////////////////////////////////////////////////
//The new at Method

 const arr3 = [23,11,64]
 //Before if we wanted to take one of the values out of the array
 console.log(arr3[0]);

 //Now with the new At Method, we can do the exact same thing using a method.
 console.log(arr3.at(0));

 //the last element of the array.
 console.log(arr[arr.length - 1]);
 console.log(arr.slice(-1)[0]);//We create a new array from the last array with the slice then we take the position 0 of that new array
 console.log(arr.at(-1));
 
 //The at method also work on string
 console.log('jonas'.at(0));
 
///////////////////////////////////////////////////////////////////////////////////
//Looping Arrays: forEach

/**So let's say that we wanted to loop
 * over this movement's array,in order to print a messagemfor each movement in this bank account.So these positive values here are basically 
 * deposits and the negative values are withdrawals. And so we can print something to the console saying whether the user deposited or withdrew some money */
const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

 //The first way
 for(const movement of movements1){
  if(movement > 0){
   console.log(`You deposited ${movement}`);
   
  }else{
    console.log(`You withdrew ${Math.abs(movement)}`);//Remove the minus sign 
  }
 }

 //The second way 
 //forEach passes in the current element,the index and the entire array that we are looping.
 //So forEach is technically a higher order function which requires a callback function in order to tell it what to do
 movements1.forEach(function (mov,index,arr) {//what the forEach method does is to loop over the array,  and in each iteration it will execute this callback function.
  //Each time this callback here is called, so in each iteration, it will receive the current element of the array as an argument.
  console.log(arr);

  if(mov > 0){
    console.log(`Movement ${index + 1} You deposited ${mov}`);
    
   }else{
     console.log(`Movement ${index + 1} You withdrew ${Math.abs(mov)}`);
   }
 })

 //The third way 
 for(const [i,movement] of movements1.entries()){
  if(movement > 0){
   console.log(`Movement ${i + 1} You deposited ${movement}`);
   
  }else{
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);//Remove the minus sign 
  }
 }
 
 //One  fundamental difference between the for of and for each is that you cannot continue or break out  of a forEach loop.

///////////////////////////////////////////////////////////////////////////////////
// forEach With Maps and Sets

const currencies1 = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
 //So the first one will be the current value and so the current value in the current iteration, the second one is the key, and the third one is the entire map that is being looped over.
 currencies1.forEach(function(value,key,map) {
  console.log(`${key}:${value}`); 
 })

 const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR'])
 console.log(currenciesUnique);

 currenciesUnique.forEach(function(value,key,map){
  console.log(`${key}: ${value}`); //The key is the same as the value because the set does not have a key and indexes
 })

 //Underscore _ mean throwaway value

///////////////////////////////////////////////////////////////////////////////////
//  PROJECT: "Bankist" App
 /**
  * ### Summary of the Bankist App Overview:

1. **Application Introduction**:
   - The Bankist app is a minimalist online banking interface.
   - It is designed to manage bank accounts, displaying account balances, transaction history, and summary data.
   - The live demo is available at `bankist.netlify.app`.

2. **Main Features**:
   - **Login**: Users can log in using credentials (`JS` as the username and `1111` as the pin for the demo).
   - **Account Overview**: Displays transaction history (movements), overall balance, and summary data (e.g., deposits, withdrawals).
   - **Operations**:
     - **Transfer Money**: Users can transfer money to other accounts (e.g., transfer to a user named `JD`).
     - **Request Loan**: Users can request a loan, which, when approved, appears as a deposit in the account.
     - **Close Account**: Users can close their account.

3. **Currency and Formatting**:
   - The app supports different currencies and formats, e.g., Euros and USD, depending on the user's account settings.

4. **Flowchart and Project Planning**:
   - The flowchart provides an overview of the application's flow, starting from user login to UI updates.
   - It details the sequence of actions, including verifying credentials, displaying and updating the UI, calculating balances, and performing operations.
   - The current focus is on building the app and learning about Arrays, with more detailed planning and flowchart design to be covered in future projects.

5. **Data Files**:
   - The app uses objects to represent account data, simulating data that might come from a Web API.
   - Multiple accounts are stored in an array, with each account containing data like movements, pin, and interest rate.
   - Other files include the HTML, CSS for styling the app, and pre-selected DOM elements for faster development.

6. **User Interaction**:
   - Users are encouraged to interact with the live demo to get a hands-on experience with the app's features before proceeding with development.

This summary provides a high-level understanding of the Bankist app, its features, and the initial steps for developing and interacting with it.
  */

///////////////////////////////////////////////////////////////////////////////////
//Creating DOM Elements

 //Instead of working with global variables, start passing the data that function needs actually into that function
 const displayMovements = function(movements) {

  //The two old preset mov is still there because all we are doing is to add new elements to this container.So we need to empty the list
  containerMovements.innerHTML = '' // the difference is that textContent simply returns the text itself while HTML returns everything, including the HTML.
  //loop over these movements like deposits or withdrawls
  movements.forEach(function(mov,i){

    //Create a seperate value to know if it's a deposit or a withdrawal and also we will need that twice
    const type = mov > 0 ? 'deposit' : 'withdrawal'

    //Replace the hard coded data with the actual movement data
    const html = `    
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
        `
    //Attach this HTML into the container by using a use a method called insertAdjacentHTML
    //This method accepts two strings.The first string is the position in which we want to attach the HTML.The second argument is the string containing the HTML that we want to insert.
    containerMovements.insertAdjacentHTML(`afterbegin`,html)//Check the MDN for further explain
  })
 }
 displayMovements(account1.movements)

///////////////////////////////////////////////////////////////////////////////////
//Coding Challenge #1

/**
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/


const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

///////////////////////////////////////////////////////////////////////////////////
//Data Transformations: map, filter, reduce

 /**
  * This video transcript introduces three crucial array methods in JavaScript—**map**, **filter**, and **reduce**—used for data transformations. These methods are essential in modern JavaScript for creating new arrays based on existing data.

1. **Map Method**:
   - The **map** method is used to loop over an array and create a new array by applying a function to each element of the original array.
   - It is similar to the `forEach` method, but instead of just performing operations, it returns a new array with the transformed data.
   - Example: Multiplying each element of an array by 2 to create a new array([1,3,1,2,2] -> map(arr * 2) -> [2,6,2,4,4])
2. **Filter Method**:
   - The **filter** method filters elements of an array that satisfy a specified condition, returning a new array with only those elements.
   - Elements that do not meet the condition are excluded from the new array.
   - Example: Filtering for elements greater than 2 from the original array.([1,3,1,2,2] -> filter(arr > 2) -> [3])

3. **Reduce Method**:
   - The **reduce** method reduces all elements of an array into a single value.
   - This is done by specifying an operation (e.g., summing all elements) that accumulates the result as it loops through the array.
   - The method returns this single value rather than a new array.
   - Example: Adding all elements of an array to produce a total sum, likened to a snowball effect.([1,3,1,2,2] -> reduce(accumulator + arr) -> 9)

The video emphasizes the importance and frequent use of these methods in modern JavaScript and sets the stage for deeper exploration in subsequent lectures.
  */

///////////////////////////////////////////////////////////////////////////////////
//The map Method

 //Unlike forEach, the map method will give us a brand new array and this new array will contain in each position the results of applying a callback function to the original array elements

 //Converting movements in euro into dollars(Euro to USD is 1.1)
 const euroToUsd = 1.1
 
 //The map method will return a new array so we need to store it somewhere
 const movementsUSD = movements.map(function(move){
  return move * euroToUsd //the original array times the euro to USD conversion rate
 })

 //Simplify by using arrow
 const movementsUSDArrow = movements.map((move) => move * euroToUsd )

 console.log(movements);//The original array is not mutated
 console.log(movementsUSD);
 
 //Using for-of loop
 const movementsUSDfor = []
 for(const mov of movements) movementsUSDfor.push(mov * euroToUsd)

 //here in the map method, we use a function to solve this problem of creating a new array
 //While in for-or we simply loop over one array and then manually create a new one

 const movementsDesc = movements.map((mov,i,arr) => {
  //Return the string then put it into an array

  //Using the ternary operator to put either withdrew or deposited instead of ìf-else
  return `Movement ${i + 1} You ${mov > 0 ? 'deposited' : 'withdrew' } ${Math.abs(mov)}`
 })
 console.log(movementsDesc);
 
///////////////////////////////////////////////////////////////////////////////////
//Computing Usernames

 const user = 'Steven Thomas Williams'; // Will be shortend to stw

 //compute one username for each of the account holders in our accounts array.We want to modify the array so we use forEach 
 const createUsernames = function(accs){

  accs.forEach(acc => {
    //create a new property on that acc element and that will then contain the username that we create here
    acc.username = acc.owner.toLowerCase().split(' ').map( 
      function (name) {
        return name[0] //Return the first letter 
      }
     ).join('') //We are doing something to this acc so we are not creating a new value to return 
  });
 }

 createUsernames(accounts)
 console.log(accounts);

///////////////////////////////////////////////////////////////////////////////////
//The filter Method

 //Create an array of deposit
 const deposits = movements.filter(function(mov){// just like the other callback functions like in the Map, and for each, this one also gets access to the current array element as well as the index and the entire array.
  //deposits are the movements that are above zero and so we want to filter out these negative values
  return mov > 0
 })

 console.log(movements);
 console.log(deposits);
 
 //Using the for-of loop so that you can appreciate the difference between the two(We use the filter cause we need to chained the methods)
 const depositsFor = []
 for (const mov of movements) if (mov > 0) depositsFor.push(mov)
 console.log(depositsFor);
 
 //Using the arrow to create an array of withdrawals
 const withdrawals = movements.filter(mov => mov < 0)
 console.log(withdrawals);
 
///////////////////////////////////////////////////////////////////////////////////
// The reduce Method

 //By adding up all these numbers, so both the deposits and the withdrawals, we end up with the global balance of the account

 const balance = movements.reduce(function(acc,currentValue,index,arr) { // the first parameter is called the accumulator.And this accumulator is essentially like a snowball that keeps accumulating the value that we ultimately want to return
  console.log(`Iteration ${index} :  ${acc}`);
  
  return acc + index
 },0)//Specify the initial value at the first loop iteration

 //Do it with a for-of loop
 let balance2 = 0
 for (const mov of movements) balance2 += mov;

 //Caculate and display balance
 const calcPrintBalance = function(mov) {
  const balance = movements.reduce((acc,mov) => acc + mov, 0)
  labelBalance.textContent = `${balance} EUR`
 }

 calcPrintBalance(account1.movements)

 //Maximum value of array of the movements array 
 const max = movements.reduce((acc,mov) => { //when we wanted to add all the numbers together, the purpose of the accumulator was to keep track of the current sum. And so here, the accumulator will be the one that will keep track of the current maximum value.
  // if the accumulator is greater than the current value, which is the movement, then return the accumulator
  if(acc > mov)
    return acc;
  else
   return mov;
 },movements[0]//Using the first array 
)
console.log(max);

///////////////////////////////////////////////////////////////////////////////////
//The Magic of Chaining Methods

 //we wanted to take all the movement deposits then convert them from euros to dollars and finally add them all up, so that we know exactly how much was deposited into the account in US dollars.
 //we can inspect the current array at any stage of the pipeline using the third parameter of the callback function
 const totalDepositUSD = movements.filter(mov => mov > 0).map(mov => mov * euroToUsd).reduce((acc,mov)=> acc + mov,0) // we can only chain a method after another one, if the previous one returns an array
 console.log(totalDepositUSD);
 
 const calcDisplaySummary = function(movements) {
  const incomes = movements.filter(mov => mov > 0). // we filter them for only the positive ones.
  reduce((acc,mov) => acc + mov,0 )//chain another reduce because now we want to add all these positive numbers together
  labelSumIn.textContent = `${incomes}`

  const out =  movements.filter(mov => mov < 0). 
  reduce((acc,mov) => acc + mov,0 )
  labelSumOut.textContent = `${Math.abs(out)}`

  //this bank pays out an interest each time that there is a deposit to the bank account. And that interest is 1.2% of the deposited amount.
  const interest = movements.filter(mov => mov > 0).
  map(deposit => deposit * 1.2/100).
  filter((int,i,arr) => {//So now the bank only pays an interest if that interest is at least one Euro or whatever other currency.
    console.log(arr);
    return int >= 1
  }).
  reduce((acc,interest) => acc + interest,0 )
  labelSumInterest.textContent = `${interest}`

  //So now the bank only pays an interest if that interest is at least one Euro or whatever other currency.
 }

 calcDisplaySummary(account1.movements)

///////////////////////////////////////////////////////////////////////////////////
//The find Method
 //what the Find method does is to retrieve an element of the array
 const firstWithdrawal = movements.find(mov => mov < 0)//Find method needs a callback function that returns a Boolean
 //unlike the Filter method, the Find method will actually not return a new array but it will only return the first element in the array that satisfies this condition
 console.log(firstWithdrawal);

 //select one of the accounts by the name.
 const account = accounts.find(acc => acc.owner === 'Jessica Davis')

///////////////////////////////////////////////////////////////////////////////////
//Implementing Login

 
 