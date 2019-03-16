import Vue from 'vue'

Vue.mixin({
  computed: {
    imgBaseUrl() {
      return process.env.imgBaseUrl
    },
    website() {
      return this.$store && this.$store.state.website || {}
    },
    lang() {
      return this.$store && this.$store.state.lang || 'en'
    }
  }
})

Vue.prototype.$string = function(key) {
  return this.$store.state.strings[key][this.$store.state.lang]
}