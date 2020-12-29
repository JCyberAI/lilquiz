//Declareing variables of certian HTML classes (in Divs) & elements

//var startBtn = document.querySelectorAll(".startBtn");
var rules = document.querySelectorAll(".debriefing");
var quizBox = document.querySelectorAll(".quizBox");
var resultBox = document.querySelectorAll(".resultBox");

//Delcaring an array for the variables 

var bodyContent = ["startBtn", "rules", "quizBox", "resultBox"];

// Declaring the function
boxedContent()

//Declaring a function to go through the array

function boxedContent () {
    
    document.getElementsByClassName("startBtn").onclick = function otherContent() {
    document.getElementsByClassName("startBtn").getElementsByClassName("activeInfo");

    }
}

/*for (i = 0; i < bodyContent.length; i++) {
    console.log(boxedContent);
}*/