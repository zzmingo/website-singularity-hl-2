<template>
  <div class="page index">
    <div class="sec-banner" :style="bannerStyle">
      <div class="title">{{website.title_for_index_banner}}</div>
    </div>
    <div class="sec-mission">
      <div class="title">{{website.title_for_index_section1}}</div>
      <div class="description">{{website.description_for_index_section1}}</div>
      <div class="more"></div>
    </div>
    <div class="sec-product">
      <div class="title">{{website.title_for_index_section2}}</div>
      <div class="content">
        <div class="list">
          <div class="item" v-for="(item, idx) in website.items_for_index_section2" :key="idx">
            <div class="list-title">{{item.title}}</div>
            <div class="list-desc">{{item.description}}</div>
          </div>
        </div>
        <div class="image" :style="productImageStyle"></div>
      </div>
      <div class="more"></div>
    </div>
    <div class="sec-about">
      <div class="title">{{website.title_for_index_section3}}</div>
      <div class="description">{{website.description_for_index_section3}}</div>
      <div class="more">
        <SLButton class="contact-btn" :label="$string('contact-us')" long large @click.native="$router.push('about')"></SLButton>
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
    let data = await $axios.$get(`/websites?language=${store.state.lang}`)
    let sections = await $axios.$get(`/sections`)
    data[0].what_we_do_sections = sections
    store.commit('setWebsite', data[0])
  },
  computed: {
    bannerStyle() {
      return {
        backgroundImage: `url(${this.imgBaseUrl}${this.website.index_banner.url})`
      }
    },
    productImageStyle() {
      return {
        backgroundImage: `url(${this.imgBaseUrl}${this.website.image_for_index_section2.url})`
      }
    }
  }
}
</script>

<style lang="less" scoped>
.sec-banner {
  background-size: cover;
  background-position: center;
  height: 460px;

  display: flex;
  align-items: center;
  justify-content: center;

  .title {
    color: white;
    font-size: 28px;
    font-weight: bold;
    text-shadow: 0px 0px 5px #000000;
    width: 520px;
    margin-left: 120px;
    font-size: OpenSans;
  }
}

.sec-mission {
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .title {
    font-size: 36px;
    font-weight: bold;
    color: #2a3142;
  }

  .description {
    font-size: 16px;
    color: #2a3142;
    max-width: 500px;
  }

  .more {
    height: 30px;
  }
}

.sec-product {
  background-color: #2a3142;
  height: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 36px;
    font-weight: bold;
    color: #f3f2f5;
    height: 100px;
    line-height: 100px;
  }

  .content {
    max-width: 680px;
    width: 680px;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;

    .list {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin: 20px;

      .item {
        margin-bottom: 20px;
      }

      .list-title {
        font-size: 14px;
        font-weight: bold;
        color: #c6dbff;
      }

      .list-desc {
        font-size: 12px;
        color: #98bdfa;
      }
    }

    .image {
      margin: 50px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      flex: 1;
    }
  }
  
  .more {
    height: 30px;
  }
}

.sec-about {
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .title {
    font-size: 36px;
    font-weight: bold;
    color: #2a3142;
  }

  .description {
    font-size: 16px;
    color: #2a3142;
    max-width: 500px;
  }

  .more {
    width: 100%;
    max-width: 600px;

    .contact-btn {
      width: 400px;
      margin: 0 auto;
    }
  }
}

</style>