import { gameController } from "../controller/gameController.js";

class GameView {
  constructor() {
    this.humanButton = document.querySelector(".human");
    this.computerButton = document.querySelector(".computer");
    this.playingWithButton = document.querySelector(".playing-with");
    this.resultButton = document.querySelector(".result");
    this.resetButton = document.querySelector(".reset");
    this.grid = document.querySelectorAll(".cell");
  }

  onSetEvent() {
    this.humanButton.addEventListener(
      "click",
      gameController.onHandleHumanButtonClick
    );
    this.computerButton.addEventListener(
      "click",
      gameController.onHandleComputerButtonClick
    );

    this.resetButton.addEventListener(
      "click",
      gameController.onHandleResetButtonClick
    );
    this.grid.forEach(function (cell) {
      cell.addEventListener("click", gameController.onHandleBoardCellClick);
    });
  }

  render(board, playerTurn, playingWith, gameOver) {
    for (let row = 0; row < 3; row++) {
      for (let column = 0; column < 3; column++) {
        const id = `${row}${column}`;
        document.getElementById(id).innerHTML = board[row][column];
        if (board[row][column]) {
          document.getElementById(id).disabled = true;
        }
      }
    }

    if (gameOver === 1) {
      for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 3; column++) {
          const id = `${row}${column}`;
          document.getElementById(id).disabled = true;
        }
      }
      this.resultButton.innerHTML = `${playerTurn === "X" ? "O" : "X"} Won !`;
    }

    if (gameOver === 0) {
      this.resultButton.innerHTML = "Game Draw";
    }

    if (gameOver === -1) {
      for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 3; column++) {
          const id = `${row}${column}`;
          document.getElementById(id).innerHTML = board[row][column];
          if (board[row][column]) {
            document.getElementById(id).disabled = true;
          } else {
            document.getElementById(id).disabled = false;
          }
        }
      }
      this.resultButton.innerHTML = "Result";
    }

    this.playingWithButton.innerHTML = `Playing with ${playingWith}`;
  }
}

const gameView = new GameView();

export { gameView };
