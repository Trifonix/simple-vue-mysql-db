import { createRouter, createWebHistory } from 'vue-router';
import ProductsView from '../components/products-view';
import CartView from '../components/cart-view';

const routes = [
  {
    path: '/',
    name: 'ProductsView',
    component: ProductsView
  },
  {
    path: '/cart',
    name: 'CartView',
    component: CartView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
