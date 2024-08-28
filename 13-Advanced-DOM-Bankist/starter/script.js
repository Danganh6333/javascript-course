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

 // this works because on images they are supposed to have the alt, and the source attributes on them and so if we specify them in HTML, then JavaScript will automatically create these properties on the object
 console.log(logo.alt);//Access some default properties
 console.log(logo.src);
 console.log(logo.className);
 
 //Set the value
 logo.alt = 'Beautiful minimalist logo'

 //Non-standard
 console.log(logo.designer);//The designer attribute is not a standard so  JavaScript, will not automatically create a property on the object and so if we now tried to read logo.designer, that's not going to work
 //But there is a way read it from the DOM
 console.log(logo.getAttribute('designer'));

 //And a way to set it
 logo.setAttribute('company','Bankist') 
 
 //The difference between src and attribute on image
 console.log(logo.src);//The relative version, so relative to the folder in which the index.html file is located
 console.log(logo.getAttribute('src'));////The absolute version
 
 const link = document.querySelector('.nav__link--btn')
 console.log(link.href);
 console.log(link.getAttribute('href'));
 
 //data attributes are a special kind of attributes that start with the words data
 //Check the html file for the TODO
 console.log(logo.dataset.versionNumber);//here we use camelCase while in HTML we have the dash
 

 //here we just writing,completely fake class names just to demonstrate
 //Classed
 logo.classList.add('c','j')//you can also add multiple classes by passing in multiple values.
 logo.classList.remove('c','j')
 logo.classList.toggle('c')
 logo.classList.contains('c')

 //we could also use that to set a class but don't use this because this will override all the existing classes and also it allows us to only put one class on any element
 //logo.className = 'Jonas'
 
