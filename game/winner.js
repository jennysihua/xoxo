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
    }
  }
  console.log(output)
  console.log('c1', output.includes([ 'X', 'X', 'X' ]))
  console.log('c2', output.indexOf([ 'X', 'X', 'X' ]) > -1)
  if (output.includes(['X', 'X', 'X'])) {
    return 'X is the winner'
  } else if (output.includes(['Y', 'Y', 'Y'])) {
    return 'Y is the winner'
  } else if (!output.includes(undefined)) {
    return 'Tie'
  }
}
