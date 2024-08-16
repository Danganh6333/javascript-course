'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
// Converting and Checking Numbers

 //In JavaScript, all numbers are presented internally as floating point numbers. So basically, always as decimals,
 console.log(23 === 23.0);
 
 //there are certain numbers that are very difficult to represent in base 2. And one example of that is the fraction 0.1.
 console.log(0.1 + 0.2);
 console.log(0.1 + 0.2 === 0.3);

 //Ways to convert String to number
 console.log(Number('23'));
 console.log(+'23');//when JavaScript sees the plus operator, it will do type coercion.
 
 //Parsing

 //these Parsing functions here are actually also so-called global functions. So we would not have to call them on Number.
 //we can now specify a string and that string can even include some symbols. And JavaScript will then automatically try to figure out the number that is in this string
 //Now, in order to make this work, the string needs to start with a number.
 //The parseInt function actually accepts a second argument, which is the so-called regex. And the regex is the base of the numeral system that we are using.
 console.log(Number.parseInt('30px',10));//here we are using base 10 numbers
 console.log(Number.parseInt('px30'));

 console.log(parseFloat('2.5rem'));

 console.log(Number.isNaN(29));
 console.log(Number.isNaN('29x'));
 console.log(Number.isNaN('29'));
 
 console.log(Number.isNaN(23/0)); //dividing by zero gives us infinite. So infinity is also not not a NaN and so therefore, we get false here as well.

 //Best way to check if the value is an number
 console.log(Number.isFinite(23));
 console.log(Number.isFinite('23'));
 console.log(Number.isFinite(+'23'));
 console.log(Number.isFinite(23/0));

 console.log(Number.isInteger(23));
 console.log(Number.isInteger(23.0));
 console.log(Number.isInteger(23/3));
 
/////////////////////////////////////////////////
//Math and Rounding

 //Squareroot
 console.log(Math.sqrt(25));
 //The same could be achieved by using the exponentiation operator
 console.log(25 ** (1/2));
 
 //Get the maximum value
 //And this max function here actually does type coercion but not parsing
 console.log(Math.max(2,1,3,"42",1));
 console.log(Math.max(2,1,3,"42px",1));

 console.log(Math.min(9,2,4,2,1));

 //if we wanted to calculate the radius of a circle with 10 pixels
 console.log(Math.PI * Number.parseFloat('10px') ** 2);
 
 //Generate random number
 console.log(Math.random());//this will give us a number between zero and one
 console.log(Math.trunc(Math.random() * 6) + 1);//Remve the decimal and because random * 6 will give us the highest number is 5 so we add 1. 
 
 //generate random integers between two values.
 const randomInt = (min, max) => Math.trunc(Math.random() * (max - min + 1)) + min; //if we multiply this by max minus min then we get a number between 0 and max minus min
 //And after that we add the min so that the range góes from 0 to max minus min to min to max minus min
 console.log(randomInt(10,20));
 


 //Rounding intergers
 console.log(Math.trunc(23.3));//Remove any decimal part
 console.log(Math.round(23.3)); //round to the nearest integer

//Round up to the nearest integer
 console.log(Math.ceil(23.3));
 console.log(Math.ceil(23.9));
 
//Round down to the nearest integer
 console.log(Math.floor(23.3));
 console.log(Math.floor("23.9"));

 //All these rounding methods do type coercion

 //floor and trunc are very similar when we are dealing with positive numbers but not negative
 console.log(Math.trunc(-23.3));
 console.log(Math.floor(-23.3));

//Rounding decimals
//toFixed will always return a string and not a number
 console.log((2.7).toFixed(0));//Return 3
 console.log((2.7).toFixed(3));//it returns to 2.700 and it adds zeros until it has exactly three decimal parts
 console.log((2.3444).toFixed(3));//Rerurn 2.344

 //Convert toFixed to number
 console.log(+(2.7).toFixed(0))
 

 //A number is a primitive. And primitives actually don't have methods. And so behind the scenes, JavaScript will do boxing. And boxing is to basically transform this to a number object, then call the method on that object. And then once the operation is finished it will convert it back to a primitive 

/////////////////////////////////////////////////
//The Remainder Operator

 //Remainder Operator returns the remainder of a division

 console.log(5 % 2);
 
 //Checking if the number is even or odd 
 console.log(6 % 2);//Odd number
 console.log(7 % 2);//Even number

 const isEven = n => n % 2 === 0
 console.log(isEven(8));
 console.log(isEven(80890));

/////////////////////////////////////////////////
//Numeric Separators

 //Numeric separators are simply underscores that we can place anywhere that we want in or numbers, and which will make it really easy to understand and to parse numbers this large
 const diameter = 923_932_929_293;
 console.log(diameter);//Js simply ignore the underscore
 
 //we can use the underscore now to give meanings to certain parts of our numbers like giving the last 99 as cents
 const priceCents = 345_99;
 console.log(priceCents);
 
 //Both of them are exactly 1,500. But just the underscore alone, gives them different meanings.
 const transferFee1 = 15_00 //it looks like it is $15 for example and 0 cents
 const transferFee2 = 1_500 

 //We cannot put the underscore at the beginning or last of the number or after the . sign
 const PI = 3.14_15
 console.log(PI);
 
 console.log(Number('2303003'));
//  console.log(Number('230_3003')); //if we want to have a numeric separator here, that would not work
 
//If you need to store a number in a string, for example, in an API, or if you get a number as a string from an API, you should not use underscores in there, because then JavaScript will not be able to parse the number correctly out of that string
 
/////////////////////////////////////////////////
//Working with BigInt

/**
 * Numbers are represented internally as 64 bits. And that means that there are exactly 64 ones or zeros
 * to represent any given number.Now of these 64 bits only 53 are used
 * to actually store the digits themselves.The rest are for storing the position
 * of the decimal point and the sign.Now, if there are only 53 bits to store the number,
 * that means that there is a limitof how big numbers can be, And we can calculate that number.
 */ 
 console.log(2 ** 53 - 1);//this is the biggest number And it is two, because again we are working with base two, which has only zeros and ones
 console.log(Number.MAX_SAFE_INTEGER);// the number is so important that it's even stored into the number namespace as MAX_SAFE_INTEGER
 
 console.log(2 ** 53 + 2) // JavaScript can simply not represent these numbers accurately. And so if we do calculations with numbers that are bigger than this, then we might lose precision
 
 console.log(328030949834983498293923982n);//this n here basically transforms a regular number, into a BigInt number
 console.log(BigInt(328030949834983498293923982));//We can also use BigInt
 
 //All the usual operators still work the same
 console.log(100000n + 100000n);
 console.log(100002342349823420420492n * 1002343000n);
 //console.log(Math.sqrt(12n));//This does not work
 

//what is not possible is to mix BigInt with regular numbers
const huge = 3123904903492394092349234n
const numb = 23
// console.log(huge * numb); This will not work 
console.log(huge * BigInt(numb));

//Exception
console.log(20n > 15);
console.log(20n === 20);//These two value have two primitive type so false
console.log(typeof 20n);
console.log(20n == 20);//This is true

console.log(10n / 3n); //The big int will cut the decimal part 

/////////////////////////////////////////////////
//Creating Dates


