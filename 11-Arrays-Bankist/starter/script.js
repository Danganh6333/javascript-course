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
 const displayMovements = function(movements,sort = false) {//Adding a second parameter, which is the sort parameter and by default, we will set it to false.

  //The two old preset mov is still there because all we are doing is to add new elements to this container.So we need to empty the list
  containerMovements.innerHTML = '' // the difference is that textContent simply returns the text itself while HTML returns everything, including the HTML.
  //loop over these movements like deposits or withdrawls
  
  //Sort in an ascending order and  if sort is false, so that's the default value, then movs should simply become movements
  const movs = sort ? movements.slice().sort((a,b) => a - b ) : movements //All we want is to display a sorted movements array but we do not want to sort the original underlying data so we simply take a copy of the movements array and sort that

  movs.forEach(function(mov,i){

    //Create a seperate value to know if it's a deposit or a withdrawal and also we will need that twice
    const type = mov > 0 ? 'deposit' : 'withdrawal'

    //Replace the hard coded data with the actual movement data
    const html = `    
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
        `
    //Attach this HTML into the container by using a  method called insertAdjacentHTML
    //This method accepts two strings.The first string is the position in which we want to attach the HTML.The second argument is the string containing the HTML that we want to insert.
    containerMovements.insertAdjacentHTML(`afterbegin`,html)//Check the MDN for further explain
  })
 }
