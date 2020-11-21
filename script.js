// Calling all elements
var startBtn = document.querySelector("#start-btn button");
var debrief = document.querySelector("#debriefing");
var exitBtn = document.querySelector("#buttons quit");
var continueBtn = document.querySelector("#buttons continue");

//When Start Button Clicked, show the debrief box
if (startBtn) {
    debrief.add("debriefing-list");
} else {
    console.log(startBtn);
}

//When Exit Button Clicked, hide the debrief box
if (exitBtn) {
    debrief.remove("debriefing-list");
} else {
    console.log(exitBtn);
}

//When Continue Button Clicked, show the quiz box
if (continueBtn) {
    debrief.add("quiz-box");
}