<template>
  <div class="board-tasks__wrap">
    <board-task v-for="task in tasks" :key="task.id" :task="task"/>
  </div>
</template>
<script>
import BoardTask from './BoardTask.vue'

export default {
  name: 'BoardTasks',
  components: {
    BoardTask
  },
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
