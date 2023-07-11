var startButton = document.querySelector("#start-button");
var questionOne = document.querySelector("#question-1");
var start = document.querySelector("#start");
var questions = document.querySelector(".questions");



function hideQuestions(){
    questionOne.style.display = "none";
}


startButton.addEventListener("click", function(){
    start.style.display = "none";
    quizStart();
})

function quizStart(){
    questionOne.style.display = "flex";

}

questions.addEventListener("click", function(event){
    var element = event.target;

    if(element.matches("answer-button")){
        
    }
});

hideQuestions();