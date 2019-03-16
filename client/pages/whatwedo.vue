<template>
  <div class="page whatwedo">
    <div class="content">
      <h2>{{website.what_we_do_title}}</h2>
      <p class="desc">
        {{website.what_we_do_description}}
      </p>
      <img class="cover" :src="imgBaseUrl + website.what_we_do_image.url">

      <div class="sections">
        <div class="section" v-for="(section, idx) in website.what_we_do_sections" :key="idx" :class="{ reverse: idx % 2 == 1 }">
          <div class="info">
            <h3>{{section.title}}</h3>
            <p class="desc">{{section.content}}</p>
          </div>
          <div class="image" :style="getSectionImageStyle(section)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
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
  },
  methods: {
    getSectionImageStyle(section) {
      return {
        backgroundImage: `url(${this.imgBaseUrl}${section.image.url})`
      }
    }
  }
}
</script>

<style lang="less" scoped>
.whatwedo {
  background-color: white;

  > .content {
    margin: 0 auto;
    max-width: 700px;
    padding: 40px 0;

    > h2 {
      font-size: 28px;
      font-weight: bold;
      color: #3c3951;
    }

    > .desc {
      font-size: 14px;
      color: #58566a;
    }

    > .cover {
      width: 100%;
      padding: 20px;
    }

    .section {
      display: flex;
      flex-direction: row;
      min-height: 200px;
      justify-content: stretch;

      .info {
        flex: 1.1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 30px 30px 30px 0;

        h3 {
          font-size: 28px;
          font-weight: bold;
          color: #3c3951;   
        }

        > .desc {
          font-size: 14px;
          color: #58566a;
        }

      }

      .image {
        flex: 1;
        background-position: center;
        background-size: 70%;
        background-repeat: no-repeat;
      }

      &.reverse {
        flex-direction: row-reverse;
      }
    }
  }
}
</style>