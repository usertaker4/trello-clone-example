import * as types from '../../mutation-types'

export default {
  updateBoard ({ commit }, board) {
    return commit(types.UPDATE_BOARD, board )
  },

  addBoard ({ commit }, { title, background }) {
    return commit(types.ADD_BOARD, { title, background })
  },

  addBoardList ({ commit }, { lists, title }) {
    return commit(types.ADD_BOARD_LIST, { lists, title })
  },

  addBoardTask ({ commit }, { tasks, title }) {
    return commit(types.ADD_BOARD_TASK, { tasks, title })
  },

  boardCreationToggle ({ commit }) {
    return commit(types.BOARD_CREATION_TOGGLE)
  }
}
