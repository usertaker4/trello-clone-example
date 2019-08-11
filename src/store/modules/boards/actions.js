import * as types from '../mutation-types'

export default {
  updateBoard ({ commit }, board) {
    return commit(types.UPDATE_BOARD, board )
  }
}
