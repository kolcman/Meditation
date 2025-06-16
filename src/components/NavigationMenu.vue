<template>
  <nav class="nav">
    <IconLogo class="nav__logo" />
    <ul class="nav__list">
      <li class="nav__item">
        <RouterLink class="nav__link" active-class="nav__link--active" to="/main">
          <IconPlayMini class="nav__icon" />
          <span class="nav__text">Медитация</span>
        </RouterLink>
      </li>

      <li class="nav__item">
        <RouterLink class="nav__link" active-class="nav__link--active" to="/stats">
          <IconStat class="nav__icon" />
          <span class="nav__text">Статистика</span>
        </RouterLink>
      </li>

      <li class="nav__item">
        <RouterLink class="nav__link" active-class="nav__link--active" to="/">
          <IconExit class="nav__icon" />
          <span class="nav__text">Выход</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import IconLogo from '@/components/icon/IconLogo.vue';
import IconStat from '@/components/icon/IconStat.vue';
import IconExit from '@/components/icon/IconExit.vue'
import IconPlayMini from './icon/IconPlayMini.vue';

</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  padding-top: 50px;
}

.nav__logo {
  width: 76px;
  height: 87px;
}

.nav__list {
  margin: 0;
  padding: 0;
  list-style: none;
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav__item:not(:last-child) {
  border-right: 3px solid var(--color-border);
}

.nav__link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 55px;
  height: 100%;
  color: var(--color-fg-opacity05);
  text-decoration: none;
}

.nav__link.nav__link--active,
.nav__link:hover {
  color: var(--color-fg);
}

.nav__icon {
  width: 24px;
  height: 24px;
  color: inherit;
}

.nav__text {
  font-size: 22px;
  line-height: 100%;
  letter-spacing: 0%;
}
</style>
