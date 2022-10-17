<template>
  <div class="v3m-monitor" :class="controlCls">
    <div ref="refView" class="v3m-view" :class="viewCls">
      <v3d-player
        v-for="(item, index) in self.videos"
        :key="item.id"
        :ref="setPlayerRef"
        :index="index"
        :lock-control="item.lockControl"
        :class="item.cls"
        @click="doClick(index)"
        @dblclick="doDbClick(index)"
      ></v3d-player>

      <!-- 边框 -->
      <div class="v3m-border v3m-h v3m-h1"></div>
      <div class="v3m-border v3m-h v3m-h2"></div>
      <div class="v3m-border v3m-h v3m-h3"></div>
      <div class="v3m-border v3m-h v3m-h4"></div>
      <div class="v3m-border v3m-h v3m-h5"></div>
      <div class="v3m-border v3m-h v3m-h6"></div>
      <div class="v3m-border v3m-h v3m-h7"></div>

      <div class="v3m-border v3m-v v3m-v1"></div>
      <div class="v3m-border v3m-v v3m-v2"></div>
      <div class="v3m-border v3m-v v3m-v3"></div>
      <div class="v3m-border v3m-v v3m-v4"></div>
      <div class="v3m-border v3m-v v3m-v5"></div>
      <div class="v3m-border v3m-v v3m-v6"></div>
      <div class="v3m-border v3m-v v3m-v7"></div>
    </div>
    <div class="v3m-control">
      <ul>
        <li v-if="btnView1">
          <a class="v3m-icon-s1" @click="splitView(1)"></a>
        </li>
        <li v-if="btnView4">
          <a class="v3m-icon-s4" @click="splitView(4)"></a>
        </li>
        <li v-if="btnView6">
          <a class="v3m-icon-s6" @click="splitView(6)"></a>
        </li>
        <li v-if="btnView8">
          <a class="v3m-icon-s8" @click="splitView(8)"></a>
        </li>
        <li v-if="btnView9">
          <a class="v3m-icon-s9" @click="splitView(9)"></a>
        </li>
        <li v-if="btnView10">
          <a class="v3m-icon-s10" @click="splitView(10)"></a>
        </li>
        <li v-if="btnView16">
          <a class="v3m-icon-s16" @click="splitView(16)"></a>
        </li>
        <li v-if="btnView25">
          <a class="v3m-icon-s25" @click="splitView(25)"></a>
        </li>
        <li v-if="btnView36">
          <a class="v3m-icon-s36" @click="splitView(36)"></a>
        </li>
        <li v-if="btnView64">
          <a class="v3m-icon-s64" @click="splitView(64)"></a>
        </li>
        <li
          v-if="btnViewMute || btnViewStop || btnViewClear"
          class="v3m-separator"
        >
          <span></span>
        </li>
        <li v-if="btnViewMute">
          <a class="v3m-icon-mute" @click="muted"></a>
        </li>
        <li v-if="btnViewStop">
          <a class="v3m-icon-stop" @click="stop"></a>
        </li>
        <li v-if="btnViewClear">
          <a class="v3m-icon-clear" @click="clear"></a>
        </li>
        <li v-if="btnViewFill" class="v3m-separator"><span></span></li>
        <li v-if="btnViewFill">
          <a class="v3m-icon-fill" @click="togglefill"></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup name="V3dMonitor">
import { ref, reactive, computed, watch, onMounted, onBeforeUpdate } from 'vue'
import V3dPlayer from 'v3d-player'
import 'v3d-player/dist/style.css'
import { V3dApplyParam, V3dMonitorOptions } from '../../d.ts'

const refView = ref()
type Player = typeof V3dPlayer
let refPlayers: Array<Player> = []

const props = defineProps({
  closeAfterViewChange: {
    type: Boolean,
    default: true
  },
  control: {
    type: Object,
    default() {
      return {
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
          'fill',
          'mute',
          'stop',
          'clear'
        ]
      }
    }
  },
  count: {
    type: Number,
    default: 4
  },
  // 是否允许使用同一个地址打开多个窗口 true=允许 false=不允许重复 默认false
  duplicate: {
    type: Boolean,
    default: false
  },
  focused: {
    type: Boolean,
    default: true
  },
  /**
   * 常驻工具栏
   */
  lockControl: {
    type: Boolean,
    default: false
  },
  // 循环创建 不管其他窗口是否打开 关掉最先打开的窗口 并播放新的视频
  loopCreate: {
    type: Boolean,
    default: true
  }
})

