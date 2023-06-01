<template>
  <div class="v3d-error">
    <div class="v3d-error-msg"><slot name="message"></slot></div>
    <button class="v3d-error-btn" @click.stop="handleClick">
      <slot name="refresh"></slot>
    </button>
  </div>
</template>
<script lang="ts" setup>
const emits = defineEmits(['refresh'])

const handleClick = () => {
  emits('refresh')
}
</script>

<style lang="scss">
.v3d-error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;

  .v3d-error-msg {
    color: #ddd;
    padding: 10px 0;
  }

  .v3d-error-btn {
    background-color: transparent;
    border-radius: 4px;
    padding: 5px 10px;
    min-width: 85px;
    border: 1px solid #7ca0ba;
    color: #7ca0ba;
    box-sizing: border-box;
    cursor: pointer;
  }

  .v3d-error-btn:hover {
    border-color: #409eff;
    color: #409eff;
    background-color: rgba($color: #409eff, $alpha: 0.1);
  }

  .v3d-error-btn:active {
    border-color: #2491ff;
    color: #2491ff;
    background-color: rgba($color: #2491ff, $alpha: 0.2);
  }
}
</style>
