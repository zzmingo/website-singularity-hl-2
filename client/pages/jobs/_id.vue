<template>
  <div class="page job">
    <div class="header">
      <div class="info">
        <div class="name">{{job.name}}</div>
        <div class="address">{{job.address}}</div>
      </div>
    </div>
    <div class="intro">
      <div class="intro-info" v-html="intro"></div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import SLButton from '~/components/SLButton.vue'

export default {
  components: {
    SLButton
  },
  async fetch ({ store, params, $axios }) {
    console.log(params)
    let strings = await $axios.$get(`/strings`)
    store.commit('setStrings', strings)
    console.log(strings)
    let data = await $axios.$get(`/websites?language=${store.state.lang}`)
    console.log(data[0])
    store.commit('setWebsite', data[0])
  },
  async asyncData ({ $axios, params }) {
    return $axios.$get(`/jobs/${params.id}`).then(data => {
      console.log(data)
      return {
        job: data
      }
    })
  },
  computed: {
    intro() {
      return marked(this.job.intro)
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
.body {
  background-image: url(~assets/site_bg.jpg);
  background-repeat: repeat;
  color: #3c3951;
}

.job {

  h2 {
    color: #3c3951;
    font-size: 18px;
    font-weight: bold;
    margin-top: 60px;
  }


}
</style>

<style lang="less" scoped>
.header {

  border-bottom: 1px solid #9d9d9d;
  
  .info {
    display: flex;
    flex-direction: row;
    max-width: 900px;
    margin: 0 auto;
    align-items: flex-end;
    padding-top: 60px;
  }

  .name {
    flex: 1;
    color: #3c3951;
    font-size: 18px;
    font-weight: bold;
    padding-right: 50px;
  }
  .address {
    color: #7198d6;
  }

}

.intro {
  padding-bottom: 100px;

  .intro-info {
    max-width: 700px;
    margin: 0 auto;
  }
}
</style>