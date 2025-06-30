<template>
  <div class="stat-card" :style="{ backgroundColor: bgColor.bgColor }">
    <div class="stat-card__count">
      <slot name="count"></slot>
    </div>
    <div class="stat-card__img">
      <slot name="img"></slot>
      <div class="stat-card__text">
        <slot name="text"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface bgColor {
  bgColor: string
}
const bgColor = defineProps<bgColor>()

</script>

<style scoped>
.stat-card {
  width: 300px;
  height: 200px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  overflow: hidden;
}

.stat-card__count {
  font-weight: 700;
  font-size: 80px;
  text-align: right;
  padding: 0 20px;
}

.stat-card__img {
  position: relative;

}

.stat-card__text {
  position: absolute;
  left: 20px;
  top: 40%;
  transform: translateY(-50%);
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
}
</style>
