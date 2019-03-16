<template>
  <img class="logo" :src="imgBaseUrl + $store.state.website.logo.url">
</template>
<script>
export default {
  computed: {
    imgBaseUrl() {
      return process.env.imgBaseUrl
    }
  }
}
</script>

<style lang="less" scoped>
.logo {
  height: 30px;
}
</style>
