class GameModel {
  constructor() {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.playerTurn = "O";
    this.playingWith = "human";
    this.gameOver = false;
  }

  updateBoard(row, column) {
    this.board[row][column] = this.playerTurn;
    this.gameOver = this.isGameOver();
    this.updatePlayerTurn();
  }

  updatePlayerTurn() {
    if (this.playerTurn === "O") {
      this.playerTurn = "X";
    } else {
      this.playerTurn = "O";
    }
  }

  updatePlayingWith() {}

  isGameOver() {
    if (
      this.board[0][0] === this.playerTurn &&
      this.board[0][1] === this.playerTurn &&
      this.board[0][2] === this.playerTurn
    ) {
      return true;
    }
    if (
      this.board[1][0] === this.playerTurn &&
      this.board[1][1] === this.playerTurn &&
      this.board[1][2] === this.playerTurn
    ) {
      return true;
    }
    if (
      this.board[2][0] === this.playerTurn &&
      this.board[2][1] === this.playerTurn &&
      this.board[2][2] === this.playerTurn
    ) {
      return true;
    }
    if (
      this.board[0][0] === this.playerTurn &&
      this.board[1][0] === this.playerTurn &&
      this.board[2][0] === this.playerTurn
    ) {
      return true;
    }
    if (
      this.board[0][1] === this.playerTurn &&
      this.board[1][1] === this.playerTurn &&
      this.board[2][1] === this.playerTurn
    ) {
      return true;
    }
    if (
      this.board[0][2] === this.playerTurn &&
      this.board[1][2] === this.playerTurn &&
      this.board[2][2] === this.playerTurn
    ) {
      return true;
    }
    if (
      this.board[0][0] === this.playerTurn &&
      this.board[1][1] === this.playerTurn &&
      this.board[2][2] === this.playerTurn
    ) {
      return true;
    }
    if (
      this.board[0][2] === this.playerTurn &&
      this.board[1][1] === this.playerTurn &&
      this.board[2][0] === this.playerTurn
    ) {
      return true;
    }
    false;
  }
}

const gameModel = new GameModel();

export { gameModel };
