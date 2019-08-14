<template>
  <div class="board-task__wrap">
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'BoardTask',
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      id: this.task.id,
      title: this.task.title
    }
  }
}
</script>

<style lang="stylus" scoped>
.board-task__wrap
  padding: 8px 6px
  display: block
  margin-bottom: 8px
  border-radius: 3px
  box-shadow: 0 1px 0 rgba(9,30,66,.25)
  background-color: #fff
  cursor: pointer
  &:hover
    background-color #f2f5f7
</style>
