//Declareing variables of certian HTML classes (in Divs) & elements

var startBtn = document.querySelector("startBtn");
var timmerSec = document.querySelector("timerSec");
var timer = document.getElementById("timer");
var secondsLeft = 30;


function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerSec.textContent = secondsLeft + " seconds left";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1800);
}

function sendMessage() {
    timerSec.textContent = " ";

    var message = document.createElement("div");

    message.setAttribute("alert", "Your time is up!");
    timer.appendChild(message);

}

// Declaring the functions
setTime();