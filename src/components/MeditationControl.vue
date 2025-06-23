<template>
  <div class="meditatiion">
    <div class="meditation__timer">5:00</div>
    <h2 class="meditation__title">TEST</h2>
    <p class="meditation__description">TEST</p>
    <div class="meditation__controls">
      <IconBackspace />
      <IconPlayBig />
      <IconRepeat />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconBackspace from '@/components/icon/iconBackspace.vue';
import IconPlayBig from '@/components/icon/IconPlayBig.vue';
import IconRepeat from '@/components/icon/IconRepeat.vue';



</script>

<style scoped>
.meditatiion {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.meditation__timer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  background-image: url('/public/bg-meditation.jpg');
  background-repeat: no-repeat;
  background-size: 250px 250px;
  border-radius: 50%;
  margin-bottom: 27px;
  font-size: 44px;
  line-height: 100%;
  letter-spacing: 0%;
}

.meditation__title {
  padding: 0;
  font-weight: 500;
  font-size: 35px;
  line-height: 100%;
  letter-spacing: 0%;
  margin-bottom: 10px;
}

.meditation__description {
  font-weight: 400;
  font-size: 25px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: var(--color-fg-opacity05);
  margin-bottom: 27px;
}

.meditation__controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 33px;
}
</style>
