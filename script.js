//Declareing variables of certian HTML classes (in Divs) & elements

var startBtn = document.querySelectorAll("startBtn");
var rules = document.querySelectorAll(".debriefing");
var quizBox = document.querySelectorAll(".quizBox");
var resultBox = document.querySelectorAll(".resultBox");
var timmerSec = document.querySelectorAll("quizBox, header, timer, timerSec");
var timer = document.getElementById("timer");
var secondsLeft = 30;


// Declaring the functions
boxedContent();
setTime();

//Declaring a function to go through the array

function boxedContent() {

    var bodyContent = [startBtn, rules, quizBox, resultBox];

    for (i = 0; i < bodyContent.length; i++) {
        startBtn.appendChild("activeInfo");
    }

}

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

