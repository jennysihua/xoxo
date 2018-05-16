const winningCombos = [
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],
  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],
  [[0, 0], [1, 1], [2, 2]],
  [[2, 2], [1, 1], [0, 0]],
]

export const winner = (board) => {
  let output = [];
  for (let i = 0; i < winningCombos.length; i++) {
    output[i] = []
    for (let j = 0; j < winningCombos[i].length; j++) {
      output[i][j] = board.getIn(winningCombos[i][j])
    }
    console.log(output[i].includes('undefined'))
    if (output[i].includes('undefined')) {
      output[i] = 'undefined'
    }
  }
  return output;
  // if (output.includes(['X', 'X', 'X'])) {
  //   return 'X is the winner'
  // } else if (output.includes(['Y', 'Y', 'Y'])) {
  //   return 'Y is the winner'
  // } else if (!output.includes('undefined')) {
  //   return 'Tie'
  // }
}
