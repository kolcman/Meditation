<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

</script>

<style scoped>
.btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 20px;
  background-color: var(--color-fg);
  color: var(--color-bg);
  border: none;
  cursor: pointer;
}
</style>
