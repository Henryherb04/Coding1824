const numberBox = document.getElementById('guess');
const feedbackBox = document.getElementById('feedback');

const newNumber = Math.floor(Math.random()*100);

numberBox.addEventListener('change', checkNumber);

function checkNumber() {
    const guess = numberBox.value;
    if (guess < newNumber) {
        feedbackBox.innerText = "THATS WAY TOO LOW WHAT DO YOU THINK THIS IS";      
    }
    else if (guess > newNumber) {
        feedbackBox.innerText = "I'm not a robber I'll sell the stolen car for cheaper";
    }
    else {
        feedbackBox.innerText = "DEAL";
    }
}