function getPossibleKnightMoves(row, col) {
    const possibleMoves = [
      [row - 2, col - 1],
      [row - 2, col + 1],
      [row - 1, col - 2],
      [row - 1, col + 2],
      [row + 1, col - 2],
      [row + 1, col + 2],
      [row + 2, col - 1],
      [row + 2, col + 1]
    ];
  
    return possibleMoves.filter(([r, c]) => r >= 0 && r < 8 && c >= 0 && c < 8);
  }
  export default getPossibleKnightMoves;