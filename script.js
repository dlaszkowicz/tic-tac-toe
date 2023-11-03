const turn = document.querySelector(".turn");
const selectO = document.querySelector(".select-o");
const selectX = document.querySelector(".select-x");
const restart = document.querySelector(".restart");
const fields = document.querySelectorAll(".field");

const gameBoard = Array.from(fields);

function randomField() {
  return gameBoard[Math.floor(Math.random() * gameBoard.length)];
}

let skin;
let computerSkin;
let selected = false;
let round = "player";

selectO.addEventListener("click", function () {
  if (selected == false) {
    skin = "o";
    computerSkin = "x";
    selected = true;
    selectO.style.backgroundColor = "whitesmoke";
    turn.textContent = "o turn";
  }
});

selectX.addEventListener("click", function () {
  if (selected == false) {
    skin = "x";
    computerSkin = "o";
    selected = true;
    selectX.style.backgroundColor = "whitesmoke";
    turn.textContent = "x turn";
  }
});

fields.forEach(function (field) {
  field.addEventListener("click", function () {
    if (selected == true && round === "player") {
      field.textContent = skin;
      field.classList.add("player");
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
    randomField().textContent = computerSkin;
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
  selected = false;
  skin = "";
  selectX.style.backgroundColor = "white";
  selectO.style.backgroundColor = "white";
  turn.textContent = "Start game or select player";
});
console.log(gameBoard);
