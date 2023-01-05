var startButtonEl = document.getElementById("btn-start");
var timerEl = document.getElementById("timer");
var hiddenQuestionEl = document.getElementById("hidden");
var userInputBox = document.getElementById("user-input-box");
var userInputName = document.getElementById("name");
var questionText = document.querySelector(".question-text");
var cardBody = document.querySelector("#card-body");
var currentQuestion = 0; //because our array starts at 0
var currentAnswer = ""; //our answer is a string
var secondsLeft;
var quizTimer;
var formEl = document.getElementById("form");
var listHighScores = [];

var questions = [
  {
    query: "What is the purpose of console.log?",
    answers: [
      "Debugging",
      "Javascript",
      "Creating a repo",
      "None of the above",
    ],
    correctAnswer: "Debugging",
  },
  {
    query: "What does CSS stand for?",
    answers: [
      "Cascading Style Sheets",
      "Cascading Style Shortcuts",
      "Class Style Selectors",
      "Cool Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    query:
      "Where is the preferred place in the HTML file to link our external CSS file?",
    answers: [
      "Inside the head element",
      "The main tag",
      "In a footer element",
      "Before the closing body tag",
    ],
    correctAnswer: "Inside the head element",
  },
  {
    query: "What is an array used for?",
    answers: [
      "To store multiple values",
      "To store CSS",
      "To store one value",
      "All of the above",
    ],
    correctAnswer: "To store multiple values",
  },
];

startButtonEl.addEventListener("click", function (event) {
  //click the button and start timer
  startButtonEl.style.display = "none";
  secondsLeft = 60;
  quizTimer = setInterval(function () {
    secondsLeft--;
    if (secondsLeft > 0) {
      timerEl.textContent = "Time: " + secondsLeft;
    }

    if (secondsLeft === 0) {
      clearInterval(quizTimer); //quiz ends
      endGame();
      //hiddenQuestionEl.style.display = "none";
      // userInputBox.style.display = "block"; //unhide box
      // alert("Game Over. Your score is " + secondsLeft + ".");
    }
  }, 1000);
  hiddenQuestionEl.style.display = "block";
  newQuestions();
});
function endGame() {
  hiddenQuestionEl.style.display = "none";
  userInputBox.style.display = "block"; //unhide box
  alert("Game Over. Your score is " + secondsLeft + ".");
}
//var highScores = { name: "", score: secondsLeft };
function showScore(event) {
  event.preventDefault();
  var highScores = { name: userInputName.value, score: secondsLeft };
  document.querySelector("#score-box").textContent =
    "Name: " + userInputName.value + " Score: " + secondsLeft;
  console.log(highScores);
  listHighScores.push(highScores);
  localStorage.setItem("highscore", JSON.stringify(listHighScores)); //saving highscores to local storage

  //   localStorage.getItem(highScores, JSON.parse(highScores));
  //
}

formEl.addEventListener("submit", showScore);
formEl.addEventListener("submit", function (event) {
  startButtonEl.style.display = "block";
  userInputBox.style.display = "none";
});

//add another event listner to unhide the start button
//create another button to click to show high scores
//populates list of scores to show to the user

function newQuestions() {
  questionText.textContent = questions[currentQuestion].query;
  currentAnswer = questions[currentQuestion].correctAnswer; //store the answers so we can compare later
  //get answer options
  for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
    var btnID = "btn-" + i;
    document.getElementById(btnID).textContent =
      questions[currentQuestion].answers[i];
  }
}

cardBody.addEventListener("click", function (event) {
  // compare right or wrong answer and alert the user how they did
  if (currentAnswer == event.target.textContent) {
    alert("You got it right!");
  } else {
    alert("You got it wrong!");
    secondsLeft -= 5; //penalizes them 5 seconds if the answer is wrong
    //currently not deducting I don't know why
  }
  currentQuestion++;
  if (currentQuestion !== questions.length) {
    newQuestions();
  } else {
    clearInterval(quizTimer);
    endGame();
  }
});

//time remaining is what becomes the score
