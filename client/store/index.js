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