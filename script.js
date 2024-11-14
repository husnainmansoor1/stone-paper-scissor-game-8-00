let userscore = 0;
let comscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg-p");

const gencompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const rndvalue = Math.floor(Math.random() * 3);
  return options[rndvalue];
};

const displayscore = () => {
  document.getElementById("user-score").innerText = `${userscore}`;
  document.getElementById("computer-score").innerText = `${comscore}`;
};
const playgame = (userChoice) => {
  console.log("userChoice = ", userChoice);
  const compChoice = gencompChoice();
  console.log("compChoice = ", compChoice);

  if (userChoice === compChoice) {
    msg.innerText = `It's Draw!.. PlayAgain `;
    msg.style.backgroundColor = "#081b31";
    msg.style.color = "#FFFFFF";
    console.log("It's a tie!");
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    console.log("User wins!");
    msg.innerText = `Congrates You Win!.. ${userChoice} beat ${compChoice} `;
    msg.style.backgroundColor = "Green";
    msg.style.color = "#FFFFFF";

    userscore++;
  } else {
    console.log("Computer wins!");
    msg.innerText = `You lose!.. ${compChoice} beat ${userChoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "#FFFFFF";

    comscore++;
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
    displayscore();
  });
});
