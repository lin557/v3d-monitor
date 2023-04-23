<template>
  <div class="v3m-default-ready">
    <div class="v3m-ready-icon">
      <template v-if="slots.default">
        <slot></slot>
      </template>
      <template v-else>
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M512 42.666667C252.793333 42.666667 42.666667 252.793333 42.666667 512s210.126667 469.333333 469.333333 469.333333 469.333333-210.126667 469.333333-469.333333S771.206667 42.666667 512 42.666667z m196.546667 500.493333l-266.666667 176A37.333333 37.333333 0 0 1 384 688V336.033333a37.333333 37.333333 0 0 1 57.893333-31.16l266.666667 176a37.333333 37.333333 0 0 1 0 62.32z"
          ></path>
        </svg>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useSlots } from 'vue'
// 插槽
const slots = useSlots()
</script>
<style lang="scss">
.v3m-default-ready {
  position: relative;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  background-color: #010101;
  display: flex;
  justify-content: center;
  align-items: center;
  .v3m-ready-icon {
    width: 80px;
    height: 80px;

    svg {
      width: 100%;
      height: 100%;

      path {
        fill: #333;
      }
    }
  }
}
</style>
