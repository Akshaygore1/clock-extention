// Function to update the time every second
document.getElementById("clock").innerHTML = new Date().toLocaleTimeString();
setInterval(() => {
  document.getElementById("clock").innerHTML = new Date().toLocaleTimeString();
}, 1000);

// Function to display date with weekday
const dateElement = document.querySelector(".date");
const today = new Date();

// Array of weekday names
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Get weekday and format date
const formattedDate = `${
  weekdays[today.getDay()]
}, ${today.toLocaleDateString()}`;

// Set the formatted date in the .date element
dateElement.innerHTML = formattedDate;
