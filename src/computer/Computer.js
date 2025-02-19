class Computer {
  constructor() {}

  getAllMoves(board) {
    const allMovesArray = [];
    for (let row = 0; row < 3; row++) {
      for (let column = 0; column < 3; column++) {
        if (board[row][column] === null) {
          allMovesArray.push({ row, column });
        }
      }
    }
    return allMovesArray;
  }

  getRandomMove(moves) {
    const totalMoves = moves.length;
    const randomIndex = Math.floor(Math.random() * totalMoves);
    return randomIndex;
  }

  getMove(board) {
    const allMoves = this.getAllMoves(board);
    const randomMove = this.getRandomMove(allMoves);
    return allMoves[randomMove];
  }
}

const computer = new Computer();

export { computer };
