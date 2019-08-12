<template>
  <div class="general__wrap">
    <new-board-modal v-if="boardCreation"/>
    <div class="general__content">
      <home-sidebar/>
      <slot/>
    </div>
  </div>
</template>

<script>
import HomeSidebar from '../components/HomeSidebar.vue'
import NewBoardModal from '../components/NewBoardModal.vue'

export default {
  name: 'GeneralLayout',
  components: {
    HomeSidebar,
    NewBoardModal
  },
  computed: {
    boardCreation () {
      return this.$store.state.boards.boardCreation
    }
  }
}
</script>

<style lang="stylus" scoped>
.general__wrap
  width: 100%
  height: 100%
  display: flex
  justify-content: center
.general__content
  margin-top: 40px
  width: 1100px
</style>

