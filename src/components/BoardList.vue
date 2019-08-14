<template>
  <div class="board-list__wrap">
    <div class="board-list__header">
      <span 
        class="header__title" 
        v-if="!editing"
        @click="editTitle"
      >
        {{title}}
      </span>
      <textarea
        type="text"
        class="header__input"
        v-else
        autofocus
        @blur="doneEdit"
        @keydown.enter="doneEdit"
        @keydown.esc="cancelEdit"
        v-model="title"
      ></textarea>
    </div>
    <board-tasks :tasks="tasks"/>
    <button class="board-list__new-task">
      + Add new task
    </button>
  </div>
</template>
<script>
import BoardTasks from './BoardTasks.vue'

export default {
  name: 'BoardList',
  components: {
    BoardTasks
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
  flex-direction: column
  border-radius: 3px
  background-color: #dfe1e6
  color: $color-dark
  height: 100%
  &:first-child
    margin-left: 8px
.board-list__header
  font-size: 18px
  padding: 8px 10px
  cursor: pointer
.header__title
  padding: 4px
  font-size: 18px
  flex: 0 0 auto
.header__input
  padding: 0 4px
  font-size: 18px
  border-radius: 3px
  border: none
  resize: none
  width: 100%
  font-family: $default-font
.board-list__new-task
  border: none
  color: #6b778c
  background: transparent
  cursor: pointer
  font-size: 14px
  padding: 8px
  position: relative
  &:hover
    text-decoration: underline
    &::before
      position: absolute 
      content: ''
      width: 100%
      height: 100%
      top: 0
      left: 0
      z-index: 1
      background-color: rgba(0, 0, 0, 0.2)
</style>