interface SelectedParam {
  id: number
  player: Player | undefined
}

interface VideoParam {
  id: number
  cls: string
  lockControl: boolean
}

interface Data {
  videos: Array<VideoParam>
  viewCount: number
  viewList: Array<number>
  viewMax: Player | undefined
  selected: SelectedParam
  filled: boolean
  createOrder: number
}

const _data: Data = {
  videos: [],
  viewCount: 4,
  viewList: [1, 4, 6, 8, 9, 10, 16, 25, 36, 64],
  // 最大化的视图
  viewMax: undefined,
  selected: {
    id: -1,
    player: undefined
  },
  filled: true,
  createOrder: 0
}

let self = reactive(_data)

const btnView1 = computed(() => {
  return calcBtnView('1')
})

const btnView4 = computed(() => {
  return calcBtnView('4')
})

const btnView6 = computed(() => {
  return calcBtnView('6')
})

const btnView8 = computed(() => {
  return calcBtnView('8')
})

const btnView9 = computed(() => {
  return calcBtnView('9')
})

const btnView10 = computed(() => {
  return calcBtnView('10')
})

const btnView16 = computed(() => {
  return calcBtnView('16')
})

const btnView25 = computed(() => {
  return calcBtnView('25')
})

const btnView36 = computed(() => {
  return calcBtnView('36')
})

const btnView64 = computed(() => {
  return calcBtnView('64')
})

const btnViewFill = computed(() => {
  return calcBtnView('fill')
})

const btnViewMute = computed(() => {
  return calcBtnView('mute')
})

const btnViewStop = computed(() => {
  return calcBtnView('stop')
})

const btnViewClear = computed(() => {
  return calcBtnView('clear')
})

const controlCls = computed(() => {
  if (props.control.enabled) {
    if (props.control.position === 'top') {
      return 'v3m-control-top'
    } else {
      return ''
    }
  } else {
    return 'v3m-control-hide'
  }
})

const viewCls = computed(() => {
  let cls = 'v3m-' + self.viewCount + 's'
  if (self.filled) {
    cls = cls + ' v3m-fill'
  }
  if (self.viewMax) {
    cls = cls + ' v3m-max'
  }
  return cls
})

/**
 * 申请一个播放窗口
 */
const apply = (param: V3dApplyParam) => {
  let player = null
  if (param.viewIndex !== undefined) {
    // 优先占用指定窗口
    player = getPlayerById(param.viewIndex)
    if (player) {
      // 存在时关闭旧的
      player.close()
      player.occupy(newOrder(), param.unique, param.title)
      setFocus(player)
      return player.index()
    }
  }
  if (props.duplicate) {
    // 允许重复 判断有没有空的窗口
    player = getIdleView()
  } else {
    // 不允许重复 判断窗口是否正在播放中
    player = getPlaying(param.unique)
    if (player) {
      // 正在播放中 设置焦点
      setFocus(player)
      return -1
    } else {
      // 没有在播放 获取一个空闲窗口
      player = getIdleView()
    }
  }
  if (player) {
    // 有可用窗口 占用
    player.occupy(newOrder(), param.unique, param.title)
    setFocus(player)
    return player.index()
  }
  // 窗口都被用了 关掉最先创建的窗口
  if (props.loopCreate) {
    // 允许关旧的创建新的
    player = getEarlyView()
    if (player) {
      // 存在时关闭旧的
      player.close()
      player.occupy(newOrder(), param.unique, param.title)
      setFocus(player)
      return player.index()
    }
    return -1
  } else {
    return -1
  }
}

const calcBtnView = (value: string) => {
  if (props.control.button.indexOf(value) === -1) {
    return false
  } else {
    return true
  }
}

