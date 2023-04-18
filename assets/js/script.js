
var timeEl = document.querySelector ("#timer");
var timeLeft = 90;
var timerInterval = 0;
var coverPage = document.querySelector("#cover-page");
var quiz = document.querySelector("#quiz");
var startQuiz = document.querySelector(".start-quiz");
var questionsEl = document.querySelector(".ask");
var optionEl = document.querySelector("#choices");
var option1 = document.querySelector(".choice1");
var option2 = document.querySelector(".choice2");
var option3 = document.querySelector(".choice3");
var option4 = document.querySelector(".choice4");
var message = document.querySelector(".message")
var highScore = 0
var questionNumber = 0
var rightAnswer = ""
var userAnswer = ""
var questions = [
    {
        question: "1. String values must be enclosed within ______ when being assigned to values.",
        answers: ["1. parenthesis", "2. curly brackets", "3. quotes","4. all of the above"],
        rightAnswer: "answer3"
    },
    {
        question: "2. Arrays in JavaScript can be used to store ______.",
        answers: ["1. Numbers and strings", "2. booleans", "3. Other arrays", "4. All of the above"],
        rightAnswer: "answer4"
    },
    {
        question: "3. Commonly used data types DO NOT include:",
        answers: ["1. numbers", "2. alerts", "3. booleans", "4. strings"],
        rightAnswer: "answer2"
    },
    {
        question: "4. The condition in an if/else statement is enclosed with ______.",
        answers: ["1. parenthesis", "2. square brackets", "3. booleans", "4. curly brackets"],
        rightAnswer: "answer1"
    }]
startQuiz.addEventListener("click", startGame);
function setTime() {
    timerInterval = setInterval(function() {
        timeEl.textContent = "Time: " + timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            logScore();
        } else{timeLeft--;}
    }, 1000
    )
}
function startGame(event) {
    event.preventDefault()
    setTime()
    displayQuestion(questions)
    coverPage.classList.add("d-none")
    quiz.classList.remove("d-none")
    quiz.classList.add("d-block")
}
function displayQuestion(array) {
    if (questionNumber < array.length) {
       rightAnswer = array[questionNumber].rightAnswer
       questionsEl.innerHTML = array[questionNumber].question
       const choices = array[questionNumber].answers
       for (let i = 0; i < choices.length; i++) {
        const element = choices[i];
        const answerBtn = document.createElement("button")
        answerBtn.setAttribute("class", "answerBtn")
        answerBtn.textContent = element
        optionEl.append(answerBtn)
       }
    } else {
        alert("game over")
        highScore = timeLeft
        clearInterval(timerInterval)
    }
}
document.addEventListener("click", function(event){
    event.preventDefault()
    if (event.target && event.target.matches(".answerBtn")) {
        userAnswer = event.target.textContent
        if (userAnswer === rightAnswer) {
          message.textContent = "correct"  
        }
        else {message.textContent = "incorrect"
        timeLeft -= 10
    }
questionNumber++
setTimeout(() => {
    questionsEl.innerHTML = ""
    optionEl.innerHTML = ""
    displayQuestion(questions)
}, 500);
    }
})

option1.addEventListener("click", select1);
function select1() {
    incorrect.setAttribute("style", "display:block");
    correct.setAttribute("style", "display:none");
    if (timeLeft >= 10) {
        timeLeft -= 10;
    } else {
        clearInterval(timerInterval);
        logScore();
    }
    questionNumber++
    if (questionNumber >= questions.length) {
        clearInterval(timerInterval);
        logScore();
        
    }
    if (timeLeft === 0) {
        clearInterval(timerInterval)
        logScore();
    }

};

option2.addEventListener("click", select2);
function select2() {
    incorrect.setAttribute("style", "display:block");
    correct.setAttribute("style", "display:none");
    if (timeLeft >= 10) {
        timeLeft -= 10;
    } else {
        clearInterval(timerInterval);
        logScore();
    }
    questionNumber++
    if (questionNumber >= questions.length) {
        clearInterval(timerInterval);
        logScore();
        
    }
    if (timeLeft === 0) {
        clearInterval(timerInterval)
        logScore();
    }

};

option3.addEventListener("click", select3);
function select3() {
    incorrect.setAttribute("style", "display:block");
    correct.setAttribute("style", "display:none");
    if (timeLeft >= 10) {
        timeLeft -= 10;
    } else {
        clearInterval(timerInterval);
        logScore();
    }
    questionNumber++
    if (questionNumber >= questions.length) {
        clearInterval(timerInterval);
        logScore();
        
    }
    if (timeLeft === 0) {
        clearInterval(timerInterval)
        logScore();
    }

};

option4.addEventListener("click", select4);
function select4() {
    incorrect.setAttribute("style", "display:block");
    correct.setAttribute("style", "display:none");
    if (timeLeft >= 10) {
        timeLeft -= 10;
    } else {
        clearInterval(timerInterval);
        logScore();
    }
    questionNumber++
    if (questionNumber >= questions.length) {
        clearInterval(timerInterval);
        logScore();
        
    }
    if (timeLeft === 0) {
        clearInterval(timerInterval)
        logScore();
    }

};


var finalScore = document.querySelector(".finalScore");
var highScore = document.querySelector(".highScore");
function logScore() {
    quiz.setAttribute("style", "display:none");
    timeEl.textContent = "Time: " + timeLeft;
    finalScore.textContent = "Your final score is " + timeLeft + ".";
    highScore.setAttribute ("style", "display:block");
};

var choices = document.querySelector("#choices");
var initialInput = document.querySelector("input");
choices.addEventListener("mouseover", hideFeedback);
initialInput.addEventListener("click", hideFeedback);
function hideFeedback() {
    correct.setAttribute("style", "display:none");
    incorrect.setAttribute("style", "display:none");
};

var scoreArray = [];
function setScore () {
    localStorage.setItem("local-scoreArray", JSON.stringify(scoreArray));
}

var submit = document.querySelector(".submit");
var viewScores = document.querySelector("a");
var scoreBankEL = document.querySelector("#score-bank");
submit.addEventListener("click", highScoreLog);
function highScoreLog() {
    highScore.setAttribute("style", "display:none");
    timeEl.setAttribute("style", "display:none");
    viewScores.setAttribute("style", "display:none");
    correct.setAttribute("style", "display:none");
    incorrect.setAttribute("style", "display:none");
    scoreBankEL.setAttribute("style", "display:block");

    var userScores = {
        name: initialInput.value,
        timeFinished: timeLeft
    };

    scoreArray.push(userScores);
    setScore();
    renderScores
};

var scoreDataEl =document.querySelector("#scoredata");
function renderScores() {
    for (var i = 0; i < scoreArray.length; i++) {
        var score = scoreArray[i];
        var li = document.createElement("li");
        li.textContent = scoreName + " - " + score.timeFinished;

        scoreDataEl.appendChild(li);
    } 
}

getScores();

var goBack = document.querySelector(".back");
goBack.addEventListener("click", function() {
    location.reload()
});

var clearScores = document.querySelector(".clear");
clearScores.addEventListener("click", function() {
    scoreDataEl.innerHTML="";
    localStorage.clear();
});

viewScores.addEventListener("click", function() {
    highScore.setAttribute("style", "display:none");
    timeEl.setAttribute("style", "display:none");
    viewScores.setAttribute("style", "display:none");
    correct.setAttribute("style", "display:none");
    incorrect.setAttribute("style", "display:none");
    scoreBankEL.setAttribute("style", "display:block");
    coverPage.setAttribute("style", "display:none");
    quiz.setAttribute("style", "display:none");
    getScores();
    renderScores();
});
