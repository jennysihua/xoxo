import {Map} from 'immutable'

// let board = Map()

const board = Map()
const MOVE = 'move'
// board = board.setIn([1, 1], 'X')
// console.log(board)

export const move = (turn, rowCol) => ({
  type: MOVE,
  position: rowCol,
  turn
})

export default function reducer (state = { board, turn: 'X' }, action) {
  switch (action.type) {
      case MOVE: {
      let newTurn;
      if (state.turn === 'X') {
        newTurn = 'O'
      } else {
        newTurn = 'X'
      }
      return { board: state.board.setIn(action.position, state.turn),  turn: newTurn}
    }
    default: return state
  }
}

// const checkWinners = //

//[[0, 0],[0,1],[0,2], [more groups of three]]
