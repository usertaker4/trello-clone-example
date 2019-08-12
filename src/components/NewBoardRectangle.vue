<template>
  <button class="rectangle-new__wrap" @click="boardCreationToggle">
    <div class="rectangle-new__title">New board</div>
  </button>
</template>

<script>

export default {
  name: 'NewBoardRectangle',
  methods: {
    boardCreationToggle () {
      this.$store.dispatch('boards/boardCreationToggle')
    }
  }
}
</script>

<style lang="stylus" scoped>
.rectangle-new__wrap
  background-color: rgba(0, 40, 90, .15)
  display: flex
  border: none
  justify-content: center
  margin: 4px
  outline: none
  padding: 8px
  height: 96px
  font-size: 14px
  border-radius: 3px
  width: calc(25% - 8px)
  transition: .085s ease
  letter-spacing: .5px
  &:hover
    cursor: pointer
    background-color: rgba(0, 40, 90, .2)
  &:active
    background-color: rgba(50, 130, 190, .2)
    color: rgba(0, 121, 191, 1)
</style>
