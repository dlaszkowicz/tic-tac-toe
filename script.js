const turn = document.querySelector(".turn");
const selectO = document.querySelector(".select-o");
const selectX = document.querySelector(".select-x");
const restart = document.querySelector(".restart");
const fields = document.querySelectorAll(".field");
const winner = document.querySelector(".winner");

let gameBoardWin = Array.from(fields);
let gameBoard = Array.from(fields);
console.log(randomField());
function randomField() {
  return gameBoard[Math.floor(Math.random() * gameBoard.length)];
}
function checkWin() {
  if (
    gameBoard[0] == "player" &&
    gameBoard[1] == "player" &&
    gameBoard[2] == "player"
  ) {
    isGameEnd = true;
    winner.textContent = "You Won!";
    winnerText();
    turn.textContent = `${skin} wins`;
  } else if (
    gameBoard[3] == "player" &&
    gameBoard[4] == "player" &&
    gameBoard[5] == "player"
  ) {
    isGameEnd = true;
    winner.textContent = "You Won!";
    winnerText();
    turn.textContent = `${skin} wins`;
  } else if (
    gameBoard[6] == "player" &&
    gameBoard[7] == "player" &&
    gameBoard[8] == "player"
  ) {
    isGameEnd = true;
    winner.textContent = "You Won!";
    winnerText();
    turn.textContent = `${skin} wins`;
  } else if (
    gameBoard[0] == "player" &&
    gameBoard[3] == "player" &&
    gameBoard[6] == "player"
  ) {
    isGameEnd = true;
    winner.textContent = "You Won!";
    winnerText();
    turn.textContent = `${skin}  wins`;
  } else if (
    gameBoard[1] == "player" &&
    gameBoard[4] == "player" &&
    gameBoard[7] == "player"
  ) {
    isGameEnd = true;
    winner.textContent = "You Won!";
    winnerText();
    turn.textContent = `${skin} wins`;
  } else if (
    gameBoard[2] == "player" &&
    gameBoard[5] == "player" &&
    gameBoard[8] == "player"
  ) {
    isGameEnd = true;
    winner.textContent = "You Won!";
    winnerText();
    turn.textContent = `${skin} wins`;
  } else if (
    gameBoard[0] == "player" &&
    gameBoard[4] == "player" &&
    gameBoard[8] == "player"
  ) {
    isGameEnd = true;
    winner.textContent = "You Won!";
    winnerText();
    turn.textContent = `${skin} wins`;
  } else if (
    gameBoard[2] == "player" &&
    gameBoard[4] == "player" &&
    gameBoard[6] == "player"
  ) {
    isGameEnd = true;
    winner.textContent = "You Won!";
    winnerText();
    turn.textContent = `${skin} wins`;
  } else if (
    gameBoard[0] == "computer" &&
    gameBoard[1] == "computer" &&
    gameBoard[2] == "computer"
  ) {
    isGameEnd = true;
    winnerText();
    winner.textContent = "Computer Won!";
    turn.textContent = `${computerSkin} wins`;
  } else if (
    gameBoard[3] == "computer" &&
    gameBoard[4] == "computer" &&
    gameBoard[5] == "computer"
  ) {
    isGameEnd = true;
    winnerText();
    winner.textContent = "Computer Won!";
    turn.textContent = `${computerSkin} wins`;
  } else if (
    gameBoard[6] == "computer" &&
    gameBoard[7] == "computer" &&
    gameBoard[8] == "computer"
  ) {
    isGameEnd = true;
    winnerText();
    winner.textContent = "Computer Won!";
    turn.textContent = `${computerSkin} wins`;
  } else if (
    gameBoard[0] == "computer" &&
    gameBoard[3] == "computer" &&
    gameBoard[6] == "computer"
  ) {
    isGameEnd = true;
    winnerText();
    winner.textContent = "Computer Won!";
    turn.textContent = `${computerSkin} wins`;
  } else if (
    gameBoard[1] == "computer" &&
    gameBoard[4] == "computer" &&
    gameBoard[7] == "computer"
  ) {
    isGameEnd = true;
    winnerText();
    winner.textContent = "Computer Won!";
    turn.textContent = `${computerSkin} wins`;
  } else if (
    gameBoard[2] == "computer" &&
    gameBoard[5] == "computer" &&
    gameBoard[8] == "computer"
  ) {
    isGameEnd = true;
    winnerText();
    winner.textContent = "Computer Won!";
    turn.textContent = `${computerSkin} wins`;
  } else if (
    gameBoard[0] == "computer" &&
    gameBoard[4] == "computer" &&
    gameBoard[8] == "computer"
  ) {
    isGameEnd = true;
    winnerText();
    winner.textContent = "Computer Won!";
    turn.textContent = `${computerSkin} wins`;
  } else if (
    gameBoard[2] == "computer" &&
    gameBoard[4] == "computer" &&
    gameBoard[6] == "computer"
  ) {
    isGameEnd = true;
    winnerText();
    winner.textContent = "Computer Won!";
    turn.textContent = `${computerSkin}`;
  }
}
let skin;
let computerSkin;
let selected = false;
let round;
let roundNumber = 1;
let isGameEnd = false;

