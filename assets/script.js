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
var currentQuestion = 0;

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
    correctAnswer: "Debugging",
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
  },
];

var secondsLeft;

startButtonEl.addEventListener("click", function (event) {
  var secondsLeft = 60;
  setInterval(function () {
    secondsLeft--;
    if (secondsLeft > 0) {
      timerEl.textContent = "Time: " + secondsLeft;
    } else {
      secondsLeft === 0;
      clearInterval(secondsLeft);
    }
  }, 1000);
  document.querySelector("#hidden").classList.remove("hidden");
  newQuestions();
});

function newQuestions() {
  questionText.textContent = questions[currentQuestion].query;

  //get answer options
  for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
    var btnID = "btn-" + i;
    document.getElementById(btnID).textContent =
      questions[currentQuestion].answers[i];
  }
}

cardBody.addEventListener("click", function (e) {
  console.log(e.target.textContent);
  //compare right or wrong answer
  currentQuestion++;
  newQuestions();
});
