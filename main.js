// Array of images representing rock, paper, scissors respectively
var imagesArray = ["images/rock.png", "images/paper.png", "images/scissors.png"];
var shootButton = document.getElementById("shoot-button");
var playerOneChoice = 0; // By default, rock is selected
var playerTwoChoice = 0;
var selfRock = document.getElementById("self-rock");
var selfPaper = document.getElementById("self-paper");
var selfScissors = document.getElementById("self-scissors");
var playerOneScore = 0;
var playerTwoScore = 0;

shootButton.addEventListener("click", () => {
    var randomNum = Math.floor(Math.random() * 3); // Random number from 0 to 2
    if (selfRock.checked) {
        playerOneChoice = 0;
    }
    else if (selfPaper.checked) {
        playerOneChoice = 1;
    }
    else if (selfScissors.checked) {
        playerOneChoice = 2;
    }
    playerTwoChoice = randomNum;
    document.getElementById("self-img").src = imagesArray[playerOneChoice];
    document.getElementById("AI-img").src = imagesArray[playerTwoChoice];
    checkWinner();
});

function checkWinner() {
    // r<p<s<r
    // 0<1<2<0
    if (playerOneChoice == playerTwoChoice) {
        // tie
        document.querySelector("h1").style.color = "yellow";
    }
    else if ((playerOneChoice == 0 && playerTwoChoice == 2) || playerOneChoice > playerTwoChoice) {
        document.querySelector("h1").style.color = "green";
        playerOneScore++;
        document.getElementById("you-score").textContent = "You: " + playerOneScore;
    }
    else {
        document.querySelector("h1").style.color = "red";
        playerTwoScore++;
        document.getElementById("ai-score").textContent = "AI: " + playerTwoScore;
    }
}