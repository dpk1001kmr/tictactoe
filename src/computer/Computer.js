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
    // const allMoves = this.getAllMoves(board);
    // const randomMove = this.getRandomMove(allMoves);
    // return allMoves[randomMove];

    const bestMove = this.minimax(board, true);
    return { row: bestMove.row, column: bestMove.column };
  }

  checkWinner(board, playerTurn) {
    if (
      board[0][0] === playerTurn &&
      board[0][1] === playerTurn &&
      board[0][2] === playerTurn
    ) {
      return true;
    }
    if (
      board[1][0] === playerTurn &&
      board[1][1] === playerTurn &&
      board[1][2] === playerTurn
    ) {
      return true;
    }
    if (
      board[2][0] === playerTurn &&
      board[2][1] === playerTurn &&
      board[2][2] === playerTurn
    ) {
      return true;
    }
    if (
      board[0][0] === playerTurn &&
      board[1][0] === playerTurn &&
      board[2][0] === playerTurn
    ) {
      return true;
    }
    if (
      board[0][1] === playerTurn &&
      board[1][1] === playerTurn &&
      board[2][1] === playerTurn
    ) {
      return true;
    }
    if (
      board[0][2] === playerTurn &&
      board[1][2] === playerTurn &&
      board[2][2] === playerTurn
    ) {
      return true;
    }
    if (
      board[0][0] === playerTurn &&
      board[1][1] === playerTurn &&
      board[2][2] === playerTurn
    ) {
      return true;
    }
    if (
      board[0][2] === playerTurn &&
      board[1][1] === playerTurn &&
      board[2][0] === playerTurn
    ) {
      return true;
    }
    return false;
  }

  isDraw(board) {
    let filledCellCount = 0;
    for (let row = 0; row < 3; row++) {
      for (let column = 0; column < 3; column++) {
        if (board[row][column] !== null) {
          filledCellCount++;
        }
      }
    }
    if (filledCellCount === 9) {
      return true;
    }
    return false;
  }

  minimax(board, isMaximizing) {
    if (this.checkWinner(board, "X")) return { bestScore: 10 };
    if (this.checkWinner(board, "O")) return { bestScore: -10 };
    if (this.isDraw(board)) return { bestScore: 0 };

    if (isMaximizing) {
      const bestResult = {
        bestScore: -Infinity,
        row: null,
        column: null,
      };
      const allMoves = this.getAllMoves(board);
      for (let i = 0; i < allMoves.length; i++) {
        const boardCopy = JSON.parse(JSON.stringify(board));
        const move = allMoves[i];
        boardCopy[move.row][move.column] = "X";
        const result = this.minimax(boardCopy, false);
        if (result.bestScore > bestResult.bestScore) {
          bestResult.bestScore = result.bestScore;
          bestResult.row = move.row;
          bestResult.column = move.column;
        }
      }
      return bestResult;
    }

    if (!isMaximizing) {
      const bestResult = {
        bestScore: Infinity,
        row: null,
        column: null,
      };
      const allMoves = this.getAllMoves(board);
      for (let i = 0; i < allMoves.length; i++) {
        const boardCopy = JSON.parse(JSON.stringify(board));
        const move = allMoves[i];
        boardCopy[move.row][move.column] = "O";
        const result = this.minimax(boardCopy, true);
        if (result.bestScore < bestResult.bestScore) {
          bestResult.bestScore = result.bestScore;
          bestResult.row = move.row;
          bestResult.column = move.column;
        }
      }
      return bestResult;
    }
  }
}

const computer = new Computer();

export { computer };
