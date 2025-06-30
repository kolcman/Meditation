<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

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
  scale: 1;
  transition: var(--animation);
}

.btn:hover {
  background-color: var(--color-btn-mood-hover);
  scale: 1.1;
}
</style>
