<template>
  <ul class="stat-list">
    <li>
      <StatCard :bg-color="'var(--card-stat-minuts)'">
        <template #count>
          {{ statsStore.summary?.total_minutes }}
        </template>
        <template #img>
          <IconStatCard :color="'var(--card-stat-mimuts-bg)'" />
        </template>
        <template #text>
          Минут медитации
        </template>
      </StatCard>
    </li>
    <li>
      <StatCard :bg-color="'var(--card-stat-calm)'">
        <template #count>
          {{ statsStore.summary?.total_calm }}
        </template>
        <template #img>
          <IconStatCard :color="'var(--card-stat-calm-bg)'" />
        </template>
        <template #text>
          Спокойных дней
        </template>
      </StatCard>
    </li>
    <li>
      <StatCard :bg-color="'var(--card-stat-relax)'">
        <template #count>
          {{ statsStore.summary?.total_relax }}
        </template>
        <template #img>
          <IconStatCard :color="'var(--card-stat-relax-bg)'" />
        </template>
        <template #text>
          Расслабленных дней
        </template>
      </StatCard>
    </li>
    <li>
      <StatCard :bg-color="'var(--card-stat-focus)'">
        <template #count>
          {{ statsStore.summary?.total_focus }}
        </template>
        <template #img>
          <IconStatCard :color="'var(--card-stat-focus-bg)'" />
        </template>
        <template #text>
          Фокусированных дней
        </template>
      </StatCard>
    </li>
    <li>
      <StatCard :bg-color="'var(--card-stat-anxiety)'">
        <template #count>
          {{ statsStore.summary?.total_anxiety }}
        </template>
        <template #img>
          <IconStatCard :color="'var(--card-stat-anxiety-bg)'" />
        </template>
        <template #text>
          Тревожных дней
        </template>
      </StatCard>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useStatsStore } from '@/stores/stats.store';
import { onMounted } from 'vue';
import StatCard from '@/components/StatCard.vue';
import IconStatCard from '@/components/icon/IconStatCard.vue'

const statsStore = useStatsStore()

onMounted(() => {
  statsStore.fetchStats()
});

</script>


<style scoped>
.stat-list {
  display: flex;
  gap: 50px;
  margin: 0 50px;
  padding: 0;
  list-style: none;
  flex-wrap: wrap;
}
</style>
