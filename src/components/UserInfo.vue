<template>
  <div class="user-info">
    <img class="user-avatar" src="../../public/avatar.png" alt="Автар">
    <span class="user-welcome">Добро пожаловать, {{ profileStore.profile?.data.user.username }}!</span>
    <span class="user-question">Как вы сегодня себя чувствуете?</span>
    <ul class="user-state">
      <li class="list-item">
        <ButtonMood @click="saveState('calm')">
          <IconYinYang />
        </ButtonMood>
        Спокойно
      </li>
      <li class="list-item">
        <ButtonMood @click="saveState('relax')">
          <IconRelax />
        </ButtonMood>
        Расслабленно
      </li>
      <li class="list-item">
        <ButtonMood @click="saveState('focus')">
          <IconFocus />
        </ButtonMood>
        Фокусировано
      </li>
      <li class="list-item">
        <ButtonMood @click="saveState('anxiety')">
          <IconAnxios />
        </ButtonMood>
        Тревожно
      </li>
    </ul>
  </div>
</template>


<script setup lang="ts">
import ButtonMood from '@/components/ButtonMood.vue'
import IconYinYang from './icon/IconYinYang.vue';
import IconRelax from './icon/IconRelax.vue';
import IconFocus from './icon/IconFocus.vue';
import IconAnxios from './icon/IconAnxios.vue';
import { useProfileStore } from '@/stores/profile.store';
import { onMounted } from 'vue';
import { useStatsStore } from '@/stores/stats.store';

const profileStore = useProfileStore()
const statsStore = useStatsStore()

onMounted(() => {
  profileStore.getUserProfile()
})


function saveState(action: 'calm' | 'relax' | 'focus' | 'anxiety') {
  switch (action) {
    case 'calm':
      statsStore.saveState({
        type: 'feeling_calm',
        value: 1,
      })
      console.log('1');
      break;
    case 'relax':
      statsStore.saveState({
        type: 'feeling_relax',
        value: 1,
      })
      console.log('2');
      break
    case 'focus':
      statsStore.saveState({
        type: 'feeling_focus',
        value: 1,
      })
      console.log('3');
      break
    case 'anxiety':
      statsStore.saveState({
        type: 'feeling_anxiety',
        value: 1,
      })
      console.log('4');
      break
  }
}

</script>

<style scoped>
.user-info {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.user-avatar {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-bottom: 30px;
}


.user-welcome {
  font-family: var(--font);
  font-weight: 500;
  font-size: 30px;
  line-height: 100%;
  letter-spacing: 0%;
  margin-bottom: 5px;
}

.user-question {
  font-weight: 400;
  font-size: 22px;
  line-height: 100%;
  letter-spacing: 0%;
  opacity: 70%;
  margin-bottom: 40px;
}


.user-state {
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  gap: 22px;
}


.list-item {
  font-family: var(--font);
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
}
</style>
