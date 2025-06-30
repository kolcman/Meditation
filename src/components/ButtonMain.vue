<template>
  <button class="btn">
    <slot class="btn-text"></slot>
  </button>
</template>

<style scoped>
.btn {
  width: fit-content;
  font-size: 25px;
  font-weight: 500;
  background-color: var(--color-btn);
  color: var(--color-fg);
  padding: 15px 55px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.btn:hover {
  background-color: var(--color-btn-hover);
}

.btn-text {
  font-family: var(--font);
  font-weight: 500;
  font-size: 25px;
  line-height: 100%;
  letter-spacing: 0%;
}
</style>
