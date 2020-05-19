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


The pilot and co-pilot names should be strings and the fuel level and cargo mass should be numbers.
*/
document.addEventListener("DOMContentLoaded", function() {
   //variable dictionary
   const pilotName = document.getElementById("pilotName");
   const coPilotName = document.getElementById("copilotName");
   const fuelLevel = document.getElementById("fuelLevel");
   const cargoMass = document.getElementById("cargoMass");
   const buttonPress = document.getElementById("launchForm");
   let alertRequiredChanges = false;
   let alertMessage = "Unable to process your information. \n";

   //a doom-stack of functions
   function isNanPilotName() {
      if (isNaN(pilotName.value)) {
         //send info
         return alertMessage += "pilot is a string";
      } else {
         alertRequiredChanges = true;
         alertMessage += "Pilot name needs to be a string of letters... \n";
      }
   }

   function isNanCoPilotName() {
      if (isNaN(coPilotName.value)) {
         //send info
         return alertMessage += "co-pilot is a string";
      } else {
         alertRequiredChanges = true;
         alertMessage += "Co-pilot name needs to be a string of letters... \n";
      }
   }

   function isNumberFuelLevel() {
      if (isNaN(fuelLevel.value)) {
         alertRequiredChanges = true;
         alertMessage += "Fuel level name needs to be a number... \n";
      } else {
         //send info
         alert("fuelLevel is a number");
      }
   }

   function isNumberCargoMass() {
      if (isNaN(cargoMass.value)) {
         alertRequiredChanges = true;
         alertMessage += "Cargo mass name needs to be a number... \n";
      } else {
         //send info
         alert("cargoMass is a number");
      }
   }
   

   //the button hath been pressed
   buttonPress.addEventListener("submit", function() {
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

      //inform user of any problems or send the data
      if (alertRequiredChanges) {
         alert(alertMessage);
      } else {
         //send the data
      }
   
      
   })






});