<template>
  <div class="sidebar__wrap">
    <ul class="sidebar__navigation">
      <router-link
        tag="li"
        class="navigation__item"
        v-for="item in navigationItems"
        :key="item.route"
        :to="item.route"
      >
      <i class="material-icons">{{item.icon}}</i>
      <span>{{item.title}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeSidebar',
  data () {
    return {
      navigationItems: [
        {
          title: 'Boards',
          icon: 'dashboard',
          route: '/boards'
        },
        {
          title: 'General page',
          icon: 'track_changes',
          route: '/'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.sidebar__wrap
  display: flex
  flex-direction: column
  color: $color-dark
  width: 220px
.sidebar__navigation
  list-style: none
  padding: 0
.navigation__item
  display: flex
  padding: 8px
  align-items: center
  font-weight: 500
  border-radius: 4px
  margin-bottom: 4px
  transition: .1s ease
  &:last-child
    margin-bottom: 0
  span
    margin-left: 4px
  i
    font-size: 18px
  &:hover
    background: rgba(155, 171, 183, .3)
    cursor: pointer
  &:active
    background: rgba(155, 171, 183, .9)
.router-link-exact-active
  background: rgba(2, 106, 167, .1)
  color: rgba(0, 121, 191, 1)
</style>

