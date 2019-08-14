<template>
  <div class="board-page__wrap">
    <div class="board-page__content" :style="{background: `${background}`}">
      <board-header :board="board"/>
      <board-lists :lists="lists"/>
    </div>
    <div class="board-page__menu"></div>
  </div>
</template>
<script>
import BoardHeader from '../components/BoardHeader.vue'
import BoardLists from '../components/BoardLists.vue'

export default {
  name: 'board',
  components: {
    BoardHeader,
    BoardLists
  },
  props: {
    board: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      background: this.board.background,
      lists: this.board.lists
    }
  }
}
</script>

<style lang="stylus" scoped>
.board-page__wrap
  width: 100%
  height: 100%
.board-page__content
  height: 100%
  margin-right: 340px
  display: flex
  flex-direction: column
</style>