/////////////////////////////////////////////////
//Implementing Smooth Scrolling

 //the functionality that we're going to implement now is when we click on the button, then it will smoothly scroll to this first section

 const btnScrollTo = document.querySelector('.btn--scroll-to')
 const section1 = document.querySelector('#section--1')//The section to scroll to

 btnScrollTo.addEventListener('click',function(e){
  const s1coords = section1.getBoundingClientRect()
  console.log(s1coords);
  
  console.log(e.target.getBoundingClientRect()); //The x is the distance between the border and then this Y is this distance from the top
  console.log('Current Scroll position (X/Y)',window.scrollX,screenY);
  
  console.log('height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  
  //Scrolling
  //So we are interested here in the left value and it is zero. And that's good because we don't want any horizontal scroll
  //for the second one, we're gonna be interested in the top, which is again, the position from the top of the viewport.
  window.scrollTo(s1coords.left,s1coords.top)
 })

/////////////////////////////////////////////////
//Types of Events and Event Handlers

 /**
  * an event is basically a signal that is generated by a certain DOM node and a signal means that something has happened,
  * for example, a click somewhere or the mouse moving, or the user triggering the full screen mode
  * and really anything of importance, that happens on our webpage, generates an event
  */
  //mouseenter event
  const h1 = document.querySelector('h1')

  //pattern whenever you only want to listen to any event just once,
  const alertH1 = function(e){
    console.log(`addeEventListener :Great! You are reading the heading :D`);
    //after we listened for an event and then handle that event here in dysfunction, we can then remove that event listener.
    h1.removeEventListener('mouseenter',alertH1)
  }

  h1.addEventListener('mouseenter',alertH1)//it fires whenever a mouse enters a certain element

  setTimeout(() => {
    h1.removeEventListener('mouseenter',alertH1)
  }, 3000);//we could remove it after a certain time has passed

  //another way of attaching an EventListener to an element by using the on-event property directly on the element
  //h1.onmouseenter = function(e){//it fires whenever a mouse enters a certain element
   // alert(`addeEventListener :Great! You are reading the heading :D`);
  //}
  //for each of the events that we just saw in the Event reference table, there is one on-event property like this one
  //addEventListener is better because it allows us to add multiple event listeners to the same event.But if we did the same with the on-event property directly on the element , then the second function would override the first one

  //a third way of handling events, which is by using an HTML attribute , this one should actually not be used,

/////////////////////////////////////////////////
//Event Propagation: Bubbling and Capturing

 /**
  * This video explains the concept of event propagation in JavaScript, focusing on two key phases: **capturing** and **bubbling**.

1. **DOM Structure and Event Generation**: 
   - The video begins with a simple HTML document structure, emphasizing the relationship between a target element (e.g., an anchor tag) and its parent elements.
   - When a user clicks on an element, the DOM generates an event. However, this event is not initially created at the target element (where the click occurred) but at the root of the document, which is the top of the DOM tree.

2. **Capturing Phase**:
   - **Definition**: The capturing phase, also known as the trickling phase, occurs when the event travels from the root of the document down through all the parent elements of the target element.
   - **Process**: As the event moves downwards, it passes through each parent element (e.g., HTML, body, section, paragraph) until it reaches the target element where the event originally occurred.

3. **Target Phase**:
   - **Definition**: The target phase occurs when the event reaches the target element itself.
   - **Handling Events**: In this phase, the event can be handled by attaching an event listener to the target element. Event listeners wait for the event to occur and then execute a callback function, such as displaying an alert.
   - **Example**: An event listener attached to the anchor element triggers an alert when the element is clicked.

4. **Bubbling Phase**:
   - **Definition**: After the target phase, the event enters the bubbling phase, where it travels back up the DOM tree to the document root.
   - **Process**: The event passes through the same parent elements as in the capturing phase but in reverse order, moving upwards from the target element.
   - **Importance**: The event can be handled at each parent element during the bubbling phase, making it appear as though the event occurred at each of these elements. For example, if the same event listener is attached to the section element, the alert will trigger for the section element as well.

5. **Event Propagation**:
   - **Definition**: The entire process of the event moving through the capturing phase, target phase, and bubbling phase is known as event propagation.
   - **Propagation Importance**: Understanding event propagation is crucial for implementing advanced event handling patterns in JavaScript. It allows developers to manage how events are captured and handled at different levels of the DOM.

6. **Event Handling in the Capturing Phase**:
   - By default, events are handled in the target and bubbling phases. However, developers can set up event listeners to handle events in the capturing phase as well by specifying a third argument (`true`) in the `addEventListener` method.

7. **Event Types**:
   - Not all events have capturing and bubbling phases. Some events are generated directly on the target element and can only be handled there. However, most common events (e.g., clicks) do propagate through both capturing and bubbling phases.

8. **Summary**:
   - The video emphasizes the importance of understanding event propagation (capturing and bubbling) as it is foundational for effective event handling in JavaScript applications.

The next video in the series will demonstrate event propagation in action.
  */

/////////////////////////////////////////////////
//Event Propagation in Practice

 //When we click the nav, we will give all these elements random background colors
 // And a random color is basically, just a string, like RGB, and then with a value between 0 and 255(ex: rgb(255,255,255)) 
 //Start with the random number generator
 //const randomInt = (min,max) => Math.floor(Math.random() * (max - min + 1) + min)
 //const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`
 //console.log(randomColor);
 //Attach the event hanlder

 //both of these handlers here are now handling the same event 
 //document.querySelector('.nav__link').addEventListener('click',function(e) {//addEventListener is only listening for events in the bubbling phase, but not in the capturing phase. and the reason for that is that the capturing phase is usually irrelevant
    //this.style.backgroundColor = randomColor()
    //console.log('Link',e.target,e.currentTarget);//the target is essentially where the event originated and this is not the element on which the handler is actually attached


    //Stop propagation but not recommend
    //e.stopPropagation()//now, the two parent elements did not change their background colors, which means that the event never arrived at those elements because we stopped the propagation
    
 //})
 //this nav_links element is the parent of this nav__link
 //document.querySelector('.nav__links').addEventListener('click',function(e) {
  //this.style.backgroundColor = randomColor()
  //just as we learned before the event actually happens at the document root and from there it then travels down to the target element.
  //When we click this nav__links the nav__link remain unchange and when we click nav__link, the nav__links will be changing too because we are handling the same event
  //console.log('CONTAINER',e.target,e.currentTarget)

 
//})

 // this nav element is the parent of this nav__links
//document.querySelector('.nav').addEventListener('click',function(e) {
  //this.style.backgroundColor = randomColor()
  //Now when we click nav__link the nav will be changing color too because we are handling the same event
  //console.log('NAV',e.target,e.currentTarget)
  
  //where this used capture parameter is set to true, the event handler will no longer listen to bubbling events, but instead, to capturing events.
  //And the reason for that is that this element is now actually listening for the event as it travels down from the DOM, while these other ones are listening for the event, as it travels back up
  //},false)//if we really do want to catch events during the capturing phase,nwe can define a third parameter in the addEventlistener function

   /**
   * In the provided code, the phrase **"the same event"** refers to a single event that occurs when the user clicks on an element within the DOM. Specifically, this event is the `click` event.

When you click on the `.nav__link` element, the `click` event is generated and begins to propagate through the DOM tree. The propagation occurs in two main phases:

1. **Capturing Phase** (not used here but worth mentioning): The event travels from the root of the document down to the target element.
2. **Bubbling Phase**: After reaching the target element (the `.nav__link` in this case), the event then bubbles up from the target element through its parent elements up to the root of the document.

In your code, there are three event listeners attached to different elements:

1. **`.nav__link`**: The most specific target element, where the click event occurs directly.
2. **`.nav__links`**: The parent container of `.nav__link`.
3. **`.nav`**: The parent of `.nav__links`, and thus a grandparent of `.nav__link`.

### Explanation of "the same event":

- **Single Event Object**: When you click on the `.nav__link` element, a single `click` event is generated. This event object is passed to each of the event listeners attached to the elements as the event bubbles up through the DOM tree.
  
- **Propagation**: The event object first triggers the event listener on the `.nav__link` element, then it propagates (bubbles) up to the `.nav__links` element, and finally to the `.nav` element. At each stage of bubbling, the same event object is used, meaning the properties of `e.target`, `e.currentTarget`, and other event properties remain consistent across all event handlers.

- **Event Handlers Handling the Same Event**: When the video says that both handlers are handling the same event, it means that even though there are separate event listeners on `.nav__link`, `.nav__links`, and `.nav`, all of these listeners are responding to the same `click` event that originated from the user's action on the `.nav__link`.

### `e.target` vs. `e.currentTarget`:

- **`e.target`**: The element where the event originally occurred (the element that was clicked). In this case, it would always be `.nav__link` since that is where the click happened.
  
- **`e.currentTarget`**: The element to which the current event handler is attached. This will change depending on which event listener is executing:
  - For the `.nav__link` listener, `e.currentTarget` will be `.nav__link`.
  - For the `.nav__links` listener, `e.currentTarget` will be `.nav__links`.
  - For the `.nav` listener, `e.currentTarget` will be `.nav`.

In summary, the phrase **"the same event"** highlights that despite multiple event listeners responding to a click, they all handle the single `click` event that bubbles up through the DOM tree.
   */

/////////////////////////////////////////////////
//Event Delegation: Implementing Page Navigation

 //implement without using event delegation
 //So we put the ID of the elements that we want to scroll to in the href attribute, so that then in the JavaScript, we can read that, so we can read that href, and then we can select the element that we want to scroll to.

 //The problem is this way it's not really efficient. So we are adding here the exact same callback function to this event handler here, we are adding it once to each of these three elements. So the exact same function is now attached to these three elements.
 //I mean, of course it would be fine for only three elements, but what if we had 1000, or like 10,000 elements? If we were to attach an event handler to 10,000 elements like this, so like we did here with the forEach function, then we would effectively be creating 10,000 copies of this same function here.
 //document.querySelectorAll('.nav__link').//This will return a node list and now we can use it for each method in order to attach an event handler to each of the elements that are in the node list
 //forEach(element => {
  //element.addEventListener('click',function(e){
    //e.preventDefault()
    //console.log('Link');
    //implement the smooth navigation
    //we used the getAttribute function here because we don't want the absolute URL, and so that's why I cannot write this.href.
    //const id = this.getAttribute('href')//Getting the anchor that we defined in HTML
    //console.log(id);// this exact string that we get from the href attribute, is already the selector

    //document.querySelector(id).scrollIntoView({behavior:'smooth'})//the element now selected and now all we need is to call, scrollIntoView, and then with behavior set to smooth.
  //})
 //});

 //So in event delegation, we use the fact that events bubble up. And we do that by putting the eventListener on a common parent of all the elements that we are interested in.

 //in event delegation, we basically need two steps. First, we add the event listener to a common parent element of all the elements that we're interested in.
 //in that event listener, determine what element originated the event. So that we can then work with that element where the event was actually created
 //This a lot more efficient than simply attaching the same event handler to multiple elements. Instead, we edit one big event handler function to the parent element of all the elements that we're interested in, and then we simply determined where the click event came from.
  document.querySelector('.nav__links').addEventListener('click',
    function(e){
      e.preventDefault()
      console.log(e.target);//figure out where the event actually happened
      //as we click somewhere here in the middle, then we see that the click happened in the nav_links, not in one of the links 
      //And so now we need a matching strategy here order to match only the elements that we are actually interested in now and n this case, the best way to do that, is to simply check if the target has this nav__link class
      //Matching strategy
      if(e.target.classList.contains('nav__link')){
        console.log('LINK');
        // const id = this.getAttribute('href')//the href attribute is now on the element that was clicked.
        const id = e.target.getAttribute('href')
        console.log(id);
        document.querySelector(id).scrollIntoView({behavior:'smooth'})
      }
    }
  )

/////////////////////////////////////////////////
//DOM Traversing

 //Dom traversing is  walking through the Dom. Which means that we can select an element based on another element.
 const h12 = document.querySelector('h1')
 //Going downwards: child
 //selects all the elements with the highlight class that are children of the h1 element. and that would work no matter how deep these child elements would be inside of the h1 element
 console.log(h12.querySelectorAll('.highlight'));
 console.log(h12.childNodes);//This gives us every single node of every single type that there exists.
 
 //This then gives us an HTMLCollection which remembers is a live collection, so it's updated, and so here we indeed only get the three elements that are actually inside of the h1.
 //this one works only for direct children
 console.log(h12.children);


 h12.firstElementChild.style.color = 'orange' //the first child here gets  color set to white.

 h12.lastElementChild.style.color = 'green'

 //Going upwards : parents
 console.log(h12.parentNode);
 console.log(h12.parentElement);

 // let's say that on the page, we had multiple headers so multiple elements with a class of header, but for some reason we only wanted to find the one that is a parent element of h1
 // So the closest parent element that has header class and then it's simply applied all style to that element.
 h12.closest('.header').style.background = 'var(--color-primary-darker)';//Using the custom properties from css

 //So we can think of closest here as basically being the opposite of querySelector. So both receive a query string as an input but querySelector finds children no matter how deep in the Dom tree, while the closest method finds parents no matter how far up in the Dom tree.

 //Going sideways : siblings 
 //in JavaScript, we can only access direct siblings basically only the previous and the next one
 console.log(h12.previousElementSibling);// this is the first child of this parent element, and therefore it doesn't have a previous sibling but it has a next sibling
 console.log(h12.nextElementSibling);
 
 //the same properties for nodes
 console.log(h12.previousSibling);
 console.log(h12.nextSibling);
 
 //if we really need all the siblings and not just the previous and the next one then we can use the trick of moving up to the parent element and then read all the children from there
 console.log(h12.parentElement.children);
 [...h12.parentElement.children].forEach(function(el){//This is not an array but it is still an iterable that we can spread into an array
   //loop over that array and change some style to all the siblings, but accept the element itself.
   if(el !== h1){//check if the element is different or equal h1 because h1 is or original element itself
      el.style.transform = 'scale(0.5)'// By scaling them by 50% and all the other three siblings are now like 50% smaller
   }
 })

/////////////////////////////////////////////////
//Building a Tabbed Component

 //In the three tabs, first one  has the operations content active class. And so therefore this one is visible and all the others are hidden.

 const tabs = document.querySelectorAll('.operations__tab')
 const tabsContainer = document.querySelector('.operations__tab-container')
 const tabsContent = document.querySelectorAll('.operations__content')//tabsContent is document.querySelectorAll because we have three of them

 //Adding button
 
 // this here is a bad practice because what if we had like 200 tabs then we would have 200 copies of this exact callback function here and that would simply slow down the page
 // tabs.forEach(t => t.addEventListener('click',()=>{console.log('TABS');})) 

 //for event delegation, we need to attach the event handler on the common parent element of all the elements that we're interested in
 tabsContainer.addEventListener('click',function(e){
  //Figure out which button was clicked
  
  //const clicked = e.target.parentElement//We add the parentElement so when we click on the number, we get the button.And that's because that is the parent element of the span.But now we will also get the parent of the button element.
  const clicked = e.target.closest('.operations__tab')//So  instead of always selecting the parent element we will search basically for the closest operations tab
  console.log(clicked);// there is a problem when we click here on this number, we did not get a button but we got the span element and that's because inside of this button, we actually have another element name span.

  //Guard clause
  if(!clicked) return;//ignore any clicks where the result is then null and where there is no matching parent element to be found of the operation__tabs
    
  //before we add operations__tab--active class here to anyone, we will simply remove it on all of the tabs
  tabs.forEach(t => t.classList.remove('operations__tab--active'))
  //So tabsContent  is also a nodeList because of querySelectorAll that we can now loop over and then remove that active class from all of them.
  tabsContent.forEach(c => c.classList.remove('operations__content--active'))
  
  clicked.classList.add('operations__tab--active')//Adding the active button class
  console.log(clicked.classList);
  console.log(clicked.dataset.tab);
  
  //Activate the content area
  //Check and see the css to check for operations__content makes it display none which basically hides it. But then as it becomes operations__content--active, we give it display grid and then specify all of these properties down
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
 })

/////////////////////////////////////////////////
//Passing Arguments to Event Handlers
 
 //Menu fade animation 

 //the effect is this when we hover over one of the links in the nav bar, all the others fade out like. And that includes even the logo there on the left side
 //Find the common parent element of all of the links, including the logo .




  