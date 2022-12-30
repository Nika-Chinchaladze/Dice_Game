// Generate Random Number:
function rollLeftDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var leftDice = document.getElementsByClassName("img1")[0];
    var imgAddress = "img/dice" + randomNumber1 + ".png";
    leftDice.setAttribute("src", imgAddress);
    return randomNumber1;
}
function rollRightDice() {
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var rightDice = document.getElementsByClassName("img2")[0];
    var imgAddress = "img/dice" + randomNumber2 + ".png";
    rightDice.setAttribute("src", imgAddress);
    return randomNumber2;
}

// OutPut Function:
function outputResult(winner, leftScore, rightScore) {
    var myDiv = document.getElementById("outputDiv");
    var myH2 = document.getElementById("outputH2");
    var myP = document.getElementById("outputP");
    myDiv.classList.add("answerDiv");
    myH2.classList.add("answerH2");
    myH2.textContent = winner + " Won The Game!";
    myP.classList.add("answerP");
    myP.textContent = leftScore + " vs " + rightScore;
}

// Find Out Winner:
function whoIsWinner() {
    var firstDice = rollLeftDice();
    var secondDice = rollRightDice();
    var myButton = document.getElementsByClassName("btnClick")[0];
    var myHeading = document.getElementsByTagName("h1")[0];
    var leftPlayer = document.getElementsByClassName("score1")[0];
    var rightPlayer = document.getElementsByClassName("score2")[0];
    // Track Score Section:
    if (firstDice > secondDice) {
        myHeading.innerHTML = "<i class='bi bi-flag-fill leftFlag'></i> Player 1 Wins!";
        leftPlayer.textContent = parseInt(leftPlayer.textContent) + 1;
    }
    else if (secondDice > firstDice) {
        myHeading.innerHTML = "Player 2 Wins! <i class='bi bi-flag-fill rightFlag'></i>";
        rightPlayer.textContent = parseInt(rightPlayer.textContent) + 1;
    }
    else {
        myHeading.innerHTML = "It's Draw!";
    }
    // OutPut Section:
    if (parseInt(leftPlayer.textContent) >= 15) {
        outputResult("Player 1", leftPlayer.textContent, rightPlayer.textContent);
        myHeading.innerHTML = "Game Over";
        myHeading.classList.add("gameHead");
        myButton.style.visibility = "hidden";
    }
    else if (parseInt(rightPlayer.textContent) >= 15) {
        outputResult("Player 2", leftPlayer.textContent, rightPlayer.textContent);
        myHeading.innerHTML = "Game Over";
        myHeading.classList.add("gameHead");
        myButton.style.visibility = "hidden";
    }
}