const calcCls = (index: number) => {
  let cls = ''
  switch (index) {
    case 0:
      cls = 'v3m-m1 v3m-s0'
      break
    case 1:
      cls = 'v3m-m4 v3m-s1'
      break
    case 2:
    case 3:
      cls = 'v3m-m4'
      break
    case 4:
    case 5:
      cls = 'v3m-m6'
      break
    case 6:
    case 7:
      cls = 'v3m-m8'
      break
    case 8:
      cls = 'v3m-m9'
      break
    case 9:
      cls = 'v3m-m10'
      break
    default:
      if (index >= 36) {
        cls = 'v3m-m64'
        break
      }
      if (index >= 25) {
        cls = 'v3m-m36'
        break
      }
      if (index >= 16) {
        cls = 'v3m-m25'
        break
      }
      if (index >= 10) {
        cls = 'v3m-m16'
        break
      }
  }
  return cls
}

/**
 * 关闭所有视频
 */
const clear = () => {
  self.videos.forEach(value => {
    const player = getPlayerById(value.id)
    player.close()
  })
  if (self.viewMax) {
    self.viewMax = undefined
  }
}

const createView = () => {
  for (let i = 0; i < self.viewCount; i++) {
    if (!isViewExist(i)) {
      self.videos.push({
        id: i,
        cls: calcCls(i),
        lockControl: props.lockControl
      })
    }
  }
}

const doClick = (index: number) => {
  const player = getPlayerById(index)
  setFocus(player)
}

const doDbClick = (index: number) => {
  if (self.viewCount === 1) {
    return
  }
  const player = getPlayerById(index)
  if (self.viewMax === player) {
    self.viewMax = undefined
    self.videos[index].cls = calcCls(index)
  } else {
    self.viewMax = player
    self.videos[index].cls = calcCls(index) + ' v3d-max'
  }
}

/**
 * 视频缩放
 * @param fill ture/false
 */
const filled = (fill: boolean) => {
  self.filled = fill
}

/**
 * 只支持 1 4 6 8 9 10 16 25 36 64 分屏
 */
const fixViewCount = (uCount: number) => {
  if (self.viewList.indexOf(uCount) === -1) {
    return 4
  } else {
    return uCount
  }
}

/**
 * 获取最早创建的窗口
 */
const getEarlyView = () => {
  let lastPlayer = null
  let testOrder = self.createOrder + 100
  for (let i = 0; i < self.viewCount; i++) {
    const player = getPlayerById(self.videos[i].id)
    // 被占用 或 播放中 或 报错的窗口
    if (player.status() > 0) {
      if (player.order() <= testOrder) {
        lastPlayer = player
        testOrder = player.order()
      }
    }
  }
  return lastPlayer
}

/**
 * 获取空闲视图
 */
const getIdleView = () => {
  // 没有在播放
  for (let i = 0; i < self.viewCount; i++) {
    const player = getPlayerById(self.videos[i].id)
    // 空的窗口 或 报错的窗口
    if (player.status() === 0 || player.status() === 4) {
      return player
    }
  }
  return undefined
}

/**
 * 通过id获取vue播放器对象
 */
const getPlayerById = (id: number) => {
  return refPlayers[id]
}

/**
 * 通过播放信息判断是否正在播放
 */
const getPlaying = (unique: string) => {
  if (unique === null || unique === undefined || undefined === '') {
    return undefined
  }
  for (let i = 0; i < self.viewCount; i++) {
    const player = getPlayerById(self.videos[i].id)
    // 报错的窗口 或 正在播放中的窗口
    if (player.status() > 0 && player.status() < 4) {
      if (unique === player.unique()) {
        return player
      }
    }
  }
  return undefined
}

/**
 * 返回选中的窗口播放器
 */
const getSelected = () => {
  return getPlayerById(self.selected.id)
}

const getViewCount = () => {
  return self.viewCount
}

const handleOptions = (opts: V3dMonitorOptions) => {
  let unique = getName(opts.src)
  if (opts.unique) {
    unique = opts.unique
  }

  return {
    autoplay: true,
    autoRate: {
      enabled: opts.autoRate,
      min: 3.0,
      max: 9.0
    },
    connect: true,
    controls: false,
    // hasAudio: opts.hasAudio,
    hotkey: false,
    live: true,
    muted: true,
    order: newOrder(),
    preventClickToggle: true,
    record: true,
    src: opts.src,
    title: opts.title,
    unique: unique,
    volume: 1.0
  }
}

/**
 * 判断视图窗口是否存在
 */
