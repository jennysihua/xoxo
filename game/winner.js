const winningCombos = [
  [[0, 0], [0, 1], [0, 2]],
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],
  [[0, 0], [1, 0], [2, 0]],
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],
  [[0, 0], [1, 1], [2, 2]],
  [[2, 0], [1, 1], [0, 2]],
]

export const winner = (board) => {
  let output = [];
  for (let i = 0; i < winningCombos.length; i++) {
    output[i] = []
    for (let j = 0; j < winningCombos[i].length; j++) {
      output[i][j] = board.getIn(winningCombos[i][j])
    }
    if (output[i].includes(undefined)) {
      output[i] = undefined
    } else {
      output[i] = output[i].join('')
    }
  }
  if (output.includes('XXX')) {
    return 'X is the winner'
  } else if (output.includes('YYY')) {
    return 'Y is the winner'
  } else if (!output.includes(undefined)) {
    return 'Tie'
  }
}
