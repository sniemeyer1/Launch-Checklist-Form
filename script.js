// Write your JavaScript code here!

window.addEventListener("load", function() {
  let missionTargetElement = document.getElementById("missionTarget");
  fetch("https://handlers.education.launchcode.org/static/planets.json").then(
    function(response) {
      response.json().then(function(json) {
        missionTargetElement.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
              <li>Name: ${json[0].name}</li>
              <li>Diameter: ${json[0].diameter}</li>
              <li>Star: ${json[0].star}</li>
              <li>Distance from Earth: ${json[0].distance}</li>
              <li>Number of Moons: ${json[0].moons}</li>
            </ol>
            <img src="${json[0].image}">
            `;
      });
    }
  );

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

// This block of code shows how to format the HTML once you fetch some planetary JSON!
