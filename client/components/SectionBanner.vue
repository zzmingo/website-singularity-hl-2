<template>
  <div class="sec-banner">
    <div>
      <div class="title">{{title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  }
}
</script>

<style lang="less" scoped>
.sec-banner {
  background-image: url(~assets/banner.jpg);
  background-size: cover;
  background-position: center;
  height: 405px;
}

.title {
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 0px 0px 5px #000000;
  width: 400px;
}
</style>
