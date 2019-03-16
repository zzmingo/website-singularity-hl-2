<template>
  <div class="page index">
    <div class="sec-banner">
      <div>
        <div class="title"></div>
      </div>
    </div>
    <div class="sec-mission">
      <div class="title"></div>
      <div class="description"></div>
    </div>
  </div>
</template>

<script>

export default {
  async fetch ({ store, params, $axios }) {
    let strings = await $axios.$get(`/strings`)
    store.commit('setStrings', strings)
    console.log(strings)
    let data = await $axios.$get(`/websites?language=en`)
    console.log(data[0])
    store.commit('setWebsite', data[0])
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.sec-banner {
  background-size: cover;
  background-position: center;
  height: 405px;

  .title {
    color: white;
    font-size: 24px;
    font-weight: bold;
    text-shadow: 0px 0px 5px #000000;
    width: 400px;
  }
}
</style>