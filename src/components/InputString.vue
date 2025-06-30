<template>
  <input class="input-string" v-model="data">
</template>

<script setup lang="ts">
const data = defineModel<string>()
</script>

<style scoped>
.input-string {
  padding: 10px;
  background: none;
  border: none;
  border-bottom: 1px solid var(--color-fg);
  width: 300px;
  outline: none;
  color: var(--color-fg);
}

.input-string::placeholder {
  color: var(--color-placeholder);
  font-family: var(--font);
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
}
</style>
