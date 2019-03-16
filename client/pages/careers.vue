<template>
  <div class="page careers">
    <div class="sec-banner" :style="bannerStyle">
      <div class="title">{{website.careers_banner_title}}</div>
      <div class="box">
          <div class="desc">{{website.careers_banner_description}}</div>
      </div>
    </div>
    <div class="jobs">
      <div class="search">
        <div class="bar">
          <div class="border"></div><input placeholder="Search"><i></i>
        </div>
      </div>
      <div class="jobs">
        <div class="list">
          <div class="item">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SLButton from '~/components/SLButton.vue'

export default {
  components: {
    SLButton
  },
  async fetch ({ store, params, $axios }) {
    let strings = await $axios.$get(`/strings`)
    store.commit('setStrings', strings)
    console.log(strings)
    let data = await $axios.$get(`/websites?language=${store.state.lang}`)
    console.log(data[0])
    store.commit('setWebsite', data[0])
  },
  async asyncData ({ }) {

  },
  computed: {
    bannerStyle() {
      return {
        backgroundImage: `url(${this.imgBaseUrl}${this.website.careers_banner.url})`
      }
    },
  }
}
</script>

<style lang="less" scoped>
.sec-banner {
  background-size: cover;
  background-position: center;
  height: 460px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    color: white;
    font-size: 28px;
    font-weight: bold;
    text-shadow: 0px 0px 5px #666666;
    width: 400px;
    font-size: OpenSans;
  }

  .box {
    max-width: 500px;
    border: 1px solid white;
    padding: 10px;
    margin-top: 30px;

    .desc {
      border: 1px solid white;
      color: white;
      padding: 30px 40px;
      text-align: center;
    }
  }
}

.search {
  background-color: white;
  height: 80px;

  .bar {
    max-width: 700px;
    height: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .border {
      width: 1px;
      background: #8f96ab;
      height: 40px;
    }

    input {
      display: block;
      padding: 0 20px;
      flex: 1;
      height: 100%;
      line-height: 81px;
      border: none;
      outline: none;
      font-size: 18px;
      color: #3c3951;
    }
  }
}

.jobs {
  background-color: #f6f6f6;

}

</style>