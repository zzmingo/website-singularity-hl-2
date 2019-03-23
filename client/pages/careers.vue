<template>
  <div class="page careers">
    <div class="sec-banner" :style="bannerStyle">
      <div class="title">{{website.careers_banner_title}}</div>
      <div class="box">
          <div class="desc">{{website.careers_banner_description}}</div>
      </div>
    </div>
    <div class="jobs">
      <div class="search">
        <div class="bar">
          <div class="border"></div><input placeholder="Search"><i></i>
        </div>
      </div>
      <div class="jobs">
        <div class="list">
          <div class="item" v-for="(job, idx) in jobs" :key="idx" @click="onClickJob(job)">
            <div class="name">{{job.name}}</div>
            <div class="address">{{job.address}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SLButton from '~/components/SLButton.vue'

export default {
  components: {
    SLButton
  },
  async asyncData ({ store, $axios }) {
    return $axios.$get(`/jobs?language=${store.state.lang}`).then(data => {
      return {
        jobs: data
      }
    })
  },
  computed: {
    bannerStyle() {
      return {
        backgroundImage: `url(${this.imgBaseUrl}${this.website.careers_banner.url})`
      }
    },
  },
  methods: {
    onClickJob(job) {
      this.$router.push(`/jobs/${job.id}`)
    }
  }
}
</script>

<style lang="less" scoped>
.sec-banner {
  background-size: cover;
  background-position: center;
  height: 460px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    color: white;
    font-size: 28px;
    font-weight: bold;
    text-shadow: 0px 0px 5px #666666;
    width: 400px;
    font-size: OpenSans;
  }

  .box {
    max-width: 500px;
    border: 1px solid white;
    padding: 10px;
    margin-top: 30px;

    .desc {
      border: 1px solid white;
      color: white;
      padding: 30px 40px;
      text-align: center;
    }
  }
}

.search {
  background-color: white;
  height: 80px;

  .bar {
    max-width: 700px;
    height: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .border {
      width: 1px;
      background: #8f96ab;
      height: 40px;
    }

    input {
      display: block;
      padding: 0 20px;
      flex: 1;
      height: 100%;
      line-height: 81px;
      border: none;
      outline: none;
      font-size: 18px;
      color: #3c3951;
    }
  }
}

.jobs {
  background-color: #f6f6f6;

  .list {
    max-width: 700px;
    margin: 0 auto;
    padding-bottom: 30px;

    .item {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 30px 20px;
      cursor: pointer;
      color: #3c3951;
      transition: background-color 0.2s, color 0.2s;

      &:hover {
        background: #7198d6;
        color: white;
      }

      .name {
        flex: 1;
        padding-right: 60px;
        font-size: 18px;
      }

      .address {
        font-size: 14px;
      }
    }
  }
}

</style>