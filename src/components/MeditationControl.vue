<template>
  <div class="meditatiion">
    <div class="meditation__timer">{{ formatTime(counterStore.counterTime) }}</div>
    <h2 class="meditation__title">{{ currentCard?.title }}</h2>
    <p class="meditation__description">{{ currentCard?.description }}</p>
    <div class="meditation__controls">
      <IconBackspace class="controls-btn" @click="stopCounter" />
      <ButtonRounded v-if="counterStore.isStarted && counterStore.counterState == 'pause'"
        @click="counterStore.startCounter">
        <IconPlayBig />
      </ButtonRounded>
      <ButtonRounded v-if="counterStore.isStarted && counterStore.counterState == 'play'"
        @click="counterStore.startCounter">
        <IconPause />
      </ButtonRounded>
      <ButtonRounded v-if="!counterStore.isStarted && counterStore.counterState == 'stop'" @click="saveStats">
        <IconCheck />
      </ButtonRounded>
      <IconRepeat class="controls-btn" @click="repeatCounter" />
    </div>
  </div>
</template>

<script setup lang="ts">

import IconBackspace from '@/components/icon/IconBackspace.vue'
import IconPause from '@/components/icon/IconPause.vue';
import IconRepeat from '@/components/icon/IconRepeat.vue';
import IconPlayBig from '@/components/icon/IconPlayBig.vue'
import ButtonRounded from '@/components/ButtonRounded.vue';
import IconCheck from './icon/IconCheck.vue';
import { useCounterStore } from '@/stores/counter.store';
import { useMeditationsStore } from '@/stores/meditation.store';
import { onMounted } from 'vue';
import { useStatsStore } from '@/stores/stats.store';
import { router } from '@/routes';

const meditationStore = useMeditationsStore()
const counterStore = useCounterStore()
const currentCard = meditationStore.currentMeditation
const statsStore = useStatsStore();

onMounted(() => {
  if (currentCard?.duration_min) {
    counterStore.setMinutes(currentCard.duration_min)
    counterStore.startCounter()
  }
})

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

function saveStats() {
  if (currentCard?.duration_min) {
    statsStore.saveDuration({ type: 'duration_min', value: currentCard.duration_min })
    meditationStore.isStarted = false
    router.push({ name: 'meditations' })
  }
}

function stopCounter() {
  counterStore.setMinutes(0)
  counterStore.stopCounter()
  meditationStore.isStarted = false
  router.push({ name: 'meditations' });
}

function repeatCounter() {
  if (currentCard?.duration_min) {
    counterStore.setMinutes(currentCard.duration_min)
    counterStore.startCounter()
  }
}

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

.controls-btn {
  scale: 1;
  transition: var(--animation);
}

.controls-btn:hover {
  scale: 1.2;
}
</style>
