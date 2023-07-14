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
var timer = document.querySelector("#timer");
var scoreForm = document.querySelector("#final-score");
var initialsButton = document.querySelector("#initials-button");
var initials = document.querySelector("#initials-form");
var scoreText = document.querySelector("#score");
var finalScore = 0;
var quizEnd = false;
var timeLeft;
var score = 0;

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

function hideForm(){
    scoreForm.style.display = "none";
}

//calls the quiz start funciton when start is clicked
startButton.addEventListener("click", function(){
    start.style.display = "none";
    quizStart();
})


function quizStart(){
    questionOne.style.display = "flex";
    startTime();
}

function startTime(){
    timeLeft = 60;

    var timeInterval = setInterval(function(){
        timeLeft = timeLeft - 1;
        timer.textContent = "Time: "+timeLeft;
        
        if(timeLeft === 0){
            clearInterval(timeInterval);
            quizOver(timeLeft);
        }
        if(quizEnd === true){
            clearInterval(timeInterval);
            quizOver(timeLeft);
        }

    }, 1000);


}

function quizOver(time){
    hideQuestions();
    var timeLeft = time;
    finalScore = timeLeft +finalScore;
    scoreForm.style.display = "flex";
    scoreText.textContent = "Your final score is: "+finalScore;
    getInitials();
    console.log(getInitials);
}

function getInitials(){
    initialsButton.addEventListener("click", function(event){
        return initialsButton.value;
    })
}


questionOne.addEventListener("click", function(event){
    var element = event.target;
    var state = element.getAttribute("data-bool");

    if (state == "true"){
        questionOne.style.display = "none";
        questionTwo.style.display = "flex";
        isCorrect.style.display = "flex";
        setTimeout(hideCorrect, 3000);
        finalScore = finalScore + 5;
        return;
    }
    else{
        questionOne.style.display = "none";
        questionTwo.style.display = "flex";
        isIncorrect.style.display = "flex";
        setTimeout(hideCorrect, 3000);
        timeLeft = timeLeft - 5;
        return;
    }
});

questionTwo.addEventListener("click", function(event){
    var element = event.target;
    var state = element.getAttribute("data-bool");

    if (state == "true"){
        questionTwo.style.display = "none";
        questionThree.style.display = "flex";
        isCorrect.style.display = "flex";
        finalScore = finalScore + 5;
        setTimeout(hideCorrect, 3000);
        return;
    }
    else{
        questionTwo.style.display = "none";
        questionThree.style.display = "flex";
        isIncorrect.style.display = "flex";
        setTimeout(hideCorrect, 3000);
        timeLeft = timeLeft - 5;
        return;
    }
});

questionThree.addEventListener("click", function(event){
    var element = event.target;
    var state = element.getAttribute("data-bool");

    if (state == "true"){
        questionThree.style.display = "none";
        questionFour.style.display = "flex";
        isCorrect.style.display = "flex";
        finalScore = finalScore + 5;
        setTimeout(hideCorrect, 3000);
        return;
    }
    else{
        questionThree.style.display = "none";
        questionFour.style.display = "flex";
        isIncorrect.style.display = "flex";
        setTimeout(hideCorrect, 3000);
        timeLeft = timeLeft - 5;
        return;
    }
});

questionFour.addEventListener("click", function(event){
    var element = event.target;
    var state = element.getAttribute("data-bool");

    if (state == "true"){
        questionFour.style.display = "none";
        questionFive.style.display = "flex";
        isCorrect.style.display = "flex";
        finalScore = finalScore + 5;
        setTimeout(hideCorrect, 3000);
        return;
    }
    else{
        questionFour.style.display = "none";
        questionFive.style.display = "flex";
        isIncorrect.style.display = "flex";
        setTimeout(hideCorrect, 3000);
        timeLeft = timeLeft - 5;
        return;
    }
});

questionFive.addEventListener("click", function(event){
    var element = event.target;
    var state = element.getAttribute("data-bool");

    if (state == "true"){
        questionFive.style.display = "none";
        //questionTwo.style.display = "flex";
        isCorrect.style.display = "flex";
        setTimeout(hideCorrect, 3000);
        finalScore = finalScore + 5;
        quizEnd = true;
        return;
    }
    else{
        questionFive.style.display = "none";
        //questionTwo.style.display = "flex";
        isIncorrect.style.display = "flex";
        setTimeout(hideCorrect, 3000);
        quizEnd = true;
        timeLeft = timeLeft - 5;
        return;
    }
});



hideQuestions();
hideCorrect();
hideForm();