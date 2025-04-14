import { createApp } from 'vue';  // Import createApp for Vue 3
import App from './App.vue';
import router from './router';
import store from './store';  // Import the store correctly

const app = createApp(App);
app.use(router);
app.use(store);  // Make sure to call app.use(store)
app.mount('#app');
