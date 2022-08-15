`use script`;
// console.log(document.querySelector(`.message`).textContent);
// console.log(
//   (document.querySelector(`.message`).textContent = "🎉 Correct Number!")
// );
// document.querySelector(".number").textContent = `15`;
// document.querySelector(`.score`).textContent = `30`;
// document.querySelector(`.guess`).value = 23;
// console.log(document.querySelector(`.guess`).value);

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);
  //When there is no INPUT//
  if (!guess) {
    displayMessage(`🤦‍♂️😡No Number!`);
    //When THE INPUT IS CORRECT//
  } else if (guess === secretNumber) {
    displayMessage(` "🎉 Great you guessed it Right!! Play Again"`);
    document.querySelector(`body`).style.backgroundColor = ` rgb(38, 206, 38)`;
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
    //WHEN GUESS IS WRONG//
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`);
      displayMessage(
        guess > secretNumber ? "📈Oopps!! Too High" : "📉Oopps!! Too Low"
      );
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`"💥You Lost the Game"`);

      document.querySelector(`.score`).textContent = 0;
    }
  }
});
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start Guessing.....");
  document.querySelector(`.score`).textContent = 0;
  document.querySelector(".number").textContent = "?";
  document.querySelector(`.guess`).value = ``;
  document.querySelector("body").style.backgroundColor = "#2222";
});
