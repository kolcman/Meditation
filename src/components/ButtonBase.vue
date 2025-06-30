<template>
  <button class="button">
    <slot />
    <div>
      <slot name='icon' />
    </div>
  </button>
</template>

<style scoped>
.button {
  background: var(--color-bg);
  color: var(--color-fg);
  font-family: var(--font), serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  cursor: pointer;
}
</style>
