export const state = () => ({
  website: null
})
  
export const mutations = {
  setWebsite (state, website) {
    state.website = website
  }
}