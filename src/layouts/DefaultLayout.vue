<template>
  <div class="default__wrap">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style lang="stylus">
.default__wrap
  width: 100%
  height: 100%
</style>
