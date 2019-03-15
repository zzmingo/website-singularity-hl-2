<template>
  <div class="page index">
    <NavBar />
    <SectionBanner />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import SectionBanner from '~/components/SectionBanner.vue'

export default {
  components: {
    NavBar,
    SectionBanner,
  },
  data() {
    return {
    }
  }
}
</script>

<style>
</style>