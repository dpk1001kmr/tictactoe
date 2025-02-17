import { gameModel } from "../model/gameModel.js";
import { gameView } from "../view/gameView.js";

class GameController {
  constructor() {}

  onHandleHumanButtonClick(e) {
    gameModel.updatePlayingWith("Human");
    gameModel.resetGame();
    gameView.render(
      gameModel.board,
      gameModel.playerTurn,
      gameModel.playingWith,
      gameModel.gameOver
    );
  }

  onHandleComputerButtonClick(e) {
    gameModel.updatePlayingWith("Computer");
    gameModel.resetGame();
    gameView.render(
      gameModel.board,
      gameModel.playerTurn,
      gameModel.playingWith,
      gameModel.gameOver
    );
  }

  onHandleResetButtonClick(e) {
    gameModel.resetGame();
    gameView.render(
      gameModel.board,
      gameModel.playerTurn,
      gameModel.playingWith,
      gameModel.gameOver
    );
  }

  onHandleBoardCellClick(e) {
    const row = e.target.dataset.row;
    const column = e.target.dataset.column;
    gameModel.updateBoard(row, column);
    gameView.render(
      gameModel.board,
      gameModel.playerTurn,
      gameModel.playingWith,
      gameModel.gameOver
    );

    if (gameModel.playingWith === "Computer") {
      console.log("Computer Turn");
    }
  }
}

const gameController = new GameController();

export { gameController };
