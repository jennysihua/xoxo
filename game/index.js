import {Map} from 'immutable'
import {createStore} from 'redux'

let board = Map()

const MOVE = 'move'


board = board.setIn([1, 1], 'X')
console.log(board)
board = board.setIn([2, 1], 'Y')

console.log(board)

const move = (turn, rowCol) => ({
  type: MOVE,
  position: rowCol,
  turn
})



export default function reducer(state = { board, turn: 'X' }, action) {
  let newTurn;
  if (action.turn === 'X') {
    newTurn = 'Y'
  } else {
    newTurn = 'X'
  }

  // Switch(action.type)


  return { board: board.setIn(action.position, turn),  turn: newTurn}



}


