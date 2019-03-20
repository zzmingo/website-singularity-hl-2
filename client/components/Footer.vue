<template>
  <div class="footer">
    <div class="content">
      <div class="content-inner">
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
    max-width: 740px;
    padding: 40px 20px;
    margin: 0 auto;
  }
  .content-inner {
    display: flex;
    flex-direction: column;
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

  @media (min-width: 576px) {
    .content {
      padding: 10px 20px;
    }
    .content-inner {
      flex-direction: row;
    }
  }
}
</style>
