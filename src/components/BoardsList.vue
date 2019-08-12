<template>
  <div class="boards__content">
    <!-- <div class="favorite__container container">
      <div class=" title">
        <i class="material-icons">star_border</i>
        <span>Favorite boards</span>
      </div>
      <div class="items">
        <div class="items__rectangle">
          <div class="rectangle__details">
            <div class="rectangle__title">Example board</div>
            <span class="rectangle__favorite">
              <div class="favorite__options">
                <i class="material-icons">star_border</i>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="history__container container">
      <div class=" title">
        <i class="material-icons">access_time</i>
        <span>Recently viewed</span>
      </div>
      <div class="items">
        <div class="items__rectangle">
          <div class="rectangle__details">
            <div class="rectangle__title">Example board</div>
            <span class="rectangle__favorite">
              <div class="favorite__options">
                <i class="material-icons">star_border</i>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div> -->
    <div class="personal__container container">
      <div class="personal__title title">
        <i class="material-icons">person</i>
        <span>Personal boards</span>
      </div>
      <div class="personal__items items">
        <board-rectangle :board="board" v-for="board in boards" :key="board.id"/>
        <new-board-rectangle/>
      </div>
      
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BoardRectangle from './BoardRectangle'
import NewBoardRectangle from './NewBoardRectangle'

export default {
  name: 'BoardsList',
  components: {
    BoardRectangle,
    NewBoardRectangle
  },
  computed: {
    ...mapState('boards', [
      'boards'
    ])
  }
}
</script>

<style lang="stylus">
.boards__content
  color: $color-dark
  font-size: 16px
  font-weight: 700
  display: flex
  flex-direction: column
.container
  display: flex
  flex-direction: column
.title
  display: flex
  align-items: center
  span
    margin-left: 10px
.items
  display: flex
  flex-wrap: wrap
  margin: -4px -4px
  padding-top: 8px
</style>
