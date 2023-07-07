let timer;
let timerCount;
let timerElement = document.querySelector("#timer-element");
let startButton = document.querySelector("#start-button")
let choiceOne = document.querySelector("#button-1");
let choiceTwo = document.querySelector("#button-2");
let choiceThree = document.querySelector("#button-3");
let choiceFour = document.querySelector("#button-4");

startButton.addEventListener("click", startGame);

function startGame () {
    timerCount = 10;
    startButton.disabled = true;
    startTimer ();
}

function startTimer () {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
    if (timerCount === 0) {
        clearInterval(timer);
    }
    }, 100)}
    
