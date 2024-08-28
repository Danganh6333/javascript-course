'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

///////////////////////////////////////////////////////////////////////////////////
// How to Plan a Web Project

 /**
  * This video is a guide on how to plan a web project, focusing on the Mapty project. It emphasizes the importance of planning before coding to avoid confusion and problems later. The planning process is broken down into four main steps: 

1. **User Stories**:  
   - **Purpose**: Describe the application’s functionality from the user's perspective.
   - **Format**: "As a [type of user], I want to [perform an action] so that I can [achieve a benefit]."
   - **Example User Stories for Mapty**:
     - Log running workouts with location, distance, time, pace, and steps per minute.
     - Log cycling workouts with location, distance, time, speed, and elevation gain.
     - View all workouts at a glance to track progress over time.
     - View workouts on a map to check where workouts happen the most.
     - Retain all workout data when the app is reopened.

2. **Features**:  
   - Features are derived from user stories and are the essential elements to satisfy the user's needs.
   - **Key Features for Mapty**:
     - Map with geolocation and click-to-add workout functionality.
     - Forms for logging running and cycling workouts with appropriate data fields.
     - List of workouts and display on the map.
     - Local storage to save and retrieve workout data across sessions.
     - Functionality to move the map to a workout’s location when selected from the list.

3. **Flow Chart**:  
   - **Purpose**: Visualize how different parts of the app interact and how data flows.
   - **Components**:
     - **Events**: Start with the page load, where geolocation fetches the user's coordinates.
     - **Rendering**: Map centered on the user's location, display of forms, and rendering of workouts on the map and list.
     - **Asynchronous Operations**: Fetching location data before rendering the map, storing, and retrieving workouts from local storage.
     - **Event Handlers**: Handling form submission, storing data, and clicking on workouts in the list to move the map.

4. **Architecture**:  
   - **Purpose**: Organize code and determine the structure of the application.
   - **Approach**:
     - Start with basic coding and feature implementation.
     - Refine and develop the architecture as the project grows, based on the needs and features.
     - Flexibility in planning; detailed architecture is not always necessary at the beginning.

The video concludes by encouraging experimentation during implementation and refining the architecture as the project progresses. The planning phase is crucial for understanding the project’s structure and ensuring smooth development.
  */

///////////////////////////////////////////////////////////////////////////////////
//Using the Geolocation API

 //in the script that we include in leaflets.js, the L variable is a global variable that we then can access from all the other scripts

 //Adding geolocation 
 if (navigator.geolocation) // test if this navigator.geolocation actually exists
 navigator.geolocation.getCurrentPosition(function(postion){
    //this is the success one
    console.log(postion);
    const {latitude,longitude} = postion.coords //Using destructring to extract latiude
    console.log(latitude,longitude);
    //Get the current position on Google maps
    console.log(`https://www.google.com/maps/@${latitude},${longitude},15z?entry=ttu`);
    const map = L.map('map').setView([51.505, -0.09], 13);//whatever string that we pass here into this map function must be the ID name of an element in our HTML. And it is in that element where the map will be displayed.

    // this tile layer is where we actually need to define the tiles of our map
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { // this L here this is basically the main function that Leaflet gives us as an entry point 
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     }).addTo(map);
    //display markers

    L.marker([51.5, -0.09]).addTo(map).bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();
},function() {
    //this is the error one
    alert('Could not get your position')
}
  /**
  * And now this function here takes as an input to Callback functions. And the first one is to Callback function that will be called on success.
  * So whenever the browser successfully got the coordinates
  * of the current position of the user and to second callback is the Error Callback
  * which is the one that is gonna be called when there happened an error while getting the coordinates.
  */
) 
console.log(firstName);//this first name variable is a global variable here in this script
//any variable that is global in any script will be available to all the other scripts while as long as they appear after that script included in the HTML