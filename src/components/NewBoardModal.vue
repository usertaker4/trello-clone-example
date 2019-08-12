<template>
  <div class="modal-new__wrap" @click.self="boardCreationToggle">
    <form class="modal-new_content">
      <div class="form-container">
        <div
          class="board__tile"
          :style="{background: `${boardBackground}`}"
        >
          <input
            v-model="boardTitle"
            type="text"
            placeholder="Enter board title"
            class="form__input"
          >
          <button class="modal__close" @click.prevent="boardCreationToggle">
            <i class="material-icons">close</i>
          </button>
        </div>
        <ul class="background-grid">
          <li
            @click="boardBackground = item.background"
            class="background-grid-trigger"
            v-for="item in backgroundItems"
            :key="item.background"
            :style="{background: `${item.background}`}"
          ></li>
        </ul>
      </div>
      <button
        class="add-board-btn"
        @click.prevent="addBoard"
        :disabled="boardTitle.trim() === ''"
      >
        Add board
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewBoardModal',
  data () {
    return {
      boardTitle: '',
      boardBackground: 'rgb(0, 121, 191)',
      backgroundItems: [
        {
          title: 'blue',
          background: 'rgb(0, 121, 191)'
        },
        {
          title: 'orange',
          background: 'rgb(210, 144, 52)'
        },
        {
          title: 'green',
          background: 'rgb(81, 152, 57)'
        },
        {
          title: 'red',
          background: 'rgb(176, 70, 50)'
        },
        {
          title: 'purple',
          background: 'rgb(137, 96, 158)'
        },
        {
          title: 'pink',
          background: 'rgb(205, 90, 145)'
        }
      ]
    }
  },
  methods: {
    boardCreationToggle () {
      this.$store.dispatch('boards/boardCreationToggle')
    },
    addBoard () {
      const title = this.boardTitle
      const background = this.boardBackground

      this.$store.dispatch('boards/addBoard', { title, background })
      this.boardTitle = ''
      this.boardCreationToggle()
    }
  }
}
</script>

<style lang="stylus" scoped>
.modal-new__wrap
  position: absolute
  left: 0
  top: 0
  padding-top: 24px
  width: 100%
  height: 100%
  z-index: 1
  background-color: rgba(0, 0, 0, 0.75)
.modal-new_content
  width: 352px
  margin: 0 auto
.form-container
  display: flex
.board__tile
  width: 295px
  height: 96x
  margin-right: 8px
  padding: 8px
  display: flex
  align-items: flex-start
  justify-content: space-between
  border-radius: 3px
  background: rgba(0, 121, 191, 1)
.form__input
  border: none
  background: transparent
  transition: .15s ease
  outline: none
  font-size: 16px
  color: white
  border-radius: 3px
  font-weight: 700
  padding: 4px
  &:hover
    background-color #fff
    background-color: rgba(255, 255, 255, 0.2 )
  &:focus
    background-color #fff
    background-color: rgba(255, 255, 255, 0.3)
  &::placeholder
    color: rgba(255, 255, 255, 0.6)
.modal__close
  background: transparent
  border: none
  color: white
  outline: none
  cursor: pointer
.background-grid
  list-style: none
  display: flex
  flex-wrap: wrap
  padding: 0
  margin: -4px
.background-grid-trigger
  width: 28px
  margin: 4px
  height: 28px
  position: relative
  border-radius: 3px
  z-index: 3
  &:hover
    cursor: pointer
    &::before
      position: absolute 
      content: ''
      width: 100%
      height: 100%
      border-radius: 3px
      top: 0
      left: 0
      z-index: 1
      background-color: rgba(0, 0, 0, 0.2)
.add-board-btn
  margin-top: 8px
  display: inline-block
  padding: 6px 12px
  font-size: 14px
  border-radius: 3px
  font-weight: 500
  border: none
  font-family: $default-font
  color: white
  position: relative
  transition: 0
  background-color: rgba(81, 152, 57, 1)
  &:disabled
    background: rgba(244, 245, 247, .7)
    &:hover
      cursor: not-allowed
  &:hover
    cursor: pointer
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
</style>
