import * as types from '../../mutation-types'

export default {
  updateBoard ({ commit }, board) {
    return commit(types.UPDATE_BOARD, board )
  },

  addBoard ({ commit }, { title, background }) {
    return commit(types.ADD_BOARD, { title, background })
  },

  boardCreationToggle ({ commit }) {
    return commit(types.BOARD_CREATION_TOGGLE)
  }
}
