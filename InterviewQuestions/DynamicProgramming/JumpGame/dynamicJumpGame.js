function jumpGame(arr) {
  //Initalize CellMatrix
  const cellMatrix = Array(arr.length).fill(null);
  // Mark the last cell as true since that is the desired location.
  cellMatrix[cellMatrix.length - 1] = true;

  for (let cellIndex = arr.length - 2; cellIndex >= 0; cellIndex -= 1) {
    const maxJumpLength = Math.min(arr[cellIndex], arr.length - 1 - cellIndex);

    for (let jumpLength = maxJumpLength; jumpLength > 0; jumpLength -= 1) {
      const nextIndex = cellIndex + jumpLength;
      if (cellMatrix[nextIndex] === true) {
        cellMatrix[cellIndex] = true;
        break;
      }
    }
  }

  return cellMatrix[0] === true;
}

jumpGame([3, 2, 1, 0, 4]);
module.exports = jumpGame;
