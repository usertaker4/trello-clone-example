<template>
  <div class="board-header__wrap">
    <div class="header__title">
      <span v-if="editing">{{title}}</span>
      <input v-else type="text">
    </div>
    <span class="board-header__favorite" @click="toggleFavorite">
      <div class="board-header-favorite__options">
        <i class="material-icons board-header__icon" :class="{ board_header_favorite__active: this.board.favorite === true }">star_border</i>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'BoardHeader',
  props: {
    board: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      editing: false,
      title: this.board.title
    }
  }
}
</script>

<style lang="stylus" scoped>
.board-header__wrap
  padding: 8px
  display: flex
  align-items: center
.header__title
  font-size: 18px
  font-weight: 700
</style>
