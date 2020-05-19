// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

document.addEventListener("DOMContentLoaded", function() {

   //variable dictionary
   const missionTarget = document.getElementById('missionTarget');

   const pilotName = document.getElementById("pilotName");
   const coPilotName = document.getElementById("copilotName");
   const fuelLevel = document.getElementById("fuelLevel");
   const cargoMass = document.getElementById("cargoMass");
   const buttonPress = document.getElementById("launchForm");

   const pilotStatus = document.getElementById('pilotStatus');
   const coPilotStatus = document.getElementById('copilotStatus');
   const fuelStatus = document.getElementById('fuelStatus');
   const cargoStatus = document.getElementById('cargoStatus');
   const displayDiv = document.getElementById('displayDiv');
   const launchStatus = document.getElementById('launchStatus');

   let alertRequiredChanges = false;
   let alertMessage = "";

   //a doom-stack of functions
   function isNanPilotName() {

      if (isNaN(pilotName.value)) {

         pilotStatus.innerText = `Pilot ${pilotName.value} is ready!`;
         pilotStatus.style.color = 'black';

      } else {

         pilotStatus.innerText = `Pilot name needs to be a string of letters...`;
         pilotStatus.style.color = 'red';
         return alertRequiredChanges = true;

      }
   }

   function isNanCoPilotName() {

      if (isNaN(coPilotName.value)) {

         coPilotStatus.innerText = `Co-Pilot ${coPilotName.value} is ready!`;
         coPilotStatus.style.color = 'black';

      } else {

         coPilotStatus.innerText = `Co-pilot name needs to be a string of letters...`;
         coPilotStatus.style.color = 'red';
         return alertRequiredChanges = true;

      }
   }

   function isNumberFuelLevel() {

      if (isNaN(fuelLevel.value)) {

         fuelStatus.innerText =  `Fuel level name needs to be a number...`;
         fuelStatus.style.color = 'red';
         return alertRequiredChanges = true;

      } if (fuelLevel.value < 10000) {

         fuelStatus.innerText =  `Fuel levels too low: ${fuelLevel.value} liters`;
         fuelStatus.style.color = 'red';
         return alertRequiredChanges = true;

      } else {

         fuelStatus.innerText =  `Fuel levels nominal: ${fuelLevel.value} liters`;
         fuelStatus.style.color = 'black';

      }
   }

   function isNumberCargoMass() {

      if (isNaN(cargoMass.value)) {

         cargoStatus.innerText = `Cargo mass name needs to be a number...`;
         cargoStatus.style.color = 'red';
         return alertRequiredChanges = true;

      } if (cargoMass.value > 10000) {
         
         cargoStatus.innerText =  `Cargo mass too heavy: ${cargoMass.value} kilograms`;
         cargoStatus.style.color = 'red';
         return alertRequiredChanges = true;

      } else {
         
         cargoStatus.innerText = `Cargo mass nominal: ${cargoMass.value} kilograms`;
         cargoStatus.style.color = 'black';

      }
   }

   //the fetch of pooch-planet
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {

               response.json().then( function(json) {

                  let randomDestination = Math.floor(Math.random() * Math.floor(json.length));

                  missionTarget.innerHTML = `
                     <h2>Mission Destination</h2>
                     <ol>
                        <li>Name: ${json[randomDestination].name}</li>
                        <li>Diameter: ${json[randomDestination].diameter}</li>
                        <li>Star: ${json[randomDestination].star}</li>
                        <li>Distance from Earth: ${json[randomDestination].distance}</li>
                        <li>Number of Moons: ${json[randomDestination].moons}</li>
                     </ol>
                     <img src="${json[randomDestination].image}">
                  `;

               });

            });

   //the button hath been pressed
   buttonPress.addEventListener("submit", function() {
      
      alertRequiredChanges = false;
      alertMessage = "Unable to process your information. \n";
      launchStatus.style.color = 'black';
      launchStatus.innerText = 'Awaiting Information Before Launch';

      //check if an input is empty and end script after alert message
      if ((pilotName.value === "") || (coPilotName.value === "") || (fuelLevel.value === "") || (cargoMass.value === "")) {

         alertRequiredChanges = true;
         alertMessage += "Form inputs cannot be empty, you fool... \n";
         alert(alertMessage);
         return event.preventDefault();

      }    
      
      //processing each form input's value
      isNanPilotName();
      isNanCoPilotName();
      isNumberFuelLevel();
      isNumberCargoMass();

      //1) inform user of any problems or 2) launch the shuttle!
      if (alertRequiredChanges) {
         launchStatus.style.color = 'red';
         launchStatus.innerText = 'Shuttle not ready for launch!';
         displayDiv.style.visibility = 'visible';
         return event.preventDefault();

      } else {
         displayDiv.style.visibility = 'visible';
         launchStatus.style.color = 'green';
         launchStatus.innerText = 'Shuttle is ready for launch!';
         return event.preventDefault();

      }
   
   });

});