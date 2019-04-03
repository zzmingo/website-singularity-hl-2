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
        <div class="right part2">
          <div class="wechat">
            <div class="wechat-icon">
              <img class="wechat-qrcode" src="~/assets/wechat_qrcode.png">
            </div>
          </div>
          <div class="linkedin">
            <img class="linkedin" src="~/assets/31-linkedin.png">
          </div>
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
      flex: 1;

      .logo {
        margin-bottom: 30px;
      }

      .item {
        font-size: 13px;
      }
    }
  }

  .part2 {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .part2 .wechat {
    margin-left: -10px;
  }
  .part2 .linkedin {
    margin-left: 20px;
    cursor: pointer;
  }
  .wechat-icon {
    position: relative;
    display: block;
    width: 48px;
    height: 38px;
    background: url(~assets/121-tencent-wechat.png);
  }
  .wechat-qrcode {
    display: none;
    position: absolute;
    left: 50%;
    bottom: 50px;
    margin-left: -50px;
    width: 101px;
    height: 101px;
    background-size: 100% 100%;
    border: 5px solid #999999;
    box-shadow: #222222 0 0 10px;
  }
  .wechat-icon:hover {
    background: url(~assets/121-tencent-wechat_h.png);
    .wechat-qrcode {
      display: block;
    }
  }

  @media (min-width: 10px) and (max-width: 575.98px) {
    .content-inner {
      height: 500px;
    }
    .wechat-qrcode {
      display: inline-block;
      left: 130%;
      bottom: 100px;
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
