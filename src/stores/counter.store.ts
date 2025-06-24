import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  const counterTime = ref<number>(0);
  const counterState = ref<'play' | 'pause' | 'stop'>('pause');
  const isStarted = ref<boolean>(true);
  let interval: ReturnType<typeof setInterval> | null = null;
  const initialTime = ref<number>(0);

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
    const seconds = Math.floor(minutes * 60);
    counterTime.value = seconds;
    initialTime.value = seconds;
  }

  function getElapsedFullMinutes(): number {
    const elapsedSeconds = Math.max(0, initialTime.value - counterTime.value);
    return Math.floor(elapsedSeconds / 60);
  }

  return {
    counterTime,
    counterState,
    isStarted,
    startCounter,
    stopCounter,
    setMinutes,
    getElapsedFullMinutes,
  };
});
