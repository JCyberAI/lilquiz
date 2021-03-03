//Declareing variables of certian HTML classes (in Divs) & elements

var startBtn = document.querySelector("startBtn");
var rules = document.querySelector(".debriefing");
var quizBox = document.querySelector(".quizBox");
var resultBox = document.querySelector(".resultBox");
var timmerSec = document.querySelector("timerSec");
var timer = document.getElementById("timer");
var quetext = document.getElementById("queText");
var choices = document.getElementById("choices");
var currentindex = 0
var secondsLeft = 30;
var timerId;

var questions = [

    {
        title: "What does CSS stand for?",
        choices: ["Cake Salad Squirrels", "Camel Sips Silence", "Cascading Style Sheets"],
        answer: "Cascading Style Sheets"
    },

    {
        title: "How do you call classes in CSS?",
        choices: ["$", "#", ".", "&"],
        answer: "."
    },

    {
        title: "When creating a function, what symbols must be used before the curly brackets?",
        choices: ["()", "{}", "[]"],
        answer: "()"
    },

    {
        title: "How does memory get stored on the client side?",
        choices: ["Local Storage", "Back Pocket", "Console", "In the oven"],
        answer: "Local Storage"
    },

    {
        title: "Where do APIs operate within a full stack application?",
        choices: ["Server", "Middleware", "Client-side", "All the above"],
        answer: "All the above"
    },

    {
        title: "What does 'npm i' do?",
        choices: ["Installs data", "Initiates a sequence", "Installs dependancies", "Blows up the computer"],
        answer: "Installs dependancies"
    }

]


// Declaring the functions
boxedContent();
setTime();


function startQuiz () {

    var startscreen = document.getElementById("startscreen");
    startscreen.setAttribute("class", "hide");
    timer.textContent = secondsLeft;
    timerId = setInterval(setTime, 1000)
    quetext.removeAttribute("class")

    questions();
}

function questions () {

    var currentquestion = questions[currentindex]
    quetext.textContent = currentquestion.title
    choices.innerHTML = ""

    currentquestion.choices.forEach (function (choice, i) {

        var choiceBtn = document.createElement ("button")
        choiceBtn.setAttribute("class", "choice")
        choiceBtn.setAttribute("value", choice)
        choiceBtn.textContent = i + 1 + " " + choice
        choiceBtn.onclick = verifyAnswer
        choices.appendChild(choiceBtn)

    })

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

startBtn.onclick = startQuiz;