document.addEventListener("DOMContentLoaded", function() {
    rollDice();
  });

function rollDice() {
    // Get references to the dice images
    var dice1 = document.getElementById("dice1");
    var dice2 = document.getElementById("dice2");

    dice1.classList.remove("animate");
    dice2.classList.remove("animate");

    void dice1.offsetWidth;
    void dice2.offsetWidth;

    dice1.classList.add("animate");
    dice2.classList.add("animate");

    // Generate random numbers between 1 and 6 for the dice
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Set the source attributes of the dice images based on the random numbers
    dice1.src = "images/dice" + randomNumber1 + ".png";
    dice2.src = "images/dice" + randomNumber2 + ".png";

    // Display the winner based on the random numbers
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h3").innerHTML = "Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h3").innerHTML = "Player 2 Wins!";
    } else {
        document.querySelector("h3").innerHTML = "Draw!";
    }
}
