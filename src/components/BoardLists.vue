<template>
  <div class="board-lists__wrap">
    <board-list
      v-for="list in lists"
      :key="list.id"
      :list="list"
    />
    <board-new-list :lists="lists"/>
  </div>
</template>
<script>
import BoardList from './BoardList.vue'
import BoardNewList from './BoardNewList.vue'

export default {
  name: 'BoardLists',
  components: {
    BoardList,
    BoardNewList
  },
  props: {
    lists: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.board-lists__wrap
  display: flex
</style>
