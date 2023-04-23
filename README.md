<p align="center">
  <a href="https://www.npmjs.org/package/v3d-monitor">
    <img src="https://img.shields.io/npm/v/v3d-monitor.svg">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
</p>

# Vue 3 + TypeScript + Vite 4

Vue3 Multi-window video player



## 安装

```
npm i v3d-monitor@latest
```

or

```
npm i v3d-monitor flv.js hls.js
```

## 使用

This is a vue 3.x component that can only be used in vue 3.x

### ES Modules

Install v3d-monitor via npm and import the plugin as you would any other module. You will also need to import the stylesheet in some way.

```vue
<template>
  <div class="demo">
    <v3d-monitor ref="refMonitor" :lock-control="true" :duplicate="false" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import V3dMonitor from 'v3d-monitor'
import 'v3d-monitor/dist/style.css'
    
const refMonitor = ref()

const play = () => {
  const opts = {
    title: 'H12345D CH1',
    src: '//www.xxx.com/prog_index.m3u8'
  }
  refMonitor.value.play(opts)
}

// 如果需要 这里只是示例，你可以在任何地方调用
onMounted(() => {
  nextTick(() => {
    play()
  })
})
</script>

<style>
.demo {
  margin-top: 20px;
  box-sizing: border-box;
  padding: 20px;
  width: 1024px;
  height: 800px;
  font-size: 14px;
}
```

### 属性

| 名称                 |      类型       |  默认值   | 描述                                                         |
| -------------------- | :-------------: | :-------: | ------------------------------------------------------------ |
| closeAfterViewChange |     boolean     |   false   | 当切换窗口布局时，被隐藏的窗口自动关闭视频                   |
| controlBar           | boolean\|object |           | 控制栏参数                                                   |
| count                |     number      |     4     | 窗口分屏数量                                                 |
| duplicate            |     boolean     |   false   | 是否允许使用同一个媒体地址源（url）打开多个窗口 true=允许 false=不允许重复 |
| focused              |     boolean     |   true    | 是否显示焦点选框                                             |
| lockControl          |     boolean     |   false   | 是否显示一个常驻的工具栏                                     |
| loopCreate           |     boolean     |   true    | 是否循环创建 不管其他窗口是否打开 关掉最先打开的窗口 并播放新的视频 |
| theme                |     string      | 'default' | 主题，默认为 'default'，目前只有一个，不用配置               |

`controlBar`对象说明

- `enabled` 是否启用控制栏，默认`true`
- `position` 控制栏位置, 默认 `'bottom'`, 可选 `'top'`
- `button` 控制栏上的按钮, `'1'`, `'4'`, `'6'`, `'8'`, `'9'`, `'16'`, `'25'`, `'36'`, `'64'`, `'fill'`, `'mute'`, `'stop'`, `'clear'`

```
{
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
```



### 方法

- `apply(param: V3dApplyParam)`

  申请一个空白的窗口，成功返回窗口索引，失败返回-1

  参数说明 `V3dApplyParam`

  | 名称      |  类型  | 默认值    | 描述                                                         |
  | --------- | :----: | --------- | ------------------------------------------------------------ |
  | viewIndex | number | undefined | 优先占用指定窗口，窗口索引从 0 开始。不指定时将自动选择下标最小的空白窗口 |
  | unique    | string | none      | 唯一标识，用于同一视频源的重复判断，一般为文件名             |
  | title     | string | none      | 窗口标题，显示在底部的控制栏上                               |
  | load      | object | undefined | 配合`theme`，在加载界面上显示的文字                          |

  `load` 说明

  - `title` 主标题
  - `detail` 子标题
  - `loading` 加载文本，不写默认为 L O A D I N G

  ```
  export interface V3dLoading {
    title: string
    detail: string
    loading?: string | undefined
  }
  ```

  示例:

  ```
  const param = {
      viewIndex: 1,
      unique: 'h264.flv',
      title: 'test',
      load: {
        title: '蒙H12388D',
        detail: 'CH1 高清',
        loading: '视频加载中'
      }
  }
  ```

  

- `close(index: number)`

  关闭指定的视频窗口

  

- `clear()`

  关闭所有视频窗口

  

