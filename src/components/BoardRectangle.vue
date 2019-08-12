<template>
  <div class="items__rectangle" :style="{background: `${background}`}">
    <div class="rectangle__details">
      <div class="rectangle__title">{{title}}</div>
      <span class="rectangle__favorite" @click="toggleFavorite">
        <div class="favorite__options">
          <i class="material-icons favorite__icon" :class="{ favorite__active: this.board.favorite === true }">star_border</i>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BoardRectangle',
  props: {
    board: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      id: this.board.id,
      editing: this.board.editing,
      list: this.board.list,
      title: this.board.title,
      favorite: this.board.favorite,
      background: this.board.background
    }
  },
  methods: {
    toggleFavorite () {
      this.favorite= !this.favorite

      this.$store.dispatch('boards/updateBoard', {
        id: this.id,
        title: this.title,
        editing: this.editing,
        favorite: this.favorite,
        background: this.background,
        list: this.list
      })
    }
  }
}
</script>

<style lang="stylus">
.items__rectangle
  color: rgb(255, 255, 255)
  display: flex
  flex: 0 0 auto
  margin: 4px
  position: relative
  padding: 8px
  border-radius: 3px
  width: calc(25% - 8px)
  overflow: hidden
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
      z-index: 0
      background-color: rgba(0, 0, 0, 0.2)
    .favorite__icon
      right: 0
.rectangle__details
  height: 80px
  display: flex
  width: 100%
  justify-content: space-between
  flex-direction: column
.rectangle__title
  display: -webkit-box
  -webkit-line-clamp: 2
  -webkit-box-orient: vertical
  overflow: hidden
  z-index: 1
.rectangle__favorite
  display: flex
  align-self: flex-end
  justify-content: flex-end
.favorite__options
  position: relative
  width: 24px
  height: 24px
.favorite__icon
  right: -35px
  top: 0
  bottom: 0
  color: white
  position: absolute
  transition: .15s ease
  &:hover
    transform: scale(1.2)
.favorite__active
  right: 0
  color: orange
</style>
