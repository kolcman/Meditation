import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  const counterTime = ref<number>(0);
  const counterState = ref<'play' | 'pause' | 'stop'>('pause');
  const isStarted = ref<boolean>(true);
  let interval: ReturnType<typeof setInterval> | null = null;

  function startCounter() {
    isStarted.value = true;

    if (counterState.value === 'play') {
      counterState.value = 'pause';
      if (interval) clearInterval(interval);
      interval = null;
    } else {
      counterState.value = 'play';

      if (interval) clearInterval(interval);

      interval = setInterval(() => {
        if (counterState.value === 'play' && counterTime.value > 0) {
          counterTime.value--;
        } else if (counterTime.value <= 0) {
          stopCounter();
        }
      }, 1000);
    }
  }

  function stopCounter() {
    isStarted.value = false;
    counterState.value = 'stop';
    if (interval) clearInterval(interval);
  }

  function setMinutes(minutes: number) {
    counterTime.value = Math.floor(minutes * 60);
  }

  return {
    counterTime,
    counterState,
    isStarted,
    startCounter,
    stopCounter,
    setMinutes,
  };
});
