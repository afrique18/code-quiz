
var timeEl = document.querySelector ("#timer");
var timeLeft = 90;
var timerInterval = 0;
var coverPage = document.querySelector("#cover-page");
var quiz = document.querySelector("#quiz");
var startQuiz = document.querySelector(".start-quiz");
var questionsEl = document.querySelector(".ask");
var optionEl = document.querySelector("#choices");
var option2 = document.querySelector(".choice2");
var option3 = document.querySelector(".choice3");
var option4 = document.querySelector(".choice4");
var message = document.querySelector(".message")
var highScore = 0
var questionNumber = 0
var rightAnswer = ""
var userAnswer = ""
var starrtQuiz = document.querySelector(".start-quiz")
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
    },
]
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
        else{ message.textContent = "incorrect"
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