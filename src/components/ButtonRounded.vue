<template>
  <button class="btn-rounded">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

</script>

<style scoped>
.btn-rounded {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-fg);
  width: 75px;
  height: 75px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  scale: 1;
  transition: var(--animation);
}

.btn-rounded:hover {
  background-color: var(--color-btn-mood-hover);
  scale: 1.1;
}
</style>
