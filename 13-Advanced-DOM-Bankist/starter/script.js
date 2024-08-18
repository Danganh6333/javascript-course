'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////////
//How the DOM Really Works

 /**
  * This video transcript provides an in-depth explanation of how the Document Object Model (DOM) works behind the scenes and how it is organized internally in JavaScript. Here’s a detailed summary:

  ### **Introduction to the DOM:**
 - The **DOM** serves as the interface between JavaScript code and the browser, specifically the HTML documents rendered by the browser.
 - JavaScript can interact with the DOM to create, modify, delete elements, set styles, manage attributes, and respond to events on a webpage.
 - The **DOM tree** is generated from HTML documents, organized as a tree-like structure made of nodes. JavaScript interacts with this tree using various methods and properties.

 ### **DOM Structure and Node Types:**
 - The DOM is a complex API (Application Programming Interface) that contains numerous methods and properties for interacting with the DOM tree.
 - **Node Types**:
  - Every node in the DOM tree is of type **Node** and is represented as an object in JavaScript.
  - Nodes can be of different types, such as **Element**, **Text**, **Comment**, and **Document**.
  - **Element Node**: Represents HTML elements and has access to properties like `innerHTML`, `classList`, and methods like `append`, `remove`, `querySelector`, etc.
  - **Text Node**: Represents text within an element.
  - **Comment Node**: Represents HTML comments, since everything in the HTML needs to be part of the DOM.
  - **Document Node**: Represents the entire document and provides methods like `querySelector`, `createElement`, and `getElementById`.

   ### **Inheritance in the DOM:**
  - **Inheritance** is a key concept in the DOM's structure, allowing child node types to inherit properties and methods from their parent node types.
  - For example, an HTML element (like a button) inherits properties and methods from both the `Element` type and the `Node` type.
  - This inheritance allows for consistent access to methods like `querySelector` and properties like `innerHTML` across different node types.

  ### **Event Handling in the DOM:**
  - **EventTarget**: A special node type that allows all node types in the DOM (like elements, documents, and even text nodes) to listen to events via methods like `addEventListener`.
  - This type is abstract and not used directly in practice but is crucial for event handling functionality.

  ### **Conclusion:**
  - The DOM API is organized into different node types, each with specific methods and properties, and these types inherit additional capabilities from their parent types.
  - Understanding this structure helps in mastering DOM manipulation and event handling in JavaScript.
  - The lecture simplifies a complex topic, with further in-depth material available in the MDN documentation for those interested.

   The video concludes by transitioning to the practical application of these concepts in the following sections.
  */

/////////////////////////////////////////////////
//Selecting, Creating, and Deleting Elements

 console.log(document.documentElement);//way of selecting the entire document
 // If we want to apply CSS styles to the entire page we always need to select document element
 console.log(document.head);//Selecting the head
 console.log(document.body);//Selecting the body
 
 document.querySelector('.header')

 //If we want to select multiple elements then we should use document.queryselectorAll
 const allSections = document.querySelectorAll('.section')
 console.log(allSections);//This will return a node list and then that will contain all of the elements that are a section so that are selected by this selector
 
 document.getElementById('section--1')

 //This method returns an HTML collection that's different from a node list because an HTML collection is actually a so-called life collection
 //And that means that if the DOM changes then this collection is also immediately updated automatically.
 //So that mean if we delete a button and try to read the allButtons again then you see that the delete button is gone so that's the different from node list
 const allButton = document.getElementsByTagName('button')//get all the buttons. So all the elements with the name of button.
 console.log(allButton);

 console.log(document.getElementsByClassName('btn'));// this one will also return a life HTML collection
  
 const message = document.createElement('div') //Create a div and it's  an object that represents a DOM element
 message.classList.add('cookie-message')//Building a cookie message

//  message.textContent = 'We use cookie for improved functionality and analytics'


 //we can also insert a HTML
 message.innerHTML = `We use cookie for improved functionality and analytics. <button class ="btn btn--close-cookie">Got it!</button>`//this will basically just display a nicely formatted button saying Got it!

 //Now what we see here is that the element was actually only insert at once, now that's because this element here so message is now indeed a life element living in the DOM. And so therefore it cannot be at multiple places at the same time.
 //So we can use the prepend and append methods not only to insert elements but also to move them.

 //header.prepend(message)//prepending basically adds the element as the first child of this element
 
 //we can also edit as the last child
 header.append(message)

 //insert multiple copies of the same element
 //header.append(message.cloneNode(true))

 //header.before(message)//this one will insert a message before to header element as a sibling
 //header.after(message)//this one here after the header element as a sibling

 //Delete element
 //Remove the message when clicking the button
 document.querySelector('.btn--close-cookie').addEventListener('click',function(){
  //message.remove()
  //We used to do before remove()
  message.parentElement.removeChild(message)
 })
 
/////////////////////////////////////////////////
//Styles, Attributes and Classes
 
 //Styles
 message.style.backgroundColor = 'lightblue'
 message.style.width = '120%'

 console.log(message.style.height);//Here we get nothing because using the style property like this here only works for inline styles
 console.log(message.style.backgroundColor);//So this will work 

 //we can still get the styles if we really want to
 console.log(getComputedStyle(message).color );//Computed style means that it's the real style as it appears here on the page. And even if we do not declare it in our CSS,the browser can stil get it
 console.log(getComputedStyle(message).height );

 //Adding the height to the banner
 message.style.height = Number.parseFloat(getComputedStyle(message).height,10) + 30 + 'px';//The getComputedStyle(message).height is a string so we need to parse it to float
 //Adding the number 10 in the parseFloat as base 10

 //Look at the CSS
 document.documentElement.style.setProperty('--color-primary','orangered')//So with custom properties, we cannot do it like  message.style.backgroundColor = '' but instead we need to use setProperty and then we pass in the name of the property and the value

 //Attributes

 //in HTML just to remember src, alt, even the class, and the ID are simply attributes of the element 
 const logo = document.querySelector('.nav__logo')
 console.log(logo.alt);//Access some default properties
 console.log(logo.src);
 
 