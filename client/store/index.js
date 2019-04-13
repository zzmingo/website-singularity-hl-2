export const state = () => ({
  lang: 'en',
  website: {},
  strings: {},
  jobs: [],
})

export const mutations = {
  setLang (state, lang) {
    state.lang = lang
  },
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
  setJobs (state, jobs) {
    state.jobs = jobs
  }
}

export const actions = {

  async nuxtServerInit (store, { req, params, $axios }) {
    var lang = req.hostname.indexOf('singularity-hl.ai') !== -1 ? 'en' : 'zh-cn'
    if (req.query.lang) {
      lang = req.query.lang
    }
    store.commit('setLang', lang)
    let strings = await $axios.$get(`/strings`)
    store.commit('setStrings', strings)
    let data = await $axios.$get(`/websites?language=${lang}`)
    let website = data[0]
    let sections = await $axios.$get(`/sections?website=${website.id}`)
    website.what_we_do_sections = sections
    store.commit('setWebsite', website)

    var jobs = await $axios.$get(`/jobs?language=${lang}&visible=1`)
    store.commit('setJobs', jobs)
  },
}
