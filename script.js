
function changeHeading() {
  document.getElementById("mainHeading").textContent = "Welcome to Our Campus!";
}

function changeCardColour() {
  document.getElementById("card1").style.backgroundColor = "#ffe7b8";
}

function toggleHighlights() {
  document.getElementById("highlights").classList.toggle("hidden");
}

function addEventName() {
  var name = document.getElementById("eventName").value;

  if (name === "") {
    document.getElementById("eventMessage").textContent = "Please enter an event name.";
    document.getElementById("addedEvent").textContent = "";
  } else {
    document.getElementById("eventMessage").textContent = "Event name submitted!";
    document.getElementById("addedEvent").textContent = "Your event: " + name;
  }
}

function changeEventCard() {
  document.getElementById("event1").style.backgroundColor = "#d9f5d9";
  document.getElementById("event1").style.border = "2px solid green";
}

function registerStudent() {
  var name = document.getElementById("studentName").value;
  var roll = document.getElementById("rollNumber").value;
  var email = document.getElementById("email").value;
  var event = document.getElementById("eventSelect").value;
  var message = document.getElementById("registrationMessage");

  if (name === "" || roll === "" || email === "" || event === "") {
    message.textContent = "Please fill in all fields.";
    message.style.color = "red";
  } else {
    message.textContent = "Thank you, " + name + "! You are registered for " + event + ".";
    message.style.color = "green";
  }
}

function changeRegisterSize() {
  document.getElementById("registerHeading").style.fontSize = "46px";
}

function toggleForm() {
  document.getElementById("registrationForm").classList.toggle("hidden");
}
