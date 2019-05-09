<template>
  <section class="main">
    <Banner />
  </section>
</template>

<script>
import Banner from '~/components/Index/Banner.vue'
export default {
  layout: 'default',
  components: {
    Banner
  },
  methods: {
    onChange(a, b, c) {
      
    }
  }
}


</script>

<style scoped lang="less">
.main {
  height: 2000px;
  padding: 0 15px;
  box-sizing: border-box;
}
</style>
