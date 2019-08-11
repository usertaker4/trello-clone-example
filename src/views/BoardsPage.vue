<template>
  <div class="boards__wrap">
    <boards-list/>
  </div>
</template>

<script>
import BoardsList from '../components/BoardsList.vue'

export default {
  name: 'BoardsPage',
  components: {
    BoardsList
  }
}
</script>

<style lang="stylus" scoped>
.boards__wrap
  padding-left: 64px
  width: 880px
  float: right
</style>

