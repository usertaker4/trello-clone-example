<template>
  <div class="board-header__wrap">
    <div class="header__title">
      <span v-if="!editing" @click="editTitle">{{title}}</span>
      <input
        maxlength="80"
        :style="{width: `${title.length * 11.8}px`}"
        v-else
        v-focus
        @blur="doneEdit"
        @keydown.enter="doneEdit"
        @keydown.esc="cancelEdit"
        type="text"
        v-model="title"
      >
    </div>
    <span class="board-header__favorite" @click="toggleFavorite">
      <div class="board-header-favorite__options">
        <i class="material-icons board-header__icon" :class="{ board_header_favorite__active: this.favorite === true }">star_border</i>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'BoardHeader',
  props: {
    board: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      editing: false,
      beforeEditValue: '',
      title: this.board.title,
      id: this.board.id,
      lists: this.board.lists,
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
        favorite: this.favorite,
        background: this.background,
        lists: this.lists
      })
    },
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
.board-header__wrap
  padding: 8px
  display: flex
  flex-wrap: wrap
  align-items: center
.header__title
  font-size: 18px
  font-weight: 700
  input
    border: none
    font-size: 18px
    padding: 4px 12px
    outline: none
    font-weight: 700
  span
    padding: 5px 13px
    border-radius: 3px
    &:hover
      cursor: pointer
      background-color: hsla(0,0%,100%,.24)
.board-header__favorite
  background-color: hsla(0,0%,100%,.14)
  padding: 3px
  border-radius: 3px
  margin-left: 4px
  &:hover
    background-color: hsla(0,0%,100%,.24)
    cursor: pointer
.board-header-favorite__options
  display: flex
  align-items center
.board-header__icon
  font-size: 25px
.board_header_favorite__active
  color: orange
</style>
