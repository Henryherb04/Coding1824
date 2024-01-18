const numberBox = document.getElementById('guess');
const numberBox = getelementbyId('feedback');

const newNumber = Math.floor(Math.random()*100);

numberBox.addEventListener('change', checkNumber);

function checkNumber() {
    const guess = numberBox.ariaValueMax;
    if (guess < newNumber) {
        feedbackBox.innerText = "TOO LOW";      
    }
    esle if (guess > newNumber) {
        feedbackBox.innerText = "too high";
    }
    else {
        feedbackBox.innerText = "thats just RIGHT";
    }
}