const isViewExist = (id: number) => {
  let ret = false
  self.videos.forEach(value => {
    if (value.id === id) {
      ret = true
      return
    }
  })
  return ret
}

const muted = () => {
  self.videos.forEach(value => {
    const player = getPlayerById(value.id)
    if (player) {
      player.muted()
    }
  })
}

const newOrder = () => {
  self.createOrder++
  return self.createOrder
}

const play = (opts: V3dMonitorOptions) => {
  let unique = getName(opts.src)
  // 判断是否正在播放中
  let player = getPlaying(unique)
  // 播放中 并设置了不允许重复
  if (player && !props.duplicate) {
    // 播放中不可能是 0
    if (player.status() <= 1) {
      // 占用中 使用占用的窗口进行播放
      opts.viewIndex = player.index()
    } else {
      // status > 1
      return
    }
  }
  if (
    opts.viewIndex !== undefined &&
    opts.viewIndex >= 0 &&
    opts.viewIndex < self.viewCount
  ) {
    // 指定播放位置
    player = getPlayerById(opts.viewIndex)
  } else {
    // 获取空闲
    player = getIdleView()
  }
  if (player) {
    const v3dOpts = handleOptions(opts)
    player.play(v3dOpts)
  }
}

// const playerError = (player, errType, errDetails, e) => {
//   $emit('error', player, errType, errDetails, e)
// }

