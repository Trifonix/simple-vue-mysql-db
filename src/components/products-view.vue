<template>
    <div>
      <h2>Товары</h2>
      <div v-for="product in products" :key="product.id">
        <p>{{ product.name }} --- {{ product.price }}</p>
        <button @click="addToCart(product.id)">Добавить товар в корзину</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: []
      };
    },
    mounted() {
      this.fetchProducts();
    },
    methods: {
      fetchProducts() {
        fetch('http://localhost:3000/products')
          .then(response => response.json())
          .then(data => {
            this.products = data;
          });
      },
      addToCart(productId) {
        fetch('http://localhost:3000/addToCart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ productId })
        }).then(() => {
          alert('Товар добавлен в корзину');
        });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Стили */
  </style>
  