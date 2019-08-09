<template>
  <div class="default__wrap">
    <div class="default__content">
      <home-sidebar/>
      <slot/>
    </div>
  </div>
</template>

<script>
import HomeSidebar from '../components/HomeSidebar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    HomeSidebar
  }
}
</script>

<style lang="stylus" scoped>
.default__wrap
  width: 100%
  height: 100%
  display: flex
  justify-content: center
.default__content
  margin-top: 40px
  width: 1100px
  display: flex
</style>

