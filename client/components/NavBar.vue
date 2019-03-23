<template>
    <div class="navbar">
      <div class="mobile" :style="{ display: showMenu ? 'flex' : 'none' }">
        <div class="top">
          <logo />
          <div class="arrow" @click="showMenu = false"></div>
        </div>
        <ol class="navs">
          <li class="index" :class="{ active: isIndex }" @click="navigateTo('/')">{{$string('home')}}</li>
          <li class="whatwedo" :class="{ active: isWhatWeDo }" @click="navigateTo('/whatwedo')">{{$string('whatwedo')}}</li>
          <li class="about" :class="{ active: isAbout }" @click="navigateTo('/about')">{{$string('about')}}</li>
          <li class="careers" :class="{ active: isCareers }" @click="navigateTo('/careers')">{{$string('careers')}}</li>
          <li class="lang en" :class="{ active: this.lang === 'en' }">EN</li>
          <li class="lang zh-cn" :class="{ active: this.lang === 'zh-cn' }">中文</li>
        </ol>
      </div>
      <div class="desktop">
        <logo />
        <div class="right">
          <ol class="navs">
            <li class="index" :class="{ active: isIndex }" @click="navigateTo('/')">{{$string('home')}}</li>
            <li class="whatwedo" :class="{ active: isWhatWeDo }" @click="navigateTo('/whatwedo')">{{$string('whatwedo')}}</li>
            <li class="about" :class="{ active: isAbout }" @click="navigateTo('/about')">{{$string('about')}}</li>
            <li class="careers" :class="{ active: isCareers }" @click="navigateTo('/careers')">{{$string('careers')}}</li>
          </ol>
          <ol class="langs">
            <li class="lang en" :class="{ active: this.lang === 'en' }" @click="navigateTo('http://www.singularity-hl.ai')">EN</li>
            <li class="lang zh-cn" :class="{ active: this.lang === 'zh-cn' }" @click="navigateTo('http://www.singularity-hl.cn')">中文</li>
          </ol>
          <div class="menu" @click="showMenu = true"></div>
        </div>
      </div>
    </div>
</template>
<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  },
  props: ['info'],
  computed: {
    path() { return this.$route.path },
    isIndex() { return this.path === '/' || this.path === '' },
    isWhatWeDo() { return this.path === '/whatwedo' },
    isAbout() { return this.path === '/about' },
    isCareers() { return this.path === '/careers' },
  },
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    navigateTo(path) {
      if (path.indexOf('http') !== -1) {
        window.location.href = path
        return
      }
      this.showMenu = false
      this.$router.push(path)
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  margin: 0 auto;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;

  ol {
    padding-block-start: 0px;
    padding-inline-start: 0px;
    padding: 0;
  }

  .navs, .langs {
    @normal-color: #3c3951;
    @hover-color: #7198d6;
    @active-color: #3c3951;

    color: @normal-color;
    font-size: 16px;

    li {
      @border-bottom-width: 3px;
      border-bottom: @border-bottom-width solid transparent;

      &:hover {
        color: @hover-color;
        border-bottom-color: @hover-color;
      }

      &.active {
        color: @active-color;
        font-weight: bold;
        border-bottom-color: @active-color;
      }
    }
  }

  .mobile {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    flex: 1;
    background-image: url(~assets/site_bg.jpg);
    background-repeat: repeat;
    flex-direction: column;
    align-items: center;

    .top {
      width: 100%;
      height: 80px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 20px;
      align-items: center;

      .arrow {
        width: 26px;
        height: 28px;
        background-image: url(~assets/icon_arrow.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        margin-left: 6px;
      }
    }

    .navs {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 10px 0;
      list-style: none;
      width: 100%;

      :first-child {
        border-top: none;
      }
      :last-child {
        border-bottom: none;
      }

      li {
        list-style: none;
        flex: 1;
        display: flex;
        align-content: center;
        align-items: center;
        text-align: center;
        justify-content: center;
        border-bottom: 1px solid #cecdd2;
        border-top: 1px solid #615f72;
        width: 60%;
      }
    }
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .desktop {
    width: 100%;
    display: flex;
    height: 80px;
    align-items: center;
    padding: 0 20px;

    .navs, .langs {

      flex: 1;
      max-width: 440px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      list-style: none;
      margin-bottom: 0;
      font-size: 14px;

      li {
        @border-bottom-width: 3px;

        min-width: 70px;
        height: 28px;
        text-align: center;
        list-style: none;
        cursor: pointer;
      }
    }
  }

  .desktop {
    .langs {
      flex: none;
      justify-content: space-around;
      margin-left: 0;
      display: none;

      li {
        min-width: 34px;
        margin-left: 10px;
      }
    }

    .navs {
      .index, .whatwedo, .about {
        display: none;
      }
    }
    

    .menu {
      width: 36px;
      height: 28px;
      background-image: url(~assets/icon_more.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      margin-left: 4px;
    }
  }

  @media (min-width: 576px) {
    .desktop {
      .navs {
        justify-content: space-around;
        .index, .whatwedo, .about {
          display: block;
        }
      }

      .langs {
        display: flex;
      }

      .menu {
        display: none;
      }
    }
  }
}
</style>
