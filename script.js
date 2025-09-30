let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreOne = 20;
let scoreTwo = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guessOne = Number(document.querySelector('.guessOne').value);
    const guessTwo = Number(document.querySelector('.guessTwo').value);


    if (!guessOne && !guessTwo) {
        displayMessage("Both Players enter a number!!");
        document.querySelector('body').style.backgroundColor = "orange";
    }
    else if (!guessOne) {
        displayMessage("Player 1 enter a number!!");
        document.querySelector('body').style.backgroundColor = "orange";
    }
    else if (!guessTwo) {
        displayMessage("Player 2 enter a number!!");
        document.querySelector('body').style.backgroundColor = "orange";
    }
    else if (guessTwo == secretNumber && guessOne == secretNumber) {
        displayMessage("Both Players guessed correct number!!");
        document.querySelector('body').style.backgroundColor = "green";
        if (scoreOne < scoreTwo) {
            if (highScore < scoreTwo) {
                highScore = scoreTwo;
                displayMessage("Both Players guessed correct number But Player 2 WINS!!");
                document.querySelector('.number').textContent = secretNumber;
            }
        }
        else if (scoreOne > scoreTwo) {
            if (highScore < scoreOne) {
                highScore = scoreOne;
                displayMessage("Both Players guessed correct number But Player 1 WINS!!");
                document.querySelector('.number').textContent = secretNumber;
            }
        }
    }
    else if (guessOne == secretNumber) {
        displayMessage("Player 1 guessed correct number!!");
        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector('.number').textContent = secretNumber;
        if (highScore < scoreOne) {
            highScore = scoreOne;
        }
    }
    else if (guessTwo == secretNumber) {
        displayMessage("Player 2 guessed correct number!!");
        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector('.number').textContent = secretNumber;
        if (highScore < scoreTwo) {
            highScore = scoreTwo;
        }
    }
    else if (guessOne > secretNumber && guessTwo > secretNumber) {
        displayMessage("Both Players are Too High");
        scoreOne = scoreOne - 1;
        scoreTwo = scoreTwo - 1;
        document.querySelector('.scoreOne').textContent = scoreOne;
        document.querySelector('.scoreTwo').textContent = scoreTwo;
    }
    else if (guessOne < secretNumber && guessTwo < secretNumber) {
        displayMessage("Both Players are Too Low");
        scoreOne = scoreOne - 1;
        scoreTwo = scoreTwo - 1;
        document.querySelector('.scoreOne').textContent = scoreOne;
        document.querySelector('.scoreTwo').textContent = scoreTwo;
    }
    else if (guessOne < secretNumber && guessTwo > secretNumber) {
        displayMessage("Player 1 is Too Low & Player 2 is Too High");
        scoreOne = scoreOne - 1;
        scoreTwo = scoreTwo - 1;
        document.querySelector('.scoreOne').textContent = scoreOne;
        document.querySelector('.scoreTwo').textContent = scoreTwo;
    }
    else if (guessOne > secretNumber && guessTwo < secretNumber) {
        displayMessage("Player 1 is Too High & Player 2 is Too Low");
        scoreOne = scoreOne - 1;
        scoreTwo = scoreTwo - 1;
        document.querySelector('.scoreOne').textContent = scoreOne;
        document.querySelector('.scoreTwo').textContent = scoreTwo;
    }
    if (scoreOne < 0 && scoreTwo < 0) {
        displayMessage("Chances OVER for both Press AGAIN");
        document.querySelector('body').style.backgroundColor = "red";
        document.querySelector('.number').textContent = secretNumber;
    }
    else if(scoreOne > 0 && scoreTwo < 0){
        displayMessage("Chances OVER for Player 2");
        document.querySelector('body').style.backgroundColor = "yellow";
    }
    else if(scoreOne < 0 && scoreTwo > 0){
        displayMessage("Chances OVER for Player 1");
        document.querySelector('body').style.backgroundColor = "yellow";
    }
})

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    scoreOne = 20;
    scoreTwo = 20;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.scoreOne').textContent = 20;
    document.querySelector('.scoreTwo').textContent = 20;
    document.querySelector('.guessOne').value = " ";
    document.querySelector('.guessTwo').value = " ";
    document.querySelector('.number').textContent = "?";
    document.querySelector('body').style.backgroundColor = "#222";
    displayMessage('Start guessing...');
});
