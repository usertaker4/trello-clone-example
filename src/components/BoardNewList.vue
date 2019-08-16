<template>
  <div :class="{ new_list__wrap: creature }">
    <button
      v-if="!creature"
      class="new-list__button"
      @click="startCreating"
    >
      + New list
    </button>
    <div class="new-list__creature" v-else>
      <input
        type="text"
        v-model="listTitle"
        class="new-list__input"
        @keydown.enter="addBoardList"
        @keydown.esc="closeCreating"
        v-focus
      >
      <div class="new-list__controls">
        <button
          class="controls_add"
          @click.prevent="addBoardList"
          :disabled="listTitle.trim() === ''"
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
  name: 'BoardNewList',
  props: {
    lists: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      listTitle: '',
      creature: false
    }
  },
  methods: {
    startCreating () {
      this.creature = true
    },
    closeCreating () {
      this.creature = false
      this.listTitle = ''
    },
    addBoardList () {
      const lists = this.lists
      const title = this.listTitle

      this.$store.dispatch('boards/addBoardList', { lists, title })
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
.new_list__wrap
  margin-left: 8px
  padding: 4px
  border-radius: 3px
  width: 272px
  background-color: #dfe1e6
.new-list__button
  width: 100%
  font-size: 14px
  font-family: $default-font
  border: none
  width: 272px
  margin-left: 8px
  border-radius: 3px
  background-color: rgba(0,0,0,.12)
  color: white
  cursor: pointer
  height: 37px
  &:hover
    background-color: rgba(0,0,0,.24)
.new-list__input
  width: 100%
  padding: 8px 12px
  border: none
  font-size: 18px
  border-radius: 3px
.new-list__controls
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
