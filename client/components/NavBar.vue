<template>
    <div class="navbar container">
        <logo />
        <div class="right">
          <ol class="navs">
            <li class="active">{{$string('home')}}</li>
            <li>{{$string('whatwedo')}}</li>
            <li>{{$string('about')}}</li>
            <li>{{$string('careers')}}</li>
          </ol>
          <ol class="lang">
            <li>{{$string('about')}}</li>
            <li>{{$string('careers')}}</li>
          </ol>
        </div>
    </div>
</template>
<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  },
  props: ['info']
}
</script>

<style lang="less" scoped>
.navbar {
  max-width: 1000px;
  height: 110px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .right {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .navs {
    @normal-color: #3c3951;
    @hover-color: #7198d6;
    @active-color: #3c3951;

    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    margin-bottom: 0;
    color: @normal-color;
    font-size: 14px;

    li {
      @border-bottom-width: 3px;

      min-width: 70px;
      height: 32px;
      text-align: center;
      list-style: none;
      border-bottom: @border-bottom-width solid transparent;
      cursor: pointer;

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
}
</style>
