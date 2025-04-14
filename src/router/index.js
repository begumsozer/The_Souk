// src/router/index.js
/* eslint-disable */ 
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';
import LoginForm from '../components/LoginForm.vue';
import RegisterForm from '../components/RegisterForm.vue';
import ProductPage from '../components/ProductPage.vue';
import GroupPage from '../components/GroupPage.vue';
import SearchPage from '../components/SearchPage.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,  // Set HomePage as the default page
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,  // Set AboutPage as the default page
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm,  // Login route
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterForm,  // Register route
  },
  {
    path: '/product',
    name: 'Product',
    component: ProductPage,  // Product page route
  },
  {
    path: '/group',
    name: 'Group',
    component: GroupPage,  // Group page route
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchPage,  // Search page route
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