//  displayMovements(account1.movements) //let's remove this because we do not want to call these functions right in the beginning, when our script is loaded.We only want to calculate and display the balance,band the movements, and the summary when we get the data that we want to display

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
 const calcDisplayBalance = function(acc) {
  console.log(acc);
  acc.balance = acc.movements.reduce((acc,mov) => acc + mov, 0)
  labelBalance.textContent = `${acc.balance} EUR`
 }

 //  calcDisplayBalance(account1.movements) //let's remove this because we do not want to call these functions right in the beginning, when our script is loaded.We only want to calculate and display the balance,band the movements, and the summary when we get the data that we want to display

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
 
 const calcDisplaySummary = function(acc) {//We change this from the movement to the acc because we want the interest rate
  const incomes = acc.movements.filter(mov => mov > 0). // we filter them for only the positive ones.
  reduce((acc,mov) => acc + mov,0 )//chain another reduce because now we want to add all these positive numbers together
  labelSumIn.textContent = `${incomes}`

  const out =  acc.movements.filter(mov => mov < 0). 
  reduce((acc,mov) => acc + mov,0 )
  labelSumOut.textContent = `${Math.abs(out)}`

  //this bank pays out an interest each time that there is a deposit to the bank account. And that interest is 1.2% of the deposited amount.
  const interest = acc.movements.filter(mov => mov > 0).
  map(deposit => deposit * acc.interestRate /100).
  filter((int,i,arr) => {//So now the bank only pays an interest if that interest is at least one Euro or whatever other currency.
    console.log(arr);
    return int >= 1
  }).
  reduce((acc,interest) => acc + interest,0 )
  labelSumInterest.textContent = `${interest}`

  //So now the bank only pays an interest if that interest is at least one Euro or whatever other currency.
 }

 //calcDisplaySummary(account1.movements)//let's remove this because we do not want to call these functions right in the beginning, when our script is loaded.We only want to calculate and display the balance,band the movements, and the summary when we get the data that we want to display

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

 //Event handlers
 let currentAccount;

 const updateUI = function(currentAccount) {
  //Display movements
  displayMovements(currentAccount.movements)
  //Display balance
  calcDisplayBalance(currentAccount)
  //Display summary
  calcDisplaySummary(currentAccount)
 }

 btnLogin.addEventListener('click',function(e) {
  e.preventDefault() //In HTML, the default behavior, when we click the submit button, is for the page to reload
  console.log('LOGIN');
  //Find the account from the accounts array, with the username that the user inputted
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)
  console.log(currentAccount);
  //Check if the pin is correct 
  if (currentAccount?.pin === Number(inputLoginPin.value)) {//Using optional chaining to check if the current account exist
    //Display UI and a welcome message
    console.log('LOGIN');
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]} `//Getting the first name
  
    //Changing the opacity when the user login
    containerApp.style.opacity = 100


    //Emptying the login field after we login 
    inputLoginUsername.value = inputLoginPin.value = ''

    //Remove the focus from the login field after we login 
    inputLoginPin.blur()

    updateUI(currentAccount)
  }

 })

///////////////////////////////////////////////////////////////////////////////////
//Implementing Transfers
 
 btnTransfer.addEventListener('click',function(e) {
  e.preventDefault()//because this one is also a form, and so without this, if we clicked here, then that will reload the page
  const ammount = Number(inputTransferAmount.value)//The ammount we want to transfer
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value )//The account that we are transfering to and this value will be use in the Transfer to input
  
   inputTransferAmount.value = inputTransferTo.value = ''  //clean out these inputs now and that we will do no matter if the transfer was successful or not


  //Checking the ammount if the amount here is actually a positive number otherwise we could do a negative transfer and basically transfer money to ourselves
  //the balance of the current account needs to be greater or equal the amount that we're trying to transfer
  if(ammount > 0 && 
    currentAccount.balance >= ammount  && 
    receiverAcc &&
    receiverAcc?.username 
    !== currentAccount.username )// data transfer can only happen if the amount is greater than zero and now the second part is that the current user needs to have enough money to do this transfer and we should not be able to transfer money to our own account and if the receiver account exist
    {
      // console.log('Transfer valid');
      currentAccount.movements.push(-ammount)//From the current account
      receiverAcc.movements.push(ammount)//The other account

      //Update UI after transfer
      updateUI(currentAccount)
    } 

 })

///////////////////////////////////////////////////////////////////////////////////
//The findIndex Method

 //findIndex returns the index of the found element and not the element itself

 //Implement the close account function

 //to delete an element from an array, we use the splice method but for the splice method, we need the index at which we want to delete

 btnClose.addEventListener('click',function(e) {
  e.preventDefault()
  console.log('Delete');
  if(currentAccount && currentAccount?.username === inputCloseUsername.value &&
     currentAccount?.pin === Number(inputClosePin.value)
   ){
    //The big difference here is that with indexOf,nwe can only search for a value that is in the array. So, if the array contains the 23, then it's true, and if not, then it's false. But with findIndex, we can create a complex condition like the index 
    const index = accounts.findIndex(acc => acc.username === currentAccount.username)//calculate that index at which we want to delete.
    console.log(index); 
    accounts.splice(index,1)
    //After closing, we should log out the user by hiding the UI
    containerApp.style.opacity = 0
  }
  inputCloseUsername.value = inputClosePin.value = '' //Clear the form
 })

///////////////////////////////////////////////////////////////////////////////////
//some and every

 //Look back at the includes method
 console.log(movements.includes(-130));//we can use the includes method to test if an array includes a certain value
 
 //some method is like includes but it can do conditon 
 // How to know if there is any positive movement in this array. So any number above zero.
 const anyDeposits = movements.some(mov => mov > 0)
 console.log(anyDeposits);

 btnLoan.addEventListener('click',function(e) {
  e.preventDefault()
  const ammount = Number(inputLoanAmount.value)
  //the some method will become helpful for this loan feature because our bank has a rule, which says that it only grants a loan if there at least one deposit with at least 10% of the requested loan amount
  if(ammount > 0 && currentAccount.movements.some(mov => mov >= ammount * 0.1)){//The ammount should be greater than 0
   //Add movements
   currentAccount.movements.push(ammount)//push the amount that was requested
   //Update UI
   updateUI(currentAccount)

  }
  //Clear the input field
    inputLoanAmount.value = ''
 })

 //the difference between some and every is that every only returns true if all of the elements in the array satisfy the condition that we pass in.
 console.log(movements.some(mov => mov > 0)); 
 console.log(account4.movements.every(mov => mov > 0));//a account only has positive moments and it return true
 
 //write function separately and then pass the function as a callback
 const deposit = mov => mov > 0;
 console.log(movements.some(deposit));
 console.log(movements.filter(deposit));
 console.log(movements.every(deposit));

///////////////////////////////////////////////////////////////////////////////////
//flat and flatMap

 //what if we wanted to take all these elements in the separate and put all of these together in just one big array
 const arr4 = [[1,2,3],[4,5,6],6,4]
 console.log(arr4.flat());
 //But now let's say that we have an array, which is even deeper nested
 
 const arrDeeperNested = [[[1,2],3],[4,[5,6]],6,4] 
 console.log(arrDeeperNested.flat());//now you'll see that we get this result, which still contains the two inner arrays
 
 //We can fix that by using the depth agrument
 console.log(arrDeeperNested.flat(2));

 // the bank itself, wants to calculate the overall balance of all the movements of all the accounts
 //We already store the movements in the accounts array. And so the first thing to do, is to take them out of here and put them all into one array
 const accountMovements = accounts.map(acc => acc.movements) //Create an array which only contains the movements array
 console.log(accountMovements);
 
 const allMovements = accountMovements.flat() //Flatten the array
 console.log(allMovements);

 const overallBalance = allMovements.reduce((acc,mov)=>acc+mov,0)
 console.log(overallBalance);
 
 const overallBalanceWithChaining = accounts.map(acc => acc.movements).flat().reduce((acc,mov)=>acc+mov,0)
 console.log(overallBalanceWithChaining);
 
 // flatMap essentially combines a map and a flat method into just one method
 //flatMap only contain 1 level deep 
 const overallBalanceWithflatMap = accounts.flatMap(acc => acc.movements).reduce((acc,mov)=>acc+mov,0)
 console.log(overallBalanceWithflatMap);

///////////////////////////////////////////////////////////////////////////////////
//Sorting Arrays

 //String
 const owners = ['Jonas','Zach','Adam','Martha']
 console.log(owners.sort());//Sort alphabetically from A to Z
 console.log(owners);//This mutate the array

 //Number
 console.log(movements);
 //console.log(movements.sort());//the sort method does the sorting based on strings. So basically, what it does is to convert everything to strings and then it does the sorting itself
 
 //Ascending
 //we can fix this sorting number by  passing in a compare callback function into the sort method
 movements.sort((a,b)=>{//a and b being two consecutive numbers in the array
 //in our callback function here, if we return less than zero, then the value a will be sorted before value b. And the opposite, if we return a positive value, then a will be put before b in the sorted output array
 //return < 0 , a,b (keep order)
 //return > 0 ,b,a (switch order)
  if(a>b ) return 1;
  if(b>a) return -1;
 })
 //Descending
 movements.sort((a,b)=>{
   if(a>b) return -1;
   if(b>a) return 1;
  })
 console.log(movements);
 
 //We could also just do
 movements.sort((a,b)=> a -b)
 movements.sort((a,b)=> b-a)

 //using a state variable, which will monitor if we are currently sorting the array or not
 //that variable needs to live outside of this callback function so that its value can be preserved after clicking this button
 let sorted = false //we start with this state variable set to false because in the beginning, our array is not sorted 
  btnSort.addEventListener('click',function(e){
    e.preventDefault()
    displayMovements(currentAccount.movements,!sorted) //Change the display
    sorted = !sorted//Fliping the value
  })

///////////////////////////////////////////////////////////////////////////////////
//More Ways of Creating and Filling Arrays

 //So far we have always simply created arrays like this
 console.log([1,2,2,4,3,2,2,1]);
 console.log(new Array(12,55,12,4,23,212));
 
 const x = new Array(7)//it creates a new array with seven empty elements in there and it simply contains nothing
 console.log(x);//this weird behavior of this Array() function which does it so that whenever we only pass in one argument, then it creates a new empty argument with that length
 console.log(x.map(() => 5) );//put something there like a five.But you will see that nothing happened here
 //So there is one method that we can call on empty array and that is the fill() method
 //x.fill(1)//This mutate the array
 x.fill(1,3,5)//we can also specify where we want it to start to fill. So let's say only at index three.So it will then fill it up until the end, unless we specify an end parameter like 5
 console.log(x);

 const arr8 = [1,2,2,4,3,2,2,1]
 arr8.fill(23,1,4)
 console.log(arr8);

 //Create an array like [1,1,1,1,1,1,1] by using Array.from
 const y = Array.from({length : 7} , () => 1)//we are using it on the Array() constructor
 console.log(y);

 //Create an array like [1,2,3,4,5,6,7]
 const z = Array.from({length : 7},(_cur,i) => i + 1)// adding one to the index will then give us values from one to seven and we do not need the cur
 console.log(z);

 //NodeList, which is something like an array, which contains all the selected elements. But it's not a real array, and so it doesn't have methods like map(). So if we actually wanted to use a real array method like that on a NodeList, we would first need to convert the NodeList to an array.
 //So if we wanted to actually select exactly these elements, we would have to do this code here on some event handler.
 labelBalance.addEventListener('click',function(){//so we are selecting all of the elements that have this class but now we only get two elements here, and so that's the one that by the time we load this script here are already in the user interface
  const movementUI = Array.from(document.querySelectorAll('.movements__value'),
  el => Number(el.textContent.replace('€',' '))) //Putting this as an function 
  console.log(movementUI);

  //Another way of converting this here to an array
  const movementUI2 = [...document.querySelectorAll('.movements__value')]

 })
 
///////////////////////////////////////////////////////////////////////////////////
//Summary: Which Array Method to Use?

 /**
  * This video transcript provides a comprehensive summary of 23 array methods in JavaScript, categorizing them based on their use cases to help learners determine which method to use in different scenarios. Here’s a detailed summary:

### **Introduction to Array Methods:**
- The instructor highlights that 23 array methods have been studied throughout the course.
- The key challenge is choosing the right method among these, especially for beginners who may find it confusing.
- To simplify this, the instructor presents a framework that categorizes these methods based on specific questions related to the desired outcome.

### **Categorization of Array Methods:**

1. **Mutating the Original Array:**
   - **Add Elements:** 
     - `push`: Adds elements to the end of the array.
     - `unshift`: Adds elements to the beginning of the array.
   - **Remove Elements:** 
     - `pop`: Removes the last element.
     - `shift`: Removes the first element.
     - `splice`: Removes elements from a specified position.
   - **Other Mutating Methods:**
     - `reverse`: Reverses the array.
     - `sort`: Sorts the array.
     - `fill`: Fills elements in an array with a static value.
   - *Note:* Be cautious when using these methods as they alter the original array.

2. **Creating a New Array:**
   - **Transforming Arrays:**
     - `map`: Loops over the original array and creates a new array by applying a function to each element.
   - **Filtering Arrays:**
     - `filter`: Creates a new array containing elements that satisfy a specific condition.
   - **Other Methods for New Arrays:**
     - `slice`: Creates a new array by extracting a section of the original array.
     - `concat`: Combines two arrays into a new one.
     - `flat`: Flattens a nested array into a new one.
     - `flatMap`: Maps each element using a function and flattens the result into a new array.

3. **Retrieving Array Index or Element:**
   - **Getting an Index:**
     - `indexOf`: Finds the index of a specific element.
     - `findIndex`: Finds the index of the first element that satisfies a condition.
   - **Getting an Element:**
     - `find`: Retrieves the first element that satisfies a condition.

4. **Checking for Inclusion:**
   - **Check if Array Includes an Element:**
     - `includes`: Tests if an array contains a specific value.
   - **Condition-Based Checks:**
     - `some`: Returns true if at least one element satisfies a condition.
     - `every`: Returns true if all elements satisfy a condition.
   - *Note:* These methods return Boolean values, which are useful in conditional statements like `if/else`.

5. **Transforming Array to Another Type:**
   - **Transform to String:**
     - `join`: Converts the array into a string by joining elements with a specified separator.
   - **Reduce to a Single Value:**
     - `reduce`: Uses an accumulator to reduce the array to a single value, which can be of any type (number, string, Boolean, array, or object).
     - The **snowball analogy** is used to explain how `reduce` works, where the value accumulates like a snowball rolling down a hill.

6. **Looping Over Arrays:**
   - **Without Creating a New Value:**
     - `forEach`: Loops over the array to perform a task, but does not return a new array or any new value.

### **Conclusion:**
- The instructor concludes by encouraging learners to keep this overview handy for reference, either by printing it out or storing it on their computer.
- The video ends by introducing a final coding challenge to apply the knowledge of these array methods.

This summary serves as a quick reference guide for selecting the appropriate array method based on specific programming needs.
  */
 
///////////////////////////////////////////////////////////////////////////////////
//Array Methods Practice

 //The first exercise I wanna do here is to calculate how much has been deposited in total in the bank.
 //the first thing that we need to do here, is to somehow get all these movements that are in these different objects, all into one big array so that we can then from there filter the deposits and then add them all together.
 const bankDepositSum = accounts.map(acc => acc.movements).flat().filter(mov => mov > 0).reduce((sum,cur)=> sum + cur,0)//Create a new array then flatten it and then filter out the deposit and then add
 console.log(bankDepositSum);

 //count how many deposits there have been in the bank with at least $1,000
 
 //The first method
 //  const numDeposit1000 = account.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length
 //  console.log(numDeposit1000);

 //The second method using reduce
 const numDeposit1000 = accounts.flatMap(acc => acc.movements)
 .filter(mov => mov >= 1000)//the callback function of the reduced method always has as a first parameter, basically the accumulator. So here that is the sum which we started at zero and then onto that sum, we keep adding the current element and then basically in each iteration we returned the entire new value. So the previous sum plus the current value.
 .reduce((count,cur) => // the previous sum plus the current value in the bankDepositSum . So again, the sum is the accumulator, which is like the snowball onto which we keep adding our snow . But now in this case, our snowball, our accumulator will be the number of movements that are greater than a thousand.
  (cur >= 1000 ? ++count : count)  , 0)//this initial value that is 0 right here is just like having any value outside of a loop where we keep storing a new value. And that new value might very well be a counter that we only update on a certain condition
  //So we will say that whenever the current value is greater or equal than 1000, then we want to return the count plus one. And otherwise we just want to return the count.
 console.log(numDeposit1000);

 let a = 10
 console.log(a++);//a is actually still 10 even though we used this plus plus here.So the plus plus operator does actually increment the value but it still returns the previous value
 console.log(a);//Now it is 11 when we log it out

 console.log(++a); //But there is an easy solution because we can simply use the so-called prefixed plus plus operator.

 //exercise number three
 //create a new object instead of just a number or just a string which contains the sum of the deposits and of the withdrawals.
 const sums = accounts.flatMap(acc => acc.movements).reduce((sums,cur)=>{
  //cur > 0 ? sums.deposits += cur : sums.withdrawals += cur//Check if the current value is a deposit or a withdrawal. And we do that by checking if the value is greater or below zero. So if it is, then we want to add the current value to the deposits.
  sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur //Fixing the duplication of the line above
  return sums  //So the sums does not return when  we don't have a function bodywith curly braces.  And so therefore we have to explicitly so to manually return the accumulator from the function.
 },{deposits : 0,withdrawals:0})//the goal of this exercise is to create an object. And so our starting point  needs to be an object.

 console.log(sums);

//exercise number fours
//create a simple function to convert any string to a title case. So title case means that all the words in a sentence are capitalized except for some of them
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function(title){
  const capitalize = str => str[0].toUppercase() + str.slice(1)//Fixing first word of the title is not capitalized

  //creating an array which contains the exceptions
  const exceptions  = ['a','an','the',and,'but','or','on','in','with']//So the words that should not be capitalized and the exceptions are in the array
  const titleCase = title.toLowerCase()
  .split(' ')//split this string into an array so that these words, which are separated by spaces, each of them are going to be one of the elements of the array.
  .map( word => exceptions.includes(word) ?  word : //if the word is indeed included in the exceptions, then we want to simply return that word. And only otherwise we want to then return the capitalized version
    word[0].toUppercase + word.slice(1))//the rest of the string is taking everything starting at position number one
  .join(' ')
    return capitalize(titleCase)
} 
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not to long'));

 


 
 
 

 