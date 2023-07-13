var startButton = document.querySelector("#start-button");
var questionOne = document.querySelector("#question-1");
var questionTwo = document.querySelector("#question-2");
var questionThree = document.querySelector("#question-3");
var questionFour = document.querySelector("#question-4");
var questionFive = document.querySelector("#question-5");
var start = document.querySelector("#start");
var questions = document.querySelector(".questions");
var answerButton = document.querySelector(".answer-button");
var isCorrect = document.querySelector(".correct");
var isIncorrect = document.querySelector(".incorrect");

//this function hides the questions and the answers choices for the buttons
function hideQuestions(){
    questionOne.style.display = "none";
    questionTwo.style.display = "none";
    questionThree.style.display = "none";
    questionFour.style.display = "none";
    questionFive.style.display = "none";
}

//Hides the text for weather an answer is correct or not
function hideCorrect(){
    isCorrect.style.display = "none";
    isIncorrect.style.display = "none";
}

//calls the quiz start funciton when start is clicked
startButton.addEventListener("click", function(){
    start.style.display = "none";
    quizStart();
})


function quizStart(){
    questionOne.style.display = "flex";

}

questions.addEventListener("click", function(event){
    var element = event.target;
    var state = element.getAttribute("data-bool");

    if (state == "true"){
        questionOne.style.display = "none";
        questionTwo.style.display = "flex";
        isCorrect.style.display = "flex";
        setTimeout(hideCorrect, 3000);
        return;
    }
    else{
        questionOne.style.display = "none";
        questionTwo.style.display = "flex";
        isIncorrect.style.display = "flex";
        setTimeout(hideCorrect, 3000);
        return;
    }
});

hideQuestions();
hideCorrect();