// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////////////////////////////////////////////////////////////
// Setting up Prettier and VS Code
 /**
  * Define Prettier as the default formatter of our code : 
  * Preferences > Settings > Search Default Formatter > esbenp.prettier-vscode.
  */
    
  //Configure Prettier : https://prettier.io/docs/en/options

 // TODO: This is a todo item
 // FIXME: This needs to be fixed
 // NOTE: This is a note
 // BUG: This is a bug
 // CHANGED: This has been changed

///////////////////////////////////////////////////////////////////////////////////
// Installing Node.js and Setting Up a Dev Environment

///////////////////////////////////////////////////////////////////////////////////
// Learning How to Code

  /**
   * Mistake beginner make at learning how to code
   * Mistake 1 : Have no clear goal at the beginning of the journey
   * Mistake 2 : Blindly copy the code without caring how it works
   * Mistake 3 : Didn't reinforce what he was learning by doing small challenge or taking notes
   * Mistake 4 : Didn't practice coding and didn't come up with their own project ideas
   * Mistake 5 : Quickly became became frustrated whenever the code as not perfectly clean or efficient.
   * Mistake 6 : Lost motivation pretty quickly because they thought they could never know enough.
   * Mistake 7 : Learning in isolation without sharing their process
   */
 
  /**
   * Fixing mistake 1 : 
   * Set a goal for yourself.Think about this and actually write it down on a paper or something, make this goal specific, measurable, realistic, and time-based.
   * Develop a plan on how to get there. It also helps to know exactly why you are learning to code and to be aware of the reason why you're doing this because 
   * this will help you stay motivated when learning becomes more and more difficult.To stay motivated, it's also great to imagine a big project that you want 
   * to be able to build by the end of your learning journey.With this project in mind, you just need to research the technologies
   */

  /**
   * Fixing mistake 2 : 
   * Instead of simply copying code from a course or tutorial, always make sure that you really understand the codes that you're learning and typing into your editor.
   * Don't move on if you don't understand.
   * Don't just copy and pasted from a tutorial or a site like Stack Overflow.
   */

  /**
   * Fixing mistake 3 : 
   * Taking notes and by challenging yourself with small coding exercises and challenges.
   * Coming up with your own ideas like this and solving them,will absolutely boost your confidence in your programming skills
   * Take your time with this.There's absolutely no need to complete any courseas fast as possible
   */

  /**
   *  Fixing mistake 4 : 
   *  Practicing on your own,is the single most important thing that you have to do.
   *  If you just follow courses and don't code on your own,you will never ever be able to write programs on your own.
   *  Come up with your own project ideas,no matter how small or big and just build them,or you can copy parts of popular sites or applications.
   *  Don't be stuck in tutorial hell, which is exactly the state of not being able to leave tutorials.
   *  Do not get stuck by trying to write a perfect code,which is really clean or really efficient but none of that matters in the beginning.
   */

  /**
   *  Fixing mistake 5 : 
   *  Embrace the fact that you will never know everything there is to know in web development.
   *  Do not compare yourself to top developers who do know a lot more than you,
   *  Nobody was born an expert and even experts are still learning all the time.
   */

  /**
   * Fixing mistake 6 : 
   * Learn together with other people, no matter if in person or online.
   * Whenever you learn something new, explain it to them because explaining things, forces you to really understand them first and repeating a concept will then really make it stick in your brain.
   * Share your goals publicly, or example, on a social network, to make yourself accountable.
   */

  /**
   * Way to learn code throughout each destination
   * Everthing is awesome -> Study course : understand code, take challenges and notes 
   * Cliff of confusion -> Stay motivated! Keep writing lots of code on your own, no matter how bad
   * Pit of despair -> Learn with other people, devs and beginners, and share progress,Keep challenging yourself, run into lots of problems, and fix them
   * Back to awesome -> Round up your skillset with best practices and tools (git, testing, …)
   * 
   */

