//Declareing variables of certian HTML classes (in Divs) & elements

var startBtn = document.querySelectorAll("div.startBtn, button");
var rules = document.querySelectorAll("div.debriefing");
var quizBox = document.querySelectorAll("div.quizBox, header, section, footer");
var resultBox = document.querySelectorAll("div.resultBox");

//Delcaring an array for the variables 

var bodyContent = ["startBtn", "rules", "quizBox", "resultBox"];

//Declaring a function to go through the variables

function boxedContent() {
    for (bodyContent = 0; i < bodyContent.length; i++) {
        console.log(boxedContent);
    }
}