var startButtonEl = document.getElementById("btn-start");
var firstButtonEl = document.getElementById("btn-first");
var secondButtonEl = document.getElementById("btn-second");
var thirdButtonEl = document.getElementById("btn-third");
var fourthButtonEl = document.getElementById("btn-fourth");
var timerEl = document.getElementById("timer");
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
});


