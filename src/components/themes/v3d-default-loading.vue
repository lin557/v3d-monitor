<template>
  <div class="v3m-loading-line">
    <div class="v3m-content">
      <div class="v3m-logo">
        <div class="v3m-logo-img">
          <template v-if="slots.logo">
            <slot name="logo"></slot>
          </template>
          <template v-else>
            <img src="../../assets/logo-7.png" />
          </template>
        </div>
        <div class="v3m-logo-text">
          <div class="v3m-logo-text-top">
            <slot name="title"></slot>
          </div>
          <div class="v3m-logo-text-bottom">
            <slot name="detail"></slot>
          </div>
        </div>
      </div>
      <div class="loading-line"></div>
      <div class="loading-text">
        <slot name="loading"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useSlots } from 'vue'
// 插槽
const slots = useSlots()
</script>
<style lang="scss">
.v3m-loading-line {
  height: 100%;
  width: 100%;
  background-color: #404042;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: 'Microsoft Yahe', '微软雅黑', 'Courier New', Courier, monospace;
  user-select: none;

  .v3m-content {
    width: 170px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .v3m-logo {
      display: flex;
      width: 100%;

      .v3m-logo-img {
        width: 48px;
        height: 48px;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .v3m-logo-text {
        width: calc(100% - 48px);
        padding: 0 10px;
        box-sizing: border-box;
        text-align: center;

        .v3m-logo-text-top {
          padding: 1px 0;
          font-size: 18px;
          color: #e0e0e0;
        }

        .v3m-logo-text-bottom {
          color: #727272;
          font-size: 12px;
        }
      }
    }

    .loading-line {
      margin: 16px 0 12px;
      height: 2px;
      width: 100%;
      background-image: linear-gradient(
        90deg,
        hsla(0, 0%, 100%, 0) 0,
        hsla(0, 0%, 100%, 0.4) 12.5%,
        #009bcc 25%,
        hsla(0, 0%, 100%, 0.4) 37.5%,
        hsla(0, 0%, 100%, 0) 50%
      );
      background-size: 200%;
      animation: v3m-loading-line-animation 1s linear infinite;
    }

    .loading-text {
      width: 100%;
      font-size: 12px;
      color: #a9a8ab;
      text-align: center;
      text-align-last: justify;
    }
  }
}

@keyframes v3m-loading-line-animation {
  0% {
    background-position-x: 0;
  }

  50% {
    background-position-x: -100%;
  }

  to {
    background-position-x: -200%;
  }
}
</style>
