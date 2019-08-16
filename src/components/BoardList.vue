<template>
  <div class="board-list__wrap">
    <div class="board-list__header" @click="editTitle">
      <span 
        class="header__title" 
        v-if="!editing"
      >
        {{title}}
      </span>
      <textarea
        type="text"
        class="header__input"
        v-else
        @blur="doneEdit"
        @keydown.enter="doneEdit"
        @keydown.esc="cancelEdit"
        v-model="title"
      ></textarea>
    </div>
    <board-tasks :tasks="tasks"/>
    <board-new-task :tasks="tasks"/>
  </div>
</template>
<script>
import BoardTasks from './BoardTasks.vue'
import BoardNewTask from './BoardNewTask.vue'

export default {
  name: 'BoardList',
  components: {
    BoardTasks,
    BoardNewTask
  },
  props: {
    list: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      editing: false,
      title: this.list.title,
      id: this.list.id,
      tasks: this.list.tasks,
      beforeEditValue: ''
    }
  },
  methods: {
    editTitle () {
      this.beforeEditValue = this.title
      this.editing = true
    },
    doneEdit () {
      if (this.title.trim() === '') {
        this.title = this.beforeEditValue
      }
      this.editing = false
      this.$store.dispatch('boards/updateBoard', {
        id: this.id,
        title: this.title,
        favorite: this.favorite,
        background: this.background,
        lists: this.lists
      })
    },
    cancelEdit () {
      this.title = this.beforeEditValue
      this.editing = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.board-list__wrap
  width: 272px
  display: flex
  padding: 8px
  align-self: flex-start
  flex-direction: column
  border-radius: 3px
  background-color: #dfe1e6
  color: $color-dark
  margin-left: 8px
.board-list__header
  font-size: 18px
  margin-bottom: 8px
  cursor: pointer
.header__title
  font-size: 18px
  flex: 0 0 auto
.header__input
  font-size: 18px
  border-radius: 3px
  border: none
  resize: none
  width: 100%
  font-family: $default-font
</style>
