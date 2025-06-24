<template>
  <div class="card">
    <div class="card__top">
      <h2 class="card__title">{{ title }}</h2>
      <p class="card__description">{{ description }}</p>
    </div>
    <div class="card__bottom">
      <ButtonBase class="card__btn" @click="startMeditation">
        Начать
        <IconPlay />
      </ButtonBase>
      <span class="card__duration">{{ duration_min }} min</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonBase from '@/components/ButtonBase.vue';
import IconPlay from '@/components/icon/IconPlay.vue';
import { router } from '@/routes';
import { useMeditationsStore } from '@/stores/meditation.store';

const { id, title, description, duration_min } = defineProps<{
  id: number;
  title: string;
  description: string;
  duration_min: number;
}>()

const meditationStore = useMeditationsStore();

function startMeditation() {
  meditationStore.startMeditation({
    ID: id,
    title: title,
    description: description,
    duration_min: duration_min
  });
  meditationStore.isStarted = true
  router.push({ name: 'timer' });
}
</script>

<style scoped>
.card {
  width: 300px;
  height: auto;
  min-height: 170px;
  padding: 22px 30px;
  border-radius: 20px;
  background: var(--color-card-bg);
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 500;
  line-height: 100%;
}

.card__title {
  font-size: 25px;
  margin-bottom: 5px;
}

.card__description {
  font-size: 15px;
  margin-bottom: 16px;
}

.card__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  gap: 11px;
  padding: 11px 17px 11px 27px;
  border: none;
  border-radius: 10px;
}

.card__btn:hover {
  background: var(--color-bg-hover);
}

.card__duration {
  font-size: 15px;
  color: var(--color-bg);
}
</style>
