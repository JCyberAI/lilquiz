//Declareing variables of certian HTML classes (in Divs) & elements

var startBtn = document.querySelectorAll("div.startBtn, button");
var rules = document.querySelectorAll("div.debriefing, div.debriefingTitle, div.debriefingList, div.buttons, ");
var quizBox = document.querySelectorAll("div.quizBox, header, section, footer");
var results = document.querySelectorAll("div.icon, div.completeText, div.endButtons");

//Delcaring an array for the variables 

var bodyContent = ["startBtn", "rules", "quizBox", "results"];

//Declaring a function to go through the variables

function boxedContent() {
    for (bodyContent = 0; i < bodyContent.length; i++) {
        console.log(boxedContent);
    }
}
