<template>
    <div class="navbar">
        <logo />
    </div>
</template>
<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>

<style lang="less" scoped>
.navbar {
  height: 110px;
}
</style>