- `filled(fill: boolean)`

  设置视频是否全屏显示，true=全屏 false=原始比例

  

- `getEarlyView()`

  获取最早创建的窗口播放器，包括被占用 或 播放中 或 报错的窗口

  

- `getIdleView()`

  获取空闲窗口播放器

  

- `getPlayerById(index: number)`

  通过索引获取窗口播放器对象

  

- `getPlaying(unique: string)`

  通过播放信息判断窗口是否正在播放中

  

- `getSelected()`

  返回选中的窗口播放器

  

- `getViewCount()`

  返回当前的画面窗口数量

  

- `muted()`

  静音所有窗口

  

- `play(opts: V3dMonitorOptions)`

  播放视频

  参数说明`V3dMonitorOptions`

  | 名称        |           类型           | 默认值    | 描述                                         |
  | ----------- | :----------------------: | --------- | -------------------------------------------- |
  | allowPause  |         boolean          | false     | 是否显示暂停按钮                             |
  | autoRate    |         boolean          | undefined | 当缓存过多时，是否自动加速播放，以保证实时性 |
  | contextmenu | DPlayerContextMenuItem[] | undefined | 右键菜单                                     |
  | load        |          object          | undefined | 参考 `apply()` 中的说明                      |
  | order       |          number          |           | 指定播放时间顺序                             |
  | screenshot  |         boolean          | false     | 是否显示抓拍按钮                             |
  | src         |          string          | 无        | 媒体 url 地址，这是必须的                    |
  | title       |          string          | undefined | 窗口标题，将显示在控制栏上                   |
  | unique      |          string          | undefined | 唯一值，用于标识窗口的唯一性                 |
  | viewIndex   |          number          | undefined | 在指定的窗口播放                             |

  `contextmenu` 说明

  ```
  export interface DPlayerContextMenuItem {
    text: string
    link?: string | undefined
    click?: ((player: any) => void) | undefined
  }
  ```

  `load` 说明

  ```
  export interface V3dLoading {
    title: string
    detail: string
    loading?: string | undefined
  }
  ```

  示例:

  ```
  const opt = {
      title: 'prog_index.m3u8',
      src: '//d2ziha.cloud.net/bipbop-advanced/gear3/prog_index.m3u8'
  }
  ```

  

- `snapshot(index: number)`

  抓拍指定的窗口




- `splitView(count: number)`
  
  分屏,支持参数: 1, 4, 6, 8, 9, 10, 16, 25, 64

  

- `stop()`

  关闭选中的视频窗口



### 事件

无



### 插槽

> 整体布局插槽
>
> `ready`  待机状态下的界面
>
> ```vue
> <v3d-monitor>
>   <template v-slot:ready>
>     <div>abc</div>
>   </template>
> </v3d-monitor>
> ```
>
> `loading` 占用状态、加载状态下的界面
>
> ```vue
> <v3d-monitor>
>   <template v-slot:loading>
>     <div>123456</div>
>   </template>
> </v3d-monitor>
> ```



> 与皮肤结合的局部插槽
>
> `empty` 待机状态下的界面中间的图标 建议用 `svg`
>
> ```vue
> <v3d-monitor>
>   <template v-slot:empty>
>     <svg
>       viewBox="0 0 1024 1024"
>       version="1.1"
>       xmlns="http://www.w3.org/2000/svg"
>     >
>       <path
>         d="M514.048 128q79.872 0 149.504 30.208t121.856 82.432 82.432 122.368 30.208 150.016q0 78.848-30.208 148.48t-82.432 121.856-121.856 82.432-149.504 30.208-149.504-30.208-121.856-82.432-82.432-121.856-30.208-148.48q0-79.872 30.208-150.016t82.432-122.368 121.856-82.432 149.504-30.208z"
>       ></path>
>     </svg>
>   </template>
> </v3d-monitor>
> ```
>
> `logo` 加载状态下的 logo 图片
>
> ```vue
> <v3d-monitor>
>   <template v-slot:logo>
>     <img src="./assets/ic_launcher.png" />
>   </template>
> </v3d-monitor>
> ```




## 项目

setup

``` bash
npm i
```

dev

``` bash
npm run dev
```

build

``` bash
npm run build
```