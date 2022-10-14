<template>
  <div class="demo">
    <v3d-monitor ref="refMonitor" :lockControl="true" :duplicate="true" />

    <div class="demo-control">
      <!-- <input type="text" class="demo-url" v-model="options.src"/> -->
      <button @click="play">play</button>
      <!-- <button @click="test">test</button> -->
    </div>
  </div>
  
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import V3dMonitor from './components/v3d-monitor.vue'

const refMonitor = ref()

const apply = () => {
  refMonitor.value.apply()
}

const play = () => {
  const opts = {
    title: '测试',
    src: 'https://www.transcodegroup.cn/test/h264.flv'
    // src: '//d2zihajmogu5jn.cloudfront.net/bipbop-advanced/gear3/prog_index.m3u8',
    // viewIndex: 1,
  }

  refMonitor.value.play(opts)
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
  }
}
</style>