const setFocus = (player: Player) => {
  const lastFocus = getPlayerById(self.selected.id)
  if (lastFocus) {
    if (lastFocus === player) {
      return
    }
    lastFocus.focused(false)
  }
  self.selected.id = player.index()
  self.selected.player = player
  if (props.focused) {
    player.focused(true)
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setPlayerRef = (el: any) => {
  if (el) {
    refPlayers.push(el)
  }
}

/**
 * 分割屏幕
 */
const splitView = (uCount: number) => {
  if (self.viewMax) {
    self.viewMax = undefined
  }
  self.viewCount = fixViewCount(uCount)
  // 如果窗口不存在 创建
  createView()
  // 视图数变化时
  if (props.closeAfterViewChange) {
    for (let i = self.viewCount; i < self.videos.length; i++) {
      const player = getPlayerById(self.videos[i].id)
      if (player) {
        //player.close()
      }
    }
  }
}

/**
 * 关闭选中的视频窗口
 */
const stop = () => {
  const selectPlayer = getPlayerById(self.selected.id)
  if (selectPlayer) {
    selectPlayer.close()
    if (self.viewMax) {
      self.viewMax = undefined
    }
  }
}

const togglefill = () => {
  self.filled = !self.filled
}

const getName = (url: string | undefined) => {
  let ret = 'unknow'
  if (url) {
    const vlist = url.split('?')
    if (vlist.length > 0) {
      let sTmp = vlist[0].split('\\').pop()
      if (sTmp) {
        sTmp = sTmp.split('/').pop()
        if (sTmp) {
          return sTmp
        }
      }
    }
  }
  return ret
}

onBeforeUpdate(() => {
  refPlayers = []
})

onMounted(() => {
  self.viewCount = fixViewCount(props.count)
  createView()
})

watch(props, (newValue, oldValue) => {
  if (newValue.count !== oldValue.count) {
    self.viewCount = fixViewCount(newValue.count)
    createView()
  }
})

watch(self, newValue => {
  if (newValue.viewCount === 1) {
    if (self.viewMax) {
      const index = self.viewMax.index
      self.videos[index].cls = calcCls(index)
    }
    self.viewMax = undefined
  }
})

defineExpose({
  apply,
  clear,
  close,
  filled,
  getEarlyView,
  getIdleView,
  getName,
  getPlayerById,
  getPlaying,
  getSelected,
  getViewCount,
  muted,
  play,
  stop
})
</script>
<style lang="scss">
$controlHeight: 56px;
$borderColor: #373d3d;
$controlColor: #202020;

.v3m-monitor {
  width: 100%;
  height: 100%;
  position: relative;

  .v3m-control {
    width: 100%;
    height: $controlHeight;
    background: $controlColor;
    border-top: 1px solid $borderColor;
    box-sizing: border-box;
    overflow: hidden;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    li {
      float: left;
      padding: 11px 10px;
    }

    li a {
      display: inline-block;
      vertical-align: middle;
      width: 32px;
      height: 32px;

      background-image: url(data:image/png;base64,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);
      filter: grayscale(1) brightness(1.5);
    }

    li:hover {
      background-color: #111;
      a {
        filter: brightness(1.5);
      }
    }

    .v3m-separator {
      padding: 15px 5px;
      span {
        display: block;
        width: 2px;
        height: 24px;
        background: $borderColor;
      }
    }
    .v3m-separator:hover {
      background-color: $controlColor;
    }

    .v3m-icon-s1 {
      background-position: 0px 0px;
    }

    .v3m-icon-s4 {
      background-position: -32px 0px;
    }

    .v3m-icon-s6 {
      background-position: -64px 0px;
    }

    .v3m-icon-s8 {
      background-position: -96px 0px;
    }

    .v3m-icon-s9 {
      background-position: -128px 0px;
    }

    .v3m-icon-s10 {
      background-position: -160px 0px;
    }

    .v3m-icon-s16 {
      background-position: -192px 0px;
    }

    .v3m-icon-s25 {
      background-position: 0px -32px;
    }

    .v3m-icon-s36 {
      background-position: -32px -32px;
    }

    .v3m-icon-s64 {
      background-position: -64px -32px;
    }

    .v3m-icon-mute {
      background-position: 0px -64px;
    }

    .v3m-icon-stop {
      background-position: -32px -64px;
    }

    .v3m-icon-clear {
      background-position: -64px -64px;
    }

    .v3m-icon-fill {
      background-position: -96px -64px;
    }
  }

  &.v3m-control-top {
    .v3m-view {
      top: $controlHeight;
    }
    .v3m-control {
      border-top: none;
      border-bottom: 1px solid $borderColor;
      position: absolute;
      top: 0;
    }
  }

  &.v3m-control-hide {
    .v3m-view {
      top: 0;
      height: 100%;
    }
    .v3m-control {
      display: none;
    }
  }

  .v3m-view {
    height: calc(100% - #{$controlHeight});
    overflow: hidden;
    position: relative;

    .v3d-player {
      float: left;
      font-size: 12px;
      background: black;
    }

    &.v3m-fill {
      .v3d-player {
        .dplayer-video-wrap {
          video {
            object-fit: fill;
          }
        }
      }
    }

    .v3m-border {
      position: absolute;
      background-color: $borderColor;
      z-index: 5;
      pointer-events: none;
    }

    .v3m-h {
      height: 1px;
      width: 100%;
    }

    .v3m-v {
      width: 1px;
      height: 100%;
    }

    &.v3m-max {
      .v3d-player {
        height: 100% !important;
        width: 100% !important;

        .v3d-focus-show {
          display: none;
        }
      }

      .v3m-border,
      .v3m-m1,
      .v3m-m4,
      .v3m-m6,
      .v3m-m8,
      .v3m-m9,
      .v3m-m10,
      .v3m-m16,
      .v3m-m25,
      .v3m-m36,
      .v3m-m64 {
        display: none;
      }

      .v3d-max {
        display: block;
      }
    }

    &.v3m-1s {
      .v3d-player {
        height: 100%;
        width: 100%;

        .v3d-focus-show {
          display: none;
        }
      }

      .v3m-border,
      .v3m-m4,
      .v3m-m6,
      .v3m-m8,
      .v3m-m9,
      .v3m-m10,
      .v3m-m16,
      .v3m-m25,
      .v3m-m36,
      .v3m-m64 {
        display: none;
      }
    }

    &.v3m-4s {
      .v3d-player {
        height: 50%;
        width: 50%;
      }

      .v3m-h2,
      .v3m-h3,
      .v3m-h4,
      .v3m-h5,
      .v3m-h6,
      .v3m-h7,
      .v3m-v2,
      .v3m-v3,
      .v3m-v4,
      .v3m-v5,
      .v3m-v6,
      .v3m-v7,
      .v3m-m6,
      .v3m-m8,
      .v3m-m9,
      .v3m-m10,
      .v3m-m16,
      .v3m-m25,
      .v3m-m36,
      .v3m-m64 {
        display: none;
      }

      .v3m-h1 {
        top: 50%;
      }

      .v3m-v1 {
        left: 50%;
      }
    }

    &.v3m-6s {
      .v3d-player {
        height: 33.33%;
        width: 33.33%;
      }

      .v3m-s0 {
        height: 66.65%;
        width: 66.66%;
      }

      .v3m-h3,
      .v3m-h4,
      .v3m-h5,
      .v3m-h6,
      .v3m-h7,
      .v3m-v3,
      .v3m-v4,
      .v3m-v5,
      .v3m-v6,
      .v3m-v7,
      .v3m-m8,
      .v3m-m9,
      .v3m-m10,
      .v3m-m16,
      .v3m-m25,
      .v3m-m36,
      .v3m-m64 {
        display: none;
      }

      .v3m-h1 {
        top: 33.33333%;
        left: 66.66666%;
      }

      .v3m-h2 {
        top: 66.66666%;
      }

      .v3m-v1 {
        left: 33.33333%;
        top: 66.66666%;
      }

      .v3m-v2 {
        left: 66.66666%;
      }
    }

    &.v3m-8s {
      .v3d-player {
        height: 25%;
        width: 25%;

        .v3d-shade {
          .v3d-center {
            left: calc(50% - 25px);
            top: calc(50% - 25px);
            .svg-center {
              width: 50px;
              height: 50px;
            }
          }
        }
      }

      .v3m-s0 {
        height: 75%;
        width: 75%;
      }

      .v3m-h4,
      .v3m-h5,
      .v3m-h6,
      .v3m-h7,
      .v3m-v4,
      .v3m-v5,
      .v3m-v6,
      .v3m-v7,
      .v3m-m9,
      .v3m-m10,
      .v3m-m16,
      .v3m-m25,
      .v3m-m36,
      .v3m-m64 {
        display: none;
      }

      .v3m-h1 {
        top: 25%;
        left: 75%;
      }

      .v3m-h2 {
        top: 50%;
        left: 75%;
      }

      .v3m-h3 {
        top: 75%;
      }

      .v3m-v1 {
        left: 25%;
        top: 75%;
      }

      .v3m-v2 {
        left: 50%;
        top: 75%;
      }

      .v3m-v3 {
        left: 75%;
      }
    }

    &.v3m-9s {
      .v3d-player {
        height: 33.33%;
        width: 33.33%;

        .v3d-shade {
          .v3d-center {
            left: calc(50% - 25px);
            top: calc(50% - 25px);
            .svg-center {
              width: 50px;
              height: 50px;
            }
          }
        }
      }

      .v3m-h3,
      .v3m-h4,
      .v3m-h5,
      .v3m-h6,
      .v3m-h7,
      .v3m-v3,
      .v3m-v4,
      .v3m-v5,
      .v3m-v6,
      .v3m-v7,
      .v3m-m10,
      .v3m-m16,
      .v3m-m25,
      .v3m-m36,
      .v3m-m64 {
        display: none;
      }

      .v3m-h1 {
        top: 33.33333%;
      }

      .v3m-h2 {
        top: 66.66666%;
      }

      .v3m-v1 {
        left: 33.33333%;
      }

      .v3m-v2 {
        left: 66.66666%;
      }
    }

    &.v3m-10s {
      .v3d-player {
        height: 25%;
        width: 25%;

        .v3d-shade {
          .v3d-center {
            left: calc(50% - 25px);
            top: calc(50% - 25px);
            .svg-center {
              width: 50px;
              height: 50px;
            }
          }
        }
      }

      .v3m-s0,
      .v3m-s1 {
        height: 50%;
        width: 50%;
      }

      .v3m-h3,
      .v3m-h4,
      .v3m-h5,
      .v3m-h6,
      .v3m-h7,
      .v3m-v4,
      .v3m-v5,
      .v3m-v6,
      .v3m-v7,
      .v3m-m16,
      .v3m-m25,
      .v3m-m36,
      .v3m-m64 {
        display: none;
      }

      .v3m-h1 {
        top: 50%;
      }

      .v3m-h2 {
        top: 75%;
      }

      .v3m-v1 {
        left: 25%;
        top: 50%;
      }

      .v3m-v2 {
        left: 50%;
      }

      .v3m-v3 {
        left: 75%;
        top: 50%;
      }
    }

    &.v3m-16s {
      .v3d-player {
        height: 25%;
        width: 25%;

        .v3d-shade {
          .v3d-center {
            left: calc(50% - 25px);
            top: calc(50% - 25px);
            .svg-center {
              width: 50px;
              height: 50px;
            }
          }
        }
      }

      .v3m-h4,
      .v3m-h5,
      .v3m-h6,
      .v3m-h7,
      .v3m-v4,
      .v3m-v5,
      .v3m-v6,
      .v3m-v7,
      .v3m-m25,
      .v3m-m36,
      .v3m-m64 {
        display: none;
      }

      .v3m-h1 {
        top: 25%;
      }

      .v3m-h2 {
        top: 50%;
      }

      .v3m-h3 {
        top: 75%;
      }

      .v3m-v1 {
        left: 25%;
      }

      .v3m-v2 {
        left: 50%;
      }

      .v3m-v3 {
        left: 75%;
      }
    }

    &.v3m-25s {
      .v3d-player {
        height: 20%;
        width: 20%;

        .v3d-shade {
          .v3d-center {
            left: calc(50% - 24px);
            top: calc(50% - 24px);
            .svg-center {
              width: 48px;
              height: 48px;
            }
          }
        }
      }

      .v3m-h5,
      .v3m-h6,
      .v3m-h7,
      .v3m-v5,
      .v3m-v6,
      .v3m-v7,
      .v3m-m36,
      .v3m-m64 {
        display: none;
      }

      .v3m-h1 {
        top: 20%;
      }

      .v3m-h2 {
        top: 40%;
      }

      .v3m-h3 {
        top: 60%;
      }

      .v3m-h4 {
        top: 80%;
      }

      .v3m-v1 {
        left: 20%;
      }

      .v3m-v2 {
        left: 40%;
      }

      .v3m-v3 {
        left: 60%;
      }

      .v3m-v4 {
        left: 80%;
      }
    }

    &.v3m-36s {
      .v3d-player {
        height: 16.66666%;
        width: 16.66666%;

        .v3d-shade {
          .v3d-center {
            left: calc(50% - 16px);
            top: calc(50% - 16px);
            .svg-center {
              width: 32px;
              height: 32px;
            }
          }
        }
      }

      .v3m-h6,
      .v3m-h7,
      .v3m-v6,
      .v3m-v7,
      .v3m-m64 {
        display: none;
      }

      .v3m-h1 {
        top: 16.66666%;
      }

      .v3m-h2 {
        top: 33.33333%;
      }

      .v3m-h3 {
        top: 49.99999%;
      }

      .v3m-h4 {
        top: 66.66666%;
      }

      .v3m-h5 {
        top: 83.33333%;
      }

      .v3m-v1 {
        left: 16.66666%;
      }

      .v3m-v2 {
        left: 33.33333%;
      }

      .v3m-v3 {
        left: 49.99999%;
      }

      .v3m-v4 {
        left: 66.66666%;
      }

      .v3m-v5 {
        left: 83.33333%;
      }
    }

    &.v3m-64s {
      .v3d-player {
        height: 12.5%;
        width: 12.5%;

        .v3d-shade {
          .v3d-center {
            left: calc(50% - 16px);
            top: calc(50% - 16px);
            .svg-center {
              width: 32px;
              height: 32px;
            }
          }
        }

        .v3d-footer {
          .v3d-control-speed {
            display: none;
          }
        }
      }

      .v3m-h1 {
        top: 12.5%;
      }

      .v3m-h2 {
        top: 25%;
      }

      .v3m-h3 {
        top: 37.5%;
      }

      .v3m-h4 {
        top: 50%;
      }

      .v3m-h5 {
        top: 62.5%;
      }

      .v3m-h6 {
        top: 75%;
      }

      .v3m-h7 {
        top: 87.5%;
      }

      .v3m-v1 {
        left: 12.5%;
      }

      .v3m-v2 {
        left: 25%;
      }

      .v3m-v3 {
        left: 37.5%;
      }

      .v3m-v4 {
        left: 50%;
      }

      .v3m-v5 {
        left: 62.5%;
      }

      .v3m-v6 {
        left: 75%;
      }

      .v3m-v7 {
        left: 87.5%;
      }
    }
  }

  &.v3m-theme-blue {
    .v3d-player .v3d-focus {
      border-color: #1d2088;
    }
  }
}
</style>
