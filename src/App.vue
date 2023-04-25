<template>
  <div class="demo">
    <v3d-monitor
      ref="refMonitor"
      :count="count"
      :lock-control="true"
      :duplicate="false"
      :control-bar="controlBar"
      :close-time="closeTime"
    >
      <!-- <template v-slot:ready>
        <div>abc</div>
      </template>
      <template v-slot:loading>
        <div>123456</div>
      </template> -->
      <!-- <template v-slot:empty>
        <svg
          t="1682041892928"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="13756"
          width="128"
          height="128"
        >
          <path
            d="M514.048 128q79.872 0 149.504 30.208t121.856 82.432 82.432 122.368 30.208 150.016q0 78.848-30.208 148.48t-82.432 121.856-121.856 82.432-149.504 30.208-149.504-30.208-121.856-82.432-82.432-121.856-30.208-148.48q0-79.872 30.208-150.016t82.432-122.368 121.856-82.432 149.504-30.208z"
            p-id="13757"
          ></path>
        </svg>
      </template> -->
      <!-- <template v-slot:logo>
        <img src="./assets/ic_launcher.png" />
      </template> -->
    </v3d-monitor>

    <div class="demo-control">
      <!-- <input type="text" class="demo-url" v-model="options.src"/> -->
      <button @click="apply">apply</button>
      <button @click="play(0)">play(0)</button>
      <button @click="play(1)">play(1)</button>
      <button @click="play(2)">play(2)</button>
      <button @click="play(3)">play(3)</button>
      <button @click="toggleControlBar">control-bar</button>

      <select v-model.number="count">
        <option value="1">1</option>
        <option value="4">4</option>
        <option value="6">6</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="16">16</option>
        <option value="25">25</option>
        <option value="36">36</option>
        <option value="64">64</option>
      </select>

      <button @click="setViewCount(6)">6</button>
      <button @click="setViewCount(9)">9</button>
      <input type="number" v-model.number="closeTime" />
    </div>

    <div class="demo-title">
      Youtube、腾讯视频、百度直播: 简约风格，只有中间loading
    </div>
    <div class="demo-loading">
      <div class="demo-item">
        <v3d-player ref="player1" :border="false" :lock-control="true">
          <template v-slot:ready>
            <v3d-default-ready />
          </template>
          <template v-slot:loading>
            <div class="v3m-loading v3m-loading-1">
              <div class="cm-spinner"></div>
              <div class="loading-text">蒙H12388D CH1 高清</div>
            </div>
          </template>
        </v3d-player>
      </div>
      <div class="demo-item">
        <v3d-player ref="player2" :border="false" :lock-control="true">
          <template v-slot:ready>
            <v3d-default-ready />
          </template>
          <template v-slot:loading>
            <div class="v3m-loading v3m-loading-2">
              <div class="triple-spinner"></div>
              <div class="loading-text">蒙H12388D CH1 高清</div>
            </div>
          </template>
        </v3d-player>
      </div>
      <div class="demo-item">
        <v3d-player ref="player3" :border="false" :lock-control="true">
          <template v-slot:ready>
            <v3d-default-ready />
          </template>
          <template v-slot:loading>
            <div class="v3m-loading v3m-loading-3">
              <figure>
                <div class="dot white"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </figure>
              <div class="loading-text">蒙H12388D CH1 高清</div>
            </div>
          </template>
        </v3d-player>
      </div>
    </div>
    <div class="demo-title">
      爱奇异、搜狐视频、凤凰网、风行网、优酷、芒果TV、土豆：上面logo，下面loading
    </div>

    <div class="demo-loading">
      <div class="demo-item">
        <v3d-player ref="player4" :border="false" :lock-control="true">
          <template v-slot:ready>
            <v3d-default-ready />
          </template>
          <template v-slot:loading>
            <div class="v3m-loading v3m-loading-4">
              <div class="v3m-content">
                <div class="loading-logo">
                  <img src="./assets/logo-4.png" />
                </div>
                <div class="loading-line"></div>
                <div class="loading-text">蒙H12388D CH1 高清</div>
              </div>
            </div>
          </template>
        </v3d-player>
      </div>
      <div class="demo-item">
        <v3d-player ref="player5" :border="false" :lock-control="true">
          <template v-slot:ready>
            <v3d-default-ready />
          </template>
          <template v-slot:loading>
            <div class="v3m-loading v3m-loading-5">
              <div class="v3m-content">
                <div class="loading-logo">
                  <img src="./assets/logo-5.png" />
                </div>
                <div class="loading-line"></div>
                <div class="loading-text">蒙H12388D CH1 高清</div>
              </div>
            </div>
          </template>
        </v3d-player>
      </div>
      <div class="demo-item">
        <v3d-player ref="player6" :border="false" :lock-control="true">
          <template v-slot:ready>
            <v3d-default-ready />
          </template>
          <template v-slot:loading>
            <div class="v3m-loading v3m-loading-6">
              <div class="v3m-content">
                <div class="loading-logo">
                  <img src="./assets/logo-9.png" />
                </div>
                <div class="loading-line"></div>
                <div class="loading-text">蒙H12388D CH1 高清</div>
              </div>
            </div>
          </template>
        </v3d-player>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import V3dMonitor from './components/v3d-monitor.vue'

