//Declareing variables of certian HTML classes (in Divs) & elements

var startBtn = document.querySelectorAll(".startBtn, button");
var rules = document.querySelectorAll(".debriefing");
var quizBox = document.querySelectorAll(".quizBox, header, section, footer");
var resultBox = document.querySelectorAll(".resultBox");

//Delcaring an array for the variables 

var bodyContent = ["startBtn", "rules", "quizBox", "resultBox"];

//Declaring a function to go through the array

function boxedContent() {
    for (bodyContent = 0; i < bodyContent.length; i++) {
        console.log(boxedContent);
    }
}

// If statement saying when start button is clicked switch the user window to rules
if (startBtn === onclick) {
    boxedContent.add("activeInfo");
}