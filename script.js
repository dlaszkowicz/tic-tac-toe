const turn = document.querySelector(".turn");
const selectO = document.querySelector(".select-o");
const selectX = document.querySelector(".select-x");
const restart = document.querySelector(".restart");
const fields = document.querySelectorAll(".field");

let gameBoard = Array.from(fields);

function randomField() {
  return gameBoard[Math.floor(Math.random() * gameBoard.length)];
}

let skin;
let computerSkin;
let selected = false;
let round;

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
    console.log("works");
    if (selected === true && round === "player" && gameBoard.includes(field)) {
      console.log("works");
      field.textContent = skin;
      gameBoard = gameBoard.filter((item) => item !== field);
      if (computerSkin === "o") {
        turn.textContent = "o turn";
      } else if (computerSkin === "x") {
        turn.textContent = "x turn";
      }
      round = "computer";
      computerMove();
    }
  });
});

function computerMove() {
  setTimeout(function () {
    let randomFieldElement = randomField();
    randomFieldElement.textContent = computerSkin;
    gameBoard = gameBoard.filter((item) => item !== randomFieldElement);
    if (computerSkin === "o") {
      turn.textContent = "x turn";
    } else if (computerSkin === "x") {
      turn.textContent = "o turn";
    }
    round = "player";
  }, 1000);
}
restart.addEventListener("click", function () {
  fields.forEach(function (field) {
    field.textContent = "";
  });
  round = "";
  selected = false;
  skin = "";
  selectX.style.backgroundColor = "white";
  selectO.style.backgroundColor = "white";
  turn.textContent = "Start game or select player";
  gameBoard = Array.from(fields);
  console.log(gameBoard);
});
console.log(gameBoard);