import V3dPlayer from 'v3d-player'
import 'v3d-player/dist/style.css'

import V3dDefaultReady from './components/themes/v3d-default-ready.vue'

const refMonitor = ref()

const controlBar = ref({
  enabled: true,
  position: 'bottom',
  button: [
    '1',
    '4',
    '6',
    '8',
    '9',
    '10',
    '16',
    '25',
    'fill',
    'mute',
    'stop',
    'clear'
  ]
})
// const controlBar1 = ref(true)

const count = ref(9)
const closeTime = ref(300)

const setViewCount = (count: number) => {
  refMonitor.value.splitView(count)
}

const apply = () => {
  refMonitor.value.apply({
    unique: 'h264.flv',
    title: 'aaa',
    load: {
      title: '蒙H12388D',
      detail: 'CH1 高清',
      loading: '视频加载中'
    }
  })
}

const toggleControlBar = () => {
  // controlBar1.value = false
  controlBar.value.enabled = !controlBar.value.enabled
}

const play = (index: number) => {
  const opts = [
    {
      title: 'prog_index.m3u8',
      // src: 'https://www.transcodegroup.cn/test/h264.flv',
      src: '//d2zihajmogu5jn.cloudfront.net/bipbop-advanced/gear3/prog_index.m3u8',
      // viewIndex: 1,
      allowPause: true,
      contextmenu: [
        {
          text: 'custom1',
          link: 'https://github.com/DIYgod/DPlayer'
        },
        {
          text: 'custom2',
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          click: (player: any) => {
            console.log(player.options)
          }
        }
      ],
      userData: {
        test1: '1',
        test2: '2'
      }
    },
    {
      title: 'oceans.mp4',
      src: 'https://vjs.zencdn.net/v/oceans.mp4',
      screenshot: true,
      load: {
        title: '蒙H12388D',
        detail: 'CH1 高清',
        loading: '视频加载中'
      }
    },
    {
      allowPause: true,
      loadText: '蒙H12388D CH1 高清',
      title: '蒙H12388D CH1',
      src: 'https://dno-xiu-hd.youku.com/lfgame/cmcu_alias_3567125494_8148028.flv?auth_key=1713350365-0-0-6e1ba74b2a57fce3d97f46c991074a23'
    },
    {
      allowPause: true,
      title: '浙江卫视',
      src: 'http://hw-vl.cztv.com/channels/lantian/channel01/360p.m3u8?a=1000&d=2e81e5ce97d2a771861cbe3b0c492876&k=d0c0b9d2821a784c8527a7892b0555bf&t=1680572871',
      screenshot: true
    }
  ]

  refMonitor.value.play(opts[index])
}

const player1 = ref()
const player2 = ref()
const player3 = ref()
const player4 = ref()
const player5 = ref()
const player6 = ref()

