<template>
  <div class="sl-button" :class="classes">
    <div class="inner">
    {{label}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    long: Boolean,
    large: Boolean,
  },
  computed: {
    classes() {
      return {
        long: this.long,
        large: this.large,
      }
    }
  }
}
</script>

<style lang="less" scoped>
.sl-button {

  border: 1px solid #2a3142;
  padding: 2px;
  cursor: pointer;

  .inner {
    background-color: #2a3142;
    border: 1px solid #a0a3ab;
    color: white;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    padding: 0px 20px;
    text-align: center;
    font-weight: bold;
  }

  &.long {
    display: block;
  }

  &.large {
    .inner {
      font-size: 18px;
      height: 50px;
      line-height: 50px;
    }
  }
  
}
</style>
