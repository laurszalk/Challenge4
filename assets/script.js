var startButtonEl = document.getElementById("btn-start");
var firstButtonEl = document.getElementById("btn-first");
var secondButtonEl = document.getElementById("btn-second");
var thirdButtonEl = document.getElementById("btn-third");
var fourthButtonEl = document.getElementById("btn-fourth");
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var hiddenQuestionEl = document.getElementById("hidden");
var newQuestionEl = document.querySelector(".question-text");

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

// var score = 0;
// for (var i = 0; i < questions.length; i++) {
//   var response = questions[i].query;
//   if (response === questions[i].correctAnswer) {
//     score++;
//   } else {
//     score--;
//   }
// }

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
  hiddenQuestionEl.hidden = false;
});

firstButtonEl.addEventListener("click", function (event) {
  newQuestionEl.textContent = questions[0].query;

  //when you click the button add 10 points to the score
});

secondButtonEl.addEventListener("click", function (event) {
  newQuestionEl.textContent = questions[0].query;

  //when you click this button deduct 10 points
});

thirdButtonEl.addEventListener("click", function (event) {
  newQuestionEl.textContent = questions[0].query;

  //when you click this button deduct 10 points
});

fourthButtonEl.addEventListener("click", function (event) {
  newQuestionEl.textContent = questions[0].query;

  //when you click this button deduct 10 points
});