onMounted(() => {
  player1.value.occupy(1, 'player1', 'player1 占用中')
  player2.value.occupy(1, 'player2', 'player2 占用中')
  player3.value.occupy(1, 'player3', 'player3 占用中')
  player4.value.occupy(1, 'player4', 'player4 占用中')
  player5.value.occupy(1, 'player5', 'player5 占用中')
  player6.value.occupy(1, 'player6', 'player6 占用中')
})
</script>
<style lang="scss">
.demo {
  margin-top: 20px;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  height: 880px;
  font-size: 14px;
  max-width: 1380px;

  .demo-control {
    margin-top: 10px;
    button,
    select,
    input {
      margin-right: 6px;
      min-width: 60px;
    }
    input {
      width: 60px;
    }
  }

  .demo-title {
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 20px;
  }

  .demo-loading {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .demo-item {
      margin: 10px;

      .demo-item-title {
        text-align: center;
        padding: 10px;
        border: 1px solid #333;
        margin: 10px 0;
      }

      .v3d-player {
        width: 400px;
        height: 300px;
      }
    }
  }

  .v3m-custom-empty {
    position: relative;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    background-color: #010101;

    .v3m-ready-icon {
      position: absolute;
      width: 80px;
      height: 80px;
      left: calc(50% - 40px);
      top: calc(50% - 40px);
    }
  }

  .v3m-loading {
    width: 100%;
    height: 100%;
  }

  .v3m-loading-1 {
    background-color: #404042;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .loading-text {
      margin-top: 20px;
      width: 170px;
      font-size: 12px;
      color: #a9a8ab;
      text-align: center;
      text-align-last: justify;
    }

    .cm-spinner {
      height: 70px;
      width: 70px;
      border: 3px solid transparent;
      border-radius: 50%;
      border-top: 4px solid #f15e41;
      animation: spin 4s linear infinite;
      position: relative;
    }

    .cm-spinner::before,
    .cm-spinner::after {
      content: '';
      position: absolute;
      top: 6px;
      bottom: 6px;
      left: 6px;
      right: 6px;
      border-radius: 50%;
      border: 4px solid transparent;
    }

    .cm-spinner::before {
      border-top-color: #bad375;
      animation: 3s spin linear infinite;
    }

    .cm-spinner::after {
      border-top-color: #26a9e0;
      animation: spin 1.5s linear infinite;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .v3m-loading-2 {
    background-color: #1a2f45;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .loading-text {
      margin-top: 20px;
      width: 170px;
      font-size: 12px;
      color: #a9a8ab;
      text-align: center;
      text-align-last: justify;
    }

    .triple-spinner {
      display: block;
      position: relative;
      width: 68px;
      height: 68px;
      border-radius: 50%;
      border: 4px solid transparent;
      border-top: 4px solid #ff5722;
      animation: spin2 2s linear infinite;
    }

    .triple-spinner::before,
    .triple-spinner::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      border: 4px solid transparent;
    }
    .triple-spinner::before {
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
      border-top-color: #ff9800;
      animation: spin2 3.5s linear infinite;
    }
    .triple-spinner::after {
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
      border-top-color: #ffc107;
      animation: spin2 1.75s linear infinite;
    }

    @keyframes spin2 {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }

  .v3m-loading-3 {
    background-color: #404042;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .loading-text {
      margin-top: 105px;
      width: 170px;
      font-size: 12px;
      color: #a9a8ab;
      text-align: center;
      text-align-last: justify;
    }

    figure {
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 4.8em;
      height: 4.8em;
      animation: rotate 2.4s linear infinite;
    }
    .white {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: white;
      animation: flash 2.4s linear infinite;
      opacity: 0;
    }
    .dot {
      position: absolute;
      margin: auto;
      width: 1.8em;
      height: 1.8em;
      border-radius: 100%;
      transition: all 1s ease;
    }
    .dot:nth-child(2) {
      top: 0;
      bottom: 0;
      left: 0;
      background: #ff4444;
      animation: dotsY 2.4s linear infinite;
    }
    .dot:nth-child(3) {
      left: 0;
      right: 0;
      top: 0;
      background: #ffbb33;
      animation: dotsX 2.4s linear infinite;
    }
    .dot:nth-child(4) {
      top: 0;
      bottom: 0;
      right: 0;
      background: #99cc00;
      animation: dotsY 2.4s linear infinite;
    }
    .dot:nth-child(5) {
      left: 0;
      right: 0;
      bottom: 0;
      background: #33b5e5;
      animation: dotsX 2.4s linear infinite;
    }

    @keyframes rotate {
      0% {
        transform: rotate(0);
      }
      10% {
        width: 4.8em;
        height: 4.8em;
      }
      66% {
        width: 1.8em;
        height: 1.8em;
      }
      100% {
        transform: rotate(360deg);
        width: 4.8em;
        height: 4.8em;
      }
    }

    @keyframes dotsY {
      66% {
        opacity: 0.1;
        width: 1.8em;
      }
      77% {
        opacity: 1;
        width: 0;
      }
    }
    @keyframes dotsX {
      66% {
        opacity: 0.1;
        height: 1.8em;
      }
      77% {
        opacity: 1;
        height: 0;
      }
    }

    @keyframes flash {
      33% {
        opacity: 0;
        border-radius: 0%;
      }
      55% {
        opacity: 0.6;
        border-radius: 100%;
      }
      66% {
        opacity: 0;
      }
    }
  }

  .v3m-loading-4 {
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
        height: 1px;
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
        animation: loading-line-animation 1s linear infinite;
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

  .v3m-loading-5 {
    background-color: #404042;
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
          height: 68px;
        }
      }

      .loading-line {
        margin: 16px 0 12px;
        height: 1px;
        width: 100%;
        background-image: linear-gradient(
          90deg,
          hsla(0, 0%, 100%, 0) 0,
          rgba(255, 196, 199, 0.4) 12.5%,
          rgb(194 27 34) 25%,
          rgba(255, 196, 199, 0.4) 37.5%,
          hsla(0, 0%, 100%, 0) 50%
        );
        background-size: 200%;
        animation: loading-line-animation 1s linear infinite;
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

  .v3m-loading-6 {
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
          height: 68px;
        }
      }

      .loading-line {
        margin: 16px 0 12px;
        height: 1px;
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
        animation: loading-line-animation 1s linear infinite;
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

  .v3m-custom-loading {
    height: 100%;
    width: 100%;
    background-color: #404042;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;

    .app-components-video-poster-content {
      width: 170px;
      height: 130px;
    }

    .app-components-video-poster-content-top {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .app-components-video-poster-content-top-left {
      width: 76px;
      height: 76px;
      margin-left: -6px;
      position: relative;
      img {
        position: absolute;
        left: calc(50% - 24px);
        top: calc(50% - 24px);
      }
    }

    .app-components-video-poster-content-top-right {
      display: flex;
      flex-direction: column;
      width: 150px;
      overflow: hidden;
      text-align: center;

      .app-components-video-poster-content-top-right-top {
        font-size: 18px;
        color: #e0e0e0;
      }

      .app-components-video-poster-content-top-right-bottom {
        margin-top: 2px;
        color: #727272;
        font-size: 12px;
      }
    }

    .app-components-video-poster-content-center {
      margin: 6px 0 12px;
      height: 2px;
      background-image: linear-gradient(
        90deg,
        hsla(0, 0%, 100%, 0) 0,
        hsla(0, 0%, 100%, 0.4) 12.5%,
        #3686ef 25%,
        hsla(0, 0%, 100%, 0.4) 37.5%,
        hsla(0, 0%, 100%, 0) 50%
      );
      background-size: 200%;
      animation: app-components-video-poster-loading 1s linear infinite;
    }

    .app-components-video-poster-content-bottom {
      font-size: 0.5em;
      color: #a9a8ab;
      text-align: center;
      text-align-last: justify;
    }
  }

  @keyframes app-components-video-poster-loading {
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

  @keyframes loading-line-animation {
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

  @keyframes load {
    0% {
      opacity: 0.08;
      filter: blur(5px);
      letter-spacing: 3px;
    }
    100% {
    }
  }

  .loader {
    position: relative;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-gap: 2px;
    width: 48px;
    height: 48px;

    > div {
      position: relative;
      width: 100%;
      height: 100%;
      background: #3686ef;
      transform: scale(0);
      transform-origin: center center;
      animation: loader 2s infinite linear;

      &:nth-of-type(7) {
      }

      &:nth-of-type(1),
      &:nth-of-type(5),
      &:nth-of-type(9) {
        animation-delay: 0.4s;
      }

      &:nth-of-type(4),
      &:nth-of-type(8) {
        animation-delay: 0.2s;
      }

      &:nth-of-type(2),
      &:nth-of-type(6) {
        animation-delay: 0.6s;
      }

      &:nth-of-type(3) {
        animation-delay: 0.8s;
      }
    }
  }

  @keyframes loader {
    0% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
    80% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
}
</style>
