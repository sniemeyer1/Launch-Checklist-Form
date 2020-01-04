// Write your JavaScript code here!

window.addEventListener("load", function() {
  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  let launchStatus = document.getElementById("launchStatus");
  let faultyItems = document.getElementById("faultyItems");

  let form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");
    if (
      pilotName.value === "" ||
      copilotName.value === "" ||
      cargoMass.value === "" ||
      fuelLevel.value === ""
    ) {
      alert("All fields are required.");
    } else {
      faultyItems.style.visibility = "visible";
      pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
      copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready for launch.`;

      if (fuelLevel.value < 10000) {
        fuelStatus.innerHTML = "Fuel level is too low.";
        launchStatus.innerHTML = `Shuttle not ready for launch.`;
        launchStatus.style.color = "red";
      } else if (cargoMass.value > 10000) {
        cargoStatus.innerHTML = "Mass too large.";
        launchStatus.innerHTML = `Shuttle not ready for launch.`;
        launchStatus.style.color = "red";
      } else {
        launchStatus.innerHTML = `Shuttle is ready to launch!`;
        launchStatus.style.color = "green";
      }
    }
  });
});

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
