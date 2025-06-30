<template>
  <div class="card">
    <div class="card__top">
      <h2 class="card__title">{{ title }}</h2>
      <p class="card__description">{{ description }}</p>
    </div>
    <div class="card__bottom">
      <ButtonBase class="card__btn">
        Начать
        <IconPlay />
      </ButtonBase>
      <span class="card__duration">{{ duration }} min</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonBase from '@/components/icon/ButtonBase.vue';
import IconPlay from '@/components/icon/IconPlay.vue';

const { title, description, duration } = defineProps({
  title: String,
  description: String,
  duration: Number
})



</script>

<style scoped>
.card {
  width: 340px;
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
