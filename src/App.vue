<template>
  <div class="demo-monitor">
    <v3d-monitor></v3d-monitor>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import V3dMonitor from './v3d-monitor.vue'

</script>
<style lang="scss">
.demo-monitor {
  margin: 0 auto;
  margin-top: 50px;
  width: 800px;
  height: 600px;
  font-size: 14px;
}
</style>