<template>
  <div class="board-lists__wrap">
    <board-list
      v-for="list in lists"
      :key="list.id"
      :list="list"
    />
  </div>
</template>
<script>
import BoardList from './BoardList.vue'

export default {
  name: 'BoardLists',
  components: {
    BoardList
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
</style>
