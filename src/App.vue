<template>
  <div id="app">
    <app-header/>
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>

import AppHeader from './components/AppHeader'

export default {
  components: {
    AppHeader
  },
  computed: {
    layout () {
      return this.$route.meta.layout || 'default-layout'
    }
  }
}
</script>

<style lang="stylus">
#app, body, html
  padding: 0
  margin: 0
  height: 100%
  font-family: $default-font
  color: #ffffff
  font-size: 14px
*
  box-sizing: border-box
</style>
