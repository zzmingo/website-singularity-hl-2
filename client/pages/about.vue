<template>
  <div class="page about-us">
    <div class="content">
      <h2>{{website.about_us_goals_title}}</h2>
      <p class="desc">
        <ul class="goals">
          <li v-for="(item, idx) in website.about_us_goals" :key="idx">{{item}}</li>
        </ul>
      </p>
      <img class="cover" :src="imgBaseUrl + website.about_us_goals_cover.url">
      <h2>{{website.about_us_team_title}}</h2>
      <p class="desc">
        {{website.about_us_team_description}}
      </p>
      <img class="cover" :src="imgBaseUrl + website.about_us_team_cover.url">
      <h2>{{website.about_us_contact_title}}</h2>
      <p class="desc">
        {{website.about_us_contact_description}}
      </p>
      <p class="address">
        {{website.address}}<br/>
        {{website.email}}
      </p>
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
.about-us {
  background-color: white;

  > .content {
    margin: 0 auto;
    max-width: 740px;
    padding: 10px 20px 40px 20px;

    > h2 {
      margin-top: 30px;
      font-size: 28px;
      font-weight: bold;
      color: #3c3951;
    }

    > .desc {
      font-size: 14px;
      color: #58566a;
    }

    .goals {
      margin: 0;
      padding: 0;

      li {
        margin-left: 20px;
        margin-bottom: 20px;
      }
    }

    > .cover {
      width: 100%;
      padding: 20px;
    }

    .address {
      font-size: 14px;
      color: #58566a;
    }
  }
}
</style>