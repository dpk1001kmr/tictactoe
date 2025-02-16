import { gameController } from "../controller/gameController.js";

class GameView {
  constructor() {
    this.humanButton = document.querySelector(".human");
    this.computerButton = document.querySelector(".computer");
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

  render(board, playerTurn, gameOver) {
    console.log(board);
    console.log(gameOver);
    for (let row = 0; row < 3; row++) {
      for (let column = 0; column < 3; column++) {
        const id = `${row}${column}`;
        document.getElementById(id).innerHTML = board[row][column];
      }
    }

    if (gameOver) {
      this.resultButton.innerHTML = `${playerTurn === "X" ? "O" : "X"} Won !`;
    }
  }
}

const gameView = new GameView();

export { gameView };
