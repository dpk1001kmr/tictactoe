import { gameModel } from "../model/gameModel.js";
import { gameView } from "../view/gameView.js";

class GameController {
  constructor() {}

  onHandleHumanButtonClick(e) {
    console.log("human button");
  }

  onHandleComputerButtonClick(e) {
    console.log("computer button");
  }

  onHandleResetButtonClick(e) {
    console.log("reset button");
  }

  onHandleBoardCellClick(e) {
    const row = e.target.dataset.row;
    const column = e.target.dataset.column;
    gameModel.updateBoard(row, column);
    gameView.render(gameModel.board, gameModel.playerTurn, gameModel.gameOver);
  }
}

const gameController = new GameController();

export { gameController };
