<template>
  <div class="v3m-loading-line">
    <div class="v3m-content">
      <div class="loading-logo">
        <img src="../../assets/logo-4.png" />
      </div>
      <div class="loading-line"></div>
      <div class="loading-text">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.v3m-loading-line {
  height: 100%;
  width: 100%;
  background-color: #1a2f45;
  display: flex;
  align-items: center;
  flex-direction: column;

  .v3m-content {
    width: 170px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .loading-logo {
      img {
        height: 64px;
      }
    }

    .loading-line {
      margin: 16px 0 12px;
      height: 1.2px;
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
