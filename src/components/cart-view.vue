<template>
    <div>
      <h2>Корзина</h2>
      <div v-for="item in cartItems" :key="item.id">
        <p>Номер товара в корзине - {{ item.product_id }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cartItems: []
      };
    },
    mounted() {
      this.fetchCartItems();
    },
    methods: {
      fetchCartItems() {
        fetch('http://localhost:3000/cart')
          .then(response => response.json())
          .then(data => {
            this.cartItems = data;
          });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Стили */
  </style>
  