///////////////////////////////////////////////////////////////////////////////////
// How to Think Like a Developer: Become a Problem Solver!
 
 /**
  * Mistake beginner make at solving a problem 
  * Mistake 1 : Jumps at the problem without much thinking.
  * Mistake 2 : Implement solution in an unstructured way without much of a logical approach.
  * Mistake 3 : Too proud to research when they doesn't know how to come up with their own solution. 
  * 
  * //Fixing the mistake : 
  * Stay calm and slow down and not just jump at a solution without having a plan.
  * Be in a mindset of taking a logical and rational approach
  * Use the 4 step framework
  */
 
 /**
  * 4 steps framework to solve any problem
  * Step 1 : Make sure that you 100% understand the problem .Step back and take a high-level look at the big picture,and the most important part of the step
  is to ask the right questions in order to get a clear picture of the whole problem.
  * Step 2 : Divide and conquer strategy. Divide and conquer means to break up the big problem into as many small problems as possible because these small problems are then a lot easier to solve.
  * Step 3 : Don't be afraid to do as much research as you have to
  * Step 4 : For bigger problems, write pseudo-code before writing the actual code
  */

  //Pseudo-code is simply an informal description of the actual code that we're gonna write.So it's like code for humans to understand not computers.

  /**
   * Example for step 1 : We need a function that reverses,"whatever we pass into it."
   * 
   * First we can ask,what does whatever actually mean in this context?
   * So, what should actually be reversed here?it only makes sense to reverse strings,numbers, and arrays.
   * Objects don't have a well-defined order,so we can't reverse them.We're also not gonna reverse like undefined,or null or a Boolean
   * Then we can ask, what should we do if something else is passed in that is no string, number, or array? How are we gonna handle that?
   * what exactly should be returned from the function? should it always be a string,also we can start to ask more solution oriented questions,
   * like how to recognize whether the argument is a number,a string, or an array? Or how to actually it reverse a number,a string and an array.
   * I'm sure there are more,but this should already give us a way more clear picture of this problem.
   */
 
    /**
   * Example for step 2 : We need a function that reverses,"whatever we pass into it."
   * 
   * First, we need to check if the argument is a number, a string, or an array.And this is in fact, a small 
   * sub problem, right? So now, and just solve this one in isolation and then move on.The next sub problem is
   * to implement reversing a number, then implement reversing a string, and then implement reversing an array,
   * so that we are ready to deal whatever is passed into the function.Finally, we then also need of course to 
   * return the reversed value.So these are our sub problems, and they kind of look like a task list that we now
   * need to go ahead and implement.Finally, we then also need of course to return the reversed value. 
   * And this is great because it makes our work so much easier now.
   */

///////////////////////////////////////////////////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
 /**
  * We work for a company building a smart home thermometer.
  * Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude.
  * Keep in mind that sometimes there might be a sensor error."
  */ 
 const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

 // 1) Understanding the problem
 // - What is temp amplitude? Answer: difference between highest and lowest temp
 // - How to compute max and min temperatures? Answer: 
 // - What's a sensor error? And what do do?

 // 2) Breaking up into sub-problems
 // - How to ignore errors?
 // - Find max value in temp array
 // - Find min value in temp array
 // - Subtract min from max (amplitude) and return it

 /**
  * Use Google to research how we can find a maximum value in an array. And so that's what I meant when I said we should do some research and use Google whenever we need to.
  * So what I like to do is to just write JavaScript and then be as descriptive as possible of what I want to achieve.
  * So let's say get max value in array
  * 
  */

 const calcTempAmplitude = function(temps){
   let max = temps[0] //Create the max variable and assuming that the first element of the array is the maximum.
   let min = temps[0]
   for (let i = 0; i < temps.length; i++) {
      const curTemp = temps[i]

      if(typeof curTemp !== 'number') continue //this here should only run if we actually have a number here.

      if(curTemp > max) max = curTemp //if the current value of the array, so that's temps at position i, the current position is greater than the current maximum value.Then the maximum value will become this new value.
      if(curTemp < min) min = curTemp //if the current temperature is less than the minimum, then that should become the new minimum.
   }
   console.log(max,min);
   return max - min //return the amplitude
 }
 const amplitude = calcTempAmplitude(temperatures)
 console.log(amplitude);

 // PROBLEM 2:
 // Function should now receive 2 arrays of temps like calcTempAmplitude([array1],[array2])

 // 1) Understanding the problem
 // - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

 // 2) Breaking up into sub-problems
 // - Merge 2 arrays
 const calcTempAmplitudeNew = function(arr1,arr2){

   const temps = arr1.concat(arr2)
   console.log(temps);

   let max = temps[0] //Create the max variable and assuming that the first element of the array is the maximum.
   let min = temps[0]
   for (let i = 0; i < temps.length; i++) {
      const curTemp = temps[i]

      if(typeof curTemp !== 'number') continue //this here should only run if we actually have a number here.

      if(curTemp > max) max = curTemp //if the current value of the array, so that's temps at position i, the current position is greater than the current maximum value.Then the maximum value will become this new value.
      if(curTemp < min) min = curTemp //if the current temperature is less than the minimum, then that should become the new minimum.
   }
   console.log(max,min);
   return max - min //return the amplitude
 }
 const amplitudeNew = calcTempAmplitudeNew([2,3,5],[2,5,1])
 console.log(amplitude);

///////////////////////////////////////////////////////////////////////////////////
// Debugging (Fixing Errors) 

 /**
  * Software bug: Defect or problem in a computer program.
  * Basically, any unexpected or unintended behavior of a
  * computer program is a software bug.
  */

 // Debugging: Process of finding, fixing and preventing bugs.

 /**
  * The debugging process
  * The first step is to actually become aware that there is some kind of bug.
  * Once we know there is a bug, we need to go into our code and find the bug.Developer console is for simple code and Debugger is for complex code
  * Once we know where the bug is located, we can finally fix it so we can correct the bug.
  * As a final step, we should then prevent this bug from ever happening again in our code base.For example, we can search our project for the same bug in similar code, like in a similar function.A more advanced way of preventing bugs is to write tests using testing software.
  */

///////////////////////////////////////////////////////////////////////////////////
// Debugging with the Console and Breakpoints

 /**
  * we need to do some measurements in a unit called Kelvin,which is the absolute temperature. And a conversion to Kelvin is to add 273 to the temperature in degrees Celsius.
  */


 const measureKelvin = function(){
   const measurement = {
      type: 'temp', //Add some arbitrary properties
      unit: 'celsius', //We will measure temperature in Celsius, and then we return a converted version.
      //3.FIX
      value : 10 //Number( prompt('Degree celcius')) //The prompt always returns a string so the value is stri\ng
    };

    console.log(measurement);
    // console.table(measurement);

    console.log(measurement.value);//2.Find the bug
    // console.warn(measurement.value);
    // console.error(measurement.value);
    

    const kelvin = measurement.value + 273 //Convert to kelvin
    return kelvin
 }
 //1.Identify the bug
 console.log(measureKelvin());

 /**
  * How to use the debugger
  * Go to sources then click on script.js, which is our current script. And we set a breakpoint by clicking in this left bar,
  * and so this will set this red point, which means that there is a breakpoint.After that when we reload the page, the execution will stop 
  * exactly at this point and show us exactly what the execution looks like, at that moment in time, and that includes all the values,
  * of all the defined variables. 
  * 
  * To resume the script execution but it can only continue if you input a value, we click the right arrow at the right panel 
  */
 // Using a debugger
 const calcTempAmplitudeBug = function(arr1,arr2){

  const temps = arr1.concat(arr2)
  console.log(temps);

  let max = 0 
  let min = 0

  for (let i = 0; i < temps.length; i++) {
     const curTemp = temps[i]

     if(typeof curTemp !== 'number') continue

     if(curTemp > max) max = curTemp 
     if(curTemp < min) min = curTemp
  }
  console.log(max,min);
  return max - min 
}
const amplitudeBug = calcTempAmplitudeBug([3,5,1],[9,4,5])
//Identify 
console.log(amplitude);