import * as types from '../mutation-types'

export default {
  [types.UPDATE_BOARD] (state, board) {
    const boards = state.boards
    const index = boards.findIndex(item => item.id === board.id)
    
    boards.splice(index, 1, {
      id: board.id,
      title: board.title,
      editing: board.editing,
      favorite: board.favorite,
      list: board.list
    })
  }
}
