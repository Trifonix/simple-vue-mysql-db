<template>
  <div id="app">
    <router-link to="/">Товары</router-link> |
    <router-link to="/cart">Корзина</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* Стили */
</style>
