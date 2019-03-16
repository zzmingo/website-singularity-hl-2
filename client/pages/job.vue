<template>
  <div class="page job">
    
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
  async asyncData ({ $axios, params }) {
    return $axios.$get(`/jobs/${params.id}`).then(data => {
      console.log(data)
      return {
        job: data
      }
    })
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style>
.body {
  background-image: url(~assets/site_bg.jpg);
  background-repeat: repeat;
}
</style>

<style lang="less" scoped>
</style>