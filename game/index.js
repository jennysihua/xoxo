import {Map} from 'immutable'
import {createStore} from 'redux'

// let board = Map()

const MOVE = 'move'

// let board = Map()
// board = board.setIn([1, 1], 'X')
// console.log(board)

export const move = (turn, rowCol) => ({
  type: MOVE,
  position: rowCol,
  turn
})

export default function reducer (state = { board: Map(), turn: 'X' }, action) {
  if (action.type === MOVE) {
    let newTurn;
    const newBoard = state.board.setIn(action.position, state.turn)
    if (state.turn === 'X') {
      newTurn = 'Y'
    } else {
      newTurn = 'X'
    }
    return { board: newBoard,  turn: newTurn}
  }
  return state
}
