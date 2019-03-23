export const state = () => ({
  lang: 'en',
  website: {},
  strings: {},

})
  
export const mutations = {
  setStrings (state, strings) {
    var stringMap = {}
    strings.forEach(string => {
      stringMap[string.key] = string
    })
    state.strings = stringMap
  },
  setWebsite (state, website) {
    state.website = website
  },
}

export const actions = {

  async nuxtServerInit (store, { $axios }) {
    let strings = await $axios.$get(`/strings`)
    store.commit('setStrings', strings)
    let data = await $axios.$get(`/websites?language=${store.state.lang}`)
    let sections = await $axios.$get(`/sections`)
    data[0].what_we_do_sections = sections
    store.commit('setWebsite', data[0])
  },
}