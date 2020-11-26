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
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json){
         let div = document.querySelector('#missionTarget')
         let randChoice = Math.floor(Math.random()*6)
         div.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[randChoice].name}</li>
               <li>Diameter: ${json[randChoice].diameter}</li>
               <li>Star: ${json[randChoice].star}</li>
               <li>Distance from Earth: ${json[randChoice].distance}</li>
               <li>Number of Moons: ${json[randChoice].moons}</li>
            </ol>
            <img src="${json[randChoice].image}">
         `;
      })
                   
   });
})

window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
       let pilotName = document.querySelector("input[name=pilotName]");
       let copilotName = document.querySelector("input[name=copilotName]");
       let fuelLevel = document.querySelector("input[name=fuelLevel]");
       let cargoMass = document.querySelector("input[name=cargoMass]");
       let faultyItems = document.querySelector("#faultyItems")
       let pilotStatus = document.querySelector('#pilotStatus')
       let copilotStatus = document.querySelector('#copilotStatus')
       let fuelStatus = document.querySelector('#fuelStatus')
       let cargoStatus = document.querySelector('#cargoStatus')
       let launchStatus = document.querySelector('#launchStatus')
       if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("All fields are required!");
         event.preventDefault();
       }
       else if(!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
         alert("Make sure you have valid information!");
         event.preventDefault();
       }
       else if(Number(cargoMass.value) > 10000 && Number(fuelLevel.value) < 10000){
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`
         cargoStatus.innerHTML = 'Cargo mass too much for launch'
         fuelStatus.innerHTML = 'Fuel level too low for launch'
         launchStatus.innerHTML = 'Shuttle Not Ready For Launch'
         launchStatus.style.color = 'red'
         faultyItems.style.visibility = 'visible';
         event.preventDefault();
       }
       else if(Number(fuelLevel.value) < 10000){
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`
         fuelStatus.innerHTML = 'Fuel level too low for launch'
         cargoStatus.innerHTML = 'Cargo mass low enough for launch'
         launchStatus.innerHTML = 'Shuttle Not Ready For Launch'
         launchStatus.style.color = 'red'
         faultyItems.style.visibility = 'visible';
         event.preventDefault();
       }
       else if(Number(cargoMass.value) > 10000){
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`
         cargoStatus.innerHTML = 'Cargo mass too much for launch'
         fuelStatus.innerHTML = 'Fuel level high enough for launch'
         launchStatus.innerHTML = 'Shuttle Not Ready For Launch'
         launchStatus.style.color = 'red'
         faultyItems.style.visibility = 'visible';
         event.preventDefault();
       }
       else {
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`
         cargoStatus.innerHTML = 'Cargo mass low enough for launch'
         fuelStatus.innerHTML = 'Fuel level high enough for launch'
         launchStatus.innerHTML = 'Shuttle is ready for launch'
         launchStatus.style.color = 'green'
         faultyItems.style.visibility = 'visible';
         event.preventDefault();
       }
   });
});