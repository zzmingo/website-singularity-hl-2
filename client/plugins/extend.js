import Vue from 'vue'

Vue.mixin({
  computed: {
    imgBaseUrl() {
      return process.env.imgBaseUrl
    },
    website() {
      return this.$store.state.website
    },
    lang() {
      return this.$store.state.lang
    }
  }
})

Vue.prototype.$string = function(key) {
  return this.$store.state.strings[key][this.$store.state.lang]
}