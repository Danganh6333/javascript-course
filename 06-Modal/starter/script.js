'use strict';

///////////////////////////////////////////////////////////////////////////////////
//PROJECT #2: Modal Window
 /**
 * In this small project, we're gonna build our first UI component. And that is the modal window
 * 
 */
 //ctrl + c : stop live-server on terminal

 //We select the elements that we need, and then we store the selections into variables and then we can use them over and over again.
 //const modal = document.querySelector('.modal')
 //const overlay = document.querySelector('.overlay')
 //const btnCloseModal = document.querySelector('.close-modal')
 //const btnOpenModal = document.querySelector('.show-modal') //Whenever we use query selector with a selector, which actually matches multiple elements, only the first one will get selected.
 //const btnsOpenModal = document.querySelectorAll('.show-modal')


 //console.log(btnOpenModal);//This log out only the first one in the three show-modal elements
 //console.log(btnsOpenModal);//Log out a Node list that act somewhat like an array

 //Loop through the btnsOpenModal NodeList
 //if there is only one line of code that you want to execute, you can just write one line after the for loop
 //for (let i = 0; i < btnsOpenModal.length; i++) 
    //console.log(btnsOpenModal[i].textContent);

///////////////////////////////////////////////////////////////////////////////////
//Working With Classes
 const modal = document.querySelector('.modal')
 const overlay = document.querySelector('.overlay')
 const btnCloseModal = document.querySelector('.close-modal')
 const btnsOpenModal = document.querySelectorAll('.show-modal')

 //We create this function to be executed,because no matter if we click the close button or if we click the overlay,the modal will close so this violate the Don't Repeat Yourself.
 const closeModal = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
 }

 const openModal = function(){
        console.log('Button Clicked');
        //we can basically aggregate all of this properties in one class, that we identify here in CSS, and then in JavaScript we simply add and remove these classes as we need or don't need these styles.
        //We can set the display : hidden in the hidden class, we can use Js to remove the class if we want to change
        modal.classList.remove('hidden') //We take that selected element modal and on there we can read the class list property that has a couple of methods.
        //The dot(.hidden) is only for the selector. But here we are not anymore selecting anything. We're just passing in the name of the class.
        overlay.classList.remove('hidden')
 }

 //In order to respond to a click event, we will attach an event handler function to the element.
 for (let i = 0; i < btnsOpenModal.length; i++) {
    console.log(btnsOpenModal[i].addEventListener('click',openModal));
 }
 
 btnCloseModal.addEventListener('click',closeModal
    //Adding the hidden class back on for closing the modal
    //We are not using the () to call the closeModal function because it will immediately called a function, as soon as JavaScript executes this line.
)

 //Clicking overlay outside to close the modal
 overlay.addEventListener('click',closeModal)

///////////////////////////////////////////////////////////////////////////////////
//Handling an "Esc" Keypress Event

//There are three types of events for the keyboard(the key down,the key press,the key up)

 document.addEventListener('keydown',function(e){ //By using add event listener here on the document we are basically listening for events everywhere. So no matter where they happen on the page, they will always trigger the event handler that we're going to specify here.
    console.log('A key was pressed');
    console.log(e);//This will log out the event object and in this case, since it was a keyboard event we get information about which key was pressed. 
    console.log(e.key);

    if(e.key === 'Escape') {
      console.log('Esc was pressed')
      //when it does not contain the class hidden it means that it's visible
      if(!modal.classList.contains('hidden')){ //Checking if the modal dot class name contains the hidden class
         closeModal() //we do actually need to call this function. Because when this function here is executing so this one here as it reaches this line of course, something needs to happen.
      }
    };
   })
 //Anytime that an event occurs JavaScript generate an object. And that object contains all the information about the event itself, and we can then actually access that object in the event handler function.

