import * as types from '../../mutation-types'

export default {
  [types.UPDATE_BOARD] (state, board) {
    const boards = state.boards
    const index = boards.findIndex(item => item.id === board.id)
    
    boards.splice(index, 1, {
      id: board.id,
      title: board.title,
      favorite: board.favorite,
      background: board.background,
      lists: board.lists
    })
  },

  [types.ADD_BOARD] (state, { title, background }) {
    state.boards.push({
      id: Date.now(),
      title: title,
      background: background,
      favorite: false,
      lists: []
    })
  },

  [types.ADD_BOARD_LIST] (state, { lists, title }) {
    lists.push({
      id: Date.now(),
      title: title,
      tasks: []
    })
  },

  [types.ADD_BOARD_TASK] (state, { tasks, title }) {
    tasks.push({
      id: Date.now(),
      title: title
    })
  },

  [types.BOARD_CREATION_TOGGLE] (state) {
    state.boardCreation = !state.boardCreation
  }
}
