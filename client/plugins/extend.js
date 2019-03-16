import Vue from 'vue'

Vue.prototype.$string = function(key) {
  return this.$store.state.strings[key][this.$store.state.lang]
}