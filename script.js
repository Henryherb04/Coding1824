const numberBox = document.getElementById('guess');
const feedbackBox = getelementbyId('feedback');

const newNumber = Math.floor(Math.random()*100);

numberBox.addEventListener('change', checkNumber);

function checkNumber() {
    const guess = numberBox.value;
    if (guess < newNumber) {
        feedbackBox.innerText = "TOO LOW";      
    }
    else if (guess > newNumber) {
        feedbackBox.innerText = "too high";
    }
    else {
        feedbackBox.innerText = "thats just RIGHT";
    }
}