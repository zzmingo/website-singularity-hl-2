<template>
  <div class="footer">
    <div class="content">
      <div class="left">
        <img class="logo" :src="imgBaseUrl + website.logo_light.url" width=160>
        <div class="item">
          Singularity.AI Technology Co., Ltd
        </div>
        <div class="item">
          Contact E-mail：hr@singularity-hl.ai
        </div>
        <div class="item">
          © 2018 Singularity.AI, Inc.
        </div>
      </div>
      <div class="right">

      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.footer {
  background-color: #2a3142;

  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
    height: 240px;
    max-width: 700px;
    margin: 0 auto;

    .left {
      display: flex;
      flex-direction: column;
      color: #666d7f;

      .logo {
        margin-bottom: 30px;
      }

      .item {
        font-size: 13px;
      }
    }
  }
}
</style>
