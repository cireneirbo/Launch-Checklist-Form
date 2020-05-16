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
   const pilotName = document.getElementById("pilotName");
   const coPilotName = document.getElementById("copilotName");
   const fuelLevel = document.getElementById("fuelLevel");
   const cargoMass = document.getElementById("cargoMass");
   const buttonPress = document.getElementById("launchForm");


   buttonPress.addEventListener("submit", function() {
      let alertRequiredChanges = false;
      let alertMessage = "Unable to process your information. \n";
      if ((pilotName.value === "") || (coPilotName.value === "") || (fuelLevel.value === "") || (cargoMass.value === "")) {
         event.preventDefault();
      }
      if ((isNaN(pilotName.value) === true) && (isNaN(coPilotName.value) === true) && (isNaN(fuelLevel.value) === false) && (isNaN(cargoMass.value)=== false)) {
         alert("fuck ywh");
         
      } /*if (isNaN(pilotName.value) === false) {
         alertRequiredChanges = true;
         alertMessage += "Pilot name needs to be a string of letters, you robot-naming fool... \n";
      } if (isNaN(coPilotName.value) === false) {
         alertRequiredChanges = true;
         alertMessage += "Co-pilot name needs to be a string of letters, you robot-naming fool... \n";
      } if (isNaN(fuelLevel.value) === true) {
         alertRequiredChanges = true;
         alertMessage += "Fuel level name needs to be a string of letters, you robot-naming fool... \n";
      } if (isNaN(cargoMass.value)=== true) {
         alertRequiredChanges = true;
         alertMessage += "Cargo mass name needs to be a string of letters, you robot-naming fool... \n";
      }*/


      if (alertRequiredChanges) {
         alert(alertMessage);
      } else {
         alert("should send info now");
      }
      
      
   })






});