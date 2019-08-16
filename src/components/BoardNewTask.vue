<template>
  <div class="new_task__wrap">
    <button
      class="new_task__button"
      @click="startCreating"
      v-if="!creature"
    >
      + Add new task
    </button>
    <div class="new_task__creature" v-else>
      <textarea
        type="text"
        v-model="taskTitle"
        class="new_task__input"
        @keydown.enter="addBoardTask"
        @keydown.esc="closeCreating"
        v-focus
        maxlength="312"
      ></textarea>
      <div class="new_task__controls">
        <button
            class="controls_add"
            @click.prevent="addBoardTask"
            :disabled="taskTitle.trim() === ''"
          >
            Add list
          </button>
          <a class="controls_close" @click="closeCreating">
            <i class="material-icons">close</i>
          </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoardNewTask',
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      taskTitle: '',
      creature: false
    }
  },
  methods: {
    startCreating () {
      this.creature = true
    },
    closeCreating () {
      this.creature = false
      this.taskTitle = ''
    },
    addBoardTask () {
      const title = this.taskTitle
      const tasks = this.tasks

      this.$store.dispatch('boards/addBoardTask', { tasks, title })
      this.closeCreating()
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.new_task__wrap
  width: 100%
.new_task__button
  border: none
  color: #6b778c
  background: transparent
  cursor: pointer
  width: 100%
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
.new_task__input
  width: 100%
  padding: 8px 12px
  border: none
  font-family: $default-font
  font-size: 14px
  font-size: 18px
  border-radius: 3px
  resize: vertical
  min-height: 50px
.new_task__controls
  display: flex
  align-items center
  margin-top: 8px
.controls_add
  padding: 6px 24px
  font-size: 14px
  border-radius: 3px
  font-weight: 500
  border: none
  font-family: $default-font
  color: white
  cursor: pointer
  position: relative
  transition: 0
  background-color: rgba(81, 152, 57, 1)
  &:hover
    &::before
      position: absolute 
      content: ''
      width: 100%
      height: 100%
      border-radius: 3px
      top: 0
      left: 0
      z-index: 1
      background-color: rgba(255, 255, 255, 0.2)
.controls_close
  text-decoration: none
  cursor: pointer
  color: $color-dark
  opacity: .8
  margin-left: 8px
  &:hover
    opacity: 1
</style>
