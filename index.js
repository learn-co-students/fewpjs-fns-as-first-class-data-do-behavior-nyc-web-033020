/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(input) {
//if the time is earlier than 12pm, return "Good Morning"
let time = parseInt(input)
if (time < 12.00)
  return "Good Morning"
  else if (time > 12.00 && time < 17.00)
  return "Good Afternoon"
  else
  return "Good Evening"
}

/* Write your implementation of displayMessage() */

function displayMessage(param){
document.getElementById("greeting").innerText = param;
}

