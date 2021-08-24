// Generates two random numbers
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Changes src path of image to match generated random number with dice image
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 +".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 +".png");

//  Checks for winner
if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "Draw!";
} 
else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🏆 Player 1 Wins! 🏆";
}
else {
    document.querySelector("h1").textContent = "🏆 Player 2 Wins! 🏆";
}