<template>
  <div class="demo">
    <v3d-monitor ref="refMonitor" :lockControl="true" :duplicate="false" />

    <div class="demo-control">
      <!-- <input type="text" class="demo-url" v-model="options.src"/> -->
      <button @click="apply">apply</button>
      <button @click="play(0)">play(0)</button>
      <button @click="play(1)">play(1)</button>
      <button @click="play(2)">play(2)</button>
      <button @click="play(3)">play(3)</button>
    </div>
  </div>
  
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import V3dMonitor from './components/v3d-monitor.vue'

const refMonitor = ref()

const apply = () => {
  refMonitor.value.apply({ unique: 'h264.flv', title: 'aaa' })
}

const play = (index: number) => {
  const opts = [
    {
      title: 'prog_index.m3u8',
      // src: 'https://www.transcodegroup.cn/test/h264.flv'
      src: '//d2zihajmogu5jn.cloudfront.net/bipbop-advanced/gear3/prog_index.m3u8',
      // viewIndex: 1,
    },
    {
      title: 'h264.flv',
      src: 'https://www.transcode.cn/test/h264.flv'
    },
    {
      title: '蒙H12388D CH1',
      src: 'https://xn.transcode.cn:8586/mdvr/live/15888_1.flv'
    },
    {
      title: '蒙H12388D CH2',
      src: 'https://xn.transcode.cn:8586/mdvr/live/15888_2.flv'
    }
  ]

  refMonitor.value.play(opts[index])
}

</script>
<style lang="scss">
.demo {
  margin-top: 50px;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  height: 800px;
  font-size: 14px;

  .demo-control {
    margin-top: 10px;
    button {
      margin-right: 6px;
    }
  }
}
</style>
