<template>
  <div class="header__wrap">
    <router-link
      to="/"
      tag="button"
      class="header__button"
    >
      <i class="material-icons">home</i>
    </router-link>
    <button class="header__button">
      <i class="material-icons">dashboard</i>
      <span>Boards</span>
    </button>
    <h1 class="header__title">
      Trello example
    </h1>
  </div>
</template>
<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="stylus" scoped>
.header__wrap
  background-color: rgba(2, 106, 167, 1)
  display: flex
  position: relative
.header__title
  margin: 0
  text-align: center
  color: white
  position: absolute
  width: 100%
  opacity: .5
  font-family: 'Kalam', cursive
  line-height: 40px
.header__button
  background-color: hsla(0, 0%, 100%, .3);
  color: #ffffff
  border: none
  margin: 6px 4px
  padding: 2px 5px
  font-weight: 500
  font-size: 14px
  font-family: $default-font
  border-radius: 4px
  outline: none
  display: flex
  z-index: 1
  align-items: center
  transition: .1s ease
  &:hover
    cursor: pointer
    background-color: hsla(0, 0%, 100%, .2);
  &:active
    background-color: hsla(0, 0%, 100%, .12);
  span
    padding-left: 5px
</style>