let playerFields = [];
let computerFields = [];

function winnerText() {
  winner.style.display = "flex";
}

selectO.addEventListener("click", function () {
  if (selected == false) {
    skin = "o";
    computerSkin = "x";
    selected = true;
    selectO.style.backgroundColor = "whitesmoke";
    turn.textContent = "o turn";
    round = "player";
  }
});

selectX.addEventListener("click", function () {
  if (selected == false) {
    skin = "x";
    computerSkin = "o";
    selected = true;
    selectX.style.backgroundColor = "whitesmoke";
    turn.textContent = "x turn";
    round = "player";
  }
});

fields.forEach(function (field) {
  field.addEventListener("click", function () {
    if (
      selected === true &&
      round === "player" &&
      gameBoard.includes(field) &&
      isGameEnd == false
    ) {
      console.log("works");
      field.textContent = skin;
      gameBoard[gameBoard.indexOf(field)] = "player";
      console.log(gameBoard);
      if (computerSkin === "o") {
        turn.textContent = "o turn";
      } else if (computerSkin === "x") {
        turn.textContent = "x turn";
      }
      checkWin();
      roundNumber++;
      round = "computer";
      console.log(roundNumber);
      if (roundNumber <= 9) {
        computerMove();
      } else if (isGameEnd != true) {
        winner.textContent = "It's a Draw!";
        winnerText();
        isGameEnd = true;
      }
    }
  });
});

function computerMove() {
  setTimeout(function () {
    if ((round = "computer" && isGameEnd == false)) {
      let randomFieldElement = randomField();
      for (let i = 0; i < 1; ) {
        if (
          randomFieldElement != "player" &&
          randomFieldElement != "computer"
        ) {
          randomFieldElement.textContent = computerSkin;
          gameBoard[gameBoard.indexOf(randomFieldElement)] = "computer";
          if (computerSkin === "o") {
            turn.textContent = "x turn";
          } else if (computerSkin === "x") {
            turn.textContent = "o turn";
          }
          roundNumber++;
          checkWin();
          round = "player";
          i++;
        } else {
          randomFieldElement = randomField();
        }
      }
    }
  }, 200);
}
restart.addEventListener("click", function () {
  restartFun();
});
winner.addEventListener("click", function () {
  winner.style.display = "none";
  restartFun();
});

function restartFun() {
  round = "";
  fields.forEach(function (field) {
    field.textContent = "";
  });
  selected = false;
  skin = "";
  selectX.style.backgroundColor = "white";
  selectO.style.backgroundColor = "white";
  turn.textContent = "Start game or select player";
  gameBoard = Array.from(fields);
  console.log(gameBoard);
  roundNumber = 1;
  console.log(round);
  isGameEnd = false;
}
