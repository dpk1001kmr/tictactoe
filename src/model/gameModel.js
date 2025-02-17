class GameModel {
  constructor() {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.playerTurn = "O";
    this.playingWith = "human";
    this.gameOver = -1;
    /**
     * -1 => game is running
     * +1 => someone won and game is over
     * 0 => game draw
     */
  }

  resetGame() {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.playerTurn = "O";
    // this.playingWith = "human";
    this.gameOver = -1;
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

  updatePlayingWith(value) {
    this.playingWith = value;
  }

  isGameOver() {
    if (
      this.board[0][0] === this.playerTurn &&
      this.board[0][1] === this.playerTurn &&
      this.board[0][2] === this.playerTurn
    ) {
      return 1;
    }
    if (
      this.board[1][0] === this.playerTurn &&
      this.board[1][1] === this.playerTurn &&
      this.board[1][2] === this.playerTurn
    ) {
      return 1;
    }
    if (
      this.board[2][0] === this.playerTurn &&
      this.board[2][1] === this.playerTurn &&
      this.board[2][2] === this.playerTurn
    ) {
      return 1;
    }
    if (
      this.board[0][0] === this.playerTurn &&
      this.board[1][0] === this.playerTurn &&
      this.board[2][0] === this.playerTurn
    ) {
      return 1;
    }
    if (
      this.board[0][1] === this.playerTurn &&
      this.board[1][1] === this.playerTurn &&
      this.board[2][1] === this.playerTurn
    ) {
      return 1;
    }
    if (
      this.board[0][2] === this.playerTurn &&
      this.board[1][2] === this.playerTurn &&
      this.board[2][2] === this.playerTurn
    ) {
      return 1;
    }
    if (
      this.board[0][0] === this.playerTurn &&
      this.board[1][1] === this.playerTurn &&
      this.board[2][2] === this.playerTurn
    ) {
      return 1;
    }
    if (
      this.board[0][2] === this.playerTurn &&
      this.board[1][1] === this.playerTurn &&
      this.board[2][0] === this.playerTurn
    ) {
      return 1;
    }

    let filledCellCount = 0;
    for (let row = 0; row < 3; row++) {
      for (let column = 0; column < 3; column++) {
        if (this.board[row][column] !== null) {
          filledCellCount++;
        }
      }
    }
    if (filledCellCount === 9) {
      return 0;
    }

    return -1;
  }
}

const gameModel = new GameModel();

export { gameModel };
