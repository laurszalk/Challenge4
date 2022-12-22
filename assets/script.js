var startButtonEl = document.getElementById("btn-start");
// var firstButtonEl = document.getElementById("btn-first");
// var secondButtonEl = document.getElementById("btn-second");
// var thirdButtonEl = document.getElementById("btn-third");
// var fourthButtonEl = document.getElementById("btn-fourth");
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var hiddenQuestionEl = document.getElementById("hidden");
var questionText = document.querySelector(".question-text");
var cardBody = document.querySelector("#card-body");
var currentQuestion = 0; //because our array starts at 0
var currentAnswer = ""; //our answer is a string
var secondsLeft = 0;

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
  var secondsLeft = 60;
  var quizTimer = setInterval(function () {
    secondsLeft--;
    if (secondsLeft > 0) {
      timerEl.textContent = "Time: " + secondsLeft;
    }

    if (secondsLeft === 0 || currentQuestion === questions.length) {
      clearInterval(quizTimer); //quiz ends
      //call the function or unhide box
    }
  }, 1000);
  hiddenQuestionEl.style.display = "block";
  newQuestions();
});
//need a function to store and retrieve from local storage
//store secondsLeft (time remaining variable)
//add a hidden div to put a text box for initials input
//add an input field and button to call the function to store to local storage
//don't forget json.stringify, json.parse
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
  }
  currentQuestion++;
  if (currentQuestion !== questions.length) {
    newQuestions();
  }
});

//time remaining is what becomes